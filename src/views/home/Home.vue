<template>
  <div id="home">
<!--    <h2>首页</h2>-->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>

    <ul>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
      <li>rrrrrrrr</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import HomeSwiper from "./childrencomps/HomeSwiper"
  import RecommendView from "./childrencomps/RecommendView"
  import FeatureView from "./childrencomps/FeatureView"
  import TabControl from 'components/content/tabControl/TabControl'

  import { getHomeMultidata, getHomeGoods } from 'network/home'

  export default {
        name: "Home",
        components: {
          NavBar,
          HomeSwiper,
          RecommendView,
          FeatureView,
          TabControl
        },
        data(){
          return{
            banner: [],
            recommend: [],
            goods: {
              'pop': { page: 0, list: [] },
              'new': { page: 0, list: [] },
              'sell': { page: 0, list: [] }
            }
          }
        },
        created() {
          //1请求多个banner数据
          this.getHomeMultidata()

          //请求goods商品数据
          this.getHomeGoods('pop')
          this.getHomeGoods('new')
          this.getHomeGoods('sell')
        },
        methods: {
          getHomeMultidata(){
            getHomeMultidata().then(res => {
              console.log(res);
              this.banner = res.data.banner.list;
              this.recommend = res.data.recommend.list;
            })
          },
          getHomeGoods(type){
            const page = this.goods[type].page + 1;
            getHomeGoods(type, page).then(res => {
              this.goods[type].list.push(...res.data.list)
              this.goods[type].page += 1;
            })
          }
        }
    }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color:#ff8198;
    color: #fff;

    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
