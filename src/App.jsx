import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import RocketIntro from './components/RocketIntro.jsx'
import Home from './pages/Home.jsx'
import Research from './pages/Research.jsx'
import Projects from './pages/Projects.jsx'
import Awards from './pages/Awards.jsx'

export default function App() {
  const location = useLocation()

  // Scroll to top on route change.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [location.pathname])

  return (
    <>
      <RocketIntro />

      <div className="aurora" aria-hidden="true">
        <span className="b1" /><span className="b2" /><span className="b3" />
      </div>

      <Nav />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  )
}
