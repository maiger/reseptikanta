<template>
  <section class="recipe-section">
    <RecipeSearch :tags="tags" @searchSubmitted="handleSearchSubmitted" />
    <div class="recipe-sort">
      <div @click="sortRecipesAlphabetically()" class="alphabetical-sort">
        <Icon class="icon" icon="material-symbols:sort-by-alpha-rounded" />
      </div>
      <div @click="sortRecipesByPrepTime()" class="prepTime-sort">
        <Icon class="icon" icon="mdi:clockwise" />
      </div>
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

getUniqueTags();
sortRecipesAlphabetically(false);
</script>

<style lang="scss" scoped>
.recipe-section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.recipe-sort {
  display: flex;

  .alphabetical-sort,
  .prepTime-sort {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.5rem;
    padding: 0.7rem 0.7rem;
    background-color: var(--color-secondary-1);
    border-radius: 50px;
    opacity: 0.9;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-out;
    cursor: pointer;

    .icon {
      color: var(--color-secondary-1-dark-1);
      width: 3.2rem;
      height: 3.2rem;
    }

    &:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: translateY(1px) scale(0.95);
      box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
