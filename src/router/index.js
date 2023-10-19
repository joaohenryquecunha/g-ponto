import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cadastro',
    name: 'cadastro',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: loginView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
