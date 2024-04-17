<template>
  <section class="recipe-section">
    <RecipeSearch
      :tags="tags"
      :searchTerm="initialSearchTerm"
      @searchSubmitted="handleSearchSubmitted"
    />
    <div class="recipe-sort">
      <button @click="sortRecipesAlphabetically()" class="alphabetical-sort">
        <Icon class="icon" icon="material-symbols:sort-by-alpha-rounded" />
      </button>
      <button @click="sortRecipesByPrepTime()" class="prepTime-sort">
        <Icon class="icon" icon="mdi:clockwise" />
      </button>
      <button @click="sortRecipesByFavorite()" class="prepTime-sort">
        <Icon class="icon" icon="material-symbols:favorite-outline" />
      </button>
    </div>
    <RecipeList :recipes="recipes" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRecipeStore } from "@/stores/recipes";
import { Icon } from "@iconify/vue";

import RecipeSearch from "../components/RecipeSearch.vue";
import RecipeList from "../components/RecipeList.vue";

// Setup recipes
const recipeStore = useRecipeStore();
const recipes = ref([]);
const recipeData = recipeStore.getRecipes;
recipes.value = recipeData;

const tags = ref([]);
const initialSearchTerm = recipeStore.getSearchTerm;

const sorting = {
  alphabetical: {
    active: true,
    order: "az",
  },
  prepTime: {
    active: false,
    order: "ascending",
  },
};

const handleSearchSubmitted = (searchTerm) => {
  recipeStore.setSearchTerm(searchTerm);
  filterRecipes(searchTerm);

  // Update tags
  getUniqueTags();
};

const filterRecipes = (searchTerm) => {
  recipes.value = recipeData.filter((recipe) => {
    if (
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.tags.includes(searchTerm)
    ) {
      return true;
    }
  });
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

const sortRecipesAlphabetically = (reverse = false) => {
  recipes.value.sort((a, b) => {
    return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
  });

  if (reverse) recipes.value.reverse();
};

const sortRecipesByPrepTime = (reverse = false) => {
  recipes.value.sort((a, b) => {
    return a.prepTime - b.prepTime;
  });

  if (reverse) recipes.value.reverse();
};

const sortRecipesByFavorite = () => {
  recipes.value.sort((a, b) => {
    return (
      recipeStore.getFavoriteById(b.id) - recipeStore.getFavoriteById(a.id)
    );
  });
};

filterRecipes(initialSearchTerm);
getUniqueTags();
sortRecipesAlphabetically(false);
</script>

<style lang="scss" scoped>
.recipe-section {
  @include flex-column-center;

  height: 100%;
}

.recipe-sort {
  display: flex;

  button {
    @include flex-row-center;
    @include base-button;

    margin: 0 0.5rem;
    padding: 0.7rem 0.7rem;
  }
}
</style>
