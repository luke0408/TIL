# Pulumi Stack

## Summary
Pulumi Stack(스택)은 **하나의 프로젝트에서 여러 환경(Development, Staging, Production 등)을 관리하는 단위**이다.  
각 스택은 **고유한 구성(Config)과 상태(State)** 를 가지며, 하나의 프로젝트 내에서 다양한 배포 환경을 손쉽게 운영할 수 있도록 도와준다.

## Details

### Pulumi Stack이란?
Pulumi에서 Stack은 프로젝트 내에서 **환경별 배포 단위**를 정의하는 개념이다.  
각 스택은 **서로 독립적인 설정과 리소스 상태**를 가지며, 동일한 코드베이스에서 다른 환경을 분리하여 관리할 수 있다.

:::note
**Stack은 같은 프로젝트 안에서 여러 개를 만들 수 있으며, 서로 독립적으로 관리됩니다.**
예를 들어, `dev`, `staging`, `prod`와 같은 환경을 각각 스택으로 정의하여 사용할 수 있습니다.
:::

Pulumi Stack을 사용하면 다음과 같은 작업이 가능하다:
- 개발(Dev), 테스트(Staging), 운영(Prod) 환경을 **하나의 프로젝트에서 분리하여 관리**
- 각 환경별 **리소스 구성(Config) 값을 다르게 설정**
- **Pulumi CLI를 사용하여 손쉽게 스택 간 전환 및 배포**

### Pulumi Stack의 주요 특징

1. **각 Stack은 개별적인 상태(State)를 가짐**
2. **Stack 별 Config 값 적용 가능**
3. **Stack 전환이 간편**

:::info
**스택 간 리소스가 공유되지 않습니다.**
즉, `dev` 스택에서 생성된 리소스는 `prod` 스택과 전혀 연관이 없습니다.
:::

### Pulumi Stack 생성 및 관리

#### 1. Stack 생성
새로운 Stack을 생성하려면 `pulumi stack init` 명령어를 사용한다.

```sh
pulumi stack init dev
pulumi stack init prod
```
이 명령어를 실행하면 `dev`와 `prod`라는 두 개의 스택이 생성된다.

#### 2. 현재 Stack 확인 및 전환
현재 활성화된 Stack을 확인하려면 다음 명령어를 사용한다.

```sh
$ pulumi stack ls

NAME                                      LAST UPDATE              RESOURCE COUNT
jane-dev                                  4 hours ago              97
staging*                                  n/a                      n/a
broomellc/test                            2 weeks ago              121
```
별표(`*`)가 붙은 Stack이 현재 활성화된 스택이다.

다른 스택으로 전환하려면 `pulumi stack select <stack-name>` 명령어를 실행하면된다.

```sh
$ pulumi stack select jane-dev

$ pulumi stack ls

NAME                                      LAST UPDATE              RESOURCE COUNT
jane-dev*                                 4 hours ago              97
staging                                   n/a                      n/a
broomellc/test                            2 weeks ago              121
```

:::note
스택을 변경하면 해당 스택의 상태(state)와 설정(config)이 적용된다.
:::

#### 3. Stack 업데이트

Pulumi는 인프라 변경사항을 사전에 검초할 수 있도록 Update Plan 기능을 제공한다.
`pulumi preview` 명령어를 사용하면 적용될 변경 사항을 미리 확인할 수 있다.

```sh
$ pulumi preview

Previewing update (dev)

    Type                    Name                    Plan        
+   pulumi:pulumi:Stack     my-project-dev          create      
+   aws:s3:Bucket           my-bucket               create      
```

- `+`: 새로 생성될 리소스
- `~`: 변경될 리소스
- `-`: 삭제될 리소스

인프라 변경 사항을 현재 Stack에 업데이트하려면 `pulumi up` 명령어를 실행한다.

```sh
$ pulumi up
```

:::note
`pulumi up`을 실행하기 전에 항상 `pulumi preview`를 실행하는 습관을 가지자.
:::

#### 4. Stack 삭제 및 리소스 삭제

현재 Stack에 속한 모든 리소스를 삭제하려면 `pulumi destroy` 명령어를 사용한다.

```sh
$ pulumi destroy
```

:::note
`pulumi destory`는 리소스만 삭제하며 스택 자체는 건들지 않는다.
:::

현재 Stack에서 특정 리소스를 삭제하려면 `pulumi delete <resource-type>:<resource-name>` 명령어를 사용한다.

```sh
$ pulumi delete aws:s3:my-bucket
```

Stack을 삭제하려면 `pulumi stack rm <stack-name>` 명령어를 사용한다.

```sh
$ pulumi stack rm dev
```

## Reference

**author note:** Related note in this repo
- [Pulumi](./Pulumi.md)
- [Pulumi Project](./Project.md)

**link:** External reference
- [Pulumi 공식 문서: Pulumi Stack](https://www.pulumi.com/docs/iac/concepts/stacks/)
