import { ArrowRight } from 'lucide-react';
import {
  HERO_IMAGE,
  VENUE_CONTACT,
  VENUE_HIGHLIGHTS,
  VENUE_PRICING,
} from '../data/venueData';
import { VenueImage } from './VenueImage';
import { AuspiciousCountdown } from './AuspiciousCountdown';

export function HeroSection() {
  return (
    <section id="top" className="bg-white">
      {/* Main Hero Canvas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Editorial Copy Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-sm text-[#8F6A1E] font-medium mb-4">
              {VENUE_CONTACT.address}
            </p>

            <h1 className="font-serif text-[clamp(2.4rem,4.3vw,3.9rem)] leading-[1.08] font-semibold tracking-tight text-[#1B1814] mb-5">
              Parinay Banquet &amp; Garden
            </h1>

            <p className="text-base sm:text-[17px] leading-relaxed text-[#5C5347] mb-6 max-w-xl">
              Banquet hall with 150-guest seating and a 600+ guest garden area (800
              total capacity) featuring 100-bike parking, dedicated gate &amp; parking
              guards, a clean environment, and smooth decoration in Paschim Puri,
              Sikandra, Agra.
            </p>

            {/* Transparent Booking Price Callout */}
            <div className="mb-8 py-4 border-y border-[#E7DFCE] flex items-baseline justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-[#8F6A1E]">
                  {VENUE_PRICING.packageTitle}
                </p>
                <p className="text-xs text-[#5C5347] mt-0.5">
                  {VENUE_PRICING.bookingPriceLabel}
                </p>
              </div>
              <p className="font-serif text-3xl sm:text-[2.1rem] font-semibold text-[#1B1814] tabular-nums whitespace-nowrap shrink-0">
                {VENUE_PRICING.bookingPrice}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-white bg-[#8F6A1E] hover:bg-[#765514] rounded-md transition-colors duration-200 whitespace-nowrap shrink-0"
              >
                <span>Inquire on WhatsApp</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center gap-1.5 py-2.5 text-sm font-medium text-[#1B1814] hover:text-[#8F6A1E] border-b border-[#C59B3B]/60 hover:border-[#8F6A1E] transition-colors duration-200 whitespace-nowrap shrink-0"
              >
                View Gallery
              </a>
            </div>
          </div>

          {/* Dominant 16:9 Venue Photograph */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#E7DFCE] bg-[#FAF8F4]">
              <VenueImage
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                priority
                fallbackTitle="Parinay Banquet & Garden"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/35 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-white/95">
                <span className="font-medium tracking-wide">
                  {VENUE_CONTACT.brandName} · {VENUE_CONTACT.address}
                </span>
                <span className="text-white/90 tabular-nums">
                  800 Total Capacity · {VENUE_PRICING.bookingPrice}
                </span>
              </div>
            </div>

            <AuspiciousCountdown />
          </div>
        </div>
      </div>

      {/* Full-Width 4-Column Venue Highlights Strip */}
      <div className="border-y border-[#E7DFCE] bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E7DFCE]">
            {VENUE_HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="py-6 sm:py-7 px-3 sm:px-6 first:pl-0 last:pr-0"
              >
                <dt className="text-xs sm:text-sm font-medium text-[#8F6A1E] mb-1">
                  {item.label}
                </dt>
                <dd className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B1814] tabular-nums tracking-tight">
                  {item.value}
                </dd>
                <p className="text-xs sm:text-sm text-[#5C5347] mt-1">
                  {item.detail}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
