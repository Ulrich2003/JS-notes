# JS中Object.entires()和Object.assign()的使用
## JS中Object.entires()的使用
使用场景：需要提取对象形式的键值对数据
![在这里插入图片描述](https://img-blog.csdnimg.cn/d68670adea7b470bb38b327888ab32f5.png)
利用解构賦值配合Object.entires()拿出对象中的每一对键值对：

```js
for(let [key,value] of Object.entries(data)){
        console.log('key = ',key)
        console.log('value = ',value)
}
```

浏览器输出效果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/73664450c06b4fbca31140b89c2cccd7.png)
## JS中Object.assign()的使用
使用场景：非常适合用于合并好几个对象时使用，特别是axios发送请求时data内容的合并

格式：

`const 合并结果 = Object.assign(目标对象，源对象1，源对象2，...);`

**作用：** Object.assign()的作用有点像为几个对象取并集，并且如果**源对象**中有和**目标对象**中相同的属性，那么源对象中的值会覆盖目标对象中的值，最后，**目标对象也会被修改**，成为一个合并了好几个对象属性的对象。

```js
let obj1 = {a:1,b:2};
    let obj2 = {b:'二',c:3}
    let obj3 = {b:'贰',d:4}
    
    let resultObj = Object.assign(obj1,obj2,obj3);
    
    console.log('resultObj:',resultObj); // {a: 1, b: '贰', c: 3, d: 4}
    console.log('obj1:',obj1); // {a: 1, b: '贰', c: 3, d: 4}
```
注意点：
（1）在键名相同的情况下，越后面的值会覆盖越前面的值（观察 ‘贰’ 这个键值对）
（2）obj1 和 resultObj的内容最后是相同的

⭕️ 如果不想修改obj1的值，可以这么写：

```js
let obj1 = {a:1,b:2};
    let obj2 = {b:'二',c:3}
    let obj3 = {b:'贰',d:4}
    
    let resultObj = Object.assign({},obj1,obj2,obj3);
    
    console.log('resultObj:',resultObj); // {a: 1, b: '贰', c: 3, d: 4}
    console.log('obj1:',obj1); // {a: 1, b: 2}
```


