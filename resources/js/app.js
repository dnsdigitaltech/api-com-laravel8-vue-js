require('./bootstrap');

window.Vue = require('vue');

import router from './routes/routes'
import store from './vuex/store'

/**
 * Components globais
 */

 Vue.component('app-component', require('./components/App.vue').default)

const app = new Vue({
    router,
    store,
    el: '#app',
});




