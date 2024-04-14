<template>
  <div class="recipe-note-container">
    <div class="edit">
      <button @click="editNote" class="add-servings" aria-label="add servings">
        <Icon class="icon" icon="material-symbols:stylus-note-outline" />
      </button>
    </div>
    <div v-show="currNote.length > 0 || editing" class="note">
      <h2 class="title">Kommentti</h2>
      <div v-if="!editing" class="text">{{ currNote }}</div>
      <textarea v-else v-model="currNote"></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useRecipeStore } from "@/stores/recipes";

import { defineProps } from "vue";

const recipeStore = useRecipeStore();

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const note = recipeStore.getNoteById(props.id);
let currNote = "";
if (note) currNote = note.note;

let editing = ref(false);
const editNote = () => {
  editing.value = !editing.value;
  // Stopped editing, update note
  if (!editing.value) {
    if (currNote.trim() !== "") {
      recipeStore.addNote(props.id, currNote);
    } else {
      // Remove empty notes
      recipeStore.removeNote(props.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.recipe-note-container {
  position: relative;
  min-height: 6rem;
}
.edit {
  position: absolute;
  top: 1rem;
  right: 2rem;
  button {
    @include base-button;
  }
}

.note {
  @include base-panel;

  margin: 2rem 1rem 1rem 1rem;
  padding: 2rem;

  textarea {
    margin-top: 1rem;
    width: 100%;
    height: 15rem;
    padding: 0.5rem 0 0 1rem;
    border-radius: 2rem;
    font-size: var(--text-para-size);
    font-family: var(--text-sans-serif-font);
  }
}
</style>
