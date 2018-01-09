import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueHighcharts from 'vue-highcharts'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueHighcharts)

new Vue({
  el: '#app',
  render: h => h(App)
})
