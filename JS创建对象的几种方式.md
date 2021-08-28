# Javascript创建对象的三种方式
##### 1.利用对象字面量创建对象

```javascript
var obj = {
	name: 'Mike',
	age: 18,
	sex: 'man',
	sayHi: function(){
		console.log('hi,I am Mike');
	}
}
// 属性和方法均使用键值对的形式
// 方法冒号后面跟着一个匿名函数
```
##### 2.利用new Object创建对象

```javascript
var obj = new Object();
obj.name = 'Mike';
obj.age = '18';
obj.sex = 'man';
obj.sayHi = function(){
	console.log("hi, I am Mike");
}
```
##### 3.构造函数创建对象

```javascript
function Man(name,age,sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.sayHello = function(name){
		console.log("Hello "+name);
	}
}
var Mike = new Man('Mike',18,'Man');
Mike.sayHello('Emily');
```


