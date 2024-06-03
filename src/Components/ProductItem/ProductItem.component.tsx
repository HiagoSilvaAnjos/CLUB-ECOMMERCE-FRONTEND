import Product from "../../types/product.types";
import {
  ProductContainer,
  ProductImage,
  ProductInfo,
} from "./ProductItem.styles";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <>
      <ProductContainer>
        <ProductImage imageUrl={product.imageUrl}></ProductImage>
        <ProductInfo>
          <p>{product.name}</p>
          <p>R${product.price}</p>
        </ProductInfo>
      </ProductContainer>
    </>
  );
};

export default ProductItem;
