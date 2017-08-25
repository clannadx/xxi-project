import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import document from '@/components/document'
import user from '@/components/user'
import template from '@/components/template'
import sign from '@/views/sign'
Vue.use(VueRouter)

import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'
import template01 from '@/views/template01'
import template02 from '@/views/template02'
import slider from '@/views/slider'

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       component: about
//     }
//   ]
// })
let router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/user',
      component: user,
      children: [
        {
          path: '',  //   /是根据根路径的  相对于about 直接写study为了直接显示第一个将path写空
          name: 'User',
          component: hobby
        },
        {
          path: '/work',    //  /about/work  若不要中间的about 只需要把work改为/work 相对于根路径 但组件还是about下的子组件
          name: 'Work',
          component: work
        },
        {
          path: '/study',   // //路径不是嵌套的 但组件是嵌套的  由于用了blind name
          name: 'Study',
          component: study
        }
      ]
    },
    {
      path: '/work/template',
      component: template,
      children: [
        {
          path: '',  //   /是根据根路径的  相对于about 直接写study为了直接显示第一个将path写空
          name: 'Template',
          component: template01
        },
        {
          path: '/work/template02',   // //路径不是嵌套的 但组件是嵌套的  由于用了blind name
          name: 'Template02',
          component: template02
        }
      ]
    },
    {
      path: '/home',
 //   name: 'Home',  多写一个会重复命名的路线的定义
      component: home
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/work/sign',
      name: 'Sign',
      component: sign
    },
    {
      path: '/document',
      name: 'Document',
      components: {
        default: document,
        slider1: slider
      }
    },
    {
      path: '*',
      // 重定向
      redirect: {
        name: 'Home'
      }
    }
  ]
})

export default router
