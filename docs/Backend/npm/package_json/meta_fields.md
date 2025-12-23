# package.json – 기본 메타 필드 정리

<!--
이 노트는 package.json의 기본 메타 필드들을 정리한 것이다.
이 필드들은 프로젝트의 정체성과 공개 정보(metadata)를 표현하며, 대부분 `npm init`으로 생성되는 항목들이다.
 -->

## Summary

`package.json`은 Node.js 프로젝트의 메타데이터를 담고 있다. 그중 기본 메타 필드는 프로젝트의 이름, 설명, 작성자, 라이선스 등의 정보를 포함하며, npm 레지스트리에 등록하거나 협업에 필요한 가장 기초적인 정보들을 정의한다.

## Details

### name

패키지의 고유한 식별자이다. 다음 규칙을 따른다:

- 소문자, 숫자, 대시(`-`)만 허용
- 공백 불가
- 214자 이하
- `@scope/package-name` 형식 가능

```json
"name": "@my-org/my-library"
```

### version

Semantic Versioning(SemVer)을 따르는 패키지 버전이다.

```json
"version": "1.2.3"
```

### description

패키지에 대한 간단한 설명으로, npm search나 레지스트리 페이지에 표시된다.

```json
"description": "A small utility for working with dates and time zones."
```

### keywords

패키지를 설명하는 키워드 배열이다. 검색 최적화에 도움을 준다.

```json
"keywords": ["date", "utility", "timezone"]
```

### homepage

공식 홈페이지나 문서 링크를 지정한다.

```json
"homepage": "https://github.com/my-org/my-library#readme"
```

### license

패키지의 사용 라이선스를 지정한다.

```json
"license": "MIT"
```

### author

작성자의 정보를 하나의 문자열 또는 객체로 제공한다.

```json
"author": "Luke Choi <luke@example.com> (https://luke.dev)"
```

또는

```json
"author": {
  "name": "Luke Choi",
  "email": "luke@example.com",
  "url": "https://luke.dev"
}
```

### contributors

여러 기여자를 배열 형태로 기술한다. 각 요소는 문자열 또는 객체로 작성 가능하다.

```json
"contributors": [
  "Alice <alice@example.com>",
  {
    "name": "Bob",
    "email": "bob@example.com"
  }
]
```

### funding

오픈소스 패키지의 후원을 받을 수 있는 URL 또는 플랫폼 정보를 명시한다.

```json
"funding": {
  "type": "individual",
  "url": "https://github.com/sponsors/luke"
}
```

### bugs

이슈 리포트 페이지나 이메일을 지정한다.

```json
"bugs": {
  "url": "https://github.com/my-org/my-library/issues",
  "email": "bugs@myorg.dev"
}
```

### repository

소스코드 저장소 정보를 지정한다. Git 사용이 일반적이다.

```json
"repository": {
  "type": "git",
  "url": "https://github.com/my-org/my-library.git"
}
```

:::tip 

`homepage`, `bugs`, `repository` 필드를 함께 구성하면 npm 레지스트리 페이지에서 자동으로 GitHub 링크가 연결된다. 

:::

## Reference

**author note:** Related note in this repo

- [package.json – 의존성 필드 정리](./dependencies_flieds.md)
- [package.json – 환경 및 배포 설정 필드 정리](./env_publish_fields.md)
- [package.json – 실행 및 입출력 필드 정리](./runtime_io_fields.md)

**link:** External reference

- [npm Docs - package.json (v11)](https://docs.npmjs.com/cli/v11/configuring-npm/package-json)
- [Creating a package.json file](https://docs.npmjs.com/creating-a-package-json-file)
