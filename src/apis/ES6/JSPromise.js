/**
 * 在promise 之前的异步实现 ，主要以函数作为函数参数 作为实现形式
 * @param fnSms
 * @param fnEmail
 */
// 定义函数
function notifyAll(fnSms, fnEmail) {
  setTimeout(function() {//  用定时来实现异步执行
    console.log('starting notification process');
    fnSms();// 回调函数
    fnEmail();// 回调函数
  }, 2000);
}
// 传参调用函数
notifyAll(function() {// 回调函数1
    console.log("Sms send ..");
  },
  function() {// 回调函数2
    console.log("email send ..");
  });
console.log("End of script A");


/**
 * 以下是采用promise 的方式实现异步操作
 *
 */
// 定义函数  并以promise 实例作为返回结果 以实现函数的连续操作。定义promise 实例是立即执行的，但是回调函数却是异步的。
function getSum(n1, n2) {
  var isAnyNegative = function() { // 不建议在函数内定义函数
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

//函数调用
getSum(1, 6)
  .then(function (result) { // then 第一参数为成功时候的回调    第二个参数为失败时候的 回调  同时then 也是上步执行结果的反馈
      console.log(result);
    },
    function (error) {
      console.log(error);
    });


// 函数调用  总结：每个then 的成功失败函数 都对应上步then 的成功失败函数  是上步直接结果的反馈 参数是上一步的结果
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
console.log('=====================')

getSum(5, -6)
  .then(function(result) {
      console.log('第一个then 成功了')
      console.log(result);
      return getSum(-10, 20);
      //return 20-10
      //this returns another Promise
    },
    function(error) {
     console.log('第一个then 失败了')
      //console.log(error);
    })
  .then(function(result) {// 上一步执行成功函数  这一步得到上一步新返回的promise
      console.log(result);
      console.log('第二个then 成功了')
     // return getSum(1, -40);
      return  1- 40
      //this returns another Promise
    },
    function(error) {
      console.log('第二个then 失败了')
     // console.log(error);
    })
  .
   then(function(result) { // 上一步执行成功函数  这一步得到上一步新返回的promise
      console.log('第三个then 成功')
      console.log(result);
    },
    function(error) {
       console.log('第三个then 失败')
      //console.log(error);
    })
  .
  then(function(result) { // 上一步执行成功函数  这一步得到上一步新返回的promise
      console.log('第四个then 成功')
      console.log(result);
    },
    function(error) {
      console.log('第四个then 失败')
      //console.log(error);
    })
  console.log("End of script B ");//先打印此结果， 由此可见是异步*/


/**
 * 总结：
 *    End of script A
      =====================
     End of script B
     7
     7
     11
     error
 *
 * 由以上的执行结果可观察到 promise 的异步至执行，resolve  和reject 是异步的。
 *  then 也是当前promise 成功失败的反馈,如果有连续then 的话，如果then中的成功函数  未返会新的promise 对象的话，每一个then 都会执行自己的
 *  成功函数，只是如果上一步失败的话  下一个then  无法获得上一个then 的返回结果。如果每一个then 的成功函数都返回一个新的 promise,然后下一个
 *  then 中的成功失败函数捕获的是这个新的promise 的 resolve 和reject 的返回结果。 其实就看有没有返回新的 promise 对象。
 * **/
