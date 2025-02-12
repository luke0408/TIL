# 자바스크립트란?

## Summary  
자바스크립트(JavaScript)는 웹페이지에 동적인 기능을 추가하기 위해 개발된 프로그래밍 언어이다. 현재는 웹뿐만 아니라 서버, 모바일, 데스크톱 환경에서도 사용되고 있으며, HTML과 CSS와의 강력한 결합성을 통해 웹 개발에서 핵심적인 역할을 한다.  

## Details  

### 자바스크립트의 정의  
자바스크립트는 웹페이지를 동적으로 만들기 위해 설계된 언어이다. 웹페이지 내에서 실행되는 프로그램을 '스크립트(script)'라고 부르며, HTML 내부에 직접 삽입할 수도 있다. 특별한 컴파일 과정 없이 텍스트 형태로 작성하고 즉시 실행할 수 있다는 점이 특징이다.  

이러한 특성 때문에 자바(Java)와 이름이 비슷하지만, 실제로는 완전히 다른 언어이다. 자바스크립트는 ECMAScript라는 독립적인 명세를 따르며, 웹 개발 환경에 최적화된 기능을 갖추고 있다.  

### 자바스크립트의 명칭 유래  
처음 개발될 당시 자바스크립트의 이름은 'LiveScript'였다. 하지만 당시 자바(Java)의 인기가 매우 높았고, 이를 활용하면 홍보에 유리할 것이라는 판단하에 'JavaScript'로 변경되었다. 이름만 보면 자바와 관련이 있는 것처럼 보이지만, 실제로는 독립적인 언어이다.  

### 자바스크립트 엔진 
자바스크립트는 브라우저에는 `자바스크립트 가상 머신`이라는 엔진이 내장되어 있어 그 위에서 실행된다. 

엔진의 종류는 다양하다:

- V8 – Chrome, Opera
- SpiderMonkey – Firefox
- Trident/Chakra – Internet Explorer
- ChakraCore – Microsoft Edge
- SquirrelFish – Safari

> [!NOTE]
> 엔진은 어떻게 동작하나요?
> 1. 먼저, 브라우저가 스크립트를 읽는다 (파싱) 
> 2. 기계어로 변환(컴파일)한다. 
> 3. 기계어로 변환된 코드가 실행된다. 기계어로 전환되엇기 때문에 실행 속도가 빠르다.

### 브라우저에서의 역할과 제한  

자바스크립트는 웹페이지에서 다양한 역할을 수행할 수 있다:

- HTML/CSS 조작.
- 사용자 입력(마우스, 키보드) 감지 및 반응.
- 네트워크 요청(AJAX, COMET 등) 처리.
- 쿠키 조작 및 로컬 스토리지 활용.
- 클라이언트와 서버 간 상호작용.

하지만 보안상의 이유로 여러 제한이 존재한다:

- 디스크의 파일을 자유롭게 읽거나 쓰는 것 제한.
- 카메라, 마이크 등 하드웨어 접근 시 사용자 허가 필요.
- 보안 정책(동일 출처 정책)으로 다른 도메인의 데이터 접근 제한.

> [!IMPORTANT]
> 다른 도메인의 데이터 접근 제한
> 브라우저 내 여러 개의 탭이나 창이 존재하더라도, 서로 다른 도메인의 페이지는 기본적으로 정보를 공유할 수 없다.
> 이를 '동일 출처 정책(Same Origin Policy)'이라고 하며, 때문에 서로 다른 도메인에서 실행되는 웹페이지 간의 정보 교환은 기본적으로 차단된다. <br>
> 이를 해결하려면 CORS(Cross-Origin Resource Sharing) 등의 보안 정책을 따로 설정해야 한다.  

### 브라우저 외 환경에서의 활용  
자바스크립트는 웹 브라우저 외에도 다양한 환경에서 실행될 수 있다. 대표적인 예가 **Node.js**이며, 이를 활용하면 서버에서도 자바스크립트를 실행할 수 있다. 또한, 모바일 앱과 데스크톱 애플리케이션 개발에도 활용되며, 다양한 디바이스에서 실행할 수 있도록 발전하고 있다.  

### 자바스크립트의 강점  
자바스크립트는 HTML과 CSS와 완벽하게 통합될 수 있는 언어이다. 이 덕분에 웹 개발에서 필수적인 요소로 자리 잡았으며, 모든 주요 브라우저에서 기본적으로 지원된다는 점도 큰 장점이다. 또한, 문법이 비교적 간단하여 초보자도 쉽게 접근할 수 있으며, 필요에 따라 복잡한 기능도 구현할 수 있다.  

### 자바스크립트에서 파생된 언어들  
자바스크립트의 문법이 모든 개발자의 요구를 충족하는 것은 아니다. 
이를 보완하기 위해 여러 파생 언어가 등장했다.  

- **CoffeeScript**는 자바스크립트의 문법을 간결하게 만들어 가독성을 높였다.  
- **TypeScript**는 엄격한 자료형 시스템을 도입하여 대규모 애플리케이션 개발에 유리하다. Microsoft에서 개발하였다.  
- **Flow**는 Facebook이 개발한 정적 타입 검사 도구로, TypeScript와 비슷한 기능을 제공한다.  
- **Dart**는 Google이 개발한 언어로, 모바일 앱 개발에 최적화되어 있으며, 자바스크립트로 변환하여 실행할 수도 있다.  

이처럼 다양한 대체 언어가 존재하지만, 웹 개발을 위해서는 결국 자바스크립트를 깊이 이해하는 것이 필수적이다. 트랜스파일러를 이용하면 다른 언어를 자바스크립트로 변환할 수 있지만, 웹 브라우저에서 실행되는 코드는 결국 자바스크립트이기 때문이다.  

> [!NOTE]  
> 최신 웹 개발에서는 TypeScript가 점점 더 많이 사용되고 있으며, 대규모 프로젝트에서는 정적 타입 시스템이 선호되는 경향이 있다. 하지만 웹 브라우저에서 실행되는 것은 여전히 순수한 자바스크립트 코드이다.  

## Reference  
**link:** External reference  
- [MDN JavaScript Guide](https://developer.mozilla.org/ko/docs/Web/JavaScript)  
- [The Modern JavaScript Tutorial](https://ko.javascript.info/)
