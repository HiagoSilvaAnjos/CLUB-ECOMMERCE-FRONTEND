import { render } from "@testing-library/react";
import LoadingComponent from "./Loading.component";

describe("loading", () => {
  it("should show a message if there is one", () => {
    const { getByText } = render(<LoadingComponent message="loading..." />);
    getByText("loading...");
  });
});
