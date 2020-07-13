import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Shopcart = () => import('views/shopcart/Shopcart')
const Details = () => import('views/details/Details')


const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component:Shopcart
  },
  {
    path: '/details/:iid',
    component: Details
  }
]

export default new Router({
  routes,
  mode: 'history'
})
