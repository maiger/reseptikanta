import { defineStore } from "pinia";

export const useRecipeStore = defineStore({
  id: "recipes",
  state: () => ({
    recipes: [],
    favorites: [],
    notes: [],
    searchTerm: "",
    sorting: "",
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
    getNoteById: (state) => {
      return (recipeId) => state.notes.find((note) => note.id == recipeId);
    },
    getSearchTerm: (state) => state.searchTerm,
    getSorting: (state) => state.sorting,
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
    setNotes(val) {
      this.notes = val;
    },
    addNote(recipeId, note) {
      const id = this.notes.findIndex((note) => note.id === recipeId);
      // Check if note exists for this recipe
      if (id >= 0) {
        // If yes, modify existing note
        this.notes[id].note = note;
      } else {
        // If no, add new note
        this.notes.push({ id: recipeId, note: note });
      }
      // Update localstorage
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
    removeNote(recipeId) {
      this.notes = this.notes.filter((note) => note.id !== recipeId);
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
    setSearchTerm(searchTerm) {
      this.searchTerm = searchTerm;
    },
    setSorting(sort) {
      this.sorting = sort;
    },
  },
});
