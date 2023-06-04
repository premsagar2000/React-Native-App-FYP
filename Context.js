import React, { createContext, useState } from 'react';
export const MyContext = createContext();
export const MyContextProvider = ({ children }) => {
    const [data, setData] = useState(null);
  
    const setDataValue = (value) => {
      setData(value);
    };
  
    return (
      <MyContext.Provider value={{ data, setDataValue }}>
        {children}
      </MyContext.Provider>
    );
  };
  