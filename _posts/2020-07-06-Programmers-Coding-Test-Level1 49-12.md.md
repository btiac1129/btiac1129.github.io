---
layout: post
title:  "[코딩 테스트] 프로그래머스 코딩 테스트 연습 level 1. 서울에서 김서방 찾기"
date:   2020-07-06 17:53:34 
categories: Python Coding-test Programmers
use_math: true
---

**_Description_ : 프로그래머스 코딩 테스트 level 1 문자열 다루기 기본 (12/49)**

* [서울에서 김서방 찾기](#problem-description)
* [나의 풀이](#my-solution)
* [다른 사람들의 풀이](#problem-solution)

***

## 서울에서 김서방 찾기 <a id="problem-description"></a>

### 문제 설명
String형 배열 seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하는 함수, solution을 완성하세요. seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

### 제한 사항
- seoul은 길이 1 이상, 1000 이하인 배열입니다.
- seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
- Kim은 반드시 seoul 안에 포함되어 있습니다.

### 입출력 예

| seoul | return |
| `["Jane", "Kim"]` | `"김서방은 1에 있다"` |

***

## 나의 풀이 <a id="my-solution"></a>

```python
def solution(seoul):
  for idx, person in enumerate(seoul):
    if person == "Kim":
      return  f"김서방은 {idx}에 있다"
```

## 다른 사람들의 풀이 <a id="problem-solution"></a>

```python
def solution(seoul):
  return "김서방은 {}에 있다".format(seoul.index('Kim'))
```
