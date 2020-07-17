<template>
  <div >
    <div v-for="item in cartlist" class="cart-list">
      <check-botton></check-botton>
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
        components: {
          CheckBotton
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
