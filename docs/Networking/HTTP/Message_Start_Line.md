# Start Line 구조

## Summary

HTTP 메시지의 시작 줄(start-line)은 요청(Request)일 때 `Request-Line`, 응답(Response)일 때 `Status-Line`으로 구분된다. 이 줄은 HTTP 통신의 맥락과 의미를 결정하는 핵심 정보이다.

## Details

### Request-Line

RFC 2616에서 요청 메시지의 시작 줄은 다음과 같이 정의된다.

```
Request-Line = Method SP Request-URI SP HTTP-Version CRLF
```

- **Method**
  - 클라이언트가 수행하려는 동작.
  - 예: `GET`, `POST`, `PUT`, `DELETE`, `HEAD` 등.

- **Request-URI**
  - 요청 대상 자원의 위치.
  - 예: `/index.html`, `/api/v1/users`.

- **HTTP-Version**
  - 메시지가 따르는 HTTP 버전.
  - 예: `HTTP/1.0`, `HTTP/1.1`.

**예시**

```
GET /search?q=chatgpt HTTP/1.1
```

### Status-Line

RFC 2616에서 응답 메시지의 시작 줄은 다음과 같이 정의된다.

```
Status-Line = HTTP-Version SP Status-Code SP Reason-Phrase CRLF
```

- **HTTP-Version**
  - 서버가 응답을 구성할 때 사용한 HTTP 버전.

- **Status-Code**
  - 요청 처리 결과를 나타내는 3자리 숫자 코드.
  - 범주별 구분:
    - 1xx: Informational
    - 2xx: Success
    - 3xx: Redirection
    - 4xx: Client Error
    - 5xx: Server Error

- **Reason-Phrase**
  - 상태 코드에 대한 짧은 텍스트 설명.
  - 예: `OK`, `Not Found`, `Internal Server Error`.

**예시**

```
HTTP/1.1 200 OK
```

### Start-Line의 의미

- **Request-Line** → 클라이언트가 무엇을 원하는지 선언.
- **Status-Line** → 서버가 그 요청을 어떻게 처리했는지 응답.
- 이 둘은 HTTP 메시지의 시작 줄로서 통신의 **맥락과 결과**를 정의한다.

## Reference

**link:** External reference

- [RFC 2616 - Section 5.1 Request-Line](https://datatracker.ietf.org/doc/html/rfc2616#section-5.1)
- [RFC 2616 - Section 6.1 Status-Line](https://datatracker.ietf.org/doc/html/rfc2616#section-6.1)
- [RFC 7230 - HTTP/1.1 Message Syntax and Routing](https://datatracker.ietf.org/doc/html/rfc7230)
