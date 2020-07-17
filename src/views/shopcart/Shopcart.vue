<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartlist.length }})</div>
    </nav-bar>
    <cart-item :cartlist="cartlist"></cart-item>
    <div class="goods-count">
      <div>
        <span class="selectAll">全选</span>
        <span>合计：</span>
      </div>
      <div class="count">去计算</div>
    </div>
  </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import CartItem from './childrencomps/CartItem'

    export default {
        name: "Shopcart",
        components: {
          NavBar,
          CartItem,
        },
        computed: {
          cartlist(){
            return this.$store.state.cartList
          }
        },
      methods: {
        // this.$bus.$on('checked')
      }
    }
</script>

<style scoped>
  .nav-bar{
    background-color: #ff8198;
    color: #fff;
  }
  .goods-count{
    display: flex;

    height: 36px;
    line-height: 36px;
    background-color: #ededed;
    font-size: 16px;
    padding-left: 10px;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;
  }
  .goods-count .selectAll{
    font-size: 14px;
    margin-right: 10px;
  }
  .goods-count .count{
    margin-left: auto;
    padding: 0 24px;

    background-color: #ff5300;
    color: #fff;
  }
</style>
