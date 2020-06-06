import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VuePageTransition from "vue-page-transition";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VuePageTransition);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
