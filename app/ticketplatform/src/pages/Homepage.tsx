import { useState, useEffect, useRef } from "react";
import homepageStyles from "../styles/Homepage.module.css";
import { useContract } from "../hooks/contractHook";
import { Link } from "react-router-dom";
import { useEventList } from "../hooks/eventListHook";
import { toast } from "react-toastify";
import HotEventCard from "../components/HotEventCard";
import eventListStyles from "../styles/EventList.module.css";

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
    const [showSearchResults, setShowSearchResults] = useState(false);

    const searchContainerRef = useRef<HTMLDivElement>(null);

    const eventList = useEventList();
    const { contract } = useContract() || {};

    const loadEvents = async () => {
        if (eventList.eventList.length > 0) return;
        let i = 1;
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
            console.error("Error loading events:", error);
            toast.error("Failed to load events. Please try again later.", { toastId: "failed-loading-events" });
        }
    };

    useEffect(() => {
        loadEvents();
    }, [contract]);

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
    
    const hotEvents = eventList.eventList
        .filter(event =>
            Number(event.date) > Math.floor(Date.now() / 1000) && 
            event.ticketSold < event.ticketCount
        )
        .sort((a, b) => Number(a.date) - Number(b.date)) 
        .slice(0, 10); 

    return (
        <>
            <div className={homepageStyles["search-event-container"]} ref={searchContainerRef}>
                <input type="text"
                    placeholder="Search for events"
                    className={homepageStyles["search-event"]}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />

                {showSearchResults && (
                    <div className={homepageStyles["search-content-container"]}>
                        {eventList.eventList
                            .filter(event =>
                                event.name.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((event, index) => (event.date > Math.floor(Date.now() / 1000) && event.ticketSold < event.ticketCount) && (
                                <li key={index} className={homepageStyles["content-list"]}>
                                    <Link
                                        to={`/event/${eventList.eventList.indexOf(event) + 1}`}
                                        state={{ id: index }}
                                        className={homepageStyles["content-link"]}
                                    >
                                        {event.name}
                                    </Link>
                                </li>
                            ))}
                        {eventList.eventList.filter(event =>
                            event.name.toLowerCase().includes(searchTerm.toLowerCase())
                        ).length === 0 && (
                                <p className={homepageStyles["no-results"]}>No events found</p>
                            )}
                    </div>
                )}
            </div>

            <h2 className={homepageStyles["hot-events-tittle"]}>Hot Events</h2>

            <div className={eventListStyles["hot-events-container"]}>
                {hotEvents.map((event, index) => (event.date > Math.floor(Date.now() / 1000) && event.ticketSold < event.ticketCount) && (
                    <HotEventCard
                        key={index}
                        id={eventList.eventList.indexOf(event) + 1} 
                        name={event.name}
                        date={Number(event.date)} 
                        description={event.description}
                    />
                ))}
            </div>
        </>
    )
}

export default Homepage;