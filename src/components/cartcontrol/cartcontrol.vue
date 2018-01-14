<template>
    <div class="cartcontral">
    	<div class="cart-decrease" v-show="food.count>0" transition='move' @click='decrease'>
    		<span class="inner icon-remove_circle_outline"></span>
    	</div>
    	<div class="cart-count"  v-show="food.count>0">{{food.count}}</div>
    	<div class="cart-add icon-add_circle" @click="addcart"></div>
    </div>
</template>

<script>
import Vue from 'vue';
export default{
props: {
food: {
type: Object
}
},
created() {
console.log(this.food);
},
methods: {
addcart: function(event) {
if (!event._constructed) {
return;
}
 if (!this.food.count) {
 Vue.set(this.food, 'count', 1);
 } else {
this.food.count++;
 }
},
decrease: function(event) {
if (!event._constructed) {
return;
}
 if (this.food.count) {
this.food.count--;
 }
}
}
};
</script>

<style>

.cart-decrease {
  display: inline-block;
  padding: 6px;
  font-size: 24px;
line-height: 24px;
color: rgb(0,160,220);
transition: all 0.4s;
}
.inner {
font-size: 24px;
line-height: 24px;
color: rgb(0,160,220);
}
.cart-count {
display: inline-block;
vertical-align: top;
width: 12px;
padding-top:6px;
line-height: 24px;
text-align: center;
font-size: 10px;
color: rgb(247,153,159);
}
.cart-add {
display: inline-block;
font-size: 24px;
line-height: 24px;

color: rgb(0,160,220);
}
</style>