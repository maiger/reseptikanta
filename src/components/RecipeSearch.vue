<template>
  <section class="search-section">
    <!-- <h2>Hae reseptiä</h2> -->
    <form class="search-form" @submit.prevent="">
      <input
        type="text"
        id="search"
        name="search"
        v-model="searchTerm"
        placeholder="Hae reseptiä.."
      />
      <button class="btn-search" @click="doSearch" aria-label="search">
        <Icon class="icon" icon="material-symbols:search" />
      </button>
      <button class="btn-reset" @click="resetSearch" aria-label="reset search">
        <Icon class="icon" icon="fluent:arrow-reset-20-filled" />
      </button>
    </form>
    <ul class="search-tags">
      <li
        class="search-tag"
        v-for="tag in tags"
        :key="tag.name"
        @click="onTagClick(tag.name)"
      >
        {{ tag.name.toUpperCase() }}&nbsp;({{ tag.count }})
      </li>
    </ul>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  tags: {
    type: Array,
    required: true,
  },
});

const searchTerm = ref("");

const emit = defineEmits(["searchSubmitted"]);

const doSearch = () => {
  searchTerm.value = searchTerm.value.toLowerCase();
  emit("searchSubmitted", searchTerm.value);
};

const resetSearch = () => {
  searchTerm.value = "";
  doSearch();
};

const onTagClick = (tag) => {
  searchTerm.value = tag;
  doSearch();
};
</script>

<style lang="scss" scoped>
.search-section {
  @include flex-column-center;

  margin: 4rem 0 2rem 0;
}

.search-form {
  @include flex-row-center;

  position: relative;
  margin-bottom: 2rem;

  input {
    height: 4rem;
    width: 30rem;
    font-family: inherit;
    font-size: var(--text-heading-size-3);
    padding-left: 1rem;
    border-radius: 20px;
    border: 3px solid var(--color-secondary-1-dark-1);
  }

  button {
    @include flex-row-center;
    @include base-button;

    position: absolute;
    right: 0;
    margin-left: 1rem;
  }

  .btn-search {
    right: -0.5rem;
    height: 6rem;
    width: 6rem;

    .icon {
      height: 80%;
      width: 80%;
    }
  }

  .btn-reset {
    right: -5.5rem;
  }
}

.search-tags {
  @include flex-row-center;
  flex-wrap: wrap;

  margin-top: 1rem;
  cursor: pointer;

  li {
    margin: 0.5rem;
    padding: 0.5rem 1.5rem;
    font-weight: var(--text-weight-semibold);
    border-radius: 20px;
    background-color: var(--color-secondary-1);
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-out;
    transform-origin: bottom;

    @include base-hover-effect;
  }
}

@media only screen and (max-width: 450px) {
  .search-form {
    input {
      width: 22rem;
      transform: translateX(-3rem);
    }
  }
}
</style>
