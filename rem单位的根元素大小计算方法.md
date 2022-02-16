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

