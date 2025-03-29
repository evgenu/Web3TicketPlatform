import { useState, useEffect, useRef } from "react";
import homepageStyles from "../styles/Homepage.module.css";
import { useContract } from "../hooks/contractHook";
import { Link } from "react-router-dom";

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
    const [events, setEvents] = useState<Event[]>([]);
    const { contract } = useContract() || {};
    const searchContainerRef = useRef<HTMLDivElement>(null);

    const loadEvents = async () => {
        var i = 1;
        setEvents([]);
        while (true) {
            const event = contract ? await contract.getEventDetails(i) : null;
            if (!event) break;
            if (event.name === '') break;
            setEvents(prevEvents => [...prevEvents, event]);
            i++;
        }
    };

    useEffect(() => {
        loadEvents();
    }, [contract]);

    // Filter events in real-time as the user types
    useEffect(() => {
        setFilteredEvents(
            events.filter(event =>
                event.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, events]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleInputFocus = () => {
        setShowSearchResults(true);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
                if (
                    searchContainerRef.current &&
                    !searchContainerRef.current.contains(event.target as Node)
                ) {
                    setShowSearchResults(false);
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