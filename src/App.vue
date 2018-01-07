<template>
  <div id="app">
   <v-header v-bind:seller="seller"></v-header>
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
  data() {
     return {
      seller: {}
     };
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
        this.seller = response.data;
        console.log(this.seller);
    });
  },
  components: {
   'v-header': header
  }
};
</script>

<style scoped>
 * {
  margin: 0;
  padding: 0;
 }
  .tab {
  display: flex;
  width: 100%;
  font-size:24px;
  line-height: 32px;
  height: 32px;
  text-align: center;
  }

  .tab-item {
  flex: 1
  }
  .active {
    color: rgb(240,20,20);
  }
  .content {
    margin: 0;
  }
</style>
