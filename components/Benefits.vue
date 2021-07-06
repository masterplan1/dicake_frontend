<template>
  <!-- benefits start-->
    <section class="benefits">
      <div class="benefits__wrap">
        <div class="benefits__title-wrapper">
          <h2 class="benefits__title">НАШІ ПЕРЕВАГИ</h2>
        </div>
        <div class="benefits__cards">
          <div class="benefits__card lg-items benefits__card-margin">
            <h2 class="benefits__card-title hand-item">Ручна робота</h2>
            <p class="benefits__desc">Наші тортики виключно ручної роботи.</p>
          </div>
          <div class="benefits__card lg-items">
            <h2 class="benefits__card-title cake-item">Оригінальність</h2>
            <p class="benefits__desc">
              Приймаємо будь-які побажання і створюємо витвір мистецтва.
            </p>
          </div>
          <div class="benefits__card lg-items benefits__card-margin">
            <h2 class="benefits__card-title leaf-item">
              Натуральні інградієнти
            </h2>
            <p class="benefits__desc">
              Ми слідкуємо за якістю продуктів і використовуємо тільки
              натуральні інградієнти.
            </p>
          </div>
          <div class="benefits__card sm-items">
            <h2 class="benefits__card-title pig-item">Оплата</h2>
            <p class="benefits__desc">
              2 можливих варіанти оплати: картою або готівкою.
            </p>
          </div>
          <div class="benefits__card sm-items benefits__card-margin">
            <h2 class="benefits__card-title box-item">Доставка</h2>
            <p class="benefits__desc">
              Безкоштовна доставка Обухів/Українка від 1000 грн.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!--benefits end-->
</template>

<script>
export default {
  
}
</script>

<style scoped>
/*benefits styles start*/

.benefits{
    height: 750px;
    background: url(static/images/benefits-image.jpg) no-repeat center;
    background-size: cover;
/*    position: relative;*/
}
.benefits__wrap{
    max-width: 1240px;
    margin: 0 auto;
}
.benefits__title{
    padding-top: 100px;   
}
.benefits__title-wrapper{
    text-align: center;
}
.benefits__title{
    font-family: Amatic SC;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 100px;
    color: #4F4242;
    margin-bottom: 106px;
}
.benefits__cards{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 102px;
    justify-content: flex-end;
    padding: 0 10px;
}
.benefits__card-title{
    background-size: 40px;
    width: 350px;
    height: 44px;
    padding-left: 52px;
    padding-top: 8px;
    margin-bottom: 20px;
    
    font-family: Caveat;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 44px;
    color: #7D0A41;
}
.lg-items{
    grid-column: span 2;
    margin: 0 auto;
}
.sm-items{
    grid-column: span 3;
    margin: 0 auto;
}

.hand-item{
    background: url(static/images/svg/benefits__hand-icon.svg) no-repeat left center;
}
.cake-item{
    background: url(static/images/svg/benefits__cake-icon.svg) no-repeat left center;
}
.leaf-item{
    background: url(static/images/svg/benefits__leafs-icon.svg) no-repeat left center;
}
.pig-item{
    background: url(static/images/svg/benefits__pig-icon.svg) no-repeat left center;
}
.box-item{
    background: url(static/images/svg/benefits__box-icon.svg) no-repeat left center;
}
.benefits__desc{
    width: 288px;
    height: 42px;
    font-size: 18px;
    line-height: 21px;
    color: #333333;
}

@media screen and (max-width: 1060px){
  .benefits__card-margin{
        margin-left: 50px;
    }
    .benefits__cards{
        grid-row-gap: 20px;
    }

    .benefits{
        height: auto;
    }
    .benefits__title{
        padding-top: 50px;
        margin-bottom: 40px;
    }
    .benefits__cards{
        padding-bottom: 40px;
    }
    .lg-items, .sm-items{
        grid-column: span 6;
        margin-right: 0;
    }
}

@media screen and (max-width: 600px){
  .benefits__title{
    font-size: 45px;
    line-height: 100px;
  }
  .benefits__card {
    margin: 0 auto;
    grid-column: span 6;
}
}
@media screen and (max-width: 415px){
  .benefits__card-title{
    width: 300px;
    font-size: 25px;
    line-height: 34px;
    margin-bottom: 10px;
  }
    .benefits__desc{
    width: 288px;
    height: 42px;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 14px;
  }
}
/*benefits styles end*/
</style>
