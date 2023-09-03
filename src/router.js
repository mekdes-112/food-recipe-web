import { createWebHistory, createRouter } from 'vue-router';
import HomePage from './components/Home.vue';
import RegisterForm from './components/Register.vue';
import LoginForm from './components/Login.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginForm },
  { path: '/register', component: RegisterForm }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;