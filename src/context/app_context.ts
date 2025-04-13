import { createContext } from "react";

interface IAppContextType {
    user: any;
    setUser: (value: any) => void;
    cartItems: any;
    setCartItems: (value: any) => void;
}

export const AppContext = createContext<IAppContextType | undefined>(undefined);
