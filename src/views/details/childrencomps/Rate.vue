<template>
    <div class="rate">
<!--      <div>{{ typeof buyrate.avatar }}</div>-->
      <div class="title" >
        <span>用户评价</span>
        <span>更多</span>
      </div>
      <div v-if="buyrate.avatar">
        <div class="user">
          <div class="userName">
            <span class="avatar">
              <img :src=" buyrate.avatar " alt="">
            </span>
            <span class="uname">{{ buyrate.uname }}</span>
          </div>
          <p>{{ content }}</p>
          <div class="info">
            <span>{{ buyrate.list.created | showDate }}</span>
            <span class="style">{{ buyrate.list.style }}</span>
          </div>
          <div class="imgs" v-if="buyrate.list.images">
            <span  v-for="item in buyrate.list.images" ><img  class="cover" :src="item" alt=""></span>
          </div>
        </div>
      </div>
      <div v-else class="noRate"><i>暂时没有评价</i></div>
    </div>
</template>

<script>
  import { publicMethod } from  'common/utils'

  export default {
        name: "Rate",
        props: {
            buyrate: {
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
              return this.buyrate? this.buyrate.list.content : ''
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
  .noRate{
    font-size: 14px;
    text-align: center;
    padding-top: 10px;
  }
</style>
