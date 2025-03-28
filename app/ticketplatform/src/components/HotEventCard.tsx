import React from "react";
import hotEventCard from "../styles/HotEventCard.module.css";

interface HotEventCardProps {
    name: string;
    date: string;
    description: string;
}

function HotEventCard(props: HotEventCardProps) {
    return (
        <>
                <div className={hotEventCard["wrapper"]}>
                    <a href="/event" className={hotEventCard["card-link"]}> 
                        <div className={hotEventCard["card-image"]}>
                            <img alt
                            ="Elrow" className={hotEventCard["card-img"]} />
                        </div>

                        <div className={hotEventCard["card-content"]}>
                            <h3 className={hotEventCard["card-title"]}>{props.name}</h3>
                            <p className={hotEventCard["card-date"]}>{props.date}</p>
                            <p className={hotEventCard["card-date"]}>{props.description}</p>
                        </div>
                    </a>
                </div>
        </>
    );
}

export default HotEventCard; 