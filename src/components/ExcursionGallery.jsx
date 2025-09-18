import { useState, useEffect } from 'react'
import '../css/ExcursionGallery.css'

function ExcursionGallery({ images }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const closeLightbox = () => setIsOpen(false)

  const showPrev = () =>
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)

  const showNext = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)

  // ⌨️ Gestione tastiera
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'Escape') closeLightbox()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <>
      <div className="excursion-gallery">
        {images.map((src, index) => (
          <div
            className="excursion-gallery-item"
            key={index}
            onClick={() => openLightbox(index)}
          >
            <img src={src} alt={`foto-${index}`} />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-arrow left" onClick={showPrev}>&lt;</button>
            <img
              key={currentIndex} /* obbligatorio per far rifare l’animazione */
              src={images[currentIndex]}
              alt={`grande-${currentIndex}`}
              className="lightbox-image fade-in"
            />
            <button className="lightbox-arrow right" onClick={showNext}>&gt;</button>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ExcursionGallery
