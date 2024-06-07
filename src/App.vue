<template>
  <Header />
  <router-view class="main-content" v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

<script setup>
import { RouterView } from "vue-router";
import { Header, Footer } from "./components";
import { onMounted } from "vue";

import { setupRecipeStore } from "./stores/setupRecipeStore";

onMounted(() => {
  setupRecipeStore();
});
</script>

<style lang="scss" scoped>
.main-content {
  // Take the whole height minus header and footer heights
  min-height: calc(100vh - 7rem - 10rem);
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from {
  opacity: 0;
  transform: scale(1.05);
}

.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
