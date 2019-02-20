import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/pages/main.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: main,
      children:  [{
        path: 'order',
        name: '订单管理',
        redirect:'/order/ship',
        component: () => import('@/pages/order/index'),
        children: [
          {
            name:'待发货',
            path:'ship',
            component: () => import('@/components/OrderTable.vue')
          },
          {
            name:'已发货',
            path:'shipped',
            component: () => import('@/components/OrderTable.vue')
          },
          {
            name:'已完成',
            path:'complete',
            component: () => import('@/components/OrderTable.vue')
          }
        ]
      }]
    },
    {
      path:'/',
      component: main,
      children: [
        {
          path:'category',
          name:'品类管理',
          component: () => import('@/pages/category/index')
        }
      ]
    },
    {
      path:'/',
      component: main,
      children: [
        {
          path:'brand',
          name:'品牌管理',
          component: () => import('@/pages/brand/index')
        }
      ]
    },
    {
      path:'/',
      component: main,
      children: [
        {
          path:'shops',
          name:'商品管理',
          component: () => import('@/pages/shops/index')
        }
      ]
    },
    {
      path:'/',
      component: main,
      children: [
        {
          path:'push',
          name:'推送管理',
          component: () => import('@/pages/push/index')
        }
      ]
    },
    {
      path:'/',
      component: main,
      children: [
        {
          path:'sale',
          name:'售后管理',
          component: () => import('@/pages/sale/index')
        }
      ]
    }
  ]
})