<template>
  <div class="instructions">
    <h2>Ohjeet</h2>
    <ul>
      <li
        @click="toggleComplete"
        v-for="(step, index) in instructions"
        class="instruction-step"
      >
        <div class="step-counter">{{ index + 1 }}</div>
        <p class="step-text">{{ step }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  instructions: {
    type: Array,
    required: true,
  },
});

const toggleComplete = (e) => {
  e.target.closest(".instruction-step").classList.toggle("step-complete");
};
</script>

<style lang="scss" scoped>
.instructions {
  @include base-panel;

  margin: 1rem;
  padding: 3rem;

  .instruction-step {
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 2rem 0;
    cursor: pointer;
  }

  .step-counter {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    font-weight: var(--text-weight-bold);
    border-radius: 50%;
    width: 2.2rem;
    height: 2.2rem;
    padding: 1.4rem;
    box-shadow: 0px 0px 1px 2px var(--color-secondary-1-dark-1);
    margin-right: 1.4rem;
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
