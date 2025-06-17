import Vue from 'vue'
import Router from 'vue-router'
// Pages
import MainPage from '@/pages/MainPage.vue'

Vue.use(Router)

const routes = [
  { path: '/', component: MainPage, name: 'MainPage' }
]

export default new Router({
  mode: 'history',
  routes
})
