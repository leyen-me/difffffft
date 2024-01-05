import{_ as a,o as s,c as n,R as p}from"./chunks/framework.vVZmquDz.js";const m=JSON.parse('{"title":"Java8+的新特性","description":"","frontmatter":{"title":"Java8+的新特性","date":"2023-08-21","categories":["后端"]},"headers":[],"relativePath":"mds/back/2023-08-21-java8的新特性/index.md","filePath":"mds/back/2023-08-21-java8的新特性/index.md","lastUpdated":1704444471000}'),e={name:"mds/back/2023-08-21-java8的新特性/index.md"},l=p(`<h2 id="_1-lambda表达式" tabindex="-1">1.<strong>Lambda表达式</strong> <a class="header-anchor" href="#_1-lambda表达式" aria-label="Permalink to &quot;1.**Lambda表达式**&quot;">​</a></h2><p>Lambda的本质是java中接口的一个实例（接口的实现类的具体对象）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Thread thread= new Thread(() -&gt; System.out.println(&quot;Hello World&quot;));</span></span>
<span class="line"><span>thread.start();</span></span></code></pre></div><ul><li>方法引用</li></ul><p>方法引用是一种**<em>简化Lambda表达式</em>**的语法结构，它允许您通过方法的名称来引用现有的方法作为Lambda表达式的实现。方法引用可以使代码更加简洁、易读，并且在某些情况下提供更好的可读性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 静态方法引用</span></span>
<span class="line"><span>Function&lt;String, Integer&gt; parseInt = Integer::parseInt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 实例方法引用</span></span>
<span class="line"><span>List&lt;String&gt; names = Arrays.asList(&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;);</span></span>
<span class="line"><span>names.forEach(System.out::println);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 引用特定对象的实例方法</span></span>
<span class="line"><span>String prefix = &quot;Prefix: &quot;;</span></span>
<span class="line"><span>Function&lt;String, String&gt; addPrefix = prefix::concat;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 构造方法引用</span></span>
<span class="line"><span>Supplier&lt;List&lt;String&gt;&gt; listSupplier = ArrayList::new;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 引用数组的实例方法</span></span>
<span class="line"><span>Function&lt;String, Integer&gt; lengthGetter = String::length;</span></span></code></pre></div><h2 id="_2-函数式接口" tabindex="-1">2.函数式接口 <a class="header-anchor" href="#_2-函数式接口" aria-label="Permalink to &quot;2.函数式接口&quot;">​</a></h2><p>函数式接口是Java中的一个重要概念，它是一种只有一个抽象方法的接口。函数式接口在Java中引入了函数式编程的概念，使得可以**<em>将函数当作参数传递</em>**，或者将函数作为返回值返回。这为编写更具表现力和灵活性的代码提供了可能</p><ul><li>自定义函数式接口</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>// 自定义函数式接口</span></span>
<span class="line"><span>@FunctionalInterface</span></span>
<span class="line"><span>interface Calculator&lt;T&gt; {</span></span>
<span class="line"><span>    // 函数式方法</span></span>
<span class="line"><span>    T operation(T t1, T t2);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 计算两个数的减法</span></span>
<span class="line"><span>        Calculator&lt;Integer&gt; sub = (a, b) -&gt; a - b;</span></span>
<span class="line"><span>        Integer num = sub.operation(10,9);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 1</span></span>
<span class="line"><span>        System.out.println(num);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 计算两个字符的连接</span></span>
<span class="line"><span>        Calculator&lt;String&gt; connect = (a, b) -&gt; a + b;</span></span>
<span class="line"><span>        String str = connect.operation(&quot;Hello&quot;,&quot;World!&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // HelloWorld!</span></span>
<span class="line"><span>        System.out.println(str);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>内置函数式接口</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class Main {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建一个数组</span></span>
<span class="line"><span>        List&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        for (int i = 1; i &lt;= 10; i++) {</span></span>
<span class="line"><span>            numbers.add(i);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * Predicate是一个内部的函数式接口</span></span>
<span class="line"><span>         * 我们可以直接使用Lambda表达式来实现接口</span></span>
<span class="line"><span>         * isEven函数是用来判断数字是否是偶数</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        Predicate&lt;Integer&gt; isEven = x -&gt; x % 2 == 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;Integer&gt; evenNumbers = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        for (Integer number : numbers) {</span></span>
<span class="line"><span>            // 调用实现类的方法</span></span>
<span class="line"><span>            if (isEven.test(number)) {</span></span>
<span class="line"><span>                evenNumbers.add(number);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // [2,4,6,8,10]</span></span>
<span class="line"><span>        System.out.println(evenNumbers);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_3-stream-api" tabindex="-1">3.Stream API <a class="header-anchor" href="#_3-stream-api" aria-label="Permalink to &quot;3.Stream API&quot;">​</a></h2><p>Stream API是Java中**<em>处理集合数据</em>**的一种强大工具，它引入了函数式编程的概念，允许您以声明性的方式对集合进行各种操作，如过滤、映射、归约等。Stream API可以让您更有效地处理数据，同时提供了并行处理数据的能力</p><ul><li>创建流</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>List&lt;String&gt; names = Arrays.asList(&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;);</span></span>
<span class="line"><span>Stream&lt;String&gt; stream = names.stream();</span></span></code></pre></div><ul><li>中间操作</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 创建流</span></span>
<span class="line"><span>List&lt;String&gt; names = Arrays.asList(&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;);</span></span>
<span class="line"><span>List&lt;String&gt; longNames = names.stream()</span></span>
<span class="line"><span>        // 并不会立即执行需要等待终端操作</span></span>
<span class="line"><span>        .filter(name -&gt; name.length() &gt; 4)</span></span></code></pre></div><ul><li>终端操作</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>        // 常见的终端操作包括collect、forEach、reduce、count等。</span></span>
<span class="line"><span>        // 返回值不为Stream类型的,基本上都是终端操作</span></span>
<span class="line"><span>        .toList();</span></span>
<span class="line"><span>System.out.println(longNames);</span></span></code></pre></div><ul><li>并行流处理</li></ul><p>Stream API允许您使用并行流来并行处理数据，以提高处理效率。可以通过调用<code>parallelStream()</code>方法来获得并行流（利用CPU多核，开线程）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 创建流</span></span>
<span class="line"><span>List&lt;String&gt; names = Arrays.asList(&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;);</span></span>
<span class="line"><span>List&lt;String&gt; longNames = names.parallelStream()</span></span>
<span class="line"><span>        // 并不会立即执行需要等待终端操作</span></span>
<span class="line"><span>        .filter(name -&gt; name.length() &gt; 4)</span></span>
<span class="line"><span>        // 常见的终端操作包括collect、forEach、reduce、count等。</span></span>
<span class="line"><span>        // 返回值不为Stream类型的,基本上都是终端操作</span></span>
<span class="line"><span>        .toList();</span></span>
<span class="line"><span>System.out.println(longNames);</span></span></code></pre></div><ul><li>收集器</li></ul><p>Stream API中的<code>collect</code>方法允许您使用收集器来将流的元素收集到集合中，或者进行其他自定义的汇总操作。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>List&lt;String&gt; filteredNames = names.stream()</span></span>
<span class="line"><span>                                 .filter(name -&gt; name.length() &gt; 4)</span></span>
<span class="line"><span>                                 .collect(Collectors.toList());</span></span></code></pre></div><h2 id="_4-新的日期和时间api" tabindex="-1">4.新的日期和时间API <a class="header-anchor" href="#_4-新的日期和时间api" aria-label="Permalink to &quot;4.新的日期和时间API&quot;">​</a></h2><p>引入了java.time包，提供了更好的日期和时间处理方式，解决了旧的java.util.Date和java.util.Calendar的问题。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>DateTimeFormatter formatter = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);</span></span>
<span class="line"><span>String formattedDateTime = currentDateTime.format(formatter);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LocalDateTime parsedDateTime = LocalDateTime.parse(&quot;2023-08-22 12:00:00&quot;, formatter);</span></span></code></pre></div><h2 id="_5-接口默认方法" tabindex="-1">5.接口默认方法 <a class="header-anchor" href="#_5-接口默认方法" aria-label="Permalink to &quot;5.接口默认方法&quot;">​</a></h2><p>接口默认方法（Default Methods）是Java 8引入的一项功能，它允许在接口中定义具有默认实现的方法。这样一来，当接口的方法签名发生变化时，已经实现该接口的类不会被迫修改其代码。这为Java中的接口演化和扩展提供了更大的灵活性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Greeting {</span></span>
<span class="line"><span>    void sayHello();  // 抽象方法</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    default void sayDefaultHello() {</span></span>
<span class="line"><span>        System.out.println(&quot;Hello from default method!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class EnglishGreeting implements Greeting {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void sayHello() {</span></span>
<span class="line"><span>        System.out.println(&quot;Hello!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class DefaultMethodExample {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Greeting englishGreeting = new EnglishGreeting();</span></span>
<span class="line"><span>        englishGreeting.sayHello();         // 输出: Hello!</span></span>
<span class="line"><span>        englishGreeting.sayDefaultHello();  // 输出: Hello from default method!</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_6-私有接口方法" tabindex="-1">6.私有接口方法 <a class="header-anchor" href="#_6-私有接口方法" aria-label="Permalink to &quot;6.私有接口方法&quot;">​</a></h2><p>在Java 9中，引入了一项名为&quot;私有接口方法&quot;（Private Interface Methods）的特性，它允许在接口内部定义私有方法。私有接口方法只能在接口的默认方法（包括静态方法）内部使用，用于共享代码逻辑，提高代码的可维护性和重用性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public interface Calculator {</span></span>
<span class="line"><span>    default double add(double a, double b) {</span></span>
<span class="line"><span>        return a + b + additionalValue();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    default double subtract(double a, double b) {</span></span>
<span class="line"><span>        return a - b + additionalValue();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    private double additionalValue() {</span></span>
<span class="line"><span>        return 10.0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class CalculatorApp implements Calculator {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        CalculatorApp app = new CalculatorApp();</span></span>
<span class="line"><span>        System.out.println(app.add(5, 3));       // 输出: 18.0</span></span>
<span class="line"><span>        System.out.println(app.subtract(8, 2)); // 输出: 16.0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_7-局部变量类型推断" tabindex="-1">7.局部变量类型推断 <a class="header-anchor" href="#_7-局部变量类型推断" aria-label="Permalink to &quot;7.局部变量类型推断&quot;">​</a></h2><p>在Java 10中，引入了局部变量类型推断的功能，使用了<code>var</code>关键字。这允许您在声明局部变量时，根据变量初始化的表达式来自动推断变量的类型，从而使代码更加简洁和可读。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var number = 10;  // 推断为 int 类型</span></span>
<span class="line"><span>var name = &quot;Alice&quot;;  // 推断为 String 类型</span></span>
<span class="line"><span>var list = new ArrayList&lt;String&gt;();  // 推断为 ArrayList&lt;String&gt; 类型</span></span></code></pre></div><h2 id="_8-新的http客户端" tabindex="-1">8.新的Http客户端 <a class="header-anchor" href="#_8-新的http客户端" aria-label="Permalink to &quot;8.新的Http客户端&quot;">​</a></h2><p>在Java 11中，引入了一个全新的标准HTTP客户端API，用于发送和接收HTTP请求和响应。这个新的HTTP客户端API提供了更现代、灵活和强大的方式来处理HTTP通信，取代了过时的<code>HttpURLConnection</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import java.net.URI;</span></span>
<span class="line"><span>import java.net.http.HttpClient;</span></span>
<span class="line"><span>import java.net.http.HttpRequest;</span></span>
<span class="line"><span>import java.net.http.HttpResponse;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class HttpClientExample {</span></span>
<span class="line"><span>    public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span>        HttpClient client = HttpClient.newHttpClient();</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        HttpRequest request = HttpRequest.newBuilder()</span></span>
<span class="line"><span>                .uri(new URI(&quot;https://jsonplaceholder.typicode.com/posts/1&quot;))</span></span>
<span class="line"><span>                .GET()</span></span>
<span class="line"><span>                .build();</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        System.out.println(&quot;Response Code: &quot; + response.statusCode());</span></span>
<span class="line"><span>        System.out.println(&quot;Response Body: &quot; + response.body());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_9-switch表达式的优化" tabindex="-1">9.switch表达式的优化 <a class="header-anchor" href="#_9-switch表达式的优化" aria-label="Permalink to &quot;9.switch表达式的优化&quot;">​</a></h2><p>在Java 12中，引入了一项新的特性：<code>switch</code>表达式。这是对传统<code>switch</code>语句的扩展，允许在表达式中使用<code>switch</code>，使得代码更加简洁和可读。<code>switch</code>表达式在Java 12中以一种试验性的形式引入，然后在Java 14中成为标准特性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class SwitchExpressionExample {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        int day = 3;</span></span>
<span class="line"><span>        String dayName = switch (day) {</span></span>
<span class="line"><span>            case 1, 2, 3, 4, 5 -&gt; &quot;Weekday&quot;;</span></span>
<span class="line"><span>            case 6, 7 -&gt; &quot;Weekend&quot;;</span></span>
<span class="line"><span>            default -&gt; &quot;Invalid day&quot;;</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        System.out.println(&quot;Day: &quot; + dayName);  // 输出: Day: Weekday</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_10-文本块" tabindex="-1">10.文本块 <a class="header-anchor" href="#_10-文本块" aria-label="Permalink to &quot;10.文本块&quot;">​</a></h2><p>在Java 13中，引入了一项新的特性：文本块（Text Blocks）。文本块是一种更便捷的多行字符串语法，旨在简化多行字符串的创建，提高可读性，并减少转义字符的使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>String textBlock = &quot;&quot;&quot;</span></span>
<span class="line"><span>    This is a</span></span>
<span class="line"><span>    text block</span></span>
<span class="line"><span>    example.</span></span>
<span class="line"><span>    &quot;&quot;&quot;;</span></span></code></pre></div><h2 id="_11-模式匹配" tabindex="-1">11.模式匹配 <a class="header-anchor" href="#_11-模式匹配" aria-label="Permalink to &quot;11.模式匹配&quot;">​</a></h2><p>模式匹配是Java 16引入的一项重要特性，它旨在简化编写和处理复杂数据结构的代码，提高代码的可读性和可维护性。模式匹配允许您以更简洁的方式对不同的数据结构进行匹配和处理。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class PatternMatchingExample {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Object value = &quot;Hello, Java&quot;;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        String result = switch (value) {</span></span>
<span class="line"><span>            case String s -&gt; &quot;It&#39;s a string: &quot; + s;</span></span>
<span class="line"><span>            case Integer i -&gt; &quot;It&#39;s an integer: &quot; + i;</span></span>
<span class="line"><span>            case Double d -&gt; &quot;It&#39;s a double: &quot; + d;</span></span>
<span class="line"><span>            default -&gt; &quot;Unknown type&quot;;</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        System.out.println(result);  // 输出: It&#39;s a string: Hello, Java</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_12-jpackage" tabindex="-1">12.jpackage <a class="header-anchor" href="#_12-jpackage" aria-label="Permalink to &quot;12.jpackage&quot;">​</a></h2><p><code> jpackage</code>是从Java 14开始引入的命令行工具，用于将Java应用程序打包成可执行的本地程序，以便在不同的操作系统上运行。它的目标是简化Java应用程序的部署和分发，使开发人员能够更轻松地将Java应用程序转换为本地可执行文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>jpackage --name MyApp --type msi --input target --main-jar myapp.jar --main-class com.example.Main --win-console</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jpackage --type app-image --input [Jar包所在文件夹] --runtime-image [Jre文件夹] --name [应用名称] --main-jar [可执行Jar包] --icon [程序图标的路径] --app-version [版本号] --vendor [程序供应商的名称] --copyright [版权信息] --description [应用描述] --dest [输出目录]</span></span></code></pre></div><p>启动windows功能.Net Framework 3.5.1</p><p><strong><em>安装wix</em></strong></p>`,55),t=[l];function i(c,o,r,d,u,g){return s(),n("div",null,t)}const b=a(e,[["render",i]]);export{m as __pageData,b as default};
