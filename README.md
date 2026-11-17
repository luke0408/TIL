# Today I Learned

- 매일은 아니더라도 꾸준히 공부한 기록을 남기기 위해 시작했습니다.

해당 TIL은 아래의 자료들의 영향을 받았습니다.

- [jbrnchaud/til](https://github.com/jbranchaud/til)
- [Integerous/goQuality-dev-contents](https://github.com/Integerous/goQuality-dev-contents)
- [cheese10yun/TIL](https://github.com/cheese10yun/TIL)
- [namjunemy/TIL](https://github.com/namjunemy/TIL)
- [rlaisqls/TIL](https://github.com/rlaisqls/TIL)

<br>

## 카테고리

- [AI_ML](./docs/AI_ML/README.md): 임베딩, RAG, Spring AI
- [Backend](./docs/Backend/README.md): npm, NestJS
- [Cloud](./docs/Cloud/README.md): AWS
- [DevGeneral](./docs/DevGeneral/README.md): 설계 원칙, 리팩터링, 디자인 패턴, 알고리즘, IEEE 754, 애자일
- [DevOps](./docs/DevOps/README.md): Pulumi, Algolia DocSearch
- [Languages](./docs/Languages/README.md): JavaScript, TypeScript
- [Networking](./docs/Networking/README.md): HTTP
- [OperatingSystems](./docs/OperatingSystems/README.md): Linux

처음 읽는다면 [Introduction](./docs/introduction.md)부터 읽는다.

## 운영 방식

- 이 저장소는 공개 Markdown 노트 보관소다. 별도 웹사이트 없이 GitHub 화면에서 읽는다.
- 새 공부 기록은 Obsidian 비공개 노트에 먼저 쓴다.
  - 공개해도 되는 정리본만 이 저장소로 옮긴다.
- 다른 사람과 나누고 싶은 글은 [블로그](https://luke-blog.vercel.app/)에 쓴다.

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
- 잔디를 채우는 것에 집착하지 않는다.
- reference는 다음의 분류를 따른다.
  - issue: 해당 repo의 관련 issue를 의미한다.
  - link: 외부에서 참고한 reference를 의미한다.
- 이전에 작성한 개념을 언급할 경우, 본문에서 해당 노트로 인라인 링크를 건다.
  - 예: `TypeScript(줄여서 TS)는 [JavaScript](../JavaScript/JavaScript.md)에서 파생된 ...`
- 문서는 인용구(원문 인용)를 제외하고 한글로 작성한다.
- 노트 제목은 설명하려는 개념만 드러나도록 짧고 명확하게 작성한다.
- 문서는 `Explicit_Type_Casting.md`처럼 줄글 중심으로 작성한다.
  - 리스트는 보조 용도로만 최소 사용한다.
- 카테고리 디렉토리(`docs/<category>/`, `docs/<category>/<sub-category>/`)는 개요 문서를 반드시 포함한다.
  - 카테고리 인덱스 파일은 `README.md`를 사용한다. GitHub는 폴더를 열 때 이 파일을 보여 준다.
  - 모든 `README.md`에는 해당 카테고리(개념)의 소개 문장이 반드시 포함되어야 한다.
- 카테고리 내 정렬은 필수이며, `sidebar_position`으로 관리한다.
  - 정렬 기준은 쉬운 개념 → 어려운 개념 순서로 한다.
  - 난이도는 해당 노트를 이해하기 위해 필요한 선행 개념(관련 노트) 수가 많을수록 높은 것으로 본다.
- 카테고리 `README.md`는 다음 순서로 작성한다.
  - 소개 문장: 카테고리가 다루는 범위를 쓴다.
  - `## 읽는 순서`: 노트를 `sidebar_position` 순서대로 링크한다.
  - `## 먼저 읽을 카테고리`: 다른 카테고리를 먼저 읽어야 하면 링크한다. 없으면 "없음."이라고 쓴다.
- 노트 사이의 링크는 다음 규칙을 따른다.
  - 링크는 상대 경로 Markdown 링크로 쓴다. 예: `[조인](../Database/join.md)`
    - GitHub와 Obsidian 모두 이 링크를 그대로 따라간다.
    - 위키링크(`[[...]]`)는 쓰지 않는다.
  - 먼저 읽어야 하는 노트는 제목 바로 아래 한 줄에 쓴다. 예: `먼저 읽기: [숫자형 (number)](./Number.md)`
    - 직접 선행 노트는 3개 이하로 둔다.
    - "먼저 읽기" 링크는 순환하면 안 된다.
  - "이어 읽기"(이 노트를 링크한 노트)는 직접 쓰지 않는다. Obsidian의 백링크 패널에서 본다.
  - 모든 노트는 들어오는 링크가 1개 이상이어야 한다. 최소한 카테고리 `README.md`의 읽는 순서에 넣는다.
  - `npm run check:links`가 깨진 링크, 고립 노트, "먼저 읽기" 순환을 검사한다. GitHub Actions도 push와 PR마다 `npm run check`를 실행한다.
- 보충 설명 상자는 GitHub 알림 문법으로 쓴다. 예: `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`
  - GitHub와 Obsidian 모두 이 문법을 상자로 보여 준다.
  - Docusaurus 문법(`:::note`)은 쓰지 않는다.
