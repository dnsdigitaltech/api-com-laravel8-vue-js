require('./bootstrap');

window.Vue = require('vue');

import router from './routes/routes'
import store from './vuex/store'

/**
 * Components globais
 */
Vue.component('test-component', require('./components/TestComponent.vue').default)

const app = new Vue({
    router,
    store,
    el: '#app',
});




