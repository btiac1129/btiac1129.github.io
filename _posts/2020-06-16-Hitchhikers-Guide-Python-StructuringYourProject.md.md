---
layout: post
title:  "[파이썬을 여행하는 히치하이커를 위한 안내서] Writing Great Python Code 요약"
date:   2020-06-16 22:20:34 
categories: Python Project-Structure
use_math: true
---

**_Description_ : [파이썬을 여행하는 히치하이커를 위한 안내서][1] : Writing Great Python Code 읽고 내용 요약하기**

[1]: https://python-guide-kr.readthedocs.io/ko/latest/](https://python-guide-kr.readthedocs.io/ko/latest/)

[프로젝트 구성하기](#Structuring-Your-Project)
* [저장소의 구조](#Structure-of-the-Repository) 
	* [중요합니다.](#It's-Important)
	* [샘플 저장소](#Sample-Repository)
	* [【1】 실제 모듈](#Actual-Module)
	* [【2】 라이선스](#License)
	* [【3】 Setup.py](#Set-Up)
	* [【4】 Requirements 파일](#Requirements File)
	* [【5】 문서](#Documentation)
	* [【6】 테스트 도구](#Test-Suite)
	* [Makefile](#Makefile)
	* [장고 어플리케이션에 대하여](#Regarding-Django) 
* [코드 구성이 핵심](#Structure-of-Code-is-Key)

***

## 프로젝트 구성하기 <a id="Structuring-Your-Project"></a>

* 여기서 '구성'이란, 프로젝트를 어떻게 **목표**한 바에 가장 부합하도록 수행할 것인지 **의사결정**하는 것을 의미한다. 
* 깔끔하고 효율적인 코드라는 **파이썬의 특성을 극대화할 수 있는 방법을 고민할 필요**가 있다. 
* 일반적으로 구성이란 ①**로직과 의존성이 깔끔한 코드**를 만드는 것을 의미할 뿐만 아니라 ②**파일 시스템에 어떻게 파일과 폴더들을 구성하느냐**의 문제다.
	*  **어느 모듈에 어느 기능**이 들어가야 할까?
	*  프로젝트에서 **데이터는 어떻게 흘러가야** 할까?
	* 어떤 특징과 기능이 **통합**되거나 **분리**되어야 할까?
* 이러한 질문에 답하면서 프로젝트 계획을 시작할 수 있고, 더 나아가 최종적인 제품이 어떤 모습일지 그려볼 수 있다. 
* 여기서 파이썬의 **모듈과 임포트 시스템**을 자세히 살펴본다. **이 두 가지가 프로젝트를 위한 강력한 구조를 만드는 데 핵심적인 요소**이기 때문이다. 그 다음, **확장하기 쉽고 확실하게 테스트할 수 있는 코드를 짜기 위한 방법**에 관하여 다양한 관점에서 검토할 것이다. 


### 저장소의 구조 <a id="Structure-of-the-Repository"></a>

#### 중요합니다. <a id="It's-Important"></a>

**코딩 스타일, API 디자인, 자동화 등** 건강한 개발 사이클에 필수적인 요소들이 있다. **저장소의 구조**도 **프로젝트의 아키텍처**에 결정적인 요소이다. 

당신과 동료들은 어느새 저장소의 구석구석에 이미 친숙해져있을 것이다. 그래도 모양새는 중요하다.

#### 샘플 저장소 <a id="Sample-Repository"></a>
이 저장소는 [Github](#https://github.com/navdeep-G/samplemod)에서 볼 수 있다.

```
README.rst
LICENSE
setup.py
requirements.txt
sample/__init__.py
sample/core.py
sample/helpers.py
docs/conf.py
docs/index.rst
tests/test_basic.py
tests/test_advanced.py
```

#### 【1】 실제 모듈 <a id="Actual-Module"></a>

| Location | Purpose | 
| -------- | ------- |
| `./sample/` or `./sample.py` | The code of interest |

* `./sample/` : 모듈 패키지는 저장소의 핵심이며 숨기지 않는다.
* `./sample.py` : 모듈 안에 단 하나의 파일밖에 없다면, 저장소의 최상위 폴더에 바로 두어도 좋다. 
* 라이브러리를 애매한 소스나 파이썬 하위 디렉토리에 두지 않는다.


#### 【2】 라이선스 <a id="License"></a>

| Location | Purpose |
| -------- | ------- |
| `./LICENSE` | Lawyering up |

* 라이선스 문서 전문과 저작권이 반드시 파일에 들어가야 한다. 
* 어떤 라이선스를 써야할 지 모르겠다면 [choosealicense.com]을 확인하자.
* 라이선스 없이 코드가 배포되어도 상관 없을 수 있지만, 그럴 경우 사람들이 당신의 코드를 사용하기 꺼릴 것이다.


#### 【3】 `Setup.py`  <a id="Set-Up"></a>

| Location | Purpose |
| -------- | ------- |
| `./setup.py` | Package and distribution management |

모듈 패키지가 저장소의 최상위 폴더에 있다면, `Setup.py`도 최상위 폴더에 두어야 한다. 


#### 【4】 Requirements 파일 <a id="Requirements-File"></a>

| Location | Purpose |
| -------- | ------- |
| `./requirements.txt` | Development dependencies |

* pip requirements file : 반드시 저장소의 최상위 폴더에 두어야 한다.
* 이 파일은 프로젝트에 기여하기 위한 작업들, 즉 테스트, 빌드, 문서 생성을 위해 필요한 의존성에 대해 명시해야 한다. 
* 반면에 프로젝트에 개발 의존성이 없거나, `setup.py`를 통해 개발 환경 설치를 하는 편이 좋다면 이 파일은 불필요하다.  


#### 【5】 문서 <a id="Documentation"></a>

| Location | Purpose |
| -------- | ------- |
| `./docs/` | Package reference documentation |

* 다른 경로에 문서를 둘 이유가 없다. 


#### 테스트 도구 <a id="Test-Suite"></a>
For advice on writing your tests, see [Testing Your Code](#https://docs.python-guide.org/writing/tests/)

| Location | Purpose |
| -------- | ------- |
| `./test_sample.py` or `./tests` | Package integration and unit tests |

* `./test_sample.py` : 프로젝트를 시작할 때 보통 이렇게 하나의 파일에 간단한 테스트 도구를 만들 것이다. 

```
tests/test_basic.py
tests/test_advanced.py
```
→  테스트 도구가 커지면 이런 폴더를 만들어서 테스트 파일을 옮기면 된다. 

* 테스트를 수행하는 데는 몇 가지 방법이 있다. 
	* `site-packages`에 패키지를 설치하게 한다. → 계속 변경되고 있는 코드를 테스트하기 위해 `setup.py`를 실행해야 한다면, 변경 중인 코드의 각 시점마다 독립된 환경 설정을 해야 한다.
	* (★) 패키지 경로를 잘 찾기 위해 간단하지만 명확한 경로를 사용한다.    
* [자세히 알아보기](#https://python-guide-kr.readthedocs.io/ko/latest/writing/structure.html#test-suite)


### Makefile <a id="Makefile"></a>

| Location | Purpose |
| -------- | ------- |
| `./Makefile` | Generic management tasks |

```
================
Sample Makefile:
================

init:
	pip install -r requirements.txt
	
test:
	py.test tests
	
.PHONY: init test
```

다른 관리 작업 스크립트(`manage.py` or `fabfile.py`)들도 Makefile과 마찬가지로 저장소의 최상위 디렉토리에 둔다.
 
 
#### 장고 어플리케이션에 대하여 <a id="Regarding-Django"></a>

`$ django-admin.py startproject samplesite .` : 이렇게 하자. `.`에 주목하기.

그 결과물이다.
```
README.rst
manage.py
samplesite/settings.py
samplesite/wsgi.py
samplesite/sampleapp/models.py
```

***

### 코드 구성이 핵심 <a id="Structure-of-Code-is-Key"></a>
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTQwMzgzMjM2NiwtODQ1NTA3MDMsLTMxOD
E0MDc3OCw4MzY2NzU1NDAsLTE1MzU5NTc3OTUsODU3NjU5ODgw
XX0=
-->