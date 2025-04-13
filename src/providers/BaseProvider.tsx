import { AppContext } from "../context/app_context";
import React, { ReactNode, useState } from "react";

interface AppProviderProps {
  children: ReactNode;
}

const BaseProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState([]);
  
  return <AppContext.Provider value={{
    user,
    setUser,
    cartItems,
    setCartItems, 
  }}>{children}</ AppContext.Provider>
}

export default BaseProvider;
