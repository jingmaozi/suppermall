<template>
    <div class="bottom-bar dis">
      <div class="left dis flx ">
        <div v-for="item in tools">
          <img src="~assets/img/detail/detail_bottom.png" :style="{objectPosition: item.position}" alt="">
          <p >{{ item.title }}</p>
        </div>
      </div>
      <div class="right dis flx">
        <span class="cart flx" @click="addToCart">加入购物车</span>
        <span class="buy flx">购买</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBottomBar",
        data(){
            return{
              tools: [
                {position: '50% -58px', title: '客服'},
                {position: '50% -107px', title: '店铺'},
                {position: '50%  1px', title: '收藏'}
                ],
            }
        },
      methods: {
        addToCart(){
          this.$emit('addToCart')
        }
      }
    }
</script>

<style scoped>
  .dis{
    display: flex;
    /*justify-content: center;*/
    text-align: center;

  }
  .flx{
    flex: 1;
  }
  .bottom-bar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 49px;
    background-color: #fff;

    border-top: var(--border-botline);
  }
  .bottom-bar .left{
    font-size: 12px;
    align-items: center;
  }
  .bottom-bar .left img{
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
  .bottom-bar .left div{
    flex: 1;
  }
  .bottom-bar .right{
   line-height: 49px;
  }
  .bottom-bar .right .cart{
    background-color: #fddc0c;
  }
  .bottom-bar .right .buy{
    background-color: #ff8198;
    color: #fff;
  }
</style>
