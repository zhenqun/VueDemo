//  声明一个类(类表达式已经命名)
var Dog = class Gog {
  constructor(name,color){ // 也是初始化话 也是定义类的属性
       this.name = name
       this.color  = color
  }
  doPrint(){
    console.log('Dog is printIng')

  }
 doCall = () => {
     console.log('这是箭头函数')
  }
}
// 声明一个类（类表达式为命名）
/*
var Dog = class  {
  constructor(name,color){
    this.name = name
    this.color  = color
  }
  doPrint(){
    console.log('Dog is printIng')
  }
}

// 测试类的基本定义（含构造方法）
var dogA= new Dog('xiaohei','blue')
     dogA.doPrint()
    console.log(dogA.color)
*/


/**
 * static 关键字的使用
 *
 */

/*var Cat = class {
     constructor( name){
       this.hello = name
     }
  static doDeepCopy(){
      console.log('深度拷贝')
       console.log('hello')
       return 'rr'
  }
}
var cat  = new Cat('mao')
console.log(cat.hello)
console.log(Cat.doDeepCopy())// *******  如果打印一个方法的话 这个方法是徐亚返回值的
console.log( dogA instanceof Dog)*/

/**
 * 类的基本继承 方法重写及super 关键字的使用
 */

class  Shape{// 声明式定义类
    constructor(name){
      this.name= name|| '形状'
      }
      doPrint(){
        console.log('Shape。。。。。')
      }
}
class Circle extends Shape {
      doShanPrint(){
        console.log('圆形print')
      }
  doPrint(){
       // super.doPrint()
    console.log('Shape>>>>>>>')
  }
}


var shanyang = new Circle()
shanyang.doPrint()
console.log(shanyang.doShanPrint()) // *******  如果打印一个方法的话 这个方法是徐亚返回值的  不然会有undefined
console.log(shanyang.name)


function sayHello() {//
   console.log('say  hello  word')
}

export  { Dog,sayHello }

