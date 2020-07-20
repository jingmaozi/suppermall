<template>
  <div class="goods-count">
    <check-botton :ischecked="isSelectAll" @click.native="checkedClick"></check-botton>
    <div>
      <span class="selectAll">全选</span>
      <span>合计：{{ totalPrice }}</span>
    </div>
    <div class="count">去计算({{ checkedLength }})</div>
  </div>
</template>

<script>
  import CheckBotton from 'components/content/checkButton/CheckBotton'
  export default {
        name: "CartBottomBar",
        components: {
          CheckBotton
        },
        computed: {
          totalPrice(){
            return '￥' + this.$store.state.cartList.filter(item => {
              return item.checked
            }).reduce((preValue, item) => {
              return preValue + item.price* item.count
            }, 0).toFixed(2)
          },
          checkedLength(){
            return this.$store.state.cartList.filter(item => {
              return item.checked
            }).reduce((preValue, item) => {
              return preValue + item.count
            }, 0)
          },
          isSelectAll(){
            if(this.$store.state.cartList.length === 0) return false
            return !this.$store.state.cartList.find(item => {
              return !item.checked
            })
          }
        },
        methods: {
          checkedClick() {
            // console.log(this.isSelectAll)
            if(this.isSelectAll){
              this.$store.state.cartList.filter(item => {
                return item.checked = false
              })
            }else {
              this.$store.state.cartList.filter(item => {
                return item.checked = true
              })
            }
          }
        }
    }
</script>

<style scoped>
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
