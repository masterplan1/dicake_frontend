<template>
  <div>
    <div class="products__wrapper">
      <ProductFilter
        :filters="productCategory[typeId]"
        v-on:fetchProductsByCategory="addProducts"
      />
      <ErrorHandler v-if="isError" />
      <div class="products__content" v-else>
        <div class="products__cards">
          <div
            class="products__card"
            v-for="product in products"
            :key="product.id"
          >
            <div class="products__card-pic-wrapper">
              <img
                v-lazy="$imageSrc(product.image)"
                
                alt="filling"
                class="products__card-pic image"
              />
              <div class="products__card-zoom"></div>
            </div>
            <div class="products__card-cake-info">
              <span class="products__cake-name">
                {{ product.name }}
              </span>
              <span class="products__cake-choose"
                @click="chooseDecorItem($event, product.id, product.category_id, product.name, product.type, product.image, product.price)"
              > Обрати </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="products__more">
      <div class="products__more-buttons" @click="addProducts(null)">
        <span class="products__more-name"> Більше </span>
      </div>
    </div>
    <cartModal 
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import ErrorHandler from '~/components/ErrorHandler.vue';
export default {
  components: { ErrorHandler },
  data() {
    return {
      products: [],
      currentCategory: null,
      isError: false,
      errorMessage: '',
      addMoreProducts: 6,
      currentPage: 1,
      currentCategory: null,
      productCategory: [
        [],
        [
          "Весь асортимент",
          "Дитячі",
          "Жіночі",
          "Чоловічі",
          "Весільні",
          "Хрестини",
          "Чізкейки",
          "Мусові",
        ],
        ["Весь асортимент", "Дитячі", "Жіночі", "Чоловічі"],
        ["Тематична вечірка", "Весілля", "Дитяче свято"],
        [],
        [],
      ],
      currentChosenProduct: null,
    };
  },
  async fetch() {
    try {
      // this.products = await this.$axios.$get(`/api/product?type_filter=${this.typeId}&per-page=6`)
      this.products = await fetch(`${this.$nuxt.context.env.baseUrl}/api/product?type_filter=${this.typeId}&per-page=6`)
      .then(res => res.json());
    }catch (error) {
      console.log(error.message);
      const isError = true;
      const errorMessage = error.message;
      return {isError, errorMessage};
    }
  },
  props: {
    typeId: {
      default(){
        return 1;
      },
      type: Number
    },
    isForConstructor: {
      type: Boolean,
      default(){
        return false;
      }
    }
  },
  methods: {
    ...mapActions('cart', [
      'ADD_TO_CART'
    ]),
    async addProducts(index = null){
      try {
        this.currentPage++;
        
        if(index !== null){
          if(index === 0){
            this.currentCategory = null;
          }else{
            this.currentCategory = index;
          }
          this.currentPage = 1;
          this.products = [];
        } 

        // with axios (safari don't work, cors error)
        // const {data, headers} = await this.$axios.get(
        //   `/api/product?type_filter=${this.typeId}&category_filter=${this.currentCategory}&per-page=${this.addMoreProducts}&page=${this.currentPage}`
        // )

        //  const pageCount = headers['x-pagination-page-count']
        // if(this.currentPage <= pageCount){
        //   this.products = this.products.concat(data);
        // }

        const result = await fetch(
          `${this.$nuxt.context.env.baseUrl}/api/product?type_filter=${this.typeId}&category_filter=${this.currentCategory}&per-page=${this.addMoreProducts}&page=${this.currentPage}`
        ).then(res => res);
        const data = await result.json();
        const pageCount = result.headers.get('x-pagination-page-count')
        console.log(result)
        if(this.currentPage <= pageCount){
           this.products = this.products.concat(data);
        }
       
      }catch (error) {
        console.log(error.message);
        const isError = true;
        const errorMessage = error.message;
        return {isError, errorMessage};
      }
    },
    chooseDecorItem($event, productId, categoryId, productName, productType, productImage, productPrice){
      if(this.isForConstructor){
        if(this.currentChosenProduct){
          this.currentChosenProduct.classList.toggle('product-chosen');
        }
        this.currentChosenProduct = $event.target.parentElement.previousElementSibling;
        this.currentChosenProduct.classList.toggle('product-chosen');
        this.$emit('chooseDecorItem', {productId, categoryId, productName})
      }else if(productType === 1 || productType === 2){
        this.$router.push({name: 'custom', params: {decorInfo: {productId, productType, productName, categoryId}}})
      }else if(productType === 4 || productType === 5){
        this.showModal(productId, productName, productType, productImage, productPrice)
      }
    },
    showModal(productId, productName, productType, productImage, productPrice){
      this.$modal.show('customer-cart', {item: {productId, 'name': productName, productType, 'img': productImage, 'price': productPrice}, isDiatery: true, width: window.innerWidth})
    },
    addToCart(data){
      this.ADD_TO_CART(data);
    }
  },
  mounted(){
    const imageToZoom = document.querySelector('.products__cards');
    imageToZoom.addEventListener('click', imageHandler)
    function imageHandler(event){
      if(event.target.classList.contains('products__card-zoom')){
        const imageSrc = event.target.previousElementSibling.src;
        const body = document.getElementsByTagName('body')[0];
        
        const divParent = document.createElement('div');
        divParent.classList.add('popup');
        const divChild = document.createElement('div');
        divChild.classList.add('popup_bg');
        const imageChild = document.createElement('img');
        imageChild.classList.add('popup_img');
        imageChild.src = imageSrc;
        divParent.appendChild(divChild);
        divParent.appendChild(imageChild);
        body.appendChild(divParent);

        divParent.addEventListener('click', removePopup);
        
        function removePopup(event){
          divParent.classList.add('popup_hide');
          divParent.removeEventListener('click', removePopup);
          divParent.remove();
        }
      }
      
    }
  }
};
</script>