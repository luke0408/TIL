# ChatModel

## Summary
`ChatModel`은 **[Spring AI](./Spring-AI.md)** 프레임워크에서 AI 모델(특히 대화형 모델)과의 상호작용을 표준화하기 위해 설계된 핵심 인터페이스이다.  
이 인터페이스는 OpenAI, Azure OpenAI, Anthropic, Google Gemini 등의 다양한 공급자 모델을 일관된 방식으로 사용할 수 있도록 추상화한다.

## Details

### 1. ChatModel의 역할
`ChatModel`은 **대화형 AI 모델과의 통신을 추상화하는 인터페이스**로, 다음을 수행한다.
- 모델에 **입력(prompt)** 을 전달하고
- **응답(ChatResponse)** 을 수신하며
- 필요 시 **대화 상태(conversation state)** 를 유지·관리한다.

:::note[NOTE]
Spring AI의 ChatModel은 “JDBC의 Statement”와 유사한 개념으로,  
AI 모델과의 기본 요청/응답을 담당하는 저수준 API이다.
:::


### 2. 주요 메서드
| 메서드 | 설명 |
|:--|:--|
| `call(ChatPrompt prompt)` | 주어진 `ChatPrompt`를 모델에 전달하고 `ChatResponse`를 반환한다. |
| `stream(ChatPrompt prompt)` | 스트리밍 형태로 응답을 수신한다. (`Flux<ChatResponse>` 형태) |

예시:

```java
ChatResponse response = chatModel.call(
    new Prompt("Explain Spring AI ChatModel in simple terms.")
);
System.out.println(response.getResult().getOutput().getContent());
```


### 3. 구성 요소

#### (1) `ChatPrompt`

* 모델에 전달할 **질문, 역할, 시스템 메시지** 등을 포함한다.
* 여러 개의 `Message` 객체를 포함할 수 있으며, 각 메시지는 다음과 같은 역할(role)을 가진다.

  * `system`: 모델의 동작 방식을 정의
  * `user`: 사용자 입력
  * `assistant`: 모델의 이전 응답

#### (2) `ChatResponse`

* 모델의 **응답 결과**를 포함한다.
* 주요 속성:

  * `result`: 모델이 반환한 텍스트 또는 구조화된 데이터
  * `metadata`: 모델 이름, 사용량 토큰, 생성 시간 등


### 4. 구현 클래스 예시

| 구현체                    | 설명                    |
| :--------------------- | :-------------------- |
| `OpenAiChatModel`      | OpenAI API와 연동        |
| `AzureOpenAiChatModel` | Azure 환경에서의 OpenAI 모델 |
| `AnthropicChatModel`   | Claude 모델 계열          |
| `VertexAiChatModel`    | Google Vertex AI 연동   |
| `OllamaChatModel`      | 로컬 LLM 실행용 모델         |

이처럼 `ChatModel`은 구체적인 공급자 모델을 교체하더라도 동일한 인터페이스를 통해 코드를 유지할 수 있게 한다.

### 5. `ChatModel`의 Spring 구성

Spring AI에서는 `@Bean` 등록을 통해 ChatModel을 구성할 수 있다.

```java
@Bean
public ChatModel chatModel(OpenAiApi api) {
    return new OpenAiChatModel(api);
}
```

또는 `application.yml`로 구성 가능하다.

```yaml
spring:
  ai:
    openai:
      api-key: ${OPENAI_API_KEY}
```

### 6. 고급 기능

* **메시지 히스토리(MessageHistory)** 지원
  : 이전 대화를 `ChatMemory`로 저장하여 컨텍스트 유지.
* **Tool / Function Calling**
  : 모델이 함수 호출 형태로 외부 기능을 트리거할 수 있음.
* **Streaming Response**
  : 실시간 응답 처리(`Flux<ChatResponse>`).
* **Template 기반 Prompt 관리**
  : `PromptTemplate`을 통해 동적 파라미터 바인딩 가능.

## Reference

**link:** External reference

* [Spring AI Reference – ChatModel](https://docs.spring.io/spring-ai/reference/api/chatmodel.html)
* [DevWriter 블로그 – Spring AI ChatModel 소개](https://devwriter.tistory.com/99?category=1300694)
* [Sionic AI Blog – Spring AI Series (1)](https://blog.sionic.ai/spring-ai-series-1)