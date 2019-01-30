import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import adminPages from './modules/adminPages';
import skills from './modules/skills';
import posts from './modules/posts';
import works from "./modules/works";

export  const store = new Vuex.Store({
  modules: {
    adminPages, skills, posts, works
  }
});
