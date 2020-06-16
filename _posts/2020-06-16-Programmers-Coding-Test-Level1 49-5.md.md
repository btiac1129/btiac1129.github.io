---
layout: post
title:  "[코딩 테스트] 프로그래머스 코딩 테스트 연습 level 1. K번째 수"
date:   2020-06-14 21:51:34 
categories: Python Coding-test Programmers Sort
use_math: true
---

**_Description_ : 프로그래머스 코딩 테스트 level 1 연습 문제 (5/49)**

* [2016년](#problem-description)
* [나의 풀이](#my-solution)
* [다른 사람들의 풀이](#problem-solution)

***

## 2016년 <a id="problem-description"></a>

### 문제 설명

2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각  `SUN,MON,TUE,WED,THU,FRI,SAT`

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열  TUE를 반환하세요.

### 제한 조건

-   2016년은 윤년입니다.
-   2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

***

## 나의 풀이 <a id="my-solution"></a>
```python
import datetime
DAY = {
    6: 'SUN',
    0: 'MON',
    1: 'TUE',
    2: 'WED',
    3: 'THU',
    4: 'FRI',
    5: 'SAT'
}
def solution(a, b):
    dt = datetime.datetime(2016, a, b)
    for d in DAY:
        if dt.weekday() == d:
            answer = DAY[d]
    return answer
```

***

## 다른 사람들의 풀이 <a id="problem-solution"></a>

### 풀이 【1】
```python
def getDayName(a,b):
    months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    # 2016년 1월 1일은 금요일이다.
    return days[(sum(months[:a-1])+b-1)%7]    
```

### 풀이 【2】
```python
# 내가 푼 것처럼 datetime 라이브러리를 이용해서 풀었지만, 함수를 더 잘 활용한 모습.
import datetime

def getDayName(a,b):
    t = 'MON TUE WED THU FRI SAT SUN'.split()
    # ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'] 값이 t에 저장된다.
    return t[datetime.datetime(2016, a, b).weekday()]
    # 마침, weekday() 함수는 0 부터 월요일이다.
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTU3MDAzODgxLC03MDgzNjE1NDNdfQ==
-->