<template>
  <div>
    <swiper class="swiperImage">
      <swiper-item v-for="item in topImages">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from 'components/common/swiper'

  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default(){
          return []
        }
      }
    },
    // data(){
    //   return{
    //     banner: banner
    //   }
    // },
    // mounted() {
    //   console.log(this.banner);
    // }
  }
</script>

<style scoped>
  .swiperImage{
    height: 300px;
  }
</style>
