<template>
    <div class="rate">
      <div class="title">
        <span>用户评价</span>
        <span>更多</span>
      </div>
      <div>
        <div class="user">
          <div class="userName">
            <span class="avatar">
              <img :src=" buyRate.avatar " alt="">
            </span>
            <span class="uname">{{ buyRate.uname }}</span>
          </div>
          <p>{{ content }}</p>
          <div class="info">
            <span>{{ buyRate.list.created | showDate }}</span>
            <span class="style">{{ buyRate.list.style }}</span>
          </div>
          <div class="imgs" v-if="buyRate.list.images">
            <span  v-for="item in buyRate.list.images" ><img  class="cover" :src="item" alt=""></span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { publicMethod } from  'common/utils'

  export default {
        name: "Rate",
        props: {
            buyRate: {
              type: Object,
              default(){
                return {}
              }
            }
        },
        data(){
          return{
            user: null
          }
        },
        computed:{
              content(){
                return this.buyRate? this.buyRate.list.content : ''
              }
        },
        filters: {
          //过滤时间
          showDate(value) {
            return publicMethod.getTimestamp(value);
          },
        },
  }
</script>

<style scoped>
  .rate{
    padding: 0 8px 16px;
    background-color: #fff;
    font-size: 14px;
    border-bottom: var(--border-belt);
  }
  .rate .title{
    display: flex;
    justify-content: space-between;

    padding: 16px 0;
    border-bottom: var(--border-botline);
  }

  .user .userName{
    padding: 10px;
  }
  .user .avatar{
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #f6f6f6;
    vertical-align: middle;
  }
  /*.user img{*/
  /*  width: 100%;*/
  /*}*/
  .user .avatar img{
    border-radius: 50%;
    width: 100%;
  }
  .user .uname{
    margin-left:6px;
  }
  .user p{
    font-size: 12px;
  }
  .user .info{
    color: #999;
    font-size: 10px;
    padding: 8px 0;
  }
  .user .style{
    margin-left: 8px;
  }
  .user .imgs{
    display: flex;
  }
  .cover{
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-right: 4px;
    object-position: 50% 50%;
  }
</style>
