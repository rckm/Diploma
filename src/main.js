import Vue from 'vue';
import Vuetify from 'vuetify';
import BootstrapVue from 'bootstrap-vue';
import 'firebase/firestore';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css'; /* eslint-disable-line */
import MenuIcon from 'vue-material-design-icons/menu.vue';
import 'vuetify/dist/vuetify.min.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Vuetify);

Vue.component('menu-icon', MenuIcon);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
