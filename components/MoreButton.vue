<template>
  <div class="products__more">
    <div class="products__more-buttons" @click="addFillings()">
      <span class="products__more-name"> Більше </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addFillings(){
      this.$emit('addFillings', null)
    }
  }
}
</script>