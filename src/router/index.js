import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/epidemic/index',
      children: [{
        path: 'epidemic/index',
        name: 'Epidemic',
        component: () => import('@/views/Epidemic/index')
      }]
    },
    {
      path: '/crime',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/Crime/index'),
          name: 'Crime'
        }
      ]
    },
    {
      path: '/traffic',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'Traffic',
          component: () => import('@/views/Traffic/index')
        }
      ]
    },
    {
      path: '/floyd',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'Floyd',
          component: () => import('@/views/Floyd/index')
        }
      ]
    }
  ]
})
