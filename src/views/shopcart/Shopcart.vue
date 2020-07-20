<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartlist.length }})</div>
    </nav-bar>
    <cart-item :cartlist="cartlist"></cart-item>
    <cart-bottom-bar></cart-bottom-bar>

  </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import CartItem from './childrencomps/CartItem'
    import CartBottomBar from './childrencomps/CartBottomBar'

    export default {
        name: "Shopcart",
        components: {
          NavBar,
          CartItem,
          CartBottomBar
        },
        computed: {
          cartlist(){
            return this.$store.state.cartList
          }
        },
        created() {
          console.log(this.$store.state.cartList);
          console.log('------created-----------------');
        },
        mounted() {
          console.log('------mounted-----------------');
        }
    }
</script>

<style scoped>
  .nav-bar{
    background-color: #ff8198;
    color: #fff;
  }

</style>
