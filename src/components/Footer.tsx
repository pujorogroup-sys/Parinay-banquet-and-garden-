import { Facebook, Instagram, MessageCircle, Phone } from 'lucide-react';
import { VENUE_CONTACT, VENUE_LOGO_SRC, VENUE_PRICING, buildWhatsAppUrl } from '../data/venueData';

const QUICK_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(
    `Namaste ${VENUE_CONTACT.brandName}, I would like to inquire about venue booking.`
  );

  return (
    <footer className="bg-white border-t border-[#E7DFCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#top" className="inline-block" aria-label={VENUE_CONTACT.brandName}>
              <img
                src={VENUE_LOGO_SRC}
                alt={VENUE_CONTACT.brandName}
                referrerPolicy="no-referrer"
                className="h-14 w-auto object-contain mix-blend-multiply"
              />
            </a>
            <p className="text-sm leading-relaxed text-[#5C5347] max-w-sm">
              {VENUE_CONTACT.address} · 150 Banquet Hall Seating · 600+ Garden Area ·
              800 Total Capacity · 100 Bikes Parking.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={VENUE_CONTACT.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Parinay Banquet & Garden on Instagram"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-[#E7DFCE] text-sm font-medium text-[#1B1814] hover:text-[#8F6A1E] hover:border-[#C59B3B] hover:bg-[#FAF8F4] transition-colors duration-200 whitespace-nowrap"
              >
                <Instagram className="w-4 h-4 text-[#8F6A1E]" aria-hidden="true" />
                <span>Instagram</span>
              </a>
              <a
                href={VENUE_CONTACT.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Parinay Banquet & Garden on Facebook"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-[#E7DFCE] text-sm font-medium text-[#1B1814] hover:text-[#8F6A1E] hover:border-[#C59B3B] hover:bg-[#FAF8F4] transition-colors duration-200 whitespace-nowrap"
              >
                <Facebook className="w-4 h-4 text-[#8F6A1E]" aria-hidden="true" />
                <span>Facebook</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Parinay Banquet & Garden on WhatsApp"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-[#E7DFCE] text-sm font-medium text-[#1B1814] hover:text-[#8F6A1E] hover:border-[#C59B3B] hover:bg-[#FAF8F4] transition-colors duration-200 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#8F6A1E]" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:+${VENUE_CONTACT.whatsappNumber}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-[#E7DFCE] text-sm font-medium text-[#1B1814] hover:text-[#8F6A1E] hover:border-[#C59B3B] hover:bg-[#FAF8F4] transition-colors duration-200 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#8F6A1E]" aria-hidden="true" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h3 className="font-serif text-xl font-semibold text-[#1B1814] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-[#5C5347]">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#8F6A1E] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div className="md:col-span-4">
            <h3 className="font-serif text-xl font-semibold text-[#1B1814] mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-2.5 text-sm text-[#5C5347]">
              <p>
                <a
                  href={VENUE_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B1814] font-medium hover:text-[#8F6A1E] underline decoration-[#E7DFCE] hover:decoration-[#8F6A1E] underline-offset-4 transition-colors"
                >
                  {VENUE_CONTACT.address}
                </a>
              </p>
              <p className="tabular-nums">
                <a
                  href={`tel:+${VENUE_CONTACT.whatsappNumber}`}
                  className="text-[#1B1814] font-medium hover:text-[#8F6A1E] transition-colors"
                >
                  {VENUE_CONTACT.displayPhone}
                </a>
              </p>
              <p className="text-xs text-[#8F6A1E] pt-1 tabular-nums">
                Booking Price: {VENUE_PRICING.bookingPrice}
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Quiet Copyright Strip */}
      <div className="border-t border-[#F0E9DA] bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#5C5347]">
          <p>© {new Date().getFullYear()} {VENUE_CONTACT.brandName}. All rights reserved.</p>
          <p>{VENUE_CONTACT.address}</p>
        </div>
      </div>
    </footer>
  );
}
