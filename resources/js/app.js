require('./bootstrap');

window.Vue = require('vue');

import router from './routes/routes'
import store from './vuex/store'

/**
 * Components globais
 */

 Vue.component('admin-component', require('./components/admin/AdminComponent').default)

const app = new Vue({
    router,
    store,
    el: '#app',
});




