import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import Footer from "../Footer.vue";

describe.skip("Footer", () => {
  it("Render footer correctly", async () => {
    // Arrange
    render(Footer);

    // Assert
    expect(screen.getByText("Reseptikanta v2.0")).not.toBeNull();
    expect(screen.getByText("maiger")).not.toBeNull();
  });
});
