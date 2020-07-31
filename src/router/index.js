import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Calendar from '../views/Calendar.vue'
import Planning from '../views/Planning.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Anasayfa',
    icon: 'dashboard',
    component: Home,
  },
  {
    path: '/calendar',
    name: 'Takvim',
    icon: 'event',
    component: Calendar,
  },
  {
    path: '/planning',
    name: 'Planlayıcı',
    icon: 'settings',
    component: Planning,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
