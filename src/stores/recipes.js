import { defineStore } from "pinia";

export const useRecipeStore = defineStore({
  id: "recipes",
  state: () => ({
    recipes: [],
  }),
  getters: {
    getRecipes: (state) => state.recipes,
    getRecipeById: (state) => {
      return (recipeId) =>
        state.recipes.find((recipe) => recipe.id === recipeId);
    },
  },
  actions: {
    setRecipes(val) {
      this.recipes = val;
    },
  },
});
