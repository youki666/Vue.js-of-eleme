<template>
	<div class="shopcart">
		<div class="content">
			<div class="content-left">
				<div class="logo-wrapper">
					<div class="logo">
						<span class="icon-shopping_cart"></span>
					</div>
				<div class="num">{{totalCount}}</div>
				</div>
				<div class="price">￥{{totalPrice}}元</div>
				<div class="desc">另需配送费￥{{deliveryPrice}}元</div>
			</div>
			<div class="content-right">
				<div class="pay">
					￥{{minPrice}}元起送
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
         props: {
selectedFood: {
type: Array,
default() {
  return [{price: 15, count: 9}];
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
}
         }
	};
</script>
<style scoped>
	.shopcart {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 99;
		width: 100%;
		height: 48px;
	}
	.content {
		background: #141d27;
		display: flex;
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
	}
    .icon-shopping_cart {
    	line-height: 44px;
    	font-size: 24px;
    	text-align: center;
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
		background: #2b333b;
	}
</style>