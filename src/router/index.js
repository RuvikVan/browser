import Vue from 'vue'
import Router from 'vue-router'
import Block from '../components/blockchain/block'
import Home from '../components/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/block',
      name: 'Block',
      component: Block
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
