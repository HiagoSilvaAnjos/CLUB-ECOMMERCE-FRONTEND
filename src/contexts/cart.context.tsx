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
    // verificar se o produto já está no carrinho
    const productIsAlreadyInCart = products.some(
      (item) => item.id === product.id
    );
    // se sim: aumentar sua quantidade
    if (productIsAlreadyInCart) {
      return setProduct((prevProduct) =>
        prevProduct.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }

    // se não: adicioná-lo
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
