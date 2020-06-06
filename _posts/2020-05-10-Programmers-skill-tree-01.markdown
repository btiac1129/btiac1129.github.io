---
layout: post
title:  "프로그래머스 스킬 체크 level 1"
date:   2020-05-11 09:33:36 
categories: Python Programmers Coding-test
use_math: true
---

**_Description_ : 프로그래머스 스킬 체크 (level 1/5)**

프로그래머스 스킬 체크 레벨 1. 30분 안에 두 문제를 풀고 제출 

Q1. 첫번째 문제. 

※ 호제법이란 말은 두 수가 서로(서로 호, 互) 상대방 수를 나누어서(나누다 제, 除) 결국 원하는 수를 얻는 알고리즘을 나타낸다. 2개의 자연수 a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면(단, a>b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다.

```python
def solution(n, m):
    x = n
    y = m
    while y:
        x, y = y, x%y #
        if y == 0:
            gcd = x
    lcm = n * m / gcd 
    answer = [gcd, lcm]
    return answer
```

★ 유클리드 호제법 증명

$A = Ga, B = Gb$

a와 b가 서로소이면 G는 최대공약수(G.C.D)이다.

$A = Bq + R$ 일 때,

$G(A, B) = G(B, R)$ 이다.

$R = A - Bq = Ga - Gbq = G(a - bq)$

$∴ A = Ga, B = Gb, R = G(a-bq)$ 이다.

G(B, R)의 최대공약수가 G이려면

이때 b와 a-bq가 서로소여야 한다.

증명하려는 명제 : b와 a-bq는 서로소이다.

귀류법 : b와 a-bq가 서로소가 아니라면 공약수 m이 존재한다. (k와 k'는 서로소)

$b = mk$

$a-bq = mk'$

$a = mk' + bq$

$  = mk' + mkq$

$a = m(k' + kq), b = mk$ 이므로 

a와 b가 공약수를 갖게 된다.

i) m = 1이 아닌 2 이상일 때, a와 b가 2 이상인 공약수를 갖게 되어 서로소라고 했던 전제에 모순이 생긴다.

ii) m = 1일 때

$a = k' + kq, b = k$

$∴ a = k' + bq$ 

$a-bq = k', b = k$

k와 k'는 서로소이므로, ∴ a-bq와 b는 서로소이다. (증명 완료)


Q2. 두 번째 문제 

d는 부서별로 신청한 (물품의) 금액이 들어있는 리스트이다.

한정된 예산 budget으로 물품을 구매해 줄 수 있는 부서의 최댓값을 구하는 문제이다.

```python
def solution(d, budget):
    d = sorted(d) # 적은 가격을 요구하는 부서부터 차례대로 더하면 되기에 정렬해준다.
    for i in range(len(d)):
        if budget < sum(d): # 비교
            del d[len(d)-1] # 부서 전체 합이 예산보다 크면, 가장 큰 값을 없애는 방법을 취했다.
    answer = len(d) # 부서 수
    return answer
```
