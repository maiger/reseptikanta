<template>
  <div class="ingredients">
    <h2>Ainesosat</h2>
    <div v-for="collection in recipe.ingredients" class="ingredient-section">
      <p class="collection" v-if="recipe.ingredients.length > 1">
        {{ collection.collectionName }}
      </p>
      <div
        @click="toggleComplete"
        v-for="(ingredient, index) in collection.collectionIngredients"
        class="ingredient"
      >
        <div class="name">{{ ingredient.name }}</div>
        <div>&nbsp;|&nbsp;</div>
        <div class="amount">
          {{ fracty(ingredient.amount * computedServings) }}
          {{ ingredient.unit }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import fracty from "fracty";

import { defineProps, computed } from "vue";

const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
  servings: {
    type: Number,
    required: true,
  },
});

const computedServings = computed(() => {
  return props.servings / props.recipe.servings;
});

const toggleComplete = (e) => {
  e.target.closest(".ingredient").classList.toggle("step-complete");
};
</script>

<style lang="scss" scoped>
.ingredients {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 1rem;
  padding: 3rem 0 1rem 2rem;

  border-radius: 20px;
  box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.2);
  background-color: var(--color-primary-1-dark);

  .collection {
    text-align: center;
    font-weight: var(--text-weight-semibold);
    margin-top: 2rem;
  }

  .step-complete {
    text-decoration: line-through;
    opacity: 0.75;
  }

  .ingredient {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .name {
      flex: 2;
      text-align: end;
    }

    .amount {
      flex: 1;
      font-weight: var(--text-weight-semibold);
      white-space: nowrap;
    }
  }
}

@media only screen and (max-width: 750px) {
  .ingredients {
    padding: 2rem 2rem;
    // width: 90vw;
    // max-width: 50rem;
  }
}
</style>
