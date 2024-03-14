<template>
  <RouterLink :to="`/recipes/${recipe.id}`">
    <div class="recipe-item">
      <div class="recipe-thumbnail">
        <img :src="'/images/' + recipe.img" />
      </div>
      <h1 class="title">{{ recipe.title }}</h1>
      <div class="recipe-info">
        <div class="prep-time">
          <Icon class="icon" icon="mdi:clockwise" />
          <p>{{ recipe.prepTime }}min</p>
        </div>
        <div class="tags">
          <div v-for="tag in recipe.tags">
            <div class="tag">
              <Icon class="icon" :icon="`${getTagIcon(tag)}`" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import tagToIcon from "@/assets/tagsToIcons.json";
import { Icon } from "@iconify/vue";
import { defineProps } from "vue";

const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});

const getTagIcon = (tag) => {
  let iconName = tagToIcon[tag];
  if (!iconName) {
    console.warn("Icon not found for tag: " + tag);
    iconName = tagToIcon["default"];
  }
  return iconName;
};
</script>

<style lang="scss" scoped>
.recipe-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem 2rem 2rem 2rem;
  height: 28rem;
  width: 32rem;
  background-color: var(--color-primary-1-dark);
  border-radius: 20px;
  box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.15);

    .title {
      transform: scale(1.1);
      text-shadow: -4px -4px 4px var(--color-secondary-1-dark),
        4px 4px 4px var(--color-secondary-1-dark-1);
    }
  }

  .title {
    position: absolute;
    bottom: 6rem;
    font-size: 3rem;
    text-align: center;
    color: var(--color-primary-1-light);
    letter-spacing: 1px;
    text-shadow: -4px -4px 1px var(--color-secondary-1-dark),
      4px 4px 1px var(--color-secondary-1-dark-1);
    z-index: 10;
    transition: all 0.6s ease;
  }

  .recipe-thumbnail {
    position: absolute;
    top: -7rem;
    height: 30rem;
    width: 30rem;
    z-index: -1;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      opacity: 0.9;
      box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.261);
      border-radius: 20px;
      transition: all 0.2s;

      &:hover {
        transform: rotateX(-3deg) rotateY(3deg) rotateZ(-1deg) scale(1.05);
        box-shadow: 3px 1px 6px 3px rgba(0, 0, 0, 0.2);
        opacity: 1;
      }
    }
  }

  .recipe-info {
    position: absolute;
    justify-content: space-between;
    bottom: 0.5rem;
    width: 100%;
    padding: 0 0.5rem;
    display: flex;

    .prep-time {
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--color-secondary-1-dark-1);

      .icon {
        height: 3rem;
        width: 5rem;
      }

      p {
        margin-left: -0.75rem;
        font-weight: var(--text-weight-semibold);
        letter-spacing: 0.5px;
      }
    }

    .tags {
      display: flex;

      .tag {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0.25rem;
        padding: 0.7rem 0.7rem;
        letter-spacing: 1px;
        font-size: var(--text-para-size-small);
        color: var(--color-primary-1-light);
        background-color: var(--color-secondary-1-dark-1);
        border-radius: 20px;
        opacity: 0.9;

        .icon {
          color: var(--color-primary-1-light);
          width: 2.4rem;
          height: 2.4rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .recipe-item {
    height: 14rem;
    width: 26rem;
    margin: 8rem 1rem 1rem 1rem;

    .recipe-thumbnail {
      height: 16rem;
      width: 24rem;
    }

    .title {
      font-size: 2.4rem;
      bottom: 5rem;
    }
  }
}

@media only screen and (max-width: 580px) {
  .recipe-item {
    height: 10rem;
    width: 42rem;

    .recipe-thumbnail {
      height: 12rem;
      width: 40rem;
    }
  }
}

@media only screen and (max-width: 450px) {
  .recipe-item {
    height: 10rem;
    width: 32rem;

    .recipe-thumbnail {
      height: 12rem;
      width: 30rem;
    }
  }

  .tags {
    // background-color: red;
    .tag {
      background-color: blue;

      .icon {
        height: 2.4rem;
        width: 2.4rem;
      }
    }
  }
}
</style>
