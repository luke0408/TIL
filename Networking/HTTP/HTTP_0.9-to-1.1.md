# HTTP/0.9에서 1.1까지의 발전

## Summary

HTTP는 1990년대 초반 등장한 이후, 빠르게 발전하며 웹의 핵심 프로토콜로 자리 잡았다.
특히 0.9 → 1.0 → 1.1로 이어지는 발전 과정은 “단순 리소스 요청”에서 “대규모 웹 서비스 운영”까지 확장할 수 있는 기반을 마련했다.

## Details

### HTTP/0.9 (1991)

* **특징**: 매우 단순, 오직 `GET` 메서드만 지원.
* **메시지 구조**: 요청은 단일 라인, 응답은 HTML 본문만.
* **예시**:

  ```
  GET /index.html
  ```
* **한계**:

  * 상태 코드(Status-Line) 없음 → 성공/실패 구분 불가.
  * 헤더 없음 → 콘텐츠 타입, 길이 등 메타데이터 전달 불가.
  * 응답은 오직 HTML만 지원.

### HTTP/1.0 (1996, RFC 1945)

* **개선된 점**:

  * **Status-Line 도입**: `200 OK`, `404 Not Found`.
  * **HTTP 헤더 추가**: `Content-Type`, `Content-Length` 등.
  * **메서드 확장**: `POST`, `HEAD` 지원.
  * 다양한 콘텐츠 타입 전송 가능 (이미지, 텍스트, 바이너리).

* **예시**:

  ```
  GET /image.png HTTP/1.0
  Host: www.example.com
  ```

* **한계**:

  * 요청마다 **TCP 연결 재생성** → 지연(latency) 증가.
  * 캐싱, 호스트 기반 가상화 지원 부족.

### HTTP/1.1 (1997, RFC 2068 → 1999, RFC 2616 → 2014, RFC 7230\~7235)

* **핵심 확장 기능**:

  * **Persistent Connection (Keep-Alive)**: 기본적으로 연결 유지.
  * **Host 헤더 필수화**: 가상 호스팅 가능 (한 IP로 여러 도메인 서비스).
  * **Chunked Transfer-Encoding**: 길이를 모르는 응답 스트리밍.
  * **캐싱 메커니즘**: `ETag`, `Cache-Control`, `If-Modified-Since`.
  * **Range Requests**: 대용량 파일 부분 다운로드 (206 Partial Content).
  * **Content Negotiation**: `Accept`, `Accept-Language`에 따른 콘텐츠 협상.

* **영향**:

  * 웹 애플리케이션, 멀티미디어 서비스, 클라우드 호스팅 기반 마련.
  * 20년 이상 사실상 웹 표준으로 사용됨.

## 발전 흐름 요약

* **0.9** → 단순 HTML 전송
* **1.0** → 메타데이터와 상태 코드 도입, 다양한 콘텐츠 지원
* **1.1** → 성능, 확장성, 실용성 대폭 강화 (캐싱, 가상 호스팅, 스트리밍)

## Reference

**link:** External reference

* [RFC 1945 - Hypertext Transfer Protocol -- HTTP/1.0](https://datatracker.ietf.org/doc/html/rfc1945)
* [RFC 2616 - Hypertext Transfer Protocol -- HTTP/1.1](https://datatracker.ietf.org/doc/html/rfc2616)
* [RFC 7230-7235 - HTTP/1.1 Update](https://datatracker.ietf.org/doc/html/rfc7230)
