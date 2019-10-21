import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      component: () => import('@/views/Home/Home')
    },
    {
      path: '/category',
      component: () => import('@/views/Category/Category.vue')
    },
    {
      path: '/shopcart',
      component: () => import('@/views/ShopCart/ShopCart.vue')
    },
    {
      path: '/profile',
      component: () => import('@/views/Profile/Profile.vue')
    }

  ]
})