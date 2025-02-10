# Today I Learned

- 매일은 아니더라도 꾸준히 공부한 기록을 남기기 위해 시작했습니다.

| Directory         | Content                              | Count                        |
| ----------------- | :----------------------------------- | ---------------------------- |
| AI_ML             | 인공지능과 머신러닝과 관련된 내용       | 0    |
| Backend           | 백엔드 프레임워크와 관련된 내용         | 0  |
| Cloud             | 클라우드 컴퓨팅과 관련된 내용           | 1    |
| DevGeneral        | 디자인 패턴, 방법론 등의 내용          | 4|
| DevOps            | DevOps와 관련된 내용                  | 0   |
| Databases         | 데이터베이스와 관련된 내용             | 0|
| Frontend          | 프론트 프레임워크와 관련된 내용        | 0 |
| Languages         | 다양한 프로그래밍 언어와 관련된 내용    | 1|
| Networking        | 네트워킹과 관련된 내용                 | 0|
| OperatingSystems  | 운영 체제와 관련된 내용                | 0|
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
┣━&nbsp;📂[**AI_ML**](./AI_ML)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**ComputerVision**](./AI_ML/ComputerVision)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**DeepLearning**](./AI_ML/DeepLearning)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**MachineLearning**](./AI_ML/MachineLearning)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**NaturalLanguageProcessing**](./AI_ML/NaturalLanguageProcessing)</br>
┣━&nbsp;📂[**Backend**](./Backend)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**NestJS**](./Backend/NestJS)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**NodeJS**](./Backend/NodeJS)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**Spring_boot**](./Backend/Spring_boot)</br>
┣━&nbsp;📂[**Cloud**](./Cloud)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**AWS**](./Cloud/AWS)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**EC2**](./Cloud/AWS/EC2.md)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Azure**](./Cloud/Azure)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**GCP**](./Cloud/GCP)</br>
┣━&nbsp;📂[**Databases**](./Databases)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**GraphQL**](./Databases/GraphQL)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**NoSQL**](./Databases/NoSQL)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**SQL**](./Databases/SQL)</br>
┣━&nbsp;📂[**DevGeneral**](./DevGeneral)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**DesignPatterns**](./DevGeneral/DesignPatterns)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Static_Factory_Method**](./DevGeneral/DesignPatterns/Static_Factory_Method.md)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Principle**](./DevGeneral/Principle)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Two_Hats**](./DevGeneral/Principle/Two_Hats.md)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Refactoring**](./DevGeneral/Refactoring)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Definition_of_Refactoring**](./DevGeneral/Refactoring/Definition_of_Refactoring.md)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Reasons_for_Refactoring**](./DevGeneral/Refactoring/Reasons_for_Refactoring.md)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**Tools**](./DevGeneral/Tools)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📂[**Bash**](./DevGeneral/Tools/Bash)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📂[**CPU**](./DevGeneral/Tools/CPU)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📂[**IDEs**](./DevGeneral/Tools/IDEs)</br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📂[**VersionControl**](./DevGeneral/Tools/VersionControl)</br>
┣━&nbsp;📂[**DevOps**](./DevOps)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**CI_CD**](./DevOps/CI_CD)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Docker**](./DevOps/Docker)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Kubernetes**](./DevOps/Kubernetes)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**Monitoring**](./DevOps/Monitoring)</br>
┣━&nbsp;📂[**Frontend**](./Frontend)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Android**](./Frontend/Android)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**NextJS**](./Frontend/NextJS)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**React**](./Frontend/React)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**VueJS**](./Frontend/VueJS)</br>
┣━&nbsp;📂[**Languages**](./Languages)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Java**](./Languages/Java)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**JavaScript**](./Languages/JavaScript)</br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Function**](./Languages/JavaScript/Function.md)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**TypeScript**](./Languages/TypeScript)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**VimScript**](./Languages/VimScript)</br>
┣━&nbsp;📂[**Networking**](./Networking)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Protocols**](./Networking/Protocols)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**Tools**](./Networking/Tools)</br>
┣━&nbsp;📂[**OperatingSystems**](./OperatingSystems)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Linux**](./OperatingSystems/Linux)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Mac**](./OperatingSystems/Mac)</br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Unix**](./OperatingSystems/Unix)</br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**Windows**](./OperatingSystems/Windows)</br>
┗━&nbsp;📂[**Security**](./Security)</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📂[**ApplicationSecurity**](./Security/ApplicationSecurity)</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📂[**Cryptography**](./Security/Cryptography)</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📂[**NetworkSecurity**](./Security/NetworkSecurity)</br>
