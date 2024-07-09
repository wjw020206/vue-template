<script setup></script>

<template>
  <main>
    <RouterView v-slot="{ Component, route }">
      <Component :is="Component" :key="route.fullPath" />
    </RouterView>
  </main>
</template>

<style lang="scss" scoped></style>
