<template>
  <!-- wellcome start -->
    <section class="wellcome">
      <div class="wellcome__title-wrapper">
        <h1 class="wellcome__title">Вітаємо тебе у майстерні</h1>
        <div class="wellcome__logo">
          <p class="wellcome__logo-text">tru</p>
          <img
            src="images/svg/cake-wellcome-icon.svg"
            alt="cake-logo"
            class="wellcome__logo-pic"
            width="46px"
            height="66px"
          />
          <p class="wellcome__logo-text">fel</p>
        </div>
      </div>
      <div class="wellcome__content-wrapper">
        <img
          src="images/wellcome-image.png"
          alt="di_cake"
          class="wellcome__foto"
        />
        <div class="wellcome__description-wrapper">
          <p class="wellcome__description">
            Привіт!<br /><br />

            На цій сторінці ми разом створимо ескіз твого тортика і втілимо
            твою солодку мрію<br class="wellcome__description-br" />
            в реальність.<br /><br />

            Candybar, капкейки, чізкейки, тортики на твій день народження, для
            малечі, весільний... <br class="wellcome__description-br" />і просто
            до чаю! <br /><br />

            Ти точно обереш свій ідеальний смак з нашого асортименту! Бо ми
            творимо любов!
          </p>
        </div>
      </div>
      <div class="wellcome__decoration-item1"></div>
      <div class="wellcome__decoration-item2"></div>
    </section>
    <!-- wellcome end -->
</template>

<script>
export default {
  
}
</script>

<style scoped>
/*wellcome styles start*/
.wellcome{
    height: 759px;
    position: relative;
}
.wellcome__title-wrapper{
    margin-top: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.wellcome__title{
    font-family: Caveat;
    font-size: 60px;
    line-height: 76px;
    color: #4F4242;
}
.wellcome__logo{
/*    align-self: flex-end;*/
    margin-left: 50%;
    display: flex;
/*    flex-wrap: wrap;*/
    align-items: flex-end;
    font-family: Marck Script;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 75px;
    color: #DD978F;
}
.wellcome__logo-pic{
    padding: 4px 2px 20px;
}
.wellcome__logo-text{
    cursor: default;
}
.wellcome__content-wrapper{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.wellcome__foto{
    z-index: 6;
}
.wellcome__description-wrapper{
    max-width: 636px;
    margin: 50px 20px 0;
}
.wellcome__description{
    
    font-family: Bad Script;
    font-size: 18px;
    line-height: 27px;
    color: #333333;
}
.wellcome__decoration-item1::before{
    display: block;
    content: '';
    position: absolute;
    background: url(static/images/svg/wellcome-cake-icon.svg) no-repeat 95% center;
    z-index: 5;
    top: 70px;
    left: 2vw;
    width: 99.42px;
    height: 134.88px;
    transform: rotate(0deg);
}
.wellcome__decoration-item1::after{
    display: block;
    content: '';
    position: absolute;
    background: url(static/images/svg/wellcome-cake-icon.svg) no-repeat 95% center;
    z-index: 5;
    top: 250px;
    left: 28vw;
    width: 130.91px;
    height: 177.6px;
    transform: rotate(45deg);
}
.wellcome__decoration-item2::before{
    display: block;
    content: '';
    position: absolute;
    background: url(static/images/svg/wellcome-cake-icon.svg) no-repeat 95% center;
    z-index: 5;
    top: -150px;
    right: 10vw;
    width: 100px;
    height: 135px;
    transform: rotate(-115deg);
}
.wellcome__decoration-item2::after{
    display: block;
    content: '';
    position: absolute;
    background: url(static/images/svg/wellcome-cake-icon.svg) no-repeat 95% center;
    z-index: 5;
    top: 450px;
    right: -10px;
    width: 100px;
    height: 135px;
    transform: rotate(0deg) scale(1.8);
/*    overflow: hidden;*/
}
@media screen and (max-width: 1060px){
  .wellcome__content-wrapper{
    flex-direction: column;
  }
  .wellcome__foto{
        width: 40%;
        height: 40%;
    }
    .wellcome{
        height: auto;
    }
    .wellcome__description-wrapper{
        margin-bottom: 70px; 
    }
    .wellcome__decoration-item1::after{
        display: none;
    }
}

@media screen and (max-width: 600px){
  .wellcome__title{
        margin-left: 30px;
    }
    .wellcome__logo{
        margin: 0;
    }
    .wellcome__description-br{
        display: none;
    }
    .wellcome__title{
        font-size: 30px;
        line-height: 38px;
        margin-left: auto;
        margin-right: auto;
    }
    .wellcome__logo-text{
        font-size: 30px;
        line-height: 37px;
    }
    .wellcome__logo-pic{
        width: 30px;
        padding-bottom: 12px;
    }
    .wellcome__logo{
        margin: 10px 20px 40px auto;
        margin-left: auto;
        margin-right: 20px;
        margin-bottom: 40px;
    }
    .wellcome__title-wrapper{
        margin-top: 50px;
    }
}
/*wellcome styles end*/
</style>