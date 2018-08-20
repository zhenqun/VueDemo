测试ES6基础知识
ES6
 类及类的继承
类的基本定义（类表达式），对象创建new   方法的调用
 Es6中类的定义及继承类似于java 中类的定义与继承。继承机制类似java 只能继承一个类，可以多级继承。
如重写父类函数  ，super 关键字的，static 关键字 通过类名 调用，这里主要是指的方法。
这里也可以定义一个能产生某个对象的类，来生成对象。
var  Dog={
   createDogs:function () {
        sound= '旺旺'
             var dog ={}
             dog.makesound = function () {
                  console.log(sound)
             }
             dog.changsound =  function (s) {
                     sound = s
             }
        return dog
   }
}

var dog1 = Dog.createDogs()
var dog2= Dog.createDogs()
var dog3 = Dog.createDogs()
dog1.makesound()
dog2.changsound('哈哈')
dog1.makesound()
dog3.changsound('嘿嘿')
dog2.makesound()

定义所有实例共享数据的类对象

ES6 Promises
在es6中 promise 用于实现异步编程，在此之前主要使用回调进行异步编程，所谓回调就是以方法（函数）作为参数 传入方法（函数）中，回调的话是同步的，是阻塞的。

Promise 主要来帮助执行多个异步事件。提供了一种来实现异步的机制

function getSum(n1, n2) {
  var isAnyNegative = function() {
    return n1 < 0 || n2 < 0;
  }
  var promise = new Promise(function(resolve, reject) {
    if (isAnyNegative()) {
      reject(Error("Negatives not supported"));
    }
    resolve(n1 + n2)
  });
  return promise;
}

getSum(1, 6)
  .then(function (result) {
      console.log(result);
    },
    function (error) {
      console.log(error);
    });

如上 Promise 执行成功时 resolve 解析，失败的时候 执行reject   并将解析结果传递给 then 的两个函数 作为参数
Resolve 异步调用then 中的第一参数。Catch(function) 主要是用来代替，then 里面的 reject 处理函数的

Promise.all 接受一个promise  数组  当里面都是 resolve  状态时 才执行下一步

模块化
使用 Export   import  关键字 对js 对象   方法 代码段  输出 和引入，以便能能够进行重用

export多个文件
var a='my name is xiaoming',b='my name is xiaohong';
export {a,b}      输出多个文件
import {a,b,} from '../../export/a.js';  直接引入多个文件
console.log(a,b)

export default 和 export  {} 的区别就是  default  在文件中只能有一个，引入时可以使用任意的名字，而  export{} 可以输出多个   ，引入的时候 也必须是 用{}

webstorm    在js 文件中 用  import  之后 会报错    可以使用  vue 文件最后的 <script></script> 标签启用


一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。
export可以输出变量、函数和类，切记不可直接输出值，否则会报错，因为export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。

箭头函数
（）=>{}  类似于java 中的箭头函数(lamada表达式)
doCall = () => {
    console.log('这是箭头函数')
 }

使用的时候  doCall（）
作用域的问题
Js变量是非类型化的，程序自动判断变量类型  if（i） 这里的I 可以是各种类型

本地和全局变量
var num = 10
function test() {
   var num = 100
   console.log("value of num in test() "+num)
}
console.log("value of num outside test() "+num)
test()

var  与let 的区别： var 关键字 为变量指定函数范围，let 将脚本对变量的访问限制在  最近的封闭块内。
Const 定义只读变量 不可重新赋值  const 和let 都是块及的。
