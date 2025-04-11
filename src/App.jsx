// App.jsx
import './css/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importa la tua "home" (Container.jsx), e i componenti di Login e Registrazione
import Container from './components/Container.jsx'
import LoginForm from './components/LoginForm.jsx'
import RegisterForm from './components/RegisterForm.jsx'
import Galleria from './Galleria.jsx'
import ScrollToTop from './components/ScrollTop.jsx'

import ContattiPage from './ContattiPage.jsx'
import SafariPage from './SafariPage.jsx'


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Rotta per la homepage/landpage */}
        <Route path="/" element={<Container />} />

        {/* Rotta per la pagina galleria */}
        <Route path="/galleria" element={<Galleria />} />

        {/* Rotta per la pagina contatti */}
        <Route path="/contatti" element={<ContattiPage />} />

        {/* Rotta per la pagina safari */}
        <Route path="/safari" element={<SafariPage />} />
      </Routes>
    </Router>
  )
}

export default App
