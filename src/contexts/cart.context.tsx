import { createContext, useState } from "react";
import CartProduct from "../types/cart.types.";
import Product from "../types/product.types";

interface ICartContext {
  isVisible: boolean;
  products: CartProduct[];
  toggleCart: () => void;
  addProductToCart: (product: Product) => void;
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {},
});

interface CartContextProviderProps {
  children: React.ReactNode;
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProduct] = useState<CartProduct[]>([]);

  const toggleCart = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const addProductToCart = (product: Product) => {
    setProduct((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  return (
    <>
      <CartContext.Provider
        value={{ isVisible, products, toggleCart, addProductToCart }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
