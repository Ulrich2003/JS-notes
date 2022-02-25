# 利用JS判断用户使用的是什么浏览器
`navigator.userAgent`是一串字符串，里面包含了用户使用的浏览器信息。我们可以利用正则表达式，在这一串字符串中检索出浏览器的名称，就可以识别用户用的是哪一个浏览器了。
本例子不适用于IE11浏览器（都2022年了，希望IE走的彻底一点）
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<script>
    window.onload = function(){
        var userAgent = navigator.userAgent;
        if(/chrome/i.test(userAgent)){
            alert("你是谷歌浏览器");
        }else if(/firefox/i.test(userAgent)){
            alert("你是火狐浏览器");
        }else if(/safari/i.test(userAgent)){
            alert("你是safari浏览器")
        }
    }
</script>
</html>
```

