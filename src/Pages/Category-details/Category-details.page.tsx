import { useParams } from "react-router-dom";
import CategoryDetails from "../../Components/CategoryDetails/CategoryDetails.component";
import Header from "../../Components/Header/Header.component";

const CategoryDetailsPage = () => {
  const { id } = useParams();

  if (!id) return null;

  return (
    <>
      <Header />
      <CategoryDetails categoryId={id} />
    </>
  );
};

export default CategoryDetailsPage;
