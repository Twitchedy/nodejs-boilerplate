import Vue from 'vue'
import store from './store'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import App from '~/client/js/components/base/App'
import axios from 'axios'

// Bootstrap VueJS components.
require('./bootstrap')

// Set up VueJS plugins.
Vue.prototype.$http = axios
Vue.use(BootstrapVue)

// Init SPA.
new Vue({
    router,
    store,
    template: '<App/>',
    components: { App }
}).$mount('#app')
