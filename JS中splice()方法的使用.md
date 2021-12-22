# JS中splice()方法的使用

⭕️ splice用于添加、删除或替换**数组**中的元素，并返回被删除的元素

⚠️ 注意： 这种方式会改变原数组

![image-20211222110825708](https://vichien-public.oss-cn-guangzhou.aliyuncs.com/typora/image-20211222110825708.png)

### 传入参数：

##### spice(1⃣️ start: number, 2⃣️ deleteCount?: number，3⃣️ item1，item2，...)

⭕️ -----------必填项----------------

1⃣️中传入一个number类型的数，规定数组中添加/删除的位置，使用负数可从数组结尾处规定位置。

2⃣️ 中传入一个number类型的数，规定删除元素的数量，如果为0的话，则不删除元素。

⭕️ -----------可选项----------------

3⃣️ 中传入多个元素，这些元素是添加到数组中的新元素

### 代码示例：

- 删除 ❌

删除数组中下标为1⃣️的项

```javascript
let array = ["A","B","C","D"];
array.splice(1,1);
console.log(array); // [ 'A', 'C', 'D' ]
```

删除数组中下标为1⃣️和其后连续的1⃣️项

```javascript
let array = ["A","B","C","D"];
array.splice(1,2);
console.log(array); // [ 'A', 'D' ]
```

- 添加 🔗

在数组中下标为1⃣️的位置**前**添加1，2，3，4四个项

```javascript
let array = ["A","B","C","D"];
array.splice(1,0,'1','2','3','4')
console.log(array); // ['A', '1', '2','3', '4', 'B','C', 'D']
```

- 替换 🔙

用 [1，2] 替换掉数组中的下标为1⃣️的项和下标为2⃣️项

```javascript
let array = ["A","B","C","D"];
array.splice(1,2,'1','2')
console.log(array); // [ 'A', '1', '2', 'D' ]
```

- start为负数的测试项

```
let array = ["A","B","C","D"];
array.splice(-2,1,'1','2')
console.log(array); // [ 'A', 'B', '1', '2', 'D' ]
```



