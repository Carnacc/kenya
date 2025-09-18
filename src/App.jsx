// App.jsx
import './css/App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Container from './components/Container.jsx'
import Galleria from './Galleria.jsx'
import ScrollToTop from './components/ScrollTop.jsx'
import WhatsappButton from './components/WhatsappButon.jsx'

import ContattiPage from './ContattiPage.jsx'
import SafariPage from './SafariPage.jsx'
import MarafaIsland from './MarafaIsland.jsx'
import SafariBlu from './SafariBluPage.jsx'
import RovineDiGede from './RovineDiGedePage.jsx'
import AfricaVera from './AfricaVeraPage.jsx'
import IsolaAmore from './IsolaAmorePage.jsx'
import CrabShark from './CrabSharkPage.jsx'
import Lichthaus from './LichthausPage.jsx'
import AboutPage from './AboutPage.jsx'

import Footer from './components/Footer.jsx'

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div {...pageTransition}><Container /></motion.div>} />
        <Route path="/galleria" element={<motion.div {...pageTransition}><Galleria /></motion.div>} />
        <Route path="/contatti" element={<motion.div {...pageTransition}><ContattiPage /></motion.div>} />
        <Route path="/safari" element={<motion.div {...pageTransition}><SafariPage /></motion.div>} />
        <Route path="/marafa-robinson-island" element={<motion.div {...pageTransition}><MarafaIsland /></motion.div>} />
        <Route path="/safari-blu" element={<motion.div {...pageTransition}><SafariBlu /></motion.div>} />
        <Route path="/rovine-di-gede" element={<motion.div {...pageTransition}><RovineDiGede /></motion.div>} />
        <Route path="/africa-vera" element={<motion.div {...pageTransition}><AfricaVera /></motion.div>} />
        <Route path="/isola-dell'amore" element={<motion.div {...pageTransition}><IsolaAmore /></motion.div>} />
        <Route path="/crab-shark" element={<motion.div {...pageTransition}><CrabShark /></motion.div>} />
        <Route path="/lichthaus" element={<motion.div {...pageTransition}><Lichthaus /></motion.div>} />
        <Route path="/chi-siamo" element={<motion.div {...pageTransition}><AboutPage /></motion.div>} />

      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <WhatsappButton />
      <AnimatedRoutes />
      <Footer />
    </Router>
  )
}

export default App
