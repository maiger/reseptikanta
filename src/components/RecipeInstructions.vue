<template>
  <div class="instructions">
    <h2>Ohjeet</h2>
    <ul>
      <li
        @click="toggleComplete"
        v-for="(step, index) in recipe.instructions"
        class="instruction-step"
      >
        <b>Vaihe {{ index + 1 }}:</b> {{ step }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});

const toggleComplete = (e) => {
  e.target.closest(".instruction-step").classList.toggle("step-complete");
};
</script>

<style lang="scss" scoped>
.instructions {
  margin: 1rem;
  padding: 3rem;

  border-radius: 20px;
  box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.2);
  background-color: var(--color-primary-1-dark);

  .instruction-step {
    margin: 1rem 0;
    cursor: pointer;
  }

  .step-complete {
    text-decoration: line-through;
    opacity: 0.75;
  }
}

@media only screen and (max-width: 750px) {
  .instructions {
    width: 90vw;
  }
}
</style>
