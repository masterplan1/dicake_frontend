<template>
  <main class="main">
    <section class="products">
      <div class="products__wrapper">
        <div class="products__title">
          <p class="products__title-header">Начинки</p>
          <p class="products__title-description">
            *тут ви можете переглянути можливі варіанти начинок для тортиків і
            вибрати собі щось за смаком.
          </p>
          <div class="products__decoration-filling-item1"></div>
          <div class="products__decoration-filling-item2"></div>
          <div class="products__decoration-filling-item3"></div>
        </div>
        <ProductFilter
          :filters="filters"
          v-on:fetchProductsByCategory="addFillings"
        />
        <div class="products__content">
          <div class="products__cards">
            <div
              class="products__card filling-card"
              @mouseenter="showFillingInfo($event)" 
              @mouseleave="showFillingInfo($event)"
              v-for="filling in fillings"
              :key="filling.id"
            >
              <div class="products__card-pic-wrapper">
                <img
                  v-lazy="$imageSrc(filling.image)"
                  alt="filling"
                  class="products__card-pic"
                />
                <div class="products__card-active">
                  <client-only>
                    <h3 class="producrs__card-desc-title">{{ filling.name }}</h3>
                    <p class="products__card-desc-content" v-html="filling.description"></p>
                  </client-only>
                </div>
              </div>
              <p class="products__card-name">
                {{ filling.name }}
              </p>
              <div class="products__card-info">
                <span class="products__card-price"
                  >{{ filling.price }} грн/{{getAmountName(filling.category_id)}}</span
                >
                <span class="products__card-order"
                  >від {{ filling.min_weight }} {{getAmountName(filling.category_id)}}.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <more-button 
        @addFillings="addFillings"
      />
    </section>
  </main>
</template>

<script>
import MoreButton from '~/components/MoreButton.vue';
export default {
  components: { MoreButton },
  data() {
    return {
      filters: [
        "Весь асортимент",
        "Бісквітні",
        "Чізкейки",
        "Мусові",
        "Капкейки",
      ],
      isError: false,
      errorMessage: "",
      addMoreProducts: 6,
      currentPage: 1,
      currentCategory: null,
      title: 'Начинки тортиків та капкейків - Трюфель'
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Вибір начинок для тортиків, капкейків та інших солодощів на замовлення в Обухові, Українці та Києві - Трюфель'
        }
      ]
    }
  },
  async asyncData({ $axios }) {
    try {
      const fillings = await $axios.$get(`/api/filling?per-page=6`);
      return { fillings };
    } catch (error) {
      console.log(error.message);
      const isError = true;
      const errorMessage = error.message;
      return { isError, errorMessage };
    }
  },
  methods: {
    async addFillings(index = null) {
      try {
        console.log('index', index)
        console.log('current', this.currentCategory);
        if(index !== this.currentCategory || index === null ){
          if(index === 0 && this.currentCategory === null) return;
          this.currentPage++;
          if (index !== null) {
            if (index === 0) {
              this.currentCategory = null;
            } else {
              this.currentCategory = index;
            }
            this.currentPage = 1;
            this.fillings = [];
          }
          const { data, headers } = await this.$axios.get(
            `/api/filling?category_filter=${this.currentCategory}&per-page=${this.addMoreProducts}&page=${this.currentPage}${this.currentCategory !== null ? '&sort=price' : ''}`
          );
          const pageCount = headers["x-pagination-page-count"];
          if (this.currentPage <= pageCount) {
            this.fillings = this.fillings.concat(data);
          }
        }
      } catch (error) {
        console.log(error.message);
        const isError = true;
        const errorMessage = error.message;
        return { isError, errorMessage };
      }
    },
    getAmountName(catId){
      return catId === 4 ? 'шт' : 'кг';
    },
    showFillingInfo($event){
      const activeFillingInfo = $event.target.firstElementChild.lastElementChild;
      activeFillingInfo.classList.toggle('active-view');
    },
  },
};
</script>