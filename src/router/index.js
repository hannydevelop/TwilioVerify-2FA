import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Error from '@/components/Error'
import Verify from '@/components/Verify'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
        path: '/',
        name: 'Register',
        component: Register
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/Error',
        name: 'Error',
        component: Error
    },
    {
      path: '/Verify',
      name: 'Verify',
      component: Verify
  }
  ]
})
