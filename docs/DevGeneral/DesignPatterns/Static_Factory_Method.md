# 정적 팩토리 메서드
<!-- 
TIL을 작성할 때에는 해당 노트의 제목과 관련한 내용만 작성합니다.
추가적인 개념을 설명할 필요가 있다면, 해당 개념에 대한 노트를 새롭게 작성합니다.
이후 해당 개념 노트를 Reference에 링크합니다.

ex) 버블 정렬에 대해 설명하기 위해, Array 자료형을 설명해야할 경우 -> Array 노트 생성
-->

## Summary

**정적 팩토리 메서드 패턴(Static Factory Method)** 은 개발자가 구성한 Static Method를 통해 생성자를 간접적으로 호출하는 객체를 생성하는 디자인 패턴이다.

객체를 인스턴스화 할때 직접적으로 생성자 (Constructor)를 호출하여 생성 하는 것과는 달리, 별도의 **객체 생성의 역할을 하는 클래스 메서드**를 통해 간접적으로 호출을 유도한다.

## Details

### 정적 팩토리 메서드의 특징

1. **생성 목적에 대한 이름 표현이 가능하다.** <br></br><br></br>
   생성자의 이름은 클래스의 이름을 그대로 사용하지만, 정적 팩토리 메소드는 메소드의 이름을 자유롭게 지을 수 있어서 그 용도를 명확히 표현할 수 있다.

2. **인스턴스에 대해 통제 및 관리가 가능하다.** <br></br><br></br>
   메서드를 통해 한 단계 거쳐 간접적으로 객체를 생성하기 때문에, 기본적으로 전반적인 객체 생성 및 통제 관리를 할 수 있게 된다. 즉, 필요에 따라 항상 새로운 객체를 생성해서 반환할 수도 있고, 아니면 객체 하나만 만들어두고 이를 공유하여 재사용하게 하여 불필요한 객체를 생성하는 것을 방지 할 수 있는 것이다.

3. **하위 자료형 객체를 반환할 수 있다.** <br></br><br></br>
   생성자를 사용하면 생성되는 객체의 클래스가 하나로 고정되지만, 정적 팩터리 메서드를 사용하면 반환할 객체의 클래스를 자유롭게 선택할 수 있다.

4. **인자에 따라 다른 객체를 반환하도록 분기할 수 있다** <br></br><br></br>
   메서드이니 매개변수를 받을수 있을테고, 메서드 블록 내에서 분기문을 통해 여러 자식 타입의 인스턴스를 반환하도록 응용 구성이 가능하다.

5. **객체 생성을 캡슐화 할 수 있다.** <br></br><br></br>
   생성자를 사용하는 경우 외부에 내부 구현을 드러내야 하는데, 정적 팩토리 메서드는 구현부를 외부로 부터 숨길 수 있어 캡슐화(encapsulation) 및 정보 은닉(information hiding)을 할수 있다는 특징이 있다. 또한 노출하지 않는다는 특징은 **정보 은닉성**을 가지기도 하지만 동시에 사용하고 있는 구현체를 숨겨 **의존성을 제거**해주는 장점도 지니고 있다.

### 정적 팩토리 메서드 네이밍 규칙

정적 팩토리 메서드와 다른 정적 메서드 간의 역할을 구분짓기 위해 독자적인 네이밍 컨벤션(Convention)이 존재한다.

단, 정적 팩터리 메서드에서의 네이밍은 단순히 선호도의 의미를 넘어서 거의 **법칙 정도로 사용되는 것**이라 **개념을 아는 것 만큼 중요**하다.

- `from` : 하나의 매개 변수를 받아서 객체를 생성
- `of` : 여러개의 매개 변수를 받아서 객체를 생성
- `getInstance` | `instance` : 인스턴스를 생성, 이전에 반환했던 것과 같을 수 있음
- `newInstance` | `create` : 항상 새로운 인스턴스를 생성
- `get[OrderType]` : 다른 타입의 인스턴스를 생성, 이전에 반환했던 것과 같을 수 있음
- `new[OrderType]` : 항상 다른 타입의 새로운 인스턴스를 생성

> `Java` 언어에서의 사용 예시

```java
// of: 매개변수 여러개를 받아서 적합한 타입의 인스턴스를 반환
Set<Rank> faceCards = EnumSet.of(param, param, param);

// from: 매개변수 하나를 받아서 해당 타입의 인스턴스를 반환
Date d = Date.from(param);

// valueOf: from, of와 유사
BigInteger bi = BigInteger.valueOf(param)

// instance, getInstnce: 매개변수에 맞는 인스턴스를 반환, 같은 인스턴스 보장 X
StackWalker luke = StackWalker.getInstance(param);

// create, newInstance: 매개변수에 맞는 인스턴스를 반환, 같은 인스턴스 보장 O
Object newArray = Array.newInstance(param)

// getType: getInstnce와 같으나 다른 클래스의 인스턴스를 반환
FileStore fs = Files.getFileStore(param);

// newType: newInstnce와 같으나 다른 클래스의 인스턴스를 반환
BufferedReader br = Files.newBufferedReader(param);

// type: getType, newType와 유사
List list = Collections.list(param);
```

### 정적 팩토리 메서드의 단점

1. **private 생성자일 경우 상속 불가능** <br></br><br></br>
   정적 팩토리 메서드로 클래스를 설계를 하면 **생성자를 private 접근 제어자로 설정**하게 된다. 따라서 정적 팩토리 메서드를 적용하는 경우에는 상속을 이용한 확장이 불가능해진다.

2. **API 문서에서의 불편함** <br></br><br></br>
   생성자는 하나의 자바 프로그래밍 언어의 스펙이기 때문에 JavaDoc 같은 문서에서 상단에 정의되어 있기 때문에 빠르게 그에 대한 스펙 검색을 할수가 있다. 반면에 정적 팩토리 메서드는 개발자가 임의로 만든 메서드이기 때문에, 안그래도 그 많은 메서드들 중에서 정적 팩토리 역할을 하는 메서드를 뒤져서 찾아 이해해야 한다. <br></br><br></br>
   따라서 클래스 설계자는 **API 문서를 깔끔하게 작성**할 필요가 있으며, 정적 팩토리 메서드를 작성할때 **네이밍 컨밴션을 지킴**으로써 문제점을 극복하기도 한다.

## Reference
<!-- 사용하지 않는 레퍼런스 종류는 삭제 후 업로드 -->
  
**link:** External reference
- [정적 팩토리 메서드 패턴 (Static Factory Method)](https://inpa.tistory.com/entry/GOF-%F0%9F%92%A0-%EC%A0%95%EC%A0%81-%ED%8C%A9%ED%86%A0%EB%A6%AC-%EB%A9%94%EC%84%9C%EB%93%9C-%EC%83%9D%EC%84%B1%EC%9E%90-%EB%8C%80%EC%8B%A0-%EC%82%AC%EC%9A%A9%ED%95%98%EC%9E%90)
- [Effective Java 3/e](https://product.kyobobook.co.kr/detail/S000001033066?utm_source=google&utm_medium=cpc&utm_campaign=googleSearch&gt_network=g&gt_keyword=&gt_target_id=aud-901091942354:dsa-435935280379&gt_campaign_id=9979905549&gt_adgroup_id=132556570510&gad_source=1)