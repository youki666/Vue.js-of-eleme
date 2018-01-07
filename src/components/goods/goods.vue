<template>
    <div class="goods">
	     <div class="menu-wrapper">
             <ul>
             	<li v-for='item in goods' class="menu-item">
             		<span class="text">{{item.name}}</span>
             	</li>
             </ul>
          </div>
    <div class="food-wrapper">
    	<ul>
    		<li v-for='item in goods' class="food-list">
    			<h1 class="title">{{item.name}}</h1>
	    	    <ul>
    		      <li v-for='food in item.foods' class="food-item">
    		      	<div class="icon">
    		      		<img :src="food.icon" alt="">
    		      	</div>
    		      	<div class="content">
    		      		<h2 class="name">{{food.name}}</h2>
    		      		<p class="description">{{food.description}}</p>
    		      		<div class="extra">
    		      			<span>月售{{food.sellCount}}</span>
    		      			<span>好评率{{food.rating}}%</span>
    		      		</div>
    		      		<div class="price">
    		      			<span>￥{{food.price}}</span>
    		      			<span v-show='food.oldPrice'>￥{{food.oldPrice}}</span>
    		      		</div>
    		      	</div>
    		      </li>
    	        </ul>
    		</li>
    	</ul>
    </div>
    </div>
</template>

<script>

export default {
  props: {
   seller: {
   type: Object
   }
  },
  data() {
   return {
  goods: []
   };
  },
  created() {
    this.$http.get('/api/goods').then((response) => {
      response = response.body;
        this.goods = response.data;
        console.log(this.goods);
    });
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
}

</style>