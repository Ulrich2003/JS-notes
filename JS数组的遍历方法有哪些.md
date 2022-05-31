# JavaScript数组的遍历方法有哪些
![在这里插入图片描述](https://img-blog.csdnimg.cn/a467e40f636740f9b40b0026ab71c3bb.jpeg#pic_center)
### 1⃣️ forEach（）
是否改变原数组：❌
⚠️ 注意：没有返回值

```javascript
let arr = ['a','b','c','d']
arr.forEach((value,index,arr)=>{
	// output：数组中的值，数组下标，原数组
    console.log(value,index,arr)
})
```

**output：**

![在这里插入图片描述](https://img-blog.csdnimg.cn/2ccd60a497364d41b89e3b3166276745.png)
<hr>

### 2⃣️ map（）
是否改变原数组：❌

⚠️ 注意：有返回值，可链式调用

🔙 返回值：一个由原数组每个元素执行回调函数的结果组成的新数组。

```javascript
let arr = ['a','b','c','d']

let newArr = arr.map((value,index,arr)=>{
    return value+'1'
})
```

**newArr：**

```handlebars
[ 'a1', 'b1', 'c1', 'd1' ]
```

<hr>

### 3⃣️ filter（）
是否改变原数组：❌

⚠️ 注意：过滤数组，有返回值，可链式调用

🔙 返回值：返回包含符合条件的元素的数组

```javascript
let arr = ['a','B','c','D']

let newArr = arr.filter((value,index,arr)=>{
    // 正则判断：如果结果为true，则把value返回给新数组
    return /[A-Z]/.test(value)
})
```
**newArr：**

```handlebars
[ 'B', 'D' ]
```

<hr>

### 4⃣️ for...of
是否改变原数组：❌

⚠️ 注意：遍历数组用，有返回值，不推荐用`for...in`遍历数组

🔙 返回值：返回的是数组的元素（value值）

```javascript
let arr = ['a','b','c','d']

for (let value of arr) {
    console.log(value)
}
```

**output：**


```handlebars
a
b
c
d
```

<hr>

### 5⃣️ every ( ) 和 some ( )
是否改变原数组：❌

⚠️ 注意：有返回值

🔙 返回值：返回值是`布尔值`。some()只要有一个是true，便返回true；而every()只要有一个是false，便返回false

**`some()`**

```javascript
let arr = ['a','b','c','d']

let boolResult = arr.some((value,index,arr)=>{
    return value==='c'
})
```
**boolResult：**


```handlebars
true
```

**`every()`**

```javascript
let arr = ['c','c','c','c']

let boolResult = arr.every((value,index,arr)=>{
    return value==='c'
})
```
**boolResult：**


```handlebars
true
```

<hr>

### 6⃣️ find() 和 findIndex()
是否改变原数组：❌

⚠️ 注意：有返回值

🔙 返回值：find()返回的是第一个符合条件的值；findIndex()返回的是第一个返回条件的值的索引值

```javascript
let arr = ['a','b','c','d']

let value = arr.find((value,index,arr)=>{
    return value==='c'
})

let index = arr.findIndex((value,index,arr)=>{
    return value==='c'
})
```
**value：**


```handlebars
c
```
**index：**


```handlebars
2
```

<hr>

### 7⃣️ reduce() 和 reduceRight()
是否改变原数组：❌

⚠️ 注意：有返回值

🔙 返回值：reduce()对数组正序操作；reduceRight()对数组逆序操作

```javascript
let arr = ['a','b','c','d']

let value = arr.reduce((preValue,curValue)=>{
    return preValue+curValue
})

let reduceRightValue = arr.reduceRight((preValue,curValue)=>{
    return preValue+curValue
})
```

**value：**


```handlebars
abcd
```
**reduceRightValue：**


```handlebars
dcba
```


