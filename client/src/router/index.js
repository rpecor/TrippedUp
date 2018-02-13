import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Destinations from '@/components/Places/Index'
import CreatePlace from '@/components/CreatePlace'
import ViewPlace from '@/components/ViewPlace'
import EditPlace from '@/components/EditPlace'
import Mission from '@/components/About/Mission'
import Team from '@/components/About/Team'

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
    },
    {
      path: '/Mission',
      name: 'Mission',
      component: Mission
    },
    {
      path: '/Team',
      name: 'Team',
      component: Team
    },
    {
      path: '*',
      redirect: 'root'
    }
  ]
})
