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
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const {
    isVisible,
    toggleCart,
    products,
    productsTotalPrice,
    productsTotalQuantity,
  } = useContext(CartContext);

  const handleCheckoutClick = () => {
    navigate("/checkout");
    toggleCart();
  };

  return (
    <>
      <CartContainer $isVisible={isVisible}>
        <CartEscapeArea onClick={toggleCart} />
        <CartContent>
          <CartTitle>Seu Carrinho</CartTitle>

          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}

          {productsTotalQuantity > 0 ? (
            <div>
              <CartTotal>Total: R${productsTotalPrice}</CartTotal>
              <CustomButton
                startIcon={<BsCartCheck />}
                onClick={handleCheckoutClick}
              >
                Ir para o Checkout
              </CustomButton>
            </div>
          ) : (
            <div>Seu Carrinho está vazio...</div>
          )}
        </CartContent>
      </CartContainer>
    </>
  );
};

export default Cart;
