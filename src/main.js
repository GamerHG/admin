import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/reset.scss';
import http from './api/config'
import './mock'

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
