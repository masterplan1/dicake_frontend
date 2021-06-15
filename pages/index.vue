<template>
  <main class="main">
    <!-- intro start -->
    <section class="intro">
      <div class="intro__wrapper">
        <h1 class="intro__title">
          тортики, які створені <br />
          з любов’ю
        </h1>
        <p class="intro__description">
          Скуштувавши це, ви залишитеся &nbsp; з нами назавжди!
        </p>
        <!-- <a href="#!" class="intro__link">Замовити</a> -->
      </div>
      <div class="intro__phone-wrapper">
        <img src="images/svg/telegram-icon.svg" alt="telegram" class="intro__telegram-icon phone" />
        <img  src="images/svg/viber-icon.svg" alt="viber" class="intro__viber-icon phone"/>
        <div class="phone-wrapper">
          <span class="intro__phone-number phone"> +38 (093) 497-86-46</span>
          <span class="intro__phone-number phone"> +38 (068) 566-77-87</span>
        </div>
      </div>
      <a href="#!" class="intro__button">
        <img
          src="images/svg/arrow-down-icon.svg"
          alt="down-button"
          class="intro__button-pic"
          @click="pageDown"
        />
      </a>
    </section>
    <!-- intro end -->

    <Wellcome />

    <div class="border"></div>
    <Benefits />
  </main>
</template>

<script>
export default {
  data(){
    return{
      title: 'Торти на замовлення, капкейки та інші солодощі в Обухові, Українці, Києві - Трюфель',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Кондитерська Трюфель",
        "alternateName": "Виготовлення тортів на замовлення в Обухові - Трюфель",
        "description": "Торти, капкейки кендібар та інші солодощі на замовлення в Обухові - Трюфель",
        "url": process.env.BASE_URL,
        "telephone": "093-49786-46",
        "sameAs": ["https://www.instagram.com/tru._.fel"]
      }
    }
  },
  head() {     // 19:45
    return {
      __dangerouslyDisableSanitizers: ["scripts"],
      script: [
        {
          innerHTML: JSON.stringify(this.structuredData),
          type: "application/ld+json",
          body: true
        }
      ],
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Виготовлення тортиків, капкейків, кендібарів та інших солодощів на замовлення в Обухові, Українці, та Києві, торти Обухів'
        }
      ]
    }
  },
  methods: {
    pageDown(){
      window.scrollTo({top: 570, behavior: 'smooth'})
    }
  }
  // mounted(){
  //   this.$store.dispatch('cart/REMOVE_ITEMS_FROM_CART');
  // }
};
</script>

<style>
/*intro styles start*/
.intro{
    height: 100vh;
    background: url(static/images/logo-image.jpg) no-repeat center;
    background-size: cover;
    position: relative;
    z-index: 6;
}
.intro::after{
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(89.88deg, #FFFFFF 0.07%, rgba(196, 196, 196, 0) 82.74%);
    transform: rotate(-180deg);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
}
.intro__wrapper{
    position: absolute;
    top: 23.3vh;
    right: 100px;
    width: 58.78vh;
    z-index: 3;
}
.intro__title{
    font-family: Amatic SC;
    font-style: normal;
    font-weight: normal;
    font-size: 8.9vh;
    line-height: 11.1vh;
    color: #4F4242;
    margin-bottom: 5.6vh;
    background: url(static/images/svg/heart-icon.svg) no-repeat 63% 87%;
    background-size: 30% 30%;
}

.intro__description{
    font-family: Caveat;
    font-style: normal;
    font-weight: normal;
    font-size: 5vh;
    line-height: 6.3vh;
    color: #9F5C54;
    margin-bottom: 11.1vh;
}
.intro__button{
    display: none;
}
.intro__link{
    display: block;
    margin: 0 auto;
    width: 212px;
    height: 5.6vh;
    background: #DD978F;
    border-radius: 25px;
    text-align: center;
    padding-top: 0.67vh;
    
    font-size: 3.3vh;
    line-height: 3.78vh;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    text-decoration: none;
}
.intro__phone-wrapper{
    display: flex;
    position: absolute;
    left: 103px;
    bottom: 2.22vh;
    z-index: 3;
}
.intro__phone-number{
    font-size: 2.22vh;
    line-height: 2.56vh;
    color: #fff;
}
.phone{
    display: inline-block;
    margin-right: 19px;
}
.phone:last-child{
    margin-right: 0;
}
.intro__phone-number{
    cursor: default;
}
.phone-wrapper{
  padding-top: 2px;
  display: flex;
  flex-direction: column;
}
/*intro styles end*/



/*border styles start*/
.border{
    width: 100%;
    height: 8px;
    background: #DD978F;    
}

.intro__button-pic{
  cursor: pointer;
}
/*border styles end*/

/* media start */

@media screen and (max-width: 1060px){
  .intro__phone-wrapper{
      left: 50%;
      transform: translateX(-50%);
  }
}

@media screen and (max-width: 1060px){
  .intro__title{
    line-height: 7.1vh;
    font-size: 6.1vh;
    text-align: center;
    background-position: 50% 100%;
    padding-bottom: 80px;
  }
}
@media screen and (max-width: 800px){
.intro{
      display: flex;
      
  }
  .intro__wrapper{
      position: static;
      margin-top: 140px;
      margin-left: auto;
      margin-right: auto;
      max-width: 90%;
      box-sizing: content-box;
  }
  
  .intro__phone-wrapper{
      display: none;
  }
  .intro__button{
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 41px;
      width: 18px;
      height: 9px;
      content: '';
      z-index: 10;
  }
  .intro__description{
    text-align: center;
  }
}
@media screen and (max-width: 500px){
  .intro__title{
        font-weight: bold;
        font-size: 45px;
        line-height: 68px;
        color: #4F4242;
        /* background: url(static/images/svg/heart-icon.svg) no-repeat 78% 87%;
        background-size: 30% 30%; */
    }
    .intro::after{
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.6);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }
    .intro__description{
        color: #7D0A41;
        
    }
}

</style>
