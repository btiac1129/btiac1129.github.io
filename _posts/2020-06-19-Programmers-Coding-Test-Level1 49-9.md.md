---
layout: post
title:  "[코딩 테스트] 프로그래머스 코딩 테스트 연습 level 1. 문자열 내 마음대로 정렬하기"
date:   2020-06-19 22:50:34 
categories: Python Coding-test Programmers
use_math: true
---

**_Description_ : 프로그래머스 코딩 테스트 level 1 연습 문제 (9/49)**

* [문자열 내 마음대로 정렬하기](#problem-description)
* [나의 풀이](#my-solution)
* [다른 사람들의 풀이](#problem-solution)
* [새로 배운 내용](#deep)

***

## 문자열 내 마음대로 정렬하기 <a id="problem-description"></a>

▲ 다 풀고 보니 문제 제목을 왜 이렇게 지었는지 알 것 같았다.

### 문제 설명

문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, **각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬**하려 합니다. 예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

### 제한 조건

-   strings는 길이 1 이상, 50이하인 배열입니다.
-   strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
-   strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
-   모든 strings의 원소의 길이는 n보다 큽니다.
-   **인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.**

### 입출력 예

| strings | n | return |
| ------- | - | ------ |
| `["sun", "bed", "car"]` | `	1	` | `["car", "bed", "sun"]` |
| `["abce", "abcd", "cdx"]` | `	2	` | `["abcd", "abce", "cdx"]` |

***
## 나의 풀이 <a id='my-solution'></a>

```python
def solution(strings, n):
    answer = []
    nth_list = [] # 각 문자열의 n번째 문자를 저장한다.
    for string in strings:
        nth_list.append(string[n])
    for i in sorted(set(nth_list)): # 반복되는 문자를 제거하고 정렬한 후 순회한다.
        for string in sorted(strings): # 여기서 strings를 정렬하고 순회하면서, 마지막 제한 조건을 만족시킨다. 즉, sorted()가 두 번 필요하다. 
            if i == string[n]:
                answer.append(string)

return answer
```

***

## 다른 사람들의 풀이 <a id="problem-solution"></a>

### 풀이 【1】

```python
def solution(strings, n):
	return sorted(sorted(strings), key=lambda x: x[n]) 
```

*** 

## 새로 배운 내용 <a id='deep'></a>

### `key of sorted()`

참고 자료 : [Sorting How to](#https://docs.python.org/3/howto/sorting.html#sortinghowto)

```python
# 1. 
>>> student_tuples = [
	('john', 'A', 15),
	('jane', 'B', 12),
	('dave', 'B', 10),
]
>>> sorted(student_tuples, key=lambda student: student[2])
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]

# 2.
>>> class Student:
	def __init__(self, name, grade, age):
		self.name = name
		self.grade = grade
		self.age = age
	def __repr__(self):
		return repr((self.name, self.grade, self.age))

	
>>> student_objects = [
	Student('john', 'A', 15),
	Student('jane', 'B', 12),
	Student('dave', 'B', 10),
]
>>> student_objects[2]
('dave', 'B', 10)
>>> sorted(student_objects, key = lambda student: student.age)
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTU1MTQ5MjQ5NCwtNzQ2MzQyNDIxLC0zOT
QwMzUyMDIsNjE0MjEzNTE2LDE2NDQyNzg1OF19
-->