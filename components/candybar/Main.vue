<template>
  <div class="candybar__content" v-if="candybars">
    <candybarItemFirst 
      :classItem="chooseMainDivClass(10)"
      :item="candybars[10]"
      :number="10"
    />
    <candybarItemSecond 
      :classItem="chooseMainDivClass(11)"
      :item="candybars[11]"
      :number="11"
    />
    <candybarItemFourth 
      :classItem="chooseMainDivClass(15)"
      :item="candybars[12]"
      :number="12"
    />
    <candybarItemFirst 
      :classItem="chooseMainDivClass(10)"
      :item="candybars[13]"
      :number="13"
    />
    <candybarItemSecond 
      :classItem="chooseMainDivClass(11)"
      :item="candybars[14]"
      :number="14"
    />
    <candybarItemFourth 
      :classItem="chooseMainDivClass(15)"
      :item="candybars[15]"
      :number="15"
    />
    <candybarItemFifth 
      :classItem="chooseMainDivClass(16)"
      :items="item16_18"
    />
    <candybarItemFirst 
      :classItem="chooseMainDivClass(19)"
      :item="candybars[19]"
      :number="19"
    />
    <candybarItemSecond 
      :classItem="chooseMainDivClass(11)"
      :item="candybars[20]"
      :number="20"
    />
    <candybarItemFirst 
      :classItem="chooseMainDivClass(10)"
      :item="candybars[21]"
      :number="21"
    />
    <candybarItemFourth 
      :classItem="chooseMainDivClass(15)"
      :item="candybars[22]"
      :number="22"
    />
    <!-- <candybarItemFifth 
      :classItem="chooseMainDivClass(16)"
      :items="item23_24"
    /> -->
    <candybarItemFifth 
      :classItem="chooseMainDivClass(25)"
      :items="item25_27"
    />
    <candybarItemFifth 
      :classItem="chooseMainDivClass(28)"
      :items="item28_30"
    />
    <cartModal 
      @addToCart="addToCart"
    />
  </div> 
  
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data(){
    return {
      candybars: null,
    }
  },
  async fetch(){
    try {
      this.candybars = await fetch(`${this.$nuxt.context.env.baseUrl}/api/candybar`)
        .then(res => res.json());
    } catch (error) {
      console.log(error)
    }
    
  },
  methods: {
    ...mapActions({
      ADD_TO_CART: 'cart/ADD_TO_CART'
    }),
    chooseMainDivClass(number){
      switch(number){
        case 10: return 'cards-cupcake';
        case 11: return 'cards-second';
        case 12: return 'cards-topper';
        case 13: return 'cards-trifle';
        case 14: return 'cards-tartaletki';
        case 15: return 'cards-muss';
        case 16: return 'cards-seventh';
        // case 17: return 'cards-merengs';
        // case 18: return 'cards-small-bize';
        case 19: return 'cards-merengs';
        case 20: return 'cards-small-bize';
        case 21: return 'cards-cheese';
        case 22: return 'cards-strobbery';
        case 23: return 'cards-twelve cards-twelve1';
        case 24: return 'cards-cupcake';
        case 25: return 'cards-twelve';
        case 26: return 'cards-cupcake';
        case 27: return 'cards-cupcake';
        case 28: return '';
        case 29: return 'cards-cupcake';
        case 30: return 'cards-cupcake';
      }
    },
    addToCart(data){
      this.ADD_TO_CART(data)
    }
  },
  computed: {
    // ...mapGetters({
    //   CART: 'cart/GET_CART'
    // }),
    item16_18(){
      return [
        {id: 16, item: this.candybars[16]},
        {id: 17, item: this.candybars[17]},
        {id: 18, item: this.candybars[18]},
      ]
    },
    // item23_24(){
    //   return [
    //     {id: 23, item: this.candybars[23]},
    //     {id: 24, item: this.candybars[24]},
    //   ]
    // },
    item25_27(){
      return [
        {id: 24, item: this.candybars[24]},
        {id: 26, item: this.candybars[26]},
        {id: 27, item: this.candybars[27]},
      ]
    },
    item28_30(){
      return [
        {id: 28, item: this.candybars[28]},
        {id: 29, item: this.candybars[29]},
        {id: 30, item: this.candybars[30]},
      ]
    }
  }
}
</script>

<style scoped>
>>> .products__content-cards{
    max-width: 1028px;
    position: relative;
    margin: 0 auto 200px;
}

>>> .products__content-card{
    width: 331px;
    height: 324px;
    position: relative;
}
>>> .products__element2{
    display: block;
    width: 287px;
    height: 277px;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 5px;
    
}
>>> .products__element1{
    width: 273px;
    height: 269px;
    position: absolute;
    left: 0;
    bottom: 0;

    filter: blur(4px);
    border-radius: 5px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
}

>>> .products__element4{
    display: block;
    width: 287px;
    height: 277px;
    position: absolute;
    left: 0;
    top: 0;
}
>>> .products__element3{
    width: 273px;
    height: 269px;
    position: absolute;
    right: 0;
    bottom: 0;
    
    filter: blur(4px);
    border-radius: 5px;
}

>>> .card__title{
    font-family: Caveat;
    font-size: 50px;
    line-height: 63px;
    text-align: center;
    color: #7D0A41;
    margin-bottom: 20px;
    padding: 0 5px;
}
>>> .card__description {
    text-align: center;
    margin-bottom: 40px;
}
>>> .card__price {
    text-align: center;
    margin-bottom: 40px;
}

/*cakepops styles*/



.cards-cupcake, .cards-second, .cards-trifle, 
.cards-tartaletki, .cards-muss, .cards-merengs,
.cards-small-bize, .cards-cheese, .cards-strobbery{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
}
/* .cards-second::after{
    display: block;
    content: '';
    position: absolute;
    left: -244px;
    bottom: 0;
    background: url(static/images/svg/candy_bar-cupcake-02.svg) no-repeat left center;
    width: 220px;
    height: 292px;
} */
.cards-second::before, .cards-muss::before, .cards-merengs::before{
    display: block;
    content: '';
    position: absolute;
    left: 76px;
    bottom: -100px;
    width: 2200px;
    height: 1px;
    border: 1px solid #7D0A41;
}

.cards-topper::before, .cards-tartaletki::before,
.cards-seventh::before, .cards-small-bize::before,
.cards-strobbery::before, .cards-twelve::before{
    display: block;
    content: '';
    position: absolute;
    right: 76px;
    bottom: -100px;
    width: 2200px;
    height: 1px;
    border: 1px solid #7D0A41;
}


.cards-twelve1::before{
    left: 76px;
}



/* .cards-trifle::after{
    display: block;
    content: '';
    position: absolute;
    left: -244px;
    bottom: 0;
    background: url(static/images/svg/candy_bar-cupcake-04.svg) no-repeat left center;
    width: 220px;
    height: 292px;
} */
.cards-trifle::before, .cards-cheese::before{
    display: block;
    content: '';
    position: absolute;
    left: 76px;
    bottom: -100px;
    width: 2200px;
    height: 1px;
    border: 1px solid #7D0A41;
}

/* .cards-tartaletki::after{
    display: block;
    content: '';
    position: absolute;
    left: -244px;
    bottom: 0;
    background: url(static/images/svg/candy_bar-cupcake-05.svg) no-repeat left center;
    width: 220px;
    height: 292px;
} */

/* .cards-muss::after{
    display: block;
    content: '';
    position: absolute;
    left: -244px;
    bottom: 0;
    background: url(static/images/svg/candy_bar-cupcake-06.svg) no-repeat left center;
    width: 220px;
    height: 292px;
} */
.muss-desc-card{
    margin-right: 0;
    margin-left: auto;
    
}
/* .cards-seventh-content::after{
    display: block;
    content: '';
    position: absolute;
    left: -244px;
    top: 100px;
    background: url(static/images/svg/candy_bar-cupcake-07.svg) no-repeat left center;
    width: 220px;
    height: 292px;
} */

/* .cards-merengs::after{
    display: block;
    content: '';
    position: absolute;
    left: -244px;
    bottom: 0;
    background: url(static/images/svg/candy_bar-cupcake-08.svg) no-repeat left center;
    width: 220px;
    height: 292px;
} */

/*
.cards-small-bize{
    justify-content: space-between;
}
*/
/* .cards-small-bize::after{
    display: block;
    content: '';
    position: absolute;
    left: -244px;
    bottom: 0;
    background: url(static/images/svg/candy_bar-cupcake-09.svg) no-repeat left center;
    width: 220px;
    height: 292px;
} */

/* .cards-cheese::after{
    display: block;
    content: '';
    position: absolute;
    left: -244px;
    bottom: 0;
    background: url(static/images/svg/candy_bar-cupcake-10.svg) no-repeat left center;
    width: 220px;
    height: 292px;
} */

/* .cards-strobbery::after{
    display: block;
    content: '';
    position: absolute;
    left: -244px;
    bottom: 0;
    background: url(static/images/svg/candy_bar-cupcake-11.svg) no-repeat left center;
    width: 220px;
    height: 292px;
} */
/* cards-twelve-content*/
/* .cards-twelve-content::after{
    display: block;
    content: '';
    position: absolute;
    left: -244px;
    top: 100px;
    background: url(static/images/svg/candy_bar-cupcake-12.svg) no-repeat left center;
    width: 220px;
    height: 292px;
} */

@media screen and (max-width: 960px){
  >>> .card__title{
    font-size: 40px;
    margin-bottom: 10px;
  }
  >>> .card__description{
    margin-bottom: 10px;
  }
  /* >>> .products__cake-choose{
    width: 118px;
    height: 24px;
    font-size: 13px;
    line-height: 22px;
  } */

}
@media screen and (max-width: 700px){
  >>> .products__content-cards{
    margin: 0 auto;
  }
  >>> .cards-second::before, .cards-merengs::before{
    bottom: 50px;
    left: -70px;
  }
  >>> .cards-muss::before{
    bottom: 50px;
    left: -70px;
  }
  >>> .cards-topper::before, .cards-tartaletki::before,
  .cards-seventh::before, .cards-small-bize::before,
  .cards-strobbery::before, .cards-twelve::before{
    bottom: -40px;
    right: -70px;
  }
}

</style>
