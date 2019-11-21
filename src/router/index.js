import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ok from '../views/ok.vue'
import Disponibilidad from '../views/Disponibilidad.vue'
import Habitaciones from '../views/Habitaciones.vue'
import verreservas from '../views/verreservas.vue'
import calendario from '../views/calendario.vue'
import Confirmation from '../views/Confirmation.vue'
import VCalendar from 'v-calendar';
//import 'v-calendar/lib/v-calendar.min.css';

Vue.use(VueRouter)
Vue.use(VCalendar, {
  firstDayOfWeek: 2,  // Monday
  locale: "es",
  showLinkedButtons: true,
  popoverVisibility: 'focus'

})
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/habitaciones',
    name: 'Habitaciones',
    component: Habitaciones
  },
  {
    path: '/disponibilidad',
    name: 'Disponibilidad',
    component: Disponibilidad
  },
  {
    path: '/ok',
    name: 'ok',
    component: ok
  },
  {
    path: '/verreservas',
    name: 'verreservas',
    component: verreservas
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: Confirmation
  },

  {
    path: '/calendario',
    name: 'calendario',
    component: calendario
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
