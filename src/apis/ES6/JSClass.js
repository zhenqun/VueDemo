/**
 * es6定义类Demo
 */
//类表达式创建类(类表达式已经命名)
var Dog = class Gog {
  constructor(name,color){ // 构造方法的作用：也是初始化话 也是定义类的属性
    this.name = name      // 类属性
    this.color  = color
  }
  doPrint(){  // 类的基本方法
    console.log('Dog is printIng')

  }
  doCall () { // 使用箭头函数定义类方法
    console.log('这是箭头函数')
  }
}
// 类表达式创建类（类表达式未命名）
var Dog = class  {
  constructor(name,color){
    this.name = name
    this.color  = color
  }
  doPrint(){
    console.log('Dog is printIng')
  }
}
// 声明方式创建类
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

var  ploygon = new Polygon('长度','宽度')
     console.log(ploygon.height)

// static 关键字的使用
var Cat = class {
     constructor( name){
       this.hello = name
     }
  static doDeepCopy(){
      console.log('深度拷贝')
       console.log('hello')
  }
}
var cat  = new Cat('mao')
console.log(cat.hello)
Cat.doDeepCopy()// *******  如果打印一个方法的话  方法是要有返回值的

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
//这里测试的是类的基本继承 super 关键字 和方法重写
var shanyang = new Circle()
shanyang.doPrint()
shanyang.doShanPrint() // *******  如果打印一个方法的话 这个方法是徐亚返回值的  不然会有undefined
console.log(shanyang.name)
