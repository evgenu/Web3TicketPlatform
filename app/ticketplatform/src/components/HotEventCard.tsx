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
                    <Link to={"/events"} state={{ id: props.id }} className={hotEventCard["card-link"]}> 
                        <div className={hotEventCard["card-image"]}>
                            <img alt
                            ="Elrow" className={hotEventCard["card-img"]} />
                        </div>

                        <div className={hotEventCard["card-content"]}>
                            <h3 className={hotEventCard["card-title"]}>{props.name}</h3>
                            <p className={hotEventCard["card-date"]}>{props.date}</p>
                            <p className={hotEventCard["card-date"]}>{props.description}</p>
                        </div>
                    </Link>
                </div>
        </>
    );
}

export default HotEventCard; 