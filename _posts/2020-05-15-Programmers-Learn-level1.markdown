---
layout: post
title:  "프로그래머스 코딩 테스트 연습 level 1. 완주하지 못한 선수"
date:   2020-05-15 09:14:36 
categories: Python Programmers Coding-test
use_math: true
---

* completion의 길이는 participant의 길이보다 1 작습니다.

* 참가자 중에는 동명이인이 있을 수 있습니다.

* 완주하지 못한 선수의 이름을 return 하도록 solution 함수 작성하기.

```python
import collections

def solution(p, c):
    ans = collections.Counter(p) - collections.Counter(c)
    return list(ans)[0]
```


