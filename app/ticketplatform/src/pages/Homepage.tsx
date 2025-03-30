import { useState, useEffect, useRef } from "react";
import homepageStyles from "../styles/Homepage.module.css";
import { useContract } from "../hooks/contractHook";
import { Link } from "react-router-dom";
import { useEventList } from "../hooks/eventListHook";
import { toast } from "react-toastify";

interface Event {
    name: string;
    description: string;
    date: number;
    organizer: string;
    ticketCount: number;
    ticketSold: number;
    ticketPrice: number;
}

function Homepage() {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
    const [showSearchResults, setShowSearchResults] = useState(false);

    const { contract } = useContract() || {};
    const searchContainerRef = useRef<HTMLDivElement>(null);

    const eventList = useEventList();

    const loadEvents = async () => {
        if (eventList.eventList.length > 0) return;
                let i = 1;
                const currentTimestamp = Math.floor(Date.now() / 1000); // Current time in seconds
                const upcomingEvents: Event[] = [];
        
                try {
                    while (true) {
                        const event = contract ? await contract.getEventDetails(i) : null;
                        if (!event || event.name === '') break;
                        upcomingEvents.push(event);
                        i++;
                    }
        
                    eventList.setEventList(upcomingEvents);
                } catch (error) {
                    toast.error(error as string, { toastId: "failed-loading-events" });
                }
    };

    useEffect(() => {
        loadEvents();
    }, [contract]);

    // Filter events in real-time as the user types
    useEffect(() => {
        setFilteredEvents(
            eventList.eventList.filter(event =>
                event.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, eventList.eventList]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setSearchTerm(event.target.value);
        } catch (error) {
            toast.error("An error occurred while updating the search term.", { toastId: "input-change-error" });
        }
    };

    const handleInputFocus = () => {
        try {
            setShowSearchResults(true);
        } catch (error) {
            toast.error("An error occurred while focusing on the input.", { toastId: "input-focus-error" });
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            try {
                if (
                    searchContainerRef.current &&
                    !searchContainerRef.current.contains(event.target as Node)
                ) {
                    setShowSearchResults(false);
                }
            } catch (error) {
                toast.error("An error occurred while handling outside click.", { toastId: "click-outside-error" });
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);



    return (
        <>
            <div className={homepageStyles["search-event-container"]} ref={searchContainerRef}>
                <input type="text"
                    placeholder="Search for events"
                    className={homepageStyles["search-event"]}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />

                {showSearchResults && filteredEvents.length > 0 && (
                    <div className={homepageStyles["search-content-container"]}>
                        {filteredEvents.map((event, index) => (
                            <li key={index} className={homepageStyles["content-list"]}>
                                <Link
                                    to={`/event/${index + 1}`} // Pass the event index or ID in the URL
                                    state={{ id: index }} // Pass the ID via state (optional, but useful for additional data)
                                    className={homepageStyles["content-link"]}
                                >
                                    {event.name}
                                </Link>
                            </li>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Homepage;