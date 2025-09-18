import React from 'react';
import './css/MarafaIsland.css';
import NavbarDue from './components/NavbarDue';
import ExcursionGallery from './components/ExcursionGallery';
import ExcursionCard from './components/ExcursionCard';
import Image from './images/isola-amore.jpg'; 

const IsolaAmore = () => {
    
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
                subtitle="Escursione nell'isola dell'amore"
                title="L'isola dell'amore"
                text="L’Isola dell’Amore è una delle escursioni più affascinanti e romantiche da fare lungo la costa del Kenya.
Situata nella splendida baia di Watamu, è famosa per la sua particolare forma a cuore che emerge chiaramente durante la bassa marea, creando uno scenario perfetto per foto indimenticabili. Con l’alta marea, invece, questo isolotto sabbioso scompare completamente sotto il mare, lasciando il posto a uno spettacolo naturale unico.

È possibile raggiungerla comodamente in barca tradizionale oppure, nei momenti giusti, anche a piedi camminando sulla sabbia, godendosi il panorama, le acque cristalline e il silenzio assoluto di questo luogo incantato."
                image={Image}
            />
            <ExcursionGallery images={immaginiMarafa} />

        </div>
    );
};

export default IsolaAmore;