

 vuex:是一个基于内存的，响应式的公共存储库。可以用来存储用户的登录信息，以及做一些购物车功功能的东西。采用单一状态树，也就是整个应用中只有一个store实例
我们在根实例中注册store  ，在子组件中 通过 this.$store 来访问
Getter  是用来获取数据的（主要是从state 中获取数据）
Muntation 改变state 中的数据，是更改state 中数据的唯一方式，然后通过commit 方式出发
Actions 通过调用muntation 间接更改state 中的数据。
然后通过store.dispatch 调用action 的方法
Moudel 其实就是对单一状态树进行一种分割，也包含自己的 state ，action 等


Vuex 是基于浏览器内存的，因此刷新页面数据会更改
