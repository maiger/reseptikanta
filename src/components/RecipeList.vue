<template>
  <section class="recipe-list-section">
    <ul>
      <RecipeListItem
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </ul>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

import RecipeListItem from "./RecipeListItem.vue";

const props = defineProps({
  recipes: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.recipe-list-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0 10rem 0;
  max-width: 180rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}
</style>
