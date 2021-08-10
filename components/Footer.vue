<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__logo item-logo">
        <p class="footer__logo-text item-logo-text">tru</p>
        <img
          src="~/static/images/svg/cake-logo.svg"
          alt="cake-logo"
          class="footer__logo-pic item-logo-pic"
          width="42px"
          height="42px"
        />
        <p class="footer__logo-text item-logo-text">fel</p>
      </div>
      <div class="footer__content">
        <p class="footer__contact">Контакти:</p>
        <a href="tel:0934978646" class="footer__phone-number">+380934978646</a>
        <a href="tel:0634394868" class="footer__phone-number">+380634394868</a>
        <div class="footer__contact-pics">
          <a href="https://www.instagram.com/tru._.fel/">
            <img
              src="~/static/images/svg/instagram-footer-icon.svg"
              alt="instagram-pic"
              class="footer__instagram-pic"
              width="40px"
              height="40px"
            />
          </a>
          
          <img
            src="~/static/images/svg/telegram-footer-icon.svg"
            alt="telegram-pic"
            class="footer__telgram-pic"
            width="40px"
            height="40px"
          />
          <img
            src="~/static/images/svg/viber-footer-icon.svg"
            alt="viber-pic"
            class="footer__viber-pic"
            width="40px"
            height="40px"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  // name: "vfooter",
};
</script>

<style scoped>
/*footer styles start*/
.footer {
  height: 170px;
  background: url(~static/images/footer-image.jpg) no-repeat center;
  background-size: cover;
  display: flex;
}
.footer__wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 50%;
}
.footer__logo {
  width: 25%;
  margin: auto;
  padding-top: 18px;
}
.footer__content {
  width: 25%;
  margin: auto;
  font-family: Kurale;
  color: #333333;
}
.footer__contact {
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 30px;
  color: #333333;
}
.footer__phone-number {
  display: block;
  text-decoration: none;
  font-size: 20px;
  line-height: 30px;
  color: #333333;
}
.footer__contact-pics {
  display: flex;
}
.footer__instagram-pic,
.footer__telgram-pic {
  margin-right: 20px;
}
.item-logo {
    display: flex;
    /* flex-wrap: wrap; */
    align-items: flex-end;
    font-family: Marck Script;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 37px;
}

@media screen and (max-width: 932px){
  .footer__wrapper {
      margin: 0 auto;
      width: 100%;
  }
}
@media screen and (max-width: 600px)
{
  .footer{
    height: auto;
  }
  .footer__wrapper{
    flex-direction: column;
  }
  .footer__logo {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
  }
  .footer__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  .footer__contact {
    margin-right: 10px;
    width: 100%;
    margin-right: 0;
    text-align: center;
  }
  .footer__phone-number {
    margin-bottom: 10px;
    width: 100%;
    text-align: center;
  }
  .footer__contact-pics{
    margin-bottom: 32px;
    justify-content: center;
    width: 100px;
  }
}
/*footer styles end*/
</style>