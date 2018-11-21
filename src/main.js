import Vue from 'vue'
import App from './App.vue'
import Xtree from '../package/index'
Vue.config.productionTip = false

Vue.use(Xtree)

new Vue({
  render: h => h(App),
}).$mount('#app')
