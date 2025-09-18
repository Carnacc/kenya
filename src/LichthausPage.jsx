import React from 'react';
import './css/MarafaIsland.css';
import NavbarDue from './components/NavbarDue';
import ExcursionGallery from './components/ExcursionGallery';
import ExcursionCard from './components/ExcursionCard';
import Image from './images/litcthaus.jpg'; 

const Lichthaus = () => {
    
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
                subtitle="Escursione del Lichthaus"
                title="Il Lichthaus"
                text="Lichthaus è un suggestivo bar-ristorante affacciato direttamente sul mare, perfetto per colazione, pranzo, aperitivo o cena. È costruito su una caratteristica palafitta in legno, sospesa sull’acqua, dotata di amache che ondeggiano sopra le onde: un luogo ideale per rilassarsi e lasciarsi cullare dal suono del mare.

Il momento più magico è sicuramente al tramonto, quando il sole infuocato scende oltre l’orizzonte e si riflette sull’acqua creando giochi di luce e colori caldi, come su una tavolozza naturale. Seduti comodamente sorseggiando un drink o gustando una cena a base di pesce fresco, potrete vivere un’atmosfera romantica e indimenticabile.

Lichthaus è aperto anche durante il giorno: offre una piacevole colazione vista mare o un pranzo rilassante. Un luogo perfetto anche per scattare fotografie spettacolari, soprattutto al tramonto."
                image={Image}
            />
            <ExcursionGallery images={immaginiMarafa} />

        </div>
    );
};

export default Lichthaus;