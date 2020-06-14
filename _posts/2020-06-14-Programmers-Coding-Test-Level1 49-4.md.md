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
|
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1OTk1MDgzNTddfQ==
-->