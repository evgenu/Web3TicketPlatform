import createEventStyles from '../styles/CreateEvent.module.css';

interface Event {
    name: string;
    description: string;
    date: number;
    organizer: string;
    ticketCount: number;
    ticketSold: number;
    ticketPrice: number;
}

const CreateEvent = () => {

    return ( 
        <div className={createEventStyles["create-event-container"]}>

            <h1 className={createEventStyles["create-event-h1"]}>Create Event</h1>

            <input type="text" placeholder="Event Name" className={createEventStyles["input-name"]}/>
            <input type="text" placeholder="Event Description" className={createEventStyles["input-description"]}/>
            <input type="text" placeholder="Organizer" className={createEventStyles["input-organizer"]}/>
            <input type="date" placeholder="Event Date" className={createEventStyles["input-date"]}/>
            <input type="number" placeholder="Ticket Price" className={createEventStyles["input-price"]}/>
            <input type="number" placeholder="Ticket Count" className={createEventStyles["input-count"]}/>
            <button className={createEventStyles["create-button"]}>Create Event</button>

        </div>
     );

}

export default CreateEvent;