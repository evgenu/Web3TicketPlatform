import EventList from "../components/EventList";
import { useContract } from "../hooks/contractHook";
import { useUser } from "../hooks/userHook";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Contract } from "ethers";
import { toast } from "react-toastify";
import createEventStyle from "../styles/CreateEvent.module.css";

const Events = () => {

    const contract = useContract();
    const user = useUser();

    const [contAddr, setContractAddr] = useState<string>('asd');
    const [usrAddr, setUsrAddr] = useState<string>('');

    useEffect(() => {
        contract?.contract?.owner()
            .then((res) => {
                setContractAddr(res);
            })
            .catch((err) => {
                console.error("Error fetching contract owner:", err);
                toast.error("Failed to fetch contract owner.", { toastId: "contract-owner-error" });
            });

        user?.user?.getAddress()
            .then((res) => {
                setUsrAddr(res);
            })
            .catch((err) => {
                console.error("Error fetching user address:", err);
                toast.error("Failed to fetch user address.", { toastId: "user-address-error" });
            });
    }, [contract, user]);

    return (
        <>

            {
                contAddr == usrAddr ?
                    <div className={createEventStyle["create-event-button-container"]}>
                        <Link to={"/createEvent"} className={createEventStyle["create-event-button"]}>
                            Create Event
                        </Link>
                    </div>
                    :
                    <></>
            }

            <EventList />

        </>
    )
}

export default Events;