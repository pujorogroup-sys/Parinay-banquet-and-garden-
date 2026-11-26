import { type FormEvent, useMemo, useState } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { VENUE_CONTACT, VENUE_PRICING, buildWhatsAppUrl } from '../data/venueData';

interface InquiryFormState {
  fullName: string;
  phone: string;
  eventType: string;
  eventDate: string;
  spacePreference: string;
  guestCount: string;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  eventDate?: string;
}

const INITIAL_FORM: InquiryFormState = {
  fullName: '',
  phone: '',
  eventType: 'Wedding',
  eventDate: '',
  spacePreference: 'Banquet Hall + Garden (800 Total Capacity)',
  guestCount: '600 – 800 Guests',
  notes: '',
};

const EVENT_TYPES = [
  'Wedding',
  'Reception',
  'Engagement / Ring Ceremony',
  'Birthday / Anniversary',
  'Family Function',
  'Other Event',
];

const SPACE_OPTIONS = [
  'Banquet Hall + Garden (800 Total Capacity)',
  'Banquet Hall (150 Guests Seating)',
  'Garden Area (600+ Guests)',
];

const GUEST_RANGES = [
  'Up to 150 Guests',
  '150 – 400 Guests',
  '400 – 600+ Guests',
  '600 – 800 Guests',
];

function formatInquiryMessage(form: InquiryFormState): string {
  const formattedDate = form.eventDate
    ? new Date(`${form.eventDate}T00:00:00`).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Not selected';

  const lines = [
    `Namaste ${VENUE_CONTACT.brandName},`,
    '',
    'New Venue Booking Inquiry:',
    `Name: ${form.fullName.trim()}`,
    `Phone: ${form.phone.trim()}`,
    `Event Type: ${form.eventType}`,
    `Preferred Date: ${formattedDate}`,
    `Space Preference: ${form.spacePreference}`,
    `Estimated Guests: ${form.guestCount}`,
    `Booking Price: ${VENUE_PRICING.bookingPrice} (${VENUE_PRICING.bookingPriceLabel})`,
  ];

  if (form.notes.trim()) {
    lines.push(`Message: ${form.notes.trim()}`);
  }

  return lines.join('\n');
}

export function ContactInquirySection() {
  const [form, setForm] = useState<InquiryFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedPayload, setSubmittedPayload] = useState<{
    message: string;
    whatsappUrl: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const todayIso = useMemo(() => new Date().toISOString().split('T')[0], []);

  const quickChatUrl = buildWhatsAppUrl(
    `Namaste ${VENUE_CONTACT.brandName}, I want to inquire about venue booking.`
  );

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    const digitsOnly = form.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      nextErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!form.eventDate) {
      nextErrors.eventDate = 'Please select your preferred event date.';
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const message = formatInquiryMessage(form);
    const whatsappUrl = buildWhatsAppUrl(message);

    setSubmittedPayload({ message, whatsappUrl });
    setCopied(false);

    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyMessage = async () => {
    if (!submittedPayload) return;
    try {
      await navigator.clipboard.writeText(submittedPayload.message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    setSubmittedPayload(null);
    setForm(INITIAL_FORM);
    setErrors({});
    setCopied(false);
  };

  const updateField = <K extends keyof InquiryFormState>(
    field: K,
    value: InquiryFormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field in errors) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#FAF8F4] border-t border-[#E7DFCE]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-[#8F6A1E] mb-3">
            Contact &amp; Booking Inquiry
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] font-semibold text-[#1B1814] mb-4"
          >
            Inquire Directly on WhatsApp
          </h2>
          <p className="text-base leading-relaxed text-[#5C5347]">
            Fill out the inquiry form below to forward your booking details directly
            to WhatsApp ({VENUE_CONTACT.displayPhone}).
          </p>
        </div>

        {/* 2-Column Balanced Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Verified Contact Details Only */}
          <aside className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-[#E7DFCE] bg-white p-6 sm:p-8 lg:p-10">
            <div>
              <h3 className="font-serif text-2xl sm:text-[1.75rem] font-semibold text-[#1B1814] mb-6">
                Contact Details
              </h3>

              <dl className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#FAF6EC] border border-[#E7DFCE] text-[#8F6A1E] shrink-0">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-medium text-[#8F6A1E] mb-1">
                      Contact &amp; WhatsApp Number
                    </dt>
                    <dd>
                      <a
                        href={`tel:+${VENUE_CONTACT.whatsappNumber}`}
                        className="block text-lg font-semibold text-[#1B1814] hover:text-[#8F6A1E] transition-colors tabular-nums"
                      >
                        {VENUE_CONTACT.displayPhone}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#FAF6EC] border border-[#E7DFCE] text-[#8F6A1E] shrink-0">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-medium text-[#8F6A1E] mb-1">
                      Address
                    </dt>
                    <dd className="space-y-1.5">
                      <p className="text-base font-medium text-[#1B1814] leading-relaxed">
                        {VENUE_CONTACT.address}
                      </p>
                      <a
                        href={VENUE_CONTACT.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8F6A1E] hover:text-[#765514] underline underline-offset-2"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 rounded-lg border border-[#E7DFCE] bg-[#FAF8F4] p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-xs font-medium text-[#8F6A1E]">
                    Booking Price
                  </span>
                  <span className="font-serif text-3xl font-semibold text-[#1B1814] tabular-nums">
                    {VENUE_PRICING.bookingPrice}
                  </span>
                </div>
                <p className="text-xs text-[#5C5347] mt-2 leading-relaxed tabular-nums">
                  Banquet Hall: 150 Seating · Garden Area: 600+ · Total Capacity: 800
                  · Parking: 100 Bikes
                </p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#E7DFCE] space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={VENUE_CONTACT.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1B1814] bg-[#FAF8F4] hover:bg-[#F3EAD3] border border-[#E7DFCE] rounded-md transition-colors duration-200 whitespace-nowrap"
                >
                  <Instagram className="w-4 h-4 text-[#8F6A1E]" aria-hidden="true" />
                  <span>Instagram</span>
                </a>
                <a
                  href={VENUE_CONTACT.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1B1814] bg-[#FAF8F4] hover:bg-[#F3EAD3] border border-[#E7DFCE] rounded-md transition-colors duration-200 whitespace-nowrap"
                >
                  <Facebook className="w-4 h-4 text-[#8F6A1E]" aria-hidden="true" />
                  <span>Facebook</span>
                </a>
              </div>

              <a
                href={quickChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-medium text-white bg-[#8F6A1E] hover:bg-[#765514] rounded-md transition-colors duration-200 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </aside>

          {/* Right Column: Direct WhatsApp Inquiry Form */}
          <div className="lg:col-span-7 rounded-xl border border-[#E7DFCE] bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            {submittedPayload ? (
              <div className="space-y-6" role="status" aria-live="polite">
                <div>
                  <p className="text-sm font-medium text-[#8F6A1E] mb-2">
                    WhatsApp Inquiry Ready
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B1814] mb-2">
                    Forwarding Inquiry to WhatsApp
                  </h3>
                  <p className="text-sm sm:text-base text-[#5C5347]">
                    Your inquiry is ready for {VENUE_CONTACT.displayPhone}. If WhatsApp
                    did not open automatically, click the button below.
                  </p>
                </div>

                <div className="rounded-lg border border-[#E7DFCE] bg-[#FAF8F4] p-5">
                  <p className="text-xs font-medium text-[#8F6A1E] mb-2">
                    Prepared WhatsApp Message
                  </p>
                  <pre className="whitespace-pre-wrap font-sans text-sm text-[#1B1814] leading-relaxed">
                    {submittedPayload.message}
                  </pre>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={submittedPayload.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#8F6A1E] hover:bg-[#765514] rounded-md transition-colors whitespace-nowrap"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    <span>Open in WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#1B1814] bg-[#FAF8F4] hover:bg-[#F3EAD3] border border-[#E7DFCE] rounded-md transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#8F6A1E]" aria-hidden="true" />
                        <span>Copied Message</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#8F6A1E]" aria-hidden="true" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-3 text-sm font-medium text-[#5C5347] hover:text-[#1B1814] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    New Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="border-b border-[#F0E9DA] pb-5">
                  <h3 className="font-serif text-2xl sm:text-[1.75rem] font-semibold text-[#1B1814]">
                    Booking Inquiry Form
                  </h3>
                  <p className="text-sm text-[#5C5347] mt-1">
                    All inquiries are forwarded directly to WhatsApp on{' '}
                    <span className="tabular-nums font-medium text-[#1B1814]">
                      {VENUE_CONTACT.rawPhone}
                    </span>
                    .
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="inquiry-name"
                      className="block text-sm font-medium text-[#1B1814] mb-1.5"
                    >
                      Full Name <span className="text-[#8F6A1E]">*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={form.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'error-name' : undefined}
                      className={`w-full rounded-md border px-4 py-3 text-sm text-[#1B1814] bg-white placeholder:text-[#9A8F80] transition-colors focus:border-[#8F6A1E] focus:outline-none ${
                        errors.fullName ? 'border-[#B42318]' : 'border-[#DDD3BE]'
                      }`}
                    />
                    {errors.fullName && (
                      <p id="error-name" className="mt-1.5 text-xs text-[#B42318]">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-phone"
                      className="block text-sm font-medium text-[#1B1814] mb-1.5"
                    >
                      Mobile / WhatsApp Number <span className="text-[#8F6A1E]">*</span>
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="Enter 10-digit mobile number"
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'error-phone' : undefined}
                      className={`w-full rounded-md border px-4 py-3 text-sm text-[#1B1814] bg-white placeholder:text-[#9A8F80] tabular-nums transition-colors focus:border-[#8F6A1E] focus:outline-none ${
                        errors.phone ? 'border-[#B42318]' : 'border-[#DDD3BE]'
                      }`}
                    />
                    {errors.phone && (
                      <p id="error-phone" className="mt-1.5 text-xs text-[#B42318]">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="inquiry-event-type"
                      className="block text-sm font-medium text-[#1B1814] mb-1.5"
                    >
                      Event Type
                    </label>
                    <select
                      id="inquiry-event-type"
                      value={form.eventType}
                      onChange={(e) => updateField('eventType', e.target.value)}
                      className="w-full rounded-md border border-[#DDD3BE] px-4 py-3 text-sm text-[#1B1814] bg-white transition-colors focus:border-[#8F6A1E] focus:outline-none"
                    >
                      {EVENT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-date"
                      className="block text-sm font-medium text-[#1B1814] mb-1.5"
                    >
                      Event Date <span className="text-[#8F6A1E]">*</span>
                    </label>
                    <input
                      id="inquiry-date"
                      type="date"
                      required
                      min={todayIso}
                      value={form.eventDate}
                      onChange={(e) => updateField('eventDate', e.target.value)}
                      aria-invalid={Boolean(errors.eventDate)}
                      aria-describedby={errors.eventDate ? 'error-date' : undefined}
                      className={`w-full rounded-md border px-4 py-3 text-sm text-[#1B1814] bg-white tabular-nums transition-colors focus:border-[#8F6A1E] focus:outline-none ${
                        errors.eventDate ? 'border-[#B42318]' : 'border-[#DDD3BE]'
                      }`}
                    />
                    {errors.eventDate && (
                      <p id="error-date" className="mt-1.5 text-xs text-[#B42318]">
                        {errors.eventDate}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="inquiry-space"
                      className="block text-sm font-medium text-[#1B1814] mb-1.5"
                    >
                      Space Preference
                    </label>
                    <select
                      id="inquiry-space"
                      value={form.spacePreference}
                      onChange={(e) => updateField('spacePreference', e.target.value)}
                      className="w-full rounded-md border border-[#DDD3BE] px-4 py-3 text-sm text-[#1B1814] bg-white transition-colors focus:border-[#8F6A1E] focus:outline-none"
                    >
                      {SPACE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-guests"
                      className="block text-sm font-medium text-[#1B1814] mb-1.5"
                    >
                      Estimated Guests
                    </label>
                    <select
                      id="inquiry-guests"
                      value={form.guestCount}
                      onChange={(e) => updateField('guestCount', e.target.value)}
                      className="w-full rounded-md border border-[#DDD3BE] px-4 py-3 text-sm text-[#1B1814] bg-white transition-colors focus:border-[#8F6A1E] focus:outline-none"
                    >
                      {GUEST_RANGES.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-notes"
                    className="block text-sm font-medium text-[#1B1814] mb-1.5"
                  >
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="inquiry-notes"
                    rows={3}
                    placeholder="Write any additional event requirements..."
                    value={form.notes}
                    onChange={(e) => updateField('notes', e.target.value)}
                    className="w-full rounded-md border border-[#DDD3BE] px-4 py-3 text-sm text-[#1B1814] bg-white placeholder:text-[#9A8F80] transition-colors focus:border-[#8F6A1E] focus:outline-none resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-medium text-white bg-[#8F6A1E] hover:bg-[#765514] rounded-md transition-colors duration-200 cursor-pointer whitespace-nowrap"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Send Inquiry on WhatsApp</span>
                  </button>

                  <p className="text-xs text-[#5C5347] tabular-nums">
                    WhatsApp: {VENUE_CONTACT.displayPhone}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Venue Location Panel */}
        <div className="mt-8 rounded-xl border border-[#E7DFCE] bg-white overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-[#E7DFCE]">
            <div>
              <p className="text-xs font-medium text-[#8F6A1E]">Venue Location</p>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1B1814]">
                {VENUE_CONTACT.brandName} · {VENUE_CONTACT.address}
              </h3>
            </div>
            <a
              href={VENUE_CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1B1814] bg-[#FAF8F4] hover:bg-[#F3EAD3] border border-[#E7DFCE] rounded-md transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              <MapPin className="w-4 h-4 text-[#8F6A1E]" aria-hidden="true" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#8F6A1E]" aria-hidden="true" />
            </a>
          </div>
          <div className="w-full h-72 sm:h-80 bg-[#FAF8F4]">
            <iframe
              title="Parinay Banquet & Garden Google Maps Location"
              src={VENUE_CONTACT.googleMapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
