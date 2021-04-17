import 'reset-css';
import 'normalize.css';
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import router from './router'


import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBxLG1DqAeMXNC-VDJAG_MRDt7u06VypJc',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
