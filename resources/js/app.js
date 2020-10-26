require('./bootstrap');

window.Vue = require('vue');

import router from './routes/routes'

/**
 * Components globais
 */
Vue.component('test-component', require('./components/TestComponent.vue').default)

const app = new Vue({
    router,
    el: '#app',
});




