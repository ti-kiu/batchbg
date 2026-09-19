'use client';

import { useRef, useState, useCallback, useEffect } from 'react';

interface CompareSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export default function CompareSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After',
  className = '',
}: CompareSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  // Track container width with ResizeObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition],
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Inline checkerboard via conic-gradient
  const checkerboard =
    'conic-gradient(#e0e0e0 0% 25%, #ffffff 0% 50%) 0 0 / 20px 20px';

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none touch-none rounded-2xl shadow-card ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={{ aspectRatio: '3 / 2' }}
    >
      {/* Before image — full width, always visible */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* After image — clipped from the left up to `position%` */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: checkerboard,
          backgroundRepeat: 'repeat',
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 object-cover pointer-events-none"
          draggable={false}
          style={{
            width: containerWidth > 0 ? `${containerWidth}px` : '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Draggable handle */}
      <div
        className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md" />
        {/* Knob */}
        <div
          className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full
                     bg-white shadow-lg border-2 border-white/80"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-gray-700"
          >
            <path
              d="M7 4L3 10L7 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 4L17 10L13 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* BEFORE / AFTER labels */}
      <span className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-black/50 text-white text-xs font-semibold tracking-wider uppercase pointer-events-none">
        Before
      </span>
      <span className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-black/50 text-white text-xs font-semibold tracking-wider uppercase pointer-events-none">
        After
      </span>
    </div>
  );
}
