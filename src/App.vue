<template>
  <div id="app">
   <v-header></v-header>
  <div class="tab">
    <div class="tab-item">
      <router-link :to="{name:'goods'}">商品</router-link>
    </div>
     <div class="tab-item">
      <router-link :to="{name:'ratings'}">评论</router-link>
    </div>
     <div class="tab-item">
      <router-link :to="{name:'seller'}">商家</router-link>
    </div>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
  </div>
</template>
<script>
import header from './components/header/header';
export default {
  components: {
   'v-header': header
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
 #app
  .tab{
  display: flex
  width: 100%
  line-height: 40px
  height: 40px
  text-align: center;
  }

  .tab-item{
 flex: 1
  }
</style>
