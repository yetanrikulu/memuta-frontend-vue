import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Routes from "@/routes/routes";
import vuetify from './plugins/vuetify'
import store from "@/store";

Vue.config.productionTip = false

Vue.use(Router);

const router = new Router({
    routes: Routes,
    mode: 'history'
});


new Vue({
    vuetify,
    store,
    router: router,
    render: h => h(App),
}).$mount('#app')
