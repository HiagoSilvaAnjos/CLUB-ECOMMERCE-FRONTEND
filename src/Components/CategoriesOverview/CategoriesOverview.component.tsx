import { useContext, useEffect } from "react";
import { Container } from "./CategoriesOverview.styles";
import { CategoryContext } from "../../contexts/category.context";
import LoadingComponent from "../Loading/Loading.component";

const CategoriesOverview = () => {
  const { categories, fetchCategories, isLoading } =
    useContext(CategoryContext);

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        {isLoading && <LoadingComponent />}
        {categories.map((category) => (
          <p key={category.id}>{category.displayName}</p>
        ))}
      </Container>
    </>
  );
};

export default CategoriesOverview;
