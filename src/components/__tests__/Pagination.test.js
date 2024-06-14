import { render, screen, within } from "../../../test/helper";
import Pagination from "../Pagination.vue";

describe("Pagination", () => {
  it("renders", () => {
    render(Pagination, { props: { currentPage: 1, pageCount: 3 } });
    expect(screen.getByTestId("pagination-component")).toBeInTheDocument();
  });

  it("displays if page count > 1", () => {
    render(Pagination, { props: { currentPage: 1, pageCount: 3 } });
    expect(screen.getByTestId("pagination-component")).toBeInTheDocument();
  });

  it("does not display if page count is 1", () => {
    render(Pagination, { props: { currentPage: 1, pageCount: 1 } });
    expect(
      screen.queryByTestId("pagination-component")
    ).not.toBeInTheDocument();
  });

  describe("buttons", () => {
    it("displays next page button on first page", () => {
      render(Pagination, { props: { currentPage: 1, pageCount: 3 } });
      expect(screen.queryByLabelText("Next page button")).toBeVisible();
    });

    it("does not display previous page button on first page", () => {
      render(Pagination, { props: { currentPage: 1, pageCount: 3 } });
      expect(screen.queryByLabelText("Previous page button")).not.toBeVisible();
    });

    it("displays previous page button on page last page", () => {
      render(Pagination, { props: { currentPage: 3, pageCount: 3 } });
      expect(screen.queryByLabelText("Previous page button")).toBeVisible();
    });

    it("does not display next page button on last page", () => {
      render(Pagination, { props: { currentPage: 3, pageCount: 3 } });
      expect(screen.queryByLabelText("Next page button")).not.toBeVisible();
    });

    it("displays both next page and previous page buttons on pages not first or last", () => {
      render(Pagination, { props: { currentPage: 2, pageCount: 3 } });
      expect(screen.queryByLabelText("Next page button")).toBeVisible();
      expect(screen.queryByLabelText("Previous page button")).toBeVisible();
    });
  });

  describe("page indices", () => {
    it("displays correct total amount", () => {
      render(Pagination, { props: { currentPage: 1, pageCount: 3 } });
      const indices = screen.queryAllByLabelText("Page index");
      expect(indices.length).toBe(3);
    });

    it("displays correct active amount", () => {
      render(Pagination, { props: { currentPage: 1, pageCount: 3 } });
      const indices = screen.queryAllByLabelText("Active page index");
      expect(indices.length).toBe(1);
    });

    it("displays correct non-active amount", () => {
      render(Pagination, { props: { currentPage: 1, pageCount: 3 } });
      const indices = screen.queryAllByLabelText("Non-active page index");
      expect(indices.length).toBe(2);
    });

    it("displays active index on correct position ", () => {
      render(Pagination, { props: { currentPage: 1, pageCount: 3 } });
      const indices = screen.queryAllByLabelText("Page index");
      const activeIndex = within(indices[0]).getByLabelText(
        "Active page index"
      );

      expect(activeIndex).toBeInTheDocument();
    });

    it("does not display active index on other positions ", () => {
      render(Pagination, { props: { currentPage: 1, pageCount: 3 } });
      const indices = screen.queryAllByLabelText("Page index");
      const index1 = within(indices[1]).queryByLabelText("Active page index");
      const index2 = within(indices[2]).queryByLabelText("Active page index");

      expect(index1).not.toBeInTheDocument();
      expect(index2).not.toBeInTheDocument();
    });

    it("displays non-active index on correct positions ", () => {
      render(Pagination, { props: { currentPage: 1, pageCount: 3 } });
      const indices = screen.queryAllByLabelText("Page index");
      const index1 = within(indices[1]).queryByLabelText(
        "Non-active page index"
      );
      const index2 = within(indices[2]).queryByLabelText(
        "Non-active page index"
      );

      expect(index1).toBeInTheDocument();
      expect(index2).toBeInTheDocument();
    });

    it("does not display non-active index on active position ", () => {
      render(Pagination, { props: { currentPage: 1, pageCount: 3 } });
      const indices = screen.queryAllByLabelText("Page index");
      const index = within(indices[0]).queryByLabelText(
        "Non-active page index"
      );

      expect(index).not.toBeInTheDocument();
    });

    describe("when user clicks pagination buttons", () => {
      it.todo(
        "active index updates correctly when next page button is clicked",
        async () => {
          const { user } = render(Pagination, {
            props: { currentPage: 1, pageCount: 3 },
          });

          const button = screen.queryByLabelText("Next page button");
          await user.click(button);
        }
      );
      it.todo(
        "active index updates correctly when previous page button is clicked",
        () => {}
      );
    });
  });
});
