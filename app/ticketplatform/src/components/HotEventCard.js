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
                            <h3 className={hotEventCard["card-title"]}>Elrow</h3>
                            <p className={hotEventCard["card-date"]}>Date: 12/12/2021</p>
                            <p className={hotEventCard["card-location"]}>Location: Sofia, Bulgaria</p>
                        </div>
                    </a>
                </div>
        </>
    );
}

export default HotEventCard; 