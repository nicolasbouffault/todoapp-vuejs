import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faCheck, faPlusCircle  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false

library.add(faTrash, faCheck, faPlusCircle);
Vue.component('font-awesome-icon',  FontAwesomeIcon);

new Vue({
  render: h => h(App),
}).$mount('#app')
