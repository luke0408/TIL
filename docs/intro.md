# Today I Learned

- 매일은 아니더라도 꾸준히 공부한 기록을 남기기 위해 시작했습니다.

| Directory         | Content                              | Count                        |
| ----------------- | :----------------------------------- | ---------------------------- |
| AI_ML             | 인공지능과 머신러닝과 관련된 내용       | __AI_ML_DIRECTORY_COUNT__    |
| Backend           | 백엔드 프레임워크와 관련된 내용         | __Backend_DIRECTORY_COUNT__  |
| Cloud             | 클라우드 컴퓨팅과 관련된 내용           | __Cloud_DIRECTORY_COUNT__    |
| DevGeneral        | 디자인 패턴, 방법론 등의 내용          | __DevGeneral_DIRECTORY_COUNT__|
| DevOps            | DevOps와 관련된 내용                  | __DevOps_DIRECTORY_COUNT__   |
| Databases         | 데이터베이스와 관련된 내용             | __Databases_DIRECTORY_COUNT__|
| Frontend          | 프론트 프레임워크와 관련된 내용        | __Frontend_DIRECTORY_COUNT__ |
| Languages         | 다양한 프로그래밍 언어와 관련된 내용    | __Languages_DIRECTORY_COUNT__|
| Networking        | 네트워킹과 관련된 내용                 | __Networking_DIRECTORY_COUNT__|
| OperatingSystems  | 운영 체제와 관련된 내용                | __OperatingSystems_DIRECTORY_COUNT__|
| Security          | 보안과 관련된 내용                    | __Security_DIRECTORY_COUNT__|

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

📦[**TIL**](./)</br>/docs
┣━&nbsp;📂[**Backend**](./docs/Backend)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**NestJS**](./docs/Backend/NestJS)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Request_Lifecycle**](./docs/Backend/NestJS/Request_Lifecycle.md)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**npm**](./docs/Backend/npm)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📂[**package_json**](./docs/Backend/npm/package_json)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**dependencies_flieds**](./docs/Backend/npm/package_json/dependencies_flieds.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**env_publish_fields**](./docs/Backend/npm/package_json/env_publish_fields.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**meta_fields**](./docs/Backend/npm/package_json/meta_fields.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**runtime_io_fields**](./docs/Backend/npm/package_json/runtime_io_fields.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**Semantic_version**](./docs/Backend/npm/Semantic_version.md)</br>
┣━&nbsp;📂[**Cloud**](./docs/Cloud)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**AWS**](./docs/Cloud/AWS)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**EC2**](./docs/Cloud/AWS/EC2.md)</br>
┣━&nbsp;📂[**DevGeneral**](./docs/DevGeneral)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Agile**](./docs/DevGeneral/Agile)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**SoftwareCraftsmanshipManifesto**](./docs/DevGeneral/Agile/SoftwareCraftsmanshipManifesto.md)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Algorithm**](./docs/DevGeneral/Algorithm)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📂[**Sort**](./docs/DevGeneral/Algorithm/Sort)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**Merge_Sort**](./docs/DevGeneral/Algorithm/Sort/Merge_Sort.md)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**DesignPatterns**](./docs/DevGeneral/DesignPatterns)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Static_Factory_Method**](./docs/DevGeneral/DesignPatterns/Static_Factory_Method.md)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**IEEE**](./docs/DevGeneral/IEEE)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**IEEE_754_Floating_Point**](./docs/DevGeneral/IEEE/IEEE_754_Floating_Point.md)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Principle**](./docs/DevGeneral/Principle)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Two_Hats**](./docs/DevGeneral/Principle/Two_Hats.md)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**Refactoring**](./docs/DevGeneral/Refactoring)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Definition_of_Refactoring**](./docs/DevGeneral/Refactoring/Definition_of_Refactoring.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Reasons_for_Refactoring**](./docs/DevGeneral/Refactoring/Reasons_for_Refactoring.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**When_to_Refactoring**](./docs/DevGeneral/Refactoring/When_to_Refactoring.md)</br>
┣━&nbsp;📂[**DevOps**](./docs/DevOps)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**Pulumi**](./docs/DevOps/Pulumi)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Project**](./docs/DevOps/Pulumi/Project.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Pulumi**](./docs/DevOps/Pulumi/Pulumi.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**Stack**](./docs/DevOps/Pulumi/Stack.md)</br>
┣━&nbsp;📂[**Languages**](./docs/Languages)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**JavaScript**](./docs/Languages/JavaScript)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**DataStructures**](./docs/Languages/JavaScript/DataStructures)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Json**](./docs/Languages/JavaScript/DataStructures/Json.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Map**](./docs/Languages/JavaScript/DataStructures/Map.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**DataTypes**](./docs/Languages/JavaScript/DataTypes)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**BigInt**](./docs/Languages/JavaScript/DataTypes/BigInt.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Boolean**](./docs/Languages/JavaScript/DataTypes/Boolean.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Null**](./docs/Languages/JavaScript/DataTypes/Null.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Number**](./docs/Languages/JavaScript/DataTypes/Number.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Number_Type_Issues**](./docs/Languages/JavaScript/DataTypes/Number_Type_Issues.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**String**](./docs/Languages/JavaScript/DataTypes/String.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Symbol**](./docs/Languages/JavaScript/DataTypes/Symbol.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Typeof**](./docs/Languages/JavaScript/DataTypes/Typeof.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Undefined**](./docs/Languages/JavaScript/DataTypes/Undefined.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**Engine**](./docs/Languages/JavaScript/Engine)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Execution_Context**](./docs/Languages/JavaScript/Engine/Execution_Context.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Introduction_to_JavaScript_Engine**](./docs/Languages/JavaScript/Engine/Introduction_to_JavaScript_Engine.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**JavaScript_Compilation_Process**](./docs/Languages/JavaScript/Engine/JavaScript_Compilation_Process.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Parser_And_AST**](./docs/Languages/JavaScript/Engine/Parser_And_AST.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**Functions**](./docs/Languages/JavaScript/Functions)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Arrow_Function**](./docs/Languages/JavaScript/Functions/Arrow_Function.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Function**](./docs/Languages/JavaScript/Functions/Function.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**Introdution**](./docs/Languages/JavaScript/Introdution)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**History_of_JavaScript**](./docs/Languages/JavaScript/Introdution/History_of_JavaScript.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**What_is_JavaScript**](./docs/Languages/JavaScript/Introdution/What_is_JavaScript.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**JSDoc**](./docs/Languages/JavaScript/JSDoc)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**JSDoc**](./docs/Languages/JavaScript/JSDoc/JSDoc.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**Object**](./docs/Languages/JavaScript/Object)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Built-in_Object**](./docs/Languages/JavaScript/Object/Built-in_Object.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Object**](./docs/Languages/JavaScript/Object/Object.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**ObjectPrototype**](./docs/Languages/JavaScript/Object/ObjectPrototype.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Prototypal_Inheritance**](./docs/Languages/JavaScript/Object/Prototypal_Inheritance.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**TypeCasting**](./docs/Languages/JavaScript/TypeCasting)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Explicit_Type_Casting**](./docs/Languages/JavaScript/TypeCasting/Explicit_Type_Casting.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Implicit_Type_Casting**](./docs/Languages/JavaScript/TypeCasting/Implicit_Type_Casting.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📂[**Variables**](./docs/Languages/JavaScript/Variables)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Const**](./docs/Languages/JavaScript/Variables/Const.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Hoisting**](./docs/Languages/JavaScript/Variables/Hoisting.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Let**](./docs/Languages/JavaScript/Variables/Let.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Scope**](./docs/Languages/JavaScript/Variables/Scope.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**Var**](./docs/Languages/JavaScript/Variables/Var.md)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**TypeScript**](./docs/Languages/TypeScript)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**Const_Assertion**](./docs/Languages/TypeScript/Const_Assertion.md)</br>
┣━&nbsp;📂[**Networking**](./docs/Networking)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**HTTP**](./docs/Networking/HTTP)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Chunked_Transfer-Encoding**](./docs/Networking/HTTP/Chunked_Transfer-Encoding.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**HTTP_0.9-to-1.1**](./docs/Networking/HTTP/HTTP_0.9-to-1.1.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**HTTP_Generic_Message**](./docs/Networking/HTTP/HTTP_Generic_Message.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**HTTP_host-header**](./docs/Networking/HTTP/HTTP_host-header.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**HTTP_Keep-Alive**](./docs/Networking/HTTP/HTTP_Keep-Alive.md)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**Message_Start_Line**](./docs/Networking/HTTP/Message_Start_Line.md)</br>
┣━&nbsp;📂[**OperatingSystems**](./docs/OperatingSystems)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**Linux**](./docs/OperatingSystems/Linux)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**tree**](./docs/OperatingSystems/Linux/tree.md)</br>
┣━&nbsp;📂[**tutorial-basics**](./docs/tutorial-basics)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📄[**congratulations**](./docs/tutorial-basics/congratulations.md)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📄[**create-a-blog-post**](./docs/tutorial-basics/create-a-blog-post.md)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📄[**create-a-document**](./docs/tutorial-basics/create-a-document.md)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📄[**create-a-page**](./docs/tutorial-basics/create-a-page.md)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📄[**deploy-your-site**](./docs/tutorial-basics/deploy-your-site.md)</br>
┣━&nbsp;📂[**tutorial-extras**](./docs/tutorial-extras)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📄[**manage-docs-versions**](./docs/tutorial-extras/manage-docs-versions.md)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📄[**translate-your-site**](./docs/tutorial-extras/translate-your-site.md)</br>
┗━&nbsp;📄[**intro**](./docs/intro.md)</br>
