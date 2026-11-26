export const VENUE_LOGO_SRC = '/assets/parinay-logo-clean.png';

export const VENUE_CONTACT = {
  brandName: 'Parinay Banquet & Garden',
  whatsappNumber: '919068577111',
  rawPhone: '9068577111',
  displayPhone: '+91 90685 77111',
  address: 'Paschim Puri, Sikandra, Agra',
  googleMapsUrl:
    'https://www.google.com/maps/place/parinay+banquet+hall+agra/data=!4m2!3m1!1s0x3974779946801aa7:0xf58b1bd6c31a9d94?sa=X&ved=1t:242&ictx=111&cshid=1795685890775268',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Parinay+Banquet+Hall+Paschim+Puri+Sikandra+Agra&t=&z=15&ie=UTF8&iwloc=&output=embed',
  socials: {
    instagram:
      'https://www.instagram.com/parinaygarden3512?utm_source=ig_web_button_share_sheet&jplx=ZDNlZDc0MzIxNw==',
    facebook: 'https://www.facebook.com/',
  },
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
  src: '/assets/aistudio/IMG-20260519-WA0014_e0c70bed.jpg',
  alt: 'Parinay Banquet & Garden illuminated evening lawn and banquet hall facade in Paschim Puri, Sikandra, Agra',
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
    image: '/assets/aistudio/IMG-20260519-WA0011_9808f385.jpg',
    imageAlt: 'Parinay Banquet Hall interior with chandelier, floral stage, and 150 guest seating',
  },
  {
    number: '02.',
    title: 'Garden Area',
    subtitle: '600+ Guests Space',
    description:
      'Spacious open-air garden area accommodating 600+ guests for wedding receptions, stage events, and grand gatherings.',
    specs: '600+ Guests Garden Capacity',
    image: '/assets/aistudio/IMG-20260519-WA0012_9b8d1c0e.jpg',
    imageAlt: 'Parinay Banquet & Garden open-air evening lawn accommodating 600+ guests',
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

export type GalleryCategory =
  | 'All'
  | 'Banquet Hall'
  | 'Garden Area'
  | 'Veranda & Entrance';

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
    id: 'banquet-hall-seating',
    title: 'Grand Banquet Hall',
    category: 'Banquet Hall',
    meta: '150 Guests Seating · Indoor Hall',
    src: '/assets/aistudio/IMG-20260519-WA0011_9808f385.jpg',
    alt: 'Parinay Banquet Hall with grand chandelier, aisle carpet, floral stage, and 150 seating',
  },
  {
    id: 'garden-lawn-evening',
    title: 'Evening Garden Lawn & Walkway',
    category: 'Garden Area',
    meta: '600+ Guests Space · Garden Area',
    src: '/assets/aistudio/IMG-20260519-WA0014_e0c70bed.jpg',
    alt: 'Parinay Banquet & Garden evening lawn with stone pathway and illuminated veranda',
  },
  {
    id: 'front-elevation',
    title: 'Parinay Main Front Elevation',
    category: 'Veranda & Entrance',
    meta: 'Paschim Puri, Sikandra, Agra',
    src: '/assets/aistudio/IMG-20260519-WA0022_0dc51e43.jpg',
    alt: 'Parinay Banquet & Garden illuminated night facade and main arched entrance',
  },
  {
    id: 'floral-stage',
    title: 'Floral Reception Stage',
    category: 'Banquet Hall',
    meta: 'Smooth Decoration · Indoor Stage',
    src: '/assets/aistudio/IMG-20260519-WA0016_27ec0f34.jpg',
    alt: 'Indoor banquet hall reception stage with floral arches and royal sofa',
  },
  {
    id: 'garden-area-wide',
    title: 'Open-Air Garden Area',
    category: 'Garden Area',
    meta: '600+ Guests · Wide Lawn View',
    src: '/assets/aistudio/IMG-20260519-WA0012_9b8d1c0e.jpg',
    alt: 'Wide evening view of Parinay Garden Area and banquet hall exterior',
  },
  {
    id: 'botanical-veranda',
    title: 'Glass-Roof Botanical Veranda',
    category: 'Veranda & Entrance',
    meta: 'Covered Seating & Dining Gallery',
    src: '/assets/aistudio/IMG-20260519-WA0019_385f2268.jpg',
    alt: 'Covered veranda corridor with floral glass ceiling and round dining tables',
  },
  {
    id: 'garden-serving-counter',
    title: 'Garden Buffet & Serving Counter',
    category: 'Garden Area',
    meta: 'Garden Area · Decorative Counter',
    src: '/assets/aistudio/IMG-20260519-WA0013_e0634978.jpg',
    alt: 'Decorative garden serving counter set on green lawn at Parinay Banquet & Garden',
  },
  {
    id: 'chandelier-hallway',
    title: 'Chandelier Entry Corridor',
    category: 'Banquet Hall',
    meta: 'Grand Entrance · Marble Flooring',
    src: '/assets/aistudio/IMG-20260519-WA0009_047dc091.jpg',
    alt: 'Checkered marble entry hallway with twin crystal chandeliers at Parinay Banquet',
  },
  {
    id: 'floral-garden-entry',
    title: 'Floral Banquet & Lawn Entrance',
    category: 'Garden Area',
    meta: 'Garden & Hall Connecting Arch',
    src: '/assets/aistudio/IMG-20260519-WA0017_eab9fd3b.jpg',
    alt: 'Floral arch framing the white French doors opening onto the green garden lawn',
  },
  {
    id: 'veranda-round-tables',
    title: 'Veranda Round-Table Dining',
    category: 'Veranda & Entrance',
    meta: 'Covered Veranda · Clean Environment',
    src: '/assets/aistudio/IMG-20260519-WA0023_1aaa0918.jpg',
    alt: 'Round yellow-gold draped dining tables along the arched French doors veranda',
  },
  {
    id: 'illuminated-signboard',
    title: 'Parinay Banquet & Garden Signboard',
    category: 'Veranda & Entrance',
    meta: 'Main Gate · Paschim Puri, Sikandra',
    src: '/assets/aistudio/IMG-20260519-WA0021_1bc123bd.jpg',
    alt: 'Illuminated Parinay Banquet & Garden signboard and architectural uplighting at night',
  },
  {
    id: 'lawn-floral-arch',
    title: 'Illuminated Lawn & Golden Urns',
    category: 'Garden Area',
    meta: 'Smooth Decoration · Garden View',
    src: '/assets/aistudio/IMG-20260519-WA0010_0cd07b17.jpg',
    alt: 'Evening lawn edge with golden decorative urns, floral entrance arch, and French doors',
  },
  {
    id: 'vaulted-glass-corridor',
    title: 'Vaulted Floral Ceiling Gallery',
    category: 'Veranda & Entrance',
    meta: 'Clean Environment · Indoor Corridor',
    src: '/assets/aistudio/IMG-20260519-WA0020_6f22083a.jpg',
    alt: 'Full view of the vaulted floral glass ceiling veranda and marble floor',
  },
  {
    id: 'daylight-veranda',
    title: 'French-Door Veranda Facade',
    category: 'Veranda & Entrance',
    meta: 'Exterior Veranda · Striped Awnings',
    src: '/assets/aistudio/IMG-20260519-WA0018_b066fa67.jpg',
    alt: 'Clean evening exterior of Parinay veranda with striped awnings, wall lanterns, and white French doors',
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

export interface AuspiciousDate {
  id: string;
  label: string;
  isoDate: string;
  occasion: string;
}

export const UPCOMING_WEDDING_DATES: AuspiciousDate[] = [
  {
    id: '2026-12-04',
    label: '4 December 2026',
    isoDate: '2026-12-04T19:00:00+05:30',
    occasion: 'Vivah Muhurat',
  },
  {
    id: '2026-12-11',
    label: '11 December 2026',
    isoDate: '2026-12-11T19:00:00+05:30',
    occasion: 'Vivah Muhurat',
  },
  {
    id: '2027-01-22',
    label: '22 January 2027',
    isoDate: '2027-01-22T19:00:00+05:30',
    occasion: 'Vivah Muhurat',
  },
  {
    id: '2027-02-14',
    label: '14 February 2027',
    isoDate: '2027-02-14T19:00:00+05:30',
    occasion: 'Vivah Muhurat',
  },
  {
    id: '2027-04-19',
    label: '19 April 2027',
    isoDate: '2027-04-19T19:00:00+05:30',
    occasion: 'Vivah Muhurat',
  },
  {
    id: '2027-05-06',
    label: '6 May 2027',
    isoDate: '2027-05-06T19:00:00+05:30',
    occasion: 'Vivah Muhurat',
  },
];

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${VENUE_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
