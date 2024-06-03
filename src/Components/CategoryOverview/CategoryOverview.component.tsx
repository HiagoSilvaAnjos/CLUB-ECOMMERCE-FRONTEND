import Category from "../../types/category.types";
import ProductItem from "../ProductItem/ProductItem.component";
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
        <ProductsContainer>
          {category.products.slice(0, 4).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ProductsContainer>
      </CategoryContainer>
    </>
  );
};

export default CategoryOverview;
