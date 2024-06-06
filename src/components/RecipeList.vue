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

import { RecipeListItem } from "@/components";

const props = defineProps({
  recipes: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.recipe-list-section {
  @include flex-column-center;

  margin: 2rem 0 5rem 0;
  max-width: 180rem;

  ul {
    @include flex-row-center;
    flex-wrap: wrap;
  }
}
</style>
