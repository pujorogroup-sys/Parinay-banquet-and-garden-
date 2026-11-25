/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { ContactInquirySection } from './components/ContactInquirySection';
import { Footer } from './components/Footer';
import { VENUE_CONTACT, buildWhatsAppUrl } from './data/venueData';

export default function App() {
  const floatingWhatsAppUrl = buildWhatsAppUrl(
    `Namaste ${VENUE_CONTACT.brandName}, I would like to inquire about venue booking.`
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1B1814]">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <FaqSection />
        <ContactInquirySection />
      </main>

      <Footer />

      {/* Direct WhatsApp Floating Action Button */}
      <a
        href={floatingWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Inquire directly on WhatsApp"
        className="fixed bottom-5 right-5 z-30 inline-flex items-center justify-center gap-2 h-12 px-4 sm:px-5 rounded-full bg-[#8F6A1E] hover:bg-[#765514] text-white shadow-lg transition-transform duration-200 hover:scale-[1.03]"
      >
        <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline text-sm font-medium whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
