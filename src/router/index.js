import { createRouter, createWebHistory } from 'vue-router';
import UserList from '../views/UserList.vue';
import UserForm from '../views/UserForm.vue';

const routes = [
    { path: '/', name: "UserList", component: UserList },
    { path: '/create', name: "CreateUser", component: UserForm },
    { path: '/edit/:id', name: "EditUser", component: UserForm },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
