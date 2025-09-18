import React from 'react';
import './css/MarafaIsland.css';
import NavbarDue from './components/NavbarDue';
import ExcursionGallery from './components/ExcursionGallery';
import ExcursionCard from './components/ExcursionCard';
import Image from './images/rovine-di-gede.jpg'; 

const RovineDiGede = () => {
    
    const immaginiMarafa = [
        "/elefante-massiccio.jpg",
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
        "/4.png",
        "/5.jpg"
      ]

    return (
        <div className="marafa-island-page">
            <NavbarDue />
            <ExcursionCard
                subtitle="Escursione nelle Rovine di Gede"
                title="Le rovine di Gede"
                text="Le Rovine di Gede sono uno dei siti storici più affascinanti del Kenya.
Situate nella località omonima, a pochi chilometri da Watamu, rappresentano ciò che resta di un'antica città swahili risalente al XIII secolo. Avvolte da una fitta vegetazione tropicale, le rovine offrono un'esperienza suggestiva tra antiche mura in pietra corallina, moschee e palazzi ormai inghiottiti dalla natura.

Oggi questo luogo è abitato da una numerosa comunità di scimmie che vive liberamente tra i resti archeologici. Questi simpatici abitanti non hanno timore dell’uomo: si avvicinano spesso ai visitatori incuriositi e, in alcuni casi, possono anche essere un po’ dispettosi!

Una visita alle Rovine di Gede è un viaggio nel tempo, perfetto per chi desidera scoprire la storia del Kenya unendo cultura e natura."
                image={Image}
            />
            <ExcursionGallery images={immaginiMarafa} />

        </div>
    );
};

export default RovineDiGede;