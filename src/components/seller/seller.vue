<template>
    <div class="seller" ref="seller">
    	<div class="seller-content">
    		<div class="overview">
    			<div class="overview-left">
    				<h1 class="name">{{seller.name}}</h1>
    				<span class="icon-favorite" @click="collected"></span>
    				<span class="collect" v-model="collected">{{collect}}</span>
    				<div class="star">
    					<span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    				    <span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    				    <span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    				    <span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    				    <span><img src="../header/star48_half@2x.png" width="16" height="16"></span>
    				    <span>({{seller.ratingCount}})</span>
    					<span>月售{{seller.sellCount}}单</span>
    				</div>
    				 <div class="split"></div>
                    <ul class="remark">
                    	<li class="block">
                    		<h2>起送价</h2>
                    		<div class="content">
                    			<span class="stress">{{seller.minPrice}}</span>
                    			<span>元</span>
                    		</div>
                    	</li>
                    	<li class="block">
                    		<h2>商家配送</h2>
                    		<div class="content">
                    			<span class="stress">{{seller.deliveryPrice}}</span>
                    			<span>元</span>
                    		</div>
                    	</li>
                    	<li class="block">
                    		<h2>平均配送时间</h2>
                    		<div class="content">
                    			<span class="stress">{{seller.deliveryTime}}</span>
                    			<span>分钟</span>
                    		</div>
                    	</li>
                    </ul>
                    <div class="split"></div>
                    <div class="bulletin">
                    	<h2 class="title">公告与活动</h2>
                    	<p class="text">{{seller.bulletin}}</p>
                    </div>
        			<ul v-if="seller.supports" class="supports">
     					<li v-for="(item, index) in seller.supports" class="supports-item">
 					     <span><img src="../header/decrease_3@3x.png" width="20" height="20"></span>
 						 <span class="text-item">{{item.description}}</span>
     					</li>
     				</ul>
     				  <div class="split"></div>
     				  <div class="pic">
     				  	<h1 class="title">商家实景</h1>
     				  	 <div>
     				  	 	<ul class="pic-wrapper">
     				  	 		<li v-for="pic in seller.pics" class="pic-item">
     				  	 			<img :src="pic" width="50" height="50">
     				  	 		</li>
     				  	 	</ul>
     				  	 </div>
     				  </div>
     				  <div class="split"></div>
       				  	 <div class="info">
     				  	    <h1 class="title">商家信息</h1>
     				  	 	<ul>
     				  	 		<li v-for="text in seller.infos" class="info-item">
     				  	 			{{text}}
     				  	 		</li>
     				  	 	</ul>
     				  	 </div>
    			</div>
    			<div class="overview-right"></div>
    		</div>
    	</div>
    </div>
</template>

<script type='text/ecmascript-6'>
import BS from 'better-scroll';
export default{
 props: {
 seller: {
 type: Object
   }
},
data() {
return {
collect: '收藏'
};
},
watch: {
  'seller'() {
this.$nextTick(() => {
 this._initScroll();
});
}
},
ready() {
this._initScroll();
},
methods: {
_initScroll() {
if (!this.scroll) {
this.scroll = new BS(this.$refs.seller, {click: true});
  }
   },
collected: function() {
    this.collect = '已收藏';
   }
    }
};
</script>

<style scoped>
.seller{
	position: absolute;
	top: 174px;
	left: 0;
	bottom: 0;
	width:100%;
	overflow: hidden;
}
.overview {
	padding: 18px;
}
..overview-left {
	position: relative;
}
.name {
	font-size: 18px;
	font-weight: bold;
}
.icon-favorite {
	position: absolute;
	top: 20px;
	right: 40px;
	color: red;
	font-size: 20px;
}
.collect {
	position: absolute;
	top: 40px;
	right: 32px;
}
.star {
	line-height: 18px;
	margin: 6px 0;
}
.remark {
	display: flex;
	padding-top: 18px;
}
.block {
	flex: 1;
	text-align: center;
	border-right: 1px solid rgba(7,17,27,.2)
}
.block:last-child {
	border-right:none;
}
.block h2 {
	margin-bottom: 4px;
	line-height: 10px;
	color:  rgb(147,153,159);
}
.content {
	line-height: 24px;
	font-size: 10px;
	color: rgb(7,17,27);
}
.stress {
	font-size: 24px;
}
.split {
  width: 100%;
  height: 16px;
  background: #f3f5f7;
  margin-top: 10px;
}
.bulletin {
	padding: 18px 18px 0 18px;
}
.title {
	font-size: 18px;
}
.text {
	line-height: 24px;
	font-size: 12px;
	color: rgb(240,20,20);
}
.supports{
	padding:20px 0 0 10px;
}
.supports-item {
	margin-bottom: 12px;
	padding: 0 12px;
	font-size: 12px
}
.text-item {
	height: 16px;
	line-height: 16px;
	vertical-align: top;
}
.pic {
	padding: 18px 18px 0 18px;
}
.pic-wrapper {
   display: flex;
   margin-top: 20px;
}
.pic-item {
	flex: 1;
	margin-left: 20px;
}
.info {
	padding: 18px 18px 0 18px;
}
.info-item {
	padding: 16px 12px;
	line-height: 16px;

}
</style>