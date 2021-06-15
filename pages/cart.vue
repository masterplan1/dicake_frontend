<template>
  <main class="main">
    <section class="products">
      <div class="products__wrapper candybar__wrapper">
        <div class="products__title">
          <p class="products__title-header">
                    КОШИК
          </p>
          
          <div v-for="item of 4" :key="item" :class="`products__decoration-candybar-item${item}`"></div>
        </div>
        <client-only>
          <cartItem v-if="cart.length > 0" />
          <p v-else class="products__title-description products__title-cabdybar product-cake">
              Кошик порожній. <br>
              <nuxt-link to="/">На головну</nuxt-link>
          </p>
        </client-only>
        
      </div>
    </section>
  </main>
  
</template>

<script>
import {mapState} from 'vuex';
export default {
  head(){
    return {
      title: 'Кошик',
      meta: [
        {hid: 'description', name: 'description', content: 'Формування замовлення'},
        {hid: 'robots', name: 'robots', content: 'noindex,nofollow'}
      ]
    }
  },  
  computed: {
    ...mapState('cart', {
      cart: state => state.cart
    }),
  }
}
</script>

<style scoped>
.cart__wrapper{
    max-width: 815px;
    margin: 0 auto;
}
.candybar__cart-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    margin: 0 auto 113px;
    
}
.candybar__remove-button{
    position: absolute;
    background: #F41F1F;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    right: -107px;
    top: 86px;
    cursor: pointer;
}
.candybar__remove-button-item1{
    display: block;
    border: 2px solid #FFFFFF;
    transform: translateY(-50%) rotate(-46.4deg);
    width: 100%;
    height: 0;
    position: absolute;
    top: 50%;
}
.candybar__remove-button-item2{
    display: block;
    border: 2px solid #FFFFFF;
    transform: translateY(-50%) rotate(46.4deg);
    width: 100%;
    height: 0;
    position: absolute;
    top: 50%;
}
div .modal-desc1{
    width: 430px;
    margin-right: 0;
}
.candybar__cart-content::after{
    display: block;
    content: '';
    width: 200vw;
    height: 1px;
    border: 1px solid #7D0A41;
    position: absolute;
    bottom: -100px;
    left: -100vw;
}
.candybar__order-sum-line{
    max-width: 1020px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 190px auto;
}
.candybar__order-sum-price-val,
.candybar__order-sum-price-uah{
    color: #DD978F;
    font-family: Kurale;
    font-size: 30px;
    line-height: 38px;
    
}
.candybar__order-sum-price-desc{
    font-family: Kurale;
    font-size: 30px;
    line-height: 38px;
    color: #333333;
    margin-right: 42px;
}
/*get-order styles*/

.candybar__get-order-desc{
    font-family: Caveat;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    color: #DD978F;
    margin-bottom: 82px;
}
.candybar__get-order-content{
    max-width: 876px;
    margin: 0 auto 100px;
}
.candybar__get-order-info{
    width: 528px;
    margin-bottom: 50px;
}
.candybar__get-order-info-item{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 16px;
}
.candybar__get-order-info-title{
/*    margin-right: 15px;*/
    font-family: Kurale;
    font-size: 20px;
    line-height: 38px;
    color: #333333;
    display: block;
}
.candybar__get-order-info-input{
    background: #FCF5F4;
    border-radius: 5px;
    border: none;
    font-family: Kurale;
    font-size: 16px;
    line-height: 38px;
    color: #4F4F4F;
    padding-left: 15px;
    width: 423px;
    display: block;
}
.input-date{
    width: 212px;
}
.candybar__get-order-delivery{
    border: none;
    background: #FCF5F4;
    border-radius: 5px;
    border: none;
    font-family: Kurale;
    font-size: 16px;
    line-height: 38px;
    color: #4F4F4F;
    padding-left: 15px;
    width: 353px;
    height: 40px;
    display: block;  
}
.input-address{
    width: 353px;
}
.candybar__get-order-price-item{
    position: relative;
    margin-top: 49px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.candybar__get-order-price-item-name{
    display: block;
    font-family: Kurale;
    font-size: 30px;
    line-height: 38px;
    color: #333333;
    margin-right: 42px;
}
.candybar__get-order-price-item-value,
.candybar__get-order-price-item-uah{
    display: block;
    font-family: Kurale;
    font-size: 30px;
    line-height: 38px;
    color: #DD978F;
}
.candybar__get-order-price-item-value{
    margin-right: 10px;
}
.candybar__get-order-comment-desc{
    font-family: Caveat;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    color: #DD978F;
    margin-bottom: 50px;
}
.candybar__get-order-comment{
    width: 100%;
    height: 200px;
    background: #FCF5F4;
    border-radius: 5px;
    border: none;
    font-family: Kurale;
    font-size: 20px;
    line-height: 38px;
    color: #BDBDBD;
    padding-left: 20px;
}
.candybar__get-order-buttons{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1029px;
    margin: 0 auto;
}
.candybar__get-order-botton{
    width: 182px;
    height: 40px;
    border-radius: 20px;
    display: block;
    text-align: center;
    font-family: Kurale;
    font-size: 20px;
    line-height: 38px;
    color: #FFFFFF;
    cursor: pointer;
}
.error-show{
    position: absolute;
    top: -35px;
    left: 0;
    color: red;
    display: none;
}
.active-order-button{
    background: #DD978F !important;
}
.botton-back{
    background: #DD978F;
}
.botton-get{
    background: #BDBDBD;
}
</style>