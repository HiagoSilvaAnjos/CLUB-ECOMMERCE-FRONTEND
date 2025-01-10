import { render } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage.component";
import Colors from "../../Theme/Theme.colors";
import "@testing-library/jest-dom";

describe("ErrorMessage", () => {
  it("should return an error message", () => {
    const { getByText } = render(<ErrorMessage>Error Message</ErrorMessage>);
    getByText("Error Message");
  });

  it("should return an error message with color red", () => {
    const { getByText } = render(<ErrorMessage>Error Message</ErrorMessage>);
    const message = getByText("Error Message");
    expect(message).toHaveStyle({ color: Colors.error });
  });
});
