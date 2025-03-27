import EventList from "../components/EventList";
import { useContract } from "../hooks/contractHook";
import { useUser } from "../hooks/userHook";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Contract } from "ethers";

const Events = () => {

    const contract = useContract();
    const user = useUser();

    const [contAddr, setContractAddr] = useState<string>('asd');
    const [usrAddr, setUsrAddr] = useState<string>('');

    useEffect(() => {
        contract?.contract?.owner().then((res) => {
            setContractAddr(res);
        }
        );

        user?.user?.getAddress().then((res) => {
            setUsrAddr(res);
        }
        );
    }, [contract, user]);

    return (
        <>

        {
            contAddr == usrAddr ? <Link to={"/createEvent"}>Create Event</Link> : <></>
        }

        <EventList />
        
        </>
    )
}

export default Events;