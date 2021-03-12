import Vue from 'vue';
import VueDisqus from 'vue-disqus';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueDisqus, {
  shortname: 'ntngan',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
