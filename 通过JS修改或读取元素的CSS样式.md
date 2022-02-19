# 通过JS修改/读取元素的CSS样式
内联样式就是写在元素标签上的样式：

```html
<div style="width:500px;"></div>
```
样式表样式就是写在.css文件或在`<style>...</style>`标签里的样式：

```html
<style>
div{
	width:500px;
}
</style>
```

### 操作内联样式
语法：
在JS中 通过`元素.style.样式名 = 样式值`来修改元素的内联样式：
🌰 例子：

```javascript
var box1 = document.getElementById("box1");
box1.style.width = "500px";
```
⚠️ 注意：如果样式名里面含有‘-’符号（如`background-color`），则需要使用驼峰命名法，将‘-’号后面的第一个字母转换成大写字母，免得让JS认为这是一个减法运算符。
🌰 例子：

```javascript
var box1 = document.getElementById("box1");
box1.style.backgroundColor = "red";
```

##### ⚠️ 注意：通过`.style.`读取和设置的都是内联样式，无法读取到样式表中的样式

### 获取样式表样式：
⚠️ 以下操作只能读取不能修改❗️
|方法|作用  |
|--|--|
| getComputedStyle(要获取样式的元素，伪元素) | 这个方法是window的方法，可以直接使用；利用该方法可以获取到元素当前的样式。需要传递两个参数，第一个参数是要获取样式的元素；第二个参数是一个伪元素，但一般传null。该方法返回一个对象，对象中封装当前元素对应的样式。 |
🌰 例子：
![在这里插入图片描述](https://img-blog.csdnimg.cn/4c0e8f5e56ff40a99fb24a19a96f0ebb.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)
⚠️ 注意：
如果获取的样式没有设置，则会获取到真实具体的值，而不是默认值
比如：没有设置width，它不会获取到auto，而是一个具体的长度




