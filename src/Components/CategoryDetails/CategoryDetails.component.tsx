import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Category from "../../types/category.types";
import { db } from "../../config/firebase.config";

import LoadingComponent from "../Loading/Loading.component";
import ProductItem from "../ProductItem/ProductItem.component";

import { collection, getDocs, query, where } from "firebase/firestore";
import { categoryConverter } from "../../converters/firestore.converter";

import {
  CategoryTitle,
  Container,
  IconContainer,
  ProductsContainer,
} from "./CategoryDetails.styles";

import { BiChevronLeft } from "react-icons/bi";

interface CategoryDetailsProps {
  categoryId: string;
}

const CategoryDetails = ({ categoryId }: CategoryDetailsProps) => {
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setIsLoading(true);
        const querySnapshot = await getDocs(
          query(
            collection(db, "categories").withConverter(categoryConverter),
            where("id", "==", categoryId)
          )
        );

        const category = querySnapshot.docs[0]?.data();

        setCategory(category);
      } catch (error) {
        console.log({ error });
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackHomePageClick = () => {
    navigate("/");
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <Container>
        <CategoryTitle>
          <IconContainer onClick={handleBackHomePageClick}>
            <BiChevronLeft size={36} />
          </IconContainer>
          <p>Explorar {category?.displayName}</p>
        </CategoryTitle>
        <ProductsContainer>
          {category?.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ProductsContainer>
      </Container>
    </>
  );
};

export default CategoryDetails;
