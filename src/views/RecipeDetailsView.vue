<template>
  <section class="recipe-details-section">
    <div class="recipe-card">
      <div class="recipe-thumbnail">
        <img :src="'https://picsum.photos/' + recipe.img" />
        <h1>{{ recipe.title }}</h1>
      </div>
      <div class="recipe-stats">
        <div class="prep-time">
          <Icon class="icon" icon="mdi:clockwise" />
          <p>60min</p>
        </div>
        <div class="servings-container">
          <button class="remove-servings">
            <Icon class="icon" icon="mdi:minus" />
          </button>
          <h2 class="servings">4</h2>
          <button class="add-servings">
            <Icon class="icon" icon="mdi:plus" />
          </button>
        </div>
      </div>
      <div class="recipe-info">
        <RecipeIngredients :recipe="recipe" />
        <RecipeInstructions :recipe="recipe" />
      </div>
      <div class="tags">
        <div v-for="tag in recipe.tags">
          <span class="tag">{{ tag.toUpperCase() }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useRecipeStore } from "@/stores/recipes";
import { useRoute } from "vue-router";

import RecipeIngredients from "../components/RecipeIngredients.vue";
import RecipeInstructions from "../components/RecipeInstructions.vue";

// Get ID
const route = useRoute();
const recipeID = route.params.id;

// Get recipe
const recipeStore = useRecipeStore();
const recipe = recipeStore.getRecipeById(+recipeID);
</script>

<style lang="scss" scoped>
.recipe-details-section {
  display: flex;
  justify-content: center;
}

.recipe-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100rem;
  margin: 5rem 0;
  padding: 2rem;
}

.recipe-thumbnail {
  position: relative;
  display: flex;
  justify-content: center;
  height: 30rem;
  width: 60rem;
  background-color: var(--color-primary-1-dark);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 20px;
  box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    object-fit: cover;
    transform: translateY(-4rem);
    border-radius: 20px;
    box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.2);
  }

  h1 {
    position: absolute;
    text-align: center;
    bottom: 1rem;
    font-size: 6.4rem;
    color: var(--color-primary-1-light);
    text-shadow: -4px -4px 1px var(--color-secondary-1-dark),
      4px 4px 1px var(--color-secondary-1-dark-1);
  }
}

.recipe-stats {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 1rem 0;

  .prep-time,
  .servings-container {
    border-radius: 20px;
    box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.2);
    background-color: var(--color-primary-1-dark);
    margin: 0 1rem;
  }

  .prep-time {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-secondary-1-dark-1);
    padding: 0 2.5rem 0 1rem;

    .icon {
      height: 3rem;
      width: 5rem;
    }

    p {
      margin-left: -0.75rem;
      font-weight: var(--text-weight-semibold);
      letter-spacing: 0.5px;
    }
  }

  .servings-container {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      height: 4rem;
      width: 4rem;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 1rem;
      background-color: var(--color-secondary-1);
      cursor: pointer;
      border: 3px solid var(--color-secondary-1-dark-1);
      border: none;
      box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
      transition: all 0.2s ease-out;

      .icon {
        color: var(--color-secondary-1-dark-1);
        height: 80%;
        width: 80%;
      }
    }
  }
}

.recipe-info {
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
}

.tags {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.2);
  background-color: var(--color-primary-1-dark);
  padding: 1rem 2rem;

  .tag {
    margin: 0 0.25rem;
    padding: 0.5rem 1rem;
    letter-spacing: 1px;
    font-size: var(--text-para-size-small);
    color: var(--color-primary-1-light);
    background-color: var(--color-secondary-1-dark-1);
    border-radius: 20px;
    opacity: 0.9;
  }
}
</style>
