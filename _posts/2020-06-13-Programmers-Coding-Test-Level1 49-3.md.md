---
layout: post
title:  "[코딩 테스트] 프로그래머스 코딩 테스트 연습 level 1. 모의고사"
date:   2020-06-13 21:51:34 
categories: Python Coding-test Programmers Brute-Force-Search
use_math: true
---

**_Description_ : 프로그래머스 코딩 테스트 level 1 연습 문제 (3/49)**

* [모의고사](#problem-description)
* [나의 풀이](#my-solution)
* [다른 사람들의 풀이](#problem-solution)
* [새로 배운 내용](#deep)

***

## 모의고사 <a id="problem-description"></a>

### 문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 **찍는 방식**: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...  
2번 수포자가 **찍는 방식**: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...  
3번 수포자가 **찍는 방식**: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 **정답이** 순서대로 **들은 배열 answers**가 주어졌을 때, **가장 많은 문제를 맞힌 사람이 누구인지** 배열에 담아 return 하도록 solution 함수를 작성해주세요.

### 제한 조건

-   시험은 최대 10,000 문제로 구성되어있습니다.
-   문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
-   **가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.**

### 입출력 예시

| answers | return |
| ------- | ------ |
| `[1, 2, 3, 4, 5]` | `[1]` |
| `[1, 3, 2, 4, 2]` | `[1, 2, 3]` |

***
## 나의 풀이 <a id="my-solution"></a>

```python
import math

def solution(answers):
    m1 = [1, 2, 3, 4, 5] * (math.trunc(len(answers)/5) + 1)
    m2 = [2, 1, 2, 3, 2, 4, 2, 5] * (math.trunc(len(answers)/8) + 1)
    m3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] * (math.trunc(len(answers)/10) +1)
    score = {} # 1번, 2번, 3번 수포자의 점수를 각각의 value 값으로 저장할 예정
    score[1] = 0
    score[2] = 0
    score[3] = 0
    for i in range(len(answers)):
	    # 각각의 수포자들이 문제를 맞췄는지 정답과 비교해보고, 맞았을 경우 해당 수포자의 점수를 1 추가한다.
        if answers[i] == m1[i]: 
            score[1] += 1
        if answers[i] == m2[i]:
            score[2] += 1
        if answers[i] == m3[i]:
            score[3] += 1
    max_score = max(score.values()) # 가장 높은 점수를 max_score 변수에 저장
    answer = []
    for i in range(len(score)): 
	    # 수포자 점수 딕셔너리에서 max_score 점수를 가지는 수포자 모두를 answer 리스트에 추가.
        if score[i+1] == max_score:
            answer.append(i+1)
    return answer
```

***

## 다른 사람들의 풀이 <a id="problem-solution"></a>

### 풀이【1】
```python
def solution(answers):
    pattern1 = [1,2,3,4,5]
    pattern2 = [2,1,2,3,2,4,2,5]
    pattern3 = [3,3,1,1,2,2,4,4,5,5]
    score = [0, 0, 0]
    result = []

    for idx, answer in enumerate(answers):
        if answer == pattern1[idx%len(pattern1)]:
	        # 여기서 나머지 연산을 적용한 게 나와 다름.
            score[0] += 1
        if answer == pattern2[idx%len(pattern2)]:
            score[1] += 1
        if answer == pattern3[idx%len(pattern3)]:
            score[2] += 1

    for idx, s in enumerate(score):
        if s == max(score):
            result.append(idx+1)

    return result
```

***

## 새로 배운 내용 <a id="deep"></a> 

### enumerate 함수

```python
enumerate([iterable], start = 0)
```
Return an enumerate object. `[iterable]` must be a **sequence, an iterator, or some other object which supports iteration**. The `__next__()` method of the iterator returned by `enumerate()` returns **a tuple containing a count (from _start_ which defaults to 0) and the values** obtained from iterating over _iterable_.

```python
>>> seasons = ['Spring', 'Summer', 'Fall', 'Winter']
>>> list(enumerate(seasons))
[(0, 'Spring'), (1, 'Summer'), (2, 'Fall'), (3, 'Winter')]
>>> list(enumerate(seasons, start=1))
[(1, 'Spring'), (2, 'Summer'), (3, 'Fall'), (4, 'Winter')]
```
Equivalent to :
```python
def enumerate(sequence, start=0):
	n = start
	for elem in sequence:
		yield n, elem
		n += 1
```

* enumerate 함수는 리스트가 있는 경우, **순서와 리스트의 값을 전달**하는 기능을 가집니다.
* enumerate는 '열거하다'라는 뜻입니다. 
* 이 함수는 순서가 있는 자료형(list, set, tuple, dictionary, string)을 입력으로 받아 **인덱스 값을 포함하는 enumerate 객체**를 리턴합니다.
* 보통 enumerate 함수는 for문과 함께 자주 사용됩니다.

```python
>>> data = enumerate((1, 2, 3))
>>> print(data, type(data))
<enumerate object at 0x0000017B0578CB38> <class 'enumerate'>
>>>
>>> for i, value in data:
		print(i, ":", value)
0 : 1
1 : 2
2 : 3
```
 
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTUxODMwNTI3LC0xNTk1OTMyMDI5LC04OT
M5MTYxNzcsLTIwNDM4MTI0MzgsLTE3NTEzMDU1MjAsLTExNDQw
ODQxMjcsLTEyMDE0NTczMjUsMTA3OTE2MTE0MF19
-->