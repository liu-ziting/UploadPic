import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false

import {router} from './route.js'

import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});