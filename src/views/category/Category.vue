<template>
  <div class="category">
    <category-bar class="category-bar" :cateItemData="categoryItemData"></category-bar>
    <cate-goods class="cate-goods"></cate-goods>
  </div>

</template>

<script>
  import CateGoods from './childrencomps/CateGoods'
  import CategoryBar from './childrencomps/CategoryBar'

  import {getCategoryData} from 'network/category'
    export default {
        name: "Category",
        data(){
           return{
             maitKey: '',
             categoryItemData: []
           }
        },
      components: {
        CateGoods,
        CategoryBar
      },
        created() {
          this.maitKey = this.$route.params.maitKey
          getCategoryData().then(res => {
            console.log(res.data.category.list);
            this.categoryItemData.push(...res.data.category.list)
          })
        },
        methods: {

        }
    }
</script>

<style scoped>
  .category{
    display: flex;
  }
  .category-bar{
    width: 26%;
    background-color: #71934e;
    color: #fff;
  }
  .cate-goods{
    width: 70%;
    /*background-color: #ff5300;*/
  }

</style>
