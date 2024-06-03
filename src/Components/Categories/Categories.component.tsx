/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect } from "react";

import CategoryItem from "../CategoryItem/Category-item.component";

import { CategoriesContainer, CategoriesContent } from "./Categories.styles";

import { CategoryContext } from "../../contexts/category.context";
import LoadingComponent from "../Loading/Loading.component";

const Categories = () => {
  const { categories, isLoading, fetchCategories } =
    useContext(CategoryContext);

  console.log(isLoading);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContainer>
      {isLoading && <LoadingComponent />}
      <CategoriesContent>
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <CategoryItem category={category} />
            </div>
          );
        })}
      </CategoriesContent>
    </CategoriesContainer>
  );
};

export default Categories;
