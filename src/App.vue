<template>
  <div id="app">
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
    <keep-alive exclude="Details">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar  from "components/content/maintabbar/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
  .main-tab-bar{
    position: relative;
    z-index: 999;
  }
</style>
