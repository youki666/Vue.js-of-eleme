<template>
     <div class="header">
     	<div class="content-wrapper">
     		<div class="avatar">
     			<img :src="seller.avatar" width="64" height="64" alt='avatar'>
     		</div>
     		<div class="content">
     			<div class="title">
     				<span class="brand">
     				   <img src="./brand@2x.png" alt="brand" width="32" height="18">
     				  </span>
     				<span class="name">{{seller.name}}</span>
     			</div>
     			<div class="description">
     				{{seller.description}}/{{seller.deliveryTime}}分钟送达
     			</div>
     			<div v-if="seller.supports" class="supports">
     				<span class="icon">
     				<img src="./decrease_1@2x.png" width="12" height="12">
     				</span>
     				<span class="text">{{seller.supports[0].description}}</span>
     			</div>
     		</div>
     		<div class="supportcount" v-if='seller.supports' @click="showDetail">
     			<span class="counts">{{seller.supports.length}}个</span>
     			<span class="icon-keyboard_arrow_right"></span>
     		</div>
     	</div>
     	<div class="bulletin-wrapper">
     		<span class="bulletin-title">
     			<img src="./bulletin@2x.png" width="22" height="12">
     		</span>
     		<span class="bulletin-text" @click="showDetail">{{seller.bulletin}}</span>
     		<span class="icon-keyboard_arrow_right"></span>
     	</div>
     	<div class="background">
     		<img :src="seller.avatar" width="100%" height="100%">
     	</div>
     	<div v-show='detailShow' class="detail">
     		<div class="detail-wrapper clearfix">
     			<div class="detail-main">
     				<h1 class="name">{{seller.name}}</h1>
     				<div class="star">
				      <span class="star-item">
				       <img src="./star48_on@2x.png" width="22" height="22">
				      </span>
  				      <span class="star-item">
				       <img src="./star48_on@2x.png" width="22" height="22">
				      </span>
  				      <span class="star-item">
				       <img src="./star48_on@2x.png" width="22" height="22">
				      </span>
  				      <span class="star-item">
				       <img src="./star48_on@2x.png" width="22" height="22">
				      </span>
				      <span class="star-item">
				       <img src="./star48_half@2x.png" width="22" height="22">
				      </span>
     				</div>
     				<div class="title">
     					<div class="line"></div>
     					<div class="text">优惠信息</div>
     					<div class="line"></div>
     				</div>
     				<ul v-if="seller.supports" class="supports">
     					<li v-for="(item, index) in seller.supports" class="supports-item">
 					     <span><img src="./decrease_3@3x.png" width="20" height="20"></span>
 						 <span class="text-item">{{item.description}}</span>
     					</li>
     				</ul>
     				<div class="title">
     					<div class="line"></div>
     					<div class="text">商家公告</div>
     					<div class="line"></div>
     				</div>
     				<div class="bulletin">
     					<p>{{seller.bulletin}}</p>
     				</div>
     			</div>
     		</div>
     		<div class="detail-close" @click="detailClose">&times;</div>
     	</div>
     </div>
</template>

<script type='text/ecmascript-6'>
export default{
  props: {
  seller: {
  type: Object
  }
  },
  data() {
  return {
  detailShow: false
  };
  },
  methods: {
  showDetail: function() {
  this.detailShow = true;
  },
  detailClose: function() {
  this.detailShow = false;
  }
  }
};
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
.clearfix {
	display: inline-block;
}
.clearfix:after {
	display: block;
	content: '';
	height: 0;
	line-height: 0;
	clear: both;
	visibility: hidden;
}
.header {
	position: relative;
	overflow: hidden;
	background: rgba(7,17,27,.5);
	color: #fff;
}
.content-wrapper {
	position: relative;
	padding: 24px 16px 18px 24px;
	font-size: 0;
}
.avatar {
	display: inline-block;
	vertical-align: top
}
.avatar img {
	border-radius: 12px;
}
.content {
	display: inline-block;
	margin-left: 16px;
	font-size: 7px;
}
.title {
	margin: 2px 0 8px 0;
}
.brand {
	display: inline-block;
    width: 30px;
    height: 18px;
    vertical-align: top;
}
.name {
	display: inline-block;
	margin-left: 6px;
	line-height: 18px;
	font-size: 16px;
	font-weight: bold;
	color: rgb(255,255,255);
}
.description {
	margin-bottom: 10px;
	font-size: 12px;
	line-height: 12px;
	color: rgb(255,255,255)
}
.supports {
	vertical-align: top;
}

.text {
	line-height: 12px;
	height: 12px;
	font-size: 12px;
	margin-left: 4px;
}
.supportcount {
    position: absolute;
    right: 12px;
    bottom: 14px;
    padding: 7px 8px;
    height: 24px;
    width: 48px;
    line-height: 24px;
    border-radius: 14px;
    background-color: rgba(0,0,0,.2);
    text-align: center;
}
.icon-keyboard_arrow_right {
	width: 12px;
	height: 12px;
}
.counts {
	display: inline-block;
	font-size: 10px;
}
.bulletin-wrapper {
	height: 28px;
	line-height: 28px;
	padding: 0 22px 0 12px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.bulletin-text {
	vertical-align: top;
	font-size: 10px;
	margin: 0 4px
}
.background {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	filter:blur(10px)
}
.detail {
	position: fixed;
	top: 0;
	left: 0;
	overflow: auto;
	z-index: 66;
	width: 100%;
	height: 100%;
	background: rgba(7,17,27,.8);
	opacity: 1
}
.detail-wrapper {
	min-height: 100%;
	width: 100%;
}
.detail-main {
	margin-top: 64px;
	padding-bottom: 64px;
	text-align: center;
}
.detail-main .name {
	line-height: 16px;
	font-size: 16px;
	font-weight: 700;
}
.detail-main .star {
	margin-top: 18px;
	padding: 2px 0;
}
.detail-main .star-item {
   display: inline-block;
   width: 20px;
   height: 20px;
   margin-right: 22px;
}
.detail-main .title {
	width: 80%;
	margin: 28px auto 24px auto;
	display: flex;
}
.title .line {
	flex: 1;
	position: relative;
	top: -6px;
	border-bottom: 2px solid rgba(255,255,255,.2)
}
.title .text {
	padding: 0 12px;
	font-size: 14px;
	font-weight: 700;
}
.detail-main .supports {
	width: 80%;
	margin: 0 auto;
	text-align: left;
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
.bulletin {
	width: 80%;
	margin: 0 auto;
	text-align: left;
}
.bulletin p {
	font-size: 12px;
	padding: 0 12px;
	line-height: 24px;
}
.detail-close {
	position: relative;
	width: 32px;
	height: 32px;
	margin: -64px auto -10px auto;
	clear: both;
	font-size: 24px;

}
</style>