import { createContext, useMemo, useState } from "react";
import CartProduct from "../types/cart.types.";
import Product from "../types/product.types";

interface ICartContext {
  isVisible: boolean;
  productsTotalPrice: number;
  productsTotalQuantity: number;
  products: CartProduct[];
  toggleCart: () => void;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: string) => void;
  increaseProductFromCart: (productId: string) => void;
  decreaseProductFromCart: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  productsTotalPrice: 0,
  productsTotalQuantity: 0,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  increaseProductFromCart: () => {},
  decreaseProductFromCart: () => {},
});

interface CartContextProviderProps {
  children: React.ReactNode;
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<CartProduct[]>([]);

  const productsTotalPrice = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.quantity;
    }, 0);
  }, [products]);

  const productsTotalQuantity = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.quantity;
    }, 0);
  }, [products]);

  const toggleCart = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const addProductToCart = (product: Product) => {
    const productIsAlreadyInCart = products.some(
      (item) => item.id === product.id
    );
    if (productIsAlreadyInCart) {
      setProducts((prevProducts) =>
        prevProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setProducts((prevState) => [...prevState, { ...product, quantity: 1 }]);
    }
  };

  const removeProductFromCart = (productId: string) => {
    setProducts((products) =>
      products.filter((product) => product.id !== productId)
    );
  };

  const increaseProductFromCart = (productId: string) => {
    setProducts((products) =>
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseProductFromCart = (productId: string) => {
    setProducts((products) =>
      products
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        productsTotalPrice,
        productsTotalQuantity,
        toggleCart,
        addProductToCart,
        removeProductFromCart,
        increaseProductFromCart,
        decreaseProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
