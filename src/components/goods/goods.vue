<template>
    <div class="goods">
	     <div class="menu-wrapper" ref="menuWrapper">
             <ul>
             	<li v-for='(item,index) in goods' class="menu-item"  @click="selectMenu(index,$event)" :class="{'current':currentIndex===index}">
             		<span class="text">{{item.name}}</span>
             	</li>
             </ul>
          </div>
     <div class="food-wrapper" ref="foodWrapper">
          <ul>
    		<li v-for='item in goods' class="food-list food-hook">
    			<h1 class="title">{{item.name}}</h1>
	    	    <ul>
    		      <li v-for='food in item.foods' class="food-item">
    		      	<div class="icon">
    		      		<img :src="food.icon" alt="icon" width="57" height="57">
    		      	</div>
    		      	<div class="content">
    		      		<h2 class="name">{{food.name}}</h2>
    		      		<p class="description">{{food.description}}</p>
    		      		<div class="extra">
    		      			<span class="count">月售{{food.sellCount}}</span>
    		      			<span>好评率{{food.rating}}%</span>
    		      		</div>
    		      		<div class="price">
    		      			<span class="now">￥{{food.price}}</span>
    		      			<span  class='old' v-show='food.oldPrice'>￥{{food.oldPrice}}</span>
    		      		</div>
    		      	</div>
    		      </li>
    	        </ul>
    		</li>
    	          </ul>
    </div>
          <shopcart></shopcart>
    </div>
</template>

<script>

import BS from 'better-scroll';

import shopcart from './components/shopcart/shopcart';
export default {
  props: {
   seller: {
   type: Object
   }
  },
  data() {
   return {
  goods: [],
  listHeight: [],
  scrollY: 0
   };
  },

    computed: {
      currentIndex() { // 计算当前右侧的距离，决定决定左侧哪一个分类高亮（选中的意思）
        for (let i = 0; i < this.listHeight.length; i++) {
          // 这两个高度就是一个li从上到下整个的高度
          let height1 = this.listHeight[i]; // 获取当前的上高度
          let height2 = this.listHeight[i + 1]; // 获取当前的下高度
          // if (this.scrollY > height1 && this.scrollY < height2)  这样子height2会超出listHeight的索引，需要加一个条件
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i; // 返回当前索引
          }
        }
        return 0; // 如果什么的都没有就返回 0
   }
  },

  created() {
    this.$http.get('/api/goods').then((response) => {
      response = response.body;
    this.goods = response.data;
    this.$nextTick(() => {
    this._initScroll();
    this.calculateHeight();
        });
    });
  },

  methods: {
 _initScroll() {
 this.menuScroll = new BS(this.$refs.menuWrapper, {click: true});
 this.foodScroll = new BS(this.$refs.foodWrapper, {probeTpye: 3});
        this.foodScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
 });
},
  calculateHeight() {
        // 获取右侧一个商品的整个li，一个li里面包含了该分类下的所有商品
     let foodList = this.$refs.foodWrapper.getElementsByClassName('food-hook');
     let height = 0;
         this.listHeight.push(height);
         for (var i = 0; i < foodList.length; i++) {
           let item = foodList[i];
           height += item.clientHeight; // 获取每一个li的可视区域的高度
           this.listHeight.push(height); // 这样就得到了每一个商品分类下的所有商品对应的高度
           console.log(height);
         }
      },
        selectMenu(index, event) { // 这里多传递一个事件 ,event 就是click传递的event，当设置 click为 true时，默认就派发了一个点击事件，而pc端本身也有click事件
        if (!event._constructed) {
          return; // 原生的浏览器的event没有 vue的这个 _constructed 属性，所以当没有这个时，直接return。避免在pc端点击时事件执行（触发）2次的效果
        }
        console.log(index);
        let foodList = this.$refs.foodWrapper.getElementsByClassName('food-hook');
        let el = foodList[index]; // 滚动到响应的元素
        console.log(el);
        this.foodScroll.scrollToElement(el, 300);
      }
 },
    components: {
      shopcart: shopcart, // 注册购物车组件
      cartcontrol: cartcontrol, // 注册加减按钮组件
      food: food // 注册food组件
    }
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
.goods {
	position: absolute;
	display: flex;
	overflow: hidden;
	width: 100%;
	top: 194px;
	bottom: 46px;
}
.menu-wrapper {
	flex: 0 0 80px;
	width: 80px;
	background: #f3f5f7;
}
.menu-item {
	display: table;
	height: 54px;
	width: 56px;
	line-height: 14px;
	padding: 0 12px;
}
.current {
	position: relative;
	margin-top: -1px;
	z-index: 10;
	background: #fff;
	font-weight: 700;
}
.text {
	display: table-cell;
	width: 56px;
	vertical-align: middle;
	font-size: 12px;
}
.food-wrapper {
	flex: 1
}
.food-wrapper .title {
	padding-left: 14px;
	height: 26px;
	line-height: 26px;
	border-left: 2px solid #d9dde1;
	font-size: 12px;
	color: rgb(147,153,159);
	background: #f3f5f7;
}
.food-item {
	display: flex;
	margin: 18px;
	padding-bottom:18px;
}
.food-item:last-child {
	margin-bottom: 0;
}
.food-item .icon {
	flex: 0 0 57px;
	margin-right: 10px;
}
.food-item .content {
	flex: 1;
}
.content .name {
	font-size: 14px;
	margin: 2px 0 8px 0;
	height: 14px;
	line-height: 14px;
	color: rgb(7,17,27);
}
.content .description, .extra{
	font-size: 10px;
	line-height: 12px;
	color: rgb(147,153,159);
}
.content .description {
	margin-bottom: 8px;
}
 .extra .count{
  margin-right: 12px;
}
.price {
  font-weight: 700px;
  line-height: 24px;
}
.now {
	margin-right: 18px;
	font-size: 17px;
	color: rgb(240,20,20);
}
.old {
	text-decoration: line-through;
	font-size: 10px;
	color: rgb(147,153,159);
}
</style>