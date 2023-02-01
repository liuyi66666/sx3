import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
          import( '../views/Dashboard.vue')
      },
      {
        path: '/temjg',
        name: 'temjg',
        component: () =>
          import( '../views/temjg.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import( '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import( '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
