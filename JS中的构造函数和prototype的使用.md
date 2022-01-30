# JavaScript中的构造函数的使用
```javascript
function Person(name,age){
    this.name = name;
    this.age = age;
    this.showID = function (){
        console.log("My name is " + this.name);
        console.log("I'm " + this.age +" years old");
    }
}

let Ulrich = new Person('Ulrich',22);
Ulrich.showID();
```
也可以把构造函数中的showID给分离出来，方便多个不同的构造函数的使用
```javascript
function Person(name,age){
    this.name = name;
    this.age = age;
    this.showID = fun;
}

function fun(){
    console.log("My name is " + this.name);
    console.log("I'm " + this.age +" years old");
}

let Ulrich = new Person('Ulrich',22);
Ulrich.showID();
```

输出结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/f0eb9d51c93b405ebd76675fb35fdf71.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_16,color_FFFFFF,t_70,g_se,x_16)
## prototype的使用
```javascript
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.showID = function () {
    console.log("My name is " + this.name);
    console.log("I'm " + this.age +" years old");
    console.log("------")
}

let Ulrich = new Person('Ulrich',22);
let Odd = new Person('Odd',17);

Ulrich.showID();
Odd.showID();
```
相当于在类中添加一个方法，让所有对象都可以共享使用
