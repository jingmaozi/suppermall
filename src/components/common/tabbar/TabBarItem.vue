<template>
  <div class="tab-bar-item" @click="itemClick">
    <div  v-if='!isActive'><slot name="item-icon"></slot></div>
    <div v-else="isActive"><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!--    <div :class="{'active':isActive}"><slot name="item-text"></slot></div>-->
    <!--    <div :class="isActive == true?'':'active'"><slot name="item-text"></slot></div>-->
  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props:{
        path:String,
        activeColor:{
          type:String,
          default:'#ff5777'
        }
      },
      data(){
          return{
            // isActive:false
          }
      },
      // mounted(){
      //   console.log('活跃得路由',this.$router.path);
      // },
      computed:{
        isActive(){
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
          return this.isActive ? {color:this.activeColor}:{}
        }
      },
      methods:{
        itemClick(){
          // console.log('活跃得路由',this.isActive);
          // console.log('itemClick');
          this.$router.replace(this.path)
        }
      }
    }
</script>

<style scoped>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img{
    width:24px;
    heigh:24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 1px;
  }
  /*.active{*/
  /*  color: #ff5777;*/
  /*}*/
</style>
