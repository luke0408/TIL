# package.json – 실행 및 입출력 필드 정리
<!-- 
이 노트는 package.json의 실행 및 입출력 필드들을 정리한 것이다.
이 필드들은 패키지를 어떤 방식으로 로드하고 실행할 수 있는지를 결정하며, CommonJS, ESM, 브라우저 환경, CLI 도구 등 다양한 형태를 지원한다.
-->

## Summary
`package.json`의 실행 및 입출력 필드는 패키지의 진입점, 실행 스크립트, CLI 명령어, 브라우저 대응, 타입 선언 등을 정의한다. 이 필드들은 패키지를 어떻게 소비할지에 대한 계약을 형성한다.

## Details

### main
패키지의 CommonJS 진입점 파일을 지정한다. `require()` 호출 시 기본으로 참조된다.

```json
"main": "./dist/index.js"
````

### module

ESM(ECMAScript Module) 진입점을 지정한다. Rollup, Webpack 등에서 사용된다.

```json
"module": "./dist/index.mjs"
```

### exports

패키지의 외부 접근 가능한 API를 정의한다. ESM/Node.js v12 이상에서 적극 활용된다.

```json
"exports": {
  ".": "./dist/index.js",
  "./cli": "./dist/cli.js"
}
```

> [!IMPORTANT]
> `exports`를 설정하면 그 외 모든 파일은 외부에서 접근 불가하다. 전체 구조를 명시적으로 통제할 수 있다.

### browser

브라우저 환경용 진입점을 설정한다. 번들러가 이를 참조하여 대체하도록 유도한다.

```json
"browser": {
  "./dist/index.js": "./dist/browser.js"
}
```

또는 간단히 문자열로 지정 가능:

```json
"browser": "./dist/browser.js"
```

### bin

CLI(Command Line Interface) 도구용 실행 파일을 지정한다. 단일 명령 또는 여러 명령을 지원한다.

```json
"bin": {
  "mycli": "./bin/index.js"
}
```

`chmod +x bin/index.js` 형태로 실행 권한을 부여해야 한다.

### files

배포 시 포함할 파일/디렉토리를 명시한다. `.npmignore`보다 우선 적용된다.

```json
"files": [
  "dist",
  "bin",
  "README.md"
]
```

### man

`man` 페이지를 지정할 수 있다. CLI 도구에서 사용되며, 배열 형식으로 여러 페이지 등록 가능.

```json
"man": "./man/mycli.1"
```

### directories

npm legacy 필드. 디렉토리 구조를 설명한다. 현재는 거의 사용되지 않는다.

```json
"directories": {
  "lib": "src",
  "bin": "bin"
}
```

### types / typings

TypeScript 또는 DefinitelyTyped에서 사용하는 타입 정의 파일 진입점이다.

```json
"types": "./dist/index.d.ts"
```

또는

```json
"typings": "./dist/index.d.ts"
```

> [!NOTE]
> `types`와 `typings`은 동일한 역할을 하며, `types`가 더 권장되는 표기이다.

### sideEffects

Webpack에서 사용하는 필드로, tree-shaking 시 부수효과가 있는 파일을 지정한다.

```json
"sideEffects": false
```

또는 특정 파일만 제외할 수도 있다:

```json
"sideEffects": [
  "./src/init-globals.js"
]
```

### type

모듈 시스템을 명시한다. `"commonjs"` 또는 `"module"` 중 하나이며, 기본값은 `"commonjs"`이다.

```json
"type": "module"
```

> [!CAUTION]
> 이 필드가 `"module"`로 설정되면 `.js` 파일도 ESM으로 해석되므로 `import/export` 구문만 허용된다.

## Reference

**link:** External reference

* [npm Docs – package.json exports](https://nodejs.org/api/packages.html#exports)
* [npm Docs – CLI bin field](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#bin)
* [TypeScript Docs – publishing declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)
