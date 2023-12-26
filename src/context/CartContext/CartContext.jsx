import PropTypes from 'prop-types';
import { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const MIN_ORDER_QTY = 1;
  const MAX_ORDER_QTY = 10;

  const [cartItems, setCartItems] = useState(
    localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []
  );

  // TODO: Add a function to add an item to the cart
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, orderQuantity: cartItem.orderQuantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, orderQuantity: 1 }]);
    }
  };

  // TODO: Add a function to remove an item from the cart
  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.orderQuantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, orderQuantity: cartItem.orderQuantity - 1 }
            : cartItem
        )
      );
    }
  };

  // TODO: Add a function remove directly an item from the cart
  const removeDirectlyFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  // TODO: Add a function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // TODO: Add a function calculate the total price of the cart
  const getCartTotal = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.orderQuantity,
      0
    );

    return total;
  };

  useEffect(() => {
    const data = localStorage.getItem('cartItems');
    if (data) {
      setCartItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        MIN_ORDER_QTY,
        MAX_ORDER_QTY,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        removeDirectlyFromCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
