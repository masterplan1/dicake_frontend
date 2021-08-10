<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__burger" @click="showBurger">
        <span class="header__burger-line burger_line_first"></span>
        <span class="header__burger-line burger_line_second"></span>
        <span class="header__burger-line burger_line_third"></span>
      </div>
      <div class="header__logo item-logo">
        <p class="header__logo-text item-logo-text">tru</p>
        <img
          src="~/static/images/svg/cake-logo.svg"
          alt="cake-logo"
          class="header__logo-pic item-logo-pic"
          width="46px"
          height="60px"
        />
        <p class="header__logo-text item-logo-text">fel</p>
      </div>
      <nav class="header__nav" :class="{'header__nav-active': showBurgerMenu}">
        <ul class="header__list">
          <li class="header__item header-main-item" @click="closeBurger">
            <nuxt-link to="/" class="header__link">Головна</nuxt-link>
          </li>
          <li class="header__item sub-menu header-catalog-item" @mouseover="showMenu" @mouseleave="hideMenu()">
            <a href="#!" @click.prevent="toggleGalleryMenu" class="header__link catalog-menu">Галерея</a>
            <ul class="header__sub-menu" :class="{'sub-menu-active': showGalleryMenu}">
              <li class="header__sub-item" >
                <nuxt-link to="/products/1" class="header__link catalog-menu"><span @click="hideMenu($event, true)">Торти</span></nuxt-link>
              </li>
              <li class="header__sub-item">
                <nuxt-link to="/products/2" class="header__link catalog-menu"><span @click="hideMenu($event, true)">Капкейки</span></nuxt-link>
              </li>
              <li class="header__sub-item">
                <nuxt-link to="/candybar" class="header__link catalog-menu"><span @click="hideMenu($event, true)">Candybar</span></nuxt-link>
              </li>
              <li class="header__sub-item">
                <nuxt-link to="/products/4" class="header__link catalog-menu"><span @click="hideMenu($event, true)">Дієтичні десерти</span></nuxt-link>
              </li>
              <li class="header__sub-item">
                <nuxt-link to="/products/5" class="header__link catalog-menu"><span @click="hideMenu($event, true)">Подарункові набори</span></nuxt-link>
              </li>
            </ul>
          </li>
          <li class="header__item header-filling-item" @click="closeBurger">
            <nuxt-link to="/fillings" class="header__link">Начинки</nuxt-link>
          </li>
          <li class="header__item header-order-item" @click="closeBurger">
            <nuxt-link to="/constructor" class="header__link">Створити замовлення</nuxt-link>
          </li>
          <li class="header__item header-contact-item" @click="closeBurger">
            <nuxt-link to="/contacts" class="header__link">Контакти</nuxt-link>
          </li>
          <li class="header__item header-recall-item" @click="closeBurger">
            <nuxt-link to="/comment" class="header__link">Відгуки</nuxt-link>
          </li>
        </ul>
        <div class="header__nav-close" @click="closeBurger">
          <span class="header__nav-close-line"></span>
          <span class="header__nav-close-line"></span>
        </div>
      </nav>
      <nuxt-link to="/cart">
        <div class="header__cart-wrapper">
          <client-only>
            <p class="header__cart-count"
              v-if="cart.length"
            >{{cart.length}}</p>
          </client-only>
          <img src="~/static/images/svg/cart-icon.svg" alt="cart" class="header__cart">
        </div>
      </nuxt-link>
      <div class="header__instagram">
        <img
          src="~/static/images/svg/instagram-logo.svg"
          alt="instagram-logo"
          class="header__instagram-logo"
        />
        <a href="https://www.instagram.com/tru._.fel/" class="header__instagram-link">tru._.fel</a>
      </div>
      <a href="#" id="up" class="header__scroll-up" @click.prevent="scrollUp">
        <span class="header__scroll-pic pic1"></span>
        <span class="header__scroll-pic pic2"></span>
      </a>
    </div>
  </header>
</template>

<script>
import {mapState} from 'vuex';
import smoothscroll from 'smoothscroll-polyfill';
export default {
  data(){
    return {
      subMenu: null,
      showBurgerMenu: false,
      showGalleryMenu: false,
      innerWidth: null
      // subMenuShow: true
    }
  },
  methods: {
    showMenu(){
      if(window.innerWidth > 964){
        this.subMenu.classList.add('sub_menu_active');
      }
      
    },
    showBurger(){
      this.showBurgerMenu = true;
    },
    hideMenu($event, isClick = false){
      if(window.innerWidth > 964){
            this.subMenu.classList.remove('sub_menu_active');
      }else{
        if(isClick){
          this.closeBurger();
        }
      }
    },
    closeBurger(){
      this.showBurgerMenu = false;
    },
    toggleGalleryMenu(){
      if(window.innerWidth < 964){
        this.showGalleryMenu = !this.showGalleryMenu;
      }
    },
    scrollUp(){
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  },
  mounted(){
    smoothscroll.polyfill(); // polyfill for safari scrolling smooth
    
    this.subMenu = document.querySelector('.header__sub-menu');
    this.innerWidth = window.innerWidth;

    const scrollUpButton = document.querySelector('.header__scroll-up');
    window.onscroll = () => {
      if(window.pageYOffset > 500){
        scrollUpButton.classList.add('header__scroll-up-active');
      }else{
        scrollUpButton.classList.remove('header__scroll-up-active');
      }
    }
  },
  computed: {
    ...mapState('cart', {
      cart: state => state.cart,
    }),
    translateNull(){
      if(this.innerWidth < 964){
        return this.showBurgerMenu ? 'translateX(0)' : 'translateX(100%)'
      }
    }
  }
};
</script>

<style scoped>
/*header styles start*/
.header {
  width: 100%;
  background: #f2ede0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
.header__wrapper {
  padding: 0 10px;
  max-width: 1309px;
  /*    max-width: 91vw;*/
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-logo {
  display: flex;
  /*    flex-wrap: wrap;*/
  align-items: flex-end;
  font-family: Marck Script;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 37px;
}
.item-logo-pic {
  padding: 4px 2px 14px;
}
.item-logo-text {
  padding-bottom: 5px;
  cursor: default;
}
.header__list {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
/*asd1*/
.header__item {
  margin-right: 60px;
}
.header-contact-item {
  /* display: none; */
}
.header__item:last-child {
  margin-right: 0;
}
.header__link,
.header__instagram-link {
  text-decoration: none;
  font-size: 20px;
  line-height: 23px;
  color: #4f4242;
}
.header__link:hover,
.header__instagram-link:hover {
  opacity: 0.75;
}
.header__link:active,
.header__link:focus,
.header__instagram-link:active,
.header__instagram-link:focus {
  outline: 0;
  /*    text-decoration: underline;*/
}
.header__sub-menu {
  position: absolute;
  max-width: 181px;
  background: #f2ede0;
  border-radius: 0px 0px 5px 5px;
  padding-left: 31px;

  padding-top: 20px;
  left: 14%;
  /*    top: 170%;*/
  top: 80%;
  opacity: 0;
  display: none;
  visibility: hidden;
  transition: 0.3s;
}
.sub_menu_active {
  visibility: visible;
  opacity: 1;
  display: block;
}
/**/
/* .sub-menu:hover > ul,
.sub-menu:focus-within > ul,
.header__sub-menu:hover {
  opacity: 1;
  display: block;
  visibility: visible;
} */

/**/
/*
.active-menu{
    opacity: 1;
}
*/
.header__sub-item {
  margin-bottom: 15px;
  transition: 0.2s;
}
.header__sub-item:first-child {
  margin-top: 15px;
}
.header__sub-item:hover,
.header__sub-item:active,
.header__sub-item:focus {
  opacity: 0.7;
}
.header__sub-link {
  text-decoration: none;
  color: #4f4242;
}
.header__instagram {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
}
.instagram-logo {
  display: inline-block;
}
.header__burger {
  width: 40px;
  height: 28px;
  position: relative;
  display: none;
}
.header__burger-line {
  display: block;
  width: 100%;
  height: 4px;
  background-color: #333;
  position: absolute;
}
.burger_line_first {
  top: 0;
}
.burger_line_second {
  top: 50%;
  transform: translateY(-50%);
}
.burger_line_third {
  bottom: 0;
}
.header__scroll-up {
  width: 55px;
  height: 55px;
  background: #c4c4c4;
  border-radius: 27.5px;
  position: fixed;
  bottom: 30px;
  right: 20px;
  display: none;
}
.header__scroll-up-active {
  display: block;
}
.header__scroll-pic {
  display: block;
  position: absolute;
  width: 36%;
  height: 2px;
  background: #fff;
  top: 48%;
  transform: translateX(-50%);
}
.pic1 {
  left: 20%;
  transform: rotate(-45deg);
}
.pic2 {
  right: 20%;
  transform: rotate(45deg);
}

/*cart count*/
.header__cart-count{
    /* display: none; */
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: #F4521F;
    border: 1px solid #4F4242;
    font-family: Kurale;
    font-size: 10px;
    line-height: 20px;
    color: #FFFFFF;
    text-align: center;
    padding-bottom: 14px;
}
.header__cart-wrapper{
    position: relative;
    cursor: pointer;
}
/*header styles end*/

/* media start */
@media screen and (max-width: 1240px) {
  .header__item {
    margin-right: 40px;
  }
}
@media screen and (max-width: 1132px){
    .header__item{
        margin-right: 24px;
    }
}
@media screen and (max-width: 1050px) {
  .header__item {
    margin-right: 8px;
  }
}
@media screen and (max-width: 964px){
  .header__nav-active{
        transform: translateX(0);
    }
    .header__cart{
        margin-right: 20px;
    }
    .products__wrapper{
        margin-right: 100px;
        margin-left: 100px;
    }
    .header__burger{
        display: block;
        margin: auto auto auto 20px;
    }
    .header__instagram{
       display: none;
    }
  
    .header__logo{
        margin: 0 auto;
        flex-basis: 80%;
        justify-content: center;
        /* width: 80%; */
    }
/*    sub-menu media styles start*/
    
    .sub-menu:hover > ul,
    .sub-menu:focus-within > ul,
    .header__sub-menu:hover{
        opacity: 1;
        display: block;
        visibility: visible;
    }
    .header__sub-item:first-child{
        margin-top: 0;
        padding-top: 20px;
        
    }
    .header__sub-item:last-child{
        margin-bottom: 0;
    }
    .header__sub-menu{
        position: static;
        background-color: #333;
        opacity: 1;
        display: block;
        visibility: visible;  
        max-height: 0;
        transition: max-height 0.7s;
        padding-top: 0;
    }
    .sub-menu-active{
        max-height: 20rem;
    }
/*    sub-menu media styles end*/
    
    .header__nav{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #333;
        z-index: 10;
        padding: 65px;
        transform: translateX(100%);
        transition: 0.3s;
        overflow: scroll;
    }
    .header__nav-active{
        transform: translateX(0);
    }
    .header__item{
        width: 100%;
        margin-right: 0;
        margin-bottom: 10px;
        overflow: hidden;
        display: block;
        padding-left: 50px;
    }
    .header__item:last-child{
       margin-bottom: 0;    
    }
    .header__link{
        font-size: 25px;
        line-height: 29px;
        font-family: Alice;
        color: #ffffff;
/*        z-index: 10;*/
    }
    .header__link:hover{
        color: #BDBDBD;
    }
    .header__sub-link{
         font-size: 20px;
        line-height: 25px;
        font-family: Alice;
        color: #ffffff;       
    }
    .header__link:active{
        text-decoration: none;
    }
    .header__nav-close{
        width: 40px;
        height: 40px;
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 10;
    }
    .header__nav-close-line{
        display: block;
        width: 100%;
        height: 4px;
        position: absolute;
        top: 50%;
        background-color: #fff;
    }
    .header__nav-close-line:first-child{
        transform: translateY(-50%) rotate(45deg);
    }
    .header__nav-close-line:last-child{
        transform: translateY(-50%) rotate(-45deg);
    }
    /* pics-item */
    .header-main-item{
      background: url('static/images/svg/main-header-icon.svg') no-repeat left center;
    }
    .header-catalog-item{
      background: url('static/images/svg/catalog-header-icon.svg') no-repeat left top;
    }
    .header-filling-item{
      background: url('static/images/svg/filling-header-icon.svg') no-repeat left center;
    }
    .header-order-item{
      background: url('static/images/svg/order-header-icon.svg') no-repeat left center;
    }
    .header-contact-item{
      background: url('static/images/svg/contact-header-icon.svg') no-repeat left center;
    }
    .header-recall-item{
      background: url('static/images/svg/recall-header-icon.svg') no-repeat left center;
    }
}

@media screen and (max-width: 380px){
  .header__link{
    font-size: 18px;
    line-height: 20px;
  }
}
</style>