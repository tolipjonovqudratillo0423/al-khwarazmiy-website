import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = 'fade-up', // 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'scale-up'
  delay = 0,
  duration = 750,
  className = '',
  threshold = 0.08
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
      observer.disconnect();
    };
  }, [threshold]);

  const getTransitionStyle = () => {
    let transformHidden = 'translateY(50px)';
    let transformVisible = 'translateY(0px)';

    if (animation === 'fade-up') {
      transformHidden = 'translateY(50px)';
      transformVisible = 'translateY(0px)';
    } else if (animation === 'fade-down') {
      transformHidden = 'translateY(-50px)';
      transformVisible = 'translateY(0px)';
    } else if (animation === 'fade-left') {
      transformHidden = 'translateX(55px)';
      transformVisible = 'translateX(0px)';
    } else if (animation === 'fade-right') {
      transformHidden = 'translateX(-55px)';
      transformVisible = 'translateX(0px)';
    } else if (animation === 'zoom-in' || animation === 'scale-up') {
      transformHidden = 'scale(0.88) translateY(25px)';
      transformVisible = 'scale(1) translateY(0px)';
    }

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? transformVisible : transformHidden,
      filter: isVisible ? 'blur(0px)' : 'blur(4px)',
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      willChange: 'opacity, transform, filter'
    };
  };

  return (
    <div
      ref={domRef}
      style={getTransitionStyle()}
      className={`transition-all ${className}`}
    >
      {children}
    </div>
  );
}
