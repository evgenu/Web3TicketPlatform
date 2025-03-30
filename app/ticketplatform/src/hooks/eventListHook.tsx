import { createContext, useContext, useState } from "react";
import { ethers } from "ethers";
import { ReactNode } from "react";

interface Event {
    name: string;
    description: string;
    date: number;
    organizer: string;
    ticketCount: number;
    ticketSold: number;
    ticketPrice: number;
}

interface EventListContextType {
  eventList: Event[];
  setEventList: React.Dispatch<React.SetStateAction<Event[]>>;
}

const EventListContext = createContext<EventListContextType>({ eventList: [], setEventList: () => {} });


interface ContractProviderProps {
  children: ReactNode;
}

export const EventListProvider = ({ children }: ContractProviderProps) => {
  const [eventList, setEventList] = useState<Event[]>([]);

  return (
    <EventListContext.Provider value={{ eventList, setEventList }}>
      {children}
    </EventListContext.Provider>
  );
};

export const useEventList = () => useContext(EventListContext);