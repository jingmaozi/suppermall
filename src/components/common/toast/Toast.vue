<template>
  <div  class="toast" v-show="isShow">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
    export default {
        name: "Toast",
        props: {
           msg: {
             type: String,
             default: ''
           },
          isShow: {
             type: Boolean,
             default: false
          }
        },

      methods: {
        show(message, duration = 1500){
          console.log(message)
          this.msg = message
          this.isShow = true

          setTimeout(() => {
            this.isShow = false
            this.msg = ''
          }, duration)
        }
      }

    }
</script>

<style scoped>
  .toast{
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 999;
    transform: translate(-50%, -50%);

    padding: 6px 10px;
    background-color: rgba(0,0,0,.75);

    color: #fff;

  }
</style>
