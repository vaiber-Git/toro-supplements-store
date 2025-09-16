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

export const CartDropdownStateContext = createContext (

    {
        currentState : false,
        setCurrentState : () => {},
        cartItems : [],
        addItemToCart : () => {},
        cartItemsCount : 0,
    }
);

export const CartDropdownStateProvider = ({ children }) => {

    const [currentState, setCurrentState] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    useEffect(() =>{
        const currentCount = cartItems.reduce((total, cartItem) => total = total + cartItem.quantity , 0);
        setCartItemsCount(currentCount);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {

        setcartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { currentState, setCurrentState, cartItems, addItemToCart, cartItemsCount };

    return <CartDropdownStateContext.Provider value={value}>{children}</CartDropdownStateContext.Provider>;
}