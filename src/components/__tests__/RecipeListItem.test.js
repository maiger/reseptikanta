import { mount, shallowMount } from "@vue/test-utils";
import { render, screen } from "@testing-library/vue";
import { describe, it, expect, vi } from "vitest";
import RecipeListItem from "../RecipeListItem.vue";
import { createTestingPinia } from "@pinia/testing";
import { useRecipeStore } from "@/stores/recipes";

// Router link stub
// shallowMount(RecipeListItem, {
//   stubs: ["router-link", "router-view"],
// });

// Store setup, is this correct?
// const wrapper = mount(RecipeListItem, {
//   global: {
//     plugins: [
//       createTestingPinia({
//         createSpy: vi.fn,
//       }),
//     ],
//   },
// });

// const store = useRecipeStore();

describe.skip("RecipeListItem", () => {
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

  it("Render recipeListItem correctly", async () => {
    // Arrange
    render(RecipeListItem, { props: { recipe } });

    // Assert
    expect(screen.getByText(recipe.title)).not.toBeNull();
    expect(screen.getByText(recipe.prepTime + "min")).not.toBeNull();
  });

  it("Render image correctly", async () => {
    // Arrange
    render(RecipeListItem, { props: { recipe } });

    // Assert
    expect(screen.findByAltText(recipe.title)).not.toBeNull();
  });

  it("Render tags correctly", async () => {
    // Arrange
    render(RecipeListItem, { props: { recipe } });

    // Assert
    expect(screen.findByLabelText("kala")).not.toBeNull();
    expect(screen.findByLabelText("liha")).not.toBeNull();
  });
});
