import { createContext, useContext, useState } from "react";

const ContractContext = createContext();

export const ContractProvider = ({ children }) => {
  const [contract, setContract] = useState(null);

  return (
    <ContractContext.Provider value={{ contract, setContract }}>
      {children}
    </ContractContext.Provider>
  );
};

export const useContract = () => useContext(ContractContext);