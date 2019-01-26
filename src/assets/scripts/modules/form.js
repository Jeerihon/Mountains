import Vue from 'vue';
import axios from 'axios';
import SimpleVueValidation from 'simple-vue-validator';

const Validator = SimpleVueValidation.Validator;

Vue.use(SimpleVueValidation);


new Vue({
  el: "#form-component",
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    'user.name'(value) {
      return Validator.value(value).required('Необходимо заполнить все поля');
    },
    'user.password'(value) {
      return Validator.value(value).required('Необходимо заполнить все поля');
    },
    'checked'(value) {
      return Validator.value(value).required('Роботов не пускаем');
    },
    'picked'(value) {
      return Validator.custom(function () {
        if (!Validator.isEmpty(value)) {
          let number = parseInt(value);
          if (number != 1) {
            return 'Серьезно, совсем не пускаем';
          }
        }
      })
    }
  },
  data() {
    return {
      user: {
        name: "",
        password: ""
      },
      checked: [],
      picked: 0,
      error: false,
      errorMessage: ""
    }
  },
  methods: {
    login() {

      // Проверяем поля на валидность
      this.$validate().then(success => {
        if (!success) return;
        // Отправляем запрос на сервер
        axios.post("https://webdev-api.loftschool.com/login", this.user).then(response => {
          // Если ответ положительный - сохраняем токен в локальное хранилище
          // и перенаправляем на страницу админ панели
          if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            location.href="./admin";
          }

          // Убираем окно с описанием ошибок
          this.error = false;

        }, error => {

          this.errorMessage = '';
          // Если пароль или логин не верные, вернуть подсказку
          if (error.response.status === 401) {
            this.error = true;
            this.errorMessage = error.response.data.error;
          }
        });

        // Сбросить валидатор
        this.validation.reset();
      })
    }
  },
  template: "#form"
});
