import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import gallery1 from '../../assets/gallery1.png';
import gallery2 from '../../assets/gallery2.png';
import gallery3 from '../../assets/gallery3.png';
import gallery4 from '../../assets/galler4.png';
import gallery5 from '../../assets/gallery5.png';
import gallery6 from '../../assets/gallery6.png';
import gallery7 from '../../assets/gallery7.png';
import gallery8 from '../../assets/gallery8.png';
import gallery9 from '../../assets/gallery9.png';

const slides = [
  { src: gallery1, alt: 'Φωτογραφία από τη συλλογή — 1' },
  { src: gallery2, alt: 'Φωτογραφία από τη συλλογή — 2' },
  { src: gallery3, alt: 'Φωτογραφία από τη συλλογή — 3' },
  { src: gallery4, alt: 'Φωτογραφία από τη συλλογή — 4' },
  { src: gallery5, alt: 'Φωτογραφία από τη συλλογή — 5' },
  { src: gallery6, alt: 'Φωτογραφία από τη συλλογή — 6' },
  { src: gallery7, alt: 'Φωτογραφία από τη συλλογή — 7' },
  { src: gallery8, alt: 'Φωτογραφία από τη συλλογή — 8' },
  { src: gallery9, alt: 'Φωτογραφία από τη συλλογή — 9' },
];

const AUTOPLAY_MS = 4500;

export default function Gallery() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goLightboxPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + slides.length) % slides.length,
    );
  }, []);

  const goLightboxNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % slides.length));
  }, []);

  useEffect(() => {
    if (!carouselApi || lightboxIndex !== null) return;
    const id = window.setInterval(() => {
      carouselApi.scrollNext();
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [carouselApi, lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goLightboxPrev();
      if (e.key === 'ArrowRight') goLightboxNext();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox, goLightboxPrev, goLightboxNext]);

  const lightbox =
    typeof document !== 'undefined'
      ? createPortal(
          <AnimatePresence>
            {lightboxIndex !== null && (
              <motion.div
                key="gallery-lightbox"
                role="dialog"
                aria-modal="true"
                aria-label="Gallery fullscreen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[10050] flex items-center justify-center bg-[#0c0a08]/96 backdrop-blur-sm"
                onClick={closeLightbox}
              >
                <button
                  type="button"
                  aria-label="Close"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeLightbox();
                  }}
                  className="absolute right-4 top-4 z-[10051] flex size-12 items-center justify-center rounded-full border-2 border-white/40 bg-white/95 text-[#0c0a08] shadow-lg transition hover:bg-white md:right-6 md:top-6 md:size-14"
                >
                  <X className="size-6 md:size-7" strokeWidth={2.25} />
                </button>

                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    goLightboxPrev();
                  }}
                  className="absolute left-2 top-1/2 z-[10051] flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white shadow-lg transition hover:bg-white/25 md:left-6 md:size-14"
                >
                  <ChevronLeft className="size-7 md:size-8" />
                </button>

                <button
                  type="button"
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    goLightboxNext();
                  }}
                  className="absolute right-2 top-1/2 z-[10051] flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white shadow-lg transition hover:bg-white/25 md:right-6 md:size-14"
                >
                  <ChevronRight className="size-7 md:size-8" />
                </button>

                <motion.div
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative mx-auto flex max-h-[100dvh] w-full max-w-[100vw] items-center justify-center px-14 pb-20 pt-24 md:px-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ImageWithFallback
                    src={slides[lightboxIndex].src}
                    alt={slides[lightboxIndex].alt}
                    className="max-h-[85dvh] max-w-full object-contain shadow-2xl"
                  />
                  <div className="pointer-events-none absolute bottom-6 left-1/2 z-[10051] -translate-x-1/2 rounded-full bg-black/50 px-4 py-1.5 text-sm tabular-nums text-white/90 backdrop-blur-md">
                    {lightboxIndex + 1} / {slides.length}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <>
      {lightbox}
      <section
        id="gallery"
        className="relative overflow-hidden py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[var(--background)] via-[var(--cream)]/80 to-[var(--background)]"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% -20%, var(--lavender), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, var(--peach-glow), transparent)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center md:mb-16"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
            Στιγμές &amp; ατμόσφαιρα
          </p>
          <h2
            className="mb-5 text-4xl text-[var(--foreground)] md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Gallery
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[var(--muted-foreground)]">
            Μια ματιά στον χώρο και την αίσθηση της θεραπευτικής συνάντησης — ήρεμο φως,
            ζεστή πινελιά, χώρος που προσκαλεί σε ασφάλεια και εμπιστοσύνη.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative mx-auto max-w-6xl"
        >
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: 'center',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {slides.map((slide, i) => (
                <CarouselItem
                  key={i}
                  className="basis-[88%] pl-3 sm:basis-[78%] md:pl-4 lg:basis-[62%]"
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    className="group relative w-full cursor-zoom-in overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] text-left shadow-[0_25px_60px_-15px_rgba(44,40,32,0.28)] ring-1 ring-black/[0.03] transition-transform duration-500 hover:shadow-[0_32px_80px_-20px_rgba(44,40,32,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lavender)] focus-visible:ring-offset-2"
                  >
                    <div className="relative aspect-[4/3] md:aspect-[16/10]">
                      <ImageWithFallback
                        src={slide.src}
                        alt={slide.alt}
                        className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/25 via-transparent to-transparent opacity-70" />
                      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                    </div>
                    <div className="pointer-events-none absolute bottom-4 left-4 flex h-9 min-w-9 items-center justify-center rounded-full bg-white/85 px-3 text-xs font-medium text-[var(--foreground)] backdrop-blur-md shadow-sm tabular-nums">
                      {i + 1} / {slides.length}
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-1/2 z-20 size-11 -translate-y-1/2 rounded-full border-[var(--border)] bg-white/92 text-[var(--foreground)] shadow-lg backdrop-blur-md transition hover:bg-white md:left-4 md:size-12" />
            <CarouselNext className="right-2 top-1/2 z-20 size-11 -translate-y-1/2 rounded-full border-[var(--border)] bg-white/92 text-[var(--foreground)] shadow-lg backdrop-blur-md transition hover:bg-white md:right-4 md:size-12" />
          </Carousel>

          <p className="mt-8 text-center text-sm text-[var(--muted-foreground)]">
            Πατήστε μια εικόνα για προβολή σε πλήρη οθόνη.
          </p>
        </motion.div>
      </div>
    </section>
    </>
  );
}
