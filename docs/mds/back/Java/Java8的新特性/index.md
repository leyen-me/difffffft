## 1.**Lambda表达式**

Lambda的本质是java中接口的一个实例（接口的实现类的具体对象）

```java
Thread thread= new Thread(() -> System.out.println("Hello World"));
thread.start();
```

- 方法引用

方法引用是一种**简化Lambda表达式**的语法结构，它允许您通过方法的名称来引用现有的方法作为Lambda表达式的实现。方法引用可以使代码更加简洁、易读，并且在某些情况下提供更好的可读性。

```java
// 静态方法引用
Function<String, Integer> parseInt = Integer::parseInt;

// 实例方法引用
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.forEach(System.out::println);

// 引用特定对象的实例方法
String prefix = "Prefix: ";
Function<String, String> addPrefix = prefix::concat;

// 构造方法引用
Supplier<List<String>> listSupplier = ArrayList::new;

// 引用数组的实例方法
Function<String, Integer> lengthGetter = String::length;
```

## 2.函数式接口

函数式接口是Java中的一个重要概念，它是一种只有一个抽象方法的接口。函数式接口在Java中引入了函数式编程的概念，使得可以**_将函数当作参数传递_**，或者将函数作为返回值返回。这为编写更具表现力和灵活性的代码提供了可能

- 自定义函数式接口

```java

// 自定义函数式接口
@FunctionalInterface
interface Calculator<T> {
    // 函数式方法
    T operation(T t1, T t2);
}

public class Main {


    public static void main(String[] args) {

        // 计算两个数的减法
        Calculator<Integer> sub = (a, b) -> a - b;
        Integer num = sub.operation(10,9);

        // 1
        System.out.println(num);

        // 计算两个字符的连接
        Calculator<String> connect = (a, b) -> a + b;
        String str = connect.operation("Hello","World!");

        // HelloWorld!
        System.out.println(str);
    }
}
```

- 内置函数式接口

```java
public class Main {

    public static void main(String[] args) {

        // 创建一个数组
        List<Integer> numbers = new ArrayList<>();
        for (int i = 1; i <= 10; i++) {
            numbers.add(i);
        }

        /**
         * Predicate是一个内部的函数式接口
         * 我们可以直接使用Lambda表达式来实现接口
         * isEven函数是用来判断数字是否是偶数
         */
        Predicate<Integer> isEven = x -> x % 2 == 0;


        List<Integer> evenNumbers = new ArrayList<>();
        for (Integer number : numbers) {
            // 调用实现类的方法
            if (isEven.test(number)) {
                evenNumbers.add(number);
            }
        }

        // [2,4,6,8,10]
        System.out.println(evenNumbers);
    }
}
```

## 3.Stream API

Stream API是Java中**_处理集合数据_**的一种强大工具，它引入了函数式编程的概念，允许您以声明性的方式对集合进行各种操作，如过滤、映射、归约等。Stream API可以让您更有效地处理数据，同时提供了并行处理数据的能力

- 创建流

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
Stream<String> stream = names.stream();
```

- 中间操作

```java
// 创建流
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
List<String> longNames = names.stream()
        // 并不会立即执行需要等待终端操作
        .filter(name -> name.length() > 4)
```

- 终端操作

```java
        // 常见的终端操作包括collect、forEach、reduce、count等。
        // 返回值不为Stream类型的,基本上都是终端操作
        .toList();
System.out.println(longNames);
```

- 并行流处理

Stream API允许您使用并行流来并行处理数据，以提高处理效率。可以通过调用`parallelStream()`方法来获得并行流（利用CPU多核，开线程）。

```java
// 创建流
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
List<String> longNames = names.parallelStream()
        // 并不会立即执行需要等待终端操作
        .filter(name -> name.length() > 4)
        // 常见的终端操作包括collect、forEach、reduce、count等。
        // 返回值不为Stream类型的,基本上都是终端操作
        .toList();
System.out.println(longNames);
```

- 收集器

Stream API中的`collect`方法允许您使用收集器来将流的元素收集到集合中，或者进行其他自定义的汇总操作。

```java
List<String> filteredNames = names.stream()
                                 .filter(name -> name.length() > 4)
                                 .collect(Collectors.toList());
```

## 4.新的日期和时间API

引入了java.time包，提供了更好的日期和时间处理方式，解决了旧的java.util.Date和java.util.Calendar的问题。

```java
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
String formattedDateTime = currentDateTime.format(formatter);

LocalDateTime parsedDateTime = LocalDateTime.parse("2023-08-22 12:00:00", formatter);
```

## 5.接口默认方法

接口默认方法（Default Methods）是Java 8引入的一项功能，它允许在接口中定义具有默认实现的方法。这样一来，当接口的方法签名发生变化时，已经实现该接口的类不会被迫修改其代码。这为Java中的接口演化和扩展提供了更大的灵活性

```java
interface Greeting {
    void sayHello();  // 抽象方法
    
    default void sayDefaultHello() {
        System.out.println("Hello from default method!");
    }
}

class EnglishGreeting implements Greeting {
    @Override
    public void sayHello() {
        System.out.println("Hello!");
    }
}

public class DefaultMethodExample {
    public static void main(String[] args) {
        Greeting englishGreeting = new EnglishGreeting();
        englishGreeting.sayHello();         // 输出: Hello!
        englishGreeting.sayDefaultHello();  // 输出: Hello from default method!
    }
}
```

## 6.私有接口方法

  
在Java 9中，引入了一项名为"私有接口方法"（Private Interface Methods）的特性，它允许在接口内部定义私有方法。私有接口方法只能在接口的默认方法（包括静态方法）内部使用，用于共享代码逻辑，提高代码的可维护性和重用性。

```java
public interface Calculator {
    default double add(double a, double b) {
        return a + b + additionalValue();
    }
    
    default double subtract(double a, double b) {
        return a - b + additionalValue();
    }
    
    private double additionalValue() {
        return 10.0;
    }
}

public class CalculatorApp implements Calculator {
    public static void main(String[] args) {
        CalculatorApp app = new CalculatorApp();
        System.out.println(app.add(5, 3));       // 输出: 18.0
        System.out.println(app.subtract(8, 2)); // 输出: 16.0
    }
}
```

## 7.局部变量类型推断

在Java 10中，引入了局部变量类型推断的功能，使用了`var`关键字。这允许您在声明局部变量时，根据变量初始化的表达式来自动推断变量的类型，从而使代码更加简洁和可读。

```java
var number = 10;  // 推断为 int 类型
var name = "Alice";  // 推断为 String 类型
var list = new ArrayList<String>();  // 推断为 ArrayList<String> 类型
```

## 8.新的Http客户端

在Java 11中，引入了一个全新的标准HTTP客户端API，用于发送和接收HTTP请求和响应。这个新的HTTP客户端API提供了更现代、灵活和强大的方式来处理HTTP通信，取代了过时的`HttpURLConnection`。

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpClientExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        
        HttpRequest request = HttpRequest.newBuilder()
                .uri(new URI("https://jsonplaceholder.typicode.com/posts/1"))
                .GET()
                .build();
        
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        
        System.out.println("Response Code: " + response.statusCode());
        System.out.println("Response Body: " + response.body());
    }
}
```

## 9.switch表达式的优化

  
在Java 12中，引入了一项新的特性：`switch`表达式。这是对传统`switch`语句的扩展，允许在表达式中使用`switch`，使得代码更加简洁和可读。`switch`表达式在Java 12中以一种试验性的形式引入，然后在Java 14中成为标准特性。

```java
public class SwitchExpressionExample {
    public static void main(String[] args) {
        int day = 3;
        String dayName = switch (day) {
            case 1, 2, 3, 4, 5 -> "Weekday";
            case 6, 7 -> "Weekend";
            default -> "Invalid day";
        };
        System.out.println("Day: " + dayName);  // 输出: Day: Weekday
    }
}
```

## 10.文本块

在Java 13中，引入了一项新的特性：文本块（Text Blocks）。文本块是一种更便捷的多行字符串语法，旨在简化多行字符串的创建，提高可读性，并减少转义字符的使用。

```java
String textBlock = """
    This is a
    text block
    example.
    """;
```

## 11.模式匹配

模式匹配是Java 16引入的一项重要特性，它旨在简化编写和处理复杂数据结构的代码，提高代码的可读性和可维护性。模式匹配允许您以更简洁的方式对不同的数据结构进行匹配和处理。

```java
public class PatternMatchingExample {
    public static void main(String[] args) {
        Object value = "Hello, Java";
        
        String result = switch (value) {
            case String s -> "It's a string: " + s;
            case Integer i -> "It's an integer: " + i;
            case Double d -> "It's a double: " + d;
            default -> "Unknown type";
        };
        
        System.out.println(result);  // 输出: It's a string: Hello, Java
    }
}
```

## 12.jpackage

`jpackage`是从Java 14开始引入的命令行工具，用于将Java应用程序打包成可执行的本地程序，以便在不同的操作系统上运行。它的目标是简化Java应用程序的部署和分发，使开发人员能够更轻松地将Java应用程序转换为本地可执行文件。

```java
jpackage --name MyApp --type msi --input target --main-jar myapp.jar --main-class com.example.Main --win-console

jpackage --type app-image --input [Jar包所在文件夹] --runtime-image [Jre文件夹] --name [应用名称] --main-jar [可执行Jar包] --icon [程序图标的路径] --app-version [版本号] --vendor [程序供应商的名称] --copyright [版权信息] --description [应用描述] --dest [输出目录]
```

启动windows功能.Net Framework 3.5.1

**_安装wix_**
