<script setup>
import { useRecipeStore } from "@/stores/recipes";
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import recipeData from "./assets/recipes.json";

// Load recipes
const recipeStore = useRecipeStore();
recipeStore.setRecipes(recipeData);
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style lang="scss" scoped></style>
