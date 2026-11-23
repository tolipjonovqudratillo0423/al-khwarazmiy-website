import React from 'react';

export default function MovingNewspaperBg({ opacity = 0.12, className = '' }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Moving Newspaper Collage Layer */}
      <div
        className="absolute -inset-[15%] w-[130%] h-[130%] bg-repeat bg-cover"
        style={{
          backgroundImage: 'url(/assets/newspaper-bg.jpg)',
          opacity,
          filter: 'grayscale(85%) contrast(115%)',
          animation: 'newspaperDrift 38s ease-in-out infinite alternate'
        }}
      />
      {/* Subtle overlay gradient to ensure clean readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90" />
    </div>
  );
}
