# 原型链与继承

## 原型和原型链
原型和原型链到底是个啥玩意，懂或者不懂，迷迷糊糊，一知半解。终于在某一天，我下定决心要搞明白这玩意了，笔记开始，先睡一觉压压惊。
>当谈到继承时，JavaScript 只有一种结构：对象。每个实例对象（ object ）都有一个私有属性（称之为 \_\_proto\_\_ ）指向它的构造函数的原型对象（prototype ）。该原型对象也有一个自己的原型对象( \_\_proto\_\_ ) ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

以上来自js文档 [](https://developer.mozilla.org/zh-CN/docs/Glossary/Prototype)

其实js的原型和原型链主要就是 **\_\_proto\_\_** 和 **prototype**

**\_\_proto\_\_** 且称之为原型链 **prototype**且称之为原型对象
``` js
function Person(name) {
    this.name = name;
}

Person.prototype = {
    say(){
        console.log(`my name is ${this.name}`)
    }
}

const person1 = new Person('person1')

person1.say() //my name is person1
```

如上就是一个挺简单的原型继承

其实也就是让 **person.\_\_proto\_\_** 指向 **Peron.prototype**
 
**person1.\_\_proto\_\_ === Person.prototype**

Person就是构造函数，person1就是它的一个实例。

person1的原型链指向了Person的原型对象

好像是挺简单，但是深究起来还是晕乎乎的

毕竟文档说
>该原型对象也有一个自己的原型对象( \_\_proto\_\_ ) ，层层向上直到一个对象的原型对象为 null。

那么Person的原型链(即Person.\_\_proto\_\_)又是谁

Person其实也只是一个函数，那么它肯定是JS数据类型**Function**的实例

即**Person.\_\_proto\_\_ === Function.prototype**

再往上 **Function**其实也是**Object**的一个实例

即**Function.\_\_proto\_\_ === Object.prototype**

但是结果好像并不是这样因为实际允许后会发现这是 **false**

好吧，好像JS里面的几个数据结构(Number、Boolean、String、Function等)这些的原型有点复杂

大概关系如下

![](http://picture.cybqd.com/images/2019/12/05/prototype1.png)

图片来自网络[JavaScript 世界万物诞生记](https://zhuanlan.zhihu.com/p/22989691)

从这张图中最终得到的结果如下

``` js
Object.prototype.__proto__ === null;
Object.__proto__.__proto__ === Object.prototype;
Function.__proto__ === Function.prototype === Object.__proto__;
String.__proto__ === Number.__proto__ === Boolean.__proto__ === Array.__proto__ === Object.prototype
```

似乎有些难以理解，可以点击链接[JavaScript 世界万物诞生记](https://zhuanlan.zhihu.com/p/22989691)
这种剧场版的其实理解起来还是比较容易的，虽然会有点绕

## new
明白了原型对象和原型链之后那么js在new的时候会做啥

换句话说。如果没有new，js要怎样才能实现继承呢

``` js
function Person(name) {
    this.name = name;
    this.run = function(){
        console.log('run')
    }
}

Person.prototype = {
    say(){
        console.log(`my name is ${this.name}`)
    }
}

let obj = {}

obj.__proto__ = Person.prototype
Person.call(obj, 'person1')

obj.say()//my name is person1

var person2 = new Person('person2')
var person3 = new Person('person3')

console.log(person2.say === person3.say) // true
console.log(person2.run === person3.run) // false
```
js new一个对象的原理差不多和上面的代码一样吧

首先是得有一个构造函数，然后声明一个对象，让这个对象的 **\_\_proto\_\_** 指向构造函数的 **prototype**，接着借助call执行构造函数中的代码为这个新对象添加属性和方法，这个对象就实现了继承了

个人理解 如果一个构造函数没有显式指定 **prototype** 那么这个对象其实不用将 **\_\_proto\_\_** 指向构造函数的 **prototype**，因为单纯的用call就可以给这个对象添加构造函数里面的属性和方法了。当然构造函数
里的一些属性或者方法直接写在函数里面或者写在它的原型对象(prototype)都可以，二者也是有差别的，正如上面的代码，直接写在函数里面实际上是把这个属性复制了一份给子对象。每个子对象的该属性都是独立的(如 **run** 方法)，而写在原型对象里面则是所有子对象共享一份(如 **say** 方法)

## 借用构造函数





