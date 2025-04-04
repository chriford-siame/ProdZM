import { AppContext } from "../context/app_context";
import React, { ReactNode, useState } from "react";

interface AppProviderProps {
  children: ReactNode;
}

const BaseProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  return <AppContext.Provider value={{
    cartItems,
    setCartItems, 
  }}>{children}</ AppContext.Provider>
}

export default BaseProvider;
