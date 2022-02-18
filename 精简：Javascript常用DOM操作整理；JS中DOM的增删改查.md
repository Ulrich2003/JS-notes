# JS常用DOM操作整理; JS中DOM的增删改查
## 一、 DOM查询
### 获取元素节点
通过document对象调用：
|方法名|作用  |
|--|--|
| getElementById() |通过id属性获取一个元素节点对象  |
| getElementsByTagName()|通过标签名获取一组元素节点对象 |
|getElementsByName() |通过name属性获取一组元素节点对象 |
|getElementsByClassName()|根据元素的class属性值查询一组元素节点对象|
|querySelector(".box1 div")|可以根据一个CSS选择器来查询一个元素节点对象，如果满足条件的元素有多个，那么它只会返回第一个|
|querySelectorAll()|该方法和querySelector()用法类似，不同的是它会将符合条件的元素封装到一个数组中返回|

通过具体元素节点调用：
|方法名|作用  |
|--|--|
| getElementsByTagName() | 返回当前节点的指定标签名后代节点 |

|属性名| 作用 |
|--|--|
| childNodes | 表示当前节点的所有子节点 |
|firstChild|表示当前节点的第一个子节点|
|lastChild|表示当前节点的最后一个子节点|
|parentNode|表示当前节点的父节点|
|previousSibling|表示当前节点的前一个兄弟节点|
|nextSibling|表示当前节点的后一个兄弟节点|
### 获取body标签

```javascript
var body = document.getElementsByTagName("body")[0];
```
上面这种写法可以获取到body标签，但有点麻烦。事实上，在document中有一个属性body，它保存的就是body标签的引用，所以可以这么写：

```javascript
var body = document.body;
```
### 获取html标签
```javascript
var html = document.documentElement;
```
### 获取页面中所有的元素

```javascript
var all = document.all;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/1a03c845dba14cf188e94a58eb5a33a4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)
上面这种方法已经被弃用了，也可以用下面这种方法代替：
```javascript
var all = document.getElementsByTagName("*");
```
## 二、DOM增删改
 增操作：
 
|方法|作用  |
|--|--|
| createElement("div") |创建元素节点，需要一个标签名作为参数，将会根据该标签名创建元素节点对象，并作为返回值返回  |
|createTextNode(“文本内容”)|创建一个文本节点对象，需要一个文本内容作为参数，将会根据该内容创建文本节点，并作为返回值返回|
|appendChild()|向一个父节点中添加一个新的子节点|
|父节点.insertBefore(新节点，指定节点)|在指定的子节点前面插入新的子节点|

🌰例子：创建节点`<div>Ulrich</div>`

```javascript
var div = document.createElement("div");
var text = document.createTextNode("Ulrich");
// 将元素节点和文本节点联系起来
div.appendChild(text);
```
也可以用innerHTML来设置文本

```javascript
var div = document.createElement("div");
div.innerHTML = "Ulrich";
```

删操作：
|方法|作用  |
|--|--|
| removeChild() |删除子节点  |
🌰例子：在不清楚父节点是谁的情况下，可以这样删除元素：

```javascript
要删除的节点.parentNode.remove(要删除的节点);
```
改操作：
|方法|作用  |
|--|--|
| 父节点.replaceChild(新节点，旧节点) |替换子节点  |

