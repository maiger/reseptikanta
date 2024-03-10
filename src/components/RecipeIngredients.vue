<template>
  <div class="ingredients">
    <h2>Ainesosat</h2>
    <div v-for="(ingredient, index) in recipe.ingredients" class="ingredient">
      {{ ingredient.name }}: {{ fracty(ingredient.amount * computedServings)
      }}{{ ingredient.unit }}
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
</script>

<style lang="scss" scoped>
.ingredients {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex: 1;
  margin: 1rem;
  padding: 3rem;

  border-radius: 20px;
  box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.2);
  background-color: var(--color-primary-1-dark);

  .ingredient {
    margin: 1rem 0;
  }
}
</style>
