<template>
  <div id="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  #nav-bar{
    display: flex;
    line-height:44px;
    height:44px;
    /*background-color: #ff8198;*/
    text-align: center;
  }

  .left, .right{
    width: 60px;
    /*background-color: #42b983;*/
  }

  .center{
    flex:1;
  }
</style>
