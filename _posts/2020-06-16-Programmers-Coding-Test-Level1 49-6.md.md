---
layout: post
title:  "[코딩 테스트] 프로그래머스 코딩 테스트 연습 level 1. 같은 숫자는 싫어"
date:   2020-06-16 17:14:34 
categories: Python Coding-test Programmers
use_math: true
---

**_Description_ : 프로그래머스 코딩 테스트 level 1 연습 문제 (6/49)**

* [같은 숫자는 싫어](#problem-description)
* [나의 풀이](#my-solution)
* [다른 사람들의 풀이](#problem-solution)
* [새로 배운 내용](#deep)

***

## 같은 숫자는 싫어 <a id="problem-description"></a>

### 문제 설명
배열 arr가 주어집니다. 배열 arr의 각 원소는 **숫자 0부터 9까지**로 이루어져 있습니다. 이때, 배열 arr에서 **연속적으로 나타나는 숫자**는 **하나만 남기고 전부 제거**하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 **순서를 유지**해야 합니다. 예를 들면,

-   `arr = [1, 1, 3, 3, 0, 1, 1]` 이면 `[1, 3, 0, 1]` 을 return 합니다.
-   `arr = [4, 4, 4, 3, 3]` 이면 `[4, 3]` 을 return 합니다.

배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

### 제한 사항
-   배열 arr의 크기 : 1,000,000 이하의 자연수
-   배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

### 입출력 예

| arr | answer |
| --- | ------ |
| `[1, 1, 3, 3, 0, 1, 1]` | `[1, 3, 0, 1]` |
| `[4, 4, 4, 3, 3]` | `[4, 3]` |

***
## 나의 풀이 <a id="my-solution"></a>

```python
def solution(arr):
	answer = []
	for idx in range(len(arr)-1):
		if arr[idx] == arr[idx + 1]:
			arr[idx] = -1
			# 연속된 수들 중 앞쪽 것을 제거하는 방식이다.
		else:
			answer.append(arr[idx])
			# 연속된 수들 중 맨 마지막 수를 answer 리스트에 넣는다.
	answer.append(arr[idx+1])
	# 마지막 반복이 끝나고 나서 포함되지 않고 남은 수 하나를 마저 넣는다.
	return answer
```

***

## 다른 사람들의 풀이 <a id='problem-solution'></a>

### 풀이【1】
```python
def solution(arr):
    a = []
    for i in arr:
        if a[-1:] == [i]: continue
        # continue 사용을 보면서 내가 너무 어렵게 생각했었다는 걸 알게 되었다. 
        a.append(i)
        # ▲
    return a
```

▲ `if`문 조건 안에 `continue`문이 있고, 그 바깥에 `append`함수가 있으므로 똑같은 수일 때는 반복문 조건을 수행해서 arr 인덱스가 하나 커지고, 똑같은 수가 아닐 때 정답 배열에 그 수를 추가하는 순리적인 풀이다.

***

## 새로 배운 내용 <a id='deep' ></a>

### 인덱스 슬라이싱
 
```python 
>>> word = 'Python'
>>> word
'Python'
>>> # 문자열 인덱스
>>> word[0]
'P'
>>> word[5]
'n'
>>> word[-1]	# !
'n'
>>> word[-2]	# !
'o'
>>> word[-6]	# !
'P'
>>> # 문자열 슬라이싱
>>> word[0:2]
'Py'
>>> word[2:5]
'tho'
>>> word[2:6]
'thon'
>>> word[:]
'Python'
>>> word[:2]
'Py'
>>> word[4:]	# !
'on'
>>> word[-2:]	# !
'on'
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbODE3ODc0ODUwLC0xNTU1MTU2MzQ3LDE1NT
A2ODQ3ODEsMTc4NTE2NjIzOF19
-->