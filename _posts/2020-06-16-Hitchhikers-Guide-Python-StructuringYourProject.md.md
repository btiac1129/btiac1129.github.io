---
layout: post
title:  "[파이썬을 여행하는 히치하이커를 위한 안내서] Writing Great Python Code 요약"
date:   2020-06-16 22:20:34 
categories: Python Project-Structure
use_math: true
---

**_Description_ : 【파이썬을 여행하는 히치하이커를 위한 안내서】 : Writing Great Python Code 읽고 내용 요약하기**

[출처][1]
[1]: https://python-guide-kr.readthedocs.io/ko/latest/](https://python-guide-kr.readthedocs.io/ko/latest/)

[프로젝트 구성하기](#Structuring-Your-Project)
* [저장소의 구조](#Structure-of-the-Repository) 
	* [중요합니다.](#It's-Important)
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

### 코드 구성이 핵심 <a id="Structure-of-Code-is-Key"></a>
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwMzYxMzMzMTAsODU3NjU5ODgwXX0=
-->