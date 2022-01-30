# JS中数组foreach的使用
`foreach（）`方法需要一个函数作为参数，这个函数被称为回调函数。
##### 什么是回掉函数❓
回掉函数由我们创建，但不由我们调用
##### foreach的使用：

```javascript
let arr = ["AOK","JIN","OPE","IOP"];

arr.forEach(function (value, index){
    console.log(value);// 元素值
    console.log(index);// 元素索引下标
})
```

##### 还可以传递一个array形参值
```typescript
let arr = ["AOK","JIN","OPE","IOP"];

arr.forEach(function (value, index, array){
    console.log(value+' '+index+' '+array);
})
```
##### 输出结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/0ec17982a1f24cdfb2714f534313de98.png)

