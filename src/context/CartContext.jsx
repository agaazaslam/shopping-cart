import { useState, createContext, useContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Context Methods
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const itemIndex = prev.findIndex((cartItem) => cartItem.id == item.id);

      if (itemIndex !== -1) {
        const updatedCart = [...prev];
        const quantity = item.quantity;
        updatedCart[itemIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prev, item];
      }
    });
  };

  const handleGetTotal = () => {
    let quantity = 0;
    if (cart.length == 0) {
      return quantity;
    }
    cart.forEach((cartItem) => (quantity += cartItem.quantity));
    return quantity;
  };

  const handleDelete = (item) => {
    setCart((prev) => {
      const filter = prev.filter((cardItem) => cartItem.id !== item.id);
      return filter;
    });
  };

  const handleTotalPrice = () => {
    let total = 0;
    cart.forEach((cartItem) => (total += cartItem.quantity * cartItem.price));
    return total;
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleGetTotal,
        handleDelete,
        handleTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
