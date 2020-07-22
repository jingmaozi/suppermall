<template>
    <div>
      <ul>
        <li v-for="(item, index) in cateItemData" @click="itemClick(index)">{{ item.title }}</li>
      </ul>
    </div>
</template>

<script>
  import {getCategoryMaitKey} from 'network/category'

  export default {
        name: "CategoryBar",
        props: {
          cateItemData: {
            type: Array,
            default(){
              return []
            }
          }
        },
        data(){
            return{
              // maitKey: '',
            }
        },
        methods: {
          itemClick(index){
            let acm = this.cateItemData[index].acm
            console.log(acm);
            getCategoryMaitKey(acm).then(res => {
            console.log(res)
          })
          }
        }
    }
</script>

<style scoped>
  li{
    list-style: none;
    padding: 10px;

  }
</style>
