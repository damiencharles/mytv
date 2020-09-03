import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Show from '../views/Show.vue'
import Episodes from '../views/Episodes.vue'
import Acteurs from '../views/Acteurs.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/show/:id' ,
    name: 'Show',
    component: Show
  },
  {
    path: '/show/:id/episodes' ,
    name: 'Episodes',
    component: Episodes
  },
  {
    path: '/people/:id' ,
    name: 'Acteurs',
    component: Acteurs
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
