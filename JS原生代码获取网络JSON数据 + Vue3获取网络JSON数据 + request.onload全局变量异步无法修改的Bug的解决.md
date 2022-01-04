### Javascript原生代码获取网络JSON数据 + Vue3获取网络JSON数据 + request.onload全局变量异步无法修改的Bug的解决
#### JavaScript获取方法：
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
#### Vue3 获取方法

```javascript
<script>
    const App = {
      data() {
        return {
          json: {},
        };
      },
      methods: {
        getJSON: function () {
          var url =
            "请求的JSON文件的URL"; /*json文件url*/
          var request = new XMLHttpRequest();
          request.open("get", url); /*设置请求方法与路径*/
          request.send(null); /*不发送数据到服务器*/
          const that = this; /*保留正確的this指向*/
          new Promise((resolve, reject) => {
            request.onload = function () {
              /*XHR对象获取到返回信息后执行*/
              if (request.status == 200) {
                /*返回状态为200，即为数据获取成功*/
                that.json = JSON.parse(request.responseText);
                resolve(that.json);
              } else {
                /*请求失败的提醒*/
                reject("JSON:Some errors have occurred");
              }
            };
          }).then((res) => {
			  console.log("获取成功");
            })
            .catch((err) => {
              console.log("err=>", err);
            });
        },
      },
      created() {
        this.getJSON();
      },
    };
    Vue.createApp(App).mount("#app");
  </script>
```

#### request.onload全局变量异步无法修改的Bug的解决
以上代码已经规避「**request.onload全局变量异步无法修改** 」的问题，解决该方法核型问题是需要有**正确的this指向**。否则会出现以下的Bug
![在这里插入图片描述](https://img-blog.csdnimg.cn/3d4ac2eb607f408799f0c42bee69cc78.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)

