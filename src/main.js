// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

/* eslint-disable*/
const routes = [{
	path:'/',
	redirect: '/goods'
}, {
	path:'/goods',
	name: 'goods',
	component: goods
}, {
	path:'/ratings',
	name: 'ratings',
	component : ratings
}, {
	path:'/seller',
	name: 'seller',
	component : seller
}];
const router = new VueRouter({
	linkActiveClass: 'active', // 配置自定义的选中样式名称
   routes
});
// mode:'history';
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
