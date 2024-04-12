<template>
  <section class="recipe-details-section">
    <div class="recipe-card">
      <div class="recipe-thumbnail">
        <img :src="`${BASE_IMAGE_PATH + recipe.img}`" :alt="recipe.title" />
        <h1>{{ recipe.title }}</h1>
      </div>
      <div class="recipe-stats">
        <div class="prep-time">
          <Icon class="icon" icon="mdi:clockwise" />
          <p>{{ recipe.prepTime }}</p>
        </div>
        <div class="servings-container">
          <button
            @click="removeServings"
            class="remove-servings"
            aria-label="remove servings"
          >
            <Icon class="icon" icon="mdi:minus" />
          </button>
          <h2 class="servings">{{ servings }}</h2>
          <button
            @click="addServings"
            class="add-servings"
            aria-label="add servings"
          >
            <Icon class="icon" icon="mdi:plus" />
          </button>
        </div>
      </div>
      <div class="recipe-info">
        <RecipeIngredients
          class="ingredients"
          :recipe="recipe"
          :servings="servings"
        />
        <RecipeInstructions class="instructions" :recipe="recipe" />
      </div>
      <ul class="tags">
        <li v-for="tag in recipe.tags">
          <span class="tag">{{ tag.toUpperCase() }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useRecipeStore } from "@/stores/recipes";
import { useRoute } from "vue-router";
import { ref } from "vue";

import RecipeIngredients from "../components/RecipeIngredients.vue";
import RecipeInstructions from "../components/RecipeInstructions.vue";

import { BASE_IMAGE_PATH } from "@/assets/config.js";

// Get ID
const route = useRoute();
const recipeID = route.params.id;

// Get recipe
const recipeStore = useRecipeStore();
const recipe = recipeStore.getRecipeById(+recipeID);

let servings = ref(recipe.servings);

const addServings = () => {
  servings.value++;
};

const removeServings = () => {
  if (servings.value <= 1) return;
  servings.value--;
};
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
  margin: 5rem 0 5rem 0;
  padding: 2rem;
}

.recipe-thumbnail {
  @include base-panel;

  position: relative;
  display: flex;
  justify-content: center;
  height: 30rem;
  max-width: 64rem;
  padding: 1rem;
  margin-bottom: 1rem;

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
    line-height: 1.2;
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
    @include base-panel;

    margin: 0 1rem;
  }

  .prep-time {
    @include flex-row-center;

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
    @include flex-row-center;

    button {
      @include flex-row-center;
      @include base-button;

      margin: 1rem 1rem;
    }
  }
}

.recipe-info {
  display: flex;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 2rem;

  .ingredients {
    flex: 2;
  }

  .instructions {
    flex: 4;
  }
}

.tags {
  @include base-panel;
  @include flex-row-center;

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
@media only screen and (max-width: 750px) {
  .recipe-card {
    .recipe-thumbnail {
      h1 {
        font-size: 4.4rem;
        bottom: 2rem;
      }
    }
  }

  .recipe-info {
    flex-direction: column;
    align-items: center;
  }
}

@media only screen and (max-width: 580px) {
  .recipe-card {
    .recipe-thumbnail {
      h1 {
        font-size: 3rem;
        bottom: 3rem;
      }
    }
  }
}
</style>
