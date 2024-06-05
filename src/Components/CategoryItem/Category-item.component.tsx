import { useNavigate } from "react-router-dom";
import Category from "../../types/category.types";
import { CategoryItemContainer, CategoryName } from "./Category-item.styles";
interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const navigate = useNavigate();

  const handleExplorerClick = () => {
    navigate(`/category/${category.id}`);
  };

  return (
    <>
      <CategoryItemContainer $backgroundImage={category.imageUrl}>
        <CategoryName onClick={handleExplorerClick}>
          <p>{category.displayName}</p>
          <p>Explorar</p>
        </CategoryName>
      </CategoryItemContainer>
    </>
  );
};

export default CategoryItem;
