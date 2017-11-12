var Vue = require('vue');

import VueRouter from 'vue-router';
var myHome = () => {
    return require('./components/home/home.js')(Vue);
}

var myAbout = () => {
    return require('./components/about/about.js')(Vue);
}
console.log(myHome);
Vue.use(VueRouter);
const routes = [
    { path: '/home', component: myHome() },
    { path:'/about',component:myAbout()}

]
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

const app = new Vue({
    router
}).$mount('#app')



















