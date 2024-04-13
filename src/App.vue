<script setup>
import { useRecipeStore } from "@/stores/recipes";
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import recipeData from "./assets/recipes.json";

// Load recipes
const recipeStore = useRecipeStore();
recipeStore.setRecipes(recipeData);

const favorites = localStorage.favorites;
if (favorites) {
  recipeStore.setFavorites(JSON.parse(favorites));
}
</script>

<template>
  <Header />
  <router-view class="main-content" v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

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
