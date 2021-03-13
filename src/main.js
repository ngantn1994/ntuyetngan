import Vue from 'vue';
import VueDisqus from 'vue-disqus';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueDisqus, {
  shortname: 'ntngan',
});

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
