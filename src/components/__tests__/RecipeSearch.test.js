import { render, screen } from "../../../test/helper";
import RecipeSearch from "../RecipeSearch.vue";

describe("Recipe Search", () => {
  const searchTerm = "";
  const tags = [
    { name: "kana", count: "1" },
    { name: "kala", count: "2" },
    { name: "liha", count: "5" },
  ];
  const titles = [
    "kanakeitto",
    "kalakeitto",
    "lihakeitto",
    "kanapata",
    "uunikala",
    "lihapata",
  ];

  it("has search input", () => {
    render(RecipeSearch, { props: { searchTerm, tags, titles } });
    expect(screen.getByTestId("input-search")).toBeInTheDocument();
  });

  it("search input has correct placeholder text", () => {
    render(RecipeSearch, { props: { searchTerm, tags, titles } });
    expect(screen.queryByPlaceholderText("Hae reseptiä..")).toBeInTheDocument();
  });

  it("has search button", () => {
    render(RecipeSearch, { props: { searchTerm, tags, titles } });
    expect(screen.queryByLabelText("Search button")).toBeInTheDocument();
  });
  it("has reset button", () => {
    render(RecipeSearch, { props: { searchTerm, tags, titles } });
    expect(screen.queryByLabelText("Reset search button")).toBeInTheDocument();
  });

  it("has search tags", () => {
    render(RecipeSearch, { props: { searchTerm, tags, titles } });
    expect(screen.queryByLabelText("Tag: kala")).toBeInTheDocument();
    expect(screen.queryByLabelText("Tag: kana")).toBeInTheDocument();
    expect(screen.queryByLabelText("Tag: liha")).toBeInTheDocument();
  });

  it.todo("emits when search button is clicked", async () => {
    // NOTE: This is being tested in RecipeView.test.js
    // const { user, emitted } = render(RecipeSearch, {
    //   props: { searchTerm, tags, titles },
    // });
    // const searchInput = screen.getByLabelText("Search button");
    // await user.type(searchInput, "kala");
    // const button = screen.queryByLabelText("Search button");
    // await user.click(button);
    // expect(emitted()).toHaveProperty("kala");
  });
  it("resets search input when reset button is clicked", async () => {
    const { user } = render(RecipeSearch, {
      props: { searchTerm, tags, titles },
    });
    const searchInput = screen.getByTestId("input-search");
    await user.type(searchInput, "kala");
    expect(searchInput).toHaveValue("kala");

    const button = screen.queryByLabelText("Reset search button");
    await user.click(button);

    expect(searchInput).toHaveValue("");
  });
  it("sets search input when tag is clicked", async () => {
    const { user } = render(RecipeSearch, {
      props: { searchTerm, tags, titles },
    });
    const searchInput = screen.getByTestId("input-search");
    expect(searchInput).toHaveValue("");

    const button = screen.queryByLabelText("Tag: kala");
    await user.click(button);

    expect(searchInput).toHaveValue("kala");
  });
});
