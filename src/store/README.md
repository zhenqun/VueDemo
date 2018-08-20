

 vuex:是一个基于内存的，响应式的公共存储库。可以用来存储用户的登录信息，以及做一些购物车功功能的东西。采用单一状态树，也就是整个应用中只有一个store实例
我们在根实例中注册store  ，在子组件中 通过 this.$store 来访问
Getter  是用来获取数据的（主要是从state 中获取数据）
Muntation 改变state 中的数据，是更改state 中数据的唯一方式，然后通过commit 方式出发
Actions 通过调用muntation 间接更改state 中的数据。
然后通过store.dispatch 调用action 的方法
Moudel 其实就是对单一状态树进行一种分割，也包含自己的 state ，action 等


Vuex 是基于浏览器内存的，因此刷新页面数据会更改

LocalStorage : 相当于浏览器的数据库 是永久存储的。
在HTML5中，新加入了一个localStorage特性，这个特性主要是用来作为本地存储来使用的，解决了cookie存储空间不足的问题(cookie中每条cookie的存储空间为4k)，localStorage中一般浏览器支持的是5M大小，这个在不同的浏览器中localStorage会有所不同。


localStorage的局限

1、浏览器的大小不统一，并且在IE8以上的IE版本才支持localStorage这个属性

2、目前所有的浏览器中都会把localStorage的值类型限定为string类型，这个在对我们日常比较常见的JSON对象类型需要一些转换

3、localStorage在浏览器的隐私模式下面是不可读取的

4、localStorage本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡

5、localStorage不能被爬虫抓取到

localStorage与sessionStorage的唯一一点区别就是localStorage属于永久性存储，而sessionStorage属于当会话结束的时候，sessionStorage中的键值对会被清空
******** 这里要特别说明一下localStorage的使用也是遵循同源策略的，所以不同的网站直接是不能共用相同的localStorage
这里我们以localStorage来分析
// 存储数据
if(!window.localStorage){
            alert("浏览器支持localstorage");
        }else{
            var storage=window.localStorage;
            //写入a字段
            storage["a"]=1;
            //写入b字段
            storage.b=1;
            //写入c字段
            storage.setItem("c",3);
            console.log(typeof storage["a"]);
            console.log(typeof storage["b"]);
            console.log(typeof storage["c"]);
            //第一种方法读取
            var a=storage.a;
            console.log(a);
            //第二种方法读取
            var b=storage["b"];
            console.log(b);
            //第三种方法读取
            var c=storage.getItem("c");
            console.log(c);
        }

修改localStorage中的内容

if(!window.localStorage){
            alert("浏览器支持localstorage");
        }else{
            var storage=window.localStorage;
            //写入a字段
            storage["a"]=1;
            //写入b字段
            storage.b=1;
            //写入c字段
            storage.setItem("c",3);
            console.log(storage.a);
            // console.log(typeof storage["a"]);
            // console.log(typeof storage["b"]);
            // console.log(typeof storage["c"]);
            /*分割线*/
            storage.a=4;
            console.log(storage.a);
        }



删除localstorage 中的内容

1、将localStorage的所有内容清除

if(!window.localStorage){
            alert("浏览器支持localstorage");
        }else{
            var storage=window.localStorage;
            //写入a字段
            storage["a"]=1;
            //写入b字段
            storage.b=1;
            //写入c字段
            storage.setItem("c",3);
            console.log(storage.a);
            // console.log(typeof storage["a"]);
            // console.log(typeof storage["b"]);
            // console.log(typeof storage["c"]);
            /*分割线*/
            storage.a=4;
            console.log(storage.a);
        }


2、 将localStorage中的某个键值对删除

var storage=window.localStorage;
            storage.a=1;
            storage.setItem("c",3);
            console.log(storage);
            storage.removeItem("a");
            console.log(storage.a);


localStorage的键获取

var storage=window.localStorage;
            storage.a=1;
            storage.setItem("c",3);
            for(var i=0;i<storage.length;i++){
                var key=storage.key(i);
                console.log(key);
            }


JSON 存数据
if(!window.localStorage){
            alert("浏览器支持localstorage");
        }else{
            var storage=window.localStorage;
            var data={
                name:'xiecanyong',
                sex:'man',
                hobby:'program'
            };
            var d=JSON.stringify(data);
            storage.setItem("data",d);
            console.log(storage.data);
        }

JSON 取数据

var storage=window.localStorage;
            var data={
                name:'xiecanyong',
                sex:'man',
                hobby:'program'
            };
            var d=JSON.stringify(data);
            storage.setItem("data",d);
            //将JSON字符串转换成为JSON对象输出
            var json=storage.getItem("data");
            var jsonObj=JSON.parse(json);
            console.log(typeof jsonObj);



created by  zhenqun 
