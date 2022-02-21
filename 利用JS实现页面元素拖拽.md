# 利用JS实现卡片拖拽
![在这里插入图片描述](https://img-blog.csdnimg.cn/3cd09b064511446aae900ee4156c646c.gif#pic_center)
需求分析：
拖拽的流程：
1. 当鼠标在被拖拽元素上按下时，开始拖拽（onmousedown）
2. 当鼠标移动时被拖拽的元素跟随鼠标移动 🖱️（onmousemove）
3. 当鼠标松开时，被拖拽的元素固定在当前位置（onmouseup）
### 前置知识：
[「1」通过JS修改或读取元素的CSS样式](https://blog.csdn.net/weixin_45525653/article/details/123017403?spm=1001.2014.3001.5501)
[「2」什么是事件对象？什么是事件冒泡？如何阻止事件冒泡？](https://blog.csdn.net/weixin_45525653/article/details/123023020?spm=1001.2014.3001.5501)中的什么是事件对象。
### 编码详情：
一、创建一个盒子，🆔值为“box1”
![在这里插入图片描述](https://img-blog.csdnimg.cn/cd81910dc86b4b71aae3801670309633.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)
二、编写JS代码
![在这里插入图片描述](https://img-blog.csdnimg.cn/9142988e3f854fbea8370fe296c7b0b4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)
##### 为什么需要计算盒子的偏移量呢❓
是因为倘若我们不计算盒子偏移量，直接让
`box1.style.left = document.clientX + "px";` 
`box2.style.left = document.clientY + "px";` 
的话，每一次点击盒子，我们都会看到盒子左上角直接跳到鼠标指针的顶部，而不是我们点击盒子哪个位置我们就可以拖动盒子哪个位置。

像这种效果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/11f28e1673c5408fa6d8c9507e859280.gif#pic_center)

所以我们需要通过计算盒子偏移量来解决这个问题。
通过下图发现，盒子在光标点击时显示的偏移量应该是：

```javascript
var offsetLeft = event.clientX - box1.offsetLeft;
var offsetTop = event.clientY - box1.offsetTop;
var left = event.clientX - offsetLeft;
var top = event.clientY - offsetTop;
// 通过JS修改box1的css值
box1.style.left = left + "px";
box1.style.top = top + "px";
```
代码看着头晕 😵‍💫，但下面这张图看得懂就不头晕 💡
![在这里插入图片描述](https://img-blog.csdnimg.cn/94e639bfb8924b9ea220cdcbd0919ca9.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_19,color_FFFFFF,t_70,g_se,x_16)
##### 为什么onmousemove和onmouseup事件都要绑定在document上而不是绑定在box1上❓
因为如果绑定在box1上，当box1被其他元素遮挡时（如被其他div或移出窗口边缘），就没办法调用box1上的事件响应回调函数了，所以需要绑定在document上，随时响应鼠标移动和鼠标按钮抬起事件。
### 全部代码：
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
    <div id="box1">
      爱是恒久忍耐，又有恩慈；爱是不嫉妒，爱是不自夸，不张狂，不作害羞的事，不求自己的益处，不轻易发怒，不计算人的恶，不喜欢不义，只喜欢真理；凡事包容，凡事相信，凡事盼望，凡事忍耐。爱是永不止息。（林前13:4
      - 8）
    </div>
  </body>

  <style>
    html {
      padding: 2rem;
    }
    #box1 {
      width: 300px;
      height: 300px;
      box-shadow: 0px 0px 20px #00000080;
      background: #3494e6; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to bottom,
        #ff76bb,
        #ffab3d
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to bottom,
        #ff76bb,
        #ffab3d
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      padding: 1.5rem;
      font-size: 1.2rem;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
    }
  </style>

  <script>
    window.onload = function () {
      // 为box1绑定一个鼠标按下事件
      var box1 = document.getElementById("box1");
      box1.onmousedown = function (event) {
        // 计算盒子的偏移量
        var offsetLeft = event.clientX - box1.offsetLeft;
        var offsetTop = event.clientY - box1.offsetTop;
        // 为document绑定一个onmousemove事件，开始拖拽元素
        document.onmousemove = function (event) { 
          var left = event.clientX - offsetLeft;
          var top = event.clientY - offsetTop;
          box1.style.left = left + "px";
          box1.style.top = top + "px";
        };
        // 为document绑定一个鼠标松开事件，停止拖拽
        document.onmouseup = function () {
          // 取消document的onmousemove事件
          document.onmousemove = null;
          // 取消document的onmouseup事件
          document.onmouseup = null;
        };
        // 取消浏览器默认行为，避免一些全选状态（Ctrl+A）引发的Bug
        return false;
      };
    };
  </script>
</html>
```



