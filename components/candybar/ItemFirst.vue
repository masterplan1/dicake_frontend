<template>
  <div class="products__content-cards" :class="classItem">
      <div class="products__content-card">
          <div class="products__element1"
            :class="getRgbaStyle(number)[0]"
          >

          </div>
          <img :src="this.$nuxt.context.env.baseUrl + '/img/' + item.img" alt="" class="products__element2">
      </div>
      <div class="products__content-card">
          <h3 class="card__title">{{item.name}}</h3>
          <span class="products__card-order card__description">Мін. замовлення - {{item.min_quantity}} шт. </span>
          <span class="products__card-price card__price">{{item.price}} грн/шт</span>
          <candybarButton :item="item" :number="number" />
      </div>
      <div class="products__content-card">
          <div class="products__element3" :class="getRgbaStyle(number)[1]">
          </div>
          <img :src="this.$nuxt.context.env.baseUrl + '/img/' + item.img2" alt="" class="products__element4">
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
    getRgbaStyle(number){
      switch(number){
        case 10: return ['cupcake-rgba1', 'cupcake-rgba3']
        case 13: 
        case 19: return ['trifle-rgba1', 'trifle-rgba1']
        case 21: return ['cheese-rgba1', 'cheese-rgba2']
        default: return ['', '']
      }
    }
  },
  
}
</script>

<style scoped>
/* .cards-cupcake::after{
    display: block;
    content: '';
    position: absolute;
    left: -244px;
    bottom: 0;
    background: url(static/images/svg/candy_bar-cupcake-01.svg) no-repeat left center;
    width: 215px;
    height: 292px;
} */
.cards-cupcake::before{
    display: block;
    content: '';
    position: absolute;
    right: 76px;
    bottom: -100px;
    width: 2200px;
    height: 1px;
    border: 1px solid #7D0A41;
}
.cupcake-rgba1{
    background: rgba(198, 148, 101, 0.5);
}
.cupcake-rgba3{
    background: rgba(181, 47, 97, 0.5);
}
.trifle-rgba1{
    background: rgba(213, 151, 161, 0.5);
}
.trifle-rgba3{
    background: rgba(230, 159, 215, 0.5);
}
.cheese-rgba1{
    background: rgba(234, 220, 94, 0.19);
    filter: blur(4px);
    border-radius: 5px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
}
.cheese-rgba2{
    background: rgba(183, 228, 209, 0.5);
    filter: blur(4px);
    border-radius: 5px;
}

@media screen and (max-width: 700px){
  .products__content-card:last-child{
    display: none;
  }
  .cards-cupcake::before{
    bottom: 50px;
    right: -70px;
  }
  .products__content-cards{
    margin: 0 auto;
  }
}
</style>