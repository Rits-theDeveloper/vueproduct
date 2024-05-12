import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/LoginForm.vue'
import ProductCRUD from '../views/ProductCRUD.vue'
import ProductList from '../views/ProductList.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/product',
    name: 'ProductCRUD',
    component: ProductCRUD,
    meta: { requiresAuth: true }
  },
  {
    path: '/product-list',
    name: 'ProductList',
    component: ProductList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
