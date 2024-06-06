import { useContext, useEffect } from "react";

import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal,
} from "./Checkout.styles";
import CustomButton from "../CustomButtton/CustomButton.component";
import { BsBagCheck } from "react-icons/bs";
import CartItem from "../Cart-Item/Cart-Item.component";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { products, productsTotalPrice } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (products.length < 1) {
      console.log("passou");
      return navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <>
      <CheckoutContainer>
        <CheckoutTitle>Checkout</CheckoutTitle>

        <CheckoutProducts>
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </CheckoutProducts>

        <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>

        <CustomButton startIcon={<BsBagCheck size={20} />}>
          Finalizar Compra
        </CustomButton>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
