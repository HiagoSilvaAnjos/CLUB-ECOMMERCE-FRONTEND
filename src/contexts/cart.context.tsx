import { createContext, useState } from "react";
import CartProduct from "../types/cart.types.";
import Product from "../types/product.types";

interface ICartContext {
  isVisible: boolean;
  products: CartProduct[];
  toggleCart: () => void;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: string) => void;
  increaseProductFromCart: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  increaseProductFromCart: () => {},
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

  const removeProductFromCart = (productId: string) => {
    setProduct((products) =>
      products.filter((product) => product.id !== productId)
    );
  };

  const increaseProductFromCart = (productId: string) => {
    setProduct((products) =>
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  return (
    <>
      <CartContext.Provider
        value={{
          isVisible,
          products,
          toggleCart,
          addProductToCart,
          removeProductFromCart,
          increaseProductFromCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
