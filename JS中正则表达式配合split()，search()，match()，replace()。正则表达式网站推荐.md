## JS中正则表达式配合split()，search()，match()，replace()。正则表达式网站推荐
### 正则表达式网站推荐：
[菜鸟前端工具](https://c.runoob.com/front-end/854/)
### 正则 + split（）
`split()`可以将一个字符串拆分为一个数组
⚠️ ：即使不设置正则表达式全局匹配，也会在字符串中所有的匹配项上做拆分

示例：根据任意字母拆分字符串
```javascript
str = '1a2b3c4d5e6'
console.log(str.split(/[A-z]/))
// output: [ '1', '2', '3', '4', '5', '6' ]
```

### 正则 + search（）
寻找字符串中🈶️🈚️‘abc’, 'abd'或 ‘abe’
⚠️：即使设置正则表达式全局匹配，也只会找到第一个匹配项的索引值

```javascript
str = 'abz abd abe abf'
console.log(str.search(/ab[cde]/))
// output: 4
// 意思是在索引值为4时，找到第一个匹配项
```
### 正则 + match（）
`match()`可以根据正则表达式，从一个字符串中将符合条件的内容提取出来。默认情况下match只会找到第一个符合要求的内容，找到后就停止检索，但我们可以设置传入的正则表达式为全局检索

```javascript
str = '1a2b3c4d5e6f'
console.log(str.match(/[A-z]/g));
// output: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```
`/[A-z]/g`中的`g`表示全局检索
### 正则 + replace（被替换的内容，新的内容）
可以将字符串中指定内容替换为新的内容。
默认只会替换第一个匹配项

```javascript
str = '1a2a3a4a5a6a'
console.log(str.replace('a','#'));
// output: 1#2a3a4a5a6a
```
⬆️ 如果要替换掉全部的 a 或 A 呢❓
**可以传入一个正则表达式：**

```javascript
str = '1a2A3a4a5a6A'
console.log(str.replace(/a/gi,'#'));
// output: 1#2#3#4#5#6#
```
##### replace也可以实现删除字符串中的内容

```javascript
str = '1a2A3a4a5a6A'
console.log(str.replace(/a/gi,''));
// output: 123456
```

