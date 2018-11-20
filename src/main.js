import Vue from 'vue'
import App from './App.vue'
import aaa from './index'
Vue.config.productionTip = false

Vue.use(aaa)

new Vue({
  render: h => h(App),
}).$mount('#app')
