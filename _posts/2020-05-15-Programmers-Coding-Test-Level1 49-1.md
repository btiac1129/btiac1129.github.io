---
layout: post
title:  "[코딩 테스트] 프로그래머스 코딩 테스트 연습 level 1. 완주하지 못한 선수"
date:   2020-05-15 09:14:36 
categories: Python Coding-test Programmers Hash
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
| `["leo", "kiki", "eden"]` | `["eden", "kiki"]` | `"leo"` |
| `["marina", "josipa", "nikola", "vinko", "fillipa"]` | `["josipa", "filipa", "marina", "nikola"]` | `"vinko"` |
| `["mislav", "stanko", "mislav", "ana"]` | `["stanko", "ana", "mislav"]` | `"mislav"` |

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

```python
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

**issubclass**는 특정 클래스가 다른 클래스의 속성을 이어받은(상속받은) 클래스인지 확인하는 함수입니다. `issubclass(A, B)`일 때, A클래스가 B클래스의 속성을 이어받았다면 **True**라고 리턴해줍니다. 위 코드로 우리는 **익숙한 내장 자료형 list, tuple, dict, set, str 클래스**가 모두 **Container 클래스의 속성을 이어받은 클래스**인 걸 확인할 수 있습니다.

컨테이너 타입은 다음과 같은 특성이 있습니다.

* 컨테이너 안에 어떤 요소가 포함되어 있는지 확인이 가능합니다. 이때 확인하는 키워드는 `in` 키워드입니다.

* 컨테이너 객체는 내부에 포함하고 있는 요소가 몇 개인지도 확인이 가능합니다. 확인하는 방법은 내장함수 `len`을 통해 확인할 수 있습니다.

* `max, min` 함수를 사용하면 포함하고 있는 요소의 최대값과 최소값을 찾을 수 있습니다.

* etc.


### 파이썬 collections 모듈

이 모듈은 파이썬의 범용 내장 컨테이너 dict, list, set 및 tuple에 대한 **대안을 제공하는 특수 컨테이너 데이터형**을 구현합니다.


### collections.Counter()

**`Counter`는 해시 가능한 객체를 세기 위한 dict 서브 클래스**입니다. **요소가 딕셔너리 키로 저장되고 개수가 딕셔너리 값으로 저장되는 컬렉션**입니다. 개수는 0이나 음수를 포함하는 임의의 정숫값이 될 수 있습니다. Counter 클래스는 다른 언어의 백(bag)이나 멀티 셋(multiset)과 유사합니다.

```python 
>>> from collections import Counter
>>> c = Counter('gallahad')
>>> c
Counter({'a': 3, 'l': 2, 'h': 1, 'g': 1, 'd': 1})
```

(계속) Counter 객체는 누락된 항목에 대해 KeyError를 발생시키는 대신 0을 반환한다는 점을 제외하고 딕셔너리 인터페이스를 갖습니다

```python 
>>> c = Counter(['eggs', 'ham'])
>>> c
Counter({'eggs': 1, 'ham': 1})
>>> c['eggs']
1
>>> c['bacon']  # 누락되어 있는 항목 
0
```

(계속) 개수를 0으로 설정해도 계수기에서 요소가 제거되지 않습니다. 완전히 제거하려면 `del`을 사용합니다.

```python 
>>> c['ham'] = 0
>>> c
Counter({'eggs': 1, 'ham': 0})
>>> del c['ham']
>>> c
Counter({'eggs': 1})
```

(계속) Counter 객체는 모든 딕셔너리에서 사용할 수 있는 메서드 이외의 세 가지 메서드를 지원합니다. 그 중 하나가 위 코딩 테스트 연습 문제 풀이에서 사용된 subtract([iterable-or-mapping]) 입니다. 

```python 
>>> p = Counter(['bacon', 'eggs', 'ham'])
>>> p
Counter({'bacon': 1, 'eggs': 1, 'ham': 1})
>>> p - c
Counter({'bacon': 1, 'ham': 1})
>>> ans = p - c
>>> list(ans)
['bacon', 'ham']
>>> list(ans)[0]
'bacon'
```





<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1MjU2MDQ1MjVdfQ==
-->