<template>
  <div>
    <client-only>
      <modal
        name="add-comment"
        transition="pop-out"
        height="370px"
        :maxHeight="500"
        :maxWidth="520"
        :adaptive="true"
        :scrollable="true"
        :pivot-y="0.5"
        :reset="true"
        :resizable="true"
        class="modal-wrapper"
      >
        
            
            <div>
                <div>
                    <form @submit.prevent="submitForm" class="contact_form" name="contact_form">
                        <ul>
                            <li>
                                <h2>Написати відгук</h2>
                            </li>
                            <li>
                                <label for="name">Ім'я:</label>
                                <input type="text" name="name" required minlength="3" v-model="name">
                            </li>
                            <li>
                                <label for="message">Текст:</label>
                                <textarea name="message" cols="30" rows="6" required maxlength="140" v-model="content" class="modal-textarea"></textarea>
                                <span class="form_hint">до 140 символів</span>
                            </li>
                            <li>
                                <button class="submit products__cake-choose" type="submit">Відправити</button>
                            </li>
                        </ul>
                    </form>
                </div>
                <img src="/images/candybar_order-close-modal.jpg" alt="close" class="candynar-close"
                  @click="hideModal"
                > 
            </div>
      </modal>
    </client-only>
  </div>
</template>

<script>

export default {
  data(){
    return {
      name: '',
      content: ''
    }
  },
  methods: {
    hideModal(){
      this.$modal.hide('add-comment');
    },
    async submitForm(){
      try {
        const post = await this.$axios.$post('/api/comment', {'user_name': this.name, 'content': this.content})
        if(post){
          this.fetchComments();
          this.hideModal();
          this.toast();
          this.clearForm();
        }
      } catch (error) {
        console.log(error)
      }
    },
    fetchComments(){
      this.$emit('fetchComments');
    },
    toast(){
      this.$toast.success('Ваш відгук додано!', {duration: 3000})
    },
    clearForm(){
      this.name = '';
      this.content = '';
    }
  }
}
</script>

<style scoped>
.candynar-close {
    color: white;
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
}
.candynar-close:hover{
  width: 31px;
  height: 31px;
}
.form_hint {
    font-size: 12px;
    display: block;
}
.contact_form ul{
    width: 100%;
    list-style-type:none;
    list-style-position:outside;
    margin:0px;
    padding:0px;
}
.contact_form li {
    padding: 12px;
    border-bottom:1px solid #eee;
    position:relative;
}
.contact_form h2 {
    margin:0;
    display: inline;
}
.contact_form label {
    font-size: 16px;
    line-height: 18px;
    width:150px;
    margin-top: 3px;
    display:inline-block;
    float:left;
    padding:3px;
}
.contact_form input {
    height:36px;
    width:220px;
    padding:5px 8px;
}
.contact_form textarea {padding:8px; width:300px;}
/* .contact_form button {margin-left:156px;} */

.contact_form input, .contact_form textarea {
    border:1px solid #aaa;
    box-shadow: 0px 0px 3px #ccc, 0 10px 15px #eee inset;
    border-radius:2px;
}
.contact_form input:focus, .contact_form textarea:focus {
    background: #fff;
    border:1px solid #555;
    box-shadow: 0 0 3px #aaa;
}
.submit{
  line-height: 20px;
  border: none;
}
@media screen and (max-width: 460px){
  .contact_form textarea {padding:8px; width:240px;}
  .contact_form label{width: 54px;}
  .products__cake-choose{
    width: 118px;
    height: 24px;
    font-size: 13px;
    line-height: 23px;
  }
}
</style>