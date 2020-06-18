---
layout: post
title:  "[파이썬 개발] 모듈과 패키지"
date:   2020-06-18 11:24:34 
categories: Python Module Package
use_math: true
---

**_Description_ : 뇌를 자극하는 파이썬 3, 모듈과 패키지 요약**

* [모듈](#module)
* [패키지](#packages)
* [site-packages에 대해](#site-packages)

***

## 모듈 <a id="module"></a>

* 사전마다 차이가 있긴 하지만 모듈은 대체적으로 '독자적인 기능을 갖는 구성 요소'를 의미한다.  파이썬에서는 각각의 소스 파일을 일컬어 '모듈'이라고 한다. 
* 모듈은 제공자에 따라 표준 모듈, 사용자 생성 모듈, 서드 파티 모듈로 나눈다. 
	* 표준 모듈 : 파이썬과 함께 따라오는 모듈
	* 사용자 생성 모듈 : 프로그래머가 직접 작성한 모듈
	* 서드 파티 (3rd party) 모듈 : 파이썬 재단도 프로그래머도 아닌 다른 프로그래머, 또는 업체에서 제공한 모듈
* 모듈을 분리함으로써 얻는 또 하나의 장점은 코드를 재사용할 수 있다는 점이다. 
* `import`가 별 것 아닌 것처럼 보여도 모듈과 모듈을 결합하는 중요한 역할을 한다. 


### `import`에 대해

* `import`의 역할은 정확하게는 **'다른 모듈 내의 코드에 대한 접근'을 가능하게 하는 것**이다. `import`가 접근 가능하게 하는 코드에는 **변수, 함수, 클래스 등이 모두 포함**된다. 
* `from calculator import *`에서 `import *`와 같은 코드는 사용하지 않는 것이 좋다. **코드가 복잡해지고 모듈의 수가 많아지면 저런 코드가 어떤 모듈 또는 어떤 변수, 함수를 불러오고 있는지 파악하기 힘들어진다**. 다시 말해 코드를 읽는 데 상당한 지장을 준다. `import`문을 이용해 모듈에 접근할 때에는 **불러올 변수, 함수의 이름을 정확하게 명시하는 것을 권한다**.


### 모듈을 찾아서

* `import` 문을 만나면 파이썬은 다음과 같은 순서로 모듈 파일을 찾아 나선다. (파이썬의 모듈 경로 탐색 규칙)
	1.	파이썬 인터프리터 **내장 모듈**
	2.	sys.path에 정의되어 있는 디렉토리
* sys 모듈은 **내장 모듈**이기 때문에 확장자가 `py` 형태인 파일로는 찾을 수 없다. C 언어로 프로그래밍되어 파이썬에 내장되어 있기 때문이다. **sys 모듈은 파이썬의 모듈에 관련된 정보를 몇 가지 갖고 있다**. **'파이썬 내장 모듈의 목록'**이 그 중 하나다.  
```python
>>> import sys
>>> print(sys.builtin_module_names)
('__builtin__', '__main__', '_ast', '_bisect', '_codecs', '_codecs_cn', '_codecs_hk', '_codecs_iso2022', '_codecs_jp', '_codecs_kr', '_codecs_tw', '_collections', '_csv', '_functools', '_heapq', '_hotshot', '_io', '_json', '_locale', '_lsprof', '_md5', '_multibytecodec', '_random', '_sha', '_sha256', '_sha512', '_sre', '_struct', '_subprocess', '_symtable', '_warnings', '_weakref', '_winreg', 'array', 'audioop', 'binascii', 'cPickle', 'cStringIO', 'cmath', 'datetime', 'errno', 'exceptions', 'future_builtins', 'gc', 'imageop', 'imp', 'itertools', 'marshal', 'math', 'mmap', 'msvcrt', 'nt', 'operator', 'parser', 'signal', 'strop', 'sys', 'thread', 'time', 'xxsubtype', 'zipimport', 'zlib')
```
* 가져오고자 하는 모듈이 위에서 출력한 내장 모듈 목록에 없다면, 파이썬은 **sys.path에 정의되어 있는 디렉토리에서 모듈 파일을 탐색**하기 시작한다. sys.path에 정의되어 있는 디렉토리는 크게 다음 세 가지로 나뉜다.
	* 파이썬 모듈이 실행되고 있는 현재 디렉토리
	* PYTHONPATH 환경변수에 정의되어 있는 디렉토리
	* 파이썬과 함께 설치된 기본 라이브러리 

```python
# sys_path.py
>>> import sys
>>> for path in sys.path:
		print(path)
```

```
btiac@DESKTOP-LC7U1F9 C:\Users\btiac\Desktop\end
$ set PYTHONPATH=C:\Modules

btiac@DESKTOP-LC7U1F9 C:\Users\btiac\Desktop\end
$ python sys_path.py
C:\Users\btiac\Desktop\end
C:\Modules							#!
C:\WINDOWS\SYSTEM32\python27.zip	#!
C:\Python27\DLLs					#!
C:\Python27\lib						#!
C:\Python27\lib\plat-win
C:\Python27\lib-tk
C:\Python27							#!
C:\Python27\lib\site-packages		#!
``` 


### 메인 모듈과 하위 모듈

* 파이썬에서는 이른바 '최상위 수준(Top Level)'에서 실행되는 스크립트가 있을 뿐, 메인 함수가 따로 없다. 
<!--stackedit_data:
eyJoaXN0b3J5IjpbOTA3NzIwODQ2LC0xNjc5NDUzNzI2LDE2OD
Y1NTQwMDZdfQ==
-->