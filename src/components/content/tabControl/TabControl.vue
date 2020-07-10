<template>
    <div class="tab-control">
      <div v-for="(title,index) in titles" class="tab-control-item" >
        <span :class="index == currentIndex?'control-item' : ''" @click="itemClick(index)">{{ title }}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props: {
            titles: {
              type: Array,
              default(){
                return []
              }
            }
        },
      data(){
          return{
            currentIndex:0
          }
      },
      methods:{
        itemClick(index){
          this.currentIndex = index;
        }
      }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
  }

  .tab-control-item{
    flex: 1;
  }
  .control-item{
    color:  #ff8198;
    font-size: 15px;
    border-bottom: 3px solid #ff5777;
    padding-bottom: 7px;
  }
</style>
