# JS中为一个元素的相同事件同时绑定多个响应函数
利用`addEventListener(1,2,3)`为元素绑定响应函数

- 参数1：事件的字符串，不要on，比如“click”
- 参数2：回调函数，当事件触发时该函数会被调用
- 参数3：是否在捕获阶段触发事件，需要一个布尔值，一般都传false

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  
  <body>
    <button id="btn">我是一个按钮</button>
  </body>

  <script>
    window.onload = function () {
      var btn = document.getElementById("btn");
      btn.addEventListener("click",function(){
          alert("响应事件 1")
      },false)
      btn.addEventListener("click",function(){
          alert("响应事件 2")
      },false)
    };
  </script>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/a228dc67ab484981a0f17f92c6e8ca5f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)



