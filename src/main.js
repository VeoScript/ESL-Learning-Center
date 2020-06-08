import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VuePageTransition from "vue-page-transition";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueFbCustomerChat from 'vue-fb-customer-chat'
 
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VuePageTransition);
Vue.use(VueFbCustomerChat, {
  page_id: '106304557778712',
  theme_color: '#333333', 
  locale: 'en_US', 
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
