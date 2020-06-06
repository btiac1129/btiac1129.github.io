---
layout: post
title:  "프로그래머스 코딩 테스트 연습 level 1. 체육복"
date:   2020-05-21 18:59
categories: Python Programmers Coding-test
use_math: true
---

**_Description_ : 프로그래머스 코딩 테스트 level 1 연습 문제 (2/49)**

탐욕법에 해당하는 문제라고 적혀 있어서 문제를 풀다가 탐욕법 알고리즘을 공부했는데, 문제를 풀 때 적용하진 못한 것 같다. 이번 문제는 어려웠지만 다른 사람의 풀이를 보지 않고 혼자 힘으로 풀고 싶었다. 푸는데 시간이 좀 걸렸다. 

(1) 맨 처음 제출하기 전에 실행했을 때 테스트 케이스 모두 통과했지만, 제출 후 절반이 틀렸다. 그래서 질문 보기를 통해 다른 테스트 케이스로 내 알고리즘을 따라 하나 하나 점검해나갔다. 그리고 나서 왜 틀린 답이 나오는지 고민하다가 if문 조건식에서 각각의 '위치' 값을 비교하면 되는데 '위치에 해당하는 리스트 값'을 비교하는 바람에 잘못된 결과가 나온 것을 발견했다.

```python
            elif reserve[i]-1 != 0 and reserve[i]-1 != len(student)-1:
```

(2) 그리고 나니 실행 때 테스트 케이스 하나가 틀렸다고 나왔다. 바로 마지막에 ans를 셀 때 체육복이 2개인 학생 수를 포함하지 않은 것을 발견했다.

```python
  if s == 1 or s == 2:
```

(3) 그런데도 실행 단계를 통과하지 못해서 다시 질문 보기를 하면서 다른 테스트 케이스로 내 알고리즘을 따라 하나 하나 점검해나갔다. '자기 앞 뒤만 빌려줄 수 있다'는 조건을 걸지 않았다는 걸 발견했다.

 ```python
  if student[reserve[i]-1] == 2:
 ```

그 조건을 고려하고 나니 제출 후 통과했다.

```python
def solution(n, lost, reserve):
    student = [1] * n
    for i in range(len(reserve)):
        student[reserve[i]-1] = 2
    for i in range(len(lost)):
        student[lost[i]-1] -= 1
    # 자기 앞, 뒤만 빌려줄 수 있다.
    ans = 0
    for i in range(len(reserve)):
        if student[reserve[i]-1] == 2:
            if reserve[i]-1 == 0:
                if student[reserve[i]] == 0:
                    student[reserve[i]] += 1
                    student[reserve[i]-1] -= 1
            elif reserve[i]-1 != 0 and reserve[i]-1 != len(student)-1:
                if student[reserve[i]-2] == 0:
                    student[reserve[i]-2] += 1
                    student[reserve[i]-1] -= 1
                elif student[reserve[i]] == 0:
                    student[reserve[i]] += 1
                    student[reserve[i]-1] -= 1
            elif reserve[i]-1 == len(student)-1:
                if student[reserve[i]-2] == 0:
                    student[reserve[i]-2] += 1
                    student[reserve[i]-1] -= 1

    for s in student:
        if s == 1 or s == 2:
            ans += 1

    return ans
```

나는 student라는 배열에 각각의 학생이 가진 체육복의 수를 학생 번호 순에 맞게 미리 저장하고 시작했다. 그리고 나서 비교하고 나면 student 배열을 사용해서 해당하는 학생의 체육복의 개수를 하나 줄이고, 하나 더하는 식으로 student 배열을 만들어나갔다. 그래서 마지막으로 ans를 계산할 때, student 배열 안에서 체육복을 1개 또는 2개를 가진 학생 수를 더한 값을 얻었다. 



다음은 다른 사람의 풀이 중 가장 상위에 있던 풀이다. 

```python
def solution(n, lost, reserve):
    _reserve = [r for r in reserve if r not in lost]
    _lost = [l for l in lost if l not in reserve]
    for r in _reserve:
        f = r - 1
        b = r + 1
        if f in _lost:
            _lost.remove(f)
        elif b in _lost:
            _lost.remove(b)
    return n - len(_lost)
```

이 풀이를 보고 이런 생각이 들었다. 

- 아, 위치만 가지고 해결할 수 있었구나.
- 앞으로 문제에 주어진 변수만 가지고 해결할 생각을 해야겠다.
- '자기 앞 뒤만 빌려줄 수 있다'는 조건은, 문제를 푸는 사람에게 장애물만이 아니었구나. 조건이 있어서 어렵게만 생각했는데 이용 가치가 크구나. 그 조건을 이용해서 reserve와 lost를 간결하게 만드니 문제가 훨씬 쉬워지는 것을 보고 놀랐다.
