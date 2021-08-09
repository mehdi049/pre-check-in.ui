import Vue from "vue";
import App from "./App.vue";

import Buefy from "buefy";

import axios from "axios";
import VueAxios from "vue-axios";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "buefy/dist/buefy.css";
import "./assets/css/site.css";
import router from "./router";

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(Buefy);

Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
