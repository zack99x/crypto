import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import interceptorsSetup from "./helpers/interceptors";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import "./assets/index.scss";

Vue.config.productionTip = false;

Vue.use(Toast);

interceptorsSetup();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
