import { render, screen } from "@testing-library/vue";
import AboutView from "../AboutView.vue";

describe("About View", () => {
  it("displays about text", () => {
    render(AboutView);
    const text = screen.queryByText("Tervetuloa Reseptikantaan!");
    expect(text).toBeInTheDocument();
  });
});
