<template>
  <div class="products__content-cards" :class="classItem">
      <div class="products__content-card cakepops-card">
          <h3 class="card__title">{{item.name}}</h3>
          <span class="products__card-order card__description">Мін. замовлення - {{item.min_quantity}} шт. </span>
          <span class="products__card-price card__price">{{item.price}} грн/шт</span>
          <candybarButton :item="item" :number="number" />
      </div>
      <div class="products__content-card2">
          <div class="products__element-cakepops-2" :class="rgbaClass(number)">

          </div>
          <img :src="$nuxt.context.env.baseUrl + '/img/' + item.img" alt="cakepops" class="products__element-cakepops-1">
          <img :src="$nuxt.context.env.baseUrl + '/img/' + item.img2" alt="cakepops" class="products__element-cakepops-3">
          <span class="slider-cicle1 circle-active"></span>
          <span class="slider-cicle2"></span>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    number: {
      type: Number,
      default: 1
    },
    classItem: {
      type: String,
      default: ''
    }
  },
  methods: {
    rgbaClass(number){
      switch(number){
        case 11: return '';
        case 14: return 'element-tartaletki';
        case 20: return 'small-bize-rgba';
      }
    }
  }
}
</script>

<style scoped>
.products__content-card2{
    position: relative;
}
.products__element-cakepops-2{
    display: block;
    margin-top: 60px;
    width: 578px;
    height: 218px;
    background: linear-gradient(110.66deg, rgba(54, 170, 235, 0.5) 0.03%, rgba(218, 91, 221, 0.255) 100.03%);
    filter: blur(4px);
    border-radius: 5px;
}
.products__element-cakepops-1{
    position: absolute;
    top: -51px;
    left: -57px;
    border-radius: 5px;
}
.products__element-cakepops-3{
    position: absolute;
    top: 30px;
    right: 27px;
    border-radius: 5px;
}
.cakepops-card{
    width: 260px;
    margin-right: 60px;
}
.element-tartaletki{
    background: rgba(247, 205, 142, 0.5);
}
.small-bize-rgba{
    background: rgba(194, 209, 248, 0.5);
    filter: blur(4px);
    border-radius: 5px;
}

@media screen and (max-width: 700px){
 .cards-second{
   flex-direction: column-reverse;
   margin-top: 30px;
 }
 .products__element-cakepops-1{
   display: none;
 }
 .products__element-cakepops-3{
   position: static;
 }
 .products__element-cakepops-2{
   display: none;
 }
 .products__content-card2{
   margin: 0 auto;
 }
 .cakepops-card{
   margin: 0 auto;
 }
}
</style>