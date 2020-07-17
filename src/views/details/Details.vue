<template>
    <div class="details">
      <detail-nav-bar class="navBar" @itemClick="navClick" ref="nav"></detail-nav-bar>
      <better-scroll class="content" ref="scroll" :probe-type="3" @backTop="contentScroll" >
        <detail-swiper :topImages="topImages"></detail-swiper>
        <goods-info :goodsIn="goods"></goods-info>
        <shop-info :shopInfo="shopInfo"></shop-info>
        <detail-images :detailImage="detailImgs" @imageLoad="imageLoad" ></detail-images>
        <detail-param ref="param"></detail-param>
        <rate :buyrate="buyerRate" ref="detailRate"></rate>
        <goods :goods="recommend" ref="detailRecom"></goods>
      </better-scroll>
      <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
      <back-top @click.native="backTopScroll" v-show="isBackTopShow"></back-top>
    </div>
</template>

<script>
  import DetailNavBar from "./childrencomps/DetailNavBar"
  import DetailSwiper from './childrencomps/DetailSwiper'
  import GoodsInfo from './childrencomps/GoodsInfo'
  import ShopInfo from './childrencomps/ShopInfo'
  import BetterScroll from "components/common/betterscroll/BetterScroll"
  import DetailParam from './childrencomps/DetailParam'
  import DetailImages from './childrencomps/DetailImages'
  import Rate from './childrencomps/Rate'
  import Goods from 'components/content/goods/Goods'
  import DetailBottomBar from './childrencomps/DetailBottomBar'
  import BackTop from "components/content/backtop/BackTop"


  import { getDetailsData, getDetailRecommend, DetailsRate} from 'network/details'
  import { DetailsGoodsInfo } from 'network/details'
  import { DetailsShopInfo } from 'network/details'
  import { debounce } from 'common/utils'
  import { backTopListenerMixin } from  'common/mixin'

  export default {
        name: "Details",
        data(){
          return{
            iid: '',
            topImages: [],
            goods: {},
            shopInfo: {},
            detailImgs: [],
            buyerRate: {},
            recommend: [],
            themeTops: [0, 0, 0, 0, 0],
            currentIndex: 0,
            getNavDebounce: null,
            desc: ''
          }
        },
        mixins: [backTopListenerMixin],
        components: {
              DetailNavBar,
              DetailSwiper,
              GoodsInfo,
              ShopInfo,
              BetterScroll,
              DetailImages,
              DetailParam,
              Rate,
              Goods,
              DetailBottomBar,
              BackTop
        },
        created() {
          this.iid =  this.$route.params.iid;
          getDetailsData(this.iid).then((res) => {
            console.log(res);
            this.topImages.push(...res.result.itemInfo.topImages)
            // console.log(this.topImages)
            const goodsInfo = new DetailsGoodsInfo(res.result.columns, res.result.itemInfo, res.result.shopInfo)
            this.goods = goodsInfo

            const shopInfo = new DetailsShopInfo(res.result.shopInfo)
            this.shopInfo = shopInfo

            this.detailImgs = res.result.detailInfo.detailImage
            this.desc =  res.result.detailInfo.desc

            const rate = new DetailsRate(res.result.rate.list[0])
            this.buyerRate = rate
            // console.log(this.buyerRate)
          })
          getDetailRecommend().then((res) => {
            this.recommend.push(...res.data.list)
            // console.log(this.recommend)
          })
          //定义一个函数
          this.getNavDebounce = debounce(() => {
            this.themeTops = []
            this.themeTops.push(0)
            this.themeTops.push(this.$refs.param.$el.offsetTop)
            this.themeTops.push(this.$refs.detailRate.$el.offsetTop)
            this.themeTops.push(this.$refs.detailRecom.$el.offsetTop)
            this.themeTops.push(Number.MAX_VALUE)
            // console.log( this.themeTops);
          }, 200)
        },
        methods: {
          imageLoad(){
            this.$refs.scroll.refresh()
            //根据图片下载完成获取组件高度防抖
            this.getNavDebounce()
          },
          navClick(currentIndex){
            // console.log(currentIndex);
            this.currentIndex = currentIndex
            this.$refs.scroll.scrollTo(0, -this.themeTops[currentIndex], 50)
          },
          contentScroll(position){
            // console.log(position);
            let length = this.themeTops.length
            let positionY = -position.y
            for(let i=0;i<length-1;i++){
              if(this.currentIndex !== i && (i < length-1 && positionY >= this.themeTops[i] && positionY < this.themeTops[i+1]) ){
                this.currentIndex = i
                // console.log(this.currentIndex )
                this.$refs.nav.currentIndex = this.currentIndex
              }
            }
            // 返回顶部
            this.listenShowBackTop(position)
          },
          addToCart(){
            const product = {}
            product.image = this.topImages[0]
            product.title = this.goods.title
            product.iid = this.iid
            product.desc = this.desc
            product.price = this.goods.highNowPrice
            product.count = 0
            this.$store.dispatch('addCart', product)
          }
        },
        destroyed() {
          this.$bus.$off('itemImageLoad', this.itemImgListener)
        }
  }
</script>

<style scoped>
  .details{
    background-color: #fff;
    position: relative;
    z-index: 999;

    height: 100vh;
  }
  .details .navBar{
    position: relative;
    z-index: 99;
    background-color: #fff;
  }
  .content{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    height: calc(100vh - 93px);
  }
</style>
