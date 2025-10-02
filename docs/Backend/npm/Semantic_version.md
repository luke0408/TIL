# Semantic Versioning

## Summary

Semantic Versioning(이하 SemVer)은 소프트웨어 버전을 관리하고 소통하기 위한 명확한 규약이다. SemVer은 `MAJOR.MINOR.PATCH` 형식을 따르며, 각 숫자는 변경의 성격과 API의 호환성 수준을 나타낸다. npm은 이 규약을 바탕으로 의존성 버전 범위를 유연하게 관리하며, 안전한 업데이트와 예측 가능한 개발을 돕는다.

## Details

### SemVer 기본 구조와 의미

SemVer은 다음과 같은 3개의 숫자로 구성된다.

```text
MAJOR.MINOR.PATCH
예: 2.5.1
```

| 구성 요소 | 설명 | 증가 조건 |
| --- | --- | --- |
| MAJOR | 호환되지 않는 API 변경 | 기존 사용자가 코드를 수정해야 동작할 경우 |
| MINOR | 하위 호환 기능 추가 | 기존 기능은 그대로 두고 새 기능만 추가된 경우 |
| PATCH | 하위 호환 버그 수정 | 기존 기능 수정이나 내부 개선이지만 API는 그대로인 경우 |

:::info[Information] 버전 번호는 반드시 숫자이며, 선행 0을 포함할 수 없다. 예: `01.0.0`은 유효하지 않다. :::

### 초기 개발 단계: 0.y.z

- `0.y.z`는 불안정한 초기 개발 버전으로 간주한다.
- API는 예고 없이 변경될 수 있으며, MAJOR 의미가 적용되지 않는다.
- 예: `0.1.0 → 0.2.0`에서도 API가 깨질 수 있다.

:::danger[CAUTION] 안정적인 API를 공개하려면 `1.0.0` 이후 버전부터 시작해야 한다. :::

### 프리릴리즈 버전과 메타데이터

#### 프리릴리즈(Pre-release)

- 예: `1.0.0-alpha.1`, `1.0.0-beta`, `2.1.0-rc.3`
- 정식 버전보다 낮은 우선순위를 가진다.
- 형식: `MAJOR.MINOR.PATCH-prerelease.label`

#### 빌드 메타데이터(Build Metadata)

- 예: `1.0.0+build.12345`
- 기능에는 영향 없으며, 배포 버전 식별에 사용됨
- 형식: `MAJOR.MINOR.PATCH+metadata`

:::note[NOTE] 빌드 메타데이터는 버전 우선순위 비교에서 **무시**된다. :::

### 버전 우선순위 비교 규칙

1. `MAJOR > MINOR > PATCH` 순으로 숫자 크기 비교
2. 프리릴리즈가 있으면 정식 버전보다 낮다
3. 프리릴리즈 라벨은 왼쪽부터 순서대로 비교하며, 숫자 < 문자

```text
1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-beta < 1.0.0
```

:::warning[WARNING] 동일한 버전 번호를 여러 릴리즈에 재사용하면 안 된다. 각 버전은 고유해야 하며 후퇴(revert)도 불가하다. :::

### npm에서의 SemVer 활용 방식

#### 버전 범위 지정 기호

| 기호      | 설명                  | 예시         | 해석                   |
| --------- | --------------------- | ------------ | ---------------------- |
| `^`       | 호환 가능한 최신 버전 | `^1.2.3`     | `>=1.2.3 <2.0.0`       |
| `~`       | 패치만 허용           | `~1.2.3`     | `>=1.2.3 <1.3.0`       |
| `>` / `<` | 부등호 조건           | `>=2.0.0`    | 조건에 맞는 모든 버전  |
| `*`, `x`  | 와일드카드            | `1.2.x`, `*` | 해당 범위 내 버전 전체 |

:::tip[TIP] 대부분의 라이브러리는 `^`를 기본값으로 사용하며, 안전한 업그레이드를 허용한다. :::

#### 설치 결과 예시

```jsonc
"dependencies": {
  "lodash": "^4.17.21"
}
```

- `4.18.0`, `4.19.5` 등 4.x.x 범위의 최신 패치/마이너 버전이 설치된다.
- 단, `5.0.0`은 MAJOR가 다르므로 설치되지 않음

## Reference

**link:** External reference

- [Semantic Versioning 공식 명세 (영문)](https://semver.org/spec/v2.0.0.html)
- [Semantic Versioning 한글 번역](https://semver.org/lang/ko/)
- [About Semantic Versioning — npm Docs](https://docs.npmjs.com/about-semantic-versioning)
- [Semantic Versioning — Devopedia](https://devopedia.org/semantic-versioning)
