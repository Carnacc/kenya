import React from 'react';
import './css/MarafaIsland.css';
import NavbarDue from './components/NavbarDue';
import ExcursionGallery from './components/ExcursionGallery';
import ExcursionCard from './components/ExcursionCard';
import Image from './images/marafa-island.jpg'; // Assicurati di avere l'immagine nella cartella giusta

const MarafaIsland = () => {
    
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
                subtitle="Escursione a Marafa Island"
                title="Isola di Marafa"
                text="Partenza alle ore 9:00 direttamente dal vostro appartamento o resort. Si attraversa Malindi con una breve sosta alla Fabbrica del Legno, per poi proseguire verso Che Shale, anche conosciuta come Sabbia Dorata, celebre per il suo bagnasciuga dorato: qui è prevista una prima sosta per ammirare una delle spiagge più suggestive della costa. Proseguendo il tour si raggiunge Ngomeni, dove si estendono le saline locali: un paesaggio unico popolato da fenicotteri rosa e piccoli gamberetti. Lungo il tragitto sarà possibile osservare questa meraviglia naturale direttamente dalla strada. La giornata prosegue verso Robinson Island, un luogo tranquillo e caratteristico dove verrà servito il pranzo a base di granchio rosso, tipico della zona. Dopo pranzo, tempo libero per rilassarsi sulla spiaggia o passeggiare tra le mangrovie fino alle 16:30. Nel pomeriggio si raggiunge infine Marafa – La Cucina del Diavolo, un suggestivo canyon ricco di leggende. All’arrivo, una guida locale parlante italiano vi accompagnerà in una visita guidata di circa 40 minuti, per poi concludere l’esperienza ammirando uno dei tramonti più spettacolari del Kenya."
                image={Image}
            />
            <ExcursionGallery images={immaginiMarafa} />

        </div>
    );
};

export default MarafaIsland;