# Pulumi 개요

## Summary
Pulumi는 프로그래밍 언어를 활용하여 인프라를 코드(Infrastructure as Code, IaC)로 정의하고 관리할 수 있는 도구이다. 기존의 선언형 IaC 도구(Terraform, CloudFormation 등)와 달리, Pulumi는 **TypeScript, Python, Go, .NET(C# 등)과 같은 일반적인 프로그래밍 언어**를 사용하여 클라우드 리소스를 정의할 수 있도록 지원한다.

## Details

### Pulumi란?
Pulumi는 **클라우드 네이티브 인프라 관리**를 위한 Infrastructure as Code(IaC) 도구이다.  
일반적인 IaC 도구들과 달리 Pulumi는 기존의 선언형 DSL(Domain-Specific Language)이 아닌 **일반적인 프로그래밍 언어**를 사용하여 인프라를 정의할 수 있도록 설계되었다.

Pulumi를 사용하면 다음과 같은 작업을 수행할 수 있다.

- 클라우드 리소스를 **코드 기반**으로 선언
- **AWS, Azure, GCP, Kubernetes 등의 멀티 클라우드** 환경을 지원
- **풀 스택 인프라**(서버, 데이터베이스, 네트워크, 컨테이너, 애플리케이션)를 코드로 정의
- 코드에서 **반복문, 조건문, 함수, 모듈화 등의 프로그래밍 기능** 활용 가능

### Pulumi의 동작 방식
Pulumi는 다음과 같은 주요 컴포넌트로 구성된다.

1. **Pulumi SDK**  
   - 사용자가 작성한 코드를 실행하여 클라우드 리소스를 정의하고 배포하는 역할을 함.
   - TypeScript, Python, Go, .NET 등의 언어 SDK를 제공.
  
2. **Pulumi CLI**  
   - `pulumi up`, `pulumi destroy` 등의 명령어를 통해 코드 기반 인프라를 배포하고 관리할 수 있음.
   - 실행 시 Pulumi 프로그램을 해석하여 상태(State)를 기반으로 변경 사항을 적용.

3. **Pulumi State(상태 관리)**  
   - Pulumi는 Terraform처럼 리소스 상태를 저장하여 변경 사항을 추적.
   - 로컬 파일 또는 Pulumi Cloud(기본 옵션), S3, Azure Blob Storage, GCS 등을 사용하여 상태 관리 가능.

4. **Pulumi Service (선택적 사용)**  
   - Pulumi가 제공하는 클라우드 기반 관리 서비스.
   - 여러 사용자가 협업할 수 있도록 프로젝트 및 권한 관리 기능 제공.

### Pulumi의 실행 과정
Pulumi를 실행하면 다음과 같은 과정이 진행된다.

1. **코드 작성**  
   - TypeScript, Python, Go 등을 사용하여 클라우드 리소스를 선언.
  
2. **`pulumi up` 실행**  
   - Pulumi CLI가 실행되면 코드가 실행되고 리소스가 생성됨.
   - 상태(State)와 비교하여 변경 사항을 감지하고, 적용할 내용을 미리 보여줌.

3. **리소스 프로비저닝**  
   - Pulumi는 클라우드 API를 호출하여 실제 리소스를 생성/업데이트/삭제.

4. **상태 저장**  
   - 변경 사항을 Pulumi State에 저장하여 다음 실행 시 이를 기반으로 변경 사항을 추적.

### Pulumi의 장점
Pulumi는 다음과 같은 장점을 제공한다.

| 특징 | 설명 |
|------|------|
| **일반적인 프로그래밍 언어 사용** | TypeScript, Python, Go, C# 등을 사용하여 인프라 코드 작성 가능 |
| **멀티 클라우드 지원** | AWS, Azure, GCP, Kubernetes 등을 단일 코드베이스에서 관리 가능 |
| **상태 관리** | Pulumi Cloud 또는 로컬/원격 저장소를 통해 상태를 저장하고 변경 사항을 추적 |
| **모듈화 및 코드 재사용** | 함수, 라이브러리, 패키지 시스템을 활용하여 코드 재사용 가능 |
| **동적 구성 가능** | 조건문, 반복문, 변수 등을 활용하여 동적 인프라 설정 가능 |

## Reference

**author note:** Related note in this repo
- [Pulumi Project](./Project.md)
- [Pulumi Stack](./Stack.md)

**link:** External reference
- [Pulumi 공식 문서: How Pulumi Works](https://www.pulumi.com/docs/iac/concepts/how-pulumi-works/)