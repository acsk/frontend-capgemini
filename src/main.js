import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes'

import 'bootstrap/dist/css/bootstrap.min.css'


Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes


})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router

}).$mount('#app')