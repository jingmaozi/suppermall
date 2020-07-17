<template>
    <div class="goodsIn-info">
      <p> {{ goodsIn.title }}</p>
      <div class="goodsIn-price">
        <span class="price">{{ goodsIn.price }}</span>
        <span class="oldPrice">{{ goodsIn.oldPrice }}</span>
        <span class="discount" :style="{backgroundColor: goodsIn.discountBgColor}">{{ goodsIn.discountDesc }}</span>
      </div>
      <div class="goodsIn-columns">
        <span v-for="item in goodsIn.columns">{{ item }}</span>
      </div>
      <div class="goodsIn-services">
        <div v-for="(item, index) in goodsIn.services" :key="index" v-if="index < 4">
          <img :src=" item.icon " alt="">
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsInfo",
        props: {
           goodsIn: {
             type: Object,
             default(){
               return {}
             }
           }
        },
      data(){
        return{
          isShow: ''
        }
      },
    }
</script>

<style scoped>
  .goodsIn-info{
    line-height: var(--line-height);
    font-size: 12px;

    padding:10px 8px 0;
    border-bottom: var(--border-belt);
  }
  .goodsIn-info p{
    font-size: 15px;
    color: var(--color-title);

    font-weight: 600;
  }

  .goodsIn-price{
    padding: 6px 0;
  }
  .goodsIn-price .price{
    font-size: 16px;
    font-weight: 600;
    color: var(--color-tint);
  }
  .goodsIn-price .oldPrice{
    text-decoration: line-through;
    color: #999;
    margin: 0 4px;
  }
  .goodsIn-price .discount{
    color: #fff;
    font-size: 9px;
    padding: 1px 5px;
    border-radius: 10px;
  }

  .goodsIn-columns{
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    color: #999;
    border-bottom: var(--border-botline);
  }

  .goodsIn-services{
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }
  .goodsIn-services img{
    width: 12px;
    height: 12px;
    margin-right: 2px;
  }
</style>
