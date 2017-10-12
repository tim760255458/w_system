import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require.ensure([], () => resolve(require('components/login')), 'Login')
const Layout = resolve => require.ensure([], () => resolve(require('components/Layout')), 'Layout')
const ReadMe = resolve => require.ensure([], () => resolve(require('views/ReadMe')), 'ReadMe')
const WTable = resolve => require.ensure([], () => resolve(require('views/WTable')), 'WTable')
const Edit = resolve => require.ensure([], () => resolve(require('views/edit')), 'Edit')
const WChart = resolve => require.ensure([], () => resolve(require('views/WChart')), 'WChart')
const Upload = resolve => require.ensure([], () => resolve(require('views/Upload')), 'Upload')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      component: Layout,
      children: [{
        path: '',
        name: 'Index',
        component: ReadMe
      }]
    },
    {
      path: '/table',
      component: Layout,
      children: [{
        path: '1',
        name: 'WTable',
        component: WTable
      }]
    },
    {
      path: '/edit',
      component: Layout,
      children: [{
        path: '1',
        name: 'Edit',
        component: Edit
      }]
    },
    {
      path: '/chart',
      component: Layout,
      children: [{
        path: '1',
        name: 'WChart',
        component: WChart
      }]
    },
    {
      path: '/upload',
      component: Layout,
      children: [{
        path: '1',
        name: 'Upload',
        component: Upload
      }]
    }
  ]
})
