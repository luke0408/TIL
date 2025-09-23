# Host Header (가상 호스팅)

## Summary

Host 헤더는 **HTTP/1.1에서 새롭게 필수화된 헤더**로, 하나의 서버(또는 IP 주소)에서 여러 도메인 이름을 동시에 운영할 수 있도록 한다. 이를 통해 가상 호스팅(Virtual Hosting)이 가능해졌으며, 현대 웹 서버 아키텍처의 핵심 기반이 되었다.

## Details

### 등장 배경

* **HTTP/1.0 한계**

  * 요청 메시지에는 단순히 경로(`/index.html`)만 담김.
  * 같은 IP에서 여러 도메인을 서비스할 경우 어떤 도메인 요청인지 구분 불가.
  * 해결책: 서버마다 IP를 따로 할당해야 했음.

### HTTP/1.1의 Host 헤더

* RFC 2616에서 `Host` 헤더는 **반드시 포함**하도록 규정됨.
* 요청 메시지 예시:

  ```
  GET /index.html HTTP/1.1
  Host: www.example.com
  ```
* 이제 서버는 같은 IP라도 **Host 헤더 값**을 기준으로 요청 도메인을 구분 가능.

### 가상 호스팅 (Virtual Hosting)

* **Name-based Virtual Hosting**

  * 동일한 IP 주소에서 여러 도메인을 운영.
  * Apache, Nginx에서 일반적으로 사용.
* **IP-based Virtual Hosting**

  * 도메인마다 별도의 IP 할당.
  * IPv4 주소 고갈로 인해 점점 감소.

### 실제 동작 예시

* 사용자가 `www.siteA.com`과 `www.siteB.com`에 접근 → 두 도메인이 같은 서버 IP를 공유.
* 요청 메시지:

  ```
  GET / HTTP/1.1
  Host: www.siteA.com
  ```

  ```
  GET / HTTP/1.1
  Host: www.siteB.com
  ```
* 서버는 Host 헤더 값을 보고 siteA 또는 siteB의 콘텐츠를 제공.

### 보안 관련 고려사항

* **Host Header Injection**: 애플리케이션이 Host 헤더 값을 신뢰할 경우 발생.

  * 예: 리디렉션, 이메일 링크 생성 시 악용 가능.
* 방어: 신뢰할 수 있는 도메인만 허용하거나, 서버 레벨에서 Host 검증 수행.

## Reference

**link:** External reference

* [RFC 2616 - Section 14.23 Host](https://datatracker.ietf.org/doc/html/rfc2616#section-14.23)
* [RFC 7230 - Section 5.4 Host](https://datatracker.ietf.org/doc/html/rfc7230#section-5.4)
* [MDN - Host header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host)
