<template>
  <div class="cart__wrapper">
    <div 
      class="candybar__cart-content"
      v-for="(item, index) in cart"
      :key="index"
    >
      <img :src="findImgSrc(item)" alt="cart_image" class="modal_image">
      <div class="candybar__order-modal-desc modal-desc1">
        <h3 class="modal__title">{{item.cartParam.item.name}}</h3>
        <label v-if="item.cartParam.fillings.length > 0" for="filling-category" class="modal__label">Начинка</label>
        <select v-if="item.cartParam.fillings.length > 0" class="modal__select modal__select-cart" @change="fillingChange(index)" v-model="fillingIds[index]">
            <option class="modal__option" 
              v-for="(filling, index) in cart[index].cartParam.fillings"
              :key="index"
              :value="filling.id"
            >{{filling.name}}</option>
        </select>
        <div class="candybar__modal-quantity">
            <span class="candybar__modal-quantity-desc">
                Кількість
            </span>
            <div class="candybar__modal-quantity-value">
                <span class="quantity-value-minus" @click="minusItem(index)">-</span>
                <span class="quantity-value">{{cart[index].counter}}</span>
                <span class="quantity-value-plus" @click="plusItem(index)">+</span>
            </div>
            <span class="candybar__modal-quantity-desc">
                Шт.
            </span>
        </div>
        <span class="products__card-price candybar-order__price">{{cart[index].price}} грн</span>
      </div>
      <div class="candybar__remove-button" @click="deleteFromCart(index)">
        <span class="candybar__remove-button-item1"></span>
        <span class="candybar__remove-button-item2"></span>
      </div>
    </div>
    <div class="candybar__order-sum-line">
      <nuxt-link to="candybar" class="order-link"><span class="candybar__modal-button1">Продовжити покупки</span></nuxt-link>
      <a @click.prevent="makeOrder" href="" class="order-diatery"><span class="products__cake-choose">Оформити</span></a>
      <div class="candybar__order-sum-price">
          <span class="candybar__order-sum-price-desc">Ціна</span>
          <span class="candybar__order-sum-price-val">{{GET_TOTAL_PRICE}}</span>
          <span class="candybar__order-sum-price-uah">грн</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';

export default {
  data(){
    return {
      fillingIds: [],
      // itemCounter: [],
    }
  },
  computed: {
    ...mapState('cart', {
      cart: state => state.cart
    }),
    ...mapGetters('cart', [
      'GET_TOTAL_PRICE',
      'GET_FILLING_IDS'
    ]),
  },
  mounted(){
    this.fillingIds = this.GET_FILLING_IDS;
  },
  methods: {
    ...mapActions('cart', [
      'INCREASE_ITEM_QUANTITY',
      'DECREASE_ITEM_QUANTITY',
      'FILLING_CHANGE',
      'DELETE_FROM_CART'
    ]),
    findImgSrc(data){
      const type = data.cartParam.item.productType;
      if(type === 4 || type === 5){
        return $nuxt.context.env.baseUrl + data.cartParam.item.img
      }
      return $nuxt.context.env.baseUrl + '/img/' + data.cartParam.item.img
    },
    // findImgSrc(item){
    //   const currentFilling = item.cartParam.fillings.find(f => f.id === item.fillingId);
    //   return this.$nuxt.context.env.baseUrl + '/img' + currentFilling.image;
    // },
    plusItem(index){
      this.INCREASE_ITEM_QUANTITY(index);
    },
    minusItem(index){
      this.DECREASE_ITEM_QUANTITY(index);
    },
    fillingChange(index){
      const id = this.fillingIds[index];
      this.FILLING_CHANGE({id, index});
    },
    deleteFromCart(index){
      this.DELETE_FROM_CART(index);
      this.fillingIds = this.GET_FILLING_IDS;
    },
    makeOrder(){
      this.$router.push('/order')
    }
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
.candybar__order-modal-desc{
    margin-top: 73px;  
    width: 460px;
}
.modal__title{
    font-family: Caveat;
    font-size: 50px;
    line-height: 63px;
    color: #7D0A41;
    margin-bottom: 20px;
}
.modal__select, .modal__option{
    background: #FCF5F4;
    border-radius: 5px;
    width: 286px;
    height: 40px;
    font-family: Kurale;
    font-size: 16px;
    line-height: 38px;
    color: #4F4F4F;
    border: 0;
}
.modal__label{
    font-family: Kurale;
    font-size: 20px;
    line-height: 38px;
    color: #333333;
    margin-right: 53px;
}
.candybar__modal-quantity{
    display: flex;
    flex-wrap: wrap;
    margin-top: 28px;
}
.candybar__modal-quantity-desc{
    font-family: Kurale;
    display: block;
    margin-right: 50px;
}
.candybar__modal-quantity-value{
    width: 80px;
    height: 40px;
    background: #FCF5F4;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    position: relative;
    top: -10px;
    margin-right: 20px;
}
.quantity-value-minus, .quantity-value, .quantity-value-plus{
    display: block;
}
.candybar-order__price{
    margin-top: 4px;
    margin-left: 138px;
    margin-bottom: 40px;
}
.modal_image{
    display: block;
    width: 287px;
    height: 277px;
    margin-top: 73px;
}
.candybar__remove-button {
    position: absolute;
    background: #F41F1F;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    right: -107px;
    top: 86px;
    cursor: pointer;
}
.candybar__remove-button-item1 {
    display: block;
    border: 2px solid #FFFFFF;
    transform: translateY(-50%) rotate(-46.4deg);
    width: 100%;
    height: 0;
    position: absolute;
    top: 50%;
}
.candybar__remove-button-item2 {
    display: block;
    border: 2px solid #FFFFFF;
    transform: translateY(-50%) rotate(46.4deg);
    width: 100%;
    height: 0;
    position: absolute;
    top: 50%;
}
.candybar__cart-content::after {
    display: block;
    content: '';
    width: 200vw;
    height: 1px;
    border: 1px solid #7D0A41;
    position: absolute;
    bottom: -100px;
    left: -100vw;
}
.candybar__order-sum-line {
    max-width: 1020px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 190px auto;
}
.order-link {
    text-decoration: none;
    color: #333333;
}
.order-diatery {
    text-decoration: none;
}
.candybar__order-sum-price-desc {
    font-family: Kurale;
    font-size: 30px;
    line-height: 38px;
    color: #333333;
    margin-right: 42px;
}
.candybar__order-sum-price-val, .candybar__order-sum-price-uah {
    color: #DD978F;
    font-family: Kurale;
    font-size: 30px;
    line-height: 38px;
}
.candybar__modal-button1 {
    font-family: Kurale;
    font-size: 20px;
    line-height: 38px;
    color: #828282;
    position: relative;
    cursor: pointer;
}
.quantity-value-minus, .quantity-value-plus{
    cursor: pointer;
}

@media screen and (max-width: 1000px){
  .modal_image{
    margin: 40px auto;
  }
  .candybar__order-modal-desc{
    width: 300px;
    margin: 0 auto;
  }
  .modal__select, .modal__label{
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  .modal__title{
    text-align: center;
  }
  .candybar__modal-quantity{
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
  .candybar__modal-quantity-desc{
    margin-right: 20px;
  }
  .candybar__cart-content::after{
    bottom: -30px;
  }
  .candybar__cart-content{
    margin-bottom: 70px;
  }
  .candybar__remove-button{
    right: 0;
    top: 0;
  }
  .candybar__order-sum-line{
    flex-direction: column-reverse;
    text-align: center;
    margin: 100px auto;
  }
  .order-diatery{
    margin-bottom: 10px;
  }
  .candybar__order-sum-price{
    margin-bottom: 20px;
  }
  .candybar__order-sum-price-desc{
    margin-right: 10px;
  }
}
</style>