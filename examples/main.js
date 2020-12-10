import Vue from 'vue'
import App from './App.vue'

import ImageDangling from '../src'
Vue.component('image-dangling', ImageDangling)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
