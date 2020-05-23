// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import News from './components/News.vue'
import Maps from './components/map.vue'
import Shop from './components/Shop.vue'
import store from './store/index'
import ShoppingItem from './components/ShoppingItem.vue'
import Cart from './components/Cart.vue'
import Login from './components/Login.vue'
import json2xml from './components/json2xml.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
Vue.use(VueRouter)
const router=new VueRouter({
	routes:[

	{
		path:'/news',component:News
	},
	{
		path:'/json2xml',component:json2xml
	},
	{
		path:'/shop',component:Shop
	},	
	{
		path:'/map',component:Maps
	},
	{
		path:'/',redirect:'/shop'
	},
	{
		path:'/shoppingitem',component:ShoppingItem
	},
	{
		path:'/cart',component:Cart
	},
	{
		path:'/login',component:Login
	},
	{
		path:'/*',redirect:'/shop'
	}]
})

/* eslint-disable no-new */


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})