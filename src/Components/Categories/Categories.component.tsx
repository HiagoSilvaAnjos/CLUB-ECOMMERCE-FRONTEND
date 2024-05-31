/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";

import Category from "../../types/category.types";

import CategoryItem from "../CategoryItem/Category-item.component";

import { CategoriesContainer, CategoriesContent } from "./Categories.styles";
import { db } from "../../config/firebase.config";
import { categoryConverter } from "../../converters/firestore.converter";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const categoriesFromFireStore: Category[] = [];
      const QuerySnapshot = await getDocs(
        collection(db, "categories").withConverter(categoryConverter)
      );

      QuerySnapshot.forEach((doc) => {
        categoriesFromFireStore.push(doc.data());
      });

      setCategories(categoriesFromFireStore);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContainer>
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
