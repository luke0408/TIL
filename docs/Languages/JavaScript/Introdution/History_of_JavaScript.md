### 자바스크립트의 역사

## Summary

자바스크립트(JavaScript)는 1995년 탄생 이후 웹 개발의 중심 언어로 자리 잡았다. 초기에는 단순한 스크립트 언어였으나, **ECMAScript(ES) 표준화**와 **브라우저 발전**, **백엔드(Node.js) 확장**을 거치며 현재는 프론트엔드와 백엔드를 아우르는 강력한 언어로 성장했다.

| 버전 | 주요 변경점 |
| --- | --- |
| **ES1 (1997)** | 초기 표준화 |
| **ES2 (1998)** | 소규모 수정 |
| **ES3 (1999)** | 엄격한 비교(`===`), 예외 처리(`try/catch`) 추가 |
| **ES4 (취소됨)** | 클래스, 모듈, 정적 타입 도입 시도 (무산) |
| **ES5 (2009)** | `strict mode`, JSON 지원, 접근자 프로퍼티 추가 |
| **ES6 (2015)** | `let/const`, 화살표 함수, 클래스, 모듈, `Promise` 도입 |
| **ES7 (2016)** | `Array.prototype.includes()`, 지수 연산자(`**`) 추가 |
| **ES8 (2017)** | `async/await` 도입 |
| **ES9 (2018)** | `Rest/Spread` 연산자 추가 |
| **ES10 (2019 이후)** | 소규모 기능 개선 지속 (예: 옵셔널 체이닝, 글로벌 `this` 등) |

## Details

### **1. 탄생과 초기 표준화 (1995 - 1999)**

1995년 **브렌던 아이크(Brendan Eich)**가 넷스케이프에서 **10일 만에 Mocha**를 개발했다. 이후 **LiveScript → JavaScript**로 개명되었으며, 1996년 마이크로소프트는 이를 리버스 엔지니어링하여 **JScript**로 Internet Explorer에 탑재했다.

1997년 **ECMA 국제 표준화(ECMAScript 1, ES1)**가 이루어졌고, 1999년 ES3가 발표되면서 **엄격한 비교(===), 예외 처리(try/catch)** 등이 추가되었다.

:::note JavaScript라는 명칭은 Java의 인기를 이용한 마케팅 전략이었으며, 실제로 Java와는 관계가 없다. :::

### **2. 정체기와 ES4의 실패 (2000 - 2008)**

2000년대 초반, IT 버블 붕괴와 함께 **ECMAScript 표준화가 10년간 정체**되었다. ES4는 **클래스, 모듈, 정적 타입** 등의 기능을 도입하려 했으나, 지나치게 복잡하여 폐기되었다.

이 시기 마이크로소프트는 IE 시장 점유율을 90%까지 끌어올렸으나, 독자적인 기능 추가로 웹 개발자들에게 큰 혼란을 야기했다. 한편, AJAX의 등장으로 웹 애플리케이션의 가능성이 열렸으며, **2006년 jQuery**가 출시되어 **브라우저 간 호환성 문제를 해결**하며 웹 개발을 간소화했다.

### **3. Node.js와 자바스크립트의 확장 (2009 - 2015)**

2009년, **Node.js가 발표되면서 JavaScript는 서버 개발까지 확장**되었다. 같은 해, 보완적인 업데이트인 **ES5**가 출시되어 `strict mode`, JSON 지원 등이 추가되었다.

2010년대 초반에는 **AngularJS(2010), Backbone.js(2010), ReactJS(2013)** 등이 등장하면서 **싱글 페이지 애플리케이션(SPA) 개발이 활성화**되었다. 이후 Vue.js, Svelte 등 다양한 프레임워크가 등장하며 **프론트엔드 개발의 패러다임이 크게 변화**했다.

### **4. 모던 자바스크립트 시대 (2015 - 현재)**

2015년, **ES6(ECMAScript 2015)가 발표되면서 JavaScript의 현대화가 본격화**되었다. 주요 기능으로 `let`, `const`, 화살표 함수, 클래스, 모듈 시스템, Promise 등이 추가되었다.

이후 **매년 새로운 기능이 추가되는 방식**으로 표준화가 변경되었으며,

- **ES7(2016)**: `Array.prototype.includes()`, 지수 연산자(`**`) 추가
- **ES8(2017)**: `async/await` 도입
- **ES9(2018)**: `Rest/Spread` 연산자 추가
- **ES10(2019 이후)**: 지속적인 개선

이와 함께 **Babel, TypeScript** 같은 트랜스파일러가 널리 사용되며, 최신 문법을 구버전 브라우저에서도 사용할 수 있게 되었다.

:::tip 최신 ECMAScript 기능은 GitHub의 TC39 제안 시스템을 통해 누구나 기여할 수 있다. :::

## Reference

**link:** External reference

- [Brief History of JavaScript](https://roadmap.sh/guides/history-of-javascript)
- [The Weird History of JavaScript](https://dev.to/codediodeio/the-weird-history-of-javascript-2bnb)
