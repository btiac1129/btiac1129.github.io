---
layout: post
title:  "프로그래머스 스킬 체크 level 1"
date:   2020-05-11 09:33:36 
categories: Python Programmers Coding-test
---

프로그래머스 스킬 체크 레벨 1. 두 문제를 30분 안에 풀고 제출해야했다.  

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

```python
def solution(d, budget):
    d = sorted(d)
    for i in range(len(d)):
        if budget < sum(d):
            del d[len(d)-1]
    answer = len(d)
    return answer
```
