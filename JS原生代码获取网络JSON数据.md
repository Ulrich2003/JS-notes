### Javascript原生代码获取网络JSON数据
```javascript
var json;
window.onload = function () {
    var url = "请求的JSON文件的URL"
    var request = new XMLHttpRequest();
    request.open("get", url);/*使用get方式请求*/
    request.send(null);/*不发送数据到服务器*/
    request.onload = function () {/*XHR对象获取到返回信息后执行*/
        if (request.status == 200) {/*数据获取成功*/
            json = JSON.parse(request.responseText);
            console.log(json);
        }else{/*请求失败的提醒*/
            console.log('JSON:Some errors have occurred')
        }
    }
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/9c582ec0f0cc47dc9bd6e13183e267f6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)


