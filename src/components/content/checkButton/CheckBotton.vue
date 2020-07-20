<template>
  <div>
    <div class="checked-button"  :class=" {nuchecked:ischecked} " >
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "CheckBotton",
        props: {
          ischecked: {
              type: Boolean,
              default: false
            }
        },
    }
</script>

<style scoped>
  .checked-button{
    width: 18px;
    height: 18px;
    margin-right: 10px;
    border-radius: 50%;
    border: var(--border-botline);
    background-color: #fff;
  }
  .nuchecked{
    background-color: #ff8198;
    border: 1px solid #ff8198;
  }
</style>
