<template>
  <main class="main">
    <section class="order">
      <div class="order__wrapper">
        <div class="order__title">
          <p class="order__title-header">Створити замовлення</p>

          <div class="products__decoration-candybar-item1"></div>
          <div class="products__decoration-candybar-item2"></div>
          <div class="products__decoration-candybar-item3"></div>
        </div>
        <ConstructIndicator 
          v-if="step < 7"
          :step="step"
        />
        <p class="order__description">{{orderTitle[step]}}</p>

        <div class="order__content">
          <!--                    first section of content start-->
          <transition-group name="slide-fade">
          <div class="order__content-cards-first" v-show="step === 1" key="1">
            <span class="order__content-card order-cake"
              @click="chooseType($event, cakeValue.cake)"
            > Торт </span>
            <span class="order__content-card order-cupcake"
              @click="chooseType($event, cakeValue.cupcake)"
            > Капкейки </span>
            <span class="order__content-card order-candybar"
              @click="locationCandybar"
            > Candy bar </span>
          </div>
          </transition-group>
          <!-- first section of content end -->

          <!-- second section of content end -->
          <transition-group name="slide-fade">
          <div class="order__content-cards-second second__container-actve" v-show="step === 2" key="1">
            <span class="order__content-card card-second"
              @click="chooseDecoration($event, null)"
            >
              Обрати з наявного
            </span>
            <span class="order__content-card card-second" 
              :class="{'second-active order__content-card-active' : isActiveDecorationOwn}"
              @click="chooseDecoration($event, -1)"
            >
              Cвій варіант
            </span>
          </div>
          <div class="second__container-actve" v-show="step === 2" key="2">
            <div class="products">
              <ProductComponent 
                v-if="showProducts"
                :typeId="order_data.cake_type"
                @chooseDecorItem="chooseDecorItem"
                :isForConstructor="true"
              />
            </div>
          </div>
          </transition-group>
          <!-- second section of content end -->

          <!-- filling section start -->
          <transition-group name="slide-fade">
          <div class="order__content-cards-second-filling" v-show="step === 3" key="1">
            <span class="order__content-filling" v-show="fillingMinWeight">Мінім. замовлення від {{fillingMinWeight}} {{getAmountName}}.</span>
          </div>
          <div class="second__container-actve" v-show="step === 3" key="2">
            
            <div class="products">
              <filling-component 
                v-if="this.showFillings"
                :key="updateFillings"
                :typeId="order_data.cake_type"
                :categoryId="categoryId"
                @chooseFillingItem="chooseFillingItem"
              />
            </div>
          </div>
          </transition-group>
          <!-- filling section end -->

          <!-- third section of content start-->
          <transition-group name="slide-fade">
          <div class="order__content-cards-third" v-show="step === 4" key="1">
            <div class="order__third-item">
              <span class="order__third-title">Вага</span>
              <div class="order__third-value">
                <span class="order__third-value-item order-minus" @click="decreaseWeight">-</span>
                <span class="order__third-value-item order-weight">{{fillingOrderWeight}}</span>
                <span class="order__third-value-item order-plus" @click="increaseWeight">+</span>
              </div>
              <span class="order__third-kg">{{getAmountName}}</span>
            </div>
            <div class="order__third-item">
              <span class="order__third-title">Ціна</span>
              <p class="order__third-value">{{calculatedPrice}}</p>
              <span class="order__third-kg">Грн</span>
            </div>
          </div>
          </transition-group>
          <!-- third section of content end-->

          <!-- fourth section of content start-->
          <transition-group name="slide-fade">
          <div v-show="step === 5" key="1">
            
              <ConstructUserform 
                @checkedValidation="getUserData"
                @resetValidation="resetValidation"
              />
           
          </div>
          </transition-group>
          <!-- fourth section of content end-->

          <!-- sixth section of content start-->
          <!-- <div class="order__content-cards-sixth" > -->
            <transition-group name="slide-fade">
            <ConstructAcknowledge 
              key="1"
              v-if="step === 6"
              :orderDataForAcknowledge="getAcknowledegeInfo"
            />
            </transition-group>
          <!-- </div> -->
          <!-- sixth section of content end-->

          <!-- seventh section of content start-->
          <transition-group name="slide-fade">
            <ConstructCongratulation 
              v-if="step === 7"
              key="1"
            />
            </transition-group>
          <!-- seventh section of content end-->
        </div>
        <div class="order__buttons"
          :class="{'flex-reverse' : step === 1, 'flex-center': step === 7}"
        >
          <span class="order__button prev-button" @click="prevStep"
            v-show="step !== 1"
            :class="{ 'order__button-active' : step === 7}"
          >{{step < 7 ? 'Крок назад' : 'На головну'}}</span>
          <span class="order__button" @click="nextStep"
            :class="{ 'order__button-active' : isActiveNextButton || step === 6}"
            v-if="step < 7"
          >{{step === 6 ? 'Підтвердити' : 'Далі'}}</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import {requider, minlength} from 'vuelidate/lib/validators';
import FillingComponent from '~/components/FillingComponent.vue';
import ProductComponent from '~/components/ProductComponent.vue';
export default {
  components: { ProductComponent, FillingComponent },
  data() {
    return {
      step: 1,
      isActiveNextButton: false,
      showFillings: false,
      updateFillings: 0,
      order_data: {
        cake_type: null,
        cake_decoration: null,
        cake_filling: null,
        cake_weight: null,
        cake_price: null,
        user_name: null,
        user_phone: null,
        order_date: null,
      },
      cakeValue: {
        cake: 1,
        cupcake: 2,
        candybar: 3,
        diatery: 4,
        present: 5,
      },
      orderTitle: [
        'Створіть тортик вашої мрії',
        'Оберіть категорію замовлення',
        'Оберіть оформлення на свій смак',
        'Оберіть начинку серед наявних',
        'Оберіть потрібну вагу Вашого замовлення',
        'Заповніть інформацію для зворотнього зв\'язку та дату видачі',
        'Підтвердження замовлення',
      ],
      productType: [
        "Весь асортимент",
        "Торти",
        "Капкейки",
        "Candybar",
        "Дієтичні десерти",
        "Подарункові набори",
      ],
      currentTypeButton: null,
      currentDecorationButton: null,
      isActiveDecorationOwn: false,
      showProducts: false,
      categoryId: null,
      fillingMinWeight: null,
      fillingPricePerKg: null,
      fillingOrderWeight: null,
      decorItemName: null,
      fillingItemName: null,
      isError: false,
      errorMsg: null,
      formValidation: false,
      title: 'Конструктор тортів та капкейків'
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Конструктор тортів від кондитерської «Трюфель» - створіть торт за власним вподобанням всього за декілька кроків! Оберіть оформлення та начинку торта. Доставка по Обухову.'
        }
      ]
    }
  },
  methods: {
    checkNextClick(){
      if(this.step === 2 && this.order_data.cake_decoration){
        this.isActiveNextButton = true;
      }else if(this.step === 3 && this.order_data.cake_filling){
        this.isActiveNextButton = true;
      }else if(this.step === 4){
        this.isActiveNextButton = true;
      }else if(this.step === 5 && this.formValidation){
        this.isActiveNextButton = true;
      }
      else{
        this.isActiveNextButton = null;
      }
    },
    nextStep(){
      if(this.step < 6 && this.isActiveNextButton){
        this.step++;
        this.checkNextClick();
        this.scrollUp()
      }else if(this.step === 6){
        if(this.makeOrder()){
          this.step++;
        }else{
          this.isError = true;
          this.errorMsg = "Помилка створення замовлення. Спробуйте пізніше"
        }
      }
    },
    prevStep(){
      if(this.step === 7){
        this.$router.push('/')
      }
      if(this.step > 1){
         this.step--;
         this.isActiveNextButton = true;
         this.scrollUp()
      }
      
    },
    chooseType($event, type){
      if(this.currentTypeButton){
        this.currentTypeButton.classList.toggle('order__content-card-active')
      }
      this.currentTypeButton = $event.target;
      this.currentTypeButton.classList.toggle('order__content-card-active')

      // next button active setup
      if(this.order_data.cake_type && this.order_data.cake_type !== type){
        this.order_data.cake_decoration = null
      }
      this.order_data.cake_type = type;
 
      this.showProducts = false;
      this.isActiveNextButton = true;
    },
    chooseDecoration($event, id){
      if(this.order_data.cake_decoration && this.order_data.cake_decoration !== id){
        this.order_data.cake_filling = null
      }
      if(this.currentDecorationButton){
        this.currentDecorationButton.classList.toggle('order__content-card-active')
      }
      this.currentDecorationButton = $event.target;
      this.currentDecorationButton.classList.toggle('order__content-card-active')
      this.order_data.cake_decoration = id;
      if(id !== null){
        this.isActiveDecorationOwn = true;
        this.isActiveNextButton = true;
        this.showProducts = false;
        // asd
        this.categoryId = id;
        if(this.showFillings){
          this.forceRender()
        }else{
          this.showFillings = true;
        }
        if(id === -1){
          this.decorItemName = 'Свій варіант'
        } 
        
      }else{
        this.isActiveNextButton = false;
        this.isActiveDecorationOwn = false;
        this.showProducts = true;
      };
    },
    chooseDecorItem({productId, categoryId, productName}){
      if(this.order_data.cake_decoration && this.order_data.cake_decoration !== productId){
        this.order_data.cake_filling = null
        this.forceRender()
      }
      this.order_data.cake_decoration = productId
     
      if(this.showFillings){
        if(this.categoryId && this.categoryId != categoryId)
        {
          this.categoryId = categoryId
          this.decorItemName = productName
          this.forceRender();
        }
      }else{
        this.showFillings = true;
      }
      this.categoryId = categoryId
      this.decorItemName = productName
      this.isActiveNextButton = true;
    },
    chooseFillingItem(id, min_weight, price, name){
      this.order_data.cake_filling = id;
      this.isActiveNextButton = true;
      this.fillingMinWeight = min_weight;
      this.fillingPricePerKg = price;
      this.fillingItemName = name;
      this.fillingOrderWeight = this.fillingMinWeight !== '1,5' ? this.fillingMinWeight : 1.5;
    },
    forceRender(){
      this.updateFillings += 1;
      // this.showFillings = false;
      // this.$nextTick(() => {
      //   this.showFillings = true;
      // })
    },
    scrollUp(){
      window.scrollTo({top: 230, behavior: 'smooth'});
    },
    increaseWeight(){
      if(this.fillingOrderWeight < 20){
        if(this.fillingOrderWeight == 1.5){
          this.fillingOrderWeight = 2;
        }else{
          this.fillingOrderWeight++;
        }
        
      }
    },
    decreaseWeight(){
      if(this.fillingMinWeight === '1,5' && this.fillingOrderWeight <= 2){
        this.fillingOrderWeight = 1.5
      }else if(this.fillingMinWeight === '1,5' && this.fillingOrderWeight > 1.5){
        this.fillingOrderWeight--;
      }else if(this.fillingOrderWeight > this.fillingMinWeight){
        this.fillingOrderWeight--;
      }
    },
    getUserData(userData){
      this.order_data.user_name = userData.name;
      this.order_data.user_phone = userData.phone;
      this.order_data.order_date = userData.date;
      this.formValidation = true;
      this.isActiveNextButton = true;
    },
    async makeOrder(){
      const order_data = {
        product_id: this.order_data.cake_decoration,
        filling_id: this.order_data.cake_filling,
        weight: this.order_data.cake_weight,
        total_price:  this.order_data.cake_price,
        date: this.order_data.order_date,
        customer_name: this.order_data.user_name,
        customer_phone: this.order_data.user_phone
      }
      try {
        const {data, status} = await this.$axios.post('api/order', order_data)
        if(status === 201){
          this.$toast.success('Замовлення прийнято!', {duration: 3000})
          return true
        }
        return false
      } catch (error) {
        console.log('er1: ', error)
        return false;
      }
    },
    resetValidation(){
      this.isActiveNextButton = false;
      this.formValidation = false;
    },
    locationCandybar(){
      this.$router.push('/candybar')
    }
  },
  props: {
    decorInfo: {
      type: Object,
      default: null
    }
  },
  mounted(){
    if(this.decorInfo){
      this.step = 3;
      this.decorItemName = this.decorInfo.productName;
      this.order_data.cake_decoration = this.decorInfo.productId;
      this.order_data.cake_type = this.decorInfo.productType;
      this.categoryId = this.decorInfo.categoryId;
      this.showFillings = true;
    }
  },
  computed: {
    getAmountName(){
      return this.order_data.cake_type === 2 ? 'шт' : 'кг';
    },
    calculatedPrice(){
      this.order_data.cake_price = this.fillingOrderWeight*(+this.fillingPricePerKg);
      this.order_data.cake_weight = this.fillingOrderWeight;
      return this.order_data.cake_price;
    },
    getAcknowledegeInfo(){
      return {
        type: this.productType[this.order_data.cake_type],
        decoration: this.decorItemName,
        filling: this.fillingItemName,
        weight: this.order_data.cake_weight,
        price: this.order_data.cake_price,
        customer_name: this.order_data.user_name,
        customer_phone: this.order_data.user_phone,
        order_date: this.order_data.order_date
      };
    }
  },
};
</script>

<style scoped>
/* order styles start */
.order__title {
  text-align: center;
}
.order__title-header {
  margin-bottom: 30px;
  font-family: Amatic SC;
  font-size: 80px;
  line-height: 100px;
  color: #4f4242;
}
.order__wrapper {
  margin: 110px 0 80px;
}
.order__title {
  margin-bottom: 50px;
}

.order__description {
  text-align: center;
  font-family: Caveat;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: #dd978f;
  margin-bottom: 100px;
}
.order__content {
  margin-bottom: 109px;
  transition: 0.4s;
}

/*1*/
.order__content-cards-first {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1028px;
  margin: 0 auto 101px;
  font-family: Kurale;
  font-size: 30px;
  line-height: 38px;
  color: #333333;
}

.order-cake {
  background: url(static/images/svg/order_3-cake.svg) no-repeat top center;
}
.order-cupcake {
  background: url(static/images/svg/order-cupcake.svg) no-repeat top center;
}
.order-candybar {
  background: url(static/images/svg/order-candybar.svg) no-repeat top center;
}
.order__content-card {
  display: block;
  padding-top: 110px;
  cursor: pointer;
  position: relative;
}
.order__content-filling {
  display: block;
  padding-top: 0;
  /*    cursor: pointer;*/
  position: relative;
  font-family: Kurale;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
  /* visibility: hidden; */
}
.order__content-card:hover {
  text-decoration-line: underline;
  text-decoration-color: #bdbdbd;
}
.order__content-card:active,
.order__content-card:focus,
.order__content-card-active {
  text-decoration-line: underline;
  color: #333333;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

/*2 */
.order__content-cards-second {
  display: flex;
  justify-content: space-around;
  max-width: 1028px;
  margin: 0 auto 101px;
  font-family: Kurale;
  font-size: 30px;
  line-height: 38px;
  color: #333333;
}
.card-second {
  padding-top: 0;
  position: relative;
}

.second-active::after {
  display: block;
  content: "Для уточнення деталей оформлення вашого замовлення ми з Вами зв’яжемось.";
  position: absolute;
  width: 280px;
  height: 72px;
  top: 40px;
  left: 0;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
}
/*2-2*/
.order__content-cards-second-filling {
  display: flex;
  justify-content: space-around;
  max-width: 1028px;
  margin: -50px auto 101px;
  font-family: Kurale;
  font-size: 30px;
  line-height: 38px;
  color: #333333;
  min-height: 24px;
}

/* 3 */
.order__content-cards-third {
  width: 816px;
  height: 200px;
  background: rgba(221, 151, 143, 0.1);
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.order__third-item {
  display: flex;
}
.order__third-value {
  display: flex;
  width: 80px;
  height: 40px;
  background: #ffffff;
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
}
.order__third-value-item,
.order__third-kg,
.order__third-title {
  display: block;
}
.order__third-title {
  font-size: 30px;
  line-height: 38px;
  color: #333333;
  margin-right: 40px;
}
.order__third-kg {
  font-size: 20px;
  line-height: 38px;
  color: #4f4f4f;
  margin-left: 20px;
}
.order-minus,
.order-plus {
  cursor: pointer;
}
/* 4*/
.order__content-cards-fourth {
  width: 800px;
  height: 200px;
  background: rgba(221, 151, 143, 0.1);
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.order__label {
  display: block;
  font-family: Kurale;
}
.order-name,
.order-number,
.order-date {
  border: none;
  font-family: Kurale;
  font-size: 16px;
}

.order__content-cards-sixth {
  width: 800px;
  background: rgba(221, 151, 143, 0.1);
  border-radius: 5px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
}
>>> .order__contnet-item {
  margin: 0 auto 30px;
  /*    padding-top: 20px;*/
  display: flex;
  justify-content: flex-start;
  width: 400px;
}
.order__contnet-item:last-child {
  margin-bottom: 0px;
}



.filling-pointer {
  cursor: pointer;
}
.forward-button {
  position: relative;
}
/*.show-error{
    display: block;
}*/
.error-container {
  /*display: none;*/
  content: "";
  position: absolute;
  bottom: -40px;
  right: 0;
  width: 180px;
  height: 30px;
  color: red;
  /*background: #fdf8ed;*/
  border-radius: 8px;
  text-align: start;
  font-size: 14px;
  line-height: 16px;
}
/* order styles end */



/*buttons order*/
.order__buttons {
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1028px;
  margin: 0 auto;
  cursor: pointer;
}
.order__button {
  display: block;
  width: 182px;
  height: 40px;
  margin: 0 20px;
  background: #bdbdbd;
  border-radius: 20px;
  text-align: center;
  font-family: Kurale;
  font-size: 20px;
  line-height: 38px;
  color: #ffffff;
}
.order__button.prev-button:hover {
  background: linear-gradient(180deg, #dd978f 0%, #fb7e70 100%);
  border-radius: 20px;
}
.order__button.prev-button:focus,
.order__button.prev-button:active {
  background: #dd7063;
}
.order__button-active{
   background: #dd7063;
}

.inactive-status {
  display: none;
}
.order__content {
  transition: .8s;
}
.flex-reverse{
  flex-direction: row-reverse;
}
.flex-center{
  justify-content: center;
}

/* Анимации появления и исчезновения могут иметь */
/* различные продолжительности и динамику.       */
.slide-fade-enter-active {
  transition: all 1.1s ease;
}

.slide-fade-enter
{
  /* position: absolute; */
  transform: translateX(-200px);
  opacity: 0;
}

@media screen and (max-width: 932px) {
  .order__title {
    margin-bottom: 50px;
  }
  .order__status {
    height: 220px;
    margin-bottom: 46px;
  }
  .order__description {
    margin: 0 20px 46px;
  }
  .order__status-item {
    margin-bottom: 12px;
  }
  .order__content-cards-third {
    width: 320px;
  }
  .order__content-cards-fourth {
    /* width: 710px; */
  }
  .order__content-cards-sixth {
    width: auto;
    margin: 0 20px;
  }
  .order__content-complete {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media screen and (max-width: 800px){
  .order__content-cards-fourth{
    width: auto;
    height: auto;
  }
}

@media screen and (max-width: 720px) {
  .order__content-cards-fourth {
    width: 300px;
  }
}
@media screen and (max-width: 600px) {
  .order__status {
    height: 280px;
  }
  .order__content-card {
    margin: 0 0 20px;
    padding-top: 70px;
  }
  .order__content-cards-first {
    margin-bottom: 30px;
  }
  .order__content {
    margin-bottom: 50px;
  }
  .second-active::after {
    font-size: 10px;
    line-height: 16px;
    width: 140px;
    top: 120px;
  }
  .order__content-card {
    font-size: 20px;
    line-height: 26px;
  }
  .order-cake {
    width: 91px;
    text-align: center;
  }
  .order__button{
    margin: 0 auto;
  }
}

@media screen and (max-width: 415px) {
  .order__status {
    height: 380px;
  }
  /* .order__content-cards-sixth {
    width: 300px;
  } */
  .order__contnet-item {
    display: block;
  }
  .order__content-complete {
    margin: 0 auto;
    max-width: 260px;
  }
  .order__button {
    width: 118px;
    height: 24px;
    font-size: 13px;
    line-height: 23px;
  }
  .order__content-cards-second{
    flex-direction: column;
  }
  .order__content-card{
    text-align: center;
  }
  .card-second{
    padding-top: 0;
  }
  .order__content-cards-second{
    margin-bottom: 0;
  }
  .order__third-title{
    font-size: 20px;
  }
}

</style>