import React from "react";
import hotEventCard from "../styles/HotEventCard.module.css";
import { Link } from 'react-router-dom';


interface HotEventCardProps {
    id: number;
    name: string;
    date: string;
    description: string;
}

function HotEventCard(props: HotEventCardProps) {

    return (
        <>
            <div className={hotEventCard["wrapper"]}>
                <Link to={`/event/${props.id}`} state={{ id: props.id }} className={hotEventCard["card-link"]}>

                    <div className={hotEventCard["card-content"]}>
                        <h3 className={hotEventCard["card-title"]}>{props.name}</h3>
                        <p className={hotEventCard["card-date"]}>{new Date(Number(props.date) * 1000).toLocaleDateString()}</p>
                        <p className={hotEventCard["card-description"]}>{props.description}</p>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default HotEventCard; 