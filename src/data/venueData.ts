export const VENUE_LOGO_SRC = '/assets/parinay-logo-clean.png';

export const VENUE_CONTACT = {
  brandName: 'Parinay Banquet & Garden',
  whatsappNumber: '919068577111',
  rawPhone: '9068577111',
  displayPhone: '+91 90685 77111',
  address: 'Paschim Puri, Sikandra, Agra',
};

export const VENUE_PRICING = {
  bookingPrice: '₹1,61,000',
  bookingPriceLabel: '1 Lakh 61 Thousand',
  packageTitle: 'Venue Booking Price',
  inclusions: [
    'Banquet Hall — 150 Guests Seating',
    'Garden Area — 600+ Guests Space',
    'Total Capacity — 800 Guests',
    '100 Bikes Parking with Gate & Parking Guards',
    'Clean Environment & Smooth Decoration',
  ],
};

export const HERO_IMAGE = {
  src: '/src/assets/images/real_parinay_hero_garden_1795610783932.jpg',
  alt: 'Parinay Banquet & Garden — Paschim Puri, Sikandra, Agra',
};

export interface VenueHighlight {
  value: string;
  label: string;
  detail: string;
}

export const VENUE_HIGHLIGHTS: VenueHighlight[] = [
  {
    value: '150 Seating',
    label: 'Banquet Hall',
    detail: 'Indoor seating capacity',
  },
  {
    value: '600+ Guests',
    label: 'Garden Area',
    detail: 'Open-air garden space',
  },
  {
    value: '800 Guests',
    label: 'Total Capacity',
    detail: 'Banquet & garden combined',
  },
  {
    value: '100 Bikes',
    label: 'Parking Space',
    detail: 'Dedicated bike parking',
  },
];

export interface VenueFeature {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string;
  image?: string;
  imageAlt?: string;
}

export const VENUE_FEATURES: VenueFeature[] = [
  {
    number: '01.',
    title: 'Banquet Hall',
    subtitle: '150 Guests Seating',
    description:
      'Dedicated indoor banquet hall with seating arrangements for 150 guests, suited for family ceremonies, dining, and indoor functions.',
    specs: '150 Guests Seating Capacity',
    image: '/src/assets/images/real_banquet_hall_150_1795610746496.jpg',
    imageAlt: 'Parinay Banquet Hall with 150 guest seating',
  },
  {
    number: '02.',
    title: 'Garden Area',
    subtitle: '600+ Guests Space',
    description:
      'Spacious open-air garden area accommodating 600+ guests for wedding receptions, stage events, and grand gatherings.',
    specs: '600+ Guests Garden Capacity',
    image: '/src/assets/images/real_marriage_garden_600_1795610745428.jpg',
    imageAlt: 'Parinay Garden Area accommodating 600+ guests',
  },
  {
    number: '03.',
    title: 'Total Venue Capacity',
    subtitle: '800 Guests Combined',
    description:
      'Combined banquet hall and garden area comfortably designed to host celebrations of up to 800 guests at Paschim Puri, Sikandra, Agra.',
    specs: '800 Guests Total Capacity',
  },
  {
    number: '04.',
    title: 'Parking & Guard Facility',
    subtitle: '100 Bikes Parking · Gate & Parking Guards',
    description:
      'Dedicated parking space for 100 bikes with guard facility available both at the main gate and inside the parking area for safe, organized guest arrival.',
    specs: '100 Bikes Parking · Main Gate Guard · Parking Guard',
  },
  {
    number: '05.',
    title: 'Clean Environment',
    subtitle: 'Neat & Well-Maintained Premises',
    description:
      'Clean, hygienic, and pleasant environment maintained across both the indoor banquet hall and the open-air garden area throughout your celebration.',
    specs: 'Clean Banquet Hall · Neat Open-Air Garden Atmosphere',
  },
  {
    number: '06.',
    title: 'Smooth Decoration',
    subtitle: 'Elegant & Well-Coordinated Setup',
    description:
      'Smooth, graceful decoration arrangements tailored to keep your stage, seating area, and garden looking refined and well-organized from start to finish.',
    specs: 'Smooth Decoration Setup · Stage & Venue Styling',
  },
];

export type GalleryCategory = 'All' | 'Banquet Hall' | 'Garden Area';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  meta: string;
  src: string;
  alt: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'venue-overview',
    title: 'Parinay Banquet & Garden',
    category: 'Garden Area',
    meta: '800 Total Capacity · Paschim Puri, Sikandra, Agra',
    src: '/src/assets/images/real_parinay_hero_garden_1795610783932.jpg',
    alt: 'Parinay Banquet & Garden venue view',
  },
  {
    id: 'banquet-hall',
    title: 'Banquet Hall',
    category: 'Banquet Hall',
    meta: '150 Guests Seating',
    src: '/src/assets/images/real_banquet_hall_150_1795610746496.jpg',
    alt: 'Parinay Banquet Hall 150 guests seating view',
  },
  {
    id: 'garden-area',
    title: 'Garden Area',
    category: 'Garden Area',
    meta: '600+ Guests Space',
    src: '/src/assets/images/real_marriage_garden_600_1795610745428.jpg',
    alt: 'Parinay Garden Area 600+ guests view',
  },
  {
    id: 'mandap-setup',
    title: 'Garden Celebration Setup',
    category: 'Garden Area',
    meta: 'Open-Air Garden Area',
    src: '/src/assets/images/real_mandap_decor_white_gold_1795610755595.jpg',
    alt: 'Parinay Garden Area event setup',
  },
];

export type FaqCategory = 'All' | 'Banquet Rules' | 'Catering' | 'Booking';

export interface FaqItem {
  id: string;
  category: Exclude<FaqCategory, 'All'>;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'venue-capacity-rules',
    category: 'Banquet Rules',
    question: 'What is the guest capacity for the Banquet Hall and Garden Area?',
    answer:
      'Parinay Banquet & Garden offers seating for 150 guests inside the Banquet Hall and space for 600+ guests in the open-air Garden Area, with a total combined venue capacity of 800 guests.',
  },
  {
    id: 'parking-rules',
    category: 'Banquet Rules',
    question: 'Are parking space and security guard facilities available at the venue?',
    answer:
      'Yes, dedicated parking space for 100 bikes is available at Parinay Banquet & Garden in Paschim Puri, Sikandra, Agra, with guard facility provided both at the main gate and in the parking area for guest safety.',
  },
  {
    id: 'sound-decor-rules',
    category: 'Banquet Rules',
    question: 'What about decoration, cleanliness, and event guidelines?',
    answer:
      'We maintain a clean, pleasant environment across the banquet hall and garden area along with smooth decoration arrangements. Exact event timings and sound guidelines are confirmed directly on WhatsApp at +91 90685 77111 when booking.',
  },
  {
    id: 'catering-policy',
    category: 'Catering',
    question: 'What is your catering policy for weddings and family functions?',
    answer:
      'Catering setup, serving area allocation, and vendor guidelines are finalized transparently based on your guest count (up to 800 guests). Reach out on WhatsApp at +91 90685 77111 to confirm catering permissions and kitchen arrangements before your event.',
  },
  {
    id: 'catering-setup-timing',
    category: 'Catering',
    question: 'When can the catering team arrive for food preparation and counter setup?',
    answer:
      'Catering access and setup handover timings are scheduled in advance according to your function slot (daytime or evening). Our management team confirms exact entry and teardown timings when you lock your date.',
  },
  {
    id: 'booking-price-inclusions',
    category: 'Booking',
    question: 'What is the venue booking price and how do I confirm my date?',
    answer:
      'The venue booking price is ₹1,61,000 (1 Lakh 61 Thousand), covering the 150-seating Banquet Hall, 600+ guest Garden Area (800 total capacity), and 100-bike parking space. Submit the inquiry form below or message us directly on WhatsApp (+91 90685 77111) to check date availability.',
  },
  {
    id: 'booking-timeline',
    category: 'Booking',
    question: 'How far in advance should we book Parinay Banquet & Garden?',
    answer:
      'Wedding season and auspicious dates fill up quickly in Agra, so we recommend checking availability as soon as your celebration date is decided. Advance confirmation terms and visit appointments are shared directly via WhatsApp or in person at Paschim Puri, Sikandra, Agra.',
  },
];

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${VENUE_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
