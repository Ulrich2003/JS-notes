# JS翻转字符串最优解决方案 -- 一行代码解决字符串翻转问题

```javascript
let str = "6 5 4 3 2 1"
str = str.split('').reverse().join('');
```
输出结果：1 2 3 4 5 6
### 原理：
先将「字符串」转换为「数组」：`str.split('')`
在数组上使用`.reverse()`翻转数组
将数组还原为字符串：`join('')`

