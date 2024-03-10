<template>
  <header>
    <nav class="container">
      <div class="branding">
        <img src="../assets/logo.png" alt="Logo" />
        <h1>Reseptikanta</h1>
      </div>
      <ul class="nav-routes">
        <li>
          <RouterLink to="/">
            <Icon class="icon" icon="material-symbols:home-outline" />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about">
            <Icon class="icon" icon="material-symbols:info-outline" />
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { Icon } from "@iconify/vue";

import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;500&display=swap");

header {
  background-color: var(--color-primary-1-dark);
  nav {
    display: flex;
    align-items: center;
    padding: 1rem 1.6rem;

    .branding {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      img {
        max-width: 4rem;
      }

      h1 {
        font-family: "IBM Plex Serif", serif;
        font-size: var(--text-heading-size-1);
        letter-spacing: 0.5px;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      align-items: center;
      gap: 1.2rem;
      list-style: none;

      .icon {
        display: flex;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        opacity: 0.9;
      }

      a {
        align-self: center;
        padding: 0;
        color: inherit;
      }
    }
  }
}
</style>
