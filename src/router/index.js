import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Parent from '@/components/Parent'
import News from '@/components/News'
import Department from '@/components/Department'

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
      name: 'department',
      component: Department
    }
  ]
})
