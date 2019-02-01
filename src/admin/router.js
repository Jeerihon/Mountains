import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

Vue.use(VueRouter);

import about from "./components/about";
import blog from "./components/blog";
import works from "./components/works";

const routes = [
  {
    path: '/admin/about',
    component: about,
    meta: {
      auth: true
    }
  },
  {
    path: '/admin/blog',
    component: blog,
    meta: {
      auth: true
    }
  },
  {
    path: '/admin/works',
    component: works,
    meta: {
      auth: true
    }
  }
];

const router = new VueRouter({routes});
const guard = axios.create({
  baseURL: 'https://webdev-api.loftschool.com'
});

router.beforeEach((to, from, next) => {
  const isPrivate = to.matched.some(record => record.meta.auth)
  
  if (isPrivate === true) {
    guard.get('/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      next();
    }).catch(error => {
      location.replace("/");
      localStorage.removeItem('token');

    })
  } else {
    next();
  }
});


export default router;
