---
layout: post
title:  "[자바스크립트 언어] 모던 자바스크립트 튜토리얼 Part1 - 소개"
date:   2020-06-9 09:45 
categories: javascript ModernJavascript 
use_math: true
---

**_Description_ : [모던 자바스크립트 튜토리얼][1] Part1 - 소개(1:1-4/14 공부 기록)**

[1]: https://ko.javascript.info/getting-started
* [1.1 자바스크립트란?](#An-Introduction-to-Javascript)
* [1.2 메뉴얼과 명세서](#Manuals-and-Specifications)
* [1.3 코드 에디터](#Code-Editors)
* [1.4 개발자 콘솔](#Developer-Console)

***

## 1.1 자바스크립트란?<a id="An-Introduction-to-Javascript"></a>

#### ! '정의'에서

자바스크립트는 브라우저뿐만 아니라 **서버**에서도 실행할 수 있다. 이 외에도 **자바스크립트 엔진이라 불리는 특별한 프로그램**이 들어 있는 **모든 디바이스**에서도 동작한다. **브라우저에는 '자바스크립트 가상 머신'이라 불리는 엔진이 내장되어 있다**. **Chrome**과 Opera에서 쓰이는 엔진은 **V8**이다.


#### ! '엔진의 기본 동작 원리'에서

1. 엔진(브라우저라면 내장 엔진)이 스크립트를 읽는다 → 파싱(Parsing)
2. 읽어 들인 스크립트를 기계어로 전환한다 → 컴파일(Compile)
3. 기계어로 전환된 코드가 실행된다. (기계어로 전환되었기 때문에 실행 속도가 빠르다.)

엔진은 **프로세스 각 단계마다 최적화**를 진행한다. 심지어 컴파일이 끝나고 **실행 중인 코드를 감시하면서**, 이 코드로 흘러가는 데이터를 분석하고, **분석 결과를 토대로 기계어로 전환된 코드를 다시 최적화**하기도 한다. **이런 과정**을 거치면 스크립트 실행 속도는 **더 빨라진다**.


#### ! '브라우저에서 할 수 있는 일'에서

* 모던 자바스크립트는 **'안전한'** 프로그래밍 언어 → **메모리나 CPU 같은 저수준 영역의 조작 허용X**. **애초에** 이런 접근이 필요치 않은 **브라우저를 대사으로 만든 언어라서**.
* 자바스크립트의 능력은 **실행 환경**에 상당한 영향을 받는다. 
  * (ex1) Node.js 환경 : 임의의 파일을 읽거나 쓰고, 네트워크 요청을 수행하는 함수를 지원.
  * (ex2) 브라우저 : 웹 페이지 조작, 클라이언트와 서버의 상호작용에 관한 모든 일 (ex. 클라이언트 측에 데이터 저장하기, 쿠키를 가져오거나 설정하기, 네트워크를 통해 원격 서버에 요청을 보내거나 파일을 다운로드/업로드하기)


#### ! '브라우저에서 할 수 없는 일'에서

브라우저는 보안을 위해 자바스크립트의 기능에 제약을 걸어놓았다.

(제약사항 ex. 브라우저 내 탭과 창은 대개 서로의 정보를 알 수 없다. 그런데 자바스크립트를 사용해 한 창에서 다른 창을 열 때는 예외가 적용된다. 하지만 이 경우에도 도메인이나 프로토콜, 포트가 다르다면 페이지에 접근할 수 없다. 이런 제약사항을 **동일 출처 정책**이라 부른다. **이 정책을 피하려면 두 페이지는 데이터 교환에 동의해야 하고, 동의와 관련된 특수한 JS 코드를 포함하고 있어야 한다.** `http://anysite.com`에서 받아온 페이지가 `http://gmail.com`에서 받아온 페이지 상의 정보에 접근해 중요한 개인정보를 훔치는 걸 막기 위해서, 사용자의 보안을 위해 만들어진 제약사항이다.) 


#### ! '자바스크립트 너머의 언어들'에서

JS 문법은 모든 사람의 요구를 충족시키진 못한다. 사람마다 각기 다른 기능을 원하고 프로젝트마다 요구사항이 천차만별이니 당연한 현상이다. 이로 인해 근래엔 **브라우저에서 실행 되기 전에 JS로 트랜스파일(transpile, 변환)할 수 있는 새로운 언어들**이 많이 등장했다. → CoffeeScript, TypeScript, Flow, Dart, etc.

***

## 1.2 메뉴얼과 명세서<a id="Manuals-and-Specifications"></a>

***

[[출처 : 모던 자바스크립트 튜토리얼(ko.javascript.info)]][2]
[2]: https://ko.javascript.info/getting-started