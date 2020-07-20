<template>
  <div >
    <div v-for="(item, index) in cartlist" class="cart-list" :key="index">
      <check-botton :ischecked="item.checked" @click.native="checkedClick(index)"></check-botton>
      <div class="cart-item">
        <span class="left">
        <img :src="item.image" alt="">
        </span>
        <span class="right">
          <p class="title">{{ item.title }}</p>
          <p class="desc">{{ item.desc }}</p>
        <div class="price">
          <h5>￥{{ item.price }}</h5>
          <h6>x {{ item.count }}</h6>
        </div>
      </span>
     </div>
    </div>
  </div>
</template>

<script>
  import CheckBotton from 'components/content/checkButton/CheckBotton'
  export default {
        name: "CartItem",
        props: {
            cartlist: {
              type: Array,
              default(){
                return []
              }
            }
        },
        data(){
          return{
            priceSum: 0,
            goCount: 0
          }
        },
        components: {
          CheckBotton
        },
        mounted() {
          let cartList = this.cartlist
          if(this.priceSum == 0) {
            for(let i=0;i<cartList.length;i++){
              if(cartList[i].checked) {
                this.priceSum += cartList[i].price* cartList[i].count
                this.goCount += cartList[i].count* 1
              }
            }
          }
        },
        methods: {
          checkedClick(index){
            let selectCount = 0
            let cartList = this.cartlist
            let cartItem = this.cartlist[index]
            cartItem.checked = !cartItem.checked

            if(cartItem.checked) {
              this.priceSum += cartItem.price* cartItem.count
              this.goCount += cartItem.count* 1
              this.$emit('selectChecked', this.priceSum.toFixed(2), this.goCount)
            }else{
              this.priceSum -= cartItem.price* cartItem.count
              this.goCount -= cartItem.count* 1
              this.$emit('selectChecked', this.priceSum.toFixed(2), this.goCount)
            }

            for( let i=0;i<cartList.length;i++ ) {
              if(!cartList[i].checked) {
                selectCount += 1
              }
            }
            if(selectCount == 0) {
              this.$emit('changeSelectAll', true, this.priceSum.toFixed(2), this.goCount)
            }
            if(selectCount == 1) {
              this.$emit('changeSelectAll', false, this.priceSum.toFixed(2), this.goCount)
            }
          }
        }
    }
</script>

<style scoped>
  .cart-list{
    display: flex;
    padding: 0 10px;

    align-items: center;
  }
  .cart-list img{
    width: 66px;
    height: 66px;
    object-fit: cover;
    object-position: 50% 0;
    border-radius: 4px;
  }
  .cart-list .cart-item{
    display: flex;
    border-bottom: var(--border-botline);
    width: 90%;
    padding: 10px 0;
  }
  .cart-list .cart-item p{
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
  }
  .cart-item .right{
    width: 80%;
    margin-left: 10px;
  }
  .cart-item .right .title{
    font-size: 13px;
    color: var(--color-title);
  }
  .cart-item .right .desc{
    font-size: 10px;
    line-height: 2.5em;
  }
  .cart-item .right .price{
    display: flex;
    padding: 12px 6px 0 0;
  }
  .cart-item .right .price h5{
    font-size: 14px;
    color: #eb7b4d;
  }
  .cart-item .right .price h6{
    margin-left: auto;
    font-size: 14px;
    font-weight: 400;
  }
</style>
