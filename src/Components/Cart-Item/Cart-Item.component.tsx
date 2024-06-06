import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import CartProduct from "../../types/cart.types.";

import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton,
} from "./Cart-item.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const { removeProductFromCart, increaseProductFromCart } =
    useContext(CartContext);

  return (
    <>
      <CartItemContainer>
        <CartItemImage $imageUrl={product.imageUrl} />
        <CartItemInfo>
          <p>{product.name}</p>
          <p>R${product.price}</p>
          <CartItemQuantity>
            <AiOutlineMinus size={20} />
            <p>{product.quantity}</p>
            <AiOutlinePlus
              size={20}
              onClick={() => increaseProductFromCart(product.id)}
            />
          </CartItemQuantity>
        </CartItemInfo>
        <RemoveButton onClick={() => removeProductFromCart(product.id)}>
          <AiOutlineClose size={25} />
        </RemoveButton>
      </CartItemContainer>
    </>
  );
};

export default CartItem;
