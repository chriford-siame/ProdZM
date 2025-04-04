import { createContext } from "react";

interface IAppContextType {
    cartItems: any
    setCartItems: (value: any) => void;
}

export const AppContext = createContext<IAppContextType | undefined>(undefined);
