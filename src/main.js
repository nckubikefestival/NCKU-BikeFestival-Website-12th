// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VShowSlide from 'v-show-slide'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(VueAxios, axios)

Vue.use(VShowSlide, {
  customEasing: {
    exampleEasing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
