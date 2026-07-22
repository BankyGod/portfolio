import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

export default function ProjectGallery({ images = [], projectName }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null
  const activeImage = isOpen ? images[activeIndex] : null

  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowRight') {
        setActiveIndex((index) => (index + 1) % images.length)
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((index) => (index - 1 + images.length) % images.length)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, images.length])

  if (!images.length) return null

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
            Product gallery
          </h2>
          <p className="mt-2 text-sm text-mist">
            Screens from the {projectName} mobile experience.
          </p>
        </div>
        <p className="hidden text-xs font-semibold tracking-[0.18em] text-mist uppercase sm:block">
          {images.length} shots
        </p>
      </div>

      {/* Pinterest-style masonry: CSS columns, no transform wrappers */}
      <div className="masonry mt-8">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="masonry-pin group"
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <span className="masonry-pin-caption">{image.caption}</span>
          </button>
        ))}
      </div>

      {isOpen && activeImage ? (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setActiveIndex(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <button
            type="button"
            className="absolute top-4 right-4 z-10 inline-flex min-h-11 min-w-11 items-center justify-center text-sm font-bold text-paper"
            onClick={() => setActiveIndex(null)}
          >
            Close ✕
          </button>

          <motion.div
            className="max-h-[70svh] w-full max-w-sm sm:max-w-md"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[65svh] w-full rounded-lg object-contain"
            />
            <p className="mt-4 text-center text-sm font-semibold text-paper">
              {activeImage.caption}
            </p>
          </motion.div>

          {images.length > 1 ? (
            <div
              className="mt-5 flex w-full max-w-sm items-center justify-between gap-3 sm:max-w-md"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="inline-flex min-h-11 flex-1 items-center justify-center border border-white/20 px-3 text-sm font-bold text-paper"
                onClick={() =>
                  setActiveIndex((index) => (index - 1 + images.length) % images.length)
                }
              >
                ← Prev
              </button>
              <button
                type="button"
                className="inline-flex min-h-11 flex-1 items-center justify-center border border-white/20 px-3 text-sm font-bold text-paper"
                onClick={() => setActiveIndex((index) => (index + 1) % images.length)}
              >
                Next →
              </button>
            </div>
          ) : null}
        </motion.div>
      ) : null}
    </div>
  )
}
