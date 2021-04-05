import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy, {defaultIconPack: 'mdi',})

//aos
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
