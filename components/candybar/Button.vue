<template>
  <span class="products__cake-choose" @click="showModal">
      Обрати
  </span>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default(){
        return {}
      }
    },
    number: {
      type: Number
    }
  },
  methods: {
    showModal(){
      this.$modal.show('customer-cart', {item: this.item, number: this.number, isDiatery: false})
    }
  }
}
</script>