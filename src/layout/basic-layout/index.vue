<template>
  <main>
    <RouterView v-slot="{ Component, route }">
      <Component :is="Component" :key="route.fullPath" />
    </RouterView>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
