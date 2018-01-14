<template>
    <div class="food" v-show="showFlag" ref="food">
           <div class="food-content">
             <div class="img-header">
               <img :src="food.image" alt="">
             </div>
             <div class="content">
               <h1 class="title">{{food.name}}</h1>
               <div class="detail">
                 <span class="sell-count">月售{{food.sellCount}}份</span>
                 <span class="rating">好评率{{food.rating}}%</span>
               </div>
                 <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span  class='old' v-show='food.oldPrice'>￥{{food.oldPrice}}</span>
                    <span class="buy">加入购物车</span>
                  </div>
             </div>
              <div class="split" v-show="food.info"></div>
              <div class="info" v-show="food.info">
                <h1 class="title">商品信息</h1>
                <p class="text">{{food.info}}</p>
              </div>
               <div class="split" v-show="food.info"></div>
                <div class="rating-wrapper">
                                 <div class="rating">
                 <h1 class="title">商品评价</h1>
                 <ul class="ratings" v-show="food.ratings && food.ratings.length">
                   <li v-for=" ratings in food.ratings" class="rating-item">
                     <div class="user">
                       <span class="name">{{ratings.username}}</span>
                       <img :src="ratings.avatar" width="12" height="12">
                     </div>
                     <div class="time">{{ratings.rateTime | formatDate}}</div>
                     <p class="text">
                       <span :class="{'icon-thumb_up':ratings.rateType === 0,'icon-thumb_down':ratings.rateType === 1}">{{ratings.text}}</span>
                     </p>
                   </li>
                 </ul>
                 <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
               </div>
                </div>
             <div class="back">
               <i class="icon-arrow_lift" @click="hide"></i>
             </div>
           </div>
    </div>
</template>

<script>
import BS from 'better-scroll';
import cartcontrol from '@/components/cartcontrol/cartcontrol';
import {formatDate} from '@/common/js/date';
  export default {
       props: {
        food: {
          type: Object
        }
       },
       components: {
        cartcontrol
       },
       filters: {
         formatDate(time) {
         let date = new Date(time);
         return formatDate(date, 'yyyy-MM-dd hh:mm');
         }
       },
       methods: {
        show() {
          this.showFlag = true;
    this.$nextTick(() => {
     if (!this.scroll) {
      this.scroll = new BS(this.$refs.food, {click: true});
     } else {
      this.scroll.refresh();
     }
        });
        },
        hide() {
          this.showFlag = false;
        }
       },
       data() {
        return {
          showFlag: false
        };
       }
  };
</script>

<style scoped>
 .food {
  position: fixed;
  left: 0;
  top: 0;
bottom: 62px;
  z-index: 30;
  width: 100%;
  background: #fff;
 }
 .img-header {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
 }
 .img-header img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
 }
 .content {
  padding: 16px;
  position: relative;
 }
 .title {
  line-height: 14px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  color: rgb(7,17,27);
 }
 .detail {
  margin-bottom: 18px;
  line-height: 10px;
  font-size: 0;
 }
 .sell-count,.rating {
   font-size: 10px;
   color: rgb(147,153,159);
 }
 .sell-count {
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
.buy {
  position: absolute;
  right: 12px;
  bottom: 12px;
  background: rgb(0,160,260);
  border-radius: 16px;
  color: #fff;
  padding: 2px 10px;
}
.split {
  width: 100%;
  height: 16px;
  background: #f3f5f7;
}
.title {
  margin: 10px;
  line-height: 14px;
  margin-bottom: 6px;
  font-size: 14px;
}
.info .text{
  line-height: 24px;
  padding: 0 8px;
  font-size: 12px;
  color: rgb(77,85,93);
}
.rating-wrapper {
  padding: 0 18px;
}
.rating-item {
  position: relative;
  padding: 16px 0;
}
.user {
  position: absolute;
  right: 0;
  top: 16px;
  line-height: 12px;
}
.user .name {
  margin-right: 6px;
}
.time {
  line-height: 12px;
  font-size: 10px;
  color: rgb(17,27,37);
  margin-bottom: 6px;
}
.ratings .text {
   line-height: 16px;
   font-size: 12px;
   color: rgb(7,17,27);
}
.icon-thumb_up,.icon-thumb_down {
  line-height: 12px;
  margin-right: 4px;
  font-size: 12px;
 
}
.icon-thumb_up {
   color: rgb(0,160,220);
}
.icon-thumb_down {
  color: rgb(147,153,159);
}
 .back {
  position: absolute;
  top: 10px;
  left: 10px;
  color: #fff;
 }
</style>