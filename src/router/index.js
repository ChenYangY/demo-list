import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import AbsoluteRightList from '@/components/AbsoluteRightList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AbsoluteRightList',
      component: AbsoluteRightList
    }
  ]
})
