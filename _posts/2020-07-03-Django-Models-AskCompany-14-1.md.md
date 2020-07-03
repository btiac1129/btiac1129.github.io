---
layout: post
title:  "[Django] 리액트와 함께 장고 시작하기 Django Models 1. 장고 모델 소개"
date:   2020-07-03 22:45:36 
categories: Python Django Models 
use_math: true
---

**_Description_ : 리액트와 함께 장고 시작하기 Django Models 1. 장고 모델 (ORM) 소개 (1/14)**

***

### 애플리케이션의 다양한 데이터 저장방법
웹 애플리케이션, PC 애플리케이션 다 다양한 데이터 저장 방법이 있다. 
* 데이터베이스 : RDBMS, NoSQL 등
* 파일 : 로컬, 외부 정적 스토리지(나스, 아마존 S3, Azure Storage 등 활용 가능)
* 캐시서버 : memcached, redis 등

보통 일반적으로 어떤 서비스의 데이터라면 데이터베이스에 저장한다. 어떤 정적 파일의 경우에는 파일 시스템을 활용하게 될 것이다. 

### 데이터베이스와 SQL
데이터베이스는 어떠한 서버이며, 이 서버에 SQL 언어로 질의라는 것을 할 수 있다. 쿼리라고도 부른다. 

* RDBMS : PostgreSQL, MySQL, SQLite, MS-SQL, Oracle 등
* NoSQL : (해당 엔진만의 SQL 지원할 경우가 있음) MongoDB, Cassandra, CouchDB, Google Big Table 등

같은 작업을 하더라도 보다 적은 수의 SQL 그리고 보다 높은 성능의 SQL을 수행할 수 있다면 보다 성능 좋은 서비스가 될 것이다. 

직접 SQL을 만들 수도 있지만, 요즘에는 ORM을 통해 SQL을 생성/실행하기도 한다. 

중요한 것은 ORM을 쓰덜더라도, 내가 작성된 ORM 코드를 통해 어떤 SQL이 실행되고 있는지 파악하고 이를 최적화할 수 있어야 한다. 그래서 이런 파악을 위해서 여러 툴 중 하나인 django-debug-toolbar를 활용하여 확인할 수 있다. 

### 장고 ORM인 모델은 RDB(S)만을 지원한다
장고 3.0.2 기준으로 기본 제공되는 백엔드는 MySQL, Oracle, PostgreSQL, sqlite3이다. Microsoft SQL Server를 사용할 경우, django-pyodbc-azure 라이브러리를 별도로 설치해서 사용해야 한다. 

### 다양한 파이썬 ORM이 있다
* RDB : Django Models, SQLAlchemy, Orator, Peewee, PonyORM 등 
* NoSQL : django-mongodb-engine, hot-redis, MongoEngine, PynamoDB 등
장고를 쓴다고 해서 장고 모델만 사용할 수 있는 것은 아니다. 장고 모델과 함께 지원하는 기능이 많다는 것이지. 장고를 쓰더라도 함께 다른 ORM 활용해서 애플리케이션을 만들 수 있다. 

### 장고의 강점은 강력한 Model과 Form이다
* 장고 개발이라고 한다면 Model과 Form을 통한 개발이 될 것이다. 
* 유저가 서버로 올려보낸 값의 유효성 검사 등.
* SQL을 직접 실행할 수도 있지만 가능하면 ORM을 쓰기를 권장한다. 

```python
> python manage.py shell

>>> from django.db import connection
>>> cursor = connection.cursor() # 커서를 획득해서 실행 가능
>>> cursor.close() # 커서 빠져나오기
```

### Django Model (장고 내장 ORM)
* 데이터베이스 테이블과 파이썬 클래스를 1:1로 매핑한다.
* 모델 클래스명은 단수형으로 지정한다. Posts가 아닌 Post
* 클래스이기에 필히 첫 글자가 대문자인 PascalCase 네이밍 사용
* 매핑되는 모델 클래스는 DB 테이블 필드 내역이 일치해야 한다.
* 데이터베이스 테이블과 파이썬 클래스 중, 먼저 만든 것에 맞춰서 만든다. 
* 모델 만들기 전에 서비스에 맞는 데이터베이스 설계가 필수다. 이것은 데이터베이스의 영역이므로 관계형 데이터베이스 학습도 필요. 실제 서비스에서는 DB에 대해서 충분히 학습해야만 서비스를 원활히 운영할 수 있을 것이다. 

```python
from django.db import models

class Post(models.Model): # models.Model 이 문법은 파이썬의 상속 문법이다.
  title = models.CharField(max_length=100) # 원하는 필드 명과 필드에 대한 타입 지정.
  content = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
```

### 모델 활용 순서
모델 활용 순서는 곧 개발 순서다. 장고 모델을 통해 데이터베이스 형상을 관리할 경우는 다음과 같다. 
1. 모델 클래스를 작성한다. 
2. 모델 클래스로부터 마이그레이션 파일 생성 - makemigrations
3. 마이그레이션 파일을 데이터베이스에 저적용 - migrate
4. 모델 활용

장고 외부에서 데이터베이스 형상을 관리할 경우
* inspectdb 명령을 통해 소스 파일 만들어서 카피하여 쓰면 된다. 

### 모델명과 DB 테이블명
* DB 테이블명은 디폴트로 "앱이름_모델명"으로 지어진다. (ex) blog_post, blog_comment, shop_item, shop_review
* 커스텀 지정을 하고자 하면, 모델 Meta 클래스의 db_table의 원하는 테이블명을 makemigrations 하기 전에 지정하면 된다. 

### 실습 
```python
> python manage.py startapp instagram
```

* `settings.py` > `INSTALLED_APPS`에 `'instagram'` 새로 추가하기
* `instagram` 폴더에 `urls.py` 생성하기

```python
# instagram > urls.py

urlpatterns = [

] # 생성


# askcompany > urls.py

urlpatterns = [
  path('admin/', admin.stie.urls),
  path('instagram/', include('instagram.urls')), # 생성
]
```

* 장고 앱 만들고 기본적 등록이 끝났다. 이렇게 하고 나서 모델을 만드는 것이다.

```python
# instagram > models.py
from django.db import models

class Post(models.Model):
  message = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
# terminal
> python manage.py makemigrations instagram
> python manage.py migrate instagram  # 이렇게 하고 나면 실제 DB에 'instagram_post'라는 테이블이 생성된다.

> python manage.py sqlmigrate instagram 0001_initial  # 입력하면 실제 DB에 들어가는 '쿼리'를 볼 수 있다.
```

* 마이그레이션 파일 적용 후 DB 확인은 DB 종류에 따라 다양하게 확인 가능하다. 

```python
> python manage.py dbshell  # sqlite이 설치되어 있을 경우.
sqlite> .tables # 테이블 목록이 나온다. 
sqlite> .quit

# 혹은 sqlite browser를 사용할 수도 있다. 
```


