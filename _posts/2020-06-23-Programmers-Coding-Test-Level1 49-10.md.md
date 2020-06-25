---
layout: post
title:  "[코딩 테스트] 프로그래머스 코딩 테스트 연습 level 1. 문자열 내 마음대로 정렬하기"
date:   2020-06-23 21:33:34 
categories: Python Coding-test Programmers
use_math: true
---

**_Description_ : 프로그래머스 코딩 테스트 level 1 연습 문제 (10/49)**

* [문자열 내림차순으로 배치하기](#problem-description)
* [나의 풀이](#my-solution)
* [새로 배운 내용](#deep)

***

## 문자열 내림차순으로 배치하기 <a id="problem-description"></a>

### 문제 설명

문자열 s에 나타나는 문자를 큰 것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요. s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

### 제한 사항

-   str은 길이 1 이상인 문자열입니다.

### 입출력 예

| s | return |
| - | ------ |
| "Zbcdefg" | "gfedcbZ" |

***

## 나의 풀이 <a id='my-solution'></a>

```python
def solution(s):
	answer = ''.join(sorted(s, reverse=True))
	return answer
```

***

## 새로 배운 내용 <a id="deep"></a>

### `str.join(_iterable_)`
Return a string which is **the concatenation of the strings in _iterable_**. A `TypeError` will be raised if there are any non-string values in _iterable_, including `bytes` objects. **The separator between elements is the str** providing this method.

```python
>>> _list = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']
>>> ''.join(_list)	# !
'Hello world!'
>>> ' '.join(_list) # ! separator is the str
'H e l l o   w o r l d !'
>>> '-'.join(_list) # !
'H-e-l-l-o- -w-o-r-l-d-!'
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbMjAzMDE2NTk5NF19
-->
