import Vue from 'vue';
import axios from 'axios';


new Vue({
  el: "#form-component",
  data() {
    return {
      user: {
        name: "",
        password: ""
      },
      error: false,
      errorMessage: ""
    }
  },
  methods: {
    login() {
      // Отправляем запрос на сервер
      axios.post("https://webdev-api.loftschool.com/login", this.user).then(response => {
        // Если ответ положительный - сохраняем токен в локальное хранилище
        // и перенаправляем на страницу админ панели
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          location.href="./dist/admin";
        }

        // Убираем окно с описанием ошибок
        this.error = false;

      }, error => {
        this.error = true;

        this.errorMessage = '';

        if (error.response.status === 401) {
          this.errorMessage = error.response.data.error;
        }
      })
    }
  },
  template: "#form"
});
