/**
 * Created by sailengsi on 2017/5/11.
 */

import { Content } from 'layout/'

import { Function } from 'views/'

export default {
  path: 'open',
  name: '公共内容',
  icon: 'inbox',
  component: Content,
  redirect: '/function/open/list',
  children: [ {
    path: 'list',
    name: '列表',
    icon: 'reorder',
    component: Function.Open.List
  }, {
    path: 'form',
    name: '表单',
    icon: 'edit',
    component: Function.Open.Form
  }, {
    path: 'vuex',
    name: 'Vuex',
    icon: 'window-restore',
    component: Function.Open.Vuex
  },{
    path: 'es6',
    name: 'ES6',
    icon: 'window-restore',
    component: Function.Open.Es6
  }]
}
