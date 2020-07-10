<template>
  <div id="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props: {
          recommend: {
            type: Array,
            default() {
              return [];
            }
          }
        }
    }
</script>

<style scoped>
#recommend{
  display: flex;
  text-align: center;
  border-bottom: 10px solid #f6f6f6;
}

.recommend-item{
  flex:1;
  padding: 16px 0;
  margin-bottom: 8px;
}

.recommend-item img{
  width:70px;
  height:70px;

  margin-bottom: 10px;
}
</style>
