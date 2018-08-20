<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>测试ES6模块化</span>
    </div>
    <div  style="align-items: center">
      <el-button style="float: right; padding: 3px 0;margin-left: 45%" type="text" @click="sayPeopleHello" >测试方法输出</el-button>
      <el-button style="float: right; padding: 3px 0 ;margin-left: 3%" type="text" @click="sysOutVar">测试变量输出</el-button>
      <el-button style="padding: 3px 0;margin-left: 3%" type="text" @click="sysOutClass">测试类输出</el-button>
    </div>
  </el-card>
</template>
<script>
   import  { sayHelloImport, ShapeImport,  testDemoImport} from '@/apis/ES6/JSmoduleImport'
    export default {
       methods:{
         sayPeopleHello: sayHelloImport,
         sysOutVar:function () {
            console.log('变量输出：')
            console.log(testDemoImport)
         },
         sysOutClass: function () {
       var shape=  new   ShapeImport ('AA','BB','CC')
           shape.makeHello()
           shape.tellName()
         }
       }
    }
</script>

<style scoped>

</style>
