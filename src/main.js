import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'

import VueToast from 'vue-toast-notification';
Vue.use(VueToast);
import 'vue-toast-notification/dist/theme-bootstrap.css';

import localizeFilter from '@/filters/localize.filter'
Vue.filter('localize', localizeFilter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
