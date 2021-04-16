import 'reset-css';
import 'normalize.css';
import Vue from 'vue';
import App from './App.vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBxLG1DqAeMXNC-VDJAG_MRDt7u06VypJc',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    region: 'RU',
    language: 'ru'
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
