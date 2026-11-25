import { useState } from 'react';

interface VenueImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function VenueImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Parinay Banquet & Garden',
  priority = false,
}: VenueImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#FAF6EC] via-[#F5EFE0] to-[#EAE0C8] text-[#7D5B18] p-6 text-center ${className}`}
      >
        <svg
          className="w-10 h-10 mb-3 text-[#C59B3B]"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M24 6C18 14 10 18 10 27C10 34.732 16.268 41 24 41C31.732 41 38 34.732 38 27C38 18 30 14 24 6Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M24 14V41" stroke="currentColor" strokeWidth="1.5" />
          <path d="M24 24L31 19" stroke="currentColor" strokeWidth="1.5" />
          <path d="M24 29L17 24" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="font-serif text-lg font-medium text-[#1B1814]">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
