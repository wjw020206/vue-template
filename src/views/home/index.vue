<template>
  <div class="home-page">
    <h2>{{ count }}</h2>
    <ElButton type="primary" @click="addCount">点击我增加数字</ElButton>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/modules/counter';

const counterStore = useCounterStore();

const { count, addCount } = storeToRefs(counterStore);
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
