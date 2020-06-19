---
layout: post
title:  "[코딩 테스트] 프로그래머스 코딩 테스트 연습 level 1. 두 정수 사이의 합"
date:   2020-06-18 22:50:34 
categories: Python Coding-test Programmers
use_math: true
---

**_Description_ : 프로그래머스 코딩 테스트 level 1 연습 문제 (8/49)**

* [두 정수 사이의 합](#problem-description)
* [나의 풀이](#my-solution)
* [다른 사람들의 풀이](#problem-solution)
* [새로 배운 내용](#deep)

***

## 두 정수 사이의 합 <a id="problem-description"></a>

### 문제 설명

두 정수 `a, b`가 주어졌을 때 `a`와 `b` 사이에 속한 모든 정수의 합을 리턴하는 함수, `solution`을 완성하세요.  
예를 들어 `a = 3, b = 5`인 경우, `3 + 4 + 5 = 12`이므로 12를 리턴합니다.

### 제한 조건

-   a와 b가 **같은 경우는 둘 중 아무 수나 리턴**하세요.
-   a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
-   a와 b의 **대소관계는 정해져있지 않습니다**.

### 입출력 예

| a | b | return |
| - | - | ------ |
| `	3	` | `	5	` | `	12	` |
| `	3	` | `	3	` | `	3` |
| `5` | `3` | `12` |

***

## 나의 풀이 <a id='my-solution'></a>

```python 
def solution(a, b):
    big, sm = (b, a) if b >= a else (a, b)
    return sum([n for n in range(sm, big+1, 1)])
```

## 다른 사람들의 풀이 <a id="problem-solution'></a>

### 풀이 【1】
```python 
def adder(a, b):
	return (abs(a-b)+1)*(a+b)//2
	# ▲
```

▲ 가우스의 등차 수열의 합 공식을 이용했다. 복잡도를 생각할 때 좋은 방식이라고 한다. 

### 풀이 【2】
```python
def adder(a, b):
	return sum(range(min(a, b), max(a, b)+1))
```

***

## 새로 배운 내용 <a id="deep"></a>

### 가우스의 등차 수열의 합 공식
 
* 첫째 항이 $a$이고 공차가 $d$ 인 등차 수열의 첫째 항부터 제 $n$항까지의 합 
	* $S_n = a_1 + a_2 + a_3 + ... + a_n-1 + a_n$
 * $a, d$에 대한 식으로 바꾼다.
	 * $S_n = a + (a+d) + (a+2d) + ... + {a + (n-2)d} + {a + (n-1)d}$
* 합의 공식 유도
	 * $S_n = {a + (n-1)d} + {a + (n-2)d} + ... + (a+2d) + (a+d) + a$
	 * $2S_n = {2a +(n-1)d} + (2a + (n-1)d} + ... + {2a + (n-1)d} + {2a + (n-1)d}$
* 이제 양 변을 2로 나눈다.
	* $S_n = n{2a + (n-1)d}/2$
* 끝항 제 $n$항은 $a_n = l = a + (n-1)d$ 이므로
	* $∴ S_n = n(a+l)/2$


	
	
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjEzNjA5NTg3OCwzMDY2ODcxOSwxNDQ3Mz
U4NDc0LC03MTM1NDM5NCwxOTg3MTI1OTFdfQ==
-->