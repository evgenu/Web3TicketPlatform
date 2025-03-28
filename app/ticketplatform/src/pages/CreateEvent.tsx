import { useState } from 'react';
import { useContract } from '../hooks/contractHook';
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

interface FormData {
    name: string;
    description: string;
    date: string;
    ticketCount: string;
    ticketPrice: string;
}

const CreateEvent = () => {

    const contract = useContract();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: '',
        ticketCount: '',
        ticketPrice: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const createEvent = async () => {
        if (!contract?.contract) {
            alert('Contract not loaded');
            return;
        };

        const { name, description, date, ticketCount, ticketPrice } = formData;

        const dateTimeStampMs = Date.parse(date); //get date in milliseconds
        const dateTimeStampSeconds = Math.floor(dateTimeStampMs / 1000); //convert to seconds

        const tx = await contract.contract.createEvent(name, description, dateTimeStampSeconds, ticketCount, ticketPrice);
    };

    return (
        <div className={createEventStyles["create-event-container"]}>

            <h1 className={createEventStyles["create-event-h1"]}>Create Event</h1>

            <input type="text"
                placeholder="Event Name"
                name="name"
                className={createEventStyles["input-name"]}
                value={formData.name}
                onChange={handleChange} 
            />

            <input type="text"
                placeholder="Event Description"
                name="description"
                className={createEventStyles["input-description"]}
                value={formData.description}
                onChange={handleChange} 
            />

            <input type="date"
                placeholder="Event Date"
                name="date"
                className={createEventStyles["input-date"]}
                value={formData.date}
                onChange={handleChange} 
            />

            <input type="number"
                placeholder="Ticket Count"
                name="ticketCount"
                className={createEventStyles["input-count"]}
                value={formData.ticketCount}
                onChange={handleChange} 
            />

            <input type="number"
                placeholder="Ticket Price"
                name="ticketPrice"
                className={createEventStyles["input-price"]}
                value={formData.ticketPrice}
                onChange={handleChange} 
            />

            <button className={createEventStyles["create-button"]} onClick={createEvent}>Create Event</button>

        </div>
    );

}

export default CreateEvent;