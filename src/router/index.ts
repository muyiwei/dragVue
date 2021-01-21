import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import MyInstance from '../views/processCenter/MyInstance.vue'
import MyUnfinishedWorkItem from '../views/processCenter/MyUnfinishedWorkItem.vue'
import MyWorkflow from '../views/processCenter/MyWorkflow.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'login',
  //   component: Login
  // },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children:[
      {
       
        path: 'MyInstance',
        component: MyInstance
      },
      {
       
        path: 'MyUnfinishedWorkItem',
        component: MyUnfinishedWorkItem
      },
      {
       
        path: 'MyWorkflow',
        component: MyWorkflow
      },
      
    ]
  },
  {
    path: "/login1",
    name: "login2",
    scrollBehavior (to:any, from:any, savedPosition:any) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    component: () => import(/* webpackChunkName: "login1" */'../components/control/inputText.vue')
  }
  ,
  {
    path: "/login",
    name: "login",
    scrollBehavior (to:any, from:any, savedPosition:any) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    component: () => import(/* webpackChunkName: "input1" */'../views/Login.vue')
  }
  ,
  {
    path: "/designer",
    name: "designer",
    component: () => import(/* webpackChunkName: "designer" */'../views/Designer.vue')
  },
  {
    path: "/girdLayout",
    name: "gridLayout",
    component: () => import(/*webpackChunkName: 'girdLayout'*/'../views/GridLayout.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
