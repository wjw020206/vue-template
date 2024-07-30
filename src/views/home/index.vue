<template>
  <div class="home-page">
    <h2>{{ count }}</h2>
    <ElButton type="primary" @click="addCount">点击我增加数字</ElButton>
    <h2>{{ pagePath }}</h2>
    <ElButton type="primary" @click="showCurrentPagePath"
      >点击我获取当前页面路径</ElButton
    >
  </div>
</template>

<script setup>
import useGetRouterInfo from '@/composables/router-info';
import { useCounterStore } from '@/store/modules/counter';

const counterStore = useCounterStore();

const { count, addCount } = storeToRefs(counterStore);

const { useRoute } = useGetRouterInfo();

const pagePath = ref(null);

const showCurrentPagePath = () => {
  const route = useRoute();
  pagePath.value = route.path;
};
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
