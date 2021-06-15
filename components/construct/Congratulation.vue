<template>
  <div class="candybar__congratulation">
    <p class="candybar__congratulation-desc">
      <span class="candybar__congratulation-span">Вітаємо!</span><br />
      Ваше замовлення прийняте. В найближчий час ми з Вами <br />зв’яжемось для
      уточнення замовлення.
    </p>
    <img
      src="images/candybar_order-icecream.png"
      alt="Вітаємо"
      class="candybar__congratulation-image"
    />
  </div>
</template>

<style scoped>
.candybar__congratulation {
    margin: 60px auto;
    max-width: 605px;
}
.candybar__congratulation-desc {
    font-family: Caveat;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    color: #DD978F;
    margin-bottom: 50px;
}
.candybar__congratulation-span {
    color: #881a0d;
}
.candybar__congratulation-image {
    display: block;
    margin: 0 auto;
}

@media screen and (max-width: 600px){
  .candybar__congratulation-desc{
    padding: 0 20px;
  }
}
</style>