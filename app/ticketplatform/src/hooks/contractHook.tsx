import { createContext, useContext, useState } from "react";
import { ethers } from "ethers";
import { ReactNode } from "react";

interface ContractContextType {
  contract: ethers.Contract | null;
  setContract: React.Dispatch<React.SetStateAction<ethers.Contract | null>>;
}

const ContractContext = createContext<ContractContextType | null>(null);


interface ContractProviderProps {
  children: ReactNode;
}

export const ContractProvider = ({ children }: ContractProviderProps) => {
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  return (
    <ContractContext.Provider value={{ contract, setContract }}>
      {children}
    </ContractContext.Provider>
  );
};

export const useContract = () => useContext(ContractContext);