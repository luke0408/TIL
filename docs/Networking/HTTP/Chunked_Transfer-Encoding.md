# Chunked Transfer-Encoding

## Summary

Chunked Transfer-Encoding은 **HTTP/1.1에서 도입된 전송 메커니즘**으로, 서버가 응답 본문의 전체 크기를 미리 알지 못하더라도 데이터를 **청크 단위로 나누어 스트리밍**할 수 있게 한다. 이를 통해 동적 콘텐츠 생성, 스트리밍 서비스, 서버-푸시형 응답이 가능해졌다.

## Details

### 등장 배경

- **HTTP/1.0 한계**
  - 응답 본문 크기를 반드시 `Content-Length` 헤더로 알려야 했음.
  - 동적으로 생성되는 콘텐츠(예: 실시간 로그, 스트리밍 데이터)는 크기를 사전에 알기 어려움.

### 동작 방식

- 응답 헤더에 `Transfer-Encoding: chunked` 지정.
- 본문은 여러 \*\*청크(chunk)\*\*로 전송.
- 각 청크는 `길이(16진수) CRLF + 데이터 CRLF` 형식.
- 마지막 청크는 `0 CRLF`로 종료.

### 예시

서버가 `"Hello World"`를 두 청크로 전송:

```
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Content-Type: text/plain

5\r\n
Hello\r\n
6\r\n
 World\r\n
0\r\n
\r\n
```

- 첫 번째 청크 → 길이 `5`(16진수), 데이터 `"Hello"`
- 두 번째 청크 → 길이 `6`, 데이터 `" World"`
- 마지막 청크 → `0` (본문 종료)

### 장점

1. **스트리밍 지원**: 서버가 데이터를 생성하는 즉시 전송 가능.
2. **메모리 효율성**: 전체 응답 크기를 버퍼링하지 않아도 됨.
3. **실시간 서비스**: 로그 스트리밍, SSE(Server-Sent Events) 등에 활용.

### 한계

- **오버헤드**: 각 청크마다 길이와 CRLF가 추가됨.
- **중간 장비 문제**: 오래된 프록시나 클라이언트가 지원하지 않을 수 있음.
- **HTTP/2 이상에서 불필요**: HTTP/2부터는 자체 프레이밍 구조를 사용 → chunked 필요 없음.

## Reference

**link:** External reference

- [RFC 2616 - Section 3.6.1 Chunked Transfer Coding](https://datatracker.ietf.org/doc/html/rfc2616#section-3.6.1)
- [RFC 7230 - Section 4.1 Chunked Transfer Coding](https://datatracker.ietf.org/doc/html/rfc7230#section-4.1)
- [MDN - Transfer-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding)
