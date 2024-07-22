---
lang: zh-CN
title: java基础
description: java基础
head:
  - [meta, { name: referrer, content: no-referrer }]
---
参考书本《On Java 中文版 基础卷》
## 数据类型
### 基本数据类型
计算机使用0或1的位表示信息，又称为比特bit。8个bit组成一组，称为字节byte。
java有8种基本数据类型：

- byte 1字节
- short 2字节
- int 4字节
- long 8字节
- float 4字节
- double 8字节
- char 2字节
- boolean 4字节，或1字节（boolean数组中）
### 引用类型：对象
将对象赋给一个变量，该变量的值是对象的地址，称作该变量指向对象。
## 基本程序设计
### 变量与常量
### 运算符
### 控制流程
### 包装类
8种基本数据类型都有对应的包装类，基本类型与其对应的包装类之间的赋值会进行自动装箱与拆箱，很方便。
Integar , Long , Float , Double, Short, Byte, Character, Boolean 
#### 缓存池
new Integer(123) 与 Integer.valueOf(123) 的区别在于:

- new Integer(123) 每次都会新建一个对象
- Integer.valueOf(123) 会使用缓存池中的对象，多次调用会取得同一个对象的引用。

基本类型对应的缓冲池如下:

- boolean values true and false
- all byte values
- short values between -128 and 127
- int values between -128 and 127
- char in the range \u0000 to \u007F

在使用这些基本类型对应的包装类型时，就可以直接使用缓冲池中的对象。
编译器会**在缓冲池范围内的基本类型**自动装箱过程调用 valueOf() 方法，因此多个 Integer 实例使用自动装箱来创建并且值相同，那么就会引用相同的对象。
### String 字符串
String对象是不可变的，是只读的。每一个看起来会修改String 值的方法，实际上都是创建了一个全新的String对象。
String内部使用char数组存储数据，该数组被声明为final，意味着value数组初始化后就不能再引用其他数组，并且String内部没有改变value数组的方法，因此可以保证String不可变。

字符串拼接尽量使用StringBuilder，效率高。
### 大数
如果基本的整数和浮点数精度不能满足要求，可以使用BigIntegar和BigDecimal 。这两个类可以处理包含任意长度数字序列的数值。
工作中，价格一般使用BigDecimal来表示。
大数不能使用算数运算符+-*/进行计算，要使用类提供的方法来进行计算。
### 数组
数组是一种数据结构，用来存储同一类型值的集合。通过索引index(整型下标)可以访问数组中的每一个值。
数组一旦创建，就不能改变它的长度。如果程序需要经常改变数组的大小，应该使用ArrayList。

## 类与对象
### 类 Class
类是构造对象的模板。       联想对比：类就是制作小甜饼的模具，对象就是小甜饼。
由类构造对象的过程称为创建类的实例。
类有属性和方法。属性就是数据，也叫字段。方法就是操作数据的过程，并返回一个数据。
### 对象与对象变量
对象有状态、行为、标识。
要使用对象，首先必须构造对象，并制定其初始状态，然后对对象应用方法。

构造器（构造函数）是一种特殊的方法，用来构造并初始化对象。如果自己没写构造函数，java会帮忙生成一个空的构造函数。
构造函数与类同名。
可以有多个构造函数，他们的参数不同。使用new方法时，java会根据参数自动调用对应的构造函数。这种特性称为重载。
构造器没有返回值。


可以将一个对象赋给一个变量，这个对象变量存放了对象的地址。
```java
Address myAddress = new Address();
Address otherAddress = myAddress;
```

![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1705929474375-834722e0-afa5-466a-83f5-55a468bc91a8.png#averageHue=%23fafaf9&clientId=u31feb24f-7b28-4&from=paste&height=331&id=u3cb9beaa&originHeight=497&originWidth=747&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=31534&status=done&style=shadow&taskId=u0bc404e5-e11a-40f3-b259-a4ef27ad23a&title=&width=498)


### 面向对象的三大特性
#### 封装
将数据和方法组合在一起，构成一个独立实体，对使用者隐藏具体细节。
一般将属性设置为private， 提供public的getter和setter方法。
#### 继承 extends
两个类之间的关系是IS-A，使用继承extends。
例如Cat is an animal, Cat类可以继承Animal类，Cat是子类，Animal类是父类或超类。
子类自动继承父类的字段和方法，且子类还可以定义自己独有的字段和方法。
子类可以使用相同的方法签名覆盖父类中的方法，一般加上‘@Override’注解。
![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1705933421727-8bf991b0-b0a7-4677-9e7f-6d97f0d4198d.png#averageHue=%23faf9f9&clientId=u31feb24f-7b28-4&from=paste&height=477&id=u4b622d52&originHeight=715&originWidth=685&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=34473&status=done&style=shadow&taskId=uf02cf159-1325-403f-9489-46d9d28c1c6&title=&width=456.6666666666667)
子类使用super.method()可以调用父类中的方法。
##### java创建子类对象会调用父类的构造方法
是的，Java中创建子类对象时会调用父类的构造方法。
如果子类构造方法没有显式地调用父类构造方法，则Java编译器会自动插入一个默认的无参构造方法或者使用super关键字调用父类的无参构造方法。如果父类没有无参构造方法，则必须在子类构造方法中显式调用父类的有参构造方法，否则编译器会报错。
子类在自己的构造器中使用super()调用父类的构造器。并且对基类构造器的调用必须是子类构造器的第一个操作（否则编译器会通过报错来提示）。

java只允许子类继承一个父类，但支持实现多个接口。
#### 多态
对象变量是多态的，是指一个对象变量既可以引用自己类型的对象，也可以引用自己任何一个子类的对象。
可以将子类的对象赋给父类对象变量。
父类对象变量调用方法运行时，java能自动选择实际引用对象所在类的方法来执行。
##### 向上转型
##### 动态绑定
### 所有类的始祖Object类
Object是所有类的父类，内置了一些方法.
equal
getClass
hashCode
toString

### 4种访问级别

- public 对外部完全可见
- private 仅对本类可见
- protected 对本包和所有子类可见
- 无 默认对本包可见

包package是组织Java类的，可以类比文件夹的目录。包名+类名是类的全限定类名。

public方法：任何类的任何方法都可以调用这些方法。
private方法：只有自己类的方法可以调用该方法，其他类不能调用。
private字段：只有类自身的方法能够使用这些字段。
一个方法可以访问所属类的所有对象的私有数据。
### fianl修饰符

- fianl字段：常量字段，初始化之后不能更改。对fianl字段的赋值只能发生在两个地方：要么在字段定义处使用表达式进行赋值，要么在每个构造器中进行赋值。
- final方法：被修饰的方法无法被所在类的子类重写（覆写）
- final类：被修饰的类不能被继承，并且final类中的所有成员方法都会被隐式地指定为final方法，但成员变量则不会变。
### static修饰符
static字段：称为类字段，每一个由该类构造的对象共享静态字段。
static方法：静态方法，是不用构造对象就可以使用的方法，是不在对象上执行的方法。
静态方法不需要访问对象状态，只需要访问类的静态字段。
静态字段和静态方法都是由类名字直接访问。
### abstract
abstract方法：抽象方法，只有签名的方法，没有实现，交给子类实现。
abstract类：抽象类，含有一个或多个抽象方法的类，抽象类不能实例化。
### 方法参数
Java总是采用按值传递的参数传递方式，意味着方法得到是所有参数值的一个副本。
方法不能修改基本数据类型变量的值，因为方法参数的变量拿到的是值的副本。
方法可以改变引用类型（对象参数）的状态，因为对象变量的值是对象的地址。
#### 变参
以下参数values是可变参数，可以接受任意多个double参数。
```java
public static double max(double ... values){
    //
}
```
### 方法重载
如果两个方法的方法名相同，但是参数类型不同，则它们可以共存于同一个类中，这是方法重载（Overloading）的概念。
在几个重载的同名方法中选择是基于传入参数的编译时静态类型，而非运行时的实际类型。
```java
// 定义一个父类
class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

// 定义一个子类继承自Animal
class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks");
    }
}

// 主类中定义了两个重载方法，分别接受Animal和Dog类型的参数
public class MainClass {

    // 方法一，参数类型为父类Animal
    public void feed(Animal animal) {
        System.out.println("Feeding an animal");
        animal.makeSound();
    }

    // 方法二，参数类型为子类Dog
    public void feed(Dog dog) {
        System.out.println("Feeding a dog specifically");
        dog.makeSound();
    }

    public static void main(String[] args) {
        MainClass mc = new MainClass();

        Animal genericAnimal = new Animal();
        Dog specificDog = new Dog();

        // 调用feed方法，由于传入的参数类型不同，Java会选择对应的方法
        mc.feed(genericAnimal);  // 将调用第一个feed方法
        mc.feed(specificDog);   // 将调用第二个feed方法，尽管Dog也是Animal的实例，但由于参数类型更具体，所以匹配到第二个feed(Dog)
    
        // 显式地向上转型为Animal类型
        Animal asAnimal = specificDog;

        // 调用feed方法，此时传入的是Animal类型
        mc.feed(asAnimal);  // 此时调用的是feed(Animal animal)方法
    
    }
}
```

### java类初始化顺序
当执行java Beetle(某个类，这里只是举例) 命令后，首先会尝试访问静态方法Beetle.main() ，所以加载器会去Beetle.class文件中找到Beetle类的编译代码。在加载它的代码时，加载器注意到有一个基类，然后它就会去加载基类。无论是否创建该基类的对象，都会发生这种情况。
如果基类又有自己的基类，那么第二个基类也将被加载，以此类推。
接下来会执行根基类中的静态初始化，然后是下一个子类，以此类推。这很重要，因为子类的静态初始化可能依赖于基类成员的正确初始化。
现在所有的类都已加载，可以创建对象了。首先，该对象中的所有基本类型都被设为默认值，对象引用被设置为null（这通过将对象中的内存设置为二进制0来实现）。然后调用基类构造器，这里的调用是自动的，但也可以通过super关键字来指定基类构造器的调用。基类构造器完成后，子类的实例变量按文本顺序初始化，最后执行子类构造器的其余部分。
![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1706092876749-0928975c-42db-4c33-af9b-942202cae832.png#averageHue=%23f7f7f7&clientId=uad3d04e9-2597-4&from=paste&height=728&id=u82d1a282&originHeight=1092&originWidth=542&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=37839&status=done&style=shadow&taskId=u9165bf77-5a09-4e75-add1-be3861cdae3&title=&width=361.3333333333333)       ![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1706093125334-0fa655bb-ff8c-480a-9058-600f45ebec07.png#averageHue=%23f8f8f8&clientId=uad3d04e9-2597-4&from=paste&height=764&id=u7f989ff7&originHeight=1146&originWidth=518&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=58927&status=done&style=shadow&taskId=u7086b154-63bc-49a9-b63f-861b0446cbc&title=&width=345.3333333333333)

## 接口interface
接口用来描述类应该做什么，而不指定他们具体如何做。

接口可以有常量和抽象方法，不允许存在实例字段（接口中只有public static final字段，任何接口中的字段都自动是public static final）， 接口中的方法总是自动设置为public abstract。

如果一个抽象类中全是抽象方法，且没有属性，就可以设计成接口。接口的出现是解决java中子类只能继承一个父类的限制而设计的。

一个类可以实现implements一个或多个接口。
同一个接口可以有多个实现。

接口也可以使用extends拓展接口层次，一个接口可以同时继承多个父接口，用逗号隔开。（区别：一个类只能继承一个父类）
### 接口中的字段
接口中的任何字段都自动是public static final的，因此接口是创建一组常量值的便捷工具。当然，现在有了更强大、更灵活的enum关键字。
接口中的字段不能是“空白的final”，它们可以用常量和非常量表达式初始化。

```java
import java.util.*;

public interface RandVals {
  Random RAND = new Random(47);//47是种子
  int RANDOM_INT = RAND.nextInt(10);
  long RANDOM_LONG = RAND.nextLong() * 10;
  float RANDOM_FLOAT = RAND.nextLong() * 10;//存疑，写错了？
  double RANDOM_DOUBLE = RAND.nextDouble() * 10;
}
```
### 接口中的默认实现和静态方法
Java8可以为接口方法提供一个默认实现，必须用default修饰这样一个方法。

java8允许接口包含静态方法。这允许我们在接口里包含逻辑上属于它的实用程序，如下面的runOps()这种操作该接口的方法，或show()这样的通用工具。
```java
package com.example;
public interface Operation {
  void execute();
  static void runOps(Operation... ops) {
    for(Operation op : ops)
      op.execute();
  }
  static void show(String msg) {
    System.out.println(msg);
  }
}
```
```java
package com.example;
class Heat implements Operation {
    @Override
    public void execute() {
        Operation.show("Heat");
    }
}

public class MetalWork {
    public static void main(String[] args) {
        Operation twist = new Operation() {
            public void execute() {
                Operation.show("Twist");
            }
        };
        Operation.runOps(
                new Heat(),                     // [1]常规类
                new Operation() {               // [2]匿名类
                    public void execute() {
                        Operation.show("Hammer");
                    }
                },
                twist::execute,                 // [3]方法引用
                () -> Operation.show("Anneal")  // [4]lambda表达式
        );
    }
}
/* Output:
Heat
Hammer
Twist
Anneal
*/
```
如果一个类从父类和接口中继承了相同的方法，会以父类优先，忽略接口中的方法。
如果一个类从多个接口中继承了相同的方法（有default实现），必须覆盖以解决冲突。
### 抽象类与接口的对比
| 特性 |                             接口 |                                 抽象类 |
| --- | --- | --- |
| 组合 | 一个类可以实现多个接口 | 一个类只能继承一个抽象类 |
| 状态 | 不能包含字段（静态字段除外，但它们不支持对象状态） | 可以包含字段，非抽象方法可以引用这些字段 |
| 默认方法与抽象方法 | 默认方法不需要在子类型里实现，它只能引用接口里的方法（字段不行） | 抽象方法必须在子类型里实现 |
| 构造器 | 不能有构造器 | 可以有构造器 |
| 访问权限控制 | 隐式的public | 可以为protected或包访问权限 |


### 嵌套接口
接口可以嵌套在类和其他接口中。
嵌套在类内部的接口可以是private或public的，private接口不能在它们的定义类之外实现。
嵌套在接口内的接口只能是public的。
当实现一个接口时，并不需要实现嵌套在其中的接口。
## 内部类
定义在另一个类中的类称为内部类。
### 普通内部类
内部类可以访问外围对象的所有方法和字段，就好像拥有它们一样。
内部类拥有一个指向外围类对象的引用，使用外部类的名字加上 .this，就返回外部类对象的引用。
必须使用外部类的实例来创建内部类的实例。除非已经有了一个外部类的对象，否则创建内部类对象是不可能的。这是因为内部类的对象会暗中连接到用于创建它的外部类对象。
```java
public class DotNew {
  public class Inner {}//内部类
    
  public static void main(String[] args) {
    DotNew dn = new DotNew();
    DotNew.Inner dni = dn.new Inner();
  }
}
```

内部类也可以设置为private或protected，普通类只能是public或默认包访问权限。
内部类可以在方法中和作用域中。
### 匿名内部类
匿名内部类用于实现一个接口，或拓展一个类，通过new表达式返回的引用会被自动向上转型为接口或父类引用。
### 嵌套类 static
用static修饰的内部类称为嵌套类。
不需要一个外部类对象来创建嵌套类对象；
无法从嵌套类对象内部访问非static的外部类对象。
### 为什么需要内部类
每个内部类都可以独立地继承自一个实现。因此，内部类不受 外部类是否继承了某个实现的限制。
内部类实际上完善了多重继承问题的解决方案。接口解决了一部分问题，但内部类实际上支持了“多重实现继承”。也就是说，内部类实际上支持我们继承多个非接口类型。
有了内部类，我们还可以获得如下额外功能：

- 内部类可以有多个实例，每个实例都有自己的状态信息，独立于外围类对象的信息。
- 一个外围类中可以有多个内部类，它们可以以不同方式实现同一个接口，或者同一个类。
- 内部类对象的创建时机不与外围类对象的创建捆绑到一起。
#### 闭包与回调
闭包（closure）是一个可调用的对象，它保留了来自它被创建时所在的作用域的信息。内部类就是面向对象的闭包，因为它不仅包含外围类对象（“它被创建时所在的作用域”）的每一条信息，而且它自动持有着对整个外围类对象的引用。
回调：我们可以给其他某个对象提供一段信息，以支持它在之后的某个时间点调回原始的对象中。使用内部类可以支持回调。
### 继承内部类
```java
class Egg2 {
  protected class Yolk {
    public Yolk() {
      System.out.println("Egg2.Yolk()");
    }
    public void f() {
      System.out.println("Egg2.Yolk.f()");
    }
  }
  private Yolk y = new Yolk();
  Egg2() { System.out.println("New Egg2()"); }
  public void insertYolk(Yolk yy) { y = yy; }
  public void g() { y.f(); }
}

public class BigEgg2 extends Egg2 {
  public class Yolk extends Egg2.Yolk {
    public Yolk() {
      System.out.println("BigEgg2.Yolk()");
    }
    @Override public void f() {
      System.out.println("BigEgg2.Yolk.f()");
    }
  }
  public BigEgg2() { insertYolk(new Yolk()); }
  public static void main(String[] args) {
    Egg2 e2 = new BigEgg2();
    e2.g();
  }
}
/* Output:
Egg2.Yolk()
New Egg2()
Egg2.Yolk()
BigEgg2.Yolk()
BigEgg2.Yolk.f()
*/

```

## 集合
Java集合类库是用来“持有对象”的（更确切地说，是持有指向对象的引用），从设计上分为两个不同的概念，表示为库的两个基本接口。

- Collection ：一个由单独元素组成的序列，而且这些元素要符合一条或多条规则。List必须按照元素插入顺序来保存它们；Set中不能存在重复元素；Queue要按照排队规则来输出元素（通常与元素被插入的顺序相同）。
- Map ：一组键值对象对，使用键来查找值。Map使用另一个对象来查找某个对象。也被称作关联数组或字典。

集合不会保存基本类型的数据，但是基本类型的包装器类型可以保存在集合中，而且自动装箱机制可以处理基本类型与其包装器类型之间的来回转换。

Collections.addAll（）方法接收一个Collection对象、一个数组，或一个用逗号分隔的列表，将其中所有的元素都添加到这个Collection中。
### Collection
#### List
List承诺以特定的顺序维护元素。List接口在Collection的基础上增加了一些方法，支持在List中间插入和移除元素。
有两种类型的List。

- 基本的ArrayList，擅长随机访问元素，但是在List的中间插入或删除元素比较慢。
- LinkedList，提供了理想的顺序访问性能，在List的中间插入和删除元素的成本都比较低。LinkedList随机访问性能相对较差，但是与ArrayList相比提供了更对功能。

```java
import reflection.pets.*;
import java.util.*;

public class ListFeatures {
    public static void main(String[] args) {
        Random rand = new Random(47);
        List<Pet> pets = new PetCreator().list(7);
        System.out.println("1: " + pets);
        Hamster h = new Hamster();
        pets.add(h); // Automatically resizes
        System.out.println("2: " + pets);
        System.out.println("3: " + pets.contains(h));
        pets.remove(h); // Remove by object
        Pet p = pets.get(2);
        System.out.println(
            "4: " +  p + " " + pets.indexOf(p));
        Pet cymric = new Cymric();
        System.out.println("5: " + pets.indexOf(cymric));
        System.out.println("6: " + pets.remove(cymric));
        // Must be the exact object:
        System.out.println("7: " + pets.remove(p));
        System.out.println("8: " + pets);
        pets.add(3, new Mouse()); // Insert at an index
        System.out.println("9: " + pets);
        List<Pet> sub = pets.subList(1, 4);
        System.out.println("subList: " + sub);
        System.out.println("10: " + pets.containsAll(sub));
        Collections.sort(sub); // In-place sort
        System.out.println("sorted subList: " + sub);
        // Order is not important in containsAll():
        System.out.println("11: " + pets.containsAll(sub));
        Collections.shuffle(sub, rand); // Mix it up
        System.out.println("shuffled subList: " + sub);
        System.out.println("12: " + pets.containsAll(sub));

        List<Pet> copy = new ArrayList<>(pets);
        sub = Arrays.asList(pets.get(1), pets.get(4));
        System.out.println("sub: " + sub);
        copy.retainAll(sub);
        System.out.println("13: " + copy);
        copy = new ArrayList<>(pets); // Get a fresh copy
        copy.remove(2); // Remove by index
        System.out.println("14: " + copy);
        copy.removeAll(sub); // Only removes exact objects
        System.out.println("15: " + copy);
        copy.set(1, new Mouse()); // Replace an element
        System.out.println("16: " + copy);
        copy.addAll(2, sub); // Insert a list in the middle
        System.out.println("17: " + copy);
        System.out.println("18: " + pets.isEmpty());
        pets.clear(); // Remove all elements
        System.out.println("19: " + pets);
        System.out.println("20: " + pets.isEmpty());
        pets.addAll(new PetCreator().list(4));
        System.out.println("21: " + pets);
        Object[] o = pets.toArray();
        System.out.println("22: " + o[3]);
        Pet[] pa = pets.toArray(new Pet[0]);
        System.out.println("23: " + pa[3].id());
    }
}
/* Output:
1: [Rat, Manx, Cymric, Mutt, Pug, Cymric, Pug]
2: [Rat, Manx, Cymric, Mutt, Pug, Cymric, Pug, Hamster]
3: true
4: Cymric 2
5: -1
6: false
7: true
8: [Rat, Manx, Mutt, Pug, Cymric, Pug]
9: [Rat, Manx, Mutt, Mouse, Pug, Cymric, Pug]
subList: [Manx, Mutt, Mouse]
10: true
sorted subList: [Manx, Mouse, Mutt]
11: true
shuffled subList: [Mouse, Manx, Mutt]
12: true
sub: [Mouse, Pug]
13: [Mouse, Pug]
14: [Rat, Mouse, Mutt, Pug, Cymric, Pug]
15: [Rat, Mutt, Cymric, Pug]
16: [Rat, Mouse, Cymric, Pug]
17: [Rat, Mouse, Mouse, Pug, Cymric, Pug]
18: false
19: []
20: true
21: [Rat, Manx, Cymric, Mutt]
22: Mutt
23: 14
*/

```
与数组不同的是，List可以在创建之后添加或移除元素，而且可以自己调整大小。
contains()方法来确定某个对象是否在该列表中。
remove（）方法移除一个对象。
indexOf（）方法获得该对象在List中的索引编号。
subList（）方法可以创建较大列表的一个片段。注意，subList（）所生成的列表，其底层还是原始列表。因此，对返回列表的修改会在原始列表中体现出来，反之亦然。 
其他方法看上面的示例，不想写了。

##### Arrays.asList()
Arrays.asList()的输出，将其作为一个列表，但注意它的底层实现是数组，大小无法调整，如果尝试调整大小（如add（），remove（）方法），会出现运行时错误“Unsupported Operation”。对这个输出执行Collections.shuffle()打乱顺序，会打乱原数组的顺序。如果不希望改动这个数组，要将其复制到另一个集合中。如下实例：
```java
import java.util.*;

public class ModifyingArraysAsList {
    public static void main(String[] args) {
        Random rand = new Random(47);
        Integer[] ia = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        List<Integer> list1 =
                new ArrayList<>(Arrays.asList(ia));
        System.out.println("Before shuffling: " + list1);
        Collections.shuffle(list1, rand);
        System.out.println("After shuffling: " + list1);
        System.out.println("array: " + Arrays.toString(ia));

        List<Integer> list2 = Arrays.asList(ia);
        System.out.println("Before shuffling: " + list2);
        Collections.shuffle(list2, rand);
        System.out.println("After shuffling: " + list2);
        System.out.println("array: " + Arrays.toString(ia));
    }
}
/* Output:
Before shuffling: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
After shuffling: [4, 6, 3, 1, 8, 7, 2, 5, 10, 9]
array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Before shuffling: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
After shuffling: [9, 1, 6, 3, 7, 2, 5, 10, 4, 8]
array: [9, 1, 6, 3, 7, 2, 5, 10, 4, 8]
*/
```
##### LinkedList
LinkedList实现了基本的List接口，此外还添加了一些可以使其用作栈、队列或双端队列（Deque）的方法。有些方法只是其他方法的别名，只是为了特定场景而起了更常见的名字。
常用的方法：

- getFirst ( )和element ( )是完全相同的，它们都返回列表的头部（第一个元素），而不移除它，如果List为空，则抛出NoSuchElementException。peek ( )方法和这两个方法稍有不同，如果列表为空，它返回null。
- removeFirst ( )和remove ( )也是完全相同的，它们都会移除并返回列表的头，对于空列表则抛出NoSuchElementException。poll ( )稍有不同，如果列表为空，它返回null。
- addFirst ( )在列表的开头插入一个元素。
- offer ( )和add ( )以及addLast ( )相同，都是向列表的尾部插入一个元素。
- removeLast ( )移除并返回列表的最后一个元素。

Queue接口的add（）、offer（）、remove（）、poll（）、element（）、peek（）这些的方法都被添加到了LinkedList中，所以它就可以作为Queue的一个实现了。

#### Stack
![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1706339379994-5210aee5-ea1d-4b34-9c2e-d9419c130c0e.png#averageHue=%23f3ebeb&clientId=u264d9b13-ff33-4&from=paste&height=402&id=N3BHb&originHeight=603&originWidth=728&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=39311&status=done&style=shadow&taskId=u29c61c0c-42b8-45bb-a20a-363d9bcad7f&title=&width=485.3333333333333)
栈Stack是一个“后进先出”的集合。Java 1.0就提供了Stack类，但设计非常糟糕，不过因为向后兼容，这个设计错误永远无法摆脱了。Java6 加入了ArrayDeque，提供了直接实现栈功能的方法。我么可以利用它封装一个自己的Stack类：
```java
package onjava;
import java.util.Deque;
import java.util.ArrayDeque;

public class Stack<T> {
    private Deque<T> storage = new ArrayDeque<>();

    public void push(T v) {
        storage.push(v);
    }

    public T peek() {
        return storage.peek();
    }

    public T pop() {
        return storage.pop();
    }

    public boolean isEmpty() {
        return storage.isEmpty();
    }

    @Override
    public String toString() {
        return storage.toString();
    }
}

```

#### Set
Set中不允许出现重复的对象值。查找某个对象是否在Set中，是Set最重要的操作，所以我们通常选择一个HashSet的实现，它对快速查找做了优化。
Set和Collection有相同的接口，不像List的两种类型那样有额外的功能。Set就是一个Collection，只是行为不同。


TreeSet将元素排序存储在红黑树数据结构中，它的排序是按字典顺序的，大写字母和小写字母会被划分到不同的组中。如果不想区分大小写，可以向其构造器传入String.CASE_INSENSITIVE_ORDER这个比较器Comparator。

#### Queue
队列Queue是一个“先进先出”的集合。
LinkedList实现了Queue接口。通过将LinkedList向上转型为Queue，如下示例：
```java
import java.util.*;

public class QueueDemo {
  public static void printQ(Queue queue) {
    while (queue.peek() != null)
      System.out.print(queue.remove() + " ");
    System.out.println();
  }

  public static void main(String[] args) {
    Queue<Integer> queue = new LinkedList<>();
    Random rand = new Random(47);
    for (int i = 0; i < 10; i++)
      queue.offer(rand.nextInt(i + 10));
    printQ(queue);
    Queue<Character> qc = new LinkedList<>();
    for (char c : "Brontosaurus".toCharArray())
      qc.offer(c);
    printQ(qc);
  }
}
/* Output:
8 1 1 1 5 14 3 1 0 1
B r o n t o s a u r u s
*/
```
offer（）是Queue特有的方法之一，负责在队列尾部插入一个元素。
peek() 和 element()都会返回队列的头部元素，不会将其从队列中删除。如果队列为空，peek（）返回null，element（）抛出异常NoSuchElementException。
poll（）和remove（）会将队列的头部元素删除。然后返回。如果队列为空，poll（）会返回null，而remove（）会抛出异常NoSuchElementException。
#### PriorityQueue 优先队列
优先队列是说，下一个要拿出的元素是需求最强烈的元素（最高优先级）。
Java5中添加了PriorityQueue，为这种行为提供了一个自动化的实现。
调用offer（）方法将一个对象添加到PriorityQueue中时，这个对象会在排序之后放入队列中。可以通过提供自己的Comparator来修改顺序。 

#### 迭代器 Iterator  与Iterable接口
使用iterator ( ) 方法让Collection返回一个Iterator。
使用next ( ) 方法获得序列中的下一个对象。
使用hasNext ( ) 方法检查序列中是否还有更多对象。
使用remove ( ) 方法删除该迭代器最近返回的元素。

Iterator只能单向移动。

Iterator能够将序列的遍历操作与序列的底层机构分离。因此，我们有时候会说，迭代器统一了对集合的访问。
Iterable接口：任何可以产生一个迭代器的东西。实现了Iterable接口的类，可以使用for-in循环。

![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1706172646442-7de9e8a4-de5f-4755-aa5d-c2024aa3f13a.png#averageHue=%23fbfafa&clientId=uf65288b8-6ce7-4&from=paste&height=246&id=mo4CH&originHeight=369&originWidth=1317&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=120991&status=done&style=shadow&taskId=u4340436b-9e70-4a11-9f95-2fbf16e1e32&title=&width=878)
```java
import reflection.pets.*;

import java.util.*;

public class CrossCollectionIteration2 {
    public static void display(Iterable<Pet> ip) {
        Iterator<Pet> it = ip.iterator();
        while (it.hasNext()) {
            Pet p = it.next();
            System.out.print(p.id() + ":" + p + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        List<Pet> pets = new PetCreator().list(8);//产生一个填充Pet的集合
        LinkedList<Pet> petsLL = new LinkedList<>(pets);
        HashSet<Pet> petsHS = new HashSet<>(pets);
        TreeSet<Pet> petsTS = new TreeSet<>(pets);
        display(pets);
        display(petsLL);
        display(petsHS);
        display(petsTS);
    }
}
```
##### ListIterator
ListIterator是Iterator的一种更为强大的子类型，只有List类才会生成。
ListIterator可以双向移动。
```java
interface ListIterator<E> extends Iterator<E>
{
    void add(E element);
    boolean hasNext();
    E next();
    boolean hasPrevious();
    E previous();
    void remove();
    void set(E element);
    ...
}
```
![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1706171817532-c2e04ba8-a5d0-4b28-98bf-ce762bc87a60.png#averageHue=%23fafaf7&clientId=uf65288b8-6ce7-4&from=paste&height=312&id=C0PRI&originHeight=468&originWidth=1201&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=177789&status=done&style=shadow&taskId=u7d988852-2fa5-445c-992a-0efecdb9733&title=&width=800.6666666666666)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1706171852896-f4c11345-fba9-4f55-8a8c-491d9049320c.png#averageHue=%23f9f9f7&clientId=uf65288b8-6ce7-4&from=paste&height=472&id=BTSAq&originHeight=708&originWidth=1248&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=285239&status=done&style=shadow&taskId=u59ec1a7a-14b9-485f-b108-bf097945b41&title=&width=832)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1706172288630-7ea0dfbb-6707-436a-b2c8-5ed818e20500.png#averageHue=%23fbfbf8&clientId=uf65288b8-6ce7-4&from=paste&height=379&id=ohmDD&originHeight=568&originWidth=1085&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=174430&status=done&style=shadow&taskId=uf46e5152-ebcd-4b45-aa22-02cd40f9632&title=&width=723.3333333333334)
```java
import reflection.pets.*;
import java.util.*;

public class ListIteration {
  public static void main(String[] args) {
    List<Pet> pets = new PetCreator().list(8);
    ListIterator<Pet> it = pets.listIterator();
    while(it.hasNext())
      System.out.print(it.next() +
        ", " + it.nextIndex() +
        ", " + it.previousIndex() + "; ");
    System.out.println();
    // Backwards:
    while(it.hasPrevious())
      System.out.print(it.previous().id() + " ");
    System.out.println();
    System.out.println(pets);
    it = pets.listIterator(3);
    while(it.hasNext()) {
      it.next();
      it.set(new PetCreator().get());
    }
    System.out.println(pets);
  }
}
```

### Map
一组键值对象对，使用键来查找值。Map使用另一个对象来查找某个对象。也被称作关联数组或字典。
```java
public class PetMap {
  public static void main(String[] args) {
    Map<String, Pet> petMap = new HashMap<>();
    petMap.put("My Cat", new Cat("Molly"));
    petMap.put("My Dog", new Dog("Ginger"));
    petMap.put("My Hamster", new Hamster("Bosco"));
    System.out.println(petMap);
    Pet dog = petMap.get("My Dog");
    System.out.println(dog);
    System.out.println(petMap.containsKey("My Dog"));
    System.out.println(petMap.containsValue(dog));
  }
}
```
```java
import reflection.pets.*;

import java.util.*;

public class MapOfList {
    public static final Map<Person, List<? extends Pet>>
            petPeople = new HashMap<>();

    static {
        petPeople.put(new Person("Dawn"),
                Arrays.asList(
                        new Cymric("Molly"),
                        new Mutt("Spot")));
        petPeople.put(new Person("Kate"),
                Arrays.asList(new Cat("Shackleton"),
                        new Cat("Elsie May"), new Dog("Margrett")));
        petPeople.put(new Person("Marilyn"),
                Arrays.asList(
                        new Pug("Louie aka Louis Snorkelstein Dupree"),
                        new Cat("Stanford"),
                        new Cat("Pinkola")));
        petPeople.put(new Person("Luke"),
                Arrays.asList(
                        new Rat("Fuzzy"), new Rat("Fizzy")));
        petPeople.put(new Person("Isaac"),
                Arrays.asList(new Rat("Freckly")));
    }

    public static void main(String[] args) {
        System.out.println("People: " + petPeople.keySet());
        System.out.println("Pets: " + petPeople.values());
        for (Person person : petPeople.keySet()) {
            System.out.println(person + " has:");
            for (Pet pet : petPeople.get(person))
                System.out.println("    " + pet);
        }
    }
}
```
keySet()会生成一个包含其所有键的Set。
values()会生成一个包含所有值的Collection。
entrySet（）会生成一个Set，里面包含其每一条键值对。可以用getKey()和getValue()方法读取。

Map的几种实现：
HashMap是为快速访问设计的，TreeMap将它的键以有序方式保存，所以不如HashMap快。LinkedHashMap按照元素的插入顺序来保存，但是通过哈希提供了快速访问能力。

### 总结
![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1706449765923-85cb5254-585b-4064-a727-e0c7f4ca93ec.png#averageHue=%23f7f6f6&clientId=u7aee952c-a7de-4&from=paste&height=662&id=uff1b4f02&originHeight=993&originWidth=1683&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=403629&status=done&style=shadow&taskId=u5ecf18b9-3da9-4622-a7c8-a5c90e8f4d2&title=&width=1122)
虚线框代表接口，实线框是普通（具体）类。最常用的集合使用加粗的实线框来表示。
从图中可以看到，实际上只有四个基本的集合组件——Map、List、Set和Queue，而且每个组件只有两到三个实现（java.util.concurrent实现的Queue没有包含在这个图中）。
带有“Produces”说明的箭头表示，一个类可以生成箭头所指的类的对象。例如，Map可以生成Collection， 而 Collection可以生成Iterator。List可以生成ListIterator，也可以生成普通的Iterator，因为List继承Collection。

```java
Collection: [add, addAll, clear, contains, containsAll,equals, forEach, hashCode, isEmpty,
iterator,parallelStream, remove, removeAll, removeIf, retainAll,size, spliterator, stream,
toArray]
Interfaces in Collection: [Iterable]

Set extends Collection, adds: []
Interfaces in Set: [Collection]

HashSet extends Set, adds: []
Interfaces in HashSet: [Set, Cloneable, Serializable]

LinkedHashSet extends HashSet, adds: []
Interfaces in LinkedHashSet: [Set, Cloneable,Serializable]

TreeSet extends Set, adds: [headSet,descendingIterator, descendingSet, pollLast, subSet,
floor, tailSet, ceiling, last, lower, comparator,pollFirst, first, higher]
Interfaces in TreeSet: [NavigableSet, Cloneable,Serializable]

List extends Collection, adds: [replaceAll, get,indexOf, subList, set, sort, lastIndexOf,
listIterator]
Interfaces in List: [Collection]

ArrayList extends List, adds: [trimToSize,ensureCapacity]
Interfaces in ArrayList: [List, RandomAccess,Cloneable, Serializable]

LinkedList extends List, adds: [offerFirst, poll,getLast, offer, getFirst, removeFirst,
element,removeLastOccurrence, peekFirst, peekLast, push,pollFirst, removeFirstOccurrence,
descendingIterator,pollLast, removeLast, pop, addLast, peek, offerLast,addFirst]
Interfaces in LinkedList: [List, Deque, Cloneable,Serializable]

Queue extends Collection, adds: [poll, peek, offer,element]
Interfaces in Queue: [Collection]

PriorityQueue extends Queue, adds: [comparator]
Interfaces in PriorityQueue: [Serializable]

Map: [clear, compute, computeIfAbsent,computeIfPresent, containsKey, containsValue, 
entrySet,equals, forEach, get, getOrDefault, hashCode, isEmpty,keySet, merge, put, 
putAll, putIfAbsent, remove,replace, replaceAll, size, values]

HashMap extends Map, adds: []
Interfaces in HashMap: [Map, Cloneable, Serializable]

LinkedHashMap extends HashMap, adds: []
Interfaces in LinkedHashMap: [Map]

SortedMap extends Map, adds: [lastKey, subMap,comparator, firstKey, headMap, tailMap]
Interfaces in SortedMap: [Map]

TreeMap extends Map, adds: [descendingKeySet,navigableKeySet, higherEntry, higherKey,
floorKey,subMap, ceilingKey, pollLastEntry, firstKey, lowerKey,headMap, tailMap,
lowerEntry, ceilingEntry,descendingMap, pollFirstEntry, lastKey, firstEntry,
floorEntry, comparator, lastEntry]
Interfaces in TreeMap: [NavigableMap, Cloneable,Serializable]
```

不要在新代码中使用Vector、Hashtable和Stack等遗留类。

## 函数式编程
使用代码以某种方式操纵其他代码，这就是函数式编程的意义所在。
面向对象编程抽象数据，函数式编程抽象行为。
纯函数式语言在安全方面做了很多努力。规定所有的数据必须是不可变的。函数会接受值，然后产生新值，但是不会修改自身之外的任何东西（包括其参数或该函数作用域之外的元素）。
```java
interface Strategy {
    String approach(String msg);
}

class Soft implements Strategy {
    @Override
    public String approach(String msg) {
        return msg.toLowerCase() + "?";
    }
}

class Unrelated {
    static String twice(String msg) {
        return msg + " " + msg;
    }
}

public class Strategize {
    Strategy strategy;
    String msg;

    Strategize(String msg) {
        strategy = new Soft();                // [1]默认策略
        this.msg = msg;
    }

    void communicate() {
        System.out.println(strategy.approach(msg));
    }

    void changeStrategy(Strategy strategy) {
        this.strategy = strategy;
    }

    public static void main(String[] args) {
        Strategy[] strategies = {
                new Strategy() {                    // [2]匿名内部类
                    public String approach(String msg) {
                        return msg.toUpperCase() + "!";
                    }
                },
                msg -> msg.substring(0, 5),         // [3] lambda表达式
                Unrelated::twice                    // [4] 方法引用
        };
        Strategize s = new Strategize("Hello there");
        s.communicate();
        for (Strategy newStrategy : strategies) {
            s.changeStrategy(newStrategy);      // [5] 遍历数组中的策略，并将策略放入s中
            s.communicate(); // [6]每次调用都产生不同的行为，取决于此时所使用的策略“代码对象”
                             //我们传递了行为，而不只是传递数据
        }
    }
}
/* Output:
hello there?
HELLO THERE!
Hello
Hello there Hello there
*/
```

### lambda表达式
lambda表达式是使用尽可能少的语法编写的函数定义。
lambda表达式产生的是函数，而不是类。在Java虚拟机上，一切都是类。所以幕后会有各种操作，让lambda看起来像函数。但是作为程序员，可以开心地假装它们就是函数。
语法格式：（参数）-> {方法体}
```java
interface Description {
    String brief();
}

interface Body {
    String detailed(String head);
}

interface Multi {
    String twoArg(String head, Double d);
}

public class LambdaExpressions {

    static Body bod = h -> h + " No Parens!";      // [1]只有一个参数，参数可以不加括号

    static Body bod2 = (h) -> h + " More details"; // [2]也可以加括号

    static Description desc = () -> "Short info";  // [3]没有参数，必须加括号

    static Multi mult = (h, n) -> h + n;           // [4]多个参数，括号内逗号隔开
    //以上方法体只有一行，可以不加大括号，且方法体中表达式的结果会自动称为lambda表达式的返回值
    //这里使用return关键字是不合法的。

    static Description moreLines = () -> {         // [5]方法体中多行代码，必须加大括号
                                                   //且需要使用return从lambda生成一个值
        System.out.println("moreLines()");
        return "from moreLines()";
    };

    public static void main(String[] args) {
        System.out.println(bod.detailed("Oh!"));
        System.out.println(bod2.detailed("Hi!"));
        System.out.println(desc.brief());
        System.out.println(mult.twoArg("Pi! ", 3.14159));
        System.out.println(moreLines.brief());
    }
}
/* Output:
Oh! No Parens!
Hi! More details
Short info
Pi! 3.14159
moreLines()
from moreLines()
*/
```

```java
interface IntCall {
  int call(int arg);
}

public class RecursiveFactorial {
  static IntCall fact;
  public static void main(String[] args) {
    fact = n -> n == 0 ? 1 : n * fact.call(n - 1); //n的阶乘
    for(int i = 0; i <= 10; i++)
      System.out.println(fact.call(i));
  }
}
```
### 方法引用
方法引用指向的是方法。
语法格式     类名或对象名 :: 方法名
```java
interface Callable {                        // [1]
  void call(String s);
}

class Describe {
  void show(String msg) {                   // [2]
    System.out.println(msg);
  } 
}

public class MethodReferences {
  static void hello(String name) {          // [3]
    System.out.println("Hello, " + name);
  } 
  static class Description {
    String about;
    Description(String desc) { about = desc; }
    void help(String msg) {                 // [4]
      System.out.println(about + " " + msg);
    } 
  }
  static class Helper {
    static void assist(String msg) {        // [5]
      System.out.println(msg);
    } 
  }
  public static void main(String[] args) {
    Describe d = new Describe();
    Callable c = d::show;                   // [6]
    c.call("call()");                       // [7]

    c = MethodReferences::hello;            // [8]
    c.call("Bob");

    c = new Description("valuable")::help;  // [9]
    c.call("information");

    c = Helper::assist;                     // [10]
    c.call("Help!");
  }
}
/* Output:
call()
Hello, Bob
valuable information
Help!
*/
```
#### Runnable接口
Runnable接口是函数式接口（只有一个方法），其run（）方法没有参数，也没有返回值。所以我们可以将lambda表达式或方法引用用作Runnable :
```java
class Go {
  static void go() {
    System.out.println("Go::go()");
  }
}

public class RunnableMethodReference {
  public static void main(String[] args) {

    new Thread(new Runnable() { //匿名内部类
      public void run() {
        System.out.println("Anonymous");
      }
    }).start();

    new Thread(
      () -> System.out.println("lambda") //lambda表达式
    ).start();

    new Thread(Go::go).start(); //方法引用
  }
}
/* Output:
Anonymous
lambda
Go::go()
*/
```
#### 未绑定方法引用
未绑定方法引用指的是尚未关联到某个对象的普通方法（非静态方法）。对于未绑定方法引用，必须先提供对象，然后才能使用。所以我们的接口事实上还需要一个额外的参数指明对象。在未绑定引用的情况下，函数式方法的签名与方法引用的签名不再完全匹配，函数式方法的参数第一个是方法可附着的对象。
```java
class X {
  String f() { return "X::f()"; }
}

interface MakeString {
  String make();
}

interface TransformX {
  String transform(X x);
}

public class UnboundMethodReference {
  public static void main(String[] args) {
    // MakeString ms = X::f;                // [1]普通方法实际还涉及隐藏参数this，如果没有
    //可附着的对象，就无法调用f()
    TransformX sp = X::f;
    X x = new X();
    System.out.println(sp.transform(x));    // [2]
    System.out.println(x.f()); // Same effect
  }
}
/* Output:
X::f()
X::f()
*/
```
#### 构造器方法引用
我们可以捕获对某个构造器的引用，之后通过该引用来调用那个构造器。
```java
class Dog {
  String name;
  int age = -1; // For "unknown"
  Dog() { name = "stray"; }
  Dog(String nm) { name = nm; }
  Dog(String nm, int yrs) { name = nm; age = yrs; }
}

interface MakeNoArgs {
  Dog make();
}

interface Make1Arg {
  Dog make(String nm);
}

interface Make2Args {
  Dog make(String nm, int age);
}

public class CtorReference {
  public static void main(String[] args) {
    MakeNoArgs mna = Dog::new;        // [1]
    Make1Arg m1a = Dog::new;          // [2]
    Make2Args m2a = Dog::new;         // [3]编译器可以从接口自动推断使用哪个构造器

    Dog dn = mna.make();
    Dog d1 = m1a.make("Comet");
    Dog d2 = m2a.make("Ralph", 4);
  }
}
```
### 函数式接口
只含有一个抽象方法的接口叫做函数式接口，这个方法叫做函数式方法。
java.util.function包内置了一系列函数式接口，命名格式如下：



| 特点                                  | 函数式方法命名                                                             | 用法                                                                                                                                                                                                                                                 |
|-------------------------------------|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 没有参数；没有返回值                          | Runnable (java.lang) run()                                          | Runnable                                                                                                                                                                                                                                           |
| 没有参数；可以返回任何类型                       | Supplier get() getAs**Type** ()                                     | Supplier\<T> BooleanSupplier IntSupplier,LongSupplier DoubleSupplier                                                                                                                                                                               |
| 没有参数；可以返回任何类型                       | Callable (java.util.concurrent) call()                              | Callable\<V>                                                                                                                                                                                                                                       |
| 一个参数；没有返回值                          | Consumer accept()                                                   | Consumer\<T> IntConsumer LongConsumer,DoubleConsumer                                                                                                                                                                                               |
| 两个参数的 Consumer                      | BiConsumer accept()                                                 | BiConsumer\<T,U>                                                                                                                                                                                                                                   |
| 两个参数的 Consumer ；第一个参数是引用，第二个参数是基本类型 | Obj**Type**Consumer accept()                                        | ObjIntConsumer\<T> ObjLongConsumer\<T>,ObjDoubleConsumer\<T>                                                                                                                                                                                       |
| 一个参数；返回值为不同类型                       | Function apply() To**type** & **type**To**type**,applyAs**type** () | Function\<T,R> IntFunction\<R> LongFunction\<R>,DoubleFunction\<R> ToIntFunction\<T>,ToLongFunction\<T> ToDoubleFunction\<T>,IntToLongFunction IntToDoubleFunction,LongToIntFunction LongToDoubleFunction,DoubleToIntFunction DoubleToLongFunction |                                                                                                                       |
| 一个参数；返回值为相同类型                       | UnaryOperator apply()                                               | UnaryOperator\<T> IntUnaryOperator,LongUnaryOperator DoubleUnaryOperator                                                                                                                                                                           |
| 两个相同类型的参数；返回值也是相同类型                 | BinaryOperator apply()                                              | BinaryOperator\<T> IntBinaryOperator,LongBinaryOperator DoubleBinaryOperator                                                                                                                                                                       |
| 两个相同类型的参数；返回 int                    | Comparator (java.util) compare()                                    | Comparator\<T>                                                                                                                                                                                                                                     |
| 一个或两个参数；返回 boolean                  | Predicate test()                                                    | Predicate\<T> BiPredicate\<T,U> IntPredicate,LongPredicate DoublePredicate                                                                                                                                                                         |
| 基本类型的参数；返回值也是基本类型                   | **type**To**type** Function applyAs**type** ()                      | IntToLongFunction IntToDoubleFunction,LongToIntFunction LongToDoubleFunction,DoubleToIntFunction DoubleToLongFunction                                                                                                                              |
| 两个参数；不同类型                           | Bi +操作名（方法名会变化）                                                     | BiFunction\<T,U,R> BiConsumer\<T,U>,BiPredicate\<T,U> ToIntBiFunction\<T,U>,ToLongBiFunction\<T,U> ToDoubleBiFunction\<T,U>                                                                                                                        |






### 高阶函数
高阶函数是一个能接受函数作为参数或能把函数当返回值的函数。
```java
import java.util.function.*;

class I {
    @Override
    public String toString() {
        return "I";
    }
}

class O {
    @Override
    public String toString() {
        return "O";
    }
}

public class TransformFunction {
    static Function<I, O> transform(Function<I, O> in) {
        return in.andThen(o -> { //andThen是接口的默认方法，会在in函数调用之后调用
            System.out.println(o);
            return o;
        });
    }

    public static void main(String[] args) {
        Function<I, O> f2 = transform(i -> {
            System.out.println(i);
            return new O();
        });
        O o = f2.apply(new I());
    }
}
/* Output:
I
O
*/
```
### 闭包
如果一个lambda表达式引用了其作用域之外的变量。当返回该函数时，会发生什么？当我们调用这个函数时，它所引用的“外部”变量会变成什么呢？如果语言能解决这个问题，我们就说这门语言是支持**闭包**的或称其支持**词法作用域**。
lambda表达式之外定义的变量都必须是最终变量或实际上的最终变量。但是如果变量是某个对象中的一个字段，那么它会有独立的声明周期，并不需要任何特殊的变量捕获，就不用要求其是最终变量。因为我们调用这个函数后，这个对象还存在，这个字段也就还存在。
### 函数组合
函数组合基本上是说，将多个函数结合使用，以创建新的函数。
java.util.function中的一些接口包含了支持函数组合的方法，如下：

| 组合方法 | 支持的接口 |
| --- | --- |
| andThen(argument) 先执行原始操作，再执行参数操作 | Function BiFunction Consumer BiConsumer IntConsumer LongConsumer
DoubleConsumer UnaryOperator IntUnaryOperator LongUnaryOperator
DoubleUnaryOperator BinaryOperator |
| compose(argument) 先执行参数操作，再执行原始操作 | Function UnaryOperator IntUnaryOperator LongUnaryOperator
DoubleUnaryOperator |
| and(argument) 对原始谓词和参数谓词执行短路逻辑与（AND）计算 | Predicate BiPredicate IntPredicate LongPredicate DoublePredicate |
| or(argument) 对原始谓词和参数谓词执行短路逻辑或（OR）计算 | Predicate BiPredicate IntPredicate LongPredicate DoublePredicate |
| negate() 所得谓词为该谓词的逻辑取反 | Predicate BiPredicate IntPredicate LongPredicate DoublePredicate |

```java
import java.util.function.*;

public class FunctionComposition {
  static Function<String, String>
    f1 = s -> {
      System.out.println(s);
      return s.replace('A', '_');
    },
    f2 = s -> s.substring(3),
    f3 = s -> s.toLowerCase(),
    f4 = f1.compose(f2).andThen(f3);
  public static void main(String[] args) {
    System.out.println(
      f4.apply("GO AFTER ALL AMBULANCES"));
  }
}
/* Output:
AFTER ALL AMBULANCES
_fter _ll _mbul_nces
*/
```
```java
import java.util.function.*;
import java.util.stream.*;

public class PredicateComposition {
  static Predicate<String>
    p1 = s -> s.contains("bar"),
    p2 = s -> s.length() < 5,
    p3 = s -> s.contains("foo"),
    p4 = p1.negate().and(p2).or(p3);
  public static void main(String[] args) {
    Stream.of("bar", "foobar", "foobaz", "fongopuckey")
      .filter(p4)
      .forEach(System.out::println);
  }
}
/* Output:
foobar
foobaz
*/
```
### 柯里化
柯里化指的是将一个接受多个参数的函数转变为一系列只接受一个参数的函数。
```java
import java.util.function.*;

public class CurryingAndPartials {
   // Uncurried:
   static String uncurried(String a, String b) {
      return a + b;
   }
   public static void main(String[] args) {
      // Curried function:
      Function<String, Function<String, String>> sum =
         a -> b -> a + b;                         // [1]

      System.out.println(uncurried("Hi ", "Ho"));

      Function<String, String>
        hi = sum.apply("Hi ");                    // [2]
      System.out.println(hi.apply("Ho"));

      // Partial application:
      Function<String, String> sumHi =
        sum.apply("Hup ");
      System.out.println(sumHi.apply("Ho"));
      System.out.println(sumHi.apply("Hey"));
   }
}
/* Output:
Hi Ho
Hi Ho
Hup Ho
Hup Hey
*/
```
## 流
流是一个与任何特定的存储机制都没有关系的元素序列。集合优化了对象的存储，而流与对象的成批处理有关。
不同于在集合中遍历元素，使用流的时候，是从一个管道中抽取元素，并对它们进行操作。这些管道通常会被串联到一起，形成这个流上的一个操作管线。
### 流的创建
Stream.of()可以将一组条目变成一个流。
每个Collection都可以使用stream() 方法来生成一个流。
```java
import java.util.*;
import java.util.stream.*;

public class CollectionToStream {
  public static void main(String[] args) {
    List<Bubble> bubbles = Arrays.asList(
      new Bubble(1), new Bubble(2), new Bubble(3));
    System.out.println(
      bubbles.stream()
        .mapToInt(b -> b.i)
        .sum());

    Set<String> w = new HashSet<>(Arrays.asList(
      "It's a wonderful day for pie!".split(" ")));
    w.stream()
      .map(x -> x + " ")
      .forEach(System.out::print);
    System.out.println();

    Map<String, Double> m = new HashMap<>();
    m.put("pi", 3.14159);
    m.put("e", 2.718);
    m.put("phi", 1.618);
    m.entrySet().stream()
      .map(e -> e.getKey() + ": " + e.getValue())
      .forEach(System.out::println);
  }
}
/* Output:
6
a pie! It's for wonderful day
phi: 1.618
e: 2.718
pi: 3.14159
*/
```
中间的map（）操作接受流中的每个元素，在其上应用一个操作来创建一个新的元素，然后将这个新元素沿着流继续传递下去。普通的map()接受对象并生成对象，但当希望输出流持有的是数值类型的值时，map()还有一些特殊的版本，这里的mapToInt（）将对象流转变成了一个包含Integar的IntStream。
#### 随机数流
```java
import java.util.*;
import java.util.stream.*;

public class RandomGenerators {
  public static <T> void show(Stream<T> stream) {
    stream
      .limit(4)
      .forEach(System.out::println);
    System.out.println("++++++++");
  }
  public static void main(String[] args) {
    Random rand = new Random(47);
    show(rand.ints().boxed()); 
    show(rand.longs().boxed());
    show(rand.doubles().boxed());
    // Control the lower and upper bounds:
    show(rand.ints(10, 20).boxed());
    show(rand.longs(50, 100).boxed());
    show(rand.doubles(20, 30).boxed());
    // Control the stream size:
    show(rand.ints(2).boxed());
    show(rand.longs(2).boxed());
    show(rand.doubles(2).boxed());
    // Control the stream size and bounds:
    show(rand.ints(3, 3, 9).boxed());
    show(rand.longs(3, 12, 22).boxed());
    show(rand.doubles(3, 11.5, 12.3).boxed());
  }
}
```
Random类只会生成int, long和double等基本类型的值，boxed()流操作会自动将基本类型转换为其对应的包装器类型。

#### IntStream类的range()方法
range()方法可以生成一个由int值组成的流。
```java
import static java.util.stream.IntStream.*;

public class Ranges {
  public static void main(String[] args) {
    // The traditional way:
    int result = 0;
    for(int i = 10; i < 20; i++)
      result += i;
    System.out.println(result);

    // for-in with a range:
    result = 0;
    for(int i : range(10, 20).toArray())
      result += i;
    System.out.println(result);

    // Use streams:
    System.out.println(range(10, 20).sum());
  }
}
/* Output:
145
145
145
*/
```
利用range()方法写的repeat（）工具函数，用于取代简单的for循环：
```java
package onjava;
import static java.util.stream.IntStream.*;

public class Repeat {
  public static void repeat(int n, Runnable action) {
    range(0, n).forEach(i -> action.run());
  }
}
```
```java
import static onjava.Repeat.*;

public class Looping {
  static void hi() { System.out.println("Hi!"); }
  public static void main(String[] args) {
    repeat(3, () -> System.out.println("Looping!"));
    repeat(2, Looping::hi);
  }
}

```

#### Stream.generate()
```text
Stream.generate()，它可以 接受任何的Supplier<T>，并生成一个由T类型的对象组成的流。
```


 
#### Stream.iterate()
Stream.iterate()从一个种子开始（第一个参数），然后将其传给第二个参数所引用的方法。其结果被添加到这个流上，并且保存下来作为下一次iterate()调用的第一个参数，以此类推。
```java
import java.util.stream.*;

public class Fibonacci {
  int x = 1;
  Stream<Integer> numbers() {
    return Stream.iterate(0, i -> {
      int result = x + i;
      x = i;
      return result;
    });
  }
  public static void main(String[] args) {
    new Fibonacci().numbers()
      //.skip(20) // Don't use the first 20
      .limit(10) // Then take 10 of them
      .forEach(System.out::println);
  }
}
```
#### Stream.builder()
Stream库提供了一个Builder，可使用建造者设计模式来创建流。
```java
import java.nio.file.*;
import java.util.stream.*;

public class FileToWordsBuilder {
  Stream.Builder<String> builder = Stream.builder();
  public FileToWordsBuilder(String filePath)
  throws Exception {
    Files.lines(Paths.get(filePath))
      .skip(1) // Skip the comment line at the beginning
      .forEach(line -> {
        for(String w : line.split("[ .?,]+"))
          builder.add(w);
      });
  }
  Stream<String> stream() { return builder.build(); }
  public static void
  main(String[] args) throws Exception {
    new FileToWordsBuilder("Cheese.dat").stream()
      .limit(7)
      .map(w -> w + " ")
      .forEach(System.out::print);
  }
}
```
#### Arrays.stream()
Arrays.stream()方法可以将数组转换为流。
```java
import java.util.*;
import java.util.stream.*;

public class ArrayStreams {
    public static void main(String[] args) {
        Arrays.stream(new double[]{3.14159, 2.718, 1.618})
                .forEach(n -> System.out.format("%f ", n));
        
        System.out.println();
        
        Arrays.stream(new int[]{1, 3, 5})
                .forEach(n -> System.out.format("%d ", n));
        
        System.out.println();
        
        Arrays.stream(new long[]{11, 22, 44, 66})
                .forEach(n -> System.out.format("%d ", n));
        
        System.out.println();
        
        // Select a subrange:
        Arrays.stream(new int[]{1, 3, 5, 7, 15, 28, 37}, 3, 6)
                .forEach(n -> System.out.format("%d ", n));
    }
}
/* Output:
3.141590 2.718000 1.618000
1 3 5
11 22 44 66
7 15 28
*/
```
### 流的中间操作
#### peek()查看流对象而不修改
#### 对流元素进行排序
sorted（）可以默认比较方式排序，也可传入一个Comparator参数作为指定的比较方式进行排序。
#### 移除元素
distinct() 移除流中的重复元素。
filter(Predicate) 过滤操作，只保留符合特定条件的元素，也就是传给参数（即过滤函数）后，结果为true的那些元素。
```java
import java.util.stream.*;
import static java.util.stream.LongStream.*;

public class Prime {
  public static boolean isPrime(long n) {
    return rangeClosed(2, (long)Math.sqrt(n))
      .noneMatch(i -> n % i == 0);
  }
  public LongStream numbers() {
    return iterate(2, i -> i + 1)
      .filter(Prime::isPrime);
  }
  public static void main(String[] args) {
    new Prime().numbers()
      .limit(10)
      .forEach(n -> System.out.format("%d ", n));
    System.out.println();
    new Prime().numbers()
      .skip(90)
      .limit(10)
      .forEach(n -> System.out.format("%d ", n));
  }
}
/* Output:
2 3 5 7 11 13 17 19 23 29
467 479 487 491 499 503 509 521 523 541
*/
```
#### 将函数应用于每个流元素
map(Function) : 将Function应用于输入流的每个对象，结果作为输出流继续传递。
mapToInt、mapToLong等同上，只是将结果放在不同的IntStream、LongStream等流中。
```java
import java.util.*;
import java.util.stream.*;
import java.util.function.*;

class FunctionMap {
  static String[] elements = { "12", "", "23", "45" };
  static Stream<String> testStream() {
    return Arrays.stream(elements);
  }
  static void
  test(String descr, Function<String, String> func) {
    System.out.println(" ---( " + descr + " )---");
    testStream()
      .map(func)
      .forEach(System.out::println);
  }
  public static void main(String[] args) {

    test("add brackets", s -> "[" + s + "]");

    test("Increment", s -> {
      try {
        return Integer.parseInt(s) + 1 + "";
      } catch(NumberFormatException e) {
        return s;
      }
    });

    test("Replace", s -> s.replace("2", "9"));

    test("Take last digit", s -> s.length() > 0 ?
      s.charAt(s.length() - 1) + "" : s);
  }
}
/* Output:
 ---( add brackets )---
[12]
[]
[23]
[45]
 ---( Increment )---
13

24
46
 ---( Replace )---
19

93
45
 ---( Take last digit )---
2

3
5
*/
```
#### 在应用map()期间组合流
flatMap(Function)：如果Function返回的是流，使用flatMap将流展开为元素。
```java
import java.util.stream.*;

public class FlatMap {
  public static void main(String[] args) {
    Stream.of(1, 2, 3)
      .flatMap(
        i -> Stream.of("Gonzo", "Fozzie", "Beaker"))
      .forEach(System.out::println);
  }
}
/* Output:
Gonzo
Fozzie
Beaker
Gonzo
Fozzie
Beaker
Gonzo
Fozzie
Beaker
*/
```
```java
import java.nio.file.*;
import java.util.stream.*;
import java.util.regex.Pattern;

public class FileToWords {
  public static Stream<String> stream(String filePath)
  throws Exception {
    return Files.lines(Paths.get(filePath))
      .skip(1) // First (comment) line 跳过第一行
      .flatMap(line ->
        Pattern.compile("\\W+").splitAsStream(line));
  }
}
```

### Optional类型
如果流中包含null，我们向流中请求对象，会抛出异常。java中使用Optional类型来解决这个问题。

● findFirst()返 回 包 含 第 一 个 元 素 的 Optional。如 果 这 个 流 为 空， 则 返 回Optional.empty。

● findAny() 返 回 包 含 任 何 元 素 的 Optional， 如 果 这 个 流 为 空， 则 返 回Optional.empty。

● max()和min()分别返回包含流中最大值或最小值的Optional。如果这个流为空，则返回Optional.empty。

● reduce()的 一 个 版 本， 它 并 不 以 一 个“identity”对 象 作 为 其 第 一 个 参 数 （在reduce()的其他版本中，“identity”对象会成为默认结果，所以不会有结果为空的风险），它会将返回值包在一个Optional中。

● 对于数值化的流IntStream、LongStream和DoubleStream，average()操作将其结果包在一个Optional中，以防流为空的情况。
#### 便捷函数
Optional类提供了一些便捷函数，可以方便检查并处理Optional所包含的对象。
```java
import java.util.*;
import java.util.stream.*;
import java.util.function.*;

public class Optionals {
  static void basics(Optional<String> optString) {
    if(optString.isPresent())
      System.out.println(optString.get());
    else
      System.out.println("Nothing inside!");
  }
  static void ifPresent(Optional<String> optString) {
    optString.ifPresent(System.out::println);
  }
  static void orElse(Optional<String> optString) {
    System.out.println(optString.orElse("Nada"));
  }
  static void orElseGet(Optional<String> optString) {
    System.out.println(
      optString.orElseGet(() -> "Generated"));
  }
  static void orElseThrow(Optional<String> optString) {
    try {
      System.out.println(optString.orElseThrow(
        () -> new Exception("Supplied")));
    } catch(Exception e) {
      System.out.println("Caught " + e);
    }
  }
  static void test(String testName,
    Consumer<Optional<String>> cos) {
    System.out.println(" === " + testName + " === ");
    cos.accept(Stream.of("Epithets").findFirst());
    cos.accept(Stream.<String>empty().findFirst());
  }
  public static void main(String[] args) {
    test("basics", Optionals::basics);
    test("ifPresent", Optionals::ifPresent);
    test("orElse", Optionals::orElse);
    test("orElseGet", Optionals::orElseGet);
    test("orElseThrow", Optionals::orElseThrow);
  }
}
/* Output:
 === basics ===
Epithets
Nothing inside!
 === ifPresent ===
Epithets
 === orElse ===
Epithets
Nada
 === orElseGet ===
Epithets
Generated
 === orElseThrow ===
Epithets
Caught java.lang.Exception: Supplied
*/
```
#### 创建Optional
当需要自己编写生成Optional的代码，可以使用empty()、of(value)、ofNullable(value)等静态方法。
```java
import java.util.*;
import java.util.stream.*;
import java.util.function.*;

class CreatingOptionals {
  static void
  test(String testName, Optional<String> opt) {
    System.out.println(" === " + testName + " === ");
    System.out.println(opt.orElse("Null"));
  }
  public static void main(String[] args) {
    test("empty", Optional.empty());
    test("of", Optional.of("Howdy"));
    try {
      test("of", Optional.of(null));
    } catch(Exception e) {
      System.out.println(e);
    }
    test("ofNullable", Optional.ofNullable("Hi"));
    test("ofNullable", Optional.ofNullable(null));
  }
}
/* Output:
 === empty ===
Null
 === of ===
Howdy
java.lang.NullPointerException
 === ofNullable ===
Hi
 === ofNullable ===
Null
*/
```
#### Optional对象上的操作
有 三 种 方 法 支 持 对 Optional进 行 事 后 处 理， 所 以 如 果 你 的 流 管 线 生 成 了 一 个Optional，你可以在最后再做一项处理。
● filter(Predicate)：将Predicate应用于Optional的内容，并返回其结果。如果Optional与Predicate不匹配，则将其转换为empty。如果Optional本身已经是empty，则直接传回。
● map(Function)：如果Optional不为empty，则将Function应用于Optional中包含的对象，并返回结果。否则传回Optional.empty。
● flatMap(Function)：和 map()类似，但是所提供的映射函数会将结果包在Optional中，这样flatMap()最后就不会再做任何包装了。
#### 由Optional组成的流
假设有一个可能会生成null的生成器。如果使用这个生成器创建了一个流，我们自然想将这些元素包在Optional中。
```java
import java.util.*;
import java.util.stream.*;
import java.util.function.*;

public class Signal {
  private final String msg;
  public Signal(String msg) { this.msg = msg; }
  public String getMsg() { return msg; }
  @Override public String toString() {
    return "Signal(" + msg + ")";
  }
  static Random rand = new Random(47);
  public static Signal morse() {
    switch(rand.nextInt(4)) {
      case 1: return new Signal("dot");
      case 2: return new Signal("dash");
      default: return null;
    }
  }
  public static Stream<Optional<Signal>> stream() {
    return Stream.generate(Signal::morse)
      .map(signal -> Optional.ofNullable(signal));
  }
}
```
```java
import java.util.*;
import java.util.stream.*;

public class StreamOfOptionals {
  public static void main(String[] args) {
    Signal.stream()
      .limit(10)
      .forEach(System.out::println);
    System.out.println(" ---");
    Signal.stream()
      .limit(10)
      .filter(Optional::isPresent)
      .map(Optional::get)
      .forEach(System.out::println);
  }
}
/* Output:
Optional[Signal(dash)]
Optional[Signal(dot)]
Optional[Signal(dash)]
Optional.empty
Optional.empty
Optional[Signal(dash)]
Optional.empty
Optional[Signal(dot)]
Optional[Signal(dash)]
Optional[Signal(dash)]
 ---
Signal(dot)
Signal(dot)
Signal(dash)
Signal(dash)
*/

```
### 终结操作
终结操作接受一个流，并生成一个最终结果。它们不会再把任何东西发给某个后端的流。
#### 将流转换为一个数组
toArray()
#### 在每个流元素上应用某个终结操作
forEach(Consumer)
#### 收集操作
collect(Collector)
#### 组合所有的流元素
reduce(BinaryOperator): 使用BinaryOpreator来组合所有的流元素，返回一个包含最终结果的Optional。
```java
import java.util.*;
import java.util.stream.*;

class Frobnitz {
  int size;
  Frobnitz(int sz) { size = sz; }
  @Override public String toString() {
    return "Frobnitz(" + size + ")";
  }
  // Generator:
  static Random rand = new Random(47);
  static final int BOUND = 100;
  static Frobnitz supply() {
    return new Frobnitz(rand.nextInt(BOUND));
  }
}

public class Reduce {
  public static void main(String[] args) {
    Stream.generate(Frobnitz::supply)
      .limit(10)
      .peek(System.out::println)
      .reduce((fr0, fr1) -> fr0.size < 50 ? fr0 : fr1)
      .ifPresent(System.out::println);
  }
}
/* Output:
Frobnitz(58)
Frobnitz(55)
Frobnitz(93)
Frobnitz(61)
Frobnitz(61)
Frobnitz(29)
Frobnitz(68)
Frobnitz(0)
Frobnitz(22)
Frobnitz(7)
Frobnitz(29)
*/
```
#### 匹配
● allMatch(Predicate)：当使用所提供的Predicate检测流中的元素时，如果每一个元素都得到true，则返回true。在遇到第一个false时，会短路计算。也就是说，在找到一个false之后，它不会继续计算。
● anyMatch(Predicate)：当使用所提供的Predicate检测流中的元素时，如果有任何一个元素能得到true，则返回true。在遇到第一个 true时，会短路计算。
● noneMatch(Predicate)：当使用所提供的Predicate检测流中的元素时，如果没有元素得到true，则返回true。在遇到第一个true时，会短路计算。
```java
import java.util.stream.*;
import java.util.function.*;
import static streams.RandInts.*;

interface Matcher extends
  BiPredicate<Stream<Integer>, Predicate<Integer>> {}

public class Matching {
  static void show(Matcher match, int val) {
    System.out.println(
            match.test(
                    IntStream.rangeClosed(1, 9)
                            .boxed()
                            .peek(n -> System.out.format("%d ", n)),
                    n -> n < val));
  }
  public static void main(String[] args) {
    show(Stream::allMatch, 10);
    show(Stream::allMatch, 4);
    show(Stream::anyMatch, 2);
    show(Stream::anyMatch, 0);
    show(Stream::noneMatch, 5);
    show(Stream::noneMatch, 0);
  }
}
/* Output:
1 2 3 4 5 6 7 8 9 true
1 2 3 4 false
1 true
1 2 3 4 5 6 7 8 9 false
1 false
1 2 3 4 5 6 7 8 9 true
*/
```
#### 选择一个元素
● findFirst()：返回一个包含流中第一个元素的Optional，如果流中没有元素，则返回Optional.empty。
● findAny()：返回一个包含流中某个元素的Optional，如果流中没有元素，则返回Optional.empty。
#### 获得流相关的信息
● count()：获得流中元素的数量。
● max(Comparator)：通过Comparator确定这个流中的“最大”元素。
● min(Comparator)：通过Comparator确定这个流中的“最小”元素。

获得数值化流相关的信息：
● average()：就是通常的意义，获得平均值。
● max()与min()：这些操作不需要一个Comparator，因为它们处理的是数值化流。
● sum()：将流中的数值累加起来。
● summaryStatistics()：返回可能有用的摘要数据。不太清楚为什么Java库的设计者觉得需要这个，因为我们自己可以用直接方法获得所有这些数据。

## 异常
### 基本的异常
异常是指阻止当前方法或作用域继续执行的问题。在当前上下文中我们没有必要的信息来处理这个问题，只能跳出当前上下文，将问题委托给更上层的上下文。这就是抛出异常是发生的事情。
和Java中的任何对象一样，我们使用new创建异常，标准异常类有两个构造器：一个无参构造器；一个接受String参数的构造器，用于在异常中放置相关信息。
关键字throw抛出异常。
### 捕捉异常
try{
//可能产生异常的代码
} catch（TypeException e）{
//处理这种异常TypeException
}
想在一个catch字句捕捉多重异常，用“|”操作符把不同类型的异常连接起来。
```java
public class MultiCatch2 {
  void x() throws Except1, Except2, Except3, Except4 {}
  void process1() {}
  void process2() {}
  void f() {
    try {
      x();
    } catch(Except1 | Except2 e) {
      process1();
    } catch(Except3 | Except4 e) {
      process2();
    }
  }
}
```
Java的异常模型是终止模型，即发生异常后，无法返回到异常发生的地方。
### 创建自己的异常
创建自己的类继承Exception，类名最好要体现异常的种类或原因。
### 异常说明
一个方法会抛出异常，要在方法声明的参数列表后面加上throws Excetion1, Excetion2，说明可能抛出的异常种类。
RuntimeExcetion比较特殊，无需在方法声明上添加异常说明。
### Exception类的基本方法
```java
public class ExceptionMethods {
  public static void main(String[] args) {
    try {
      throw new Exception("My Exception");
    } catch(Exception e) {
      System.out.println("Caught Exception");
      System.out.println(
        "getMessage():" + e.getMessage());
      System.out.println("getLocalizedMessage():" +
        e.getLocalizedMessage());
      System.out.println("toString():" + e);
      System.out.println("printStackTrace():");
      e.printStackTrace(System.out);
    }
  }
}
/* Output:
Caught Exception
getMessage():My Exception
getLocalizedMessage():My Exception
toString():java.lang.Exception: My Exception
printStackTrace():
java.lang.Exception: My Exception
        at
ExceptionMethods.main(ExceptionMethods.java:7)
*/
```
printStackTrace（）打印异常的栈轨迹。也可以使用getStackTrace（）直接访问，这个方法返回一个有栈轨迹元素组成的数组，元素0是栈顶，它是序列中的最后一个方法调用。数组中的最后一个元素和栈底则是序列中的第一个方法调用。
### 重新抛出异常
可以在catch里重新抛出异常，如果抛出的是原异常对象，则异常栈轨迹还是原来的信息。
可以用throw (Exception)e.fillInStackTrace();重新填充异常栈轨迹信息，这里就是异常的新起点。
也可以抛出一个新异常，新异常可以选择在构造器中接受一个cause对象，这个cause对象意在作为原始的异常，我们可以维护能追溯到源头的栈轨迹。也可以使用initCause（）方法而不是构造器。
### finally执行清理
try {
// 被守护区域：可能会抛出A、B或C的危险活动
} catch(A a1) {
// 情况A的处理程序
} catch(B b1) {
// 情况B的处理程序
}  finally {
// 不管哪种情况都要执行的活动
}
无论是否抛出异常，finally子句都会执行。
#### return不影响finally执行
```java
public class MultipleReturns {
  public static void f(int i) {
    System.out.println(
      "Initialization that requires cleanup");
    try {
      System.out.println("Point 1");
      if(i == 1) return;
      System.out.println("Point 2");
      if(i == 2) return;
      System.out.println("Point 3");
      if(i == 3) return;
      System.out.println("End");
      return;
    } finally {
      System.out.println("Performing cleanup");//不管方法从哪里return，这句都会执行
    }
  }
  public static void main(String[] args) {
    for(int i = 1; i <= 4; i++)
      f(i);
  }
}
```
### 异常的约束
在继承和重写的过程中，子类可以减小异常，但是不能扩大异常。即子类的覆盖方法不能添加父类方法没有的异常。
对异常的这些约束不适用于构造器，子类构造器必须声明基类构造器提到的异常，但是子类构造器可以添加额外的异常。
### Try-with-resources
try后跟小括号，里面的内容叫做资源说明头。资源说明头里创建的对象必须实现java.lang.AutoCloseable接口，这个接口只有一个close()方法。这样，无论如何退出try块，资源说明头里创建的对象都会自动调用close()方法。
### 异常匹配
异常被它匹配的第一个catch子句捕获，就不再进一步的搜索了。
子类的异常可以匹配其基类的异常处理程序。

## 代码校验
### 单元测试
JUnit
```java
package validating;
import java.util.*;

public class CountedList extends ArrayList<String> {
  private static int counter = 0;
  private int id = counter++;
  public CountedList() {
    System.out.println("CountedList #" + id);
  }
  public int getId() { return id; }
}
```
```java
import java.util.*;
import org.junit.jupiter.api.*;
import validating.CountedList;

import static org.junit.jupiter.api.Assertions.*;

public class CountedListTest {
  private CountedList list;
  @BeforeAll
  static void beforeAllMsg() {
    System.out.println(">>> Starting CountedListTest");
  }
  @AfterAll
  static void afterAllMsg() {
    System.out.println(">>> Finished CountedListTest");
  }
  @BeforeEach
  public void initialize() {
    list = new CountedList();
    System.out.println("Set up for " + list.getId());
    for(int i = 0; i < 3; i++)
      list.add(Integer.toString(i));
  }
  @AfterEach
  public void cleanup() {
    System.out.println("Cleaning up " + list.getId());
  }
  @Test
  public void insert() {
    System.out.println("Running testInsert()");
    assertEquals(list.size(), 3);
    list.add(1, "Insert");
    assertEquals(list.size(), 4);
    assertEquals(list.get(1), "Insert");
  }
  @Test
  public void replace() {
    System.out.println("Running testReplace()");
    assertEquals(list.size(), 3);
    list.set(1, "Replace");
    assertEquals(list.size(), 3);
    assertEquals(list.get(1), "Replace");
  }
  // A helper method to simplify the code. As
  // long as it's not annotated with @Test, it will
  // not be automatically executed by JUnit.
  private
  void compare(List<String> lst, String[] strs) {
    assertArrayEquals(lst.toArray(new String[0]), strs);
  }
  @Test
  public void order() {
    System.out.println("Running testOrder()");
    compare(list, new String[] { "0", "1", "2" });
  }
  @Test
  public void remove() {
    System.out.println("Running testRemove()");
    assertEquals(list.size(), 3);
    list.remove(1);
    assertEquals(list.size(), 2);
    compare(list, new String[] { "0", "2" });
  }
  @Test
  public void addAll() {
    System.out.println("Running testAddAll()");
    list.addAll(Arrays.asList(new String[] {
      "An", "African", "Swallow"}));
    assertEquals(list.size(), 6);
    compare(list, new String[] { "0", "1", "2",
       "An", "African", "Swallow" });
  }
}
/* Output:
>>> Starting CountedListTest
CountedList #0
Set up for 0
Running testRemove()
Cleaning up 0
CountedList #1
Set up for 1
Running testReplace()
Cleaning up 1
CountedList #2
Set up for 2
Running testAddAll()
Cleaning up 2
CountedList #3
Set up for 3
Running testInsert()
Cleaning up 3
CountedList #4
Set up for 4
Running testOrder()
Cleaning up 4
>>> Finished CountedListTest
*/
```
### 断言
Java的断言需要-ea参数开启。
可以使用google的Guava库。它是一个更方便的断言库。
在Java语言中，assert语句的语法：
```java
assert expression1;
assert expression1 : expression2;
```
其中，expression1 是一个布尔表达式，如果其值为 false，则抛出 AssertionError 异常。expression2 是可选的，它是一个提供额外错误信息的表达式，在 expression1 为 false 时，这个表达式的值将作为构造 AssertionError 异常时传入的消息。
例子：
```java
assert 1 == 2 : "What a surprise!";
```
当运行这段Java代码并且启用assertions（通常通过 -ea JVM启动参数来启用），如果条件 1 == 2 不成立，则会抛出一个带有消息 "What a surprise!" 的 AssertionError 异常。

## 文件
在非常难用的文件I/O编程存在多年以后，Java7引进了java.nio.file包，简化了读写文件的基本操作。
### 文件和目录路径
Path对象代表的是一个文件或目录的路径。
```java
Path path = Paths.get("C:", "path", "to", "nowhere", "NoFile.txt");//多个参数代表多级目录
```
```java
// files/PathInfo.java
import java.nio.file.*;
import java.net.URI;
import java.io.File;
import java.io.IOException;

public class PathInfo {
  static void show(String id, Object p) {
    System.out.println(id + p);
  }
  static void info(Path p) {
    show("toString:\n ", p);
    show("Exists: ", Files.exists(p));
    show("RegularFile: ", Files.isRegularFile(p));
    show("Directory: ", Files.isDirectory(p));
    show("Absolute: ", p.isAbsolute());
    show("FileName: ", p.getFileName());
    show("Parent: ", p.getParent());
    show("Root: ", p.getRoot());
    System.out.println("******************");
  }
  public static void main(String[] args) {
    System.out.println(System.getProperty("os.name"));
    info(Paths.get(
      "C:", "path", "to", "nowhere", "NoFile.txt"));
    Path p = Paths.get("files", "PathInfo.java");
    info(p);
    Path ap = p.toAbsolutePath();
    info(ap);
    info(ap.getParent());
    try {
      info(p.toRealPath());
    } catch(IOException e) {
      System.out.println(e);
    }
    URI u = p.toUri();
    System.out.println("URI:\n" + u);
    Path puri = Paths.get(u);
    System.out.println(Files.exists(puri));
    File f = ap.toFile(); // Don't be fooled
  }
}
/*
Windows 11
toString:
 C:\path\to\nowhere\NoFile.txt
Exists: false
RegularFile: false
Directory: false
Absolute: true
FileName: NoFile.txt
Parent: C:\path\to\nowhere
Root: C:\
******************
toString:
 files\PathInfo.java
Exists: true
RegularFile: true
Directory: false
Absolute: false
FileName: PathInfo.java
Parent: files
Root: null
******************
toString:
 D:\devProject\OnJava8-Examples-master\files\PathInfo.java
Exists: true
RegularFile: true
Directory: false
Absolute: true
FileName: PathInfo.java
Parent: D:\devProject\OnJava8-Examples-master\files
Root: D:\
******************
toString:
 D:\devProject\OnJava8-Examples-master\files
Exists: true
RegularFile: false
Directory: true
Absolute: true
FileName: files
Parent: D:\devProject\OnJava8-Examples-master
Root: D:\
******************
toString:
 D:\devProject\OnJava8-Examples-master\files\PathInfo.java
Exists: true
RegularFile: true
Directory: false
Absolute: true
FileName: PathInfo.java
Parent: D:\devProject\OnJava8-Examples-master\files
Root: D:\
******************
URI:
file:///D:/devProject/OnJava8-Examples-master/files/PathInfo.java
true
*/
```
### 目录
Files工具类包含了操作目录和文件的大部分操作。但是由于某些原因，其中没有删除目录树的工具，我们自己创建一个，如下：
```java
package onjava;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.io.IOException;

public class RmDir {
  public static void rmdir(Path dir)
  throws IOException {
    Files.walkFileTree(dir,
      new SimpleFileVisitor<Path>() {
      @Override public FileVisitResult
      visitFile(Path file, BasicFileAttributes attrs)
      throws IOException {
        Files.delete(file);
        return FileVisitResult.CONTINUE;
      }
      @Override public FileVisitResult
      postVisitDirectory(Path dir, IOException exc)
      throws IOException {
        Files.delete(dir);
        return FileVisitResult.CONTINUE;
      }
    });
  }
}

```
### 文件系统
FileSystems工具可以获取到默认的文件系统。
```java
import java.nio.file.*;

public class FileSystemDemo {
  static void show(String id, Object o) {
    System.out.println(id + ": " + o);
  }
  public static void main(String[] args) {
    System.out.println(System.getProperty("os.name"));
    FileSystem fsys = FileSystems.getDefault();
    for(FileStore fs : fsys.getFileStores())
      show("File Store", fs);
    for(Path rd : fsys.getRootDirectories())
      show("Root Directory", rd);
    show("Separator", fsys.getSeparator());
    show("UserPrincipalLookupService",
      fsys.getUserPrincipalLookupService());
    show("isOpen", fsys.isOpen());
    show("isReadOnly", fsys.isReadOnly());
    show("FileSystemProvider", fsys.provider());
    show("File Attribute Views",
      fsys.supportedFileAttributeViews());
  }
}
```
### 监听Path
FileSystems可以生成一个WatchService，用于监听某个目录中的变化。
```java
// files/PathWatcher.java
import java.io.IOException;
import java.nio.file.*;
import static java.nio.file.StandardWatchEventKinds.*;
import java.util.concurrent.*;

public class PathWatcher {
  static Path test = Paths.get("test");
  static void delTxtFiles() {
    try {
      Files.walk(test)
        .filter(f ->
          f.toString().endsWith(".txt"))
        .forEach(f -> {
          try {
            System.out.println("deleting " + f);
            Files.delete(f);
          } catch(IOException e) {
            throw new RuntimeException(e);
          }
        });
    } catch(IOException e) {
      throw new RuntimeException(e);
    }
  }
  public static void
  main(String[] args) throws Exception {
    Directories.refreshTestDir();
    Directories.populateTestDir();//填充Test文件夹一些内容
    Files.createFile(test.resolve("Hello.txt"));
    WatchService watcher =
      FileSystems.getDefault().newWatchService();
    test.register(watcher, ENTRY_DELETE);
    Executors.newSingleThreadScheduledExecutor()
      .schedule(
        PathWatcher::delTxtFiles,
        250, TimeUnit.MILLISECONDS);
    WatchKey key = watcher.take();
    for(WatchEvent evt : key.pollEvents()) {
      System.out.println(
        "evt.context(): " + evt.context() +
        "\nevt.count(): " + evt.count() +
        "\nevt.kind(): " + evt.kind());
      System.exit(0);
    }
  }
}
```
### 查找文件
FileSystems对象上调用getPathMatcher()获得一个PathMatcher，传入选项，可以匹配选项里的文件。选项有两个模式：glob和regex。
```java
import java.nio.file.*;

public class Find {
  public static void
  main(String[] args) throws Exception {
    Path test = Paths.get("test");
    Directories.refreshTestDir();
    Directories.populateTestDir();
    // Creating a *directory*, not a file:
    Files.createDirectory(test.resolve("dir.tmp"));

    PathMatcher matcher = FileSystems.getDefault()
      .getPathMatcher("glob:**/*.{tmp,txt}");
    Files.walk(test)
      .filter(matcher::matches)
      .forEach(System.out::println);
    System.out.println("***************");

    PathMatcher matcher2 = FileSystems.getDefault()
      .getPathMatcher("glob:*.tmp");
    Files.walk(test)
      .map(Path::getFileName)
      .filter(matcher2::matches)
      .forEach(System.out::println);
    System.out.println("***************");

    Files.walk(test) // Only look for files
      .filter(Files::isRegularFile)
      .map(Path::getFileName)
      .filter(matcher2::matches)
      .forEach(System.out::println);
  }
}
```

### 读写文件
```text
Files.readAllLines()可以一次性读入整个文件到一个List<String>中，适用于小文件。
```

```java
import java.nio.file.*;

public class ListOfLines {
  public static void
  main(String[] args) throws Exception {
    Files.readAllLines(
      Paths.get("./streams/Cheese.dat"))
      .stream()
      .filter(line -> !line.startsWith("//"))
      .map(line ->
        line.substring(0, line.length()/2))
      .forEach(System.out::println);
  }
}
```
Files.write（）可以将byte数组或任何实现Iterable接口的类的对象写入文件。
```java
import java.util.*;
import java.nio.file.*;

public class Writing {
  static Random rand = new Random(47);
  static final int SIZE = 1000;
  public static void
  main(String[] args) throws Exception {
    // Write bytes to a file:
    byte[] bytes = new byte[SIZE];
    rand.nextBytes(bytes);
    Files.write(Paths.get("files/bytes.dat"), bytes);
    System.out.println("bytes.dat: " +
      Files.size(Paths.get("files/bytes.dat")));

    // Write an iterable to a file:
    List<String> lines = Files.readAllLines(
      Paths.get("./streams/Cheese.dat"));
    Files.write(Paths.get("files/Cheese.txt"), lines);
    System.out.println("Cheese.txt: " +
      Files.size(Paths.get("files/Cheese.txt")));
  }
}
```
对于大文件，使用Files.lines()可以很方便地将一个文件变为一个由行组成的Stream。
```java
import java.nio.file.*;

public class ReadLineStream {
  public static void
  main(String[] args) throws Exception {
    Files.lines(Paths.get("files/PathInfo.java"))
      .skip(13)
      .findFirst()
      .ifPresent(System.out::println);
  }
}
```
一个流中完成读入和写入示例：
```java
import java.io.*;
import java.nio.file.*;
import java.util.stream.*;

public class StreamInAndOut {
  public static void main(String[] args) {
    try(
      Stream<String> input =
        Files.lines(Paths.get("files/StreamInAndOut.java"));
      PrintWriter output =
        new PrintWriter("files/StreamInAndOut.txt")
    ) {
      input
        .map(String::toUpperCase)
        .forEachOrdered(output::println);
    } catch(Exception e) {
      throw new RuntimeException(e);
    }
  }
}
```
## 字符串
### 不可变的字符串
String类的对象是不可变的。任何看起来似乎会修改String值的方法，实际上都是创建并返回了一个全新的String对象，该对象包含了修改的内容，而原始的String则保持不变。
### 重载+与StringBuilder
“+”在字符串之间使用时，被重载为字符串拼接的意思。
由于String不可变，每次拼接都要生成一个新的String对象，效率低。编译器会使用StringBuilder优化性能，StringBuilder.append()拼接字符串，最后调用toString()生成最终的字符串。
但不可过分依赖编译器的优化，在涉及循环等复杂场景时，编译器可能生成多个StringBuilder，效率不高，最好自己直接使用StringBuilder编程。
### toString()
和其他类一样，集合也从Object继承而来，所以它们也包含一个toString()方法。
当把一个对象作为参数传入System.out.println()时，会自动调用对象的toString（）方法。
如果重写类的toString（）方法时，使用return   "address: " + this;会造成无限递归报错，因为this与字符串拼接时会自动调用toString()方法，即这个方法自己。如果想返回对象地址，应该用return   "address: " + super.toString();
### 对字符串的操作

### 格式化输出
#### format()和printf()
format()和printf()是等价的。它们都只需要一个格式化字符串，后面跟着参数，其中每个参数都对应一个格式说明符。
```java
public class SimpleFormat {
  public static void main(String[] args) {
    int x = 5;
    double y = 5.332542;
    // The old way:
    System.out.println("Row 1: [" + x + " " + y + "]");
    // The new way:
    System.out.format("Row 1: [%d %f]%n", x, y);
    // or
    System.out.printf("Row 1: [%d %f]%n", x, y);
  }
}
/* Output:
Row 1: [5 5.332542]
Row 1: [5 5.332542]
Row 1: [5 5.332542]
*/
```
#### Formatter类
Java中所有的格式化功能都由java.util包里的Formatter类处理。可以把Formatter类视为一个转换器，将格式化字符串和数据转换为想要的结果。
当创建一个Formatter对象时，可以将信息传递给构造器，来表明希望将结果输出到哪里。
```java
import java.io.*;
import java.util.*;

public class Turtle {
  private String name;
  private Formatter f;
  public Turtle(String name, Formatter f) {
    this.name = name;
    this.f = f;
  }
  public void move(int x, int y) {
    f.format("%s The Turtle is at (%d,%d)%n",
      name, x, y);
  }
  public static void main(String[] args) {
    PrintStream outAlias = System.out;
    Turtle tommy = new Turtle("Tommy",
      new Formatter(System.out));
    Turtle terry = new Turtle("Terry",
      new Formatter(outAlias));
    tommy.move(0,0);
    terry.move(4,8);
    tommy.move(3,4);
    terry.move(2,5);
    tommy.move(3,3);
    terry.move(3,3);
  }
}
```
#### 格式说明符
```java
import java.util.*;

public class ReceiptBuilder {
  private double total = 0;
  private Formatter f =
    new Formatter(new StringBuilder());
  public ReceiptBuilder() {
    f.format(
      "%-15s %5s %10s%n", "Item", "Qty", "Price");
    f.format(
      "%-15s %5s %10s%n", "----", "---", "-----");
  }
  public void add(String name, int qty, double price) {
    f.format("%-15.15s %5d %10.2f%n", name, qty, price);
    total += price * qty;
  }
  public String build() {
    f.format("%-15s %5s %10.2f%n", "Tax", "",
      total * 0.06);
    f.format("%-15s %5s %10s%n", "", "", "-----");
    f.format("%-15s %5s %10.2f%n", "Total", "",
      total * 1.06);
    return f.toString();
  }
  public static void main(String[] args) {
    ReceiptBuilder receiptBuilder =
      new ReceiptBuilder();
    receiptBuilder.add("Jack's Magic Beans", 4, 4.25);
    receiptBuilder.add("Princess Peas", 3, 5.1);
    receiptBuilder.add(
      "Three Bears Porridge", 1, 14.29);
    System.out.println(receiptBuilder.build());
  }
}
/* Output:
Item              Qty      Price
----              ---      -----
Jack's Magic Be     4       4.25
Princess Peas       3       5.10
Three Bears Por     1      14.29
Tax                         2.80
                           -----
Total                      49.39
*/
```
width指定字段至少达到一定数量的字符宽度，不够时用空格来填充。默认情况下数据是右对齐的，可以使用“-”标记改为左对齐。
精度precision用小数点加数字表示，用于指定字段长度的最大值。对于字符串，precision指定了字符串的最大输出字符数。对于浮点数，precision指定了要显示的小数位数。整数不适用precision。

字符  效果
d     整数类型（十进制）
c     Unicode字符
b    Boolean值
s     字符串
f     浮点数（十进制）
e    浮点数（科学记数法）
x    整数类型（十六进制）
h   哈希码（十六进制）
%  字面量 "%"

#### String.format()
String.format()返回一个String。
```java
public class DatabaseException extends Exception {
  public DatabaseException(int transactionID,
    int queryID, String message) {
    super(String.format("(t%d, q%d) %s", transactionID,
        queryID, message));
  }
  public static void main(String[] args) {
    try {
      throw new DatabaseException(3, 7, "Write failed");
    } catch(Exception e) {
      System.out.println(e);
    }
  }
}
/* Output:
DatabaseException: (t3, q7) Write failed
*/
```
十六进制转储工具：
```java
package onjava;
import java.io.*;
import java.nio.file.*;

public class Hex {
  public static String format(byte[] data) {
    StringBuilder result = new StringBuilder();
    int n = 0;
    for(byte b : data) {
      if(n % 16 == 0)
        result.append(String.format("%05X: ", n));
      result.append(String.format("%02X ", b));
      n++;
      if(n % 16 == 0) result.append("\n");
    }
    result.append("\n");
    return result.toString();
  }
  public static void
  main(String[] args) throws Exception {
    if(args.length == 0)
      // Test by displaying this class file:
      System.out.println(format(
        Files.readAllBytes(Paths.get(
          "onjava/build/classes/java/main/onjava/Hex.class"))));
    else
      System.out.println(format(
        Files.readAllBytes(Paths.get(args[0]))));
  }
}
/* Output: (First 6 Lines)
00000: CA FE BA BE 00 00 00 34 00 61 0A 00 05 00 31 07
00010: 00 32 0A 00 02 00 31 08 00 33 07 00 34 0A 00 35
00020: 00 36 0A 00 0F 00 37 0A 00 02 00 38 08 00 39 0A
00030: 00 3A 00 3B 08 00 3C 0A 00 02 00 3D 09 00 3E 00
00040: 3F 08 00 40 07 00 41 0A 00 42 00 43 0A 00 44 00
00050: 45 0A 00 14 00 46 0A 00 47 00 48 07 00 49 01 00
                  ...
*/
```
### 正则表达式
#### 基础
正则表达式是用通用术语来描述字符串。
-? 表示可能有也可能没有问号
\d 表示一个数字，但是Java的正则表达式中要用\\d表示一个数字。Java正则表达式中，\\表示插入一个正则表达式反斜杠，要插入普通的反斜杠，需要用\\\\。
但是换行符和制表符之类的符号只使用一个反斜杠：\n \t 。
以下示例展示了Java中普通字符串反斜杠和正则表达式反斜杠之间的区别。
```java
public class BackSlashes {
  public static void main(String[] args) {
    String one = "\\";
    String two = "\\\\";
    String three = "\\\\\\";
    System.out.println(one);
    System.out.println(two);
    System.out.println(three);
    System.out.println(one.matches("\\\\"));
    System.out.println(two.matches("\\\\\\\\"));
    System.out.println(three.matches("\\\\\\\\\\\\"));
  }
}
/* Output:
\
\\
\\\
true
true
true
*/
```
可以看到在一个普通字符串中需要两个反斜杠来生成一个反斜杠，而在正则表达式中需要四个反斜杠才能与单个反斜杠匹配。
#### 创建正则表达式
在正则表达式中表示”前面有一个或多个“，使用“+”，例如”前面可能有一个减号，后面跟着一个或多个数字“对应的正则表达式为 **-?\\d+**
正则表达式中括号可以将表达式分组，竖线|表示”或“操作
**(-|\\+)?** 表示-、+或什么都没有。+字符在正则表达式有特殊意义，所以用\\转义成普通字符。
**\\W** 表示非单词字符，小写的 **\\w** 表示单词字符。
![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1708476078812-dd909102-2f3c-4cb2-bb9b-9dd078e94cb8.png#averageHue=%23f4f4f4&clientId=u9d0d7b0d-ac71-4&from=paste&height=529&id=u42b4a8f8&originHeight=794&originWidth=1221&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=42715&status=done&style=shadow&taskId=u09350e97-d9d4-4885-bf2e-b816b1706b0&title=&width=814)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1708476132092-0606c4a8-4319-4039-ac7b-4bd41e769364.png#averageHue=%23f5f5f5&clientId=u9d0d7b0d-ac71-4&from=paste&height=887&id=u63ba5d29&originHeight=1331&originWidth=1236&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=89955&status=done&style=shadow&taskId=u77ef0eb6-106e-4bbf-a74b-5fd29106bb8&title=&width=824)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1708476222996-70f25e76-4bd9-489d-978f-cf0d0b9a6ac6.png#averageHue=%23f4f4f4&clientId=u9d0d7b0d-ac71-4&from=paste&height=267&id=u3433af9e&originHeight=401&originWidth=1221&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=29726&status=done&style=shadow&taskId=u0897837a-766e-41b5-8a68-9c7a6882d5c&title=&width=814)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1708476254902-4506eaf4-02db-4c66-b348-8b59b4def5ba.png#averageHue=%23f5f5f5&clientId=u9d0d7b0d-ac71-4&from=paste&height=486&id=ud26fe13c&originHeight=729&originWidth=1219&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=26774&status=done&style=shadow&taskId=uebef511c-ee90-4f83-8c01-ee7d6531808&title=&width=812.6666666666666)

| * | 匹配前面的子表达式零次或多次。要匹配 * 字符，请使用 \\*。 |
| --- | --- |

更相信参考菜鸟教程[https://www.runoob.com/regexp/regexp-syntax.html](https://www.runoob.com/regexp/regexp-syntax.html)
```java
public class Rudolph {
  public static void main(String[] args) {
    for(String pattern : new String[]{
      "Rudolph",
      "[rR]udolph",
      "[rR][aeiou][a-z]ol.*",
      "R.*" })
      System.out.println("Rudolph".matches(pattern));
  }
}
/* Output:
true
true
true
true
*/
```
#### 量词
量词（quantifier）描述了一个正则表达式模式处理输入文本的方式（见表18-7）。
● 贪婪型
量词默认是贪婪的，除非另有设置。贪婪型表达式会为模式找到尽可能多的匹配项，这可能会导致问题。我们经常会犯的一个错误就是，认为自己的模式只会匹配第一个可能的字符组，但实际上它是贪婪的，会一直持续执行，直到找到最大的匹配字符串。
● 勉强型
用问号来指定，这个量词会匹配满足模式所需的最少字符数。也称为惰性匹配、最小匹配、非贪婪匹配或不贪婪匹配。
● 占有型
目前这种类型仅适用于Java（不适用于其他语言），这是一个更高级的功能，因此你可能不会立即使用它。当正则表达式应用于字符串时，它会生成许多状态，以便在匹配失败时可以回溯。占有型量词不会保留这些中间状态，因此可以防止回溯。这还可以防止正则表达式运行时失控，并使其执行更有效。
![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1708476945665-bedb1ca2-0040-449d-9093-42acaae22cce.png#averageHue=%23f3f3f3&clientId=u9d0d7b0d-ac71-4&from=paste&height=415&id=u49157158&originHeight=623&originWidth=1211&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=42813&status=done&style=shadow&taskId=ue01c3fe6-660e-44a5-9a7e-9c052cddc0d&title=&width=807.3333333333334)

#### Pattern和Matcher
通常我们会编译正则表达式对象，而不是使用功能相当有限的String。只需要导入java.util.regex包，然后使用静态方法Pattern.compile()编译正则表达式即可。它会根据自己的字符串参数来生成一个Pattern对象，可以通过matcher()方法来使用这个Pattern，对传递的String进行搜索。
```java
import java.util.regex.*;

public class TestRegularExpression {
  public static void main(String[] args) {
    if(args.length < 2) {
      System.out.println(
        "Usage:\njava TestRegularExpression " +
        "characterSequence regularExpression+");
      System.exit(0);
    }
    System.out.println("Input: \"" + args[0] + "\"");
    for(String arg : args) {
      System.out.println(
        "Regular expression: \"" + arg + "\"");
      Pattern p = Pattern.compile(arg);
      Matcher m = p.matcher(args[0]);
      while(m.find()) {
        System.out.println(
          "Match \"" + m.group() + "\" at positions " +
          m.start() + "-" + (m.end() - 1));
      }
    }
  }
}
/* Output:
Input: "abcabcabcdefabc"
Regular expression: "abcabcabcdefabc"
Match "abcabcabcdefabc" at positions 0-14
Regular expression: "abc+"
Match "abc" at positions 0-2
Match "abc" at positions 3-5
Match "abc" at positions 6-8
Match "abc" at positions 12-14
Regular expression: "(abc)+"
Match "abcabcabc" at positions 0-8
Match "abc" at positions 12-14
*/
```
Matcher对象提供的方法：
![image.png](https://cdn.nlark.com/yuque/0/2024/png/28229445/1708480751535-6c111697-6cf1-4aa8-a153-ef4f47a0e092.png#averageHue=%23f3f3f3&clientId=u9d0d7b0d-ac71-4&from=paste&height=88&id=u05b04b9f&originHeight=132&originWidth=320&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=13923&status=done&style=shadow&taskId=u9fd90488-1892-40c9-a266-d1faf07d026&title=&width=213.33333333333334)
matches()仅在整个字符串都与正则表达式匹配时才会成功。
lookingAt()仅在字符串的开始位置匹配正则表达式才会成功，不要求整个字符串都匹配。
find()可以查找多个匹配，就像一个迭代器，会向前遍历输入的字符串。find（int start）的参数表示搜索开始的字符位置。

##### 分组
分组(group)是用括号括起来的正则表达式。后续代码里可以用分组号来调用它们。分组0表示整个分组，分组1表示第一个带括号的分组。
```java
import java.util.regex.*;

public class Groups {
  public static final String POEM =
    "Twas brillig, and the slithy toves\n" +
    "Did gyre and gimble in the wabe.\n" +
    "All mimsy were the borogoves,\n" +
    "And the mome raths outgrabe.\n\n" +
    "Beware the Jabberwock, my son,\n" +
    "The jaws that bite, the claws that catch.\n" +
    "Beware the Jubjub bird, and shun\n" +
    "The frumious Bandersnatch.";
  public static void main(String[] args) {
    Matcher m = Pattern.compile(
      "(?m)(\\S+)\\s+((\\S+)\\s+(\\S+))$")
      .matcher(POEM);
    while(m.find()) {
      for(int j = 0; j <= m.groupCount(); j++)
        System.out.print("[" + m.group(j) + "]");
      System.out.println();
    }
  }
}
```
\\s空白字符 
\\S 非空白字符
$ 行尾 (?m)模式标记，后面介绍。
group()方法返回匹配的部分。

##### start()和end()
在匹配成功后，matcher.start()返回本次匹配结果的起始索引，end()返回本次匹配结果最后一个字符的索引加一。
##### Pattern标记
compile（）方法有一个重载版本，可以接受一个标记参数，来影响匹配行为。
Pattern Pattern.compile(String regex, int flag)
其中flag来自Pattern类中的常量，见下表。

| 编译标记 | 效果 |
| --- | --- |
| Pattern.CANON_EQ | 当且仅当两个字符的完全正则分解匹配时，才认为它们匹配。例如，当指定此
标记时，表达式 \\u003F 将匹配字符串 ? 。默认情况下，匹配不考虑正则的等价
性 |
| Pattern.CASE_INSENSITIVE (?i) | 默认情况下，匹配仅在US-ASCII字符集中进行时才不区分大小写。这个标记允
许模式匹配时不考虑大小写。可以通过指定 UNICODE_CASE 标记，并结合这个标
记来在Unicode字符集里启用不区分大小写的匹配 |
| Pattern.COMMENTS (?x) | 在这种模式下，空白符被忽略，并且以 ## 开头的嵌入注释也会被忽略，直到行
尾。UNIX的行模式也可以通过嵌入的标记表达式来启用 |
| Pattern.DOTALL (?s) | dotall模式下，表达式 . 匹配任何字符，包括换行符。默认情况下， . 表达式不
匹配换行符 |
| Pattern.MULTILINE (?m) | 在多行模式下，表达式 ^ 和 $ 分别匹配一行的开头和结尾。此外， ^ 匹配输入字
符串的开头， $ 匹配输入字符串的结尾。默认情况下，这些表达式仅匹配整个输入字符串的开头和结尾 |
| Pattern.UNICODE_CASE (?u) | 指定了这个标记，并且同时启用了 CASE_INSENSITIVE 标记时，不区分大小写
的匹配将以符合Unicode标准的方式完成。默认情况下，匹配仅在US-ASCII字符集中进行时才不区分大小写 |
| Pattern.UNIX_LINES (?d) | 这种模式下，在 . 、 ^ 和 $ 的行为里，只有换行符 \\n 被识别 |

```java
import java.util.regex.*;

public class ReFlags {
  public static void main(String[] args) {
    Pattern p =  Pattern.compile("^java",
      Pattern.CASE_INSENSITIVE | Pattern.MULTILINE);
    Matcher m = p.matcher(
      "java has regex\nJava has regex\n" +
      "JAVA has pretty good regular expressions\n" +
      "Regular expressions are in Java");
    while(m.find())
      System.out.println(m.group());
  }
}
/* Output:
java
Java
JAVA
*/
```

#### split()
split()根据输入的正则表达式来拆分字符串，然后返回拆分后的字符串对象数组。
```java
import java.util.regex.*;
import java.util.*;

public class SplitDemo {
  public static void main(String[] args) {
    String input =
      "This!!unusual use!!of exclamation!!points";
    System.out.println(Arrays.toString(
      Pattern.compile("!!").split(input)));
    // Only do the first three:
    System.out.println(Arrays.toString(
      Pattern.compile("!!").split(input, 3)));
  }
}
/* Output:
[This, unusual use, of exclamation, points]
[This, unusual use, of exclamation!!points]
*/
```
#### 替换操作
● replaceFirst()用参数replacement替换输入字符串的第一个匹配的部分。
● replaceAll()用参数replacement替换输入字符串的每个匹配的部分。
● appendReplacement(StringBuffer sbuf, String replacement)执行逐步替换，并保存到sbuf中，而不是像replaceFirst()和replaceAll()那样分别替换第一个匹配和全部匹配。这是一个非常重要的方法，因为你可以调用其他方法来处理或生成replacement（replaceFirst()和replaceAll()只能放入固定的字符串）。使用此方法，你能够以编程的方式进行分组，从而创建更强大的替换功能。
● 在 调 用 了 一 次 或 多 次 appendReplacement() 方 法 后， 可 以 再 调 用appendTail(StringBuffer sbuf)方法，将输入字符串的剩余部分复制到sbuf。
```java
import java.util.regex.*;
import java.nio.file.*;
import java.util.stream.*;

/*! Here's a block of text to use as input to
    the regular expression matcher. Note that we
    first extract the block of text by looking for
    the special delimiters, then process the
    extracted block. !*/

public class TheReplacements {
  public static void
  main(String[] args) throws Exception {
    String s = Files.lines(
      Paths.get("strings","TheReplacements.java"))
      .collect(Collectors.joining("\n"));
    // Match specially commented block of text above:
    Matcher mInput = Pattern.compile(
      "/\\*!(.*)!\\*/", Pattern.DOTALL).matcher(s);
    if(mInput.find())
      s = mInput.group(1); // Captured by parentheses
    // Replace two or more spaces with a single space:
    s = s.replaceAll(" {2,}", " ");
    // Replace 1+ spaces at the beginning of each
    // line with no spaces. Must enable MULTILINE mode:
    s = s.replaceAll("(?m)^ +", "");
    System.out.println(s);
    s = s.replaceFirst("[aeiou]", "(VOWEL1)");
    StringBuffer sbuf = new StringBuffer();
    Pattern p = Pattern.compile("[aeiou]");
    Matcher m = p.matcher(s);
    // Process the find information as you
    // perform the replacements:
    while(m.find())
      m.appendReplacement(
        sbuf, m.group().toUpperCase());
    // Put in the remainder of the text:
    m.appendTail(sbuf);
    System.out.println(sbuf);
  }
}
/* Output:
Here's a block of text to use as input to
the regular expression matcher. Note that we
first extract the block of text by looking for
the special delimiters, then process the
extracted block.
H(VOWEL1)rE's A blOck Of tExt tO UsE As InpUt tO
thE rEgUlAr ExprEssIOn mAtchEr. NOtE thAt wE
fIrst ExtrAct thE blOck Of tExt by lOOkIng fOr
thE spEcIAl dElImItErs, thEn prOcEss thE
ExtrActEd blOck.
*/
```
#### reset()
可以使用reset()方法将现有的Matcher对象应用于新的字符序列。
```java
import java.util.regex.*;

public class Resetting {
  public static void
  main(String[] args) throws Exception {
    Matcher m = Pattern.compile("[frb][aiu][gx]")
      .matcher("fix the rug with bags");
    while(m.find())
      System.out.print(m.group() + " ");
    System.out.println();
    m.reset("fix the rig with rags");
    while(m.find())
      System.out.print(m.group() + " ");
  }
}
/* Output:
fix rug bag
fix rig rag
*/
```
#### 正则表达式和Java I/O
下面示例演示了如何用正则表达式来搜索文件中的匹配项。
```java
import java.util.regex.*;
import java.nio.file.*;
import java.util.stream.*;

public class JGrep {
  public static void
  main(String[] args) throws Exception {
    if(args.length < 2) {
      System.out.println(
        "Usage: java JGrep file regex");
      System.exit(0);
    }
    Pattern p = Pattern.compile(args[1]);
    Matcher m = p.matcher("");
    // Iterate through the lines of the input file:
    Files.readAllLines(Paths.get(args[0])).forEach(
      line -> {
        m.reset(line);
        while(m.find())
          System.out.println(
            m.group() + ": " + m.start());
      }
    );
  }
}

```

### 扫描输入
```java
import java.io.*;

public class SimpleRead {
  public static BufferedReader input =
    new BufferedReader(new StringReader(
    "Sir Robin of Camelot\n22 1.61803"));
  public static void main(String[] args) {
    try {
      System.out.println("What is your name?");
      String name = input.readLine();
      System.out.println(name);
      System.out.println("How old are you? " +
        "What is your favorite double?");
      System.out.println("(input: <age> <double>)");
      String numbers = input.readLine();
      System.out.println(numbers);
      String[] numArray = numbers.split(" ");
      int age = Integer.parseInt(numArray[0]);
      double favorite = Double.parseDouble(numArray[1]);
      System.out.format("Hi %s.%n", name);
      System.out.format("In 5 years you will be %d.%n",
        age + 5);
      System.out.format("My favorite double is %f.",
        favorite / 2);
    } catch(IOException e) {
      System.err.println("I/O exception");
    }
  }
}
/* Output:
What is your name?
Sir Robin of Camelot
How old are you? What is your favorite double?
(input: <age> <double>)
22 1.61803
Hi Sir Robin of Camelot.
In 5 years you will be 27.
My favorite double is 0.809015.
*/
```
java5引入的Scanner类更好用：
```java
import java.util.*;

public class BetterRead {
  public static void main(String[] args) {
    Scanner stdin = new Scanner(SimpleRead.input);
    System.out.println("What is your name?");
    String name = stdin.nextLine();
    System.out.println(name);
    System.out.println(
      "How old are you? What is your favorite double?");
    System.out.println("(input: <age> <double>)");
    int age = stdin.nextInt();
    double favorite = stdin.nextDouble();
    System.out.println(age);
    System.out.println(favorite);
    System.out.format("Hi %s.%n", name);
    System.out.format("In 5 years you will be %d.%n",
      age + 5);
    System.out.format("My favorite double is %f.",
      favorite / 2);
  }
}
```
Scanner的构造器可以接受任何类型的输入对象，包括File对象、InputStream、String，或者此例里的Readable接口（用于描述具有read方法的东西)。
默认情况下，Scanner通过空格分割输入数据，但也可以用正则表达式的形式来指定自己的分隔符模式：
```java
import java.util.*;

public class ScannerDelimiter {
  public static void main(String[] args) {
    Scanner scanner = new Scanner("12, 42, 78, 99, 42");
    scanner.useDelimiter("\\s*,\\s*");
    while(scanner.hasNextInt())
      System.out.println(scanner.nextInt());
  }
}
/* Output:
12
42
78
99
42
*/
```
此示例使用逗号（由任意数量的空白符包围）作为分隔符，来处理读取的给定字符串。

除了扫描预定义的基本类型，还可以用自己定义的正则表达式模式来扫描，见下面的示例：
```java
import java.util.regex.*;
import java.util.*;

public class ThreatAnalyzer {
  static String threatData =
    "58.27.82.161@08/10/2015\n" +
    "204.45.234.40@08/11/2015\n" +
    "58.27.82.161@08/11/2015\n" +
    "58.27.82.161@08/12/2015\n" +
    "58.27.82.161@08/12/2015\n" +
    "[Next log section with different data format]";
  public static void main(String[] args) {
    Scanner scanner = new Scanner(threatData);
    String pattern = "(\\d+[.]\\d+[.]\\d+[.]\\d+)@" +
      "(\\d{2}/\\d{2}/\\d{4})";
    while(scanner.hasNext(pattern)) {
      scanner.next(pattern);
      MatchResult match = scanner.match();
      String ip = match.group(1);
      String date = match.group(2);
      System.out.format(
        "Threat on %s from %s%n", date,ip);
    }
  }
}
/* Output:
Threat on 08/10/2015 from 58.27.82.161
Threat on 08/11/2015 from 204.45.234.40
Threat on 08/11/2015 from 58.27.82.161
Threat on 08/12/2015 from 58.27.82.161
Threat on 08/12/2015 from 58.27.82.161
*/

```

## 反射
### Class对象
Class对象包含了与类相关的信息。程序中的每个类都有一个Class对象，每次编写并编译一个类时，都会生成一个Class对象，并被存储在同名的.class文件中。
类在首次使用时才会被动态加载到JVM（Java虚拟机）中。当程序第一次引用该类的静态成员时，就会触发这个类的加载。构造器是类的一个静态方法（尽管没有明确使用static关键字）。因此，new操作符创建类的新对象也会触发该类的加载。
类加载器首先检查是否加载了该类型的Class对象，如果没有，默认的类加载器会定位到具有同名的.class文件。一旦该类型的Class对象加载到内存中，它就被用来创建类的所有常规对象。
所有的Class对象都属于Class类。Class类有一个静态的forName()方法，接受一个类的文本名称，返回一个该类的Class引用。
一个具体的对象可以通过getClass()方法获得它的Class引用。

Class类的一些方法：

- getName()
- getSimpleName()
- getCanonicalName()
- isInterface()
- getSuperclass()
- newInstance() Java8更高版本已弃用
- getConstructor().newInstance()

也可以使用类字面量来生成Class对象的引用，如Class a = Toys.class ;
使用.class形式创建Class对象的引用时，该Class对象不会自动初始化。初始化会被延迟到首次引用静态方法（构造器是隐式静态的）或非常量静态字段时。而Class.forName()会立即初始化。
使用一个类之间要经过加载、链接、初始化的3个步骤。
#### 泛型Class的引用
```text
可以使用泛型语法来限制Class引用的类型。
Class<Integar> a = Integar.class ; //只能引用Integar类
Class<?> a = Integar.class ; // 可以引用任何类
Class<? extends Number> a = Integar.class ; //可以引用Number或其任意子类
Class<? super FancyToy> up = ft.getSuperclass(); //引用FancyToy的父类
```

 
cast()类型转换：
```java
class Building {}
class House extends Building {}

public class ClassCasts {
  public static void main(String[] args) {
    Building b = new House();
    Class<House> houseType = House.class;
    House h = houseType.cast(b);
    h = (House)b; // ... or just do this.
  }
}
```
 
在转型之前可以使用instanceof关键字来做判断，避免转型失败。
if(x instanceof Dog)
   ((Dog) x).bark() ;

Class.isInstance(object)方法可以验证参数提供的object对象是不是我们的Class引用类的实例对象。可以替代instanceof语句。
```java
package reflection;

class Base {}
class Derived extends Base {}

public class FamilyVsExactType {
  static void test(Object x) {
    System.out.println(
      "Testing x of type " + x.getClass());
    System.out.println(
      "x instanceof Base " + (x instanceof Base));
    System.out.println(
      "x instanceof Derived " + (x instanceof Derived));
    System.out.println(
      "Base.isInstance(x) " + Base.class.isInstance(x));
    System.out.println(
      "Derived.isInstance(x) " +
      Derived.class.isInstance(x));
    System.out.println(
      "x.getClass() == Base.class " +
      (x.getClass() == Base.class));
    System.out.println(
      "x.getClass() == Derived.class " +
      (x.getClass() == Derived.class));
    System.out.println(
      "x.getClass().equals(Base.class)) "+
      (x.getClass().equals(Base.class)));
    System.out.println(
      "x.getClass().equals(Derived.class)) " +
      (x.getClass().equals(Derived.class)));
  }
  public static void main(String[] args) {
    test(new Base());
    test(new Derived());
  }
}
/* Output:
Testing x of type class reflection.Base
x instanceof Base true
x instanceof Derived false
Base.isInstance(x) true
Derived.isInstance(x) false
x.getClass() == Base.class true
x.getClass() == Derived.class false
x.getClass().equals(Base.class)) true
x.getClass().equals(Derived.class)) false
Testing x of type class reflection.Derived
x instanceof Base true
x instanceof Derived true
Base.isInstance(x) true
Derived.isInstance(x) true
x.getClass() == Base.class false
x.getClass() == Derived.class true
x.getClass().equals(Base.class)) false
x.getClass().equals(Derived.class)) true
*/
```

Class.isAssignableFrom(type)方法可以验证type参数的Class引用是否是我们Class的派生类。即当前的Class对象所表示的类，是不是参数中传递的Class对象所表示的类的父类，超接口，或者是相同的类型。是则返回true，否则返回false。
### 运行时的类信息
Class类和java.lang.reflect库一起支持了反射。这个库里包含了Field、Method和Constructor类（每个都实现了Member接口）。这些类是JVM在运行时创建的，用来表示未知类中对应的成员。
可以使用Constructor来创建新的对象，使用get()和set()方法来读取和修改与Field对象关联的字段，使用invoke()方法调用与Method对象关联的方法。
可以调用getFields()、getMethods()和getConstructor()方法，来返回表示字段、方法和构造器的对象数组。
```java
import java.lang.reflect.*;
import java.util.regex.*;

public class ShowMethods {
  private static String usage =
    "usage:\n" +
    "ShowMethods qualified.class.name\n" +
    "To show all methods in class or:\n" +
    "ShowMethods qualified.class.name word\n" +
    "To search for methods involving 'word'";
  private static Pattern p = Pattern.compile("\\w+\\.");
  public static void main(String[] args) {
    if(args.length < 1) {
      System.out.println(usage);
      System.exit(0);
    }
    int lines = 0;
    try {
      Class<?> c = Class.forName(args[0]);
      Method[] methods = c.getMethods();
      Constructor[] ctors = c.getConstructors();
      if(args.length == 1) {
        for(Method method : methods)
          System.out.println(
            p.matcher(
              method.toString()).replaceAll(""));
        for(Constructor ctor : ctors)
          System.out.println(
            p.matcher(ctor.toString()).replaceAll(""));
        lines = methods.length + ctors.length;
      } else {
        for(Method method : methods)
          if(method.toString().contains(args[1])) {
            System.out.println(p.matcher(
              method.toString()).replaceAll(""));
            lines++;
          }
        for(Constructor ctor : ctors)
          if(ctor.toString().contains(args[1])) {
            System.out.println(p.matcher(
              ctor.toString()).replaceAll(""));
            lines++;
          }
      }
    } catch(ClassNotFoundException e) {
      System.out.println("No such class: " + e);
    }
  }
}
/* Output:
public static void main(String[])
public final void wait(long,int) throws
InterruptedException
public final native void wait(long) throws
InterruptedException
public final void wait() throws InterruptedException
public boolean equals(Object)
public String toString()
public native int hashCode()
public final native Class getClass()
public final native void notify()
public final native void notifyAll()
public ShowMethods()
*/
```
### 动态代理
代理是一种基本的设计模式。它是为了代替实际对象而插入的一个对象，从而提供额外的或不同的操作。
```java
interface Interface {
  void doSomething();
  void somethingElse(String arg);
}

class RealObject implements Interface {
  @Override public void doSomething() {
    System.out.println("doSomething");
  }
  @Override public void somethingElse(String arg) {
    System.out.println("somethingElse " + arg);
  }
}

class SimpleProxy implements Interface {
  private Interface proxied;
  SimpleProxy(Interface proxied) {
    this.proxied = proxied;
  }
  @Override public void doSomething() {
    System.out.println("SimpleProxy doSomething");
    proxied.doSomething();
  }
  @Override public void somethingElse(String arg) {
    System.out.println(
      "SimpleProxy somethingElse " + arg);
    proxied.somethingElse(arg);
  }
}

class SimpleProxyDemo {
  public static void consumer(Interface iface) {
    iface.doSomething();
    iface.somethingElse("bonobo");
  }
  public static void main(String[] args) {
    consumer(new RealObject());
    consumer(new SimpleProxy(new RealObject()));
  }
}
/* Output:
doSomething
somethingElse bonobo
SimpleProxy doSomething
doSomething
SimpleProxy somethingElse bonobo
somethingElse bonobo
*/
```
Java的动态代理可以动态地创建代理，并动态地处理对所代理方法的调用。以下是使用动态代理重写的上述示例：
```java
import java.lang.reflect.*;

class DynamicProxyHandler implements InvocationHandler {
  private Object proxied;
  DynamicProxyHandler(Object proxied) {
    this.proxied = proxied;
  }
  @Override public Object
  invoke(Object proxy, Method method, Object[] args)
  throws Throwable {
    System.out.println(
      "**** proxy: " + proxy.getClass() +
      ", method: " + method + ", args: " + args);
    if(args != null)
      for(Object arg : args)
        System.out.println("  " + arg);
    return method.invoke(proxied, args);
  }
}

class SimpleDynamicProxy {
  public static void consumer(Interface iface) {
    iface.doSomething();
    iface.somethingElse("bonobo");
  }
  public static void main(String[] args) {
    RealObject real = new RealObject();
    consumer(real);
    // Insert a proxy and call again:
    Interface proxy = (Interface)Proxy.newProxyInstance(
      Interface.class.getClassLoader(),
      new Class[]{ Interface.class },
      new DynamicProxyHandler(real));
    consumer(proxy);
  }
}
/* Output:
doSomething
somethingElse bonobo
**** proxy: class $Proxy0, method: public abstract void
Interface.doSomething(), args: null
doSomething
**** proxy: class $Proxy0, method: public abstract void
Interface.somethingElse(java.lang.String), args:
[Ljava.lang.Object;@1b84c92
  bonobo
somethingElse bonobo
*/

```
以上代码中为什么要定义成员变量proxied，在invoke()方法里，为什么不直接使用方法参数里的proxy对象？
在这段代码中，成员变量`proxied`是用来存储实际被代理的对象引用的。在创建`DynamicProxyHandler`实例时，通过构造函数将需要代理的真实对象传递给`proxied`变量。这样做的原因是`invoke()`方法在执行时需要调用原始对象（即`proxied`）的方法，而不是调用代理对象（即`proxy`）自身的方法。

`proxy`参数在`invoke()`方法中代表的是由`Proxy.newProxyInstance()`方法动态创建的代理对象。这个代理对象虽然继承了目标对象的接口，但其本身并不具备具体业务逻辑，它的存在主要是为了拦截和转发对目标对象方法的调用。因此，在`invoke()`方法内部，我们需要使用`proxied`变量来调用实际对象的方法，这样才能真正执行目标对象的业务逻辑。

简而言之，`proxy`和`proxied`的区别在于：

- `proxy`是代理对象，它持有`InvocationHandler`实例，并且在方法调用时负责触发`invoke()`方法。
- `proxied`是被代理的真实对象，它封装了实际的业务逻辑和状态，`invoke()`方法通过调用`method.invoke(proxied, args)`来间接执行真实对象的方法。
### 使用Optional
null表示对象不存在时，为了确保安全，每次使用对象的引用时都要测试它是否为null，因为null没有自己的行为，对null尝试做任何事情都会抛出异常NullPointerException。
java.util.Optional创建了一个简单的代理来屏蔽潜在的null值，阻止代码抛出异常NullPointerException。
```java
// reflection/Person.java
// (c)2021 MindView LLC: see Copyright.txt
// We make no guarantees that this code is fit for any purpose.
// Visit http://OnJava8.com for more book information.
// Using Optional with regular classes
import onjava.*;
import java.util.*;

class Person {
  public final Optional<String> first;
  public final Optional<String> last;
  public final Optional<String> address;
  // etc.
  public final boolean empty;
  Person(String first, String last, String address) {
    this.first = Optional.ofNullable(first);
    this.last = Optional.ofNullable(last);
    this.address = Optional.ofNullable(address);
    empty = !this.first.isPresent()
         && !this.last.isPresent()
         && !this.address.isPresent();
  }
  Person(String first, String last) {
    this(first, last, null);
  }
  Person(String last) { this(null, last, null); }
  Person() { this(null, null, null); }
  @Override public String toString() {
    if(empty)
      return "<Empty>";
    return (first.orElse("") +
      " " + last.orElse("") +
      " " + address.orElse("")).trim();
  }
  public static void main(String[] args) {
    System.out.println(new Person());
    System.out.println(new Person("Smith"));
    System.out.println(new Person("Bob", "Smith"));
    System.out.println(new Person("Bob", "Smith",
      "11 Degree Lane, Frostbite Falls, MN"));
  }
}
/* Output:
<Empty>
Smith
Bob Smith
Bob Smith 11 Degree Lane, Frostbite Falls, MN
*/

```
### 接口和类型信息
可以通过反射来访问并调用所有方法，甚至包括private的方法。如果知道方法的名称，可以通过调用Method对象的setAccessible(true)来设置，从而让这个方法可以被访问。
```java
package reflection.packageaccess;
import reflection.interfacea.*;

class C implements A {
  @Override public void f() {
    System.out.println("public C.f()");
  }
  public void g() {
    System.out.println("public C.g()");
  }
  void u() {
    System.out.println("package C.u()");
  }
  protected void v() {
    System.out.println("protected C.v()");
  }
  private void w() {
    System.out.println("private C.w()");
  }
}

public class HiddenC {
  public static A makeA() { return new C(); }
}
```
```java
import reflection.interfacea.*;
import reflection.packageaccess.*;
import java.lang.reflect.*;

public class HiddenImplementation {
  public static void
  main(String[] args) throws Exception {
    A a = HiddenC.makeA();
    a.f();
    System.out.println(a.getClass().getName());
    // Compile error: cannot find symbol 'C':
    /* if(a instanceof C) {
      C c = (C)a;
      c.g();
    } */
    // Oops! Reflection still allows us to call g():
    callHiddenMethod(a, "g");
    // And even less accessible methods!
    callHiddenMethod(a, "u");
    callHiddenMethod(a, "v");
    callHiddenMethod(a, "w");
  }
  static void
  callHiddenMethod(Object a, String methodName)
  throws Exception {
    Method g =
      a.getClass().getDeclaredMethod(methodName);
    g.setAccessible(true);
    g.invoke(a);
  }
}
/* Output:
public C.f()
reflection.packageaccess.C
public C.g()
package C.u()
protected C.v()
private C.w()
*/
```
## 泛型
泛型的概念：
如果可以让代码只需依赖于“某种不具体制定的类型”，而不是某个特定的类或接口，那么就可以编写出更通用的代码。
泛型的初衷是通过解除类或方法所受的类型限制，尽可能让程序员在编写类或方法时拥有尽量丰富的想象力。

### 泛型类
```text
类名后跟<T>的语法即为泛型类，T是类型参数。
```

示例：
#### 元组
常常需要通过一次方法调用返回多个对象，而return语句只能返回一个对象。解决办法就是创建一个可持有多个对象的对象，然后返回该对象。
元组 就是将一组对象一起包装进了一个对象。该对象的接受方可以读取其中的元素，但不能往里放入新元素。（这个概念也称为数据传输对象或信使）
```java
package onjava;

public class Tuple2<A, B> {
  public final A a1;
  public final B a2;
  public Tuple2(A a, B b) { a1 = a; a2 = b; }
  public String rep() { return  a1 + ", " + a2; }
  @Override public String toString() {
    return "(" + rep() + ")";
  }
}
```
```java
package onjava;

public class Tuple3<A, B, C> extends Tuple2<A, B> {
  public final C a3;
  public Tuple3(A a, B b, C c) {
    super(a, b);
    a3 = c;
  }
  @Override public String rep() {
    return super.rep() + ", " + a3;
  }
}
```
### 泛型接口
```text
泛型同样可以用于接口，例如Java的Supplier<T>接口：
```

```java
package java.util.function;

@FunctionalInterface
public interface Supplier<T> {
    T get();
}
```
```java
// Generate a Fibonacci sequence
import java.util.function.*;
import java.util.stream.*;

public class Fibonacci implements Supplier<Integer> {
  private int count = 0;
  @Override
  public Integer get() { return fib(count++); }
  private int fib(int n) {
    if(n < 2) return 1;
    return fib(n-2) + fib(n-1);
  }
  public static void main(String[] args) {
    Stream.generate(new Fibonacci())
      .limit(18)
      .map(n -> n + " ")
      .forEach(System.out::print);
  }
}
/* Output:
1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597
2584
*/

```
### 泛型方法
要定义一个泛型方法，需要将泛型参数列表放在返回值之前。
```java
public class GenericMethods {
  public <T> void f(T x) {
    System.out.println(x.getClass().getName());
  }
  public static void main(String[] args) {
    GenericMethods gm = new GenericMethods();
    gm.f(1);
    gm.f(1.0);
    gm.f(1.0F);
    gm.f('c');
    gm.f(gm);
  }
}
```
使用泛型类时，在实例化类的时候必须指定类型参数。而使用泛型方法时，通常不需要指定类型参数，因为编译器会自动检测出来。这称为类型参数推断。
在用基本类型调用 f() 方法时，自动装箱机制便会生效，将基本类型自动包装成相应的对象。
```java
package onjava;
import java.util.*;

public class Sets {
  public static <T> Set<T> union(Set<T> a, Set<T> b) {//并集
    Set<T> result = new HashSet<>(a);
    result.addAll(b);
    return result;
  }
  public static <T>
  Set<T> intersection(Set<T> a, Set<T> b) {//交集
    Set<T> result = new HashSet<>(a);
    result.retainAll(b);
    return result;
  }
  // Subtract subset from superset:
  public static <T> Set<T>
  difference(Set<T> superset, Set<T> subset) {//
    Set<T> result = new HashSet<>(superset);
    result.removeAll(subset);
    return result;
  }
  // Reflexive--everything not in the intersection:
  public static
  <T> Set<T> complement(Set<T> a, Set<T> b) {//补集
    return difference(union(a, b), intersection(a, b));
  }
}

```
### 类型擦除
```text
因为Java是在Java5才决定支持泛型，为了兼容以前的非泛型代码，java采用了类型擦除来实现泛型。
Java泛型是通过类型擦除实现的。泛型代码内部并不存在有关泛型参数类型的可用信息。
因此，List<String>和List<Integer>在运行时实际上是相同的类型。两者的类型都被擦除为它们的原始类型List。
可以为泛型类型参数添加**边界**。<T extends ClassA>声明了T必须是ClassA类型或其子类。
泛型类型只在静态检查时期存在，在这之后程序中的所有泛型类型都会被擦除，并替换为它们的非泛型上界。
```

#### 类型标签
由于类型擦除的缘故，任何需要在运行时知道确切类型的操作都无法进行，例如：
```java
// generics/Erased.java
// {WillNotCompile}

public class Erased<T> {
  private final int SIZE = 100;
  public void f(Object arg) {

    // error: illegal generic type for instanceof
    if(arg instanceof T) {}

    // error: unexpected type
    T var = new T();

    // error: generic array creation
    T[] array = new T[SIZE];

    // warning: [unchecked] unchecked cast
    T[] array2 = (T[])new Object[SIZE];

  }
}

```
有时需要通过引入类型标签来补偿类型擦除导致的损失。这意味着要在类型表达式中显式地为要使用的类型传入一个Class对象。例如：
```java
// generics/ClassTypeCapture.java
// (c)2021 MindView LLC: see Copyright.txt
// We make no guarantees that this code is fit for any purpose.
// Visit http://OnJava8.com for more book information.

class Building {}
class House extends Building {}

public class ClassTypeCapture<T> {
  Class<T> kind;
  public ClassTypeCapture(Class<T> kind) {
    this.kind = kind;
  }
  public boolean f(Object arg) {
    return kind.isInstance(arg);
  }
  public static void main(String[] args) {
    ClassTypeCapture<Building> ctt1 =
      new ClassTypeCapture<>(Building.class);
    System.out.println(ctt1.f(new Building()));
    System.out.println(ctt1.f(new House()));
    ClassTypeCapture<House> ctt2 =
      new ClassTypeCapture<>(House.class);
    System.out.println(ctt2.f(new Building()));
    System.out.println(ctt2.f(new House()));
  }
}
/* Output:
true
true
false
true
*/
```
#### 创建类型实例
new T（）是不会成功的，部分原因是类型擦除，另一部分原因是编译器无法验证T中是否存在无参构造器。
解决方法是传入一个**工厂对象**，并通过它来创建实例。Class对象就是一个方便的工厂对象，如果使用了类型标签，便可以使用newInstance()来创建该类型的新对象：
```java
// generics/InstantiateGenericType.java
// (c)2021 MindView LLC: see Copyright.txt
// We make no guarantees that this code is fit for any purpose.
// Visit http://OnJava8.com for more book information.
import java.util.function.*;
import java.lang.reflect.InvocationTargetException;

class ClassAsFactory<T> implements Supplier<T> {
  Class<T> kind;
  ClassAsFactory(Class<T> kind) {
    this.kind = kind;
  }
  @Override public T get() {
    try {
      return kind.getConstructor().newInstance();
    } catch(Exception e) {
      throw new RuntimeException(e);
    }
  }
}

class Employee {
  public Employee() {}
  @Override public String toString() {
    return "Employee";
  }
}

public class InstantiateGenericType {
  public static void main(String[] args) {
    ClassAsFactory<Employee> fe =
      new ClassAsFactory<>(Employee.class);
    System.out.println(fe.get());
    ClassAsFactory<Integer> fi =
      new ClassAsFactory<>(Integer.class);
    try {
      System.out.println(fi.get());
    } catch(Exception e) {
      System.out.println(e.getMessage());
    }
  }
}
/* Output:
Employee
java.lang.NoSuchMethodException:
java.lang.Integer.<init>()
*/

```

```text
以上使用ClassAsFactory<Integer>会失败，因为Integer中没有无参构造器。newInstance()方法会抛出异常。
由于以上错误不是在编译期捕获的，所以更推荐使用**显式工厂**（Supplier），并对类型进行限制：
```

```java
// generics/FactoryConstraint.java
// (c)2021 MindView LLC: see Copyright.txt
// We make no guarantees that this code is fit for any purpose.
// Visit http://OnJava8.com for more book information.
import java.util.*;
import java.util.function.*;
import onjava.*;

class IntegerFactory implements Supplier<Integer> {
  private int i = 0;
  @Override public Integer get() {
    return ++i;
  }
}

class Widget {
  private int id;
  Widget(int n) { id = n; }
  @Override public String toString() {
    return "Widget " + id;
  }
  public static
  class Factory implements Supplier<Widget> {
    private int i = 0;
    @Override
    public Widget get() { return new Widget(++i); }
  }
}

class Fudge {
  private static int count = 1;
  private int n = count++;
  @Override public String toString() {
    return "Fudge " + n;
  }
}

class Foo2<T> {
  private List<T> x = new ArrayList<>();
  Foo2(Supplier<T> factory) {
    Suppliers.fill(x, factory, 5);
  }
  @Override public String toString() {
    return x.toString();
  }
}

public class FactoryConstraint {
  public static void main(String[] args) {
    System.out.println(
      new Foo2<>(new IntegerFactory()));
    System.out.println(
      new Foo2<>(new Widget.Factory()));
    System.out.println(
      new Foo2<>(Fudge::new));
  }
}
/* Output:
[1, 2, 3, 4, 5]
[Widget 1, Widget 2, Widget 3, Widget 4, Widget 5]
[Fudge 1, Fudge 2, Fudge 3, Fudge 4, Fudge 5]
*/

```
另一种方法是使用模板方法设计模式，下面示例中，creat()就是那个模板方法，其在子类被重写，用于生成该类型的对象：
```java
// generics/CreatorGeneric.java
// (c)2021 MindView LLC: see Copyright.txt
// We make no guarantees that this code is fit for any purpose.
// Visit http://OnJava8.com for more book information.

abstract class GenericWithCreate<T> {
  final T element;
  GenericWithCreate() { element = create(); }
  abstract T create();
}

class X {}

class XCreator extends GenericWithCreate<X> {
  @Override X create() { return new X(); }
  void f() {
    System.out.println(
      element.getClass().getSimpleName());
  }
}

public class CreatorGeneric {
  public static void main(String[] args) {
    XCreator xc = new XCreator();
    xc.f();
  }
}
/* Output:
X
*/

```
#### 泛型数组
无法通过new T[]创建泛型数组，解决办法是使用ArrayList或Array.newInstance()，再进行类型转换。
```java
import java.util.*;

public class ListOfGenerics<T> {
  private List<T> array = new ArrayList<>();
  public void add(T item) { array.add(item); }
  public T get(int index) { return array.get(index); }
}
```
```java
import java.lang.reflect.*;

public class GenericArrayWithTypeToken<T> {
  private T[] array;
  @SuppressWarnings("unchecked")
  public
  GenericArrayWithTypeToken(Class<T> type, int sz) {
    array = (T[])Array.newInstance(type, sz);
  }
  public void put(int index, T item) {
    array[index] = item;
  }
  public T get(int index) { return array[index]; }
  // Expose the underlying representation:
  public T[] rep() { return array; }
  public static void main(String[] args) {
    GenericArrayWithTypeToken<Integer> gai =
      new GenericArrayWithTypeToken<>(
        Integer.class, 10);
    // This now works:
    Integer[] ia = gai.rep();
  }
}
```
### 边界
边界让你在使用泛型的时候，可以在参数类型上增加限制。
由于类型擦除移除了类型信息，对于无边界的泛型参数，仅能调用Object中可用的方法。如果能将参数类型限制在某个类型子集中，就可以调用该子集上可用的方法了。为了应用这种限制，Java泛型复用了extends关键字。
```java
class Solid<T extends Coord & HasColor & Weight>{}
```
可以有多重边界，类必须在前面，然后才是接口。和继承一样，只能继承一个类，可以实现多个接口。
### 通配符
引入：
可以将派生类型的数组赋值给基类数组的引用，但是实际运行时数组机制知道自己持有的是某个具体的子类，你放里面其他子类或父类元素进去会发生异常。
```java
// generics/CovariantArrays.java

class Fruit {}
class Apple extends Fruit {}
class Jonathan extends Apple {}
class Orange extends Fruit {}

public class CovariantArrays {
  public static void main(String[] args) {
    Fruit[] fruit = new Apple[10];
    fruit[0] = new Apple(); // OK
    fruit[1] = new Jonathan(); // OK
    // Runtime type is Apple[], not Fruit[] or Orange[]:
    try {
      // Compiler allows you to add Fruit:
      fruit[0] = new Fruit(); // ArrayStoreException
    } catch(Exception e) { System.out.println(e); }
    try {
      // Compiler allows you to add Oranges:
      fruit[0] = new Orange(); // ArrayStoreException
    } catch(Exception e) { System.out.println(e); }
  }
}
/* Output:
java.lang.ArrayStoreException: Fruit
java.lang.ArrayStoreException: Orange
*/

```

```text
对于集合，无法将包含Apple的集合赋值给Fruit集合。其实真正讨论的是“无法将包含Apple的泛型赋值给包含Fruit的泛型”。
List<Fruit> flist = new ArrayList<Apple>(); //这句无法通过编译。
和数组不同，泛型没有内建的协变性，不过通配符提供了协变性的能力。
```

####  ? extends MyClass
```java
// generics/Holder.java
import java.util.Objects;

public class Holder<T> {
  private T value;
  public Holder() {}
  public Holder(T val) { value = val; }
  public void set(T val) { value = val; }
  public T get() { return value; }
  @Override public boolean equals(Object o) {
    return o instanceof Holder &&
      Objects.equals(value, ((Holder)o).value);
  }
  @Override public int hashCode() {
    return Objects.hashCode(value);
  }
  public static void main(String[] args) {
    Holder<Apple> apple = new Holder<>(new Apple());
    Apple d = apple.get();
    apple.set(d);
    // Holder<Fruit> Fruit = apple; // Cannot upcast
    Holder<? extends Fruit> fruit = apple; // OK
    Fruit p = fruit.get();
    d = (Apple)fruit.get(); // Returns 'Object'
    try {
      Orange c = (Orange)fruit.get(); // No warning
    } catch(Exception e) { System.out.println(e); }
    // fruit.set(new Apple()); // Cannot call set()
    // fruit.set(new Fruit()); // Cannot call set()
    System.out.println(fruit.equals(d)); // OK
  }
}
/* Output:
java.lang.ClassCastException: Apple cannot be cast to
Orange
false
*/
```
```text
不能将Holder<Apple>向上转型为Holder<Fruit>，但是可以将Holder<Apple>向上转型为Holder<? extends Fruit>。只是一旦向上转型后，便无法调用set()方法。因为set()方法的参数是? extends Fruit ，意味着某种Fruit的子类型，但是编译器不知道具体是哪种 Fruit的子类型，所以不会接受任何Fruit的类型，你便失去了向其中传入任何对象的能力。
get（）方法可以正常使用，因为编译器知道持有的是某种Fruit的子类型，返回的结果可以向上转型为Fruit。
```

#### ? super MyClass 超类通配符
```text
<? super Type>超类通配符 表示MyClass类的某个父类。不过无法给泛型参数设置超类边界，也就是<T super MyClass>是不允许的。
有了超类通配符，可以安全地想类型对象传入泛型类型中，即set()方法可以执行了。
```

```java
import java.util.*;

public class SuperTypeWildcards {
  static void writeTo(List<? super Apple> apples) {
    apples.add(new Apple());
    apples.add(new Jonathan());//Jonathan是Apple的子类
    // apples.add(new Fruit()); // Error
  }
}
```
参数apples是由某种Apple的基类组成的List，因此可以安全地向其中添加Apple类型或其子类型。不过其下界是Apple，所以并不知道是否可以安全地添加Fruit，编译器拒绝添加Fruit。
#### 无界通配符
```text
<?>似乎意味着“任何类型，所以使用无界通配符似乎就等于使用某个原始类型，一般情况下，编译器确实不关系两者的区别。
实际上，List是指“持有任意Object类型的原生List”，而List<?>是指“持有某种具体类型的非原生List”，但是我们并不知道是什么类型。
```

#### 捕获转换
```text
如果向某个使用了<?>的方法传入了原生类型，编译器有可能推断出具体的类型参数，因此该方法可以转而调用另一个使用了具体类型的方法，这称为捕获转换。
```

```java
public class CaptureConversion {
  static <T> void f1(Holder<T> holder) {
    T t = holder.get();
    System.out.println(t.getClass().getSimpleName());
  }
  static void f2(Holder<?> holder) {
    f1(holder); // Call with captured type
  }
}
```
### 问题
#### 基本类型不能作为类型参数
Java泛型的限制之一，是无法将基本类型作为类型参数。解决办法是使用基本类型的包装类，并结合自动装箱机制。
自动装箱机制不会对数组生效，要自己处理。
#### 基类会劫持接口
一旦基类实现了某个泛型接口，并指定了类型参数，那么它的子类只能重复实现相同的类型参数的相同接口，无法再指定其他的类型参数。
```java
public class ComparablePet
implements Comparable<ComparablePet> {
  @Override
  public int compareTo(ComparablePet arg) {
    return 0;
  }
}

class Cat
  extends ComparablePet
        implements Comparable<Cat> //不能通过编译
{
  // error: Comparable cannot be inherited with
  // different arguments: <Cat> and <ComparablePet>
  // class Cat
  // ^
  // 1 error
    

  public int compareTo(Cat arg) { return 0; }
}
```
### 自限定类型
#### 奇异递归泛型
创建一个新类，它继承自将该新类类名作为自身参数的泛型类型，这称为奇异递归泛型。
```java
public class BasicHolder<T> {
  T element;
  void set(T arg) { element = arg; }
  T get() { return element; }
  void f() {
    System.out.println(
      element.getClass().getSimpleName());
  }
}
```
```java
class Subtype extends BasicHolder<Subtype> {}

public class CRGWithBasicHolder {
  public static void main(String[] args) {
    Subtype
      st1 = new Subtype(),
      st2 = new Subtype();
    st1.set(st2);
    Subtype st3 = st1.get();
    st1.f();
  }
}
/* Output:
Subtype
*/
```
上述Subtype这个新类接受参数和返回值的类型都是Subtype，这便是奇异递归泛型（CRG，curiously recurring generics)是精髓，基类用子类替换了其参数。这意味着泛型基类变成了一种为其子类实现通用功能的模板，但是其方法的参数和返回值使用了派生类型，而不是基类。
#### 自限定
自限定是指将泛型作为自己的边界参数使用。
```java
class SelfBounded<T extends SelfBounded<T>> {
  T element;
  SelfBounded<T> set(T arg) {
    element = arg;
    return this;
  }
  T get() { return element; }
}

class A extends SelfBounded<A> {}
class B extends SelfBounded<A> {} // Also OK

class C extends SelfBounded<C> {
  C setAndGet(C arg) { set(arg); return get(); }
}
```
这会强制要求将你要新定义的子类作为参数传给基类。
#### 参数协变性
自限定的价值在于协变参数类型：方法参数的类型会随着子类而变化。
```java
interface
SelfBoundSetter<T extends SelfBoundSetter<T>> {
  void set(T arg);
}

interface Setter extends SelfBoundSetter<Setter> {}

public class SelfBoundingAndCovariantArguments {
  void
  testA(Setter s1, Setter s2, SelfBoundSetter sbs) {
    s1.set(s2);
    //- s1.set(sbs);
    // error: method set in interface SelfBoundSetter<T>
    // cannot be applied to given types;
    //     s1.set(sbs);
    //       ^
    //   required: Setter
    //   found: SelfBoundSetter
    //   reason: argument mismatch;
    // SelfBoundSetter cannot be converted to Setter
    //   where T is a type-variable:
    //     T extends SelfBoundSetter<T> declared in
    //     interface SelfBoundSetter
    // 1 error
  }
}
```
返回类型会生成精确的派生类型：
```java
interface GenericGetter<T extends GenericGetter<T>> {
  T get();
}

interface Getter extends GenericGetter<Getter> {}

public class GenericsAndReturnTypes {
  void test(Getter g) {
    Getter result = g.get();
    GenericGetter gg = g.get(); // Also the base type
  }
}
```
#### 动态类型安全
Java5之前的代码没有泛型，因此，可能往你的集合中放入错误的类型。可以利用java提供的checkedCollection()等方法，确保放入集合的类型是方法传入的第二个参数类型，如果不是则抛出异常。
```java
import reflection.pets.*;
import reflection.pets.Cat;

import java.util.*;

public class CheckedList {
  @SuppressWarnings("unchecked")
  static void oldStyleMethod(List probablyDogs) {
    probablyDogs.add(new Cat());
  }
  public static void main(String[] args) {
    List<Dog> dogs1 = new ArrayList<>();
    oldStyleMethod(dogs1); // Quietly accepts a Cat
    List<Dog> dogs2 = Collections.checkedList(
      new ArrayList<>(), Dog.class);
    try {
      oldStyleMethod(dogs2); // Throws an exception
    } catch(Exception e) {
      System.out.println("Expected: " + e);
    }
    // Derived types work fine:
    List<Pet> pets = Collections.checkedList(
      new ArrayList<>(), Pet.class);
    pets.add(new Dog());
    pets.add(new Cat());
  }
}
/* Output:
Expected: java.lang.ClassCastException: Attempt to
insert class reflection.pets.Cat element into collection
with element type class reflection.pets.Dog
*/
```
### 异常
由于类型擦除的原因，catch子句无法捕获到泛型类型的异常。因此泛型类无法直接或间接地继承Throwable。
不过，可以将类型参数用于方法声明的throw子句，这样可以编写随受检查的异常类型而变化的泛型代码。
```java
interface Processor<T, E extends Exception> {
  void process(List<T> resultCollector) throws E;
}
```
### 混型
混型是指混个多个类的能力，以生成一个可以代表混型中所有类型的类。
#### 与接口混合
可以使用接口来达到混型的效果：
```java
// generics/Mixins.java
import java.util.*;

interface TimeStamped { long getStamp(); }

class TimeStampedImp implements TimeStamped {
  private final long timeStamp;
  TimeStampedImp() {
    timeStamp = new Date().getTime();
  }
  @Override
  public long getStamp() { return timeStamp; }
}

interface SerialNumbered { long getSerialNumber(); }

class SerialNumberedImp implements SerialNumbered {
  private static long counter = 1;
  private final long serialNumber = counter++;
  @Override
  public long getSerialNumber() { return serialNumber; }
}

interface Basic {
  void set(String val);
  String get();
}

class BasicImp implements Basic {
  private String value;
  @Override
  public void set(String val) { value = val; }
  @Override
  public String get() { return value; }
}

class Mixin extends BasicImp
implements TimeStamped, SerialNumbered {
  private TimeStamped timeStamp = new TimeStampedImp();
  private SerialNumbered serialNumber =
    new SerialNumberedImp();
  @Override public long getStamp() {
    return timeStamp.getStamp();
  }
  @Override public long getSerialNumber() {
    return serialNumber.getSerialNumber();
  }
}

public class Mixins {
  public static void main(String[] args) {
    Mixin mixin1 = new Mixin(), mixin2 = new Mixin();
    mixin1.set("test string 1");
    mixin2.set("test string 2");
    System.out.println(mixin1.get() + " " +
      mixin1.getStamp() +  " " +
      mixin1.getSerialNumber());
    System.out.println(mixin2.get() + " " +
      mixin2.getStamp() +  " " +
      mixin2.getSerialNumber());
  }
}
/* Output:
test string 1 1611503367257 1
test string 2 1611503367258 2
*/

```
#### 与动态代理混合
使用动态代理，结果类的动态类型就是被混合后的合并类型。
由于动态代理的限制，每个被混入的类都必须是某个接口的实现。
```java
// generics/DynamicProxyMixin.java
// (c)2021 MindView LLC: see Copyright.txt
// We make no guarantees that this code is fit for any purpose.
// Visit http://OnJava8.com for more book information.
import java.lang.reflect.*;
import java.util.*;
import onjava.*;
import static onjava.Tuple.*;

class MixinProxy implements InvocationHandler {
  Map<String, Object> delegatesByMethod;
  @SuppressWarnings("unchecked")
  MixinProxy(Tuple2<Object, Class<?>>... pairs) {
    delegatesByMethod = new HashMap<>();
    for(Tuple2<Object, Class<?>> pair : pairs) {
      for(Method method : pair.a2.getMethods()) {
        String methodName = method.getName();
        // The first interface in the map
        // implements the method.
        if(!delegatesByMethod.containsKey(methodName))
          delegatesByMethod.put(methodName, pair.a1);
      }
    }
  }
  @Override
  public Object invoke(Object proxy, Method method,
    Object[] args) throws Throwable {
    String methodName = method.getName();
    Object delegate = delegatesByMethod.get(methodName);
    return method.invoke(delegate, args);
  }
  @SuppressWarnings("unchecked")
  public static Object newInstance(Tuple2... pairs) {
    Class[] interfaces = new Class[pairs.length];
    for(int i = 0; i < pairs.length; i++) {
      interfaces[i] = (Class)pairs[i].a2;
    }
    ClassLoader cl =
      pairs[0].a1.getClass().getClassLoader();
    return Proxy.newProxyInstance(
      cl, interfaces, new MixinProxy(pairs));
  }
}

public class DynamicProxyMixin {
  public static void main(String[] args) {
    @SuppressWarnings("unchecked")
    Object mixin = MixinProxy.newInstance(
      tuple(new BasicImp(), Basic.class),
      tuple(new TimeStampedImp(), TimeStamped.class),
      tuple(new SerialNumberedImp(),
          SerialNumbered.class));
    Basic b = (Basic)mixin;
    TimeStamped t = (TimeStamped)mixin;
    SerialNumbered s = (SerialNumbered)mixin;
    b.set("Hello");
    System.out.println(b.get());
    System.out.println(t.getStamp());
    System.out.println(s.getSerialNumber());
  }
}
/* Output:
Hello
1611503350927
1
*/

```
### 潜在类型机制
潜在类型机制是指可以越过类的层次结构，调用并不属于某个公共接口的方法。
又称为“鸭子类型机制”，就是“如果某个事物走路像鸭子，说话也像鸭子，那么你就可以把它当成鸭子”。
泛型代码一般只能调用泛型类型上的少数方法，而具有潜在类型机制的语言可以仅通过实现一套方法的子集，而不用实现某个特定的类或接口，来解除这个限制，从而使代码更通用。
#### Python中的潜在类型机制
```java
## generics/DogsAndRobots.py
## (c)2021 MindView LLC: see Copyright.txt
## We make no guarantees that this code is fit for any purpose.
## Visit http://OnJava8.com for more book information.

class Dog:
    def speak(self):
        print("Arf!")
    def sit(self):
        print("Sitting")
    def reproduce(self):
        pass

class Robot:
    def speak(self):
        print("Click!")
    def sit(self):
        print("Clank!")
    def oilChange(self):
        pass

def perform(anything):
    anything.speak()
    anything.sit()

a = Dog()
b = Robot()
perform(a)
perform(b)

output = """
Arf!
Sitting
Click!
Clank!
"""
```
#### Java没有支持（直接的）潜在类型机制
由于Java较晚才加入泛型，没有办法实现任何类型的潜在 类型机制。要实现上面Python的例子，就必须用到一个类或接口。
```java
public interface Performs {
  void speak();
  void sit();
}
```
```java
import reflection.pets.*;

class PerformingDog extends Dog implements Performs {
  @Override
  public void speak() { System.out.println("Woof!"); }
  @Override
  public void sit() { System.out.println("Sitting"); }
  public void reproduce() {}
}

class Robot implements Performs {
  @Override
  public void speak() { System.out.println("Click!"); }
  @Override
  public void sit() { System.out.println("Clank!"); }
  public void oilChange() {}
}

class Communicate {
  public static <T extends Performs>
  void perform(T performer) {
    performer.speak();
    performer.sit();
  }
}

public class DogsAndRobots {
  public static void main(String[] args) {
    Communicate.perform(new PerformingDog());
    Communicate.perform(new Robot());
  }
}
/* Output:
Woof!
Sitting
Click!
Clank!
*/

```
#### 利用反射实现潜在类型机制
利用反射实现上述例子里的perform():
```java
// generics/LatentReflection.java
// (c)2021 MindView LLC: see Copyright.txt
// We make no guarantees that this code is fit for any purpose.
// Visit http://OnJava8.com for more book information.
// Using reflection for latent typing
import java.lang.reflect.*;

// Does not implement Performs:
class Mime {
  public void walkAgainstTheWind() {}
  public void sit() {
    System.out.println("Pretending to sit");
  }
  public void pushInvisibleWalls() {}
  @Override public String toString() { return "Mime"; }
}

// Does not implement Performs:
class SmartDog {
  public void speak() { System.out.println("Woof!"); }
  public void sit() { System.out.println("Sitting"); }
  public void reproduce() {}
}

class CommunicateReflectively {
  public static void perform(Object speaker) {
    Class<?> spkr = speaker.getClass();
    try {
      try {
        Method speak = spkr.getMethod("speak");
        speak.invoke(speaker);
      } catch(NoSuchMethodException e) {
        System.out.println(speaker + " cannot speak");
      }
      try {
        Method sit = spkr.getMethod("sit");
        sit.invoke(speaker);
      } catch(NoSuchMethodException e) {
        System.out.println(speaker + " cannot sit");
      }
    } catch(SecurityException |
            IllegalAccessException |
            IllegalArgumentException |
            InvocationTargetException e) {
      throw new RuntimeException(speaker.toString(), e);
    }
  }
}

public class LatentReflection {
  public static void main(String[] args) {
    CommunicateReflectively.perform(new SmartDog());
    CommunicateReflectively.perform(new Robot());
    CommunicateReflectively.perform(new Mime());
  }
}
/* Output:
Woof!
Sitting
Click!
Clank!
Mime cannot speak
Pretending to sit
*/
```
此处，这两个类之间并无直接关联，也没有共同的基类（除了Object）或接口。通过反射，perform（）可以动态地确定所需的方法是否可用，然后进行调用。
#### 利用未绑定方法引用实现的辅助潜在类型机制
```java
// generics/DogsAndRobotMethodReferences.java
// (c)2021 MindView LLC: see Copyright.txt
// We make no guarantees that this code is fit for any purpose.
// Visit http://OnJava8.com for more book information.
// "Assisted Latent Typing"
import reflection.pets.*;
import java.util.function.*;

class PerformingDogA extends Dog {
  public void speak() { System.out.println("Woof!"); }
  public void sit() { System.out.println("Sitting"); }
  public void reproduce() {}
}

class RobotA {
  public void speak() { System.out.println("Click!"); }
  public void sit() { System.out.println("Clank!"); }
  public void oilChange() {}
}

class CommunicateA {
  public static <P> void perform(P performer,
    Consumer<P> action1, Consumer<P> action2) {
    action1.accept(performer);
    action2.accept(performer);
  }
}

public class DogsAndRobotMethodReferences {
  public static void main(String[] args) {
    CommunicateA.perform(new PerformingDogA(),
      PerformingDogA::speak, PerformingDogA::sit);
    CommunicateA.perform(new RobotA(),
      RobotA::speak, RobotA::sit);
    CommunicateA.perform(new Mime(),
      Mime::walkAgainstTheWind,
      Mime::pushInvisibleWalls);
  }
}
/* Output:
Woof!
Sitting
Click!
Clank!
*/

```
```text
Consumer<P> 表示不带参数的P上的未绑定方法引用。在调用Consumer的accept()方法时，会将该方法的引用绑定到具体的执行对象，再调用该方法。
```

我们可以向perform()方法传递任何签名一致的未绑定方法引用。
### 例子Suppliers
```java
// onjava/Suppliers.java
// (c)2021 MindView LLC: see Copyright.txt
// We make no guarantees that this code is fit for any purpose.
// Visit http://OnJava8.com for more book information.
// A utility to use with Suppliers
package onjava;
import java.util.*;
import java.util.function.*;
import java.util.stream.*;

public class Suppliers {
  // Create a collection and fill it:
  public static <T, C extends Collection<T>> C
  create(Supplier<C> factory, Supplier<T> gen, int n) {
    return Stream.generate(gen)
      .limit(n)
      .collect(factory, C::add, C::addAll);
  }
  // Fill an existing collection:
  public static <T, C extends Collection<T>>
  C fill(C coll, Supplier<T> gen, int n) {
    Stream.generate(gen)
      .limit(n)
      .forEach(coll::add);
    return coll;
  }
  // Use an unbound method reference to
  // produce a more general method:
  public static <H, A> H fill(H holder,
    BiConsumer<H, A> adder, Supplier<A> gen, int n) {
    Stream.generate(gen)
      .limit(n)
      .forEach(a -> adder.accept(holder, a));
    return holder;
  }
}

```
```text
BiConsumer<H, A> 其中H是要绑定的目标holder对象的类型，而A是要添加的元素类型。对accept()的调用会以a为参数，在对象holder上调用未绑定方法adder。
```

## 数组
数组和Collectio中的类型主要有三方面的区别：效率、类型、以及保存基本类型数据的能力。
数组是Java中保存和随机访问对象引用序列最高效的方法。
速度通常不是问题，所以通常应该首先考虑使用ArrayList类型，该类型是在内部维护了一个数组，在必要时，该类型会自动申请更多的数字空间，创建一个新数组，并将旧数组中的所有引用都移动到新数组中。
数组可以保存基本类型，而Collection依靠自动装箱的自动类型转换，可以变相的保存基本类型。
### 数组的初始化以及重分配
```java
// arrays/ArrayOptions.java
// Initialization & re-assignment of arrays
import java.util.*;
import static onjava.ArrayShow.*;

public class ArrayOptions {
  public static void main(String[] args) {
    // Arrays of objects:
    BerylliumSphere[] a; // Uninitialized local
    BerylliumSphere[] b = new BerylliumSphere[5];

    // The references inside the array are
    // automatically initialized to null:
    show("b", b);
    BerylliumSphere[] c = new BerylliumSphere[4];
    for(int i = 0; i < c.length; i++)
      if(c[i] == null) // Can test for null reference
        c[i] = new BerylliumSphere();

    // Aggregate initialization:
    BerylliumSphere[] d = {
      new BerylliumSphere(),
      new BerylliumSphere(),
      new BerylliumSphere()
    };

    // Dynamic aggregate initialization:
    a = new BerylliumSphere[]{
      new BerylliumSphere(), new BerylliumSphere(),
    };
    // (Trailing comma is optional)

    System.out.println("a.length = " + a.length);
    System.out.println("b.length = " + b.length);
    System.out.println("c.length = " + c.length);
    System.out.println("d.length = " + d.length);
    a = d;
    System.out.println("a.length = " + a.length);

    // Arrays of primitives:
    int[] e; // Null reference
    int[] f = new int[5];

    // The primitives inside the array are
    // automatically initialized to zero:
    show("f", f);
    int[] g = new int[4];
    for(int i = 0; i < g.length; i++)
      g[i] = i*i;
    int[] h = { 11, 47, 93 };

    //  Compile error: variable e not initialized:
    //- System.out.println("e.length = " + e.length);
    System.out.println("f.length = " + f.length);
    System.out.println("g.length = " + g.length);
    System.out.println("h.length = " + h.length);
    e = h;
    System.out.println("e.length = " + e.length);
    e = new int[]{ 1, 2 };
    System.out.println("e.length = " + e.length);
  }
}
/* Output:
b: [null, null, null, null, null]
a.length = 2
b.length = 5
c.length = 4
d.length = 3
a.length = 3
f: [0, 0, 0, 0, 0]
f.length = 5
g.length = 4
h.length = 3
e.length = 3
e.length = 2
*/

```
### 数组和泛型
无法实例化一个参数化类型的数组：
```java
Peel<Banana>[] peels = new Peel<Banana>[10] ; //非法代码
```

不过数组自身的类型是可以参数化的：
```java
class ClassParameter<T> {
  public T[] f(T[] arg) { return arg; }
}

class MethodParameter {
  public static <T> T[] f(T[] arg) { return arg; }
}

public class ParameterizedArrayType {
  public static void main(String[] args) {
    Integer[] ints = { 1, 2, 3, 4, 5 };
    Double[] doubles = { 1.1, 2.2, 3.3, 4.4, 5.5 };
    Integer[] ints2 =
      new ClassParameter<Integer>().f(ints);
    Double[] doubles2 =
      new ClassParameter<Double>().f(doubles);
    ints2 = MethodParameter.f(ints);
    doubles2 = MethodParameter.f(doubles);
  }
}
```
### Arrays实用方法
Arrays.fill()将一个数值或对象引用复制到数组的所有位置。
```text
Arrays.setAll(T[] a , IntFuncton<? extends T> gen)利用生成器填充数组，这个方法对于int、long和double有专门的重载版本。
```

asList() 将数组或序列转化为列表集合
copyOf() 按新的长度创建已有数组的副本
copyOfRange() 对已有数组的指定长度范围创建副本
equals() 比较两个数组是否相等
deepEquals() 比较两个多维数组是否相等
stream() 为数组元素创建一个流
toString() 生成描述数组的字符串
deepToString() 生成描述多维数组的字符串
sort() 对数组元素进行排序
binarySearch() 在已排序的数组中查找一个元素
### 基本类型数组与包装类型数组
泛型无法应用与基本类型。所以有时我们需要将基本类型数组转换为包装类型数组，以下是可以实现基本类型数组和包装类型数组双向转换的工具类：
```java
// onjava/ConvertTo.java
// (c)2021 MindView LLC: see Copyright.txt
// We make no guarantees that this code is fit for any purpose.
// Visit http://OnJava8.com for more book information.
package onjava;

public interface ConvertTo {
  static boolean[] primitive(Boolean[] in) {
    boolean[] result = new boolean[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i]; // Autounboxing
    return result;
  }
  static char[] primitive(Character[] in) {
    char[] result = new char[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i];
    return result;
  }
  static byte[] primitive(Byte[] in) {
    byte[] result = new byte[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i];
    return result;
  }
  static short[] primitive(Short[] in) {
    short[] result = new short[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i];
    return result;
  }
  static int[] primitive(Integer[] in) {
    int[] result = new int[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i];
    return result;
  }
  static long[] primitive(Long[] in) {
    long[] result = new long[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i];
    return result;
  }
  static float[] primitive(Float[] in) {
    float[] result = new float[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i];
    return result;
  }
  static double[] primitive(Double[] in) {
    double[] result = new double[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i];
    return result;
  }
  // Convert from primitive array to wrapped array:
  static Boolean[] boxed(boolean[] in) {
    Boolean[] result = new Boolean[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i]; // Autoboxing
    return result;
  }
  static Character[] boxed(char[] in) {
    Character[] result = new Character[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i];
    return result;
  }
  static Byte[] boxed(byte[] in) {
    Byte[] result = new Byte[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i];
    return result;
  }
  static Short[] boxed(short[] in) {
    Short[] result = new Short[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i];
    return result;
  }
  static Integer[] boxed(int[] in) {
    Integer[] result = new Integer[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i];
    return result;
  }
  static Long[] boxed(long[] in) {
    Long[] result = new Long[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i];
    return result;
  }
  static Float[] boxed(float[] in) {
    Float[] result = new Float[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i];
    return result;
  }
  static Double[] boxed(double[] in) {
    Double[] result = new Double[in.length];
    for(int i = 0; i < in.length; i++)
      result[i] = in[i];
    return result;
  }
}

```
### 流和数组
```java
// arrays/StreamFromArray.java
// (c)2021 MindView LLC: see Copyright.txt
// We make no guarantees that this code is fit for any purpose.
// Visit http://OnJava8.com for more book information.
import java.util.*;
import onjava.*;

public class StreamFromArray {
  public static void main(String[] args) {
    String[] s = new Rand.String().array(10);
    Arrays.stream(s)
      .skip(3)
      .limit(5)
      .map(ss -> ss + "!")
      .forEach(System.out::println);

    int[] ia = new Rand.Pint().array(10);
    Arrays.stream(ia)
      .skip(3)
      .limit(5)
      .map(i -> i * 10)
      .forEach(System.out::println);

    Arrays.stream(new long[10]);
    Arrays.stream(new double[10]);

    // Only int, long and double work:
    //- Arrays.stream(new boolean[10]);
    //- Arrays.stream(new byte[10]);
    //- Arrays.stream(new char[10]);
    //- Arrays.stream(new short[10]);
    //- Arrays.stream(new float[10]);

    // For the other types you must use wrapped arrays:
    float[] fa = new Rand.Pfloat().array(10);
    Arrays.stream(ConvertTo.boxed(fa));
    Arrays.stream(new Rand.Float().array(10));
  }
}
/* Output:
eloztdv!
ewcippc!
ygpoalk!
ljlbynx!
taprwxz!
47200
61770
84790
66560
37680
*/

```
### 数组排序
排序的对象要实现Comparable接口，或者传入一个Comparator。
```java
import java.util.*;
import onjava.*;
import static onjava.ArrayShow.*;

public class StringSorting {
  public static void main(String[] args) {
    String[] sa = new Rand.String().array(20);
    show("Before sort", sa);
    Arrays.sort(sa);
    show("After sort", sa);
    Arrays.sort(sa, Collections.reverseOrder());
    show("Reverse sort", sa);
    Arrays.sort(sa, String.CASE_INSENSITIVE_ORDER);
    show("Case-insensitive sort", sa);
  }
}
```
### 数组中使用二分查找
一旦数组排好了序，便可以通过Arrays.binarySearch()来快速查找某个特定的元素。
```java
// arrays/ArraySearching.java
// (c)2021 MindView LLC: see Copyright.txt
// We make no guarantees that this code is fit for any purpose.
// Visit http://OnJava8.com for more book information.
// Using Arrays.binarySearch()
import java.util.*;
import onjava.*;
import static onjava.ArrayShow.*;

public class ArraySearching {
  public static void main(String[] args) {
    Rand.Pint rand = new Rand.Pint();
    int[] a = new Rand.Pint().array(25);
    Arrays.sort(a);
    show("Sorted array", a);
    while(true) {
      int r = rand.getAsInt();
      int location = Arrays.binarySearch(a, r);
      if(location >= 0) {
        System.out.println(
          "Location of " + r + " is " + location +
          ", a[" + location + "] is " + a[location]);
        break; // Out of while loop
      }
    }
  }
}
/* Output:
Sorted array: [125, 267, 635, 650, 1131, 1506, 1634,
2400, 2766, 3063, 3768, 3941, 4720, 4762, 4948, 5070,
5682, 5807, 6177, 6193, 6656, 7021, 8479, 8737, 9954]
Location of 635 is 2, a[2] is 635
*/
```
