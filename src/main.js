// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuelidate from 'vuelidate';
import { routes } from './routes';
import { store } from './store/store';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuelidate)

Vue.http.options.root = 'https://vuedb-92a60.firebaseio.com/';

Vue.directive('backgroundcolor', { 
    bind(el, binding, vnode) {
        el.style.backgroundColor = binding.value;
    }
});

Vue.directive('directest', {
    bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers['delayed']) {
            delay = 3000;
        }
        setTimeout(() => {
            if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value;
            }
        }, delay);
    }
});

Vue.directive('focus', {
    inserted: function (el) {
        el.focus();
    }
});

Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

// Vue.mixin({
//     created() {
//         console.log('Global Mixin - Created Hook');
//     }
// });

const router = new VueRouter({
    routes: routes, 
    mode: 'history',
    // scrollBehavior(to, from, savedPosition) {
    // if (savedPosition) {
    //     return savedPosition;
    // }
    // if (to.hash) {
    //     return { selector: to.hash };
    // }
    //     return { x: 0, y: 0};
    // }
});

// router.beforeEach((to, from, next) => {
//     console.log('global beforeEach');
//     next(); //it allow to continue the normal execution
//     //next(false); //it will abort
//     //next({}); //path to redirect
// });

export const eventBus = new Vue();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});