# JS预解析（JavaScript预解析） 2021-08-27
##### JS引擎运行JS时分为两步：
 - 预解析
 - 代码执行

## 预解析
预解析JS引擎会把JS里面所有的var 还有 function 提升到当前作用域的最前面。
##### 预解析分为两个部分：

 - *变量预解析 （变量提升）：* 把所有的变量声明提升到**当前作用域**的最前面「只提升声明，**不提升賦值操作**，**不提升賦值操作**，**不提升賦值操作**」
 - *函数预解析 （函数提升）* ：把所有的函数声明提升到**当前作用域**的最前面，不调用函数
 
 

## 代码执行
按照代码书写的顺序，从上往下执行

#### 坑一「变量提升」：
![在这里插入图片描述](https://img-blog.csdnimg.cn/9c8c4b4c141d450ab1c81abb83ef3846.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_17,color_FFFFFF,t_70,g_se,x_16)
#### 坑二「变量提升」：
![在这里插入图片描述](https://img-blog.csdnimg.cn/db598b7689bd43618346e55636101446.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_20,color_FFFFFF,t_70,g_se,x_16)
#### 坑三「函数提升」：
![在这里插入图片描述](https://img-blog.csdnimg.cn/6d837c5530ee49caa87eaba002365fb2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ2h1YW5ZYW5nIENoZW4=,size_19,color_FFFFFF,t_70,g_se,x_16)**归纳不易，点赞走起**



