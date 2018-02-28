// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import common from '../static/js/common'

Vue.config.productionTip = false

Vue.use(common);
// window.nameClass = 'up';

var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
