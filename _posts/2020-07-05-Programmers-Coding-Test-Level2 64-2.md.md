---
layout: post
title:  "[코딩 테스트] 프로그래머스 코딩 테스트 연습 level 2. 프린터"
date:   2020-07-05 19:28:34 
categories: Python Coding-test Programmers
use_math: true
---

**_Description_ : 프로그래머스 코딩 테스트 level 2 연습 문제 (2/64)**

* [프린터](#problem-description)
* [나의 풀이](#my-solution)
* [다른 사람들의 풀이](#problem-solution)
* [새로 배운 내용](#deep)

***

## 기능개발 <a id="problem-description"></a>

### 문제 설명
일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 이런 문제를 보완하기 위해 **중요도가 높은 문서를 먼저 인쇄**하는 프린터를 개발했습니다. 이 새롭게 개발한 프린터는 **아래와 같은 방식**으로 인쇄 작업을 수행합니다.


1. 인쇄 대기 목록의 **가장 앞에 있는 문서(J)**를 대기 목록에서 꺼낸다.
2. 나머지 **인쇄 대기 목록**에서 **J보다 중요도가 높은 문서가 한 개라도** 존재하면 **J**를 대기목록의 **가장 마지막에** 넣습니다.
3. 그렇지 않으면 J를 인쇄한다.

예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.

내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.

현재 대기목록에 있는 문서의 **중요도가 순서대로 담긴 배열 priorities**와 내가 인쇄를 요청한 문서가 **현재** 대기목록의 어떤 **위치**에 있는지를 알려주는 **location**이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.

### 제한사항

- 현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
- 인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
- location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.

### 입출력 예

| priorities | location | return |
| ---------- | -------- | ------ |
| `[2, 1, 3, 2]` | `2` | `1` |
| `[1, 1, 9, 1, 1, 1]` | `0` | `5` |

---

## 나의 풀이 <a id = "my-solution"></a>

```python
def solution(priorities, location):
    answer = 0
    q = []
    for i in range(len(priorities)):
        q.append((i, priorities[i]))    # 리스트 안에 튜플, 우선 순위 큐 생성

    while True:
        if q[0][1] >= max(priorities):  # 지금 맨 앞에 있는 값이 중요도가 가장 높을 경우
            answer += 1
            if q[0][0] == location:     # 그리고 그 값의 위치가, 본래 원한 location일 경우, anwer를 반환
                return answer
            priorities[q[0][0]] = 0     # location이 아직 아닌 경우에는, max 값 계산에 포함되지 않도록 해당 위치 중요도 값을 0으로 바꾼다.
            del q[0]  # 그러고 나서 인쇄
        else:
            q.append(q[0]) 
            del q[0]  # location의 값을 상수처럼 생각하고 풀었기 때문에 큐를 조작
            
    return answer

```

---

## 다른 사람들의 풀이 <a id="problem-solution"></a>

### 풀이【1】

```python
# deque 방식

def solution(p, l):
    ans = 0
    m = max(p)
    while True:
        v = p.pop(0)  # v is p[0] and del p[0]
        if m == v:    # 만약 p 중 최댓값과 맨 앞에 있는 값이 같을 경우
            ans += 1  # 인쇄 가능! 그러므로 answer, 횟수 추가
            if l == 0:  # 위치, l이 0일 경우 break
                break
            else: 
                l -= 1  # 아니면 l 값 변경. del p[0] 했으므로 앞으로 1칸 당겨진다
            m = max(p)  # m 다시 구하기
        else: # 인쇄 불가능!
            p.append(v) # 뒤로 보내기
            if l == 0:  # 0 이었다면 맨 뒤로
                l = len(p)-1
            else: # 0은 아니었으면, 그냥 -1
                l -= 1
    return ans
```

### 풀이【2】

```python
def solution(priorities, location):
    queue =  [(i,p) for i,p in enumerate(priorities)] # enumerate() 공부했었는데 잊어버렸다.
    answer = 0
    while True:
        cur = queue.pop(0)  # 이 풀이도 deque 방식
        if any(cur[1] < q[1] for q in queue): # any()
            queue.append(cur)
        else:
            answer += 1
            if cur[0] == location:
                return answer
```

---

## 새로 배운 내용 <a id="deep"></a>

### deque

`Deque`는 double-ended queue의 줄임말로, 앞과 뒤에서, 즉 양방향에서 데이터를 처리할 수 있는 queue 형 자료구조를 의미한다. 

`python`에서 `collectons.deque`는 `list`와 비슷하다. `list`의 `append(), pop()` 등 메소드를 `deque`에서도 제공한다. 

```python
>>> from collections import deque

>>> d = deque('ghi')
>>> for elem in d:
	print(elem.upper())
	
G
H
I

>>> d.append('j')
>>> d.appendleft('f')
>>> d
deque(['f', 'g', 'h', 'i', 'j'])

>>> d.pop()
'j'
>>> d.popleft()
'f'
>>> list(d)
['g', 'h', 'i']
>>> list(reversed(d))
['i', 'h', 'g']
>>> d.extend('jki')
>>> d
deque(['g', 'h', 'i', 'j', 'k', 'l'])
>>> d.rotate(1)
>>> d
deque(['l', 'g', 'h', 'i', 'j', 'k'])
```

### `any(iterableValue)`

`any(iterableValue)`는 전달 받은 자료형의 element 중 하나라도 True일 경우 True를 돌려준다. (argument로 넘겨준 게 empty 값인 경우, `False`를 돌려준다.)

```python
# 내부 구현
def any(iterable):
    for element in iterable:
        if element:
            return True
    return False
```
