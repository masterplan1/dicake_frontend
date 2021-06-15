<template>
  <main class="main">
    <client-only>
      <section class="products" v-if="(cart.length > 0) || orderComplete">
        <div class="products__wrapper candybar__wrapper">
          <div class="products__title">
            <h1 class="products__title-header">
                      Оформити замовлення
            </h1>
            <p class="products__title-description products__title-cabdybar product-cake" v-if="!orderComplete">
                Вартість декору виробу обговорюється індивідуально <br>
                      в телефонному режимі.
            </p>
            <div v-for="item of 4" :key="item" :class="`products__decoration-candybar-item${item}`"></div>
          </div>
          <div class="candybar__get-order-content" v-if="!orderComplete">
            <form class="candybar__get-order-info">
                <div class="candybar__get-order-info-item" :class="{'error' : $v.userForm.name.$error}">
                    <span class="candybar__get-order-info-title">Ваше ім’я</span>
                    <input 
                      type="text" 
                      class="candybar__get-order-info-input" 
                      placeholder=""
                      v-model="userForm.name" 
                      :class="{'not-validate': $v.userForm.name.$error}"
                      @blur="nameCheck"
                    >
                    <div class="error-message"
                      v-if="!$v.userForm.name.required && $v.userForm.name.$dirty"
                    >Введіть ваше ім'я</div>
                    <div class="error-message"
                      v-if="!$v.userForm.name.alpha && $v.userForm.name.$dirty"
                    >Поле не повинно містити цифри та інші знаки</div>
                    <div class="error-message"
                      v-if="!$v.userForm.name.minLength && $v.userForm.name.$dirty"
                    >Поле повинно містити не меньше 3 символів</div>
 
                </div>
                <div class="candybar__get-order-info-item">
                    <span class="candybar__get-order-info-title">Телефон</span>
                    <input 
                      type="text" 
                      class="candybar__get-order-info-input" 
                      placeholder="(093)333 33 33"
                      v-model="userForm.phone"
                      v-mask="'(###)### ## ##'"
                      :class="{'not-validate': $v.userForm.phone.$error}"
                      @blur="phoneCheck"
                    >
                    <div class="error-message"
                      v-if="!$v.userForm.phone.required && $v.userForm.phone.$dirty"
                    >Введіть ваш номер телефону</div>
                    <div class="error-message"
                      v-if="!$v.userForm.phone.numeric && $v.userForm.phone.$dirty"
                    >Поле повинно містити тільки цифри</div>
                    <div class="error-message"
                      v-if="!$v.userForm.phone.minLength && $v.userForm.phone.$dirty"
                    >Введіть коректний номер</div>
                </div>
                <div class="candybar__get-order-info-item">
                    <span class="candybar__get-order-info-title">Дата оформлення замовлення</span>
                    <!-- <input type="text" class="candybar__get-order-info-input input-date" placeholder="28 січня"> -->
                    <date-picker 
                      :input-class="'candybar__get-order-info-input input-date'"
                      v-model="orderDate"
                      :format="'dd.MM.yy'"
                      :disabled-dates="disabledDate"
                      @input="dateCheck"
                      :class="{'not-validate': $v.userForm.date.$error}"
                    >
                    </date-picker>
                    <div class="error-message"
                      v-if="!$v.userForm.date.required && $v.userForm.date.$dirty"
                    >Виберіть дату замовлення</div>
                </div>
                <div class="candybar__get-order-info-item">
                    <span class="candybar__get-order-info-title">Спосіб доставки</span>
                    <select v-model="userForm.delivery" @change="checkValidation" class="candybar__get-order-delivery">
                        <option v-for="(item, index) of deliveryTypes"
                          :key="index"
                          :value="index" 
                          class="candybar__get-order-delivery-item"
                        >{{item}}</option>
                    </select>
                </div>
                <div class="candybar__get-order-info-item" v-show="userForm.delivery != 1">
                    <span class="candybar__get-order-info-title">Адреса доставки</span>
                    <input 
                      type="text" 
                      class="candybar__get-order-info-input input-address" 
                      placeholder="м. Обухів, вул.Київська 1"
                      v-model="userForm.address" 
                      :class="{'not-validate': $v.userForm.address.$error}"
                      @blur="addressCheck"
                    >
                    <div class="error-message"
                      v-if="!$v.userForm.address.required && $v.userForm.address.$dirty"
                    >Введіть вашу адресу</div>
                </div>
                <div class="candybar__get-order-info-item">
                    <span class="candybar__get-order-info-title">Спосіб оплати</span>
                    <select v-model="userForm.payment" class="candybar__get-order-delivery">
                        <option v-for="(item, index) of paymentTypes"
                          :key="index"
                          :value="index" 
                          class="candybar__get-order-delivery-item"
                        >{{item}}</option>
                    </select>
                </div>
                <textarea v-model="userForm.comment" class="candybar__get-order-comment" placeholder="Залишити коментар..."></textarea>
            </form>
            <div class="candybar__get-order-price-item candybar__get-order-info">
                <span class="candybar__get-order-price-item-name">Ціна</span>
                <span class="candybar__get-order-price-item-value">{{GET_TOTAL_PRICE}}</span>
                <span class="candybar__get-order-price-item-uah">грн.</span>
            </div>
            
          </div>
        
          <cart-acknoledge v-else />

          <div class="candybar__get-order-buttons">
              <span 
                @click="goBack" 
                class="candybar__get-order-botton button-active"
              >{{buttonTitle}}</span>
              <span 
                v-if="!orderComplete"
                :class="{'button-active': chekedValidation}" 
                class="candybar__get-order-botton"
                @click="makeOrder"
              >Оформити</span>
          </div>
        </div>
      </section>
    </client-only>
  </main>
</template>

<script>
import {mapGetters, mapState, mapActions} from 'vuex';
import {helpers, required, minLength} from 'vuelidate/lib/validators';
import {mask} from 'vue-the-mask';

const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёіА-ЯЁІ ]*$/);
const numeric = helpers.regex('numeric', /^[0-9\(\) ]*$/);

export default {
  data(){
    return {
      userForm: {
        name: '',
        phone: '',
        date: '',
        delivery: 1,
        payment: 1,
        address: null,
        comment: null
      },
      isError: false,
      dataInput: null,
      disabledDate: {
        to: new Date()
      },
      chekedValidation: false,
      prevRoute: null,
      orderDate: null,
      orderComplete: false,
      title: 'Оформлення замовлення'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Оформлення замовлення та уточнення даних замовника'
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex,nofollow'
        }
      ]
    }
  },
  async asyncData({$axios}){
    try {
      const deliveryTypes = await $axios.$get('/api/ordercart/delivery');
      const paymentTypes = await $axios.$get('/api/ordercart/payment');
      return {deliveryTypes, paymentTypes};
    } catch (error) {
      console.log(error.message);
      const isError = true;
      const errorMessage = error.message;
      return { isError, errorMessage };
    }
  },
  directives: {
    mask
  },
  beforeRouteEnter(to, from, next){
    next(vm => {
      vm.prevRoute = from
    })
  },
  computed: {
    ...mapGetters('cart', [
      'GET_TOTAL_PRICE',
      'GET_CART_FOR_ORDER'
    ]),
    ...mapState('cart', {
      cart: state => state.cart
    }),
    buttonTitle(){
      return !this.orderComplete ? 'Крок назад' : 'На головну';
    }
  },
  validations: {
    userForm: {
      name: {
        required,
        alpha,
        minLength: minLength(3)
      },
      phone: {
        required,
        numeric,
        minLength: minLength(10)
      },
      date: {
        required
      },
      address: {
        required
      }
    }
  },
  methods: {
    ...mapActions('cart', [
      'REMOVE_ITEMS_FROM_CART'
    ]),
    nameCheck(){
      this.$v.userForm.name.$touch();
      this.checkValidation()
    },
    phoneCheck(){
      this.$v.userForm.phone.$touch();
      this.checkValidation()
    },
    addressCheck(){
      this.$v.userForm.address.$touch();
      this.checkValidation()
    },
    dateCheck(){
      this.$v.userForm.date.$touch()
      this.userForm.date = this.$moment(this.orderDate).format('DD.MM.YY');
      this.checkValidation();
    },
    checkValidation(){
      if(this.userForm.delivery != 1 && !this.$v.userForm.$invalid){
        this.chekedValidation = true
      }
      else if(this.userForm.delivery == 1 && !this.$v.userForm.name.$invalid && !this.$v.userForm.phone.$invalid && !this.$v.userForm.date.$invalid){
        this.chekedValidation = true
      }else{
        this.chekedValidation = false
      }
    },
    goBack(){
      if(!this.orderComplete){
        this.$router.push(this.prevRoute)
      }else{
        this.$router.push('/')
      }
      
    },
    async makeOrder(){
      if(this.chekedValidation){
        try {
          const result = await this.$axios.$post('/api/ordercart/order', {
            userData: {...this.userForm, sum: this.GET_TOTAL_PRICE}, cartData: this.GET_CART_FOR_ORDER 
        });
        if(result){
          this.REMOVE_ITEMS_FROM_CART();
          this.orderComplete = true;
          this.$toast.success('Замовлення прийнято!', {duration: 3000})
        }
        } catch (error) {
          
        }
      }
    },

  }
}
</script>

<style scoped>
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
    margin: 0 auto 50px;
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
    height: 140px;
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
    cursor: default;
    background: #BDBDBD;
}
.button-active{
    background: #DD978F;
    cursor: pointer;
}

/* error messages, validation notifications */
.not-validate{
  background-color: #fce4e4;
  border: 1px solid #cc0033;
  outline: none;
}
.error label {
  color: #cc0033;
}
.error-message {
  max-width: 192px;
  color: #cc0033;
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
  margin: 5px 0 0;
}


@media screen and (max-width: 560px) {
  .candybar__get-order-info{
    width: auto;
  }
  /* .candybar__get-order-info-input{
    width: auto;
  } */
}
</style>