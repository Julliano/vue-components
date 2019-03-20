import Vue from 'vue';
import App from './App.vue';
import BCShowcase from './BCShowcase.vue';
import VueRouter from 'vue-router';
import VueTheMask from 'vue-the-mask';
import VueI18n from 'vue-i18n';

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(VueTheMask);

const messagesPt = require('.//i18n/pt_br.js');
const messagesEs = require('.//i18n/es.js');
const i18n = new VueI18n({
    locale: 'pt_br',
    fallbackLocale: 'pt_br',
    messages: { pt_br: messagesPt, es: messagesEs }
});

const routes = [
    {path: '/', component: App},
    {path: '/bc', component: BCShowcase}
];
const router = new VueRouter({
    routes
});

new Vue({
    router,
    i18n,
    template: '<router-view/>'
}).$mount('#app');
