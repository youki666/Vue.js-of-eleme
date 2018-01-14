<template>
	<div class="shopcart">
		<div class="content">
			<div class="content-left">
				<div class="logo-wrapper">
					<div class="logo" :class="{'highlight':totalCount>0}">
						<span class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></span>
					</div>
				<div class="num" v-show="totalCount>0">{{totalCount}}</div>
				</div>
				<div class="price" :class="{'highlight':totalCount>0}">￥{{totalPrice}}元</div>
				<div class="desc">另需配送费￥{{deliveryPrice}}元</div>
			</div>
			<div class="content-right" >
				<div class="pay" :class="payClass">
					{{payDesc}}
				</div>
			</div>
		</div>
		<div class="ball-container">
			<div transtion='drop' v-for='ball in balls' v-show="ball.show" class="ball"></div>
			<div class="inner"></div>
		</div>
	</div>
</template>
<script>
	export default {
         props: {
selectedFood: {
type: Array,
default() {
  return [{price: 10, count: 10}];
 }
    },
deliveryPrice: {
type: Number,
  default: 0
      },
      minPrice: {
    type: Number,
default: 0
      }
         },
data() {
    return {
balls: [ {
	show: true
	}, {
	show: false
	}, {
	show: false
	}, {
	show: false
	}, {
	show: false
	}]
     };
    },
computed: {
totalPrice() {
let total = 0;
this.selectedFood.forEach((food) => {
   total += food.count * food.price;
	});
return total;
},
totalCount() {
let count = 0;
this.selectedFood.forEach((food) => {
	count += food.count;
});
 return count;
},
 payDesc() {
if (this.totalPrice === 0) {
 return `￥${this.minPrice}元起送`;
} else if (this.totalPrice < this.minPrice) {
let info = this.minPrice - this.totalPrice;
 return `还差￥${info}元起送`;
} else {
return '去结算';
  }
 },
 payClass() {
 if (this.totalPrice < this.minPrice) {
 return 'not-enough';
 } else {
 return 'enough';
 }
 }
         }
	};
</script>
<style scoped>
	.shopcart {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 9;
		width: 100%;
		height: 48px;
	}
	.content {
		background: #141d27;
		display: flex;
	}
	.ball-container {

	}
	.ball {
		position: fixed;
		left: 32px;
		bottom: 22px;
	}
	.drop {
		transition: all 0.4s;
	}
	.inner {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: rgb(0,160,220);
		transition: all 0.4s;
	}
	.content-left {
		flex: 1;
	}
	.logo-wrapper {
		display: inline-block;
		position: relative;
		top: -10px;
		margin: 0 12px;
		padding: 6px;
		width: 56px;
		height: 56px;
		box-sizing: border-box;
		vertical-align: top;
		border-radius: 50%;
		background: #141d27;
	}
	.num {
		position: absolute;
		top: 0;
		right: 0;
		width: 24px;
		height: 16px;
		border-radius: 4px;
		line-height: 16px;
		text-align: center;
		border-radius: 16px;
		font-size: 9px;
		background: rgb(255,0,0);
		color: #fff;
		box-shadow: 0 4px 8px 0 rgba(0,0,0,.4);
	}
	.logo {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: #555;
		background: rgb(0,160,220);
	}
	.highlight {
		color: #fff;

	}
    .icon-shopping_cart {
    	line-height: 44px;
    	font-size: 24px;
    	text-align: center;
    	margin: 0 10px;
    }
	.price {
        display: inline-block;
        line-height: 24px;
        vertical-align: top;
        margin-top: 12px;
        padding-right: 6px;
        box-sizing: border-box;
        font-size: 16px;
        border-right: 1px solid rgba(255,255,255,.4);
	}
      .not-enough {
      	background: #2b333b;
      }
      .enough {
      	background: #00b43c;
      	color: #fff;
      }
	.desc {
		display: inline-block;
		line-height: 24px;
		font-size: 12px;
		margin-top :12px;
	}
	.content-right {
		flex: 0 0 105px;
		width: 105px;
	}
	.pay {
		height: 48px;
		line-height: 48px;
		text-align: center;
		font-size: 12px;
		color: rgba(255,255,255,.4);
		font-weight: 700;
	}
</style>