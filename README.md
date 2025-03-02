# Today I Learned

- 매일은 아니더라도 꾸준히 공부한 기록을 남기기 위해 시작했습니다.

| Directory         | Content                              | Count                        |
| ----------------- | :----------------------------------- | ---------------------------- |
| AI_ML             | 인공지능과 머신러닝과 관련된 내용       | 0    |
| Backend           | 백엔드 프레임워크와 관련된 내용         | 0  |
| Cloud             | 클라우드 컴퓨팅과 관련된 내용           | 1    |
| DevGeneral        | 디자인 패턴, 방법론 등의 내용          | 6|
| DevOps            | DevOps와 관련된 내용                  | 0   |
| Databases         | 데이터베이스와 관련된 내용             | 0|
| Frontend          | 프론트 프레임워크와 관련된 내용        | 0 |
| Languages         | 다양한 프로그래밍 언어와 관련된 내용    | 22|
| Networking        | 네트워킹과 관련된 내용                 | 0|
| OperatingSystems  | 운영 체제와 관련된 내용                | 1|
| Security          | 보안과 관련된 내용                    | 0|

해당 TIL은 아래의 자료들의 영향을 받았습니다.
- [jbrnchaud/til](https://github.com/jbranchaud/til)
- [Integerous/goQuality-dev-contents](https://github.com/Integerous/goQuality-dev-contents)
- [cheese10yun/TIL](https://github.com/cheese10yun/TIL)
- [namjunemy/TIL](https://github.com/namjunemy/TIL)
- [rlaisqls/TIL](https://github.com/rlaisqls/TIL)

<br>

## 작성 규칙
- 폴더와 파일명은 영문으로 작성한다.
  - 책의 이름의 경우 예외로 한글로 작성한다.
- 고민이나 질문이 생기면 issue를 통해 과정을 기록으로 남긴다.
  - issue를 열었을 경우 관련 글에 표기한다.
  - issue는 가능한 닫지 않으며 tag를 통해 issue가 끝났음을 표기한다.
- 더 많은 공유를 원하는 기록은 블로그를 통해 다룬다.
  - 블로그에 포스팅한 경우 주소를 명시한다.
  - 스터디 진행 내용을 정리한 경우 스터디가 끝난 후 블로그에 포스팅한다.
  - 블로그를 통해 다루는 내용의 기준
    1. 단순히 정리를 넘어 내 생각을 다루고 싶을때
    2. 한 번 정리 하는게 아니라 두고두고 봐야하는 주제일때
    3. 정리한 것만으로 이해했다고 확신이 들지 않을 때
- 잔디를 채우는 것에 집작하지 않는다.
- reference는 다음의 분류를 따른다.
  - issue: 해당 repo의 관련 issue를 의미한다.
  - auther note: 해당 repo의 관련 note를 의미한다.
  - link: 외부에서 참고한 reference를 의미한다.

<br>

## File Tree

📦[**TIL**](./)</br>
┣━&nbsp;📂[**Cloud**](./Cloud)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**AWS**](./Cloud/AWS)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**EC2**](./Cloud/AWS/EC2.md)</br>
┣━&nbsp;📂[**DevGeneral**](./DevGeneral)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**DesignPatterns**](./DevGeneral/DesignPatterns)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Static_Factory_Method**](./DevGeneral/DesignPatterns/Static_Factory_Method.md)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**IEEE**](./DevGeneral/IEEE)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**IEEE_754_Floating_Point**](./DevGeneral/IEEE/IEEE_754_Floating_Point.md)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Principle**](./DevGeneral/Principle)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Two_Hats**](./DevGeneral/Principle/Two_Hats.md)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**Refactoring**](./DevGeneral/Refactoring)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Definition_of_Refactoring**](./DevGeneral/Refactoring/Definition_of_Refactoring.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Reasons_for_Refactoring**](./DevGeneral/Refactoring/Reasons_for_Refactoring.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**When_to_Refactoring**](./DevGeneral/Refactoring/When_to_Refactoring.md)</br>
┣━&nbsp;📂[**Languages**](./Languages)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**JavaScript**](./Languages/JavaScript)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📂[**DataTypes**](./Languages/JavaScript/DataTypes)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**BigInt**](./Languages/JavaScript/DataTypes/BigInt.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Boolean**](./Languages/JavaScript/DataTypes/Boolean.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Null**](./Languages/JavaScript/DataTypes/Null.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Number**](./Languages/JavaScript/DataTypes/Number.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Number_Type_Issues**](./Languages/JavaScript/DataTypes/Number_Type_Issues.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**String**](./Languages/JavaScript/DataTypes/String.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Symbol**](./Languages/JavaScript/DataTypes/Symbol.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Undefined**](./Languages/JavaScript/DataTypes/Undefined.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📂[**Engine**](./Languages/JavaScript/Engine)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Execution_Context**](./Languages/JavaScript/Engine/Execution_Context.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Introduction_to_JavaScript_Engine**](./Languages/JavaScript/Engine/Introduction_to_JavaScript_Engine.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**JavaScript_Compilation_Process**](./Languages/JavaScript/Engine/JavaScript_Compilation_Process.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Parser_And_AST**](./Languages/JavaScript/Engine/Parser_And_AST.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📂[**Functions**](./Languages/JavaScript/Functions)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Arrow_Function**](./Languages/JavaScript/Functions/Arrow_Function.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Function**](./Languages/JavaScript/Functions/Function.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📂[**Introdution**](./Languages/JavaScript/Introdution)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**History_of_JavaScript**](./Languages/JavaScript/Introdution/History_of_JavaScript.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**What_is_JavaScript**](./Languages/JavaScript/Introdution/What_is_JavaScript.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📂[**JSDoc**](./Languages/JavaScript/JSDoc)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**JSDoc**](./Languages/JavaScript/JSDoc/JSDoc.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📂[**Variables**](./Languages/JavaScript/Variables)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Const**](./Languages/JavaScript/Variables/Const.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Hoisting**](./Languages/JavaScript/Variables/Hoisting.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Let**](./Languages/JavaScript/Variables/Let.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Scope**](./Languages/JavaScript/Variables/Scope.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**Var**](./Languages/JavaScript/Variables/Var.md)</br>
┗━&nbsp;📂[**OperatingSystems**](./OperatingSystems)</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📂[**Linux**](./OperatingSystems/Linux)</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**tree**](./OperatingSystems/Linux/tree.md)</br>
