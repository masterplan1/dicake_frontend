<template>
  <div class="products__filter">
                    <div 
                      class="products__filter-buttons"
                      v-for="(filter, index) in filters"
                      :key="index"
                      @click.stop="changeActiveClassStatus($event, index)"
                    >
                        <span class="products__filter-name">
                            {{filter}}
                        </span>
                    </div>
                </div>
</template>

<script>
export default {
  data(){
    return {
      activeClassElement: null,
    };
  },
  props: {
    filters: {
      default(){
        return ['Дитячі', 'Жіночі', 'Чоловічі', 'Весільні', 'Хрестини', 'Чізкейки', 'Мусові'];
      },
      type: Array,
    }
  },
  methods: {
    changeActiveClassStatus($event, index){
      if(this.activeClassElement){
        this.activeClassElement.toggle('products__filter-buttons-active');
      }
      this.activeClassElement = $event.target.parentElement.classList;
      this.activeClassElement.toggle('products__filter-buttons-active');
      this.$emit('fetchProductsByCategory', index);
    }
  }
}
</script>

<style scoped>
  .products__filter{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 50px;
}
.products__filter-buttons{
    width: 212px;
    height: 40px;
    margin-bottom: 30px;
    border-radius: 20px;
    border: 1px solid #333333;
    background: #FFFFFF;
    text-align: center;
    cursor: pointer;
}
.products__filter-buttons:hover,
.products__filter-buttons:active,
.products__filter-buttons:focus{
    border-color: #DD978F;
    color: #DD978F;
}
.products__filter-buttons-active{
    border-color: #DD978F;
    color: #DD978F;
}
.products__filter-name:hover{
    color: inherit;
}

.products__filter-buttons:last-child{
    margin-right: 0;
}
.products__filter-name{
    display: block;
    font-family: Kurale;
    font-size: 20px;
    line-height: 38px;
    color: inherit;
}
@media screen and (max-width: 415px){
  .products__filter{
    margin-bottom: 35px;
  }
  .products__filter-buttons{
    width: 118px;
    height: 24px;
    margin-bottom: 14px;
    border-radius: 20px;
    border: 1px solid #333333;
    background: #FFFFFF;
    text-align: center;
    cursor: pointer;
  }
  .products__filter-name{
    font-size: 13px;
    line-height: 22px;
  }
}
</style>