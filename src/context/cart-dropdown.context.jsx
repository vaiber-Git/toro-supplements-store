import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    
    return [...cartItems, {...productToAdd, quantity : 1}];

}

const removeCartItem = (cartItems, productToDecrease) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToDecrease.id
    );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDecrease.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );

}

const clearCartItem = (cartItems, productToDelete) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
}

export const CartDropdownStateContext = createContext (

    {
        currentState : false,
        setCurrentState : () => {},
        cartItems : [],
        addItemToCart : () => {},
        cartItemsCount : 0,
        removeItemFromCart : () => {},
        clearItemFromCart : () => {},
        totalAmount : 0,
    }
);

export const CartDropdownStateProvider = ({ children }) => {

    const [currentState, setCurrentState] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [totalAmount, setCartTotal] = useState(0);

    useEffect(() =>{
        const currentCount = cartItems.reduce((total, cartItem) => total = total + cartItem.quantity , 0);
        setCartItemsCount(currentCount);
    }, [cartItems]);

    useEffect(() =>{
        const newCartTotal = cartItems.reduce((amount, cartItem) => amount = amount + cartItem.quantity * cartItem.price , 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {

        setcartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToDecrease) => {

        setcartItems(removeCartItem(cartItems, productToDecrease));
    }

    const clearItemFromCart = (productToDelete) => {

        setcartItems(clearCartItem(cartItems, productToDelete));
    }

    const value = { currentState, setCurrentState, cartItems, addItemToCart, cartItemsCount, removeItemFromCart, clearItemFromCart, totalAmount };

    return <CartDropdownStateContext.Provider value={value}>{children}</CartDropdownStateContext.Provider>;
}