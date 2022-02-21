# 什么是事件的委派❓
指事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素
事件的委派利用了事件的冒泡，通过委派可以减少事件绑定的次数，提高程序的性能

🌰 例子：通过事件委派，实现点击`<ul></ul>`中的每一个`<li></li>`都能弹出弹框，弹框里面写着“H-E-L-L-O”

但该例子存在一些问题，代码后面会继续阐述

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
    <ul id="ul">
        <li><a href="#">点我弹框</a></li>
        <li><a href="#">点我弹框</a></li>
        <li><a href="#">点我弹框</a></li>
    </ul>
</body>

<style>
    
</style>

<script>
    window.onload = function(){
        var ul = document.getElementById('ul');
        ul.onclick = function(){
            alert("H-E-L-L-O");
        }
    }
</script>
</html>
```
该例子把事件绑定到ul标签上🏷️，这时会出现即使我们不点击li标签🏷️，在ul标签内随意点击，都能出现弹框，我们要如何做才能规避这种错误弹框？
![在这里插入图片描述](https://img-blog.csdnimg.cn/22a40268db0f4dc29480244d3e6f6b02.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)
✅ 使用事件对象中的target来解决上面发生的问题：
🧷 前置知识：[什么是事件对象❓](https://blog.csdn.net/weixin_45525653/article/details/123023020?spm=1001.2014.3001.5501)
事件对象（event）中的target表示触发事件的对象
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
    <ul id="ul">
        <li><a class="link" href="#">点我弹框</a></li>
        <li><a class="link" href="#">点我弹框</a></li>
        <li><a class="link" href="#">点我弹框</a></li>
    </ul>
</body>

<style>
    
</style>

<script>
    window.onload = function(){
        var ul = document.getElementById('ul');
        ul.onclick = function(event){
            // event 中的 target 表示触发事件的对象。
            if(event.target.className == 'link'){
                alert("H-E-L-L-O");
            }
        }
    }
</script>
</html>
```

