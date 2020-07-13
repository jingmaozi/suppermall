<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goods" :key="index" :goodsItem="item"></goods-item>
  </div>
</template>

<script>
  import GoodsItem from './GoodsItem'
    export default {
        name: "Goods",
        components: {
          GoodsItem
        },
      props: {
          goods: Array,
          default(){
            return []
          }
      }
    }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    /*text-align: center;*/
    padding:8px;
  }
</style>
