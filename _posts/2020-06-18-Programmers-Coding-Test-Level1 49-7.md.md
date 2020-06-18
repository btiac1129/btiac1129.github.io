---
layout: post
title:  "[코딩 테스트] 프로그래머스 코딩 테스트 연습 level 1. 나누어 떨어지는 숫자 배열"
date:   2020-06-18 22:50:34 
categories: Python Coding-test Programmers
use_math: true
---

**_Description_ : 프로그래머스 코딩 테스트 level 1 연습 문제 (7/49)**

* [나누어 떨어지는 숫자 배열](#problem-description)
* [나의 풀이](#my-solution)
* [다른 사람들의 풀이](#problem-solution)
* [새로 배운 내용](#deep)

***

## 나누어 떨어지는 숫자 배열 <a id="problem-description"></a>

### 문제 설명

`array`의 각 element 중 `divisor`로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, `solution`을 작성해주세요. `divisor`로 나누어 떨어지는 element가 하나도 없다면 배열에 `-1`을 담아 반환하세요. 

### 제한 사항

* `array`은 자연수를 담은 배열입니다. 
* 정수 `i, j`에 대해 `i ≠ j` 이면 `arr[i] ≠ arr[j]` 입니다.
* `divisor`는 자연수입니다.
* `array`는 길이 1 이상인 배열입니다.

### 입출력 예

| arr | divisor | return |
| --- | ------- | ------ | 
| `[5, 9, 7, 10]` | `5` | `[5, 10]` |
| `[2, 36, 1, 3]` | `1` | `[1, 2, 3, 36]` |
| `[3, 2, 6]` | `10` | `[-1]` |

***

## 나의 풀이 <a id='my-solution'></a>

```python
def solution(arr, divisor):
    answer = []
    for elem in arr:
        if elem%divisor == 0:
            answer.append(elem)

    return ([-1] if (len(answer)==0) else sorted(answer))
```

***

## 다른 사람의 풀이 <a id='problem-solution'></a>

### 풀이 【1】

```python 
def solution(arr, divisor): return sorted([n for n in arr if n%divisor == 0]) or [-1]
# return listA or listB → listA가 거짓일 때 listB를 리턴한다.
```

***

## 새로 배운 내용 <a id='deep'></a>

### 파이썬 리스트 내포 (List Comprehension)

### or 사용법
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA2Mzg0MjUzMCwxNTIxMDc0OTYwXX0=
-->