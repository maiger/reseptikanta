import { mount } from "@vue/test-utils";
import { render, screen } from "@testing-library/vue";
import { describe, it, expect, vi } from "vitest";
import RecipeList from "../RecipeList.vue";
import { createTestingPinia } from "@pinia/testing";
import { useRecipeStore } from "@/stores/recipes";

// Store setup, is this correct?
const wrapper = mount(RecipeList, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn,
      }),
    ],
  },
});

const store = useRecipeStore();

describe("RecipeList", () => {
  // Setup recipe
  const recipes = [
    {
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
    },
    {
      id: 2,
      title: "Test 2 Recipe Title",
      description: "",
      source: "Test Source 2",
      prepTime: 100,
      servings: 6,
      tags: ["kana", "keitto"],
      img: "test_image_2.JPG",
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
    },
  ];

  it.skip("Render recipeList correctly", async () => {
    // Arrange
    render(RecipeList, { props: { recipes } });

    // Assert
    expect(screen.getByText(recipes[0].title)).not.toBeNull();
    expect(screen.getByText(recipes[1].title)).not.toBeNull();
  });
});
