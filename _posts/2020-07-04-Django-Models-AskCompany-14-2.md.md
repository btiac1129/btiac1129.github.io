---
layout : post
title: "[Django] 리액트와 함께 장고 시작하기 Django Models 2. 장고 모델 필드"
date: 2020-07-04 11:18:36 
categories: Python Django Models 
use_math: true
---

**_Description_ : 리액트와 함께 장고 시작하기 Django Models 2. 장고 모델 필드 (2/14)**

***

### 기본 지원되는 모델 필드 타입 
* Primary Key: **AutoField**, BigAutoField
  - `migrate` 명령을 내린 후 확인할 수 있었던 id 필드, 이 필드가 숨겨져 있는데 AutoField이다. 1부터 자동으로 1씩 증가한다.
* 문자열 : **CharField**, **TextField**, SlugField
* 날짜/시간 : DateField, TimeField, **DateTimeField**, DurationField 
* 참/거짓 : **BooleanField**, NullBooleanField
* 숫자 : IntegerField, SmallIntegerField, PositiveIntegerField, PositiveSmallIntegerField, BigIntegerField, DecimalField, FloatField
* 파일 : BinaryField, **FileField**, **ImageField**, FilePathField

* 이메일 : EmailField
* URL : URLField
* UUID : UUIDField
* 아이피 : GenerallIPAddressField

* Relationship Types (ex. 포스트 테이블과 태그 태이블과의 관계를 맺을 때)
  - ForeignKey : 외래키
  - ManyToManyField  
  - OneToOneField
 
* 다양한 커스텀 필드들 : django-model-utils

### 모델 필드들은 DB 필드 타입을 반영한다
* DB에서 지원하는 필드들을 반영한다. 
  - Varchar 필드 타입 -> 이 필드 타입에 매핑되는 장고 필드는 CharField, SlugField, URLField, EmailField 등
* 파이썬 데이터타입과 데이터베이스 데이터타입을 매핑
  - AutoField -> int
  - BinaryField -> bytes
  - BooleanField -> bool
  - CharField/SlugField/URLField/EmailField -> str => 다 같은 문자열인데 무슨 차이가 있냐. 디폴트로 적용된 유효성 검사 로직 등의 차이가 있다. 그래서 CharField는 지정 길이/크기 안에서 문자열을 지정하고, URLField는 그 문자열이 url 형식이어야 저장된다. EmailField도 email 형식이어야 그 문자열이 저장된다. DB가 아닌 장고 단의 유효성 검사에 있는 차이다.
* 같은 모델 필드라 할지라도, DB에 따라 다른 타입이 될 수도 있다. 
  - DB에 따라 지원하는 기능이 모두 달라요.
  - 장고 기본 모델로 구현한 후에 DB를 변경해도, 보통 모든 로직이 오류 없이 잘 동작하지만, 퍼포먼스/성능이라는 건 조금 다를 수 있다. 그래서 DB 엔진이 막히면 꼭 SQL을 확인하는 습관이 중요하다. 
  
### 자주 쓰는 필드 공통 옵션

한 번쯤 읽어보면 의미가 와닿을 것이다.

* **blank** : 장고 단에서 validation 시에 empty 허용 여부 (디폴트 False)
  - 문자열일 경우 빈 문자열 허용 여부. 
* null (DB 옵션) : null 허용 여부 (디폴트 False)
  - 어떤 분들은 러프하게 사용한다고 blank랑 null 둘 다 True로 하는데, 그러지 말고 최대한 타이트하게 지정하기다. 그게 더 훨씬 유용하고 장고의 이점을 살린 개발을 할 수 있게 된다. 
* db_index (DB 옵션) : 인덱스 필드 여부 (디폴트 False)
  - (ex) db_index 옵션을 사용하고 싶다면, db_index 옵션을 걸고 마이그레이션을 하면 DB 인덱스가 적용된다. 그런데 이미 데이터베이스를 꾸며놓은 상태라면, 이 옵션은 쓸 일이 없다. 이 옵션은 마이그레이션할 때 사용하는 것이기 때문.
* default : 디폴트 값 지정, 혹은 값을 리턴해줄 함수 지정
  - 사용자에게 디폴트 값을 제공코자 할 때
* unique (DB 옵션) : 현재 테이블 내에서 유일성 여부 (디폴트 False)
  - 마이그레이션할 때도 사용하고, 장고 단에서 유효성 검사 로직 수행할 때도 사용할 수 있다. 
* choices : select 박스 소스로 사용
* **validators** : validators를 수행할 함수를 다수 지정
  - 모델 필드에 따라 고유한 validators들이 등록 (ex - 이메일만 받기)
  - 이런 것도 다 모델에 잘 적용하면, 훨씬 효율적인 장고 개발할 수 있게 된다.
* verbose_name : 필드 레이블, 미지정시 필드명이 사용
* help_text : 필드 입력 도움말

### blank 속성

```python
# instagram > models.py

from django.db import models

class Post(models.Model):
  message = models.TextField()
  # => 현재 blank 속성 값이 디폴트 False이다. 
  # 그러므로 message 값이 없다면, 빈 문자열로 저장한다면, 
  # 모델과 연동된 (장고)폼에서 유효성 검사를 실시하는데, 그 유효성 검사에 실패하게 된다. 
  # => ! 그러나 장고 폼을 사용하지 않고 모델만 사용해서 저장한다면, 유효성 검사 로직을 안 타요. 그래서 바로 저장이 된다.
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
```
  
### 하나의 예시

```python
from django.conf import settings
from django.db import models

class Profile(models.Model):
  user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) # !
  blog_url = models.URLField(blank=True)
  
class Post(models.Model):
  author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) # !
  title = models.CharField(max_length=100, db_index=True)
  slug = models.SlugField(allow_unicode=True, db_index=True) # !
  desc = models.TextField(blank=True)
  image = models.ImageField(blank=True)
  comment_count = models.PositiveIntegerField(default=0)
  tag_set = models.ManyToManyField('Tag', blank=True) # !
  is_publish = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
  author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) # !
  post = models.ForeignKey(Post, on_delete=models.CASCADE) # !
  message = models.TextField()
  created_at = models.DateTimeFIeld(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
class Tag(models.Model):
  name = models.CharField(max_length=50, unique=True) 
```

* `Post`와 `Comment`의 관계
하나의 포스트에 다수의 댓글을 쓸 수 있고, 하나의 댓글은 하나의 포스팅에 속한다. 그러므로 1(Post):n(Comment)의 관계다. 이때는 n측에 외래키를 삼는다. n측(Comment의 post)에 '1'의 관계에 있는 것이 'Post'라고 썼다. 

* Comment에 author, 작성자 정보가 있는데, 이때 외래키는 '작성자'로 지정한다. 이유는 한 명의 유저가 여러 개의 댓글을 쓸 수 있기 때문이다. (그래서 작성자 : 댓글 = 1 : n 관계다. 작성자와 포스팅 관계도 마찬가지!)

* User 모델은 장고 Auth 앱에서 기본 지원하고 있다. 그 유저 모델과 Profile은 1 : 1 관계면 충분하다고 본다. 그래서 OneToOneField를 썼다. 

* slug는 우리 나라는 별로 안 쓰는데, 외국의 여러 언론사들 시스템을 보면 특정 기사에 대한 url이 영문, 숫자, 하이픈으로 이뤄진 경우가 있다. 그 부분을 slug라고 부른다. 그런 slug 필드를 구성하면, 장고가 뭘 지원해주냐. 제목과 slug는 다른데, 제목으로 slug를 자동 생성해주기도 한다. 이건 어드민의 기능이다.
  - allow_unicode는 디폴트가 거짓인데 참으로 지정하면, 한글로 slug를 쓸 수 있게 된다.
  
* title에는 blank를 안 넣었지만, desc, image는 blank를 허용하겠다. 

* comment_count 댓글의 개수가 음수일 경우는 없으니까 타이트하게 PositiveIntegerField를 지정했다. default 값으로 0을 넣어줬다.

* 하나의 포스팅에 다수의 태그가 올 수 있고, 하나의 태그에 다수의 포스팅이 속한다. 그래서 ManyToManyField 지정할 수 있다. 

* is_publish 발행 여부는 BooleanField를 지정했고, 디폴트는 거짓이다. 

### 강력히 권하는 바
설계한 데이터베이스 구조에 따라 최대한 필드 타입을 **타이트하게** 지정해주는 것이 **입력값 오류**를 막을 수 있다.

* blank/null 지정은 최소화 -> 


