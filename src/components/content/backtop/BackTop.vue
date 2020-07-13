<template>
    <div class="back-top">
      <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
  .back-top{
    position: fixed;
    bottom: 55px;
    right: 8px;

    width: 43px;
    height: 43px;
  }

  .back-top img{
    width: 100%;
    height: 100%;
  }
</style>
