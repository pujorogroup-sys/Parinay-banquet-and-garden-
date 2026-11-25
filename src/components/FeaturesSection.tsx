import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { VENUE_CONTACT, VENUE_FEATURES, VENUE_PRICING } from '../data/venueData';
import { VenueImage } from './VenueImage';

export function FeaturesSection() {
  const flagshipSpaces = VENUE_FEATURES.slice(0, 2);
  const additionalSpecs = VENUE_FEATURES.slice(2);

  return (
    <section
      id="features"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 lg:mb-16">
          <p className="text-sm font-medium text-[#8F6A1E] mb-3">
            Venue Highlights
          </p>
          <h2
            id="features-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] font-semibold text-[#1B1814] mb-4"
          >
            Main Features &amp; Capacity
          </h2>
          <p className="text-base leading-relaxed text-[#5C5347]">
            Banquet hall seating, open-air garden capacity, total guest space, and
            bike parking available at {VENUE_CONTACT.brandName}, {VENUE_CONTACT.address}.
          </p>
        </div>

        {/* Flagship Visual Spaces: 2-Column Balanced Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {flagshipSpaces.map((space, index) => (
            <motion.article
              key={space.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#E7DFCE] bg-[#FAF8F4]"
            >
              {space.image && (
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#E7DFCE] bg-[#F3EAD3]/40">
                  <VenueImage
                    src={space.image}
                    alt={space.imageAlt ?? space.title}
                    fallbackTitle={space.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              )}

              <div className="flex flex-col flex-1 p-6 sm:p-8">
                <p className="text-xs sm:text-sm font-medium text-[#8F6A1E] mb-2">
                  {space.subtitle}
                </p>
                <h3 className="font-serif text-2xl sm:text-[1.75rem] font-semibold text-[#1B1814] mb-3">
                  <span className="text-[#9A7324] mr-2 tabular-nums">{space.number}</span>
                  {space.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#5C5347] mb-6 flex-1">
                  {space.description}
                </p>
                <div className="pt-4 border-t border-[#E7DFCE] text-xs sm:text-sm text-[#5C5347] tabular-nums">
                  {space.specs}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Remaining Verified Specs: 2-Column Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {additionalSpecs.map((feature, index) => (
            <motion.article
              key={feature.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-xl border border-[#E7DFCE] bg-white hover:bg-[#FAF8F4] transition-colors duration-200"
            >
              <div>
                <p className="text-xs sm:text-sm font-medium text-[#8F6A1E] mb-2">
                  {feature.subtitle}
                </p>
                <h3 className="font-serif text-2xl font-semibold text-[#1B1814] mb-3">
                  <span className="text-[#9A7324] mr-2 tabular-nums">{feature.number}</span>
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#5C5347] mb-6">
                  {feature.description}
                </p>
              </div>
              <div className="pt-4 border-t border-[#F0E9DA] text-xs sm:text-sm text-[#5C5347] tabular-nums">
                {feature.specs}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Venue Booking Tariff Card */}
        <div
          id="pricing"
          className="rounded-xl border border-[#E7DFCE] bg-[#FAF8F4] p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <p className="text-sm font-medium text-[#8F6A1E] mb-2">
                Booking Tariff
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B1814] mb-2">
                {VENUE_PRICING.packageTitle}
              </h3>
              <p className="text-sm leading-relaxed text-[#5C5347]">
                {VENUE_CONTACT.brandName}, {VENUE_CONTACT.address}
              </p>
            </div>

            <ul className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#1B1814]">
              {VENUE_PRICING.inclusions.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#8F6A1E] shrink-0" aria-hidden="true" />
                  <span className="tabular-nums">{item}</span>
                </li>
              ))}
            </ul>

            <div className="lg:col-span-3 flex flex-col lg:items-end justify-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#E7DFCE] lg:pl-8">
              <div className="lg:text-right">
                <span className="block text-xs font-medium text-[#8F6A1E]">
                  Booking Price
                </span>
                <span className="font-serif text-4xl font-semibold text-[#1B1814] tabular-nums">
                  {VENUE_PRICING.bookingPrice}
                </span>
                <span className="block text-xs text-[#5C5347] mt-0.5">
                  ({VENUE_PRICING.bookingPriceLabel})
                </span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#8F6A1E] hover:bg-[#765514] rounded-md transition-colors duration-200 whitespace-nowrap"
              >
                <span>Inquire on WhatsApp</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
