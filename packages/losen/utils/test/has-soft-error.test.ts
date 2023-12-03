import hasSoftError from "../has-soft-error";

describe("has-soft-error", () => {
  it("returns true if error in children", () => {
    expect(
      hasSoftError({
        id: "a-page",
        type: "Page",
        heading: "A page",
        children: [
          {
            type: "Error",
            children: [],
            id: "error-page",
            heading: "So error. Much wrong.",
          },
        ],
      })
    ).toBeTruthy();
  });
});
