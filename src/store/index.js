import Vue from 'vue';
import { PiniaVuePlugin, createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { useCounterStore } from './modules/counter';

Vue.use(PiniaVuePlugin);

const pinia = createPinia();

// 挂在pinia持久化插件
pinia.use(piniaPluginPersistedstate);

useCounterStore(pinia);

export default pinia;
