<template>
  <div class="modal-content" v-if="item !== null">
    <div class="candybar__order-modal">
      <img
        :src="$nuxt.context.env.baseUrl + '/img/' + item.img"
        alt="cart_image"
        class="modal_image"
      />
      <div class="candybar__order-modal-desc">
        <h3 class="modal__title">{{ item.name }}</h3>
        <div class="modal-edit">
          <label for="filling-category" class="modal__label">Начинка</label>
          <select
            :disabled="isAddButtonClicked"
            name=""
            id="filling-category"
            class="modal__select"
            v-model="fillingId"
          >
            <option
              class="modal__option"
              :value="filling.id"
              v-for="filling in fillings"
              :key="filling.id"
            >
              {{ filling.name }}
            </option>
          </select>
          <div class="candybar__modal-quantity">
            <span class="candybar__modal-quantity-desc"> Кількість </span>
            <div class="candybar__modal-quantity-value">
              <span
                class="quantity-value-minus"
                @click="minusItem"
                v-show="!isAddButtonClicked"
                >-</span
              >
              <span class="quantity-value">{{ item_counter }}</span>
              <span
                class="quantity-value-plus"
                @click="plusItem"
                v-show="!isAddButtonClicked"
                >+</span
              >
            </div>
            <span class="candybar__modal-quantity-desc"> Шт. </span>
          </div>
          <span class="products__card-price candybar-order__price"
            >{{ calculatePrice() }} грн</span
          >

          <div class="candybar__modal-buttons">
            <span class="candybar__modal-button1" @click="hideModal"
              >Продовжити покупки</span
            >

            <span
              v-if="!isAddButtonClicked"
              class="candybar__modal-button2"
              @click="addToCart"
            >
              Додати до кошика
            </span>
            <span v-else class="candybar__modal-button1" @click="goToCart">
              Перейти до кошика
            </span>
          </div>
        </div>
      </div>
    </div>
    <img
      src="images/candybar_order-close-modal.jpg"
      alt="close"
      class="candynar-close"
      @click="hideModal"
    />
  </div>
</template>

<script>
export default {
  data(){
    return {
      item_counter: 0,
      total_price: 0,
      fillingId: null,
      isAddButtonClicked: false,
      itemMinQuantity: 0,
      selectOpen: false,
    }
  },
  props: {
    item: {
      type: Object,
    },
    number: {
      type: Number
    },
    fillings: {
      type: Array
    },
  },
  methods: {
    plusItem(){
      if(!this.isAddButtonClicked){
        this.item_counter++
      }
      
    },
    minusItem(){
      if(this.item_counter > this.item.min_quantity && !this.isAddButtonClicked){
        this.item_counter--
      }
    },
    calculatePrice(){
      return this.total_price * this.item_counter
    },
    addToCart(){
      this.$emit('addToCart', {fillingId: this.fillingId, totalPrice: this.calculatePrice(), counter: this.item_counter, price: this.item.price, categoryId: this.number, cartParam: {item: this.item, fillings: this.fillings}})
      this.isAddButtonClicked = true;
    },
    goToCart(){
      this.hideModal();
      this.$router.push('cart');
    },
    hideModal(){
      this.$modal.hide('customer-cart')
    },
  }
}
</script>

<style scoped>
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(0, 0, 0, 0.8);

}

.modal-content {
    position: relative;
    background: #FFFFFF;
    border-radius: 5px;
    margin: auto;
    padding: 0;
    /* width: 1028px; */
    height: 100%;
    /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); */
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
}

-webkit-keyframes animatetop {
    from {top:-300px; opacity:0} 
    to {top:0; opacity:1}
}

@keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}

 .candynar-close {
    color: white;
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;

}
.candynar-close:hover{
  width: 31px;
  height: 31px;
}
/*modal content*/
.candybar__order-modal{
    display: flex;
    /* padding-top: 40px; */
    flex-wrap: wrap;
    justify-content: space-around;
}
.modal_image{
    display: block;
    width: 287px;
    height: 277px;
    margin-top: 73px;
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
.modal__label{
    font-family: Kurale;
    font-size: 20px;
    line-height: 38px;
    color: #333333;
    margin-right: 53px;
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
.candybar__modal-buttons{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.candybar__modal-button1{
    font-family: Kurale;
    font-size: 20px;
    line-height: 38px;
    color: #828282;
    position: relative;
    cursor: pointer;
}
.candybar__modal-button1::before{
    display: block;
    content: '';
    width: 200px;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: 4px;
    background: #828282;
}

.candybar__modal-button2{
    display: block;
    font-family: Kurale;
    font-size: 20px;
    line-height: 38px;
    color: #FFFFFF;
    width: 200px;
    height: 40px;
    background: #DD978F;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
}
.candybar__modal-button2-active{
    color: #27AE60;
    width: 236px;
    height: 40px;
    background: none;
    border-radius: none;
    cursor: pointer;
}
.quantity-value-minus, .quantity-value-plus{
    cursor: pointer;
}
/* .cart__wrapper{
    max-width: 815px;
    margin: 0 auto;
} */
@media screen and (max-width: 770px){
    .modal-content{
        width: 768px;
        height: 468px;
    }
    .modal_image{
        width: 180px;
        height: 180px;
    }
}

@media screen and (max-width: 440px){
    .modal-content{
        width: 316px;
        height: 826px;
        top: -38px;
        border-radius: 0;
    }
    .candybar__order-modal{
        z-index: 3;
    }
/*
    .products__decoration-candybar-item1,
    .products__decoration-candybar-item2,
    .products__decoration-candybar-item3,
    .products__decoration-candybar-item4{
        display: none;
    }
*/
    .candybar__order-modal-desc{
        margin-left: 18px;
    }
    .modal_image{
        position: absolute;
        width: 287px;
        height: 277px;
        top: 85px;
    }
    .modal__title{
        text-align: center;
        margin-bottom: 320px;
    }
    .modal__label{
        font-size: 18px;
        line-height: 27px;
        margin-bottom: 10px;
    }
    .candybar__modal-quantity{
        margin-bottom: 30px;
    }
    .candybar__modal-quantity-desc{
        font-size: 18px;
        line-height: 27px;
        margin-right: 20px;
    }
    .candybar__modal-quantity-value{
        font-size: 20px;
        line-height: 38px;
        font-weight: bold;
    }
    .products__card-price{
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        font-size: 30px;
        line-height: 38px;
    }
    .candybar__modal-buttons{
        margin: 0 auto;
        text-align: center;
    }
    .candybar__modal-button1,
    .candybar__modal-button2{
        margin: 0 auto 30px;
    }
    .candynar-close{
        top: 20px;
        right: 20px;
    }
}





/*cart styles*/
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
/* .candybar__cart-content::after{
    display: block;
    content: '';
    width: 200vw;
    height: 1px;
    border: 1px solid #7D0A41;
    position: absolute;
    bottom: -100px;
    left: -100vw;
} */
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
}
.botton-back{
    background: #DD978F;
}
.botton-get{
    background: #BDBDBD;
}
</style>