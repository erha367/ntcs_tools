import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import qs from 'qs';
import axios from 'axios';

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ntcs from "./components/ntcs";
import pullBiz from "./components/NtcsForms/pullBiz";
import phoneList from "./components/NtcsForms/phoneList";
import userInfo from "./components/NtcsForms/userInfo";
import ntsApi from "./components/NtcsForms/ntsApi";
import bindPhone from "./components/NtcsForms/bindPhone";
import unbindPhone from "./components/NtcsForms/unbindPhone";
import jiami from "./components/NtcsForms/jiami";
import bjUnbind from "./components/NtcsForms/bjUnbind";
import clearUserStatus from "./components/NtcsForms/clearUserStatus";
import liFangTong from "./components/NtcsForms/liFangTong";

const routes = [
    {
        path: '/ntcs', component: ntcs, children: [
            {path: 'pullBiz', component: pullBiz},
            {path: 'phoneList', component: phoneList},
            {path: 'userInfo', component: userInfo},
            {path: 'ntsApi', component: ntsApi},
            {path: 'bindPhone', component: bindPhone},
            {path: 'unbindPhone', component: unbindPhone},
            {path: 'jiami', component: jiami},
            {path: 'bjUnbind', component: bjUnbind},
            {path: 'clearUserStatus', component: clearUserStatus},
            {path: 'liFangTong', component: liFangTong},
        ]
    },
    {path:'*',redirect:'/ntcs/pullBiz'},
]
const router = new VueRouter({
    //mode:'history', //默认是hash模式
    routes
})

Vue.use(ElementUI);
Vue.prototype.$qs = qs
Vue.prototype.$axios = axios
Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
