import Vue from 'vue'
import App from '@/App'
import vClickOutside from 'v-click-outside-x'
// Router
import router from '@/router/router'
// Store
import store from '@/store'
// Utils
import globalComponents from '@/utils/globalComponents'
// Styles
import '@/assets/css/main.scss'
// Libraries
globalComponents.forEach(component => {
  Vue.component(component.name, component.component)
})

Vue.use(vClickOutside)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
