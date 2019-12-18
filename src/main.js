import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueModuleLoader from 'vue-module-loader'
import localModule from './module'
Vue.use(vueModuleLoader, { store })
const app = new Vue({
  router,
  store,
  render: h => h(App)
})
app.$moduleLoader(localModule)
app.$mount('#app')
