import EventList from '../components/EventList';
import homepageStyles from "../styles/Homepage.module.css";

function Homepage() {
    return (
        <>
            <h1>Homepage</h1>
            <div className={homepageStyles["search-event-container"]}>
                <input type="text" placeholder="Search for events"
                    className={homepageStyles["search-event"]}></input>
                <button className={homepageStyles["search-event-button"]}>
                    Search
                </button>
            </div>
        </>
    )
}

export default Homepage;