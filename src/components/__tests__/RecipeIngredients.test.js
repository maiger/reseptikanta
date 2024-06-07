import { render, screen } from "../../../test/helper";
import RecipeIngredients from "../RecipeIngredients.vue";

const recipeServings = 4;
const ingredients = [
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
];

const setup = (customServings = recipeServings) => {
  const { user } = render(RecipeIngredients, {
    props: { ingredients, recipeServings, servings: customServings },
  });
  return user;
};

describe("Recipe Ingredients", () => {
  it("Render Recipe Ingredients names correctly", async () => {
    // Arrange
    setup();

    // Assert
    expect(screen.getByText("Ainesosat")).toBeInTheDocument();
    expect(screen.getByText("Ingredient_Lorem")).toBeInTheDocument();
    expect(screen.getByText("Ingredient_Ipsum")).toBeInTheDocument();
  });

  it("Render Recipe Ingredient amounts correctly", async () => {
    setup();

    expect(screen.getByText("1 1/5 unit_kg")).toBeInTheDocument();
    expect(screen.getByText("1 tl")).toBeInTheDocument();
  });

  describe.each([
    { servings: -10, amountText: "3/10 unit_kg" },
    { servings: -1, amountText: "3/10 unit_kg" },
    { servings: 0, amountText: "3/10 unit_kg" },
    { servings: 1, amountText: "3/10 unit_kg" },
    { servings: 4, amountText: "1 1/5 unit_kg" },
    { servings: 8, amountText: "2 2/5 unit_kg" },
    { servings: 12, amountText: "3 3/5 unit_kg" },
    { servings: 16, amountText: "4 4/5 unit_kg" },
  ])("when servings is $servings", ({ servings, amountText }) => {
    it("displays custom amounts correctly", async () => {
      setup(servings);
      expect(screen.getByText(amountText)).toBeInTheDocument();
    });
  });

  it("adds line-through to text on click", async () => {
    const user = setup();
    let text = screen.getByText("Ingredient_Lorem");
    text = text.closest(".ingredient");

    await user.click(text);

    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("step-complete");
  });

  it("removes line-through on text when clicking line-through text", async () => {
    const user = setup();
    let text = screen.getByText("Ingredient_Lorem");
    text = text.closest(".ingredient");

    await user.click(text);
    expect(text).toHaveClass("step-complete");
    await user.click(text);

    expect(text).not.toHaveClass("step-complete");
  });
});
