import { BsCartPlus } from "react-icons/bs";

import Product from "../../types/product.types";

import CustomButton from "../CustomButtton/CustomButton.component";

import {
  ProductContainer,
  ProductImage,
  ProductInfo,
} from "./ProductItem.styles";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { addProductToCart } = useContext(CartContext);

  return (
    <>
      <ProductContainer>
        <ProductImage $imageUrl={product.imageUrl}>
          <CustomButton
            startIcon={<BsCartPlus />}
            onClick={() => addProductToCart(product)}
          >
            Adicionar ao Carrinho
          </CustomButton>
        </ProductImage>
        <ProductInfo>
          <p>{product.name}</p>
          <p>R${product.price}</p>
        </ProductInfo>
      </ProductContainer>
    </>
  );
};

export default ProductItem;
