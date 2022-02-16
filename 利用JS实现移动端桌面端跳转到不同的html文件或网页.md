# 利用JS实现手机和电脑跳转到不同的html文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/55d45c80bac14bb9b0a9cf184b16d3e4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)

```html
<script type="text/javascript">
    var redirect = () => {
        // 获取设备信息
        let userAgent = navigator.userAgent.toLowerCase();
        // 使用正则表达式判断设备类型
        let device = /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/;
        if(device.test(userAgent)){
            // 跳转到移动端页面
            window.location.href="mobile.html";
        }else{
            // 跳转到桌面端页面
            window.location.href="pc.html";
        }
    }
</script>
```

