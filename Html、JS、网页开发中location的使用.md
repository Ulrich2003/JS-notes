# Javascript中location的使用
|常用方法|功能  |
|--|--|
| assign() |用来跳转到其他页面，会生成历史记录  |
|reload()|用于重新加载当前页面，作用和按下刷新按钮一样。可以传递一个bool值做参数，如果传入true，则表示强制清空浏览器缓存刷新页面|
|replace()|可以使用一个新的页面替换当前页面，调用完毕也会跳转页面，不会生成历史记录|
Location对象中封装了浏览器地址栏的信息：
![在这里插入图片描述](https://img-blog.csdnimg.cn/d4105596d33e432e8cd28d35db8e2686.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)![在这里插入图片描述](https://img-blog.csdnimg.cn/bdc5396f73c74a4f94d2f67e715ef4db.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)
如果直接修改location的值，会跳转到新修改的页面
![在这里插入图片描述](https://img-blog.csdnimg.cn/1c87152f8bdd48428d3134a41265d782.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/f8d87306daf6450ea098da7a60b77a52.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)
# assign()
实现的效果和直接修改location的效果一样
```javascript
location.assign("https://www.baidu.com");
```
# replace()
如果不想留下历史记录，可以使用`location.replace()`
![在这里插入图片描述](https://img-blog.csdnimg.cn/7b6931a9f81744fc8db3e49d8410ed20.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/16c2b9a5cb6f4811964c757ec801cd38.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)
### 测试代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="btn1">点我获取浏览器地址栏信息</button>
    <button id="btn2">直接修改location的值</button>
    <button id="btn3">location.assign()</button>
    <button id="btn4">location.replace()</button>
</body>

<script>
    window.onload = function(){
        var btn1 = document.getElementById('btn1');
        var btn2 = document.getElementById('btn2');
        var btn3 = document.getElementById('btn3');
        var btn4 = document.getElementById('btn4');
        btn1.onclick = function(){
            alert(location);
        }
        btn2.onclick = function(){
            location = "https://www.baidu.com"
        }
        btn3.onclick = function(){
            location.assign("https://www.baidu.com");
        }
        btn4.onclick = function(){
            location.replace("https://www.baidu.com");
        }
    }
</script>
</html>
```

