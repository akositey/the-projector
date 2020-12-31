import Vue from "vue";
import PortalVue from "portal-vue";
import { InertiaApp } from "@inertiajs/inertia-vue";

import route from "ziggy-js";
import { Ziggy } from "./ziggy";

Vue.config.productionTip = false;

// route helper
Vue.mixin({
  methods: {
    route(name, params, absolute) {
      return route(name, params, absolute, Ziggy);
    }
  }
});

Vue.use(InertiaApp);
Vue.use(PortalVue);
const app = document.getElementById("app");

new Vue({
  render: h =>
    h(InertiaApp, {
      props: {
        initialPage: JSON.parse(app.dataset.page),
        resolveComponent: name =>
          import(`~/Pages/${name}`).then(module => module.default)
      }
    })
}).$mount(app);
