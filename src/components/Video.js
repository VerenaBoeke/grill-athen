import React from "react";
import { Carousel } from 'react-carousel-minimal';
import './slider.css';

const Video = () => {
    const data = [
        {
            image: "../assets/athen04.jpg",
            alt: "Offene Küche mit gefüllter Salattheke",
            caption: `<div>
                        Wir verwöhnen Sie mit frischen, hausgemachten Salaten. Immer knackfrisch!
                        </div>`
        },
        {
            image: "../assets/athen01.jpg",
            alt: "Außenbereich Grill Athen mit Sitzmöglichkeiten",
            caption: `<div>
                        Nehmen Sie in unserem Außenbereich platz
                        </div>`
        },
        {
            image: "../assets/athen02.jpg",
            alt: "Eingang mit Empfang",
            caption: `<div>
                        Wir heißen Sie herzlich Willkommen in unserem Restaurant-Innenbereich
                        </div>`
        },
        {
            image: "../assets/athen03.jpg",
            alt: "Offene Küche mit Grillstation",
            caption: `<div>
                        Egal ob knuspriges Gyros oder leckere Spezialitäten vom Grill. Für jeden etwas dabei!
                        </div>`
        },
        {
            image: "../assets/athen05.jpg",
            alt: "Sitzmöglichkeiten im Innenbereich",
            caption: `<div>
                        Auch im Innenbereich halten wir Lieblingsplätze bereit für Sie. 
                        </div>`
        },
      ];
    
      const captionStyle = {
        fontSize: '1em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
      }
    return (
        <Carousel
            data={data}
            time={5000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="0"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxHeight: "500px",
              margin: "0 auto 100px auto",
            }}
          />
    )
}

export default Video;