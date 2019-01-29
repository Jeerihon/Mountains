import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

Vue.use(VueRouter);

import about from "./components/about";
import blog from "./components/blog";
import works from "./components/works";
import app from "./app";

const routes = [
  {
    path: './dist/admin',
    component: app,

  },
  {
    path: '/dist/admin/about',
    component: about,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/dist/admin/blog',
    component: blog
  },
  {
    path: '/dist/admin/works',
    component: works
  }
];

const router = new VueRouter({ routes });
const guard = axios.create({
  baseURL: 'https://webdev-api.loftschool.com'
});

router.beforeEach((to, from, next)  => {
  const isPublicRoute = to.matched.some(record => record.meta.isPublic);

  if (isPublicRoute === false) {
    guard.get('/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      next();
      console.log(response)
    }).catch(error => {
      router.replace(/dist/);
      localStorage.removeItem('token');
      console.error(error)
    })

  } else {
    next();
  }
});

export default new VueRouter({routes, mode: 'history'})
