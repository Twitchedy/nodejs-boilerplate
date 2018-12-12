import Vue from 'vue'
import Router from 'vue-router'
import Landing from '~/client/js/components/page/Landing'
import NotFound from '~/client/js/components/base/NotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Landing',
        component: Landing
    }, {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }]
})
