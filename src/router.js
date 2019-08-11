import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import routesIndex from './views/routesIndex.vue';
import routeCreate from './views/routeCreate.vue';


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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
