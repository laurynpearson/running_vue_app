import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import routesIndex from './views/routesIndex.vue';
import routeCreate from './views/routeCreate.vue';
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import shoeIndex from './views/shoeIndex.vue';
import shoeCreate from './views/shoeCreate.vue';
import routeShow from './views/routeShow.vue';
import shoeShow from './views/shoeShow.vue';
import ursIndex from './views/ursIndex.vue';
import raceIndex from './views/raceIndex.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/routes',
      name: 'route',
      component: routesIndex
    },
    {
      path: '/routes/new',
      name: 'route-new',
      component: routeCreate
    },
    {
      path: '/routes/:id',
      name: 'route-show',
      component: routeShow
    },
    {
      path: '/shoes',
      name: 'shoes',
      component: shoeIndex
    },
    {
      path: '/shoes/new',
      name: 'shoes-new',
      component: shoeCreate
    },
    {
      path: '/shoes/:id',
      name: 'shoe-show',
      component: shoeShow
    },
    {
      path: '/urs',
      name: 'urs-index',
      component: ursIndex
    },
    {
      path: '/races',
      name: 'races-index',
      component: raceIndex
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
