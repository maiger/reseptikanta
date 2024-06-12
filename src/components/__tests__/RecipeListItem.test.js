import { render, screen } from "../../../test/helper";
import { describe, it, expect, vi } from "vitest";
import RecipeListItem from "../RecipeListItem.vue";
import { createTestingPinia } from "@pinia/testing"; // <-- !!
import { useRecipeStore } from "@/stores/recipes";

describe("RecipeListItem", () => {
  // Setup recipe
  const recipe = {
    id: 1,
    title: "Test Recipe Title",
    description: "",
    source: "Test Source",
    prepTime: 60,
    servings: 4,
    tags: ["kala", "liha"],
    img: "test_image.JPG",
    dateAdded: "1.1.1970",
    favourite: true,
    instructions: ["Lorem ipsum dolor sit amet."],
    ingredients: [
      {
        collectionName: "Kala",
        collectionIngredients: [
          {
            name: "Ingredient_Lorem",
            amount: 1.2,
            unit: "unit_kg",
          },
          {
            name: "Ingredient_Ipsum",
            amount: 1,
            unit: "tl",
          },
        ],
      },
    ],
  };

  it("renders title and time", async () => {
    // Arrange
    render(RecipeListItem, { props: { recipe } });

    // Assert
    expect(screen.getByText(recipe.title)).toBeInTheDocument();
    expect(screen.getByText(recipe.prepTime + "min")).toBeInTheDocument();
  });

  it("render image", async () => {
    render(RecipeListItem, { props: { recipe } });

    const image = screen.getByAltText(recipe.title);
    expect(image).toHaveAttribute("src", "/reseptikanta/images/test_image.JPG");
  });

  it("render tags", () => {
    render(RecipeListItem, { props: { recipe } });

    expect(screen.getByLabelText("kala")).toBeInTheDocument();
    expect(screen.getByLabelText("liha")).toBeInTheDocument();
  });

  it("does not render favorite icon when not favorited", () => {
    render(RecipeListItem, { props: { recipe } });

    expect(screen.queryByLabelText("Recipe favorited")).not.toBeInTheDocument();
  });

  it.todo("does render favorite icon when favorited", () => {
    // Component does not seem to have access to correct store
    // const mockRecipeStore = useRecipeStore();
    // render(RecipeListItem, { store: mockRecipeStore, props: { recipe } });
    const { mockRecipeStore } = render(RecipeListItem, { props: { recipe } });
    // mockRecipeStore.$state.favorites = [1];
    mockRecipeStore.addFavorite(1);

    expect(recipe.id).toEqual(1);
    expect(mockRecipeStore.favorites).toEqual([1]);
    // Mocked store is not used by component
    expect(screen.getByLabelText("Recipe favorited")).toBeInTheDocument();
  });
});
