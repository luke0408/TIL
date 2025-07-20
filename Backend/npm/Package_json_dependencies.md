# package.json – 의존성 필드 정리
<!-- 
이 노트는 package.json에서 의존성 관련 필드들을 정리한 것이다.
런타임과 개발 환경에 필요한 외부 라이브러리, 패키지 관리 방식 등을 정의한다.
-->

## Summary
`package.json`의 의존성 필드는 패키지가 실행되거나 개발될 때 필요한 외부 패키지들을 정의한다. 의존성의 종류에 따라 `dependencies`, `devDependencies`, `peerDependencies`, `optionalDependencies`, `bundledDependencies` 등 다양한 방식으로 관리된다.

## Details

### dependencies
런타임에 필요한 패키지를 정의한다. 애플리케이션이 동작하는 데 필수적인 라이브러리들이 포함된다.

```json
"dependencies": {
  "express": "^4.18.2",
  "lodash": "^4.17.21"
}
````

* `^`: 해당 버전의 **최신 마이너 버전**까지 설치 가능
* `~`: 해당 버전의 **최신 패치 버전**까지 설치 가능
* 정확한 버전은 `1.0.0` 형태로 고정 가능

### devDependencies

개발 중에만 필요한 패키지를 정의한다. 빌드 도구, 테스트 라이브러리, 린터, 타입 정의 등이 포함된다.

```json
"devDependencies": {
  "jest": "^27.0.0",
  "eslint": "^8.0.0"
}
```

* `dependencies`와 마찬가지로 버전 범위를 지정할 수 있다.

> [!TIP]
> 개발 환경과 실행 환경을 분리하여, 배포 시 불필요한 의존성을 제외시킬 수 있다.

### peerDependencies

해당 패키지가 **호환해야 할 외부 패키지**를 명시한다. 직접 설치는 요구되지 않으며, 사용자가 직접 설치해야 한다.

```json
"peerDependencies": {
  "react": "^17.0.0"
}
```

* `peerDependencies`는 패키지가 특정 버전의 라이브러리와 호환되도록 요구할 때 유용하다.
* 예를 들어, `react-router`와 같은 라이브러리는 `react`가 반드시 필요하다.

> [!IMPORTANT]
> `peerDependencies`는 자동으로 설치되지 않으므로, 사용자가 `react`를 별도로 설치해야 한다.

### peerDependenciesMeta

`peerDependencies`에서 정의한 의존성의 필수 여부를 제어할 수 있다. 예를 들어, 특정 패키지가 선택적일 때 이를 명시할 수 있다.

```json
"peerDependenciesMeta": {
  "react": {
    "optional": true
  }
}
```

* `optional`: 선택적 의존성으로 설정된다.
* 이는 패키지를 사용하는 쪽에서 해당 의존성을 설치할지 말지 결정하도록 한다.

### optionalDependencies

선택적인 의존성이다. 이 의존성은 설치되지 않더라도 패키지가 정상적으로 작동할 수 있다.

```json
"optionalDependencies": {
  "fsevents": "^2.0.0"
}
```

* `optionalDependencies`가 설치되지 않아도 패키지 동작에 문제는 없다. 이 필드는 특히 운영체제에 따라 필요한 패키지를 선택적으로 설치할 때 유용하다.

> [!WARNING]
> `optionalDependencies`의 패키지가 설치되지 않으면 경고가 출력된다.

### bundledDependencies (or bundleDependencies)

배포 시 포함할 의존성을 명시한다. npm에 패키지를 배포할 때, 해당 의존성들도 함께 번들링되어 배포된다.

```json
"bundledDependencies": [
  "lodash",
  "moment"
]
```

* 이 필드는 주로 패키지를 배포할 때 외부 의존성을 패키지 내에 포함시키고자 할 때 사용된다.

## Reference

**link:** External reference

* [npm Docs – dependencies](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#dependencies)
* [npm Docs – devDependencies](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#devdependencies)
* [npm Docs – peerDependencies](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#peerdependencies)
* [npm Docs – optionalDependencies](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#optionaldependencies)
