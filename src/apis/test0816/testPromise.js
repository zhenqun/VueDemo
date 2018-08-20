// import {Dog,sayHello}  from './classTest'

// 定义回调函数
function notifyAll(fnSms, fnEmail) {
  setTimeout(function() {//  用定时来实现异步执行
    console.log('starting notification process');
    fnSms();
    fnEmail();
  }, 2000);
}
// 传参调用回调函数
notifyAll(function() {
    console.log("Sms send ..");
    /*var dogs=  new Dog("hello","word")
    console.log(dogs.name)*/

  },
  function() {
    console.log("email send ..");
  });
console.log("End of script"); //executes first or not blocked by others


/*
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
*/

/*getSum(1, 6)
  .then(function (result) {
      console.log(result);
    },
    function (error) {
      console.log(error);
    });*/
/*


getSum(1, 6)
  .then(function(result) {
      console.log(result);
      return getSum(-1, 20);
      // this returns another promise
    },
    function(error) {
      console.log('heiehi')
      console.log(error);
    })
  .then(function(result) {// 即使上步执行出错  仍然会执行这一步，只不过下一步获取不到结果
      console.log('success')
      console.log(result);
    },
    function(error) {
       console.log('error')
      console.log(error);
    });
*/

/*function getSum(n1, n2) {
  var isAnyNegative = function() {
    return n1 < 0 || n2 < 0;
  }
  var promise = new Promise(function(resolve, reject) {
    if (isAnyNegative()) {
      reject(Error("Negatives not supported"));
    }
    resolve(n1 + n2);
  });
  return promise;
}
getSum(5, 6)
  .then(function(result) {
      console.log(result);
      return getSum(10, 20);
      //this returns another Promise
    },
    function(error) {
      console.log(error);
    })
  .then(function(result) {
      console.log(result);
      return getSum(-1, 40);
      //this returns another Promise
    },
    function(error) {
      console.log(error);
    })
  .then(function(result) {
      console.log(result);
    },
    function(error) {
       console.log('heihei')
      console.log(error);
    }).catch(function (error) {
      console.log('hehe')
         console.log(error)
})
  console.log("End of script ");//先打印此结果， 由此可见是异步*/

// 测试 export 和import  格式化


var num = 10
function test() {
  var num = 100
  console.log("value of num in test() "+num) // 调用内部的 num
}
console.log("value of num outside test() "+num)// 调用外部的 num
test()
// export {sayHello}

/*var  no = 10;
var no = 20;
console.log(no);*/

const  i = 10
        //i = 100
