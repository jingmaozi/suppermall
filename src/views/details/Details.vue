<template>
    <div class="details">
      {{ iid }}
    </div>
</template>

<script>
  import NavBar from ".childrencomps/DetailNavBar"
  export default {
        name: "Details",
        created() {
          this.iid =  this.$route.params.iid
        }
    }
</script>

<style scoped>

</style>
