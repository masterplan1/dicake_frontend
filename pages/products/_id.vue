<template>
  <main class="main">
    <section class="products">
      <div class="products__wrapper">
        <div class="products__title">
          <p class="products__title-header">
            {{ getTitle($route.params.id) }}
          </p>
          <p class="products__title-description product-cake">
            *тут ви можете обрати оформлення за вподобанням, або у розділі
            “створити замовлення” запропонувати своє оформлення
          </p>
          <div
            v-for="number of 3"
            :key="number"
            :class="
              $route.params.id != 2
                ? 'products__decoration-cake-item' + number
                : 'products__decoration-cupcake-item' + number
            "
          ></div>
        </div>
      </div>
      <product-component 
          :typeId="+$route.params.id"
      />
    </section>
  </main>
</template>

<script>
import ErrorHandler from '~/components/ErrorHandler.vue';
import ProductComponent from '~/components/ProductComponent.vue';
export default {
  components: { ErrorHandler, ProductComponent },
  data() {
    return {
      productType: [
        "Весь асортимент",
        "торти",
        "капкейки",
        "candybar",
        "дієтичні десерти",
        "подарункові набори",
      ],
    };
  },
  head() {
    return {
      title: this.titlePrepareToMeta() + ' від кондитерської Трюфель в Обухові',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.titlePrepareToMeta() + ' на замовлення від кондитерської Трюфель з доставкою в Обухові, Українці, Києві.'
        }
      ]
    }
  },
  methods: {
    getTitle(id) {
      if (id >= 0 && id <= this.productType.length - 1)
        return this.productType[id];
      this.title = this.productType[1];
      return this.productType[1];
    },
    titlePrepareToMeta(){
      const title = this.getTitle(this.$route.params.id);
      return title.charAt(0).toUpperCase() + title.slice(1);
    }
  },
  validate({ params }) {
    const availableParamsIds = [1, 2, 3, 4, 5];
    return availableParamsIds.includes(+params.id);
  },
};
</script>

<style>

</style>