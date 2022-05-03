

# Object.defineProperty( , , {} )

```javascript
  let person = {
		name:'ulrich',
		sex: 'male'
	}
	let number = 18;
	
	Object.defineProperty(person,'age',{
		// value:18,
		enumerable:true, // 控制属性是否可以被枚举
		writable:true, // 控制属性可否被修改
		configurable:true, // 控制属性可否被删除
		get(){ // 有人读取person的age值时，get函数（getter）就会被调用，且返回值就是age的值
			console.log('有人读取age属性了')
			return number
		},
		set(value){ // 有人修改person的age值时，set函数（setter）就会被调用
			console.log('有人修改age属性了，且值是',value);
			number = value
		}
	})
```

