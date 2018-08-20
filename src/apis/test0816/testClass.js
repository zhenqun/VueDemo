
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
