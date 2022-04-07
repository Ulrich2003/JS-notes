# 什么是深浅拷贝
**浅拷贝可以理解为拷贝一个对象后，只对该对象的基础数据类型进行了拷贝，而引用数据类型只是进行了引用的传递**。如果这句话还解释不清楚，那也可以换下面这种说法：
- 浅拷贝(copy)：拷贝父对象，不会拷贝对象的内部的子对象
- 深拷贝(deepcopy)：完全拷贝了父对象及其子对象。

**直接賦值不属于拷贝：**
直接用等于号（賦值号）去将对象賦值给另外一个“变量”，只是对原对象做了引用传递！
🌰例子🌰：
```js
let Person = {name:"Joshua",
    age:18,
    // 对象里面的子对象
    otherInformation:{
        school:'SiT'
    }
}

let Person1 = Person;
Person.age = 28;
Person.otherInformation.school = "SP"
// 对Person进行修改后，Person1的数据也全部变了
console.log(Person1.age); // 28
console.log(Person1.otherInformation.school) // SP
```

# JS利用拓展运算符快速浅拷贝一个对象

```javascript
let Person = {name:"Joshua",
    age:18,
    // 对象里面的子对象
    otherInformation:{
        school:'SiT'
    }
}

// 利用拓展运算符快速浅拷贝一个对象
let Person1 = {...Person} 
Person.age = 28
Person.otherInformation.school = 'SP'

console.log(Person1.age) // 18
console.log(Person1.otherInformation.school) // SP
```

