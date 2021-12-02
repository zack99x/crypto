import Toast, { PluginOptions } from "vue-toastification";
import { createApp, h } from "vue";
import VueApexCharts from "vue3-apexcharts";

// vue app config
import App from "./App.vue";
import router from "./router";
// App CSS | Plugin Css & Others
import "@/assets/css/index.scss";
import "vue-toastification/dist/index.css";

const app = createApp({
  render: () => h(App),
});

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $toast: typeof Toast;
  }
}
// Toast configuration
const options: PluginOptions = {
  // TODO : Custom Toast configuration if needed
};

app.use(Toast, options);
app.use(VueApexCharts);

// Router configuration
app.use(router);

// Finaly mount the app
app.mount("#app");
