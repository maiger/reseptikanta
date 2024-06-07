import { useRecipeStore } from "@/stores/recipes";
import recipeData from "@/assets/recipes.json";

export const setupRecipeStore = () => {
  // Load recipes
  const recipeStore = useRecipeStore();
  recipeStore.setRecipes(recipeData);

  // Load favorites
  const favorites = localStorage.favorites;
  if (favorites) {
    recipeStore.setFavorites(JSON.parse(favorites));
  }

  // Load notes
  const notes = localStorage.notes;
  if (notes) {
    recipeStore.setNotes(JSON.parse(notes));
  }
};
