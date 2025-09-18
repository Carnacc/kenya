import React from 'react';
import './css/MarafaIsland.css';
import NavbarDue from './components/NavbarDue';
import ExcursionGallery from './components/ExcursionGallery';
import ExcursionCard from './components/ExcursionCard';
import Image from './images/safari-blu.jpg'; 

const SafariBlu = () => {
    
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
                subtitle="Escursione del safari blu"
                title="Il safari blu"
                text="Partenza alle ore 9:00 direttamente dalla spiaggia di Watamu, a bordo di una barca con fondo trasparente. L’escursione include l’equipaggiamento completo: maschere, pinne e giubbotti salvagente, per permettere a tutti di esplorare in sicurezza i fondali cristallini del Parco Marino di Watamu e ammirare i suoi meravigliosi pesci colorati.

Durante il periodo tra novembre e febbraio, è frequente l’avvistamento dei delfini, che spesso accompagnano la navigazione regalando momenti emozionanti. Il pranzo viene servito su una spiaggia o su un’isola, con aragosta grigliata come piatto principale, in un’atmosfera rilassante e autentica. Dopo il pranzo, tempo libero per rilassarsi o fare il bagno, con rientro previsto nel pomeriggio, verso le ore 16:00."
                image={Image}
            />
            <ExcursionGallery images={immaginiMarafa} />

        </div>
    );
};

export default SafariBlu;