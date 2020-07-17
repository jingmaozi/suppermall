<template>
  <div class="detail-image">
    <div v-for="(item, index) in detailImage" data-index="index">
      <div v-for="img in item.list" >
        <img :src="img" alt="" @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailImages",
        props: {
          detailImage: {
           type: Array,
           default(){
             return []
           }
         }
       },
      data(){
        return{
          counter: 0,
          imageLength: 0
        }
      },
      methods: {
        imageLoad(){
          // if(++this.counter === this.imageLength){
            this.$emit('imageLoad')
          // }
        }
      },
      watch: {
        detailImage(e){
            this.imageLength = this.detailImage[0].list.length
          }
      }
    }
</script>

<style scoped>
  .detail-image{
    border-bottom: var(--border-belt);
    padding-bottom: 16px;
  }
  .detail-image img{
    width: 100%;
  }
</style>
