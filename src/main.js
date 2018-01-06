// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

Vue.config.productionTip = false;
Vue.use(VueRouter);

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
   routes
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
