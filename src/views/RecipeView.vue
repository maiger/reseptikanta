<template>
  <section class="recipe-section">
    <RecipeSearch :tags="tags" @searchSubmitted="handleSearchSubmitted" />
    <RecipeList :recipes="recipes" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRecipeStore } from "@/stores/recipes";

import RecipeSearch from "../components/RecipeSearch.vue";
import RecipeList from "../components/RecipeList.vue";

// Setup recipes
const recipeStore = useRecipeStore();
const recipes = ref([]);
const recipeData = recipeStore.getRecipes;
recipes.value = recipeData;

const tags = ref([]);

const handleSearchSubmitted = (searchTerm) => {
  recipes.value = recipeData.filter((recipe) => {
    if (
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.tags.includes(searchTerm)
    ) {
      return true;
    }
  });

  // Update tags
  getUniqueTags();
};

const getUniqueTags = () => {
  //Sort by count, only return top 5 results
  let uTags = [];
  recipes.value.forEach((recipe) => {
    recipe.tags.forEach((tag) => {
      // If tag already in uTags increment count, else add to array
      const targetTag = uTags.find((uTag) => uTag.name === tag);
      if (targetTag) {
        targetTag.count++;
      } else {
        uTags.push({ name: tag, count: 1 });
      }
    });
  });

  // Use top 6 count tags
  uTags.sort((a, b) => b.count - a.count);
  tags.value = uTags.slice(0, 6);
};

getUniqueTags();
</script>

<style lang="scss" scoped>
.recipe-section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
