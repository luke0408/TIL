# HTTP Generic Message

## Summary

HTTP Generic Message는 HTTP 프로토콜에서 요청(Request)과 응답(Response)이 공유하는 공통 메시지 구조를 정의한다. 이 구조는 요청과 응답을 일관된 형식으로 해석하고 파싱할 수 있도록 한다.

## Details

### 메시지 구조 정의

RFC 2616에서는 HTTP 메시지를 다음과 같이 정의한다.

```
generic-message = start-line
                  *(message-header CRLF)
                  CRLF
                  [ message-body ]
```

- **start-line**
  - 요청(Request)일 때는 `Request-Line`
  - 응답(Response)일 때는 `Status-Line`

- **message-header**
  - key-value 형식의 헤더 필드
  - 각 헤더는 `CRLF`로 구분됨

- **CRLF (빈 줄)**
  - 헤더와 본문(body)을 구분하는 경계 역할

- **message-body**
  - 실제 데이터(선택적, 없을 수도 있음)

### Request Message 예시

```
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: curl/7.68.0
Accept: */*

```

- `GET /index.html HTTP/1.1` → start-line (Request-Line)
- `Host`, `User-Agent`, `Accept` → message-header
- 빈 줄(CRLF) → 헤더와 본문 구분
- message-body 없음

### Response Message 예시

```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 13

Hello, world!
```

- `HTTP/1.1 200 OK` → start-line (Status-Line)
- `Content-Type`, `Content-Length` → message-header
- 빈 줄(CRLF) → 헤더와 본문 구분
- `Hello, world!` → message-body

:::tip CRLF의 역할

- 단순 줄바꿈이 아닌 **구조적 경계 표시자**로 한 줄의 헤더 종료, 헤더 전체의 종료를 명확히 구분하여 파서가 메시지를 정확히 해석할 수 있게 함 :::

## Reference

**link:** External reference

- [RFC 2616 - Hypertext Transfer Protocol -- HTTP/1.1 (Section 4.1)](https://datatracker.ietf.org/doc/html/rfc2616#section-4.1)
- [RFC 7230 - HTTP/1.1 Message Syntax and Routing (Section 3)](https://datatracker.ietf.org/doc/html/rfc7230#section-3)
