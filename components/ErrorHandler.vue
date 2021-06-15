<template>
  <div class="error-wrap">
    <h1>{{errorMessage}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      default(){
        return 'Виникла помилка. Спробуйте пізніше!';
      },
      type: String
    },
  }
}
</script>

<style scoped>
  .error-wrap h1{
    text-align: center;
  }
</style>