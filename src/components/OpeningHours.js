import React from "react";
import './openinghours.css';

const OpeningHours = () => {

    return (
        <section>
            <h2>Öffnungszeiten</h2>
            <div className="highlight">&nbsp;</div>
            <div className="container">
                <div className="days">
                    <ul className="openinghours">
                        <li><strong>Montag </strong></li>
                        <li><strong>Dienstag </strong></li>
                        <li><strong>Mittwoch </strong></li>
                        <li><strong>Freitag </strong></li>
                        <li><strong>Samstag </strong></li>
                        <li><strong>Sonntag </strong></li>
                    </ul>
                </div>
                <div className="time">
                    <ul className="openinghours">
                        <li>12:00 - 20:00h</li>
                        <li>12:00 - 20:00h</li>
                        <li>Ruhetag</li>
                        <li>12:00 - 20:00h</li>
                        <li>12:00 - 20:00h</li>
                        <li>Ruhetag</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
    
export default OpeningHours;