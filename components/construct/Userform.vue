<template>
  <form class="order__content-cards-fourth" novalidate>
    <div class="order__content-name"
      :class="{'error' : $v.formData.name.$error}"
    >
        <label class="order__label" for="name">Ваше ім'я:</label>
        <input type="text" 
          v-model="formData.name" 
          :class="{'not-validate': $v.formData.name.$error}"
          @blur="nameCheck"
        class="order-name" name="name">
        <div class="error-message"
          v-if="!$v.formData.name.required && $v.formData.name.$dirty"
        >Введіть ваше ім'я</div>
        <div class="error-message"
          v-if="!$v.formData.name.alpha && $v.formData.name.$dirty"
        >Поле не повинно містити цифри та інші знаки</div>
        <div class="error-message"
          v-if="!$v.formData.name.minLength && $v.formData.name.$dirty"
        >Поле повинно містити не меньше 3 символів</div>
    </div>
    <div class="order__content-phone"
      :class="{'error' : $v.formData.phone.$error}"
    >
        <label class="order__label" for="phone">номер телефону:</label>
        <input type="text" 
          v-model="formData.phone"
          v-mask="'(###)### ## ##'"
          :class="{'not-validate': $v.formData.phone.$error}"
          @blur="phoneCheck"
          class="order-number" name="phone" placeholder="(093)333 33 33">
        <div class="error-message"
          v-if="!$v.formData.phone.required && $v.formData.phone.$dirty"
        >Введіть номер телефону</div>
        <div class="error-message"
          v-if="!$v.formData.phone.numeric && $v.formData.phone.$dirty"
        >Номер повинен містити тільки цифри</div>
        <div class="error-message"
          v-if="!$v.formData.phone.minLength && $v.formData.phone.$dirty"
        >Поле повинно містити не меньше 10 чисел</div>
    </div>
    <div class="order__content-phone"
      :class="{'error' : $v.formData.date.$error}"
    >
        <label class="order__label" for="date">дата видачі:</label>
        <!-- <input class="order-date" type="text"> -->
        <client-only>
          <date-picker 
            calendar-class="datepicker-custom"
            :input-class="'order-name'"
            :clear-button="true"
            v-model="dataInput"
            :format="'dd.MM.yy'"
            :disabled-dates="disabledDate"
            @input="dateCheck"
            @cleared="dataClear"
            :class="{'not-validate': $v.formData.date.$error}"
          >
            
          </date-picker>
        </client-only>
        
        <div class="error-message"
          v-if="!$v.formData.date.required && $v.formData.date.$dirty"
        >Виберіть дату замовлення</div>
    </div>
  </form>
</template>

<script>
// v-model="formData.date"
import {helpers, required, minLength} from 'vuelidate/lib/validators';
import {mask} from 'vue-the-mask';
// import Datepicker from 'vuejs-datepicker';
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёіА-ЯЁІ ]*$/);
const numeric = helpers.regex('numericq', /^[0-9\(\) ]*$/);

export default {
  data(){
    return {
      formData: {
        name: '',
        phone: '',
        date: ''
      },
      dataInput: null,
      disabledDate: {
        to: new Date()
      }
    }
  },
  directives: {
    mask
  },
  validations: {
    formData: {
      name: {
        required,
        alpha,
        minLength: minLength(3)
      },
      phone: {
        required,
        numeric,
        minLength: minLength(10)
      },
      date: {
        required
      }
    }
  },
  methods: {
    nameCheck(){
      this.$v.formData.name.$touch();
      this.checkValidation()
    },
    phoneCheck(){
      this.$v.formData.phone.$touch();
      this.checkValidation();
    },
    dateCheck(){
      this.$v.formData.date.$touch()
      this.formData.date = this.$moment(this.dataInput).format('DD.MM.YY');
      this.checkValidation();
    },
    checkValidation(){
      if(!this.$v.formData.$invalid) {
        this.$emit('checkedValidation', this.formData);
      }else{
        this.$emit('resetValidation');
      }
    },
    dataClear(){
      this.formData.date = null;
      this.checkValidation();
    }
  },
}
</script>

<style>
.order__content-name, .order__content-phone, .order__content-date{
  display: flex;
  flex-direction: column;
  min-height: 90px;
}
.order__label{
    display: block;
    font-family: Kurale;
}
.order-name, .order-number, .order-date{
    border: none;
    font-family: Kurale;
    font-size: 16px;
}
.not-validate{
  background-color: #fce4e4;
  border: 1px solid #cc0033;
  outline: none;
}
.error label {
  color: #cc0033;
}
.error-message {
  max-width: 192px;
  color: #cc0033;
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
  margin: 5px 0 0;
}
/* .error-message {
  display: inline-block;
} */
</style>