vi.mock("@/views/RecipeDetailsView.vue");

import { render, router, screen } from "/test/helper";
import App from "./App.vue";

const setup = async (path) => {
  router.push(path);
  await router.isReady();
  return render(App);
};

describe("App routing", () => {
  describe.each([
    { path: "/", pageId: "recipe-page" },
    { path: "/about", pageId: "about-page" },
    { path: "/recipes/123", pageId: "recipe-details-page" },
  ])("when path is $path", ({ path, pageId }) => {
    it(`displays ${pageId}`, async () => {
      await setup(path);
      const page = screen.queryByTestId(pageId);
      expect(page).toBeInTheDocument();
    });
  });
});
