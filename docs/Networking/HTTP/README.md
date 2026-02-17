---
title: "HTTP"
description: "HTTP 개념을 정리한 노트입니다."
slug: /networking/http
sidebar_position: 1
---

# HTTP

## Summary

HTTP는 웹에서 클라이언트와 서버가 데이터를 주고받기 위한 표준 애플리케이션 프로토콜이다. 현재 웹 서비스의 대부분은 HTTP를 기반으로 동작하며, 브라우저 요청부터 API 통신까지 핵심 전송 규약으로 사용된다.

## Details

HTTP를 이해할 때는 먼저 메시지 구조와 버전 발전 흐름을 함께 보는 것이 좋다. 메시지의 기본 골격은 [HTTP Generic Message](./Generic_Message.md)에서 확인할 수 있고, 요청과 응답의 핵심 시작점은 [Start Line 구조](./Message_Start_Line.md)에서 구체적으로 정리했다. 또한 실제 운영 환경에서 성능과 연결 효율에 직접 영향을 주는 개념으로 [HTTP Keep-Alive (Persistent Connection)](./Keep_Alive.md), 대용량 응답 처리 방식인 [Chunked Transfer-Encoding](./Chunked_Transfer-Encoding.md), 그리고 가상 호스팅의 기반이 되는 [Host Header (가상 호스팅)](./Host_Header.md)를 함께 이해해야 한다.

프로토콜 진화 관점에서는 [HTTP/0.9에서 1.1까지의 발전](./HTTP_0.9_to_1.1.md) 노트가 선행 학습에 유용하다. 이 흐름을 이해하면 현재 HTTP가 왜 지금의 형태를 갖게 되었는지, 그리고 어떤 설계 의도를 바탕으로 실무 기능이 구성되어 있는지를 자연스럽게 연결할 수 있다.
