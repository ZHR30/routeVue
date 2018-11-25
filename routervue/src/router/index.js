import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/containers/index'
import Shop from '@/containers/shop'
import Life from '@/containers/life'
import A from '@/containers/SubPage/A'
import B from '@/containers/SubPage/B'
import C from '@/containers/SubPage/C'


import NotFound from '@/containers/notfound'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      redirect:'/index/a',
      children:[
        {
          path:'a',
          component:A
        },
        {
          path:'b',
          component:B
        },
        {
          path:'c/:id',
          name:'C',
          component:C
        }
      ]
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/life',
      name: 'Life',
      component: Life
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
