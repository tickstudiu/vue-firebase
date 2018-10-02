// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import firebase from 'firebase';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

let app;
let config = {
  apiKey: "AIzaSyBUlp98OH1BEI27RzaQ3PNf98C8c2zkyqU",
  authDomain: "native-firebase-assginment.firebaseapp.com",
  databaseURL: "https://native-firebase-assginment.firebaseio.com",
  projectId: "native-firebase-assginment",
  storageBucket: "native-firebase-assginment.appspot.com",
  messagingSenderId: "952465302721"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function (user) {
  if (!app){
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    });
  }
});

