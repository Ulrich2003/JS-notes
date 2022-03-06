# javascript定时器使用
可以使用`setInterval(回调函数，间隔时间)`函数，定时调用一段程序
- 回调函数本质就是一个函数（有点废话），但它是JS帮我们调用的，所以叫回调函数。
- 间隔时长单位是毫秒

`setInterval()`会返回一个`Number`类型的数据，这个数据作为定时器的唯一标识
`clearInterval(定时器标识)`可以关闭一个指定的定时器

##### 测试代码：
```html
<script>
    window.onload = function () {
        var i = 0
        var timer = setInterval(() => {
            i++;
            if(i==10){
                // 关闭定时器
                clearInterval(timer);
            }
            console.log(i);
        }, 500);
    };
  </script>
```
##### 输出结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/fe18d37f101c4a3898ed43c530e4d391.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)
# 延时调用的使用
`setTimeout()`只会执行一次
```html
<script>
    window.onload = function () {
        var timer = setTimeout(() => {
            console.log("延时5s后，我终于被调用了")
        }, 5000);
        
    };
  </script>
```

