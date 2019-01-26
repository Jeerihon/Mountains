import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {store} from "./store";
import axiosRequest from "./requests";

store.$axios = axiosRequest;

new Vue({
  el: "#admin-app",
  store,
  router,
  render: h => h(App)
});
