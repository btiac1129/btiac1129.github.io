---
layout: post
title:  "해시 1"
date:   2020-05-15 09:14:36 
categories: Algorithm Python Hash
use_math: true
---

**_Description :_ 알고리즘 【해시1】**

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

이제 문제는 주어진 세 연산을 어떻게 가장 효휼적인 방법으로 수행하는가 이다.

#### Let's consider few solutons.

1. Use an Array 
  - Search takes liner time : 배열에 저장할 수 있다. 그런데 이렇게 하면 레코드를 검색하는데 linear time이 요구된다. 요구된 하나를 찾을 때까지 모든 레코드를 봐야 하기 때문이다. 
  - 정렬하는 방법으로 저장하면, 검색을 향상시킬 수 있다. 그럴 경우, binary search 방법으로 검색하면 O(logn) 만에 끝낼 수 있다. 하지만 삽입과 삭제에 있어서 비용이 발생한다. 그 정렬 순서를 유지해야 하기 때문에 그렇다.
  
2. Use a Linked List 
  - Search takes linear time : 특정 레코드를 찾는데 역시 linear time이 걸린다. 하나를 찾을 때까지 모든 레코드를 다 봐야 하기 때문이다. 
  
3. Use a balanced BST to store records
  - Balanced Binary Search Tree를 사용하면 Insertion, Search, Deletion 세 연산 모두 복잡도 O(logn)을 만들 수 있다. 
 
4. Use an Direct Access Table
  - 이 방법은 세 연산에 대해서 효율적인 복잡도 O(1)을 제공한다.
  

#### Let's see how it looks like.

This is an example of direct access table. 

핸드폰 번호는 'Key' 역할, 'Value'로는 레코드의 주소를 저장한다. 

이 방법은 좋아 보이지만 역시 특정 한계를 겪는다. 지금 키 값이 핸드본 번호다. (ex. 9864567654)
  
The first limitation is the size of table. The extra space required is O(m×10^n), where m is the size of pointer to the record and n are the digits in the telephone number. The other limitations is that the digits in the telephone number can be more than what our integer variable can store. 

이 방법을 개선하면서 동시에 해싱의 개념을 소개하겠다. 해싱은 direct access table의 한계를 극복할 수 있다.


#### Solution

해싱은 삽입, 검색, 삭제 연산에 O(1) 시간을 제공한다. 이제 핸드폰 번호를 그것보다 더 적은 자릿수 숫자로 변환해주는 블랙 박스가 필요하다. 이 블랙 박스를 해시 함수로 부른다. 

So, a hash function maps a big number or string to a small integer that can be used as index in hash table.

즉 해시 함수는 큰 숫자나 문자열을 해시 테이블에서 인덱스로 쓰일 수 있는 작은 정수로 바꿔준다.

예를 들어본다. 해시 함수 h(x)를 이렇게 정의했다. $h(x) = x mod 7$

x는 입력 숫자다. $x = 9864567654$일 때, $h(x) = 9864567654 mod 7 = 4$ 이다.

See how our hash function is mapping such a big number to a single digit number. This function is okay but certainly not a good choice to be a hash function.

좋은 해시 함수의 특징 몇 가지가 있다. 

1. 좋은 해시 함수 h(x)는 효율적으로 계산할 수 있어야 한다. - This is obvious as we *do not want to spend our resources* on somthing which has *nothing to do with the outcome*.

2. 두 번째 특성으로 해시 함수는 키 값을 균등하게 분배해야 한다. - Each table position is equally likely for each key. 


#### Collision

Now since we have seen hash function its time to see collision due to it.

같은 해시 함수에 대해서, 같은 키 값 4를 산출하는 예시가 하나 더 있다. 

$x = 9854354542, h(x) = 9854354542 mod 7 = 4$

따라서 두 개의 다른 핸드폰 번호에 대해서 같은 값을 얻는 충돌이 발생할 수 있다. 이 충돌은 해시 함수에 문제를 발생시키지만, 여전히 컨트롤 할 수 있는 문제다.


#### Collision Handling

1. Chaining - 해시 테이블의 셀을, 같은 해시 함수 결과값을 갖는 모든 레코드를 저장한 링크드 리스트에 연결한다.

2. Open Addressing - 모든 요소들은 해시 테이블 자체에 저장된다. 이 방법은 다시 세 타입으로 나뉜다. (Linear Probing, Quadratic Probing, Double Hashing)









  


