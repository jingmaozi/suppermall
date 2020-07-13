<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
        name: "BetterScroll",
        props: {
          probeType: {
            type: Number,
            default: 0
          },
          pullUpLoad: {
            type: Boolean,
            default: false
          }
        },
        data(){
          return{
            scroll: null
          }
        },
        mounted() {
          // console.log(this.$refs.wrapper);
          // 1.创建BScroll实例对象
          this.scroll = new BScroll(this.$refs.wrapper, {
            probeType: this.probeType,
            click: true,
            pullUpLoad: this.pullUpLoad
          })

          //2.监听滚动的位置
         if( this.probeType === 2 || this.probeType === 3) {
           this.scroll.on('scroll', (position) => {
             // console.log(position);
             this.$emit('backTop', position)
           })
         }

          //3.监听上拉加载更多
       if( this.probeType) {
         this.scroll.on('pullingUp', () => {
           // console.log('上拉加载-----');
           this.$emit('pullingUp')
         })
       }
        },

        methods: {
          scrollTo(x, y, time=300) {
            this.scroll && this.scroll.scrollTo(x, y, time)
          },
          refresh(){
            this.scroll && this.scroll.refresh()
          },
          finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
          },
          getScrollY() {
            return this.scroll ? this.scroll.y : 0
          }
        }
    }
</script>

<style scoped>

</style>
