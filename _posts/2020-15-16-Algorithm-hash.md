---
layout: post
title:  "해시 1"
date:   2020-05-15 09:14:36 
categories: Algorithm Python Hash
use_math: true
---

### 해싱의 개념

In this video, we are going to introduce you to the concept of hashing. 

video link - https://www.youtube.com/watch?v=wWgIAphfn2U

먼저, 일반적인 문제를 생각해보자.

Suppose we are storing employee records, the primary key for which is employee's telephone number.

직원 관리 시스템이 있다. 직원 레코드는 직원들의 핸드폰 번호에 따라 인덱스 되어 있다.

각 행은 직원들의 핸드폰 번호를 통해 식별되는 것이다.

이제 세 연산을 정의한다.

1. 새로운 직원 레코드 추가하기 (Insert)
2. 핸드폰 번호로 직원 레코드 검색하기 (Search)
3. 직원 레코드 삭제하기 (Delete)

Now the question is how to implement this problem such that all the 3 given operations are done in most efficient manner.


