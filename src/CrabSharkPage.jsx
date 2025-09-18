import React from 'react';
import './css/MarafaIsland.css';
import NavbarDue from './components/NavbarDue';
import ExcursionGallery from './components/ExcursionGallery';
import ExcursionCard from './components/ExcursionCard';
import Image from './images/crab-shack.jpg'; 

const CrabShark = () => {
    
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
                subtitle="Escursione del Crab Shark"
                title="Il Crab Shark"
                text="Partenza verso le 16:30 direttamente dal vostro resort, a bordo di un caratteristico tuk tuk. In circa 15 minuti si raggiunge la zona interna della riserva naturale di Mida Creek, uno spettacolare canale che si apre tra le foreste di mangrovie.

L’escursione conduce al villaggio di Dabaso, all’interno di una riserva protetta a circa 20 minuti dal centro di Watamu. Qui si cammina su passerelle di legno sospese sull’acqua, circondati da un paesaggio incontaminato e silenzioso dove la natura regna sovrana. Le palafitte e i camminamenti in legno si affacciano sulle mangrovie, creando uno scenario perfetto per chi ama la fotografia o semplicemente desidera rilassarsi nella quiete del tramonto.

La visita si conclude con una degustazione speciale: le famose samosa di granchio, preparate in modo tradizionale e servite in un punto panoramico che domina il creek al calar del sole."
                image={Image}
            />
            <ExcursionGallery images={immaginiMarafa} />

        </div>
    );
};

export default CrabShark;