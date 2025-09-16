import { createContext, useState } from 'react';

export const CartDropdownStateContext = createContext (

    {
        currentState : false,
        setCurrentState : () => {},
    }
);

export const CartDropdownStateProvider = ({ children }) => {

    const [currentState, setCurrentState] = useState(false);

    const value = { currentState, setCurrentState };

    return <CartDropdownStateContext.Provider value={value}>{children}</CartDropdownStateContext.Provider>;
}