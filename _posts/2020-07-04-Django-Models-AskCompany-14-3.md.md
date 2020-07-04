---
layout : post
title: "[Django] 리액트와 함께 장고 시작하기 Django Models 3. 장고 admin을 통한 데이터 관리 (기초)"
date: 2020-07-04 15:10:36 
categories: Python Django Models 
use_math: true
---

**_Description_ : 리액트와 함께 장고 시작하기 Django Models 2. 장고 모델 필드 (3/14)**

***

### django admin
장고에서 제공해주는 기본 앱은 django 안에 있는 contrib 폴더 안에 있다.
* django.contrib.admin 앱을 통해 제공
  - 디폴트 경로는 /admin/ 이다. 실제 서비스에서는 다른 주소로 변경하길 권장한다.
  
```python
# askcompany > urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
  path('admin/', admin.site.urls),  
  # 이 주소는 다른 주소로 변경할 수 있다.
  # path('myadmin', admin.site.urls) 이렇게 해도 내부에서 알아서 찾아간다. 
  # 이런 기능을  URL Reverse 기능이라고 부른다. 타 프레임워크랑 다르게 장고는 이 기능을 적극 활용한다.
  path('instagram/', include('instagram.urls')),
]
```

  - 혹은 django-admin-honeypot 앱을 이용해서 가짜 admin 페이지를 노출시키기도 한다. 동일하게 로그인 페이지가 뜨지만, honeypot은 절대 로그인을 허용하지 않는다. 로그인을 한 사람의 IP 등을 수집해서 DB에 기록한다. 
  
* 모델 클래스 등록을 통해 조회, 추가, 수정, 삭제 등의 웹 UI를 제공해준다.  
  - Instagram 앱에 만든 Post 모델을 admin에서 사용하려면, admin.py에 register해야 한다.  
  - 서비스 초기에 관리도구로서 사용하기에 제격이다. 이는 CMS 어떤 컨텐츠 관리 도구로 보기는 어렵고, 서비스 초기에 데이터베이스 데이터 관리 UI 정도로 보면 좋다. 그래서 초반에 관리 도구 만들 시간 줄이고 End-User 서비스를 만드는데 집중할 수 있어서 좋다. 
  - 장고 어드민은 Django Form을 적극적으로 사용한다. 타이틀과 그 필드에 맞는 위젯을 보여준다. 유효성 결과를 보여주는 부분도 Django Form에서 나오는 기능이다.
  

```python
# Instagram > admin.py

from django.contrib import admin
from .models import Post

# 등록법 1
admin.site.register(Post)  # 모델만 등록했기 때문에 기본 ModelAdmin으로 동작한다

# 특정 모델에 대해서 어드민 등록은 1번만 된다. 이미 등록된 모델에 대해서는 unregister 함수로 등록 해제하고 새로 등록해야 한다.
# created_at : 이 Post 모델을 통해 저장할 경우, auto_now_add 속성이기에 이 레코드가 생성될 때, 디비에 Insert할 때의 시각이 생성된다.
# updated_at : auto_now 속성은 수정 시각이 자동으로 저장된다.

# 등록법 2
class PostAdmin(admin.ModelAdmin):
  pass
 
admin.site.register(Post, PostAdmin)  # 내가 지정한 ModelAdmin인 PostAdmin으로 등록

# 등록법 3
@admin.register(Post) # 파이썬의 장식자 문법은 어떤 대상이라도 감싸는 것이다. Wrapping. 감싸서 감싼 대상의 기능을 변경할 수 있다. 
class PostAdmin(admin.ModelAdmin):
  pass
```

### 실습 103A

```python
# Instagram > models.py

from django.db import models

class Post(models.Model):
  message = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now_add)
  
  def __str__(self):
    # return f"Post object ({self.id})"     # __str__ 함수의 기본 셋팅이 아마 이럴 것.   
    # 커스텀 해보기 
    # return f"Custom Post object ({self.id})"
    return self.message
```

* 모델 어드민(ModelAdmin)을 커스텀한 것을 통해 어드민 사이트 레코드에 컬럼을 추가할 수도 있고, 검색 UI, 혹은 액션 등을 추가할 수 있다.

### list_display, list_display_links, search_fields, list_filter  / 실습 103B

```python
# Instagram > admin.py
from django.contrib import admin
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
  list_display = ['id', 'message', 'message_length', 'is_public', 'created_at', 'updated_at'] 
  # pk인 컬럼은 'pk'로 추가해도 가능 
  # Post 모델에서 만든 함수 message_length 추가! 이렇게 인자 없는 함수만 가능하다.
  # 혹은 파이썬에 @property라는 장식자가 있는데, 이걸 이용해서 함수로 속성을 정의할 수도 있다.
  list_display_links = ['message']  # 여러 개 넣을 수 있다. 
  list_filter = ['created_at', 'is_publish']
  search_fields = ['message'] 
  

# Instagram > models.py
from django.db import models

class Post(models.Model):
  message = models.TextField()
  is_public = models.BooleanField(default=False, verbose_name='공개여부') # 추가 후, 마이그레이션!
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now_add)
  
  def __str__(self):
    return self.message
  
  def message_length(self): # !
    return len(self.message)
  message_length.short_description = '메시지 글자 수' # !
```

* `message_length` 함수를 모델 단에 구현하느냐. 어드민 단에 구현하느냐.
  - 둘 다 가능하다. 자주 사용하는 로직이라면 모델 단에 구현하는 게 맞겠다. 그러나 어드민에서만 사용할 거라면 어드민 단에 구현해도 된다.

```python
# Instagram > admin.py

# ...
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
  list_display = ['id', 'message', 'message_length', 'is_public', 'created_at', 'updated_at']
  list_display_links = ['created_at', 'message']
  list_filter = ['is_publish']
  search_fields = ['message']
  
  def message_length(self, post): # 이 함수는 매번 포스트 객체가 넘어온다. 이건 어드민이 알아서 해준다.
    return f"{len(post.message)} 글자"
```

* search_fields 속성 - 어드민 내 검색 UI를 통해서 DB 측에 where 쿼리를 날릴 수 있다. 

```python
# django shell

> python manage.py shell
>>> from instagram.models import Post
>>> Post.objects.all()
>>> qs = Post.objects.all().filter(message__icontains='첫번째')
>>> print(qs.query) # 실제 DB로 전달되는 쿼리 확인할 수 있다. 
# 이것을 search_fields로 구현 가능! 내부적으로는 이런 로직을 탄다.
```

```python
# migration

> python manage.py showmigrations instagram # instagram 앱의 마이그레이션 적용 내역 확인할 수 있다.
instagram
[x] 0001_initial
[x] 0002_post_is_public

> python manage.py showmigrations # 전체 앱의 마이그레이션 적용 내역을 확인할 수 있다.
```
