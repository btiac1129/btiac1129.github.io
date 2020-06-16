---
layout: post
title:  "[코딩 테스트] 프로그래머스 코딩 테스트 연습 level 1. K번째 수"
date:   2020-06-14 21:51:34 
categories: Python Coding-test Programmers Sort
use_math: true
---

**_Description_ : 프로그래머스 코딩 테스트 level 1 연습 문제 (4/49)**

* [K번째 수](#problem-description)
* [나의 풀이](#my-solution)
* [다른 사람들의 풀이](#problem-solution)
* [새로 배운 내용](#deep)

***

## K번째 수 <a id="problem-description"></a>

### 문제 설명

배열 array의 **i번째 숫자부터 j번째 숫자까지 자르고** **정렬**했을 때, **k번째에 있는 수**를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

1.  array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
2.  1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
3.  2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, **[i, j, k]**를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

### 제한 사항
* array의 길이는 1 이상 100 이하입니다.
* array의 각 원소는 1 이상 100 이하입니다.
* commands의 길이는 1 이상 50 이하입니다. 
* commands의 각 원소는 길이가 3입니다.

### 입출력 예
| array | commands | return |
| ----- | -------- | ------ |
| [1, 5, 2, 6, 3, 7, 4] | [[2, 5, 3], [4, 4, 1], [1, 7, 3]] | [5, 6, 3] |

### 입출력 예 설명
[1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.  
[1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.  
[1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.

***

## 나의 풀이 <a id="my-solution"></a>

```python
def solution(array, commands):
    answer = []
    for command in commands:
        sliced_array = sorted(array[command[0]-1:command[1]])
        answer.append(sliced_array[command[2]-1])
    return answer
```

***

## 다른 사람들의 풀이 <a id="problem-solution"></a>

### 풀이【1】
※ lambda 함수와 map 함수의 사용.
```python
def solution(array, commands):
    return list(map(lambda x:sorted(array[x[0]-1:x[1]])[x[2]-1], commands))
```

### 풀이【2】
※ 나의 풀이와 비슷한 모습이지만 각각 i, j, k 변수를 만들어서 저장한 후 풀이를 진행했다는 점이 인상적이었다.
```python
def solution(array, commands):
    answer = []
    for command in commands:
        i,j,k = command
        # i, j, k를 한 번에 입력할 수 있다.
        answer.append(list(sorted(array[i-1:j]))[k-1])
    return answer
```

***

## 새로 배운 내용 <a id='deep'></a>

### lambda 함수

**Small anonymous functions** can be created with the lambda keyword. This function returns the sum of its two arguments: `lambda a, b: a+b`. Lambda functions can be used **wherever function objects are required**. They are syntactically restricted to **a single expression**. Semantically, they are just syntactic sugar for **a normal function definition**. Like nested function definitions, lambda functions **can reference variables from the containing scope**:
```python
>>> def make_incrementor(n):
		return lambda x: x + n
>>> f = make_incrementor(42)
>>> f
<function make_incrementor.<locals>.<lambda> at 0x0000026C970DF168>
>>> type(f)
<class 'function'>
>>> f(0)
42
>>> f(1)
43
```

The above example uses a lambda expression **to return a function. Another use is to pass a small function as an argument.
### map 함수
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwNjcyODM1NjUsLTE5MjMyMDQyMTksLT
kwMDAzMDEwNywtMTkwNjM5MDg5NV19
-->