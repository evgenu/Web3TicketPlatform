import { useState } from 'react';
import { useContract } from '../hooks/contractHook';
import createEventStyles from '../styles/CreateEvent.module.css';

// 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            // 
            toast.error("Contract not loaded")
            return;
        };

        const { name, description, date, ticketCount, ticketPrice } = formData;

        // 
        if (!name.trim() || !description.trim() || !date.trim() || !ticketCount.trim() || !ticketPrice.trim()) {
            toast.error('Please fill all fields before creating an event');
            return;
        }

        // Convert input date to a timestamp
        const dateMs = Date.parse(date);
        const dateSeconds = Math.floor(dateMs / 1000);
        const currentDateMs = new Date().getTime();

        // Validate date is not in the past
        if (dateMs < currentDateMs) {
            toast.error('Event date cannot be in the past');
            return;
        }

        try {

            const tx = await contract.contract.createEvent(
                name,
                description,
                dateSeconds,
                ticketCount,
                ticketPrice
            );
            toast.success('Event created successfully!');

            // Clear the form inputs after successful creation
            setFormData({
                name: '',
                description: '',
                date: '',
                ticketCount: '',
                ticketPrice: ''
            });
        } catch (error: any) {
            if (error.action === 'sendTransaction' && error.reason === 'rejected') {
                toast.info('Transaction rejected by user');
            }
            else {
                toast.error(`Failed to create event: ${error.message}`);
            }
        }
    };

    // Prepare minDate to ensure user can't pick a date in the past
    const minDate = new Date().toISOString().split('T')[0];


    return (
        <>
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
                    min={minDate}
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
            {/* 6. Include the ToastContainer so toast notifications can appear */}
        </>
    );

}

export default CreateEvent;