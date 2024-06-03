import { createContext, useState } from "react";

import Category from "../types/category.types";

import { collection, getDocs } from "firebase/firestore";

import { categoryConverter } from "../converters/firestore.converter";

import { db } from "../config/firebase.config";

interface ICategoriesContext {
  categories: Category[];
  isLoading: boolean;
  fetchCategories: () => Promise<void>;
}

export const CategoryContext = createContext<ICategoriesContext>({
  categories: [],
  isLoading: false,
  fetchCategories: () => Promise.resolve(),
});

interface CategoryContextProviderProps {
  children: React.ReactNode;
}

const CategoryContextProvider = ({
  children,
}: CategoryContextProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CategoryContext.Provider
      value={{ categories, isLoading, fetchCategories }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
