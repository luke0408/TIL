---
title: "Algolia DocSearch"
description: "Algolia DocSearch는 문서 사이트 검색을 외부 인덱스로 제공하며, 사이트에는 검색 전용 키와 인덱스 이름 같은 조회용 설정만 있으면 동작한다."
slug: /devops/algolia-docsearch
created_at: "2026-02-17 18:40+09:00"
sidebar_position: 2
---

# Algolia DocSearch

## Summary

Algolia DocSearch는 Docusaurus 문서 검색을 외부 인덱스로 제공하는 방식이며, 사이트 쪽에는 조회용 설정만 있으면 동작한다. 이번 TIL 적용 과정에서 핵심은 인덱스 쓰기 권한이 아니라 올바른 조회 설정과 환경변수 주입, 그리고 크롤링 완료 상태 확인이었다.

> [!NOTE]
> 이 노트는 이 TIL 사이트가 Docusaurus로 빌드되던 시기의 적용 기록이다. 지금 사이트는 Vite 기반으로 바뀌었고 DocSearch를 쓰지 않는다.

## Details

### 구조

DocSearch는 두 부분으로 나뉜다. Algolia 쪽 크롤러가 공개된 문서 사이트를 주기적으로 읽어서 인덱스에 검색 레코드를 쓴다. 문서 사이트는 브라우저에서 이 인덱스를 조회만 한다. 그래서 사이트 설정에는 쓰기 권한이 필요 없고, 검색 전용 공개 키만 있으면 된다. 반대로 사이트 설정이 맞아도 크롤러가 아직 돌지 않았다면 인덱스가 비어 있어 검색 결과가 나오지 않는다.

### 설정 값

이번 적용에서 먼저 확인한 것은 `themeConfig.algolia`의 필수 값이었다. `appId`, `apiKey`, `indexName`이 모두 있어야 검색 UI가 정상적으로 활성화된다. 여기서 `apiKey`는 관리자 키가 아니라 검색 전용 공개 키를 사용해야 하며, `indexName`은 검색 대상 인덱스를 식별하는 이름이다. 개념적으로는 저장소 이름처럼 보일 수 있지만, 실제로는 검색 레코드 집합을 가리키는 논리 이름에 가깝다.

아래는 환경변수로 값을 읽는 일반적인 Docusaurus 설정 형태다.

```ts
// docusaurus.config.ts (예시)
import 'dotenv/config';

const config = {
  themeConfig: {
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY, // 검색 전용 키
      indexName: process.env.ALGOLIA_INDEX_NAME,
    },
  },
};

export default config;
```

> [!WARNING]
> 관리자 키(Admin API Key)는 인덱스를 수정하고 삭제할 수 있다. 이 키를 사이트 설정에 넣으면 빌드 결과물을 통해 누구나 볼 수 있으므로 절대 넣지 않는다.

### 로컬과 CI의 환경변수

로컬 개발 환경에서는 설정값을 `.env`로 주입하는 방식이 가장 단순했다. 다만 설정 파일에서 환경변수를 읽도록 구성할 때 `dotenv` 패키지가 실제로 설치되어 있지 않으면 빌드 시 `Cannot find module 'dotenv/config'` 오류가 발생한다. 이 문제는 `dotenv`를 의존성에 추가해 해결했다.

배포 경로에서는 GitHub Actions 빌드 단계에도 동일한 환경변수를 넣어야 한다. 이번에는 `deploy.yml`과 `test-deploy.yml`의 build step에 `ALGOLIA_APP_ID`, `ALGOLIA_API_KEY`, `ALGOLIA_INDEX_NAME`를 secrets로 주입하도록 맞췄다. 이렇게 해야 로컬과 CI에서 동일한 검색 설정으로 빌드된다.

```yaml
# .github/workflows/deploy.yml (예시)
- name: Build website
  run: npm run build
  env:
    ALGOLIA_APP_ID: ${{ secrets.ALGOLIA_APP_ID }}
    ALGOLIA_API_KEY: ${{ secrets.ALGOLIA_API_KEY }}
    ALGOLIA_INDEX_NAME: ${{ secrets.ALGOLIA_INDEX_NAME }}
```

### 확인 기준

검색 버튼이 보이지 않는 증상은 대부분 환경변수 누락 또는 dev 서버 재시작 누락에서 발생했다. 설정값이 준비된 뒤에도 인덱스가 비어 있으면 결과가 나오지 않을 수 있으므로, DocSearch 크롤링 상태를 함께 확인해야 한다. 즉 적용 성공 기준은 "버튼 표시"와 "실제 결과 반환" 두 가지를 같이 보는 것이 안전했다.

## Reference

**link**
- [Docusaurus Search](https://docusaurus.io/docs/search)
- [Algolia DocSearch](https://docsearch.algolia.com/)
