<template>
  <footer class="footer">
    <p>Reseptikanta v2.0</p>
    <p>by</p>
    <div class="credit">
      <a href="https://www.github.com/maiger" target="_blank">
        <Icon class="icon" icon="mdi:github" />
        <p>maiger</p>
      </a>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
.footer {
  @include flex-column-center;

  width: 100%;
  height: 10rem;
  padding: 3rem 0;
  color: var(--color-secondary-1-dark-1);
  background-color: var(--color-primary-1-dark);

  p {
    font-weight: var(--text-weight-semibold);
    font-size: var(--text-para-size-small);
    line-height: 1.1;
  }

  a {
    @include flex-row-center;

    color: var(--color-secondary-1-dark);

    &:visited {
      color: var(--color-secondary-1-dark);
    }

    &:hover {
      color: var(--color-secondary-1-dark-1);
    }
  }

  .icon {
    height: 2rem;
    width: 2rem;
  }
}
</style>
