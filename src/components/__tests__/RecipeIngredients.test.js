import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import RecipeIngredients from "../RecipeIngredients.vue";

describe.skip("RecipeIngredients", () => {
  const servings = 4;

  // Setup recipe
  const recipe = {
    id: 1,
    title: "Test Recipe Title",
    description: "",
    source: "Test Source",
    prepTime: 60,
    servings: 4,
    tags: ["test_tag"],
    img: "test_image.JPG",
    dateAdded: "1.1.1970",
    favourite: false,
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

  it("Render recipeIngredients correctly", async () => {
    // Arrange
    render(RecipeIngredients, { props: { recipe, servings } });

    // Assert
    expect(screen.getByText("Ainesosat")).not.toBeNull();
    expect(
      screen.getByText(recipe.ingredients[0].collectionIngredients[0].name)
    ).not.toBeNull();
    expect(screen.getByText("1 1/5 unit_kg")).not.toBeNull();
    expect(
      screen.getByText(recipe.ingredients[0].collectionIngredients[1].name)
    ).not.toBeNull();
  });

  it("Render custom amounts correctly", async () => {
    // Arrange
    render(RecipeIngredients, {
      props: { recipe, servings: 8 },
    });

    // Assert
    expect(screen.getByText("2 2/5 unit_kg")).not.toBeNull();
  });

  it("Render negative amounts correctly", async () => {
    // Amounts lower limit should be 1. No negatives allowed.
    // Arrange
    render(RecipeIngredients, {
      props: { recipe, servings: -1 },
    });

    // Assert
    expect(screen.getByText("3/10 unit_kg")).not.toBeNull();
  });
});
