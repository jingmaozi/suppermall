<template>
  <div class="shop-info">
    <div class="shop">
      <img class="logo" :src="shopInfo.shopLogo"  alt="">
      <span class="name">{{ shopInfo.name }}</span>
    </div>
    <div class="shop-info-b">
      <div class="c-sells">
        <p>{{ shopInfo.cSells }}</p>
        <span>总销量</span>
      </div>
      <div class="c-goods">
        <p>{{ shopInfo.cGoods}}</p>
        <span>全部宝贝</span>
      </div>
      <div class="border"></div>
      <div>
        <div class="shop-score" v-for="(item, index) in shopInfo.score" :key="index">
          <span class="score-name">{{ item.name }}</span>
          <span class="score" :class="{ 'score-better': item.isBetter }">{{ item.score }}</span>
          <span class="better" :class="{ 'bettor-more': item.isBetter }">{{ item.isBetter?'高':'低' }}</span>
        </div>
      </div>
    </div>
    <button class="btn">进店逛逛</button>
  </div>
</template>

<script>
    export default {
        name: "ShopInfo",
        props: {
          shopInfo: {
            type: Object,
            default(){
              return {}
            }
          }
        },
      // created() {
      //   console.log(this.shopInfo);
      // }
    }
</script>

<style scoped>
  .shop-info{
    padding-bottom: 8px;
    border-bottom: var(--border-belt);
  }
  .shop-info .shop{
    padding: 16px 8px;
  }
  .shop-info .logo{
    width: 40px;
    height: 40px;

    vertical-align: middle;
    border-radius: 50%;
    border: var(--border-botline);
  }
  .shop-info .name{
    font-size: 14px;
    margin-left: 6px;
  }

  .shop-info-b{
    font-size: 12px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
  }
  .shop-info-b p{
    font-size: 18px;
    color: var(--color-title);
    margin-bottom: 4px;
  }
  .shop-info-b .c-sells, .shop-info-b .c-goods{
    text-align: center;
  }
  .shop-info-b .border{
    width: 1px;
    height: 40px;
    border-right: var(--border-botline);
  }
  .shop-score{
    padding:6px 0;
    display: flex;
  }
  .shop-score .score{
    color: #71934e;
    margin: 0 6px;
    align-self: auto;
  }
  .shop-score .better{
    width: 14px;
    height: 14px;
    color: #fff;
    background-color:  #71934e;
    margin-left: auto;
  }
  .shop-score .score-better{
    color: #ff5777;
  }
  .shop-score .bettor-more{
    width: 14px;
    height: 14px;
    color: #fff;
    background-color: #ff5777;
  }
  .shop-info .btn{
    font-size: 14px;
    padding: 6px 30px;
    background-color: #f0f5fa;
    border: 1px solid #f0f5fa;
    border-radius: 4px;
    display: block;
    margin: 14px auto;
  }
</style>
