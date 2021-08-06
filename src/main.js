import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "buefy/dist/buefy.css";
import "./assets/css/site.css";

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
