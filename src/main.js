import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import i18n from './i18n'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
