---
layout: post
title:  "[코딩 테스트] 프로그래머스 코딩 테스트 연습 level 2. 기능 개발"
date:   2020-06-23 21:57:34 
categories: Python Coding-test Programmers
use_math: true
---

**_Description_ : 프로그래머스 코딩 테스트 level 2 연습 문제 (1/64)**

* [기능개발](#problem-description)
* [나의 풀이](#my-solution)
* [다른 사람들의 풀이](#problem-solution)
* [새로 배운 내용](#deep)

***

## 기능개발 <a id="problem-description"></a>

### 문제 설명

프로그래머스 팀에서는 **기능 개선 작업**을 수행 중입니다. 각 기능은 **진도가 100%일 때 서비스에 반영**할 수 있습니다. 

또, 각 기능의 **개발속도는 모두 다르기 때문에** 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 **앞에 있는 기능이 배포될 때 함께 배포**됩니다.

**먼저 배포되어야 하는 순서**대로 **작업의 진도가 적힌 정수 배열 progresses**와 **각 작업의 개발 속도가 적힌 정수 배열 speeds**가 주어질 때 **각 배포마다 몇 개의 기능이 배포되는지**를 return 하도록 solution 함수를 완성하세요.

### 제한 사항
-   작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
-   작업 진도는 100 미만의 자연수입니다.
-   작업 속도는 100 이하의 자연수입니다.
-   **배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다**고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

### 입출력 예

| progresses | speeds | return |
| [93, 30, 55] | [1, 30, 5] | [2, 1] |

***

## 나의 풀이 <a id='my-solution'></a>

```python
def solution(progresses, speeds):
    answer = []
    while progresses:	
    # ▲ 빈 리스트가 아닐 때
        for idx in range(len(progresses)):
            progresses[idx] += speeds[idx]	
            # ▲ 작업 진도가 하루가 지나면서 작업 속도만큼 나감.
        if progresses[0] >= 100:	
        # ▲ 맨 앞 기능이 배포될 때
            temp = 0
            for idx in range(len(progresses)):
                if progresses[0] >= 100:
	                # ▲ 진도가 100%인 것 앞쪽부터 함께 배포, 즉 연속적으로 100 이상인 값들 delete
                    del progresses[0]
                    del speeds[0]
                    temp += 1
                    # ▲ 동시에 배포된 기능 개수 
            answer.append(temp)
    return answer
```

***

## 다른 사람들의 풀이 <a id='problem-solution'></a>

```python 
def solution(progresses, speeds):
    print(progresses)
    print(speeds)
    answer = []
    time = 0
    count = 0
    while len(progresses)> 0:
        if (progresses[0] + time*speeds[0]) >= 100:
            progresses.pop(0)
            speeds.pop(0)
            count += 1
        else:
            if count > 0:
                answer.append(count)
                count = 0
            time += 1
    answer.append(count)
    return answer
```

▲ 가장 이해가 잘 되면서 가장 명확한 solution 코드이다.

***

## 새로 배운 내용 <a id='deep'></a>

### 파이썬으로 구현한 스택



```python
>>> stk = []
>>> stk.append(1)
>>> stk.append(2)
>>> stk.append(3)
>>> print(stk)
[1, 2, 3]
>>> print(stk.pop())
3
>>> print(stk.pop())
2
>>> print(stk)
[1]
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTIyNDI3NzE5MywxOTE1MDk2NDg1LDEwMT
g5NTIwMTcsOTA1OTY3NTgzLDEyNTA1NjYyODMsMTQ0MTg1MTI4
NCwtMTAxOTE5ODA2NSw0NTcwNzIzNjIsLTI0MDUxNTMyOV19
-->