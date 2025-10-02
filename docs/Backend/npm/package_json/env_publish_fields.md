# package.json – 환경 및 배포 설정 필드 정리

<!--
이 노트는 package.json에서 실행 환경 및 배포 제어를 위해 사용하는 필드들을 정리한 것이다.
Node.js 및 npm 버전 제약, 지원 운영체제, private 패키지 설정, 배포 레지스트리 등을 포함한다.
-->

## Summary

`package.json`의 환경 및 배포 설정 필드는 패키지가 어떤 환경에서 실행되어야 하는지, 어떤 조건에서 배포되어야 하는지를 정의한다. 이를 통해 플랫폼 호환성 오류를 사전에 방지하고, 공개 여부나 퍼블리싱 전략을 명시할 수 있다.

## Details

### engines

지원하는 Node.js 또는 npm 버전을 명시한다. 해당 조건을 충족하지 않으면 경고 또는 오류가 발생한다.

```json
"engines": {
  "node": ">=16.0.0",
  "npm": ">=8.0.0"
}
```

:::info 기본적으로는 경고만 출력되며, `engineStrict`를 설정하거나 `.npmrc`에서 강제해야 설치 오류로 처리된다. :::

### engineStrict

설치 시 `engines` 조건을 강제할지를 설정한다. npm v7 이상에서는 무시되며, `.npmrc` 파일에서 설정하는 것이 일반적이다.

```json
"engineStrict": true
```

:::caution 이 필드는 현재 deprecated 상태이며, 대신 `.npmrc`에 `engine-strict=true`를 사용하는 것이 권장된다. :::

### os

허용된 운영체제를 배열로 명시한다. 지정되지 않은 운영체제에서는 설치가 차단된다.

```json
"os": ["darwin", "linux"]
```

- `darwin`: macOS
- `win32`: Windows
- `linux`: Linux

### cpu

지원하는 CPU 아키텍처를 배열로 명시한다.

```json
"cpu": ["x64", "arm64"]
```

- `x64`: 인텔/AMD 64비트
- `arm64`: M1, M2, ARM 기반

### private

해당 필드가 `true`일 경우 `npm publish` 명령어가 차단된다. 실수로 퍼블릭 레지스트리에 배포되는 것을 방지한다.

```json
"private": true
```

:::tip 모노레포 루트나 내부용 패키지에서 반드시 사용하는 것이 좋다. :::

### publishConfig

배포 관련 설정을 세부 조정할 수 있다. 레지스트리, 접근 범위, 태그 등을 지정한다.

```json
"publishConfig": {
  "registry": "https://registry.npmjs.org/",
  "access": "public",
  "tag": "next"
}
```

#### registry

퍼블리싱 시 사용할 npm 레지스트리 주소를 지정한다.

#### access

- `"public"`: 퍼블릭 공개 (default)
- `"restricted"`: 조직 내부 npm 레지스트리에만 공개

#### tag

배포 시 기본으로 지정할 태그. `"latest"` 대신 `"next"` 또는 `"beta"` 등으로 설정 가능.

## Reference

**author note:** Related note in this repo

- [package.json – 의존성 필드 정리](./dependencies_flieds.md)
- [package.json – 기본 메타 필드 정리](./meta_fields.md)
- [package.json – 실행 및 입출력 필드 정리](./runtime_io_fields.md)

**link:** External reference

- [npm Docs – engines](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#engines)
- [npm Docs – publishConfig](https://docs.npmjs.com/cli/v11/using-npm/config#publishconfig)
- [npm Docs – os and cpu](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#os)
- [npm Docs – private](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#private)
