import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  UPCOMING_WEDDING_DATES,
  VENUE_CONTACT,
  buildWhatsAppUrl,
  type AuspiciousDate,
} from '../data/venueData';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeRemaining(targetIso: string, nowMs: number): TimeRemaining {
  const diff = Math.max(0, new Date(targetIso).getTime() - nowMs);
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function padTwo(value: number): string {
  return String(value).padStart(2, '0');
}

export function AuspiciousCountdown() {
  const [nowMs, setNowMs] = useState(() => Date.now());

  const upcomingDates = useMemo<AuspiciousDate[]>(() => {
    const future = UPCOMING_WEDDING_DATES.filter(
      (item) => new Date(item.isoDate).getTime() > nowMs
    );
    if (future.length > 0) return future;

    // Graceful fallback if all static dates have passed
    const nextYear = new Date(nowMs).getFullYear() + 1;
    return [
      {
        id: `${nextYear}-11-24`,
        label: `24 November ${nextYear}`,
        isoDate: `${nextYear}-11-24T19:00:00+05:30`,
        occasion: 'Vivah Muhurat',
      },
    ];
  }, [nowMs]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const safeIndex = selectedIndex % upcomingDates.length;
  const activeDate = upcomingDates[safeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNowMs(Date.now());
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const remaining = getTimeRemaining(activeDate.isoDate, nowMs);

  const checkDateUrl = buildWhatsAppUrl(
    `Namaste ${VENUE_CONTACT.brandName}, is ${activeDate.label} (${activeDate.occasion}) available for venue booking?`
  );

  const units = [
    { label: 'Days', value: padTwo(remaining.days) },
    { label: 'Hrs', value: padTwo(remaining.hours) },
    { label: 'Mins', value: padTwo(remaining.minutes) },
    { label: 'Secs', value: padTwo(remaining.seconds) },
  ];

  const handlePrev = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + upcomingDates.length) % upcomingDates.length
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % upcomingDates.length);
  };

  return (
    <div
      aria-label="Countdown to upcoming auspicious wedding date"
      className="mt-4 rounded-xl border border-[#E7DFCE] bg-[#FAF8F4] px-4 py-3.5 sm:px-5 sm:py-4"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
        {/* Left: Auspicious Date Label & Switcher */}
        <div className="flex items-center justify-between sm:justify-start gap-3 min-w-0">
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-[#8F6A1E]">
              Upcoming Auspicious Date · {activeDate.occasion}
            </p>
            <div className="flex items-center gap-2 mt-0.5">
              <p className="font-serif text-lg sm:text-xl font-semibold text-[#1B1814] tabular-nums truncate">
                {activeDate.label}
              </p>
              <a
                href={checkDateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#8F6A1E] hover:text-[#765514] underline underline-offset-2 whitespace-nowrap shrink-0"
              >
                Check Date
              </a>
            </div>
          </div>

          {upcomingDates.length > 1 && (
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous auspicious wedding date"
                className="inline-flex items-center justify-center w-7 h-7 rounded-md border border-[#E7DFCE] bg-white text-[#5C5347] hover:text-[#1B1814] hover:border-[#C59B3B] transition-colors duration-150 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next auspicious wedding date"
                className="inline-flex items-center justify-center w-7 h-7 rounded-md border border-[#E7DFCE] bg-white text-[#5C5347] hover:text-[#1B1814] hover:border-[#C59B3B] transition-colors duration-150 cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        {/* Right: Compact Tabular Countdown */}
        <div className="grid grid-cols-4 divide-x divide-[#E7DFCE] rounded-lg border border-[#E7DFCE] bg-white py-2 sm:py-1.5 sm:min-w-[236px] shrink-0">
          {units.map((unit) => (
            <div key={unit.label} className="px-2.5 text-center">
              <span className="block font-serif text-lg sm:text-xl font-semibold leading-none text-[#1B1814] tabular-nums">
                {unit.value}
              </span>
              <span className="block text-[10px] font-medium text-[#8F6A1E] mt-1">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
