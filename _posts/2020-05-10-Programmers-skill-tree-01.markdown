---
layout: post
title:  "프로그래머스 스킬 체크 level 1"
date:   2020-05-11 09:33:36 
categories: Python Programmers Coding-test
---

프로그래머스 스킬 체크 레벨 1. 두 문제를 30분 안에 풀고 제출해야했다.  

첫번째 문제. 

※ 호제법이란 말은 두 수가 서로(서로 호, 互) 상대방 수를 나누어서(나누다 제, 除) 결국 원하는 수를 얻는 알고리즘을 나타낸다. 2개의 자연수 a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면(단, a>b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다.

```python
def solution(n, m):
    x = n
    y = m
    while y:
        x, y = y, x%y
        if y == 0:
            gcd = x
    lcm = n * m / gcd 
    answer = [gcd, lcm]
    return answer
```

● 유클리드 호제법 증명
$$
A = Ga, B = Gb 
a와 b가 서로소이면 G는 최대공약수(GCD)이다.

A = Bq + R 일 때,
G(A, B) == G(B, R) 이다. 

(이항) R = A - Bq = Ga - Gbq = G(a - bq)
∴ A = Ga, B = Gb, R = G(a-bq)

b와 a-bq가 서로소인가?
(귀류법 : b와 a-bq는 서로소가 '아닌' 것을 증명해볼 때 모순이 나오는 지 보자)



$$

```python
def solution(d, budget):
    d = sorted(d)
    for i in range(len(d)):
        if budget < sum(d):
            del d[len(d)-1]
    answer = len(d)
    return answer
```
