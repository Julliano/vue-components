import Vue from 'vue';
import App from './App.vue';
import ChatShowcase from './ChatShowcase.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: App},
    {path: '/chat', component: ChatShowcase}
];
const router = new VueRouter({
    routes
});

new Vue({
    router,
    template: '<router-view/>'
}).$mount('#app');
