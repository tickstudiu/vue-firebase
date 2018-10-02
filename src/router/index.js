import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase';

import Login from '@/components/Login';
import Home from '@/components/Home';
import AboutUs from '@/components/AboutUs';

Vue.use(BootstrapVue);
Vue.use(Router);

let Route = new Router({
  routes: [
    {
      path: '*',
      name: 'login',
      component: Login
    },{
      path: '/about',
      name: 'about us',
      component: AboutUs,
      meta: {
        requestAuth: true,
      }
    },{
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requestAuth: true,
      }
    }
  ]
});

Route.beforeEach((to, from, next) =>{
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requestAuth);

  if(requiresAuth && !currentUser){
    next('Login')
  }else if(!requiresAuth && currentUser){
    next('Home')
  }else next();
});

export default Route
