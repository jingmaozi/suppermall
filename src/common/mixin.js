import { debounce } from 'common/utils'

//监听图片下载
export const itemListenerMixin = {
  data(){
    itemImgListener: null
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.itemImgListener = () => {
      refresh()
    }
    console.log('我是混入的内容');
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}

//返回顶部
export const backTopListenerMixin = {
  data(){
    return {
      isBackTopShow: false,
    }
  },
  methods: {
    backTopScroll(){
      // console.log('返回顶部');
      this.$refs.scroll.scrollTo(0, 0)
    },
    listenShowBackTop(position){
      // 返回顶部
      this.isBackTopShow = (-position.y) > 1000
    }
  }
}
