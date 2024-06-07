<template>
  <div class="ingredients">
    <h2>Ainesosat</h2>
    <ul v-for="collection in ingredients" class="ingredient-section">
      <p class="collection" v-if="ingredients.length > 1">
        {{ collection.collectionName }}
      </p>
      <li
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
      </li>
    </ul>
  </div>
</template>

<script setup>
import fracty from "fracty";

import { defineProps, computed } from "vue";

const props = defineProps({
  ingredients: {
    type: Array,
    required: true,
  },
  recipeServings: {
    type: Number,
    required: true,
  },
  // recipe: {
  //   type: Object,
  //   required: true,
  // },
  servings: {
    type: Number,
    required: true,
  },
});

const computedServings = computed(() => {
  if (props.servings < 1) {
    return 1 / props.recipeServings;
  } else {
    return props.servings / props.recipeServings;
  }
});

const toggleComplete = (e) => {
  e.target.closest(".ingredient").classList.toggle("step-complete");
};
</script>

<style lang="scss" scoped>
.ingredients {
  @include base-panel;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 1rem;
  padding: 3rem 0 1rem 2rem;

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
    @include flex-row-center;

    margin: 0.5rem 0;
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
  }
}
</style>
