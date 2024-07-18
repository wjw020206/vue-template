import Vue from 'vue';
import { PiniaVuePlugin, createPinia } from 'pinia';

import { useCounterStore } from './modules/counter';

Vue.use(PiniaVuePlugin);

export default function setupPinia(router) {
  const pinia = createPinia();

  useCounterStore(pinia);

  pinia.use(({ store }) => {
    store.router = markRaw(router);
  });

  return pinia;
}
