import React from 'react';
import Navbar from './components/Navbar';
import "./css/SafariPage.css"; // Importa il CSS specifico per SafariPage
import SafariCard1 from './components/SafariCard1';
import SafariCard2 from './components/SafariCard2';
import SafariCard3 from './components/SafariCard3';
import SafariCard4 from './components/SafariCard4';
import SafariCard5 from './components/SafariCard5';

const SafariPage = () => {
    return (
        <div>
            <Navbar />
                <div className="safari-container">
                    <div className="safari-content">
                      <h1>Safari da 2 a 11 giorni</h1>
                      <p style={{color:"white"}}>Vivi un'esperienza unica tra safari, escursioni e cultura locale.</p>
                    </div>
                  </div>
            <SafariCard1 />
            <SafariCard2 />
            <SafariCard3 />
            <SafariCard4 />
            <SafariCard5 />


            
        </div>
    );
};

export default SafariPage;