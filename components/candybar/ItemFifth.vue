<template>
  <div class="products__content-cards" :class="classItem">
      <div class="candybar__toppers-content" :class="getClass(this.items[0].id)">
          <div class="candybar__toppers-item"
            v-for="item in items"
            :key="item.id"
            
          >
            <template v-if="item.item">
                <h3 class="candybar__toppers-title">{{item.item.name}}</h3>
                <img :src="$nuxt.context.env.baseUrl + '/img/' + item.item.img" alt="cakepops" class="candybar__toppers-image">
                <span class="candybar__toppers-desc">В стилі свята.</span>
                <span class="products__card-price card__price">{{item.item.price}} грн/шт</span>
                <candybarButton :item="item.item" :number="item.id" />       
            </template>
                                   
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return {}
      }
    },
    classItem: {
      type: String,
      default: ''
    }
  },
  methods: {
    getClass(item){
      switch(item){
        case 16: return 'cards-seventh-content';
        case 23: return 'cards-twelve-content';
        case 25: return 'cards-twelve-content-new-13'
        case 28: return 'cards-twelve-content-new-14'
      }
    }
  }
}
</script>

<style scoped>
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
.candybar__toppers-title{
    font-family: Caveat;
    font-size: 50px;
    line-height: 63px;
    text-align: center;
    color: #7D0A41;
    margin-bottom: 40px;
}
.candybar__toppers-content{
    max-width: 1032px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
}
.candybar__toppers-item{
    max-width: 291px;
    margin-right: 20px;
}
.candybar__toppers-item:last-child{
    margin-right: 0;
}
.candybar__toppers-image{
    display: block;
    width: 290px;
    height: 280px;
    margin-bottom: 20px;
}
.candybar__toppers-desc{
    font-family: Kurale;    
    font-size: 20px;
    line-height: 38px;
    color: #333333;
    display: block;
    margin-bottom: 20px;
}
.cards-twelve-content{
    justify-content: space-around;
}
.cards-twelve1::before{
    left: 76px;
}
@media screen and (max-width: 970px){
  .candybar__toppers-content{
    justify-content: space-around;
  }
  .candybar__toppers-item{
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 700px){
  .candybar__toppers-content{
    flex-direction: column;
  }
  .candybar__toppers-item, .candybar__toppers-item:last-child{
    margin: 0 auto 20px;
  }
  .card__price{
    margin-bottom: 20px;
  }
  .candybar__toppers-desc{
    margin-bottom: 10px;
  }
  .cards-seventh-content{
    margin-bottom: 120px;
  }
  .cards-seventh, .cards-twelve{
    margin-bottom: 80px;
  }
}
</style>