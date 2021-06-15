<template>
  <section class="comment">
                <h1 class="comment__title">Відгуки</h1>
                <p class="comment__description">Думка наших незалежних експертів дуже важлива для нас. 
                Маєте, що сказати про нас, будь-ласка, залиште нам Ваш відгук.</p>
            <CommentMain />
            
        </section>
</template>

<script>
export default {
  data(){
    return {
      title: 'Відгуки'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Відгуки наших клієнтів'
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex,nofollow'
        }
      ]
    }
  },
}
</script>

<style scoped>
/*comment styles start*/
.comment__title{
    margin-top: 100px;
    margin-bottom: 50px;
    text-align: center;
    font-family: Amatic SC;
    font-size: 80px;
    line-height: 100px;
    color: #593C74;
}
.comment__description{
    max-width: 605px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    font-family: Caveat;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    color: #DD978F;
    padding: 0 20px;
}

</style>