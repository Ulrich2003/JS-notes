# JavaScript数组常用方法，看这篇文章就够了
![在这里插入图片描述](https://img-blog.csdnimg.cn/aec9de141480426ea0fcc4af6c07641b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)
## ⭕️ 数组转化为字符串
### toString()
将数组（甚至是嵌套的数组）转化为字符串
```javascript
	let arr = [1,['a','b',['A'],'c'],2,3,4,5]
    // 1,a,b,A,c,2,3,4,5
    console.log(arr.toString())
```

### join(可选参数)
可以将数组转化为字符串，可以传入一个参数作为数组元素的分隔符，倘若没有传入参数，则默认是用逗号分隔

```js
	let ary1 = ["aa","bb","cc"]
    let str = ary1.join()
    console.log(str) // aa,bb,cc
    str = ary1.join(' # ')
    console.log(str) // aa # bb # cc
```
## ⭕️ 数组增删操作
### push() -- 增操作
数组尾部添加一个或多个元素，**会改变原数组**，返回值是数组改变后的长度
```js
	let ary1 = [1,2];
    let array_length = ary1.push(3,4,5);
    console.log(array_length) // 5
    console.log(ary1) // [ 1, 2, 3, 4, 5 ]
```
配合拓展运算符的使用：

```js
	let ary1 = [1,2];
    let ary2 = ['a','b','c']
    let array_length = ary1.push(...ary2);
    console.log(ary1) // [ 1, 2, 'a', 'b', 'c' ]
```
### pop() --  删操作
删除数组中最后的一个元素，**会改变原数组**，返回值是被删除的那一个元素
```js
	let ary = [1,2,3,'aaa'];
    let removed_element = ary.pop();
    console.log(removed_element) // aaa
    console.log(ary) // [ 1, 2, 3 ]
```
### unshift() -- 增操作
数组头部添加一个或多个元素，**会改变原数组**，返回值是数组改变后的长度
```js
 	let ary1 = [1,2,3];
    let array_length = ary1.unshift('a','b','c');
    console.log(ary1); //[ 'a', 'b', 'c', 1, 2, 3 ]
    console.log(array_length) // 6
```

### shift() -- 删操作
删除数组中的第一个元素，**会改变原数组**，返回值是被删除的那一个元素
```js
	let ary = ['aaa',1,2,3];
    let removed_element = ary.shift();
    console.log(removed_element); // aaa
    console.log(ary) // [ 1, 2, 3 ]
```

## ⭕️ 数组的排序与逆序
### reverse()
用于数组逆序操作，会改变原来的数组。

```javascript
	let nums = [1,2,3,4,5,6,7,8];
    nums.reverse();
    console.log(nums) // [8,7,6,5,4,3,2,1]
```

### sort()
用于数组的排序，会改变原来的数组，按照 Unicode code 位置排序，默认升序
```javascript
	let names = ['Ulrich','Amy','Peter','John']
    names.sort();
    console.log(names)
```
不能直接用于数字的排序：
```javascript
	let names = [3,15,24,56,75,81]
    names.sort();
    console.log(names) // [ 15, 24, 3, 56, 75, 81 ]
```
如何用sort()方法排序数字呢❓写一个回调函数❗️

```javascript
	let numbers = [3,15,24,56,75,81];
    numbers.sort((x,y)=>{
        return x-y
    })
    // [ 3, 15, 24, 56, 75, 81 ]
    console.log(numbers)
```

## ⭕️ 数组的筛选与元素的查找
### filter() 「迭代方法」
数组元素的筛选，返回符合条件的元素建立新数组
```javascript
	let ary1 = ["Google","DuckDuckGo","YaHoo!","baidu"]
    let ary2 = ary1.filter((element,index,array)=>{
        return element.length>5
    })
    // [ 'Google', 'DuckDuckGo', 'YaHoo!' ]
    console.log(ary2)
```


### slice( s , e )
返回数组中[s,e) 左闭右开，该方法不会改变原数组
```js
	let ary1 = [0,1,2,3,4,5,6];
    console.log(ary1.slice(1,4)); // [ 1, 2, 3 ]
```
### indexOf(查找的值，查找起始位置)
从前往后找值，返回 值的下标
```javascript
	let nums = [1,3,5,7,9];
    console.log(nums.indexOf(3)); // 1
    console.log(nums.indexOf(-9)); // -1
```

### lastIndexOf(查找的值，查找起始位置)
从后往前找值，返回 值的下标
```javascript
	let nums = [1,3,5,7,9];
    // 从下标为1处（数字3）往前找，找到值为5的下标，返回该下标的值
    console.log(nums.lastIndexOf(5,1)) // -1 找不到
    // 从下标为2处（数字5）往前找，找到值为5的下标，返回该下标的值
    console.log(nums.lastIndexOf(5,2)) // 2 下标为2
```

### includes(查找的元素，起始位置)
判断数组中是否含有该元素，有返回true，没有返回false
```javascript
	let array = ['a','b','c','d']
	console.log(array.includes('a')) // true
	console.log(array.includes('a',2)) // false
```

## ⭕️ 数组元素的替换操作
### splice(删除元素的起始位置，删除元素的个数，新增的元素)
第一种玩法：不删除元素，在指定位置插入元素
👇下面的代码意思是：从索引为1的下标开始，删除0个元素，加入1，2，3这三个元素到数组中

```javascript
	let arr = ['a','b','c','d','e']
    arr.splice(1,0,1,2,3);
    console.log(arr) // ['a', 1,2,3, 'b', 'c', 'd', 'e']
```
第二种玩法：
👇下面的意思是：从索引为1的下标开始，删除3个元素，加入1，2，3这三个元素到数组中

```javascript
	let arr = ['a','b','c','d','e']
    arr.splice(1,3,1,2,3);
    console.log(arr) // ['a', 1, 2, 3, 'e']
```
### fill(新元素的值，开始位置，结束位置)
用一个新值替换数组中的元素，可以设定开始位置和结束位置，依旧是左闭右开区间
```javascript
	let ary1 = [1,2,3,4,5];
    let ary2 = ['a','b','c'];
    ary1.fill('a',1,4);
    console.log(ary1) // [ 1, 'a', 'a', 'a', 5 ]
```

## ⭕️ 迭代方法
### every()
数组中的值每一个都符合你给出的判断条件的时候才会返回true
```javascript
  function biggerThan10(element,index,array) {
      console.log(element,index,array)
      return element > 10
  }
  let array = [12,23,5,16,2];
  console.log(array.every(biggerThan10))
```
看输出结果可以看出every方法执行到第一个false的时候，就返回false，并不对后面的数据进行判断了。
![在这里插入图片描述](https://img-blog.csdnimg.cn/b936a5efc60940789c75fbf77fa7de46.png)

### some()
数组中的值只要有一个符合你给出的判断条件的时候就会返回true
```javascript
  function biggerThan10(element,index,array) {
      console.log(element,index,array)
      return element > 10
  }
  let array = [12,23,5,16,2];
  console.log(array.some(biggerThan10))
```
看输出结果可以知道，some方法找到了第一个为符合判定条件的结果后，立马返回true，并不对后面的内容进行判断了。
![在这里插入图片描述](https://img-blog.csdnimg.cn/da13770be7864f14a0c4a71e266dd4c1.png)

### filter()
「数组的筛选与元素的查找」中有讲到了👆

### map()
对数组的每一项都运行给定的函数，返回每次函数调用的结果组成一个新数组
```javascript
	let nums1 = [1,2,3,4,5];
    let nums2 = nums1.map((element,index,array)=>{
        return element*2
    })
    console.log(nums2) //[ 2, 4, 6, 8, 10 ]
```

### forEach()
遍历数组中的每一项
```javascript
	let ary = ['a','b','c','d'];
    ary.forEach((element,index)=>{
        console.log(element,index);
    })
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/bc12083cbe7045a2914b3e15518133bc.png)

### reduce((上一次调用回调函数返回的值，数组中正在处理的元素，数组中正在处理的元素的索引，数组对象本身)=>{}，初始值)
**前置知识：要知道回调函数是什么**
reduce有种递推的思想在里面，让你能够快速去计算一个数组的和等操作。

```
array.reduce((lastValue,currentValue,index,array)=>{},initialValue)
```

相当于你数组中有几个元素，reduce就会调用回调函数几次，每一次都能通过lastValue获取到上一次调用回调函数时，函数的返回值。
**举个例子，例子看懂就知道精髓了**🌰：
给出一个数组array，并在reduce中设置初始者为8，那么lastValue在第一次执行计算时就等于8（如果没有设置初始值默认等于0）
```javascript
let array = [1,2,3,4]
array.reduce((lastValue,currentValue)=>{
    console.log("|上一次调用回调函数返回的值为："+lastValue+"\t|数组中正在处理的元素是："+currentValue);
    return lastValue + currentValue
},8)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/e995b36749fc4ea4a810a3ed292f9b71.png)
### reduceRight()
reduceRight()本质和reduce差不多，区别在reduceRight()是从数组尾部从后向前计算的

### find()	「ES6 新增」
传入一个回调函数，找到数组中符合当前搜索规则的第一个元素的值，返回它，并且终止搜索。
```javascript
	let array = ["Ulrich2003","Ulrich","Chuanyang"];
    let result = array.find((element,index)=>{
        return index == 2
    })
    console.log(result) // Chuanyang
```

### findIndex()「ES6 新增」
传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它的下标，终止搜索。
```javascript
	let array = ["Ulrich2003","Ulrich","Chuanyang"];
    let result = array.findIndex((element,index)=>{
        return element == "Chuanyang"
    })
    console.log(result)
```

## ⭕️ 返回数组迭代器
### entries()
返回数组键值对

```javascript
	let array = ['a','b','c','d']
	for (let i of array.entries()){
    	console.log(i)
	}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/935956982346488381b4ca2b4d81c5f8.png)
### keys()
返回数组键值对的key

```javascript
	let array = ['a','b','c','d']
	for (let i of array.keys()){
    	console.log(i)
	}
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/7accef3a0d054b7a9eb7563e97face1f.png)
### values()
返回数组键值对的value

```javascript
	let array = ['a','b','c','d']
	for (let i of array.values()){
    	console.log(i)
	}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/faac8b32acc246a699f61de715ea2ada.png)
## ⭕️ 数组其他方法
### Array.from()
对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
比如，将字符串转换为数组
```javascript
	let arr = Array.from("abcd")
	// [ 'a', 'b', 'c', 'd' ]
	console.log(arr)
```
### Array.of()
用于将一组值，转换为数组。这个方法的主要目的，是弥补构造的新数组只有单个值时，数组构造函数 Array() 的不足。

```javascript
	let arr1 = Array(7)
	console.log(arr1) // [ <7 empty items> ] 长度为7的空数组
	let arr2 = Array(1,2,3) 
	console.log(arr2) //[ 1, 2, 3 ]
	let arr3 = Array.of(7) 
	console.log(arr3) //[ 7 ]
	let arr4 = Array.of(1,2,3) 
	console.log(arr4) // [ 1, 2, 3 ]
```

### concat()
可以作为连接数组使用，该操作不会改变数组原来的值
```js
	let ary1 = [1,2,3]
    let ary2 = ['a','b','c']
    let ary3 = ary1.concat(ary2)
    // [ 1, 2, 3, 'a', 'b', 'c' ]
    console.log(ary3)
```

