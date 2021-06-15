<template>
  <div class="products__title">
      <h1 class="products__title-header">
          CANDYBAR
      </h1>
      <div class="products__decoration-candybar-item1"></div>
      <div class="products__decoration-candybar-item2"></div>
      <div class="products__decoration-candybar-item3"></div>
      <div class="products__decoration-candybar-item4"></div>
  </div>
</template>

<style scoped>
  /*candybar decoration images*/

.products__decoration-candybar-item1::before{
    display: block;
    content: '';
    position: absolute;
    background: url(static/images/svg/wellcome-cake-icon.svg) no-repeat;
    z-index: 5;
    top: -40px;
    left: -3vw;
    width: 140px;
    height: 150px;
    transform: rotate(45deg) scale(0.5);
}
.products__decoration-candybar-item1::after{
    display: block;
    content: '';
    position: absolute;
    background: url(static/images/svg/wellcome-cake-icon.svg) no-repeat;
    z-index: 5;
    top: -30px;
    right: 10vw;
    width: 140px;
    height: 150px;
    transform: matrix(-0.87, 0.5, 0.5, 0.87, 0, 0) scale(0.5) rotate(40deg);
}
.products__decoration-candybar-item2::before{
    display: block;
    content: '';
    position: absolute;
    background: url(static/images/svg/products-cupcakes-header-icon.svg) no-repeat;
    z-index: 5;
    top: 26px;
    left: 10vw;
    width: 140px;
    height: 150px;
    transform: matrix(-0.94, -0.33, -0.33, 0.94, 0, 0) rotate(60deg) scale(0.3);
}
.products__decoration-candybar-item2::after{
    display: block;
    content: '';
    position: absolute;
    background: url(static/images/svg/products-cupcakes-header-icon.svg) no-repeat;
    z-index: 5;
    top: 40px;
    right: 20vw;
    width: 140px;
    height: 150px;
    transform: scale(0.4);
}
.products__decoration-candybar-item3::before{
    display: block;
    content: '';
    position: absolute;
    background: url(static/images/svg/products-candybar-header-icon.svg) no-repeat;
    z-index: 5;
    top: -80px;
    left: 20vw;
    width: 140px;
    height: 150px;
    transform: rotate(-21.34deg) scale(0.6);
}
.products__decoration-candybar-item3::after{
    display: block;
    content: '';
    position: absolute;
    background: url(static/images/svg/products-candybar-header-icon.svg) no-repeat;
    z-index: 5;
    top: -65px;
    right: 35vw;
    width: 140px;
    height: 150px;
    transform: matrix(-0.71, 0.7, 0.7, 0.71, 0, 0) rotate(-60deg) scale(0.6);
}
.products__decoration-candybar-item4::before{
    display: block;
    content: '';
    position: absolute;
    background: url(static/images/svg/products-candybar2-header-icon.svg) no-repeat;
    z-index: 5;
    top: 40px;
    left: 30vw;
    width: 140px;
    height: 150px;
    transform: rotate(-21.34deg) scale(0.6);
}
.products__decoration-candybar-item4::after{
    display: block;
    content: '';
    position: absolute;
    background: url(static/images/svg/products-candybar2-header-icon.svg) no-repeat;
    z-index: 5;
    top: 10px;
    right: 0;
    width: 140px;
    height: 150px;
    transform: matrix(-0.71, 0.7, 0.7, 0.71, 0, 0) rotate(-45deg) scale(0.6);
}
</style>