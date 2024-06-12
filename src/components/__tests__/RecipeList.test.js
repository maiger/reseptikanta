vi.mock("@/components/RecipeListItem.vue");

import { render, screen } from "@testing-library/vue";
import { describe, it, expect, vi } from "vitest";
import RecipeList from "../RecipeList.vue";

describe("RecipeList", () => {
  // Setup recipe
  const recipes = ["Recipe 1", "Recipe 2", "Recipe 3"];
  // const recipes = [
  //   {
  //     id: 1,
  //     title: "Test Recipe Title",
  //     description: "",
  //     source: "Test Source",
  //     prepTime: 60,
  //     servings: 4,
  //     tags: ["kala", "liha"],
  //     img: "test_image.JPG",
  //     dateAdded: "1.1.1970",
  //     favourite: false,
  //     instructions: ["Lorem ipsum dolor sit amet."],
  //     ingredients: [
  //       {
  //         collectionName: "Kala",
  //         collectionIngredients: [
  //           {
  //             name: "Ingredient_Lorem",
  //             amount: 1.2,
  //             unit: "unit_kg",
  //           },
  //           {
  //             name: "Ingredient_Ipsum",
  //             amount: 1,
  //             unit: "tl",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Test 2 Recipe Title",
  //     description: "",
  //     source: "Test Source 2",
  //     prepTime: 100,
  //     servings: 6,
  //     tags: ["kana", "keitto"],
  //     img: "test_image_2.JPG",
  //     dateAdded: "1.1.1970",
  //     favourite: false,
  //     instructions: ["Lorem ipsum dolor sit amet."],
  //     ingredients: [
  //       {
  //         collectionName: "Kala",
  //         collectionIngredients: [
  //           {
  //             name: "Ingredient_Lorem",
  //             amount: 1.2,
  //             unit: "unit_kg",
  //           },
  //           {
  //             name: "Ingredient_Ipsum",
  //             amount: 1,
  //             unit: "tl",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  it("render correctly", async () => {
    // Arrange
    render(RecipeList, { props: { recipes } });

    // Assert
    expect(screen.getByText(recipes[0])).toBeInTheDocument();
    expect(screen.getByText(recipes[1])).toBeInTheDocument();
    expect(screen.getByText(recipes[2])).toBeInTheDocument();
  });
});
