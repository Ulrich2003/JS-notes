# JS字符串处理：slice(), substring(), substrate()的区别

### slice()的使用
详细使用方式查看我的另外一篇文章：
[易混：JS中slice()函数和splice()函数的区别](https://blog.csdn.net/weixin_45525653/article/details/122758545?spm=1001.2014.3001.5501)
```javascript
let str = "星星发亮是为了让每一个人有一天都能找到属于自己的星星";

//左闭右开截取字符串
let slice_str = str.slice(0,2);
console.log(slice_str);
// output: 星星

// 第二个索引值可以忽略不写，意思是截取「开始索引后的所有内容」
slice_str = str.slice(2);
console.log(slice_str);
// output: 发亮是为了让每一个人有一天都能找到属于自己的星星

// 两个索引值均可以是负值，意味着从「数组尾向前数第几个元素」：
slice_str = str.slice(-7,-1);
console.log(slice_str);
// output: 属于自己的星
```

### substring()的使用
索引值为正时，使用起来和`slice()`没什么区别
索引值为负时，区别在负值会被当成0看待，并且会自动调整参数的位置，比如（2，-3）会被视为（0，2）

```javascript
let str = "星星发亮是为了让每一个人有一天都能找到属于自己的星星";

slice_str = str.substring(0,2);
console.log(slice_str)
// output：星星

// 第二个索引值可以忽略不写，意思是截取「开始索引后的所有内容」
slice_str = str.substring(2);
console.log(slice_str)
// output：发亮是为了让每一个人有一天都能找到属于自己的星星

// 这个方法不能传递负值，如果传递负值，会被当成0，并且会自动调整参数的位置
slice_str = str.substring(2,-3);
console.log(slice_str)
// output：星星

slice_str = str.substring(-9,2);
console.log(slice_str)
// output：星星
```

### substr()的使用
`substr()`使用方式不同于上面两种方式
`substr(开始截取的初始索引，截取的长度)`
该方式传入的第二个参数不能是负值，不然截取不到内容。且第二个参数的含义是**截取的长度**，并非索引值

```javascript
let str = "星星发亮是为了让每一个人有一天都能找到属于自己的星星";

slice_str = str.substr(2,5);
console.log(slice_str);
// output：发亮是为了

// 省略第二个参数值
slice_str = str.substr(2);
console.log(slice_str);
// output：发亮是为了让每一个人有一天都能找到属于自己的星星

// 第一个参数值是负值时，意味着从「数组尾向前数第几个元素」
slice_str = str.substr(-9,9);
console.log(slice_str);
// output：找到属于自己的星星
```

