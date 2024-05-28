/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useEffect, useState } from "react";
// import axios from "axios";

// import Category from "../../types/category.types";
// import env from "../../config/env.config";

import "./Categories.styles.css";

const Categories = () => {
  // const [categories, setCategories] = useState<Category[]>([]);

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
    <div className="categoriesContainer">
      <div className="categoriesContent"></div>
    </div>
  );
};

export default Categories;
