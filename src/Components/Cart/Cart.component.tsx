import { BsCartCheck } from "react-icons/bs";

import CustomButton from "../CustomButtton/CustomButton.component";
import CartItem from "../Cart-Item/Cart-Item.component";

import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal,
} from "./Cart.styles";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const Cart = () => {
  const { isVisible, toggleCart, products } = useContext(CartContext);

  return (
    <>
      <CartContainer $isVisible={isVisible}>
        <CartEscapeArea onClick={toggleCart} />
        <CartContent>
          <CartTitle>Seu Carrinho</CartTitle>

          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}

          <CartTotal>Total: R$ 300,00</CartTotal>
          <CustomButton startIcon={<BsCartCheck />}>
            Ir para o Checkout
          </CustomButton>
        </CartContent>
      </CartContainer>
    </>
  );
};

export default Cart;
