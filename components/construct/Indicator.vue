<template>
  <div class="order__status">
    <div class="order__status-item first" :class="[step === 1 ? 'first-active' : '']">
      <div class="order__status-number" :class="[step === 1 ? 'order__status-number-active' : '']">1</div>
    </div>
    <div class="order__status-item second" :class="[step === 2 ? 'second_active' : '']">
      <div class="order__status-number" :class="[step === 2 ? 'order__status-number-active' : '']">2</div>
    </div>
    <div class="order__status-item third" :class="[step === 3 ? 'third-active' : '']">
      <div class="order__status-number" :class="[step === 3 ? 'order__status-number-active' : '']">3</div>
    </div>
    <div class="order__status-item forth" :class="[step === 4 ? 'forth-active' : '']">
      <div class="order__status-number" :class="[step === 4 ? 'order__status-number-active' : '']">4</div>
    </div>
    <div class="order__status-item fifth" :class="[step === 5 ? 'fifth-active' : '']">
      <div class="order__status-number" :class="[step === 5 ? 'order__status-number-active' : '']">5</div>
    </div>
    <div class="order__status-item sixth" :class="[step === 6 ? 'sixth-active' : '']">
      <div class="order__status-number" :class="[step === 6 ? 'order__status-number-active' : '']">6</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default(){
        return 1;
      }
    }
  }
}
</script>

<style scoped>
.order__status{
    display: flex;
    flex-wrap: wrap;
    height: 190px;
    margin-bottom: 56px;
}
.order__status-number{
    background: #7D0A41;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    text-align: center;
    
}
.order__status-item{
    display: flex;
    align-items: center;
    padding-right: 74px;
    margin-right: 10px;
    margin-bottom: 24px;
}
.order__status-item::before{
    content: '';
    width: 6vw;
    height: 1px;
    background: #7D0A41;
    display: block;
}
/*.order__status-item:last-child{
    padding-right: 64px;
}*/
.first{
    background: url(static/images/svg/order_1-cake.svg) no-repeat center right;
}
.second{
    background: url(static/images/svg/order_2-cake.svg) no-repeat center right;
}
.third{
    background: url(static/images/svg/order_3-cake.svg) no-repeat center right;
}
.forth{
    background: url(static/images/svg/order_4-cake.svg) no-repeat center right;
}
.fifth{
    background: url(static/images/svg/order_5-cake.svg) no-repeat center right;
}
.sixth{
    background: url(static/images/svg/order_6-cake.svg) no-repeat center right;
}
/*.seventh{
    background: url(.images/svg/order_7-cake.svg) no-repeat center right;
}*/
.first-active{
    background: url(static/images/svg/order-active_1-cake.svg) no-repeat center right;  
}
.second_active{
    background: url(static/images/svg/order-active_2-cake.svg) no-repeat center right;  
}
.third-active{
    background: url(static/images/svg/order-active_3-cake.svg) no-repeat center right;  
}
.forth-active{
    background: url(static/images/svg/order-active_4-cake.svg) no-repeat center right;  
}
.fifth-active{
    background: url(static/images/svg/order-active_5-cake.svg) no-repeat center right;  
}
.sixth-active{
    background: url(static/images/svg/order-active_6-cake.svg) no-repeat center right;  
}
/*.seventh-active{
    background: url(.images/svg/order-active_7-cake.svg) no-repeat center right;  
}*/
.order__status-number-active{
    background: #DD978F;
}

@media screen and (max-width: 600px) {
  .order__status-item{
    margin-bottom: 0;
  }
}
</style>