import Vue from 'vue';
import { PiniaVuePlugin, createPinia } from 'pinia';

import { useCounterStore } from './modules/counter';

Vue.use(PiniaVuePlugin);

const pinia = createPinia();

useCounterStore(pinia);

export default pinia;
