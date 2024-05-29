import Category from "../../types/category.types";

import "./Category-item.styles.css";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <>
      <div
        className="categoryItemContainer"
        style={{ backgroundImage: category.imageUrl }}
      >
        <div className="categoryName">
          <p>{category.displayName}</p>
          <p>Explorar</p>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
