import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Parent from '@/components/Parent'
import News from '@/components/News'
import Department from '@/components/Department'
import Activity from '@/components/Activity'
import APP from '@/components/APP'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/department',
      name: 'Department',
      component: Department
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity,
      beforeEnter: function (to, from, next) {
        alert('敬請期待')
        next(false)
      }
    },
    {
      path: '/app',
      name: 'APP',
      component: APP,
      beforeEnter: function (to, from, next) {
        alert('敬請期待')
        next(false)
      }
    }
  ]
})
