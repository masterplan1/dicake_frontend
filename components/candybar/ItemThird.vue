<template>
  <div class="products__content-cards"
    :class="classItem"
  >
      <h3 class="candybar__toppers-title">Пряничні топери</h3>
      <div class="candybar__toppers-content">
          <div class="candybar__toppers-item"
            v-for="(card, index) in cards"
            :key="index"  
          >
              <img :src="$nuxt.context.env.baseUrl +'/img'+ card" alt="" class="candybar__toppers-image">
              <span class="candybar__toppers-desc">Великі зірочки, сердечки... <br>(10-11 см)</span>
              <span class="products__card-price card__price">{{item.price}} грн/шт</span>
              <candybarButton :item="itemTransform(card)" :number="number" />                              
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cards: [
        '/candybar_order-topper1.jpg',
        '/candybar_order-topper2.jpg',
        '/candybar_order-topper3.jpg'
      ]
    }
  },
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
    itemTransform(card){
      let arr = {};
      Object.assign(arr, this.item);
      arr.img = card;
      return arr;
    }
  },
}
</script>

<style scoped>
.candybar__toppers-title{
    font-family: Caveat;
    font-size: 50px;
    line-height: 63px;
    text-align: center;
    color: #7D0A41;
    margin-bottom: 40px;
}
.candybar__toppers-content{
    max-width: 1032px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
}
.candybar__toppers-item{
    max-width: 291px;
    margin-right: 20px;
}
.candybar__toppers-item:last-child{
    margin-right: 0;
}
.candybar__toppers-image{
    display: block;
    width: 290px;
    height: 280px;
    margin-bottom: 20px;
}
.candybar__toppers-desc{
    font-family: Kurale;    
    font-size: 20px;
    line-height: 38px;
    color: #333333;
    display: block;
    margin-bottom: 20px;
}
/* .candybar__toppers-content::after{
    display: block;
    content: '';
    position: absolute;
    left: -244px;
    top: 0;
    background: url(static/images/svg/candy_bar-cupcake-03.svg) no-repeat left center;
    width: 220px;
    height: 292px;
} */
@media screen and (max-width: 970px){
  .candybar__toppers-content{
    justify-content: space-around;
  }
  .candybar__toppers-desc{
    margin-bottom: 0;
  }
  .cart__price{
    margin-bottom: 22px;
  }
  .candybar__toppers-item{
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 700px){
  .candybar__toppers-content{
    flex-direction: column;
  }
  .candybar__toppers-item, .candybar__toppers-item:last-child{
    margin: 0 auto 30px;
  }
  .cards-topper{
    margin-bottom: 140px;
  }
}

</style>