<template>
    <div class="ratings" ref='ratings'>
    	<div class="ratings-content">
    		<div class="overview">
    			<div class="overview-left">
    				<h1 class="score">{{seller.score}}</h1>
    				<div class="title">综合评分</div>
    				<div class="rank">高于周边商家{{seller.rankRate}}%</div>
    			</div>
    			<div class="overview-right">
    				<div class="score-wrapper">
    					<span class="title">服务态度</span>
    					<span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    					<span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    					<span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    					<span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    					<span><img src="../header/star48_half@2x.png" width="16" height="16"></span>
    					<span>{{seller.serviceScore}}</span>
    				</div>
    				<div class="score-wrapper">
    					<span class="title">商品评分</span>
    					<span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    					<span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    					<span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    					<span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    					<span><img src="../header/star48_half@2x.png" width="16" height="16"></span>
    					<span>{{seller.foodScore}}</span>
    				</div>
    				<div class="delivery">
    					<span>送达时间</span>
    					<span>{{seller.deliveryTime}}分钟</span>
    				</div>
    			</div>
    		</div>
    		<div class="split"></div>
    		<div class="content">
    			<span class="all">全部</span>
    			<span class="good">好评</span>
    			<span class="bad">吐槽</span>
    		</div>
    		<div class="split"></div>
    		<div class="ratings-wrapper" >
    			<ul>
    				<li v-for="rating in ratings" class="rating-item">
    					<div class="avatar">
    						<img :src="rating.avatar" width="28" height="28">
    					</div>
    					<div class="content">
    						<h1 class="username">{{rating.username}}</h1>
    						
    						<div class="star">
							<span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    						<span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    						<span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    						<span><img src="../header/star48_on@2x.png" width="16" height="16"></span>
    						</div>
    						<p class="text">{{rating.text}}</p>
    					</div>
    				</li>
    			</ul>
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
  ratings: {}
   };
  },
   created() {
    this.$http.get('/api/ratings').then((response) => {
      response = response.body;
        this.ratings = response.data;
        console.log(this.ratings);
        this.scroll = new BS(this.$refs.ratings, {click: true});
    });
  }
};
</script>

<style scoped>
.ratings{
	position: absolute;
	top: 174px;
	left: 0;
	bottom: 0;
	width:100%;
	overflow: hidden;
}
.overview {
	display: flex;
	padding: 18px 0;
}
.overview-left {
	flex: 0 0 137px;
	width: 137px;
	border-right: 1px solid gray;
	text-align:center;
	padding: 6px 0;
}
.score {
	line-height: 28px;
	font-size: 24px;
	color: rgb(255,153,0);
	margin-bottom: 6px;
}
.title {
   line-height: 18px;
	font-size: 18px;
	color: rgb(7,17,27);
	margin-bottom: 8px;
}
.rank {
	 line-height: 10px;
	font-size: 10px;
	color: rgb(147,153,159);
}
.overview-right {
	flex: 1;
	padding-left: 24px;
}
.score-wrapper {
	margin-bottom: 8px;
	line-height: 18px;
}
.split {
  width: 100%;
  height: 16px;
  background: #f3f5f7;
}
.content {
	margin: 20px;
}
.all,.good {
	width: 40px;
	height: 30px;
	padding: 6px 10px;
	background: rgb(0,160,220);
	color: #fff;
	display: inline-block;
	margin-right: 10px;
	text-align: center;
	line-height: 30px;
}
.bad {
     width: 40px;
	height: 30px;
	line-height: 30px;
	padding: 6px 10px;
	text-align: center;
	background: rgb(0,160,180);
	color: #fff;
	display: inline-block;
}
.line {
	margin-top: 10px;
	width: 100%;
	height: 1px;
	background: #222;
}
.ratings-wrapper {
	padding: 0 18px;
}
.rating-item {
	display: flex;
	padding: 18px 0 ;
}
.avatar {
	flex: 0 0 28px;
	width: 28px;
}
.avatar img {
	border-radius: 50%;
	margin-right: 12px;
}
.content {
	position: relative;
	flex: 1;
}
.username {
	margin-bottom: 4px;
	line-height: 12px;
	color: rgb(7,17,27);
	margin-top: -16px;
}
.text {
	margin-top: 10px;
	font-size: 12px;
	line-height: 16px;
	color: rgb(7,17,27);
}
</style>