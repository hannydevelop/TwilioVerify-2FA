import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(bootstrap)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
