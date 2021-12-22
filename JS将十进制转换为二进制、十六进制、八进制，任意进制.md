# JS将十进制转换为2进制、16进制、8进制，任意进制
##### 转换为二进制

```js
let n = 1234;
console.log(n.toString(2));
```

##### 转换为十六进制

```js
let n = 1234;
console.log(n.toString(16));
```

##### 转换为八进制

```js
let n = 1234;
console.log(n.toString(8));
```
toString(radix)方法可把一个 Number 对象转换为一个字符串，radix缺省值为10，如果是10以外的数字（2 ～ 36），则返回对应的进制数


