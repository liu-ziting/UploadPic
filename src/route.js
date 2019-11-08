import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Upload from './components/Upload'//图片上传
import Qrcode from './components/Qrcode'//二维码生成
import Journal from './components/Journal'//日志

const router = new VueRouter({
	// mode: 'history',
	// base: '/adminAir',
	routes: [
		{path: '', component: Upload},
		{path: '/Upload', component: Upload},
		{path: '/Qrcode', component: Qrcode},
		{path: '/Journal', component: Journal},
	]
})


import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

export {router};