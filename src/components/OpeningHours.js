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
                        <li style={{height: '45px'}}><strong>Montag</strong></li>
                        <li style={{height: '45px'}}><strong>Dienstag</strong></li>
                        <li style={{height: '30px'}}><strong>Mittwoch</strong></li>
                        <li style={{height: '45px'}}><strong>Donnerstag</strong></li>
                        <li style={{height: '45px'}}><strong>Freitag</strong></li>
                        <li style={{height: '45px'}}><strong>Samstag</strong></li>
                        <li><strong>Sonntag</strong></li>
                    </ul>
                </div>
                <div className="time">
                    <ul className="openinghours">
                        <li style={{height: '45px'}}>11:30 - 14:30 Uhr<br />
                        17:00 - 21:00 Uhr</li>
                        <li style={{height: '45px'}}>11:30 - 14:30 Uhr<br />
                            17:00 - 21:00 Uhr</li>
                        <li style={{height: '30px'}}>Ruhetag</li>
                        <li style={{height: '45px'}}>11:30 - 14:30 Uhr<br />
                            17:00 - 21:00 Uhr</li>
                        <li style={{height: '45px'}}>11:30 - 14:30 Uhr<br />
                            17:00 - 21:00 Uhr</li>
                        <li style={{height: '45px'}}>11:30 - 14:30 Uhr<br />
                            17:00 - 21:00 Uhr</li>
                        <li>16:00 - 21:00 Uhr</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
    
export default OpeningHours;