<template>
  <div>
    <nav-bar class="detail-nav-bar">
      <div slot="left" class="detail-left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="detail-center">
        <span
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="itemClick(index)">{{ item }}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
    export default {
        name: "DetailNavBar",
        components: {
          NavBar
        },
      data(){
          return{
            titles: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0
          }
      },
      methods: {
        itemClick(index){
          this.currentIndex = index
          this.$emit('itemClick', this.currentIndex)
        },
        backClick(){
          this.$router.back()
        }
      }
    }
</script>

<style scoped>
  .detail-nav-bar{
    /*box-shadow: 0px 1px 1px rgba(0,0,0,.1);*/
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .detail-left img{
    vertical-align: middle;
  }
  .detail-center{
    display: flex;
    padding: 0 18px;
  }
  .detail-center span{
    flex: 1;

    font-size: 15px;
  }

  .active{
    color: #ff8198;
  }
</style>
