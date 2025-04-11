import React from 'react';
import Navbar from './components/Navbar';
import "./css/SafariPage.css"; // Importa il CSS specifico per SafariPage
import ThirdSection from './components/ThirdSection';
import Footer from './components/Footer'; // Importa il footer

const SafariPage = () => {
    return (
        <div>
            <Navbar />
                <div className="safari-container">
                    <div className="safari-content">
                      <h1>Safari da 1 a 7 giorni</h1>
                      <p>Vivi un'esperienza unica tra safari, escursioni e cultura locale.</p>
                    </div>
                  </div>
            <ThirdSection />
            <Footer />  

            
        </div>
    );
};

export default SafariPage;