<template>
  <div class="goods-item" @click="itemClick" >
    <img :src="goodsItem.show.img" alt="" @load="imageLoad">
    <p>{{ goodsItem.title }}</p>
    <div class="goods-info">
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodsItem",
        props: {
          goodsItem: {
            default(){
              return {}
            }
          },
          data(){
            iid: null
          }
        },
        methods: {
          imageLoad() {
            this.$bus.$emit('itemImageLoad')
          },
          itemClick() {
            // console.log('跳转详情页',this.goodsItem.iid)
            this.iid =  this.goodsItem.iid;
            this.$router.push('/details/' + this.iid)
            // this.$router.push({
            //   path: '/details/',
            //   query: this.iid
            // })
          }
        }
    }
</script>

<style scoped>
  .goods-item{
    width: 49%;

    margin-bottom: 8px;

    font-size: 13px;
  }

  .goods-item img{
    width: 100%;
  }

  .goods-item p{
    display: inline-block;
    padding-top: 4px;

    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
  }

  .goods-info{
    text-align: center;
  }

  .goods-info .price{
    color: #ff5777;
  }

  .goods-info .collect{
    position: relative;
    padding-left: 15px;
  }
  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
