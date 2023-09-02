import { createWebHistory } from 'vue-router';
import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/Home.vue';
import RegisterForm from './components/Register.vue';
import LoginForm from './components/Login.vue';

Vue.use(Router);

export default new Router({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/login', component: LoginForm },
        { path: '/register', component: RegisterForm }
    ]
});