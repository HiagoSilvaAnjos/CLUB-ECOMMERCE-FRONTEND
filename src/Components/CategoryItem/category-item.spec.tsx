import { render } from "@testing-library/react";
import Category from "../../types/category.types";
import CategoryItem from "./Category-item.component";
import { BrowserRouter } from "react-router-dom";

describe("Category Item", () => {
  it("should render a category correctly", () => {
    const category: Category = {
      id: "1",
      displayName: "Lorem Ipsum",
      imageUrl: "image_url",
      name: "lorem-ipsum",
      products: [],
    };

    const { getByText } = render(
      <BrowserRouter>
        <CategoryItem category={category} />
      </BrowserRouter>
    );
    getByText("Lorem Ipsum");
  });
});
