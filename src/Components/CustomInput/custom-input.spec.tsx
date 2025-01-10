import { render } from "@testing-library/react";
import CustomInput from "./CustomInput.component";
import "@testing-library/jest-dom";
import Colors from "../../Theme/Theme.colors";

describe("Custom Input", () => {
  it("Should render with error if hasError is true", () => {
    const { getByPlaceholderText } = render(
      <CustomInput $hasError={true} placeholder="Lorem Ipsum" />
    );
    const input = getByPlaceholderText("Lorem Ipsum");
    expect(input).toHaveStyle({ border: `2px solid ${Colors.error}` });
  });

  it("Should render without error if hasError is false", () => {
    const { getByPlaceholderText } = render(
      <CustomInput $hasError={false} placeholder="Lorem Ipsum" />
    );
    const input = getByPlaceholderText("Lorem Ipsum");
    expect(input).toHaveStyle({ border: `none` });
  });
});
