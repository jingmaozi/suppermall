<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartlist.length }})</div>
    </nav-bar>
    <cart-item :cartlist="cartlist" @changeSelectAll="changeSelect" @selectChecked="selectChecked"></cart-item>
    <div class="goods-count">
      <check-botton :ischecked="isckecked" @click.native="selectAllClick" ></check-botton>
      <div>
        <span class="selectAll">全选</span>
        <span>合计：￥{{ priceSum }}</span>
      </div>
      <div class="count">去计算({{ goCount }})</div>
    </div>
  </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import CartItem from './childrencomps/CartItem'
    import CheckBotton from 'components/content/checkButton/CheckBotton'

    export default {
        name: "Shopcart",
        data(){
            return{
              isckecked: false,
              priceSum: 0,
              goCount: 0
            }
        },
        components: {
          NavBar,
          CartItem,
          CheckBotton
        },
        computed: {
          cartlist(){
            return this.$store.state.cartList
          }
        },
      methods: {
        selectAllClick(){
          this.isckecked = !this.isckecked
          for(let item of this.cartlist) {
            item.checked = !item.checked
            if(item.checked != this.isckecked) {
              item.checked = this.isckecked
            }
          }
          let cartList = this.cartlist
          if(this.isckecked){
            for(let i=0;i<cartList.length;i++){
              if(cartList[i].checked) {
                this.priceSum += cartList[i].price* cartList[i].count
                this.goCount +=  cartList[i].count
              }
            }
          }else{
            this.priceSum = 0
            this.goCount = 0
          }
          this.priceSum.toFixed(2)
        },

        selectChecked(priceSum, goCount){
          this.priceSum = priceSum
          this.goCount = goCount
        },
        changeSelect(changeStatus, price, goCount){
          // console.log( changeStatus )
          this.isckecked = changeStatus
          this.priceSum = price
          this.goCount = goCount
        }
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
    align-items: center;

    height: 36px;
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
    height: 36px;
    line-height: 36px;

    background-color: #ff5300;
    color: #fff;
  }

</style>
