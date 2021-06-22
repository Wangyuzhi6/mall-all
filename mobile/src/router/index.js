import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'pages/home'
import Category from 'pages/category'
import Cart from 'pages/cart'
import User from 'pages/user'
import Search from 'pages/search'



Vue.use(VueRouter)

const routes = [
  { path: '/home',component: Home },
  { path: '/category',component: Category },
  { path: '/cart',component: Cart },
  { path: '/user',component: User },
  { path: '/search',component: Search },


  { path: '/',redirect:'/home' },

]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
