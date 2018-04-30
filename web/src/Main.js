import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './Route'
import app from './App.vue'
import store from './Store'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
})

const _vm_ = new Vue({
    el: '#app',
    router,
    store,
    render: (createElement) => {
        return createElement(app)
    }
})