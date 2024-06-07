import { render, screen } from "../../../test/helper";
import RecipeInstructions from "../RecipeInstructions.vue";

describe("Recipe Instructions", () => {
  // Setup recipe
  const instructions = [
    "Lorem ipsum dolor sit amet.",
    "Consectetur adipiscing elit.",
  ];

  it("renders instruction list correctly", async () => {
    // Arrange
    render(RecipeInstructions, { props: { instructions } });

    // Assert
    expect(screen.getByText("Ohjeet")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum dolor sit amet.")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(
      screen.getByText("Consectetur adipiscing elit.")
    ).toBeInTheDocument();
    // Should be null as there is no "3"
    expect(screen.queryByText("3")).not.toBeInTheDocument();
  });

  it("does not have line-through on text by default", () => {
    render(RecipeInstructions, { props: { instructions } });
    let text = screen.getByText("Lorem ipsum dolor sit amet.");
    text = text.closest(".instruction-step");
    expect(text).toBeInTheDocument();
    expect(text).not.toHaveClass("step-complete");
  });

  it("adds line-through to text on click", async () => {
    const { user } = render(RecipeInstructions, { props: { instructions } });
    let text = screen.getByText("Lorem ipsum dolor sit amet.");
    text = text.closest(".instruction-step");

    await user.click(text);

    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("step-complete");
  });

  it("removes line-through on text when clicking line-through text", async () => {
    const { user } = render(RecipeInstructions, { props: { instructions } });
    let text = screen.getByText("Lorem ipsum dolor sit amet.");
    text = text.closest(".instruction-step");

    await user.click(text);
    expect(text).toHaveClass("step-complete");
    await user.click(text);

    expect(text).not.toHaveClass("step-complete");
  });
});
