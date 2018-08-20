/**
 * 关于es6 中模块化的验证
 **/

// export 关键字能够输出 变量  函数   类 但是不能够直接输出 值  不然会报错

// 测试方法
function sayHello() {
   console.log('I  come  from  JSmodule.js ，hello ,and  you  can  look me ！')
   return ('I  come  from  JSmodule.js ，hello ,and  you  can  look me ！')
}
// 测试变量
var testDemo= 'I am  from Jsmodule.js , i am veriableDemo'

// 测试类

class Shape {
   constructor(name,size,color){
         this.name = name
         this.size = size
         this.color = color
   }
   tellName(){
     console.log(this.name)
     return this.name
   }
   makeHello(){
     console.log('hello,i am the shape class。')
     return 'hello,i am the shape class。'
   }
}

export {sayHello,Shape,testDemo} // 输出方法  类   变量

//export {sayHello as sayHelloDemo,Shape as ShapeDemo,testDemo as testDemo}  // 如果你不想让外界看到实际的变量名字  可以使用as 充命名
