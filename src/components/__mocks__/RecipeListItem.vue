<template>
  <li>
    <div>{{ recipe }}</div>
  </li>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  recipe: {
    type: String,
    required: true,
  },
});
</script>
