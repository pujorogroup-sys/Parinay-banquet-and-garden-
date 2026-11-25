import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { VENUE_LOGO_SRC } from '../data/venueData';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E7DFCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Mark */}
        <a
          href="#top"
          aria-label="Parinay Banquet & Garden Home"
          className="flex items-center shrink-0 focus-visible:rounded"
        >
          <img
            src={VENUE_LOGO_SRC}
            alt="Parinay Banquet & Garden"
            referrerPolicy="no-referrer"
            className="h-11 sm:h-12 md:h-14 w-auto object-contain mix-blend-multiply"
          />
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5C5347]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#1B1814] transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-full after:bg-[#C59B3B] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action (+ mobile menu toggle on small screens) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#8F6A1E] hover:bg-[#765514] rounded-md transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            Book Venue
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-[#E7DFCE] text-[#1B1814] hover:bg-[#FAF8F4] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile navigation"
          className="md:hidden bg-white border-t border-[#E7DFCE] px-4 pt-3 pb-5"
        >
          <div className="flex flex-col divide-y divide-[#F0E9DA]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3.5 text-base font-medium text-[#1B1814] hover:text-[#8F6A1E] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-[#8F6A1E] hover:bg-[#765514] rounded-md transition-colors"
            >
              Book Venue on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
