import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'

import add from '../components/add.vue'
import edit from '../components/edit.vue'



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: login,
    component:login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'add',
        name: 'add',
        component: add
      },
      {
        path: 'edit',
        name: 'edit',
        component: edit
      }
    ]
  },
  // {
  //   path: '/fabu',
  //   name: 'fabu',
  //   component: fabu,
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
