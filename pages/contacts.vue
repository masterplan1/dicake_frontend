<template>
  <main class="main">
    <section class="products">
      <div class="products__wrapper candybar__wrapper">
        <div class="products__title">
          <h1 class="products__title-header">Контакти</h1>
        </div>
        <div
          class="products__title-description products__title-cabdybar product-cake"
        >
          <p>
            Самовивіз замовлень можна здійснити за адресою: м. Обухів, вул.
            Молодіжна 2, (поблизу магазину "Околиця"); <br />
          </p>
          <div class="contacts-wrap">
            <p>Контакти:</p>
            <a href="tel:0934978646">0934978646</a>
            <a href="tel:0634394868">0634394868</a>
          </div>

          <nuxt-link to="/">На головну</nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "Трюфель - контакти, телефон",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Кондитерська Трюфель - контакти, телефон",
        }
      ],
    };
  },
};
</script>

<style scoped>
.contacts-wrap {
  margin: 20px 0;
}
.contacts-wrap a{
  display: block;
  text-decoration: none;
  color: inherit;
}
</style>