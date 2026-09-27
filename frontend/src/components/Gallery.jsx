import { useEffect, useState } from "react";
import bridalKanjivaram from "../assets/design-bridal-kanjivaram.jpg";
import mirrorWork from "../assets/design-mirror-work.jpg";
import traditionalSet from "../assets/design-traditional-set.jpg";
import peacockGreen from "../assets/design-peacock-green.jpg";
import partyWear from "../assets/design-party-wear.jpg";
import broochBlouse from "../assets/design-brooch-blouse.jpg";
import Reveal from "./Reveal.jsx";

const GALLERY_IMAGES = [
  { src: bridalKanjivaram, alt: "Bridal kanjivaram blouse with stone border" },
  { src: mirrorWork, alt: "Purple blouse with mirror work sleeves" },
  { src: traditionalSet, alt: "Traditional blouse set with pearl detailing" },
  { src: peacockGreen, alt: "Peacock green bridal blouse with gold neckline" },
  { src: partyWear, alt: "Party wear blouse with brocade sleeves and tassels" },
  { src: broochBlouse, alt: "Blue designer blouse with fabric brooch" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  const showNext = () =>
    setActiveIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container-shell">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-eyebrow justify-center flex">Gallery</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">A closer look at our work</h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {GALLERY_IMAGES.map((img, i) => (
            <Reveal key={img.alt} delay={i * 50} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="block w-full h-full group focus-visible:outline-maroon"
                aria-label={`View larger image: ${img.alt}`}
              >
                <div className="aspect-square overflow-hidden rounded-soft bg-cream-dark shadow-card">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/90 flex items-center justify-center p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close preview"
            className="absolute top-5 right-5 text-cream/90 hover:text-cream text-3xl leading-none"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 md:left-8 text-cream/90 hover:text-cream text-3xl p-2"
          >
            &#8249;
          </button>

          <img
            src={GALLERY_IMAGES[activeIndex].src}
            alt={GALLERY_IMAGES[activeIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-soft shadow-elegant"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 md:right-8 text-cream/90 hover:text-cream text-3xl p-2"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
