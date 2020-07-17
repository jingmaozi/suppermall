<template>
  <div id="home">
<!--    <h2>首页</h2>-->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      class="tab-control"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabControlShow"></tab-control>

    <better-scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @backTop="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore">
      <home-swiper
        :banner="banner"
        @swpierImageLoad="swpierImageLoad"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view/>
      <tab-control
        :titles="['流行','新款','精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl2"></tab-control>
      <goods :goods="showGoods"></goods>
    </better-scroll>

    <back-top @click.native="backTopScroll" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import TabControl from 'components/content/tabControl/TabControl'
  import Goods from 'components/content/goods/Goods'
  import BetterScroll from "components/common/betterscroll/BetterScroll";
  import BackTop from "components/content/backtop/BackTop"

  import HomeSwiper from "./childrencomps/HomeSwiper"
  import RecommendView from "./childrencomps/RecommendView"
  import FeatureView from "./childrencomps/FeatureView"

  import { getHomeMultidata, getHomeGoods } from 'network/home'
  import { itemListenerMixin } from  'common/mixin'
  import { backTopListenerMixin } from  'common/mixin'

  export default {
        name: "Home",
        components: {
          NavBar,
          HomeSwiper,
          RecommendView,
          FeatureView,
          TabControl,
          Goods,
          BetterScroll,
          BackTop
        },
        mixins: [itemListenerMixin],
        mixins: [backTopListenerMixin],
        data(){
              return{
                banner: [],
                recommend: [],
                goods: {
                  'pop': { page: 0, list: [] },
                  'new': { page: 0, list: [] },
                  'sell': { page: 0, list: [] }
                },
                currentType: 'pop',
                isTabControlShow: false,
                tabControlOffsetTop: 0,
                saveY: 0
           }
         },
        computed: {
          showGoods(){
            return this.goods[this.currentType].list
          }
        },
        created() {
          //1请求多个banner数据
          this.getHomeMultidata()

          //2请求goods商品数据
          this.getHomeGoods('pop')
          this.getHomeGoods('new')
          this.getHomeGoods('sell')

          // 3.监听goods item中的图片加载完成
        },
        activated() {
          // console.log(this.saveY);
          this.$refs.scroll.refresh()
          this.$refs.scroll.scrollTo(0, this.saveY, 0)
        },
        deactivated() {
          this.saveY = this.$refs.scroll.getScrollY()
          this.$bus.$off('itemImageLoad', this.itemImgListener)
        },
        mounted() {
          console.log('我是mounted');
        },
        methods: {
          /*
          * 网络请求
          * */
          getHomeMultidata(){
            getHomeMultidata().then(res => {
              // console.log(res);
              this.banner = res.data.banner.list;
              this.recommend = res.data.recommend.list;
            })
          },
          getHomeGoods(type){
            const page = this.goods[type].page + 1;
            getHomeGoods(type, page).then(res => {
              this.goods[type].list.push(...res.data.list)
              this.goods[type].page += 1;

              // 完成上拉加载更多
              this.$refs.scroll.finishPullUp()
            })
          },

          /*
          事件监听相关的方法
           */
          tabClick(index){
            // console.log(index)
            switch (index) {
              case 0:
                this.currentType = 'pop'
                break
              case 1:
                this.currentType = 'new'
                break
              case 2:
                this.currentType = 'sell'
                break
            }
            this.$refs.tabControl1.currentIndex = index
            this.$refs.tabControl2.currentIndex = index
          },
          swpierImageLoad(){
            this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
          },
          contentScroll(position){
            // 返回顶部
            this.listenShowBackTop(position)
            // tab-control吸顶
            this.isTabControlShow = (-position.y) > this.tabControlOffsetTop
          },
          loadMore(){
            // console.log('上拉加载-----');
            this.getHomeGoods(this.currentType)
          }
        }
    }
</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    height: 100vh;

    position: relative;
  }
  .home-nav{
    background-color:#ff8198;
    color: #fff;

    /*使用原生浏览器滚动时，使用better-scroll局部滚动时不需要*/
    /*position: fixed;*/
    /*right: 0;*/
    /*left: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }

  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content{
    overflow: hidden;

    position: absolute;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 49px;
  }
</style>
