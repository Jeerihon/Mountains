import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import adminPages from './modules/adminPages';
import skills from './modules/skills';
import works from "./modules/works";
import user from "./modules/user";

export  const store = new Vuex.Store({
  modules: {
    adminPages, skills, works, user
  }
});
