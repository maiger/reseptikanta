<template>
  <div class="recipe-pages" v-if="pageCount > 1">
    <button
      v-show="currentPage > 1"
      @click="previousPage"
      class="previous-page"
    >
      <Icon class="icon" icon="uil:arrow-left" />
    </button>
    <div class="pages" v-for="(page, index) in pageCount">
      <div class="current-page" v-if="currentPage - 1 === index">
        <Icon class="icon" icon="material-symbols:circle" />
      </div>
      <div class="other-page" v-else>
        <Icon class="icon" icon="material-symbols:circle-outline" />
      </div>
    </div>
    <button v-if="currentPage < pageCount" @click="nextPage" class="next-page">
      <Icon class="icon" icon="uil:arrow-right" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["nextPageSubmitted", "previousPageSubmitted"]);

const previousPage = () => {
  emit("previousPageSubmitted");
};

const nextPage = () => {
  emit("nextPageSubmitted");
};
</script>

<style lang="scss" scoped>
.recipe-pages {
  @include flex-row-center;
  margin-bottom: 10rem;

  // Buttons
  .previous-page,
  .next-page {
    @include base-button;
  }

  .previous-page {
    margin-right: 1rem;
  }

  .next-page {
    margin-left: 1rem;
  }

  // List elements
  .pages {
    .other-page {
      @include flex-row-center;
      margin: 0.25rem;

      .icon {
        color: var(--color-secondary-1-dark-1);
      }
    }

    .current-page {
      @include flex-row-center;
      margin: 0.25rem;
      .icon {
        height: 3rem;
        width: 3rem;
        color: var(--color-secondary-1-dark-1);
      }
    }
  }
}
</style>
