<template>
  <div>
    <nav-bar>
      <div slot="left">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">详情页</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
    export default {
        name: "DetailNavBar",
        components: {
          NavBar
        },
        data(){
          return{
            iid: null
          }
        },

    }
</script>

<style scoped>

</style>
