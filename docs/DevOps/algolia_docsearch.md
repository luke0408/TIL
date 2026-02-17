---
title: "Algolia DocSearch"
description: "Algolia DocSearch는 Docusaurus 문서 검색을 외부 인덱스로 제공하는 방식이며, 사이트 쪽에는 조회용 설정만 있으면 동작한다. 이번 TIL 적용 과정에서 핵심은 인덱스 쓰기 권한이 아니라 올바른 조회 설정과 환경변수 주입, 그리고."
slug: /devops/algolia-docsearch
created_at: "2026-02-17 18:40+09:00"
sidebar_position: 2
---

# Algolia DocSearch

## Summary

Algolia DocSearch는 Docusaurus 문서 검색을 외부 인덱스로 제공하는 방식이며, 사이트 쪽에는 조회용 설정만 있으면 동작한다. 이번 TIL 적용 과정에서 핵심은 인덱스 쓰기 권한이 아니라 올바른 조회 설정과 환경변수 주입, 그리고 크롤링 완료 상태 확인이었다.

## Details

이번 적용에서 먼저 확인한 것은 `themeConfig.algolia`의 필수 값이었다. `appId`, `apiKey`, `indexName`이 모두 있어야 검색 UI가 정상적으로 활성화된다. 여기서 `apiKey`는 관리자 키가 아니라 검색 전용 공개 키를 사용해야 하며, `indexName`은 검색 대상 인덱스를 식별하는 이름이다. 개념적으로는 저장소 이름처럼 보일 수 있지만, 실제로는 검색 레코드 집합을 가리키는 논리 이름에 가깝다.

로컬 개발 환경에서는 설정값을 `.env`로 주입하는 방식이 가장 단순했다. 다만 설정 파일에서 환경변수를 읽도록 구성할 때 `dotenv` 패키지가 실제로 설치되어 있지 않으면 빌드 시 `Cannot find module 'dotenv/config'` 오류가 발생한다. 이 문제는 `dotenv`를 의존성에 추가해 해결했다.

배포 경로에서는 GitHub Actions 빌드 단계에도 동일한 환경변수를 넣어야 한다. 이번에는 `deploy.yml`과 `test-deploy.yml`의 build step에 `ALGOLIA_APP_ID`, `ALGOLIA_API_KEY`, `ALGOLIA_INDEX_NAME`를 secrets로 주입하도록 맞췄다. 이렇게 해야 로컬과 CI에서 동일한 검색 설정으로 빌드된다.

검색 버튼이 보이지 않는 증상은 대부분 환경변수 누락 또는 dev 서버 재시작 누락에서 발생했다. 설정값이 준비된 뒤에도 인덱스가 비어 있으면 결과가 나오지 않을 수 있으므로, DocSearch 크롤링 상태를 함께 확인해야 한다. 즉 적용 성공 기준은 "버튼 표시"와 "실제 결과 반환" 두 가지를 같이 보는 것이 안전했다.

## Reference

**link**
- [Docusaurus Search](https://docusaurus.io/docs/search)
