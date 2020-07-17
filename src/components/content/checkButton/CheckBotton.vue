<template>
  <div class="checked" @click="checked">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
    export default {
        name: "CheckBotton",
        methods: {
          checked(){
            // console.log("checked");
            this.$bus.$emit('checked')
          }
        }
    }
</script>

<style scoped>
  .checked{
    width: 18px;
    height: 18px;
    background-color: #ff8198;
    margin-right: 10px;
    border-radius: 50%;
  }
</style>
