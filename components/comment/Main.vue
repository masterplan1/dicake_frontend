<template>
  <div class="comment__content carousel">
      <span class="comment__arrow prev" @click="prevButtonClick"></span>
      <div class="comment__cards-wrapper">
          <div 
            class="comment__cards"
            :style="{ 'margin-left': position + 'px' }"
          >
              <div 
                class="comment__card"
                v-for="(item, index) of comments"
                :key="index"
              >
                  <h3 class="comment__card-name">{{item.user_name}}</h3>
                  <div class="comment__card-stars">
                      <span class="comment-card-star" v-for="item of 5" :key="item"></span>
                  </div>
                  <div class="comment__card-line"></div>
                  <p class="comment__card-text">
                    {{item.content}}
                  </p>
              </div>
          </div>
      </div>    
      <span class="comment__arrow next" @click="nextButtonClick"></span>
      <div class="comment__add-button" @click="openModal"></div>
      <comment-modal @fetchComments="fetchComments" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      comments: [],
      itemWidth: 241 + 70,
      count: 3,
      position: 0,
      listItem: null,
      listItems: null
    }
  },
  async fetch(){
    try {
      this.comments = await fetch(`${this.$nuxt.context.env.baseUrl}/api/comment/index`)
        .then(res => res.json());
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    prevButtonClick(){
      this.position += this.itemWidth * this.count;
      this.position = Math.min(this.position, 0);
    },
    nextButtonClick(){
      this.position -= this.itemWidth * this.count;
      this.position = Math.max(this.position, -this.itemWidth*(this.comments.length - this.count));
    },
    openModal(){
      this.$modal.show('add-comment');
    },
    async fetchComments(){
      this.comments = await this.$axios.$get('/api/comment');  
    }
  },
  mounted(){
    const windoWidth = window.innerWidth;
    if(windoWidth < 1060){
      if(windoWidth < 630){
        this.count = 1;
      }else{
        this.count = 2;
      }
      
    }
  }
}
</script>

<style scoped>
.comment__content{
    position: relative;
    max-width: 933px;
    margin: 0 auto 100px;    
}
.comment__card{
    width: 241px;
    margin-left: 35px;
    margin-right: 35px;
/*    margin-right: 69px;*/
    display: inline-block;
    overflow: hidden;
}
.comment__card-name{
    font-family: Kurale;
    font-size: 25px;
    line-height: 38px;
    color: #593C74;
    margin-bottom: 20px;
    text-align: center;
}
.comment__card-stars{
    display: flex;
    justify-content: center;
    margin-bottom: 21px;
}
.comment-card-star{
    display: block;
    width: 18px;
    height: 18px;
    background: url(~static/images/svg/star-icon.svg)
}
.comment__card-line{
    width: 219px;
    height: 1px;
    border: 1px solid #593C74;
    margin: 0 auto 19px;
}
.comment__card-text{
    font-family: Kurale;
    font-size: 16px;
    line-height: 24px;
    color: #593C74;
    margin: 0 auto;
    margin-left: 10px;   
}
.comment__cards-wrapper{
    width: 933px;
    overflow: hidden;
}

.comment__add-button{
    width: 60px;
    height: 60px;
    background: url(~static/images/svg/plus-icon.png);
    margin: 80px auto 100px;
    cursor: pointer;
}
.comment__cards{
    width: 9999px;
    margin: 0;
    padding: 0;
    transition: margin-left 0.5s;
    display: flex;
}
.comment__arrow{
    position: absolute;
    top: 64px;
    display: block;
    width: 64px;
    height: 64px;
    cursor: pointer;
}
.next{
    right: -6vw;
/*    margin-right: 20px;*/
    background: url(~static/images/svg/right-arrow-icon.svg) no-repeat;
}
.prev{
    left: -6vw;
/*    margin-left: 20px;*/
    background: url(~static/images/svg/left-arrow-icon.svg) no-repeat;
}
@media screen and (max-width: 1060px){
  .prev{
    left: 32vw;
  }
  .next{
    right: 32vw;
  }
  .comment__arrow{
    top: 286px;
  }
  .comment__add-button{
    margin-top: 50px;
  }
  .comment__cards-wrapper{
    width: 622px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 630px){
  .comment__cards-wrapper{
    width: 311px;
  }
  .prev{
    left: 18vw;
  }
  .next{
    right: 18vw;
  }
}
</style>