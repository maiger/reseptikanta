import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import { Footer } from "@/components";

describe("Footer", () => {
  it("Render footer correctly", async () => {
    // Arrange
    render(Footer);

    // Assert
    const text = screen.getByText("maiger");
    expect(text).toBeInTheDocument();
  });
});
