# apply & call & bind

`apply` 、 `call` 和 `bind` 是挂在 Function 对象上的三个方法，因此调用这个三个方法的必须是一个函数，让我们一起看一下它们的使用语法，代码如下：

```javascript
func.call(thisArg, param1, param2, ...);
func.apply(thisArg, [param1, param2, ...]);
func.bind(thisArg, param1, param2, ...)();
```

在上述的代码中，`func` 是要调用的函数，`thisArg` 一般为 `this` 所指向的对象，后面的 `param1`, `param2` 为 `func` 的多个参数，如果 `func` 不需要参数，则可以不写。

这三个函数的共同点是它们都可以改变函数 `func` 的 `this` 指向，其中 `call` 和 `apply` 的区别是传参的写法不同。`apply` 的第二个参数是一个数组，而 `call` 第二个至第 N 个参数都是给 `func` 的传参。而 `bind` 又和这两个方法不同，`bind` 虽然可以改变 `func` 的 `this` 指向，但它不是立即执行，`call` 和 `apply` 在改变函数的指向后则会立即执行。下面通过一段代码来加深对这三个方法的理解，代码如下：

```javascript
const a = {
    name: 'mac',
    getName: function (msg) {
        return msg + ', ' + this.name;
    }
};

const b = {
    name: 'min'
};

console.log(a.getName('hello')); // hello, mac
console.log(a.getName.call(b, 'hi')); // hi, min
console.log(a.getName.apply(b, ['hi'])); // hi, min
console.log(a.getName.bind(b, 'hi')()); // hi, min
```

通过上述代码的执行，可以发现这三种方式都可以达到预期的效果，也就是通过改变 `this` 的指向，从而使 `b` 对象可以直接使用 `a` 对象中的 `getName` 方法，并且可以看到后面三个方法的执行的结果都是跟 `min` 有关的。