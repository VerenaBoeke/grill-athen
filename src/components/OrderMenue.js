import React from "react";
import menu from "./MenueConfig";
import './orderMenu.css';

const OrderMenue = () => {

    const quickLinks = []
    menu.forEach(m => {
        if (m.title) {
            quickLinks.push(m)
        }
    })

    const jump = (id) => {
        // eslint-disable-next-line
        location.href = `#${id}`
    }

    return (
        <div>
            <h2>Speisekarte</h2>
            <div className="highlight">&nbsp;</div>
            <ul className="quickLinks">
                { quickLinks.map((link, index) => (
                    <li key={index} onClick={()=>{jump(link.id)}}>
                    { link.title }
                </li>
                ))
                }
            </ul>
            <ul className="menu">
                { menu.map((m, index) => (
                    <li key={index} id={m.id && m.id.replace('#','')}>
                    <h3>
                        { m.title }
                        {m.subtitle && (<small> { m.subtitle }</small>)}
                    </h3>
                    <ul className="dishes">
                        {m.dishes.map((dish, idx) => (
                            <li key={idx}>
                                <div className="titleHolder">
                                    <span className="title">{ dish.title }</span>
                                    {dish.subTitle && (<span className="subTitle">{ dish.subtitle }</span>)}
                                    <span className="additives">{ dish.additives }</span>
                                </div>
                                <div className="price">{ dish.price }</div>
                            </li>
                        ))}
                        
                    </ul>
                    </li>  
            ))
            }</ul>
            <div className="infos">
                <p>Alle Preise inkl. gesetzlicher MwSt.</p>
                <h4>Zusatzstoffe</h4>
                <p>
                    1. mit Farbstoff, 
                    2. Konservierungsstoffe, 
                    3. Antioxidationsmittel, 
                    4. Geschmacksverstärker, 
                    5. Süssungsmittel, 
                    6. Phosphat
                </p>
            </div>
            
        </div>
    )
};

export default OrderMenue;