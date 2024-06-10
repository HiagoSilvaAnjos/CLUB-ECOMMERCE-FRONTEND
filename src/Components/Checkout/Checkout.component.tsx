import { useContext, useEffect, useState } from "react";

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
import axios from "axios";
import LoadingComponent from "../Loading/Loading.component";

const Checkout = () => {
  const { products, productsTotalPrice } = useContext(CartContext);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (products.length < 1) {
      return navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const handleFinishPurchaseClick = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-checkout-session`!,
        {
          products,
        }
      );

      window.location.href = data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LoadingComponent />}
      <CheckoutContainer>
        <CheckoutTitle>Checkout</CheckoutTitle>

        <CheckoutProducts>
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </CheckoutProducts>

        <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>

        <CustomButton
          startIcon={<BsBagCheck size={20} />}
          onClick={handleFinishPurchaseClick}
        >
          Finalizar Compra
        </CustomButton>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
