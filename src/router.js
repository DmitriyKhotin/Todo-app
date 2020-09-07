import Vue from "vue";
import VueRouter from "vue-router";
import Error from "./views/Error";

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/HomePage'),
    },
    {
      path: '/change/:id',
      component: () => import('./views/ChangePage')
    },
    {
      path: '/*',
      component: Error
    }
  ]
})