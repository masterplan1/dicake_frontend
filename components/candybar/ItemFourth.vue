<template>
  <div class="products__content-cards" :class="classItem">
      <div class="products__content-card2 card-muss">
          <div class="products__element-cakepops-2">

          </div>
          <img :src="$nuxt.context.env.baseUrl + '/img/' + item.img" alt="cakepops" class="products__element-cakepops-1">
          <img :src="$nuxt.context.env.baseUrl + '/img/' + item.img2" alt="cakepops" class="products__element-cakepops-3">
          <span class="slider-cicle1 circle-active"></span>
          <span class="slider-cicle2"></span>
      </div>
      <div class="products__content-card muss-desc-card">
          <h3 class="card__title" :class="{'card__title-strobbery': isStrobbery}">{{item.name}}</h3>
          <span class="products__card-order card__description">Мін. замовлення - {{item.min_quantity}} шт. </span>
          <span class="products__card-price card__price">{{item.price}} грн/шт</span>
          <candybarButton :item="item" :number="number" />
      </div>
  </div>
</template>

<script>
export default {
  // data(){
  //   return {
  //     isStrobbery: false
  //   }
  // },
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
    getRgbaStyle(number){
      return number === 22 ? 'strobbery-card-item' : 'card-muss'
    },
    isStrobbery(){
      return this.number === 22 ? true : false;
    }
  }
}
</script>

<style scoped>
.card-muss{
    transform: scale(-1, 1);
}
/* .cards-muss::after{
    display: block;
    content: '';
    position: absolute;
    left: -244px;
    bottom: 0;
    background: url(static/images/svg/candy_bar-cupcake-06.svg) no-repeat left center;
    width: 220px;
    height: 292px;
} */
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
/* .cards-muss::after{
    display: block;
    content: '';
    position: absolute;
    left: -244px;
    bottom: 0;
    background: url(static/images/svg/candy_bar-cupcake-06.svg) no-repeat left center;
    width: 220px;
    height: 292px;
} */
.muss-desc-card{
    margin-right: 0;
    margin-left: auto;  
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
.strobbery-card-item{
    background: linear-gradient(108.2deg, rgba(230, 114, 184, 0.5) 4.38%, rgba(225, 149, 177, 0.5) 53.67%);
    filter: blur(4px);
    border-radius: 5px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
}
@media screen and (max-width: 970px){
  .muss-desc-card{
    margin: 0 auto;
  }
  .card-muss{
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 700px){
  .products__element-cakepops-3, .products__element-cakepops-2{
    display: none;
  }
  .products__element-cakepops-1{
    position: static;
    margin: 0 auto;
  }
  .cards-muss{
    flex-direction: column;
  }
  .products__content-card2{
    margin: 0 auto;
  }
  .products__content-card{
    width: auto;
  }
}
@media screen and (max-width: 460px){
  .card__title-strobbery{
    line-height: 40px;
  }
}
</style>
