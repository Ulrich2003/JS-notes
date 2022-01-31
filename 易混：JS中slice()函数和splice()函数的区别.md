# JS中slice()函数和splice()函数的区别

## slice()函数
作用：从某个已有的数组返回**选定**的元素 🔙

`arr.slice( 开始索引,结束索引 )`

⚠️ 注意：截取范围是一个**左闭右开**区间

```javascript
let arr = ['one','two','three','four','five','six'];
value = arr.slice(1,4);
```
value = `[ 'two', 'three', 'four' ]`

⚠️ 第二个索引值也可以忽略不写，意思是截取「开始索引后的所有内容」:

```javascript
let arr = ['one','two','three','four','five','six'];
value = arr.slice(4);
```
value =  `[ 'five', 'six' ]`

⚠️ 两个索引值均可以是负值，意味着从「数组尾向前数第几个元素」：

```javascript
let arr = ['one','two','three','four','five','six'];
value1 = arr.slice(1,-2);
value2 = arr.slice(-3,-1);
```
value1 = `[ 'two', 'three', 'four' ]`
value2 = `[ 'four', 'five' ]`

## splice()函数
作用：删除元素 ❌ ，并向数组添加新元素 ➕

❗️使用`splice()`函数会影响原数组，函数的返回值是**被删除**的元素

##### 仅删除：
`arr.slice( 开始索引, 删除元素的个数 )`
```javascript
let arr = ['one','two','three','four','five','six'];
arr.splice(2,2);
console.log(arr);
```
output：`[ 'one', 'two', 'five', 'six' ]`

##### 删除并替换：
`arr.slice( 开始索引, 删除元素的个数, 在删除位置中添加的元素, 在删除位置中添加的元素, 在删除位置中添加的元素, ...)`

```javascript
let arr = ['one','two','three','four','five','six'];
arr.splice(2,2,'三','四');
console.log(arr);
```
output：`[ 'one', 'two', '三', '四', 'five', 'six' ]`

