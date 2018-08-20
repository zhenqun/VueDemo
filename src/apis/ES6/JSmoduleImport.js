// 测试import 导入模块
import { sayHello,Shape,testDemo }  from './JSmoduleExport'
// 转接sayHello导出值
function sayHelloImport() {
    return sayHello()
}

// 给类添加一个方法
 Shape.tellResource = function () {
      return 'I  am added  to the  ShapeClass  at JSmoduleImport.js'
 }

 // 拼接变量字符串
  //testDemo = testDemo + 'I am added at JSmouduleImport.js'


export {sayHelloImport as sayHelloImport,Shape as ShapeImport, testDemo as testDemoImport}
