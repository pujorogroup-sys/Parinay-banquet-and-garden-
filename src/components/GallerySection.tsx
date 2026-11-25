import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryCategory } from '../data/venueData';
import { VenueImage } from './VenueImage';

const CATEGORIES: GalleryCategory[] = ['All', 'Banquet Hall', 'Garden Area'];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const activeLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] ?? null : null;

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      } else if (event.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      } else if (event.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const handleCategoryChange = (category: GalleryCategory) => {
    setActiveCategory(category);
    setLightboxIndex(null);
  };

  return (
    <section
      id="gallery"
      className="py-20 lg:py-28 bg-[#FAF8F4] border-y border-[#E7DFCE]"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Category Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#8F6A1E] mb-3">
              Venue Gallery
            </p>
            <h2
              id="gallery-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] font-semibold text-[#1B1814] mb-3"
            >
              Banquet &amp; Garden Gallery
            </h2>
            <p className="text-base leading-relaxed text-[#5C5347]">
              Photos of Parinay Banquet &amp; Garden — Banquet Hall (150 seating)
              and Garden Area (600+ guests).
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter gallery by venue space"
            className="flex items-center gap-1 p-1 bg-white border border-[#E7DFCE] rounded-lg overflow-x-auto max-w-full"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#8F6A1E] text-white'
                      : 'text-[#5C5347] hover:text-[#1B1814] hover:bg-[#FAF8F4]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean 2-Column Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, idx) => (
            <figure
              key={item.id}
              className="group relative overflow-hidden rounded-xl border border-[#E7DFCE] bg-white"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                aria-label={`View full photo: ${item.title}`}
                className="block w-full text-left cursor-pointer focus-visible:outline-offset-[-2px]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3EAD3]/40">
                  <VenueImage
                    src={item.src}
                    alt={item.alt}
                    fallbackTitle={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90 transition-opacity duration-200"
                    aria-hidden="true"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/90 text-[#1B1814] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200"
                  >
                    <Expand className="w-4 h-4" />
                  </span>

                  <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                    <p className="text-xs text-[#F3D998] font-medium mb-1">
                      {item.meta}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold leading-snug text-white">
                      {item.title}
                    </h3>
                  </figcaption>
                </div>
              </button>
            </figure>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activeLightboxItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxItem.title}
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-xl overflow-hidden bg-white border border-[#E7DFCE]"
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E7DFCE] bg-white">
              <div className="min-w-0">
                <p className="text-xs font-medium text-[#8F6A1E]">
                  {activeLightboxItem.meta}
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#1B1814] truncate">
                  {activeLightboxItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close photo preview"
                className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#E7DFCE] text-[#1B1814] hover:bg-[#FAF8F4] transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-[#1B1814] flex items-center justify-center max-h-[70vh] overflow-hidden">
              <VenueImage
                src={activeLightboxItem.src}
                alt={activeLightboxItem.alt}
                fallbackTitle={activeLightboxItem.title}
                className="max-h-[70vh] w-full object-contain"
              />

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + filteredItems.length) %
                          filteredItems.length
                      )
                    }
                    aria-label="Previous photo"
                    className="absolute left-3 sm:left-4 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/90 text-[#1B1814] hover:bg-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
                    }
                    aria-label="Next photo"
                    className="absolute right-3 sm:right-4 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/90 text-[#1B1814] hover:bg-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="flex items-center justify-between gap-2 px-5 py-3.5 bg-[#FAF8F4] border-t border-[#E7DFCE]">
              <p className="text-sm text-[#5C5347]">{activeLightboxItem.meta}</p>
              <span className="text-xs font-medium text-[#8F6A1E] tabular-nums whitespace-nowrap shrink-0">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
