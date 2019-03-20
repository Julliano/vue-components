import Vue from 'vue';
import App from './App.vue';
import BCShowcase from './BCShowcase.vue';
import VueRouter from 'vue-router';
import VueTheMask from 'vue-the-mask';
import store from './store';

Vue.use(VueRouter);
Vue.use(VueTheMask);

const routes = [
    {path: '/', component: App},
    {path: '/bc', component: BCShowcase}
];
const router = new VueRouter({
    routes
});

new Vue({
    router,
    store,
    template: '<router-view/>'
}).$mount('#app');
