<template>
  <div>
    <div class="products__wrapper">
        
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
                <div class="products__card-active" >
                  <h3 class="producrs__card-desc-title">{{ filling.name }}</h3>

                  <p class="products__card-desc-content" v-html="filling.description"></p>
                  <div class="product__card-click" @click.self="chooseFilling($event, filling.id, filling.min_weight, filling.price, filling.name)"></div>
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
  </div>
</template>

<script>
import MoreButton from '~/components/MoreButton.vue';
export default {
  components: { MoreButton },
  data() {
    return {
      fillings: [],
      currentChosenItem: null,
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
    };
  },
  props: {
    typeId:{
      type: Number,
      required: true
    },
    categoryId: {
      type: Number,
      required: true
    },
  },
  mounted(){
    this.currentCategory = this.findCurrentCategory(this.categoryId, this.typeId);
    this.addFillings()
  },
  methods: {
    async addFillings(index = null) {
      try {
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
    chooseFilling($event, fillingId, fillingMinWeight, price, name){
      if(this.currentChosenItem){
        this.currentChosenItem.classList.toggle('product-chosen')
      }
      this.currentChosenItem = $event.target.parentElement.parentElement;
      this.currentChosenItem.classList.toggle('product-chosen');
      this.$emit('chooseFillingItem', fillingId, fillingMinWeight, price, name);
    },
    findCurrentCategory(catId, typeId){
      if(+typeId === 2){
        return 4;
      }else if(+typeId === 1 && +catId === -1){
        return 100;
      }else if(+catId === 6){
        return 2;
      }else if(+catId === 7){
        return 3;
      }else{
        return 1;
      }
    },
    showFillingInfo($event){
      const activeFillingInfo = $event.target.firstElementChild.lastElementChild;
      activeFillingInfo.classList.toggle('active-view');
    },
  },
};
</script>

<style scoped>
  .product__card-click{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
</style>