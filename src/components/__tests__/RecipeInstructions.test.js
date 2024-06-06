import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import RecipeInstructions from "../RecipeInstructions.vue";

describe.skip("RecipeInstructions", () => {
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
            name: "Lorem",
            amount: 1.2,
            unit: "kg",
          },
          {
            name: "Ipsum",
            amount: 1,
            unit: "tl",
          },
        ],
      },
    ],
  };

  it("Render recipeInstructions correctly", async () => {
    // Arrange
    render(RecipeInstructions, { props: { recipe } });

    // Assert
    expect(screen.getByText("Ohjeet")).not.toBeNull();
    expect(screen.getByText("1")).not.toBeNull();
    // Should be null as there is no "2"
    expect(screen.queryByText("2")).toBeNull();
  });
});
