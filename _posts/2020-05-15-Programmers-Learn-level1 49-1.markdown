---
layout: post
title:  "프로그래머스 코딩 테스트 연습 level 1. 완주하지 못한 선수"
date:   2020-05-15 09:14:36 
categories: Python Programmers Coding-test
use_math: true
---

**_Description_ : 프로그래머스 코딩 테스트 level 1 연습 문제 (1/49)**

* [완주하지 못한 선수](#problem-description)
* [다른 사람들의 풀이](#problem-solution)
* [새로 배운 내용](#deep)

***

## 완주하지 못한 선수 <a id="problem-description"></a>

### 문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다. 

**마라톤에 참여한 선수들의 이름이 담긴 배열 _participant_**
와 **완주한 선수들의 이름이 담긴 배열 _completion_**
이 주어질 때, **완주하지 못한 선수의 이름**을 return 하도록 solution 함수를 작성해주세요.  


### 제한 사항

* 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.

* __completion__
의 길이는 
__participant__
의 길이보다 1 작습니다.

* 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다. 

* 참가자 중에는 동명이인이 있을 수 있습니다.


### 입출력 예

| participant | completion | return |
| :---------- | :--------- | :----- |
| ["leo", "kiki", "eden"] | ["eden", "kiki"] | "leo" |
| ["marina", "josipa", "nikola", "vinko", "fillipa"] | ["josipa", "filipa", "marina", "nikola"] | "vinko" |
| ["mislav", "stanko", "mislav", "ana"] | ["stanko", "ana", "mislav"] | "mislav" |

***

## 다른 사람들의 풀이 <a id="problem-solution"></a>

### 풀이【1】
```python
import collections

def solution(p, c):
    ans = collections.Counter(p) - collections.Counter(c)
    return list(ans)[0]
```

***

## 새로 배운 내용 <a id="deep"></a>

### 파이썬 컨테이너 타입(Container type)

Container 타입은 특정 속성이 구현되어 있는 클래스를 이야기합니다. 객체를 만드는데 직집적으로 관여하지 않지만, 특정 기능이 구현되어 있는 객체를 Container 객체라고 부를 수 있게 됩니다. 어떤 기능이 구현되어 있어야 하는 지는 조금 어려운 이야기입니다. 다음과 같이 간단하게 Container 객체가 맞는지 확인할 수 있습니다.

```python repl
>>> from collections import Container
>>> issubclass(list, Container)
True
>>> issubclass(tuple, Container)
True
>>> issubclass(dict, Container)
True
>>> issubclass(set, Container)
True
>>> issubclass(str, Container)
True
```

## [python] collections 모듈




