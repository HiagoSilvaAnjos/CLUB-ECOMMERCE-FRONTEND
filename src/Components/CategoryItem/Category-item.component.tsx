import Category from "../../types/category.types";
import { CategoryItemContainer, CategoryName } from "./Category-item.styles";
interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <>
      <CategoryItemContainer $backgroundImage={category.imageUrl}>
        <CategoryName>
          <p>{category.displayName}</p>
          <p>Explorar</p>
        </CategoryName>
      </CategoryItemContainer>
    </>
  );
};

export default CategoryItem;
