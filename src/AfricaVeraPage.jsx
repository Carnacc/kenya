import React from 'react';
import './css/MarafaIsland.css';
import NavbarDue from './components/NavbarDue';
import ExcursionGallery from './components/ExcursionGallery';
import ExcursionCard from './components/ExcursionCard';
import Image from './images/africa-vera.jpg'; 

const AfricaVera = () => {
    
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
                subtitle="Escursione nella vera Africa"
                title="L'Africa vera"
                text="Partenza dal vostro resort o appartamento per un’esperienza immersiva nei villaggi tradizionali nei dintorni di Watamu. Un’occasione unica per entrare in contatto con la cultura e le abitudini del popolo Giriama, appartenente al gruppo etnico dei Mijikenda, che da secoli vive lungo la costa del Kenya.

Durante la visita si attraversano paesaggi rurali e si scopre lo stile di vita semplice di queste comunità. Incontrerete famiglie locali, visiterete le loro abitazioni costruite con fango e tetti in makuti (foglie di palma intrecciate) e potrete interagire con i bambini del villaggio, sempre pronti a regalarvi un sorriso.

Assaggerete il cocco fresco appena raccolto e, per i più curiosi, il tradizionale vino di cocco, una bevanda fermentata prodotta artigianalmente. Un’esperienza autentica che vi farà scoprire il volto più vero e umano del Kenya."
                image={Image}
            />
            <ExcursionGallery images={immaginiMarafa} />

        </div>
    );
};

export default AfricaVera;