# rem单位的根元素大小计算方法

```html
<script>
      var dpi = () => {
        let width = document.documentElement.clientWidth;
        let size = 20 * (width / 320) > 40 ? 40 + "px" : 20 * (width / 320) + "px";
        document.documentElement.style.fontSize = size;
      };
      window.addEventListener("load", dpi);
      window.addEventListener("resize", dpi);
</script>
```
### 也可以使用以下方案：
一些常用的Media Query断点作为html在不同屏幕下字体大小的参考（以iPhone 6为基准）
```css
@media only screen and (min-width: 320px) {
    html {
        font-size: 13.65px;
    }
}

@media only screen and (min-width: 360px) {
    html {
        font-size: 15.36px;
    }
}

@media only screen and (min-width: 375px) {
    html {
        font-size: 16px;
    }
}

@media only screen and (min-width: 390px) {
    html {
        font-size: 16.64px;
    }
}

@media only screen and (min-width: 414px) {
    html {
        font-size: 17.664px;
    }
}

@media screen and (min-width: 640px) {
    html {
        font-size: 27.31px;
    }
}
```
也可以使用线性计算，取代上面的分段式Media Query，用1行代码代替之前6个冗长的Media Query：
```css
html {
    font-size: 4.266667vw;
}
```
计算原理：
基于宽为375px的视觉稿，字号为16px。而vw是把宽度当成100%来算，所以结果是16 / 375 * 100，约等于4.266667。

----
本文参考：

[对于页面适配，你应该使用px还是rem](https://segmentfault.com/a/1190000015867354)

很不错的一篇文章
