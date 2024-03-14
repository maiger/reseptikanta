<template>
  <header>
    <nav class="container">
      <RouterLink to="/">
        <div class="branding">
          <img src="../assets/logo.png" alt="Logo" width="48" height="48" />
          <h1>Reseptikanta</h1>
        </div>
      </RouterLink>
      <ul class="nav-routes">
        <li>
          <RouterLink to="/" aria-label="home">
            <Icon class="icon" icon="material-symbols:home-outline" />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about" aria-label="about">
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

    .branding,
    .nav-routes li .icon {
      color: var(--color-secondary-1-dark-1);
    }

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

      li {
        transition: all 0.2s;
      }

      li:hover {
        transform: scale(1.1) rotateZ(-5deg);
      }

      .icon {
        display: flex;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        opacity: 0.9;
      }
    }
  }
}
</style>
