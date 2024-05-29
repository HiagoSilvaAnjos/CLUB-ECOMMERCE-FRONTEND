/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
// import axios from "axios";

import Category from "../../types/category.types";
// import env from "../../config/env.config";

import CategoryItem from "../Category-item/Category-item.component";
import "./Categories.styles.css";
import { CategoriesContainer, CategoriesContent } from "./Categories.styles";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "1",
      displayName: "teste",
      imageUrl:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm91cGFzfGVufDB8fDB8fHww",
      name: "teste",
    },
    {
      id: "2",
      displayName: "teste 2",
      imageUrl:
        "https://images.unsplash.com/photo-1542060748-10c28b62716f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm91cGFzfGVufDB8fDB8fHww",
      name: "teste",
    },
    {
      id: "3",
      displayName: "teste 3",
      imageUrl:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJvdXBhc3xlbnwwfHwwfHx8MA%3D%3D",
      name: "teste",
    },
    {
      id: "4",
      displayName: "teste 4",
      imageUrl:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvdXBhc3xlbnwwfHwwfHx8MA%3D%3D",
      name: "teste",
    },
    {
      id: "5",
      displayName: "teste 5",
      imageUrl:
        "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJvdXBhc3xlbnwwfHwwfHx8MA%3D%3D",
      name: "teste",
    },
  ]);

  // const fetchCategories = async () => {
  //   try {
  //     const { data } = await axios.get(`${env.apiUrl}/api/category`);
  //     console.log("Deu bom");
  //     setCategories(data);
  //   } catch (error) {
  //     console.log("Deu ruim");
  //   }
  // };

  // useEffect(() => {
  //   fetchCategories();
  // }, []);

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
