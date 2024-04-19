<template>
  <section class="recipe-section">
    <RecipeSearch
      :tags="tags"
      :searchTerm="initialSearchTerm"
      @searchSubmitted="handleSearchSubmitted"
    />
    <RecipeSort @sortSubmitted="onSortClicked" />
    <RecipeList :recipes="recipes" />
    <Pagination
      :currentPage="currentPage"
      :pageCount="pageCount"
      @pageChangeSubmitted="onPageChange"
    ></Pagination>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRecipeStore } from "@/stores/recipes";

import RecipeSearch from "../components/RecipeSearch.vue";
import RecipeSort from "../components/RecipeSort.vue";
import RecipeList from "../components/RecipeList.vue";
import Pagination from "../components/Pagination.vue";

// Setup recipes
const recipeStore = useRecipeStore();
const recipes = ref([]);
const recipeData = recipeStore.getRecipes;
recipes.value = recipeData;
let filteredRecipes = recipeData;

// Tags
const tags = ref([]);

// Search and Sorting
const initialSearchTerm = recipeStore.getSearchTerm;
const initialSorting = recipeStore.getSorting;

// Pages
// TODO: Make properly reactive so no need to manually update
const pageCount = ref();
// const pageCount = computed(() => {
//   return Math.ceil(filteredRecipes.length / recipeStore.getPerPage);
// });

const updatePageCount = () => {
  pageCount.value = Math.ceil(filteredRecipes.length / recipeStore.getPerPage);
};

const currentPage = computed(() => {
  return recipeStore.getPage;
});

// Search / Sort / Pagination submit handlers
const handleSearchSubmitted = (searchTerm) => {
  filterRecipes(searchTerm);
  updateRecipeList(recipeStore.getSorting);
  recipeStore.setSearchTerm(searchTerm);
};

const onSortClicked = (sortType) => {
  updateRecipeList(sortType);
};

const onPageChange = (direction) => {
  if (direction === "previous") {
    recipeStore.setPage(currentPage.value - 1);
  } else if (direction === "next") {
    recipeStore.setPage(currentPage.value + 1);
  } else {
    console.error("onPageChange: Incorrect direction:", direction);
  }

  sliceRecipesForPage();
};

const updateRecipeList = (sortType) => {
  recipeStore.setPage(1);
  sortRecipes(sortType);
  sliceRecipesForPage();
  updatePageCount();
};

// Filter
const filterRecipes = (searchTerm) => {
  filteredRecipes = recipeData.filter((recipe) => {
    if (
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.tags.includes(searchTerm)
    ) {
      return true;
    }
  });
};

// Tags
const getUniqueTags = () => {
  //Sort by count, only return top 5 results
  let uTags = [];
  recipeData.forEach((recipe) => {
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

// Sorting functions
const sortRecipesAlphabetically = (reverse = false) => {
  recipeStore.setSorting("alphabetical");
  filteredRecipes.sort((a, b) => {
    return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
  });

  if (reverse) filteredRecipes.reverse();
};

const sortRecipesByPrepTime = (reverse = false) => {
  recipeStore.setSorting("prepTime");
  filteredRecipes.sort((a, b) => {
    return a.prepTime - b.prepTime;
  });

  if (reverse) filteredRecipes.reverse();
};

const sortRecipesByFavorite = () => {
  recipeStore.setSorting("favorite");
  filteredRecipes.sort((a, b) => {
    return (
      recipeStore.getFavoriteById(b.id) - recipeStore.getFavoriteById(a.id)
    );
  });
};

const sortRecipes = (sortType) => {
  switch (sortType) {
    case "alphabetical":
      sortRecipesAlphabetically(false);
      break;
    case "prepTime":
      sortRecipesByPrepTime(false);
      break;
    case "favorite":
      sortRecipesByFavorite(false);
      break;
    default:
      sortRecipesAlphabetically(false);
      break;
  }
};

// Pagination functions
const sliceRecipesForPage = () => {
  const currPage = recipeStore.getPage;
  const perPage = recipeStore.perPage;
  recipes.value = filteredRecipes.slice(
    (currPage - 1) * perPage,
    currPage * perPage
  );
};

// Run initialization functions
filterRecipes(initialSearchTerm);
sortRecipes(initialSorting);
sliceRecipesForPage();
updatePageCount();

getUniqueTags();
</script>

<style lang="scss" scoped>
.recipe-section {
  @include flex-column-center;

  height: 100%;
}
</style>
