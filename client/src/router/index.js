import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Destinations from '@/components/Destinations'
import CreatePlace from '@/components/CreatePlace'
import ViewPlace from '@/components/ViewPlace'
import EditPlace from '@/components/EditPlace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Hello
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/destinations',
      name: 'destinations',
      component: Destinations
    },
    {
      path: '/destinations/create',
      name: 'places-create',
      component: CreatePlace
    },
    {
      path: '/destinations/:placeId',
      name: 'place',
      component: ViewPlace
    },
    {
      path: '/destinations/:placeId/edit',
      name: 'place-edit',
      component: EditPlace
    }
  ]
})
