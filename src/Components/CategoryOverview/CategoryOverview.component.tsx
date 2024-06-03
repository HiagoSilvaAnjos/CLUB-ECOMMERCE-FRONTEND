import Category from "../../types/category.types";
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer,
} from "./CategoryOverview.styles";

interface CategoryOverviewProps {
  category: Category;
}

const CategoryOverview = ({ category }: CategoryOverviewProps) => {
  return (
    <>
      <CategoryContainer>
        <CategoryTitle>{category.displayName}</CategoryTitle>
        <ProductsContainer></ProductsContainer>
      </CategoryContainer>
    </>
  );
};

export default CategoryOverview;
