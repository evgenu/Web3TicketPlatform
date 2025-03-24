import { createContext, useContext, useState } from "react";
import { ethers } from "ethers";
import { ReactNode } from "react";

interface UserContextType {
  user: ethers.Signer | null;
  setUser: React.Dispatch<React.SetStateAction<ethers.Signer | null>>;
}

const UserContext = createContext<UserContextType | null>(null);


interface ContractProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: ContractProviderProps) => {
  const [user, setUser] = useState<ethers.Signer | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);