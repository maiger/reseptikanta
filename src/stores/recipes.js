import { defineStore } from "pinia";

export const useRecipeStore = defineStore({
  id: "recipes",
  state: () => ({
    recipes: [],
    favorites: [],
  }),
  getters: {
    getRecipes: (state) => state.recipes,
    getRecipeById: (state) => {
      return (recipeId) =>
        state.recipes.find((recipe) => recipe.id === recipeId);
    },
    getFavoriteById: (state) => {
      return (recipeId) => state.favorites.includes(recipeId);
    },
  },
  actions: {
    setRecipes(val) {
      this.recipes = val;
    },
    setFavorites(val) {
      this.favorites = val;
    },
    addFavorite(recipeId) {
      if (this.favorites.includes(recipeId)) {
        console.warn("Favorites already contains id:", recipeId);
        return;
      }

      this.favorites.push(recipeId);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
    removeFavorite(recipeId) {
      this.favorites = this.favorites.filter((id) => id !== recipeId);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
  },
});
