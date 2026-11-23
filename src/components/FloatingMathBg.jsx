import React from 'react';

const fixedFormulas = [
  { text: 'a² + b² = c²', top: '6%', left: '4%', size: 'text-xl sm:text-2xl font-black', anim: 'mathFloat1', duration: 7, delay: 0 },
  { text: 's = V/t', top: '4%', left: '34%', size: 'text-base sm:text-lg font-bold', anim: 'mathFloat2', duration: 8, delay: -2 },
  { text: 's = V/t', top: '5%', left: '54%', size: 'text-base sm:text-lg font-bold', anim: 'mathFloat3', duration: 9, delay: -4 },
  { text: '=', top: '8%', left: '9%', size: 'text-3xl font-black', anim: 'mathFloat1', duration: 6, delay: -1 },
  { text: '%', top: '22%', left: '3%', size: 'text-2xl font-black', anim: 'mathFloat2', duration: 7, delay: -3 },
  { text: '%', top: '27%', left: '6%', size: 'text-lg font-bold', anim: 'mathFloat3', duration: 8, delay: -5 },
  { text: 'a²', top: '46%', left: '2%', size: 'text-xl sm:text-2xl font-black', anim: 'mathFloat1', duration: 7.5, delay: -2 },
  { text: 'a²', top: '78%', left: '3%', size: 'text-lg sm:text-xl font-bold', anim: 'mathFloat2', duration: 8.5, delay: -6 },
  { text: '%', top: '84%', left: '6%', size: 'text-2xl font-black', anim: 'mathFloat3', duration: 7, delay: -3.5 },
  { text: 'E = mc²', top: '12%', left: '86%', size: 'text-lg sm:text-xl font-black', anim: 'mathFloat1', duration: 8, delay: -1.5 },
  { text: 'F = ma', top: '34%', left: '91%', size: 'text-lg sm:text-xl font-bold', anim: 'mathFloat2', duration: 7.5, delay: -4.5 },
  { text: 'π ≈ 3.14', top: '62%', left: '88%', size: 'text-base sm:text-lg font-bold', anim: 'mathFloat3', duration: 9, delay: -2.5 },
  { text: '∑n²', top: '82%', left: '87%', size: 'text-xl sm:text-2xl font-black', anim: 'mathFloat1', duration: 8, delay: -5 },
  { text: '∫f(x)dx', top: '38%', left: '10%', size: 'text-base sm:text-lg font-bold', anim: 'mathFloat2', duration: 9.5, delay: -3 },
  { text: 'sin²θ + cos²θ = 1', top: '72%', left: '26%', size: 'text-sm sm:text-base font-bold', anim: 'mathFloat3', duration: 10, delay: -7 },
  { text: 'lim(x→∞)', top: '86%', left: '64%', size: 'text-sm sm:text-base font-bold', anim: 'mathFloat1', duration: 8.5, delay: -4 },
  { text: 'Δx/Δt', top: '3%', left: '76%', size: 'text-base sm:text-lg font-bold', anim: 'mathFloat2', duration: 7, delay: -2 },
  { text: '√2', top: '16%', left: '60%', size: 'text-lg sm:text-xl font-bold', anim: 'mathFloat3', duration: 8, delay: -5 },
  { text: 'log₂n', top: '50%', left: '84%', size: 'text-base sm:text-lg font-bold', anim: 'mathFloat1', duration: 9, delay: -1 },
  { text: '÷', top: '66%', left: '14%', size: 'text-2xl sm:text-3xl font-black', anim: 'mathFloat2', duration: 7, delay: -3 },
  { text: '×', top: '90%', left: '42%', size: 'text-2xl sm:text-3xl font-black', anim: 'mathFloat3', duration: 6.5, delay: -2 }
];

export default function FloatingMathBg({ isDark = false, className = '' }) {
  const colorClass = isDark
    ? 'text-sky-300/60 drop-shadow-[0_2px_8px_rgba(56,189,248,0.3)]'
    : 'text-[#0047AB]/40 drop-shadow-[0_1px_2px_rgba(0,71,171,0.15)]';

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {fixedFormulas.map((item, idx) => (
        <span
          key={idx}
          className={`absolute font-mono whitespace-nowrap ${item.size} ${colorClass}`}
          style={{
            top: item.top,
            left: item.left,
            animation: `${item.anim} ${item.duration}s ease-in-out ${item.delay}s infinite`
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}
