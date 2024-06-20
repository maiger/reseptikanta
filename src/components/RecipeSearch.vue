<template>
  <section class="search-section">
    <form autocomplete="off" class="search-form" @submit.prevent="">
      <div class="autocomplete" ref="searchDiv">
        <input
          type="text"
          id="search"
          name="search"
          v-model="searchTerm"
          placeholder="Hae reseptiä.."
          data-testid="input-search"
          @input="onChange"
          @keydown.down="onArrowDown"
          @keydown.up="onArrowUp"
          @keydown.enter="onEnter"
        />
        <ul v-show="isOpen" class="autocomplete-results">
          <li
            v-for="(result, i) in suggestionResults"
            :key="i"
            @click="onSuggestionClick(result)"
            class="autocomplete-result"
            :class="{ 'is-active': i === arrowCounter }"
          >
            {{ result }}
          </li>
        </ul>
      </div>
      <button class="btn-search" @click="doSearch" aria-label="Search button">
        <Icon class="icon" icon="material-symbols:search" />
      </button>
      <button
        class="btn-reset"
        @click="resetSearch"
        aria-label="Reset search button"
      >
        <Icon class="icon" icon="fluent:arrow-reset-20-filled" />
      </button>
    </form>
    <ul class="search-tags">
      <li
        class="search-tag"
        v-for="tag in tags"
        :key="tag.name"
        @click="onTagClick(tag.name)"
        :aria-label="`Tag: ${tag.name}`"
      >
        {{ tag.name.toUpperCase() }}&nbsp;({{ tag.count }})
      </li>
    </ul>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { onMounted, onUnmounted, ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  searchTerm: {
    type: String,
  },
  tags: {
    type: Array,
    required: true,
  },
  titles: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

const searchDiv = ref(null);
const searchTerm = ref("");
searchTerm.value = props.searchTerm;

const isOpen = ref(false);
const arrowCounter = ref(-1);
let suggestionResults = [];
const emit = defineEmits(["searchSubmitted"]);

const handleClickOutside = (event) => {
  if (searchDiv.value && !searchDiv.value.contains(event.target)) {
    isOpen.value = false;
    arrowCounter.value = -1;
  }
};

const doSearch = () => {
  console.log("doSearch: SearchTerm was: ", searchTerm.value);
  if (searchTerm.value === undefined) return;

  searchTerm.value = searchTerm.value.toLowerCase().trim();
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

const onSuggestionClick = (suggestion) => {
  searchTerm.value = suggestion;
  isOpen.value = false;
  doSearch();
};

const filterSuggestionResults = () => {
  suggestionResults = props.titles
    .filter(
      (title) =>
        title.toLowerCase().indexOf(searchTerm.value.toLowerCase()) > -1
    )
    .slice(0, 3);
};

const onChange = () => {
  if (searchTerm.value.length > 2) {
    filterSuggestionResults();
    isOpen.value = true;
  } else {
    isOpen.value = false;
  }
};

const onArrowDown = () => {
  if (arrowCounter.value < suggestionResults.length - 1) {
    arrowCounter.value = arrowCounter.value + 1;
  }
};

const onArrowUp = () => {
  if (arrowCounter.value > 0) {
    arrowCounter.value = arrowCounter.value - 1;
  }
};

const onEnter = () => {
  if (arrowCounter.value === -1) return;

  searchTerm.value = suggestionResults[arrowCounter.value];
  arrowCounter.value = -1;
  isOpen.value = false;
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

  .autocomplete {
    position: relative;
  }

  .autocomplete-results {
    @include base-panel;
    position: absolute;

    padding: 0;
    margin: 0;
    margin-top: 1rem;
    background-color: var(--color-primary-1-dark);
    border-radius: 1rem;
    min-height: 1rem;
    max-height: 9.9rem;
    min-width: 50%;
    overflow: hidden;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 0.4rem 0.8rem;
    cursor: pointer;
  }

  .autocomplete-result.is-active,
  .autocomplete-result:hover {
    background-color: var(--color-secondary-1);
    color: var(--color-primary-1-light);
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

    .autocomplete-results {
      margin-top: 2rem;
    }
  }
}
</style>
