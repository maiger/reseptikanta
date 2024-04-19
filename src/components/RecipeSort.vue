<template>
  <div class="recipe-sort">
    <button @click="onSortClicked('alphabetical')" class="alphabetical-sort">
      <Icon class="icon" icon="material-symbols:sort-by-alpha-rounded" />
    </button>
    <button @click="onSortClicked('prepTime')" class="prepTime-sort">
      <Icon class="icon" icon="mdi:clockwise" />
    </button>
    <button @click="onSortClicked('favorite')" class="favorite-sort">
      <Icon class="icon" icon="material-symbols:favorite-outline" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const emit = defineEmits(["sortSubmitted"]);

const onSortClicked = (sortType) => {
  emit("sortSubmitted", sortType);
};
</script>

<style lang="scss" scoped>
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
