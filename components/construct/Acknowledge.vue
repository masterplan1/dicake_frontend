<template>
  <div class="order__content-cards-sixth" >
    <p class="candybar__congratulation-desc order__modify">
                    Вартість декору виробу обговорюється індивідуально<br>в телефонному режимі.
                </p>
    <div class="order__contnet-item">
      <span class="order__content-complete order-name">Категорія:</span>
      <span class="order__content-complete order-value">{{orderDataForAcknowledge.type}}</span>
    </div>

    <div class="order__contnet-item">
      <span class="order__content-complete order-name"
        >Оформлення:</span
      >
      <span class="order__content-complete order-value">{{orderDataForAcknowledge.decoration}}</span>
    </div>
    <div class="order__contnet-item">
      <span class="order__content-complete order-name">Начинка:</span>
      <span class="order__content-complete order-value"
        >{{orderDataForAcknowledge.filling}}</span
      >
    </div>
    <div class="order__contnet-item">
      <span class="order__content-complete order-name">Вага:</span>
      <span class="order__content-complete order-value">{{orderDataForAcknowledge.weight}} {{getAmountName()}}.</span>
    </div>
    <div class="order__contnet-item">
      <span class="order__content-complete order-name">Вартість:</span>
      <span class="order__content-complete order-value">{{orderDataForAcknowledge.price}} грн.</span>
    </div>
    <div class="order__contnet-item">
      <span class="order__content-complete order-name"
        >Інформація <br />
        замовника:</span
      >
      <span class="order__content-complete order-value"
        >{{orderDataForAcknowledge.customer_name}}, {{orderDataForAcknowledge.customer_phone}}</span
      >
    </div>
    <div class="order__contnet-item">
      <span class="order__content-complete order-name"
        >Дата видачі:</span
      >
      <span class="order__content-complete order-value">{{orderDataForAcknowledge.order_date}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderDataForAcknowledge: {
      required: true,
      type: Object
    }
  },
  methods: {
    getAmountName(){
      return this.orderDataForAcknowledge.type === "Капкейки" ? 'шт' : 'кг';
    }
  },
}
</script>

<style scoped>
.order__content-complete {
  display: block;
  max-width: 250px;
  text-align: right;
}
.order-name {
  font-size: 16px;
  /*text-decoration: underline;*/
  margin: 0;
}
.order-value {
  margin: 0 0 0 auto;
}
.candybar__congratulation-desc {
    font-family: Caveat;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    color: #DD978F;
    margin-bottom: 50px;
}
.order__modify {
    padding: 0 10px;
}
@media screen and (max-width: 480px){
  .order__contnet-item{
    width: auto;
    flex-direction: column;
  }
  .order__content-complete{
    width: 100%;
    text-align: center;
    max-width: none;
  }
}
</style>