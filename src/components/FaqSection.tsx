import { useMemo, useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import {
  FAQ_ITEMS,
  VENUE_CONTACT,
  buildWhatsAppUrl,
  type FaqCategory,
} from '../data/venueData';

const FAQ_CATEGORIES: FaqCategory[] = [
  'All',
  'Banquet Rules',
  'Catering',
  'Booking',
];

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('All');
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const visibleItems = useMemo(() => {
    if (activeCategory === 'All') return FAQ_ITEMS;
    return FAQ_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleCategorySelect = (category: FaqCategory) => {
    setActiveCategory(category);
    const nextList =
      category === 'All'
        ? FAQ_ITEMS
        : FAQ_ITEMS.filter((item) => item.category === category);
    setOpenId(nextList[0]?.id ?? null);
  };

  const askQuestionUrl = buildWhatsAppUrl(
    `Namaste ${VENUE_CONTACT.brandName}, I have a question regarding banquet rules, catering policies, and booking availability.`
  );

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#8F6A1E] mb-3">
              Frequently Asked Questions
            </p>
            <h2
              id="faq-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] font-semibold text-[#1B1814] mb-3"
            >
              Banquet Rules, Catering &amp; Booking Guide
            </h2>
            <p className="text-base leading-relaxed text-[#5C5347]">
              Answers to common questions about venue capacity, catering policies,
              and booking timelines at {VENUE_CONTACT.brandName}.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter frequently asked questions"
            className="flex items-center gap-1 p-1 bg-[#FAF8F4] border border-[#E7DFCE] rounded-lg overflow-x-auto max-w-full"
          >
            {FAQ_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategorySelect(category)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#8F6A1E] text-white'
                      : 'text-[#5C5347] hover:text-[#1B1814] hover:bg-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion List */}
        <div className="rounded-xl border border-[#E7DFCE] bg-white divide-y divide-[#E7DFCE]">
          {visibleItems.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const triggerId = `faq-trigger-${item.id}`;

            return (
              <div key={item.id}>
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 sm:px-8 sm:py-6 text-left hover:bg-[#FAF8F4] transition-colors duration-200 cursor-pointer"
                  >
                    <div className="space-y-1 pr-2">
                      <span className="block text-xs font-medium text-[#8F6A1E]">
                        {item.category}
                      </span>
                      <span className="block font-serif text-xl sm:text-[1.4rem] font-semibold leading-snug text-[#1B1814]">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      aria-hidden="true"
                      className={`w-5 h-5 text-[#8F6A1E] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                  className="px-6 pb-6 sm:px-8 sm:pb-7 bg-[#FAF8F4]/60"
                >
                  <p className="text-sm sm:text-base leading-relaxed text-[#5C5347] max-w-3xl tabular-nums">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Clarification Bar */}
        <div className="mt-8 rounded-xl border border-[#E7DFCE] bg-[#FAF8F4] px-6 py-5 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-serif text-xl font-semibold text-[#1B1814]">
              Have another question about your event date?
            </p>
            <p className="text-sm text-[#5C5347] mt-0.5 tabular-nums">
              Message our team directly on WhatsApp ({VENUE_CONTACT.displayPhone}) for
              exact rules and availability.
            </p>
          </div>
          <a
            href={askQuestionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#8F6A1E] hover:bg-[#765514] rounded-md transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
