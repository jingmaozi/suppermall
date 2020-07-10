<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "Tabbar",
    }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background-color: #f5f5f5;
    height: 49px;

    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;

    box-shadow: 0px -1px 1px rgba(0,0,0,.1);
  }
</style>
