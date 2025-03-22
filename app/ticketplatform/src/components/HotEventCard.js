import React from "react";
import hotEventCard from "../styles/HotEventCard.module.css";

function HotEventCard(props) {
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
                            <p className={hotEventCard["card-date"]}>{props.descrption}</p>
                        </div>
                    </a>
                </div>
        </>
    );
}

export default HotEventCard; 