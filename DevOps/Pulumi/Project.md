# Pulumi Project

## Summary
Pulumi 프로젝트(Project)는 인프라를 코드로 정의하고 관리하기 위한 기본 단위이다.  
프로젝트는 `Pulumi.yaml` 파일을 통해 설정되며, 여러 **Stack(스택)** 을 활용하여  
환경별 인프라를 손쉽게 관리할 수 있다. Pulumi는 일반 프로그래밍 언어를 사용하여  
인프라를 선언적으로 정의할 수 있도록 지원한다.

## Details

### Pulumi Project란?
Pulumi 프로젝트는 클라우드 리소스를 코드로 관리하는 **Infrastructure as Code(IaC)**의 핵심 단위이다.  

주요 특징:

- **하나의 Project는 하나의 Pulumi.yaml 파일로 정의됨**
- **Stack(스택)과 결합하여 환경별 배포 관리 가능**
- **TypeScript, Python, Go, .NET 등 다양한 프로그래밍 언어 지원**
- **클라우드 제공업체(AWS, Azure, GCP 등)와 Kubernetes 같은 인프라를 관리할 수 있음**


### Pulumi Project의 주요 구성 요소

1. **Pulumi.yaml (프로젝트 설정 파일)**
   - 프로젝트의 이름, 설명, 런타임(runtime) 등의 정보를 정의하는 설정 파일.
   - 프로젝트 생성 시 자동으로 생성됨.
   - 예제 (`Pulumi.yaml`):
     ```yaml
     name: my-pulumi-project
     description: A sample Pulumi project
     runtime: nodejs
     main: index.ts
     ```
   - `runtime`: 사용할 프로그래밍 언어 지정 (`nodejs`, `python`, `go`, `dotnet` 등)
   - `main`: 프로젝트의 엔트리 포인트 파일 지정

2. **Stack (스택)**
   - 동일한 프로젝트에서 **여러 환경(개발, 스테이징, 운영 등)** 을 관리할 수 있도록 하는 개념.
   - `pulumi stack init <stack-name>` 명령어를 통해 생성 가능.

3. **프로젝트 코드 (Application Code)**
   - TypeScript(Node.js), Python, Go 등의 언어로 작성되며, 클라우드 리소스를 선언적으로 정의.

4. **Pulumi State (상태 관리)**
   - 리소스의 현재 상태를 추적하는 기능.
   - Pulumi Cloud, S3, Azure Blob, GCS 등을 통해 상태를 관리 가능.

### Pulumi Project 생성 방법

Pulumi 프로젝트는 `pulumi new` 명령어를 통해 생성할 수 있다.

```sh
pulumi new aws-typescript
```

위 명령어를 실행하면:
- `Pulumi.yaml` (설정 파일)
- `index.ts` (메인 코드 파일)
- `.gitignore`
- `package.json` (Node.js 패키지 관리 파일)

이 포함된 기본 프로젝트 구조가 생성된다.

### Pulumi.yaml 설정 옵션
Pulumi 프로젝트에서 사용할 수 있는 `Pulumi.yaml`의 주요 옵션은 다음과 같다.

| 옵션         | 설명 |
|-------------|--------------------------------|
| `name`      | 프로젝트 이름 (고유해야 함) |
| `description` | 프로젝트 설명 |
| `runtime`   | 사용할 프로그래밍 언어 (`nodejs`, `python`, `go`, `dotnet`) |
| `main`      | 프로젝트의 엔트리 포인트 파일 (`index.ts` 등) |
| `config`    | 기본 설정값 (예: `config: { region: us-west-2 }`) |
| `backend`   | 상태 저장소 위치 (예: `backend: { url: "s3://my-state-bucket" }`) |

예제 (`Pulumi.yaml`):

```yaml
name: my-cloud-project
description: A Pulumi project for cloud infrastructure
runtime: nodejs
main: index.ts
config:
  aws:region: us-west-2
backend:
  url: s3://my-state-bucket
```

### Pulumi Project와 Stack 활용
Pulumi는 **Stack(스택)** 개념을 활용하여 여러 환경을 쉽게 관리할 수 있다.

```sh
pulumi stack init dev
pulumi stack init staging
pulumi stack init prod
```

각 스택은 개별적인 상태(State)를 가지며, 환경별로 설정을 다르게 적용할 수 있다.

**예제: 환경별 다른 변수 사용**
```sh
pulumi config set aws:region us-west-2 --stack dev
pulumi config set aws:region us-east-1 --stack prod
```

## Reference

**author note:** Related note in this repo
- [Pulumi](./Pulumi.md)
- [Stack](./Stack.md)

**link:** External reference
- [Pulumi 공식 문서: Pulumi Project](https://www.pulumi.com/docs/iac/concepts/projects/)
- [Pulumi 공식 문서: Pulumi Project File](https://www.pulumi.com/docs/iac/concepts/projects/project-file/)