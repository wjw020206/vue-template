import Vue from 'vue';
import App from './App.vue';
import router from './router';
import setupPinia from './store';
import './plugins/assets';
import ElementUI from 'element-ui';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  store: setupPinia(router),
  router,
  render: (h) => h(App),
}).$mount('#app');
