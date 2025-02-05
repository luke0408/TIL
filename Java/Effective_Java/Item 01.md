# 생성자 대신 정적 팩터리 메서드를 고려하라

> Item 01을 정리한 내용입니다.

## 생성자 및 정적 팩터리 메서드

생성자(`new`)는 JAVA의 가장 기본적인 문법이고 클래스의 인스턴스를 만들 때 일반적으로 생성자를 사용한다. 하지만 개발자는 클래스에 별도의 정적 팩터리 메서드를 정의하여 다양한 장점을 활용할 수 있다.

```java
public class TestClass {
    // 생성자를 통한 인스턴스 생성
    public TestClass() {}
    
    // 정적 팩토리 메소드를 통한 인스턴스 생성
    public static TestClass getInstance() {
        return new TestClass();
    }
}
```

위와 같이 간단한 예제 코드를 보면, `TestClass`는 생성자를 통해서 인스턴스를 만들 수도 있고 `getInstance`라는 정적 팩토리 메소드를 통해서도 인스턴스를 만들 수 있다.

## 장점

### 이름을 가질 수 있다

생성자의 이름은 클래스의 이름을 그대로 사용하지만, 정적 팩토리 메소드는 메소드의 이름을 자유롭게 지을 수 있어서 그 용도를 명확히 표현할 수 있다.
   
```java
// BigInteger 클래스의 probablePrime 메소드
// 메소드의 이름으로 PrimeNumber, 즉 소수를 반환한다는 사실을 알 수 있다.
public static BigInteger probablePrime(int bitLength, Random rnd)
```

### 호출될 때마다 인스턴스를 새로 생성하지 않아도 된다

`new` 키워드를 사용하면 객체는 무조건 새로 생성되지만, 정적 팩토리 메서드는 미리 생성된 객체를 반환할 수 있다.

```java
public static Integer valueOf(int i) {
    if (i >= IntegerCache.low && i <= IntegerCache.high)
        return IntegerCache.cache[i + (-IntegerCache.low)];
    return new Integer(i);
}
```

### 반환 타입의 하위 타입 객체를 반환할 수 있는 능력이 있다

생성자를 사용하면 생성되는 객체의 클래스가 하나로 고정되지만, 정적 팩터리 메서드를 사용하면 반환할 객체의 클래스를 자유롭게 선택할 수 있다.

```java
interface Computer {
    void powerOn();
}

class BasicComputer implements Computer {
    public void powerOn() {
        System.out.println("컴퓨터 입니다.");
    }
}

class StandardComputer implements Computer {
    public void powerOn() {
        System.out.println("표준 컴퓨터 입니다.");
    }
}

class PremiumComputer implements Computer {
    public void powerOn() {
        System.out.println("최고급 컴퓨터 입니다.");
    }
}

class Computers {
    public static Computer getBasicComputer() {
        return new BasicComputer();
    }
    public static Computer getStandardComputer() {
        return new StandardComputer();
    }
    public static Computer getPremiumComputer() {
        return new PremiumComputer();
    }
}
```

### 입력 매개변수에 따라 매번 다른 클래스의 객체를 반환할 수 있다

클래스의 생성자는 해당 클래스의 인스턴스만 만들 수 있지만, 정적 팩터리 메소드는 상황에 따라 다른 클래스의 인스턴스를 반환할 수 있다.

```java
// EnumSet의 정적 팩터리 메소드는 경우에 따라 RegularEnumSet, JumboEnumSet 두개의 클래스의 인스턴스를 반환한다.
public static <E extends Enum<E>> EnumSet<E> noneOf(Class<E> elementType) {
    Enum<?>[] universe = getUniverse(elementType);
    if (universe == null)
        throw new ClassCastException(elementType + " not an enum");
    if (universe.length <= 64)
        return new RegularEnumSet<>(elementType, universe);
    else
        return new JumboEnumSet<>(elementType, universe);
}
```

### 정적 팩터리 메서드를 작성하는 시점에는 반환할 객체의 클래스가 존재하지 않아도 된다

클래스가 존재해야 생성자가 존재할 수 있지만, 정적 팩터리 메소드는 메소드와 반환할 타입만 정해두고 실제 반환될 클래스는 나중에 구현할 수 있다.

```java
// nextProviderClass 메소드 작성 시점에는 클래스가 존재하지 않아도 된다.
// 클래스가 작성되면 그때 클래스의 이름을 전달하면 된다. 
private Class<?> nextProviderClass() {
    ...
    return Class.forName(cn, false, loader);
    ...
}
```

## 단점

### 상속을 하려면 public이나 protected 생성자가 필요하니, 정적 팩터리 메소드만 제공하면 하위 클래스를 만들 수 없다

정적 팩터리 메소드만을 사용하게 하려면 기존 생성자는 `private`으로 해야하고 상속을 할 수 없게 된다. 하지만 이 단점은 상속보다 컴포지션 사용을 권장하여 해결할 수 있다.

### 정적 팩터리 메소드는 프로그래머가 찾기 어렵다

생성자는 기본 문법이기 때문에 개발자가 새로운 공부없이 바로 사용할 수 있지만, 정적 팩터리 메소드는 개발자가 해당 클래스에 정적 팩터리 메소드가 있는지 알아야 한다.

```java
// from: 매개변수 하나를 받아서 해당 타입의 인스턴스를 반환
Date d = Date.from(param);

// of: 매개변수 여러개를 받아서 적합한 타입의 인스턴스를 반환
Set<Rank> faceCards = EnumSet.of(param, param, param);

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

## 결론
정적 팩터리 메서드와 public 생성자는 각자의 쓰임새가 있으니 상대적인 장단점을 이해하고 사용하는 것이 좋다. 그래도 정적 팩터리를 사용하는 것이 더 유연하고 강력한 방법이 될 수 있다.

### 참고
public 생성자를 쓰는 게 더 나은 경우:
1. 간단한 객체 생성: 간단하게 객체를 생성할 때는 생성자를 사용하는 것이 더 직관적일 수 있다.
2. 단일 클래스의 경우: 특정 클래스에 대해 하나의 생성자만 필요하거나 객체 생성 로직이 단순한 경우에는 생성자를 사용하는 것이 간편하며 더 직관적일 수 있다.
3. 불변 객체 (Immutable Objects): 불변 객체를 생성할 때는 생성자를 통해 초기화하는 것이 일반적이고, 불변 객체는 한 번 생성되면 내부 상태를 변경할 수 없어야 하므로, 생성자를 사용하는 것이 더 적합할 수 있다.

## 레퍼런스

link:
- [Effective Java 3/e](https://product.kyobobook.co.kr/detail/S000001033066?utm_source=google&utm_medium=cpc&utm_campaign=googleSearch&gt_network=g&gt_keyword=&gt_target_id=aud-901091942354:dsa-435935280379&gt_campaign_id=9979905549&gt_adgroup_id=132556570510&gad_source=1)
- [Effective-JAVA-Summary](https://github.com/HugoMatilla/Effective-JAVA-Summary)