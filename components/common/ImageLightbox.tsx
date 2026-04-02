'use client';

import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface ImageLightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onJump: (index: number) => void;
}

export const ImageLightbox = ({
  images,
  index,
  onClose,
  onPrev,
  onNext,
  onJump,
}: ImageLightboxProps) => {
  const total = images.length;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  const content = (
    <div
      className='fixed inset-0 z-9999 flex items-center justify-center bg-black/90 backdrop-blur-sm'
      onClick={onClose}
    >
      {/* Header bar */}
      <div className='absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 border-b border-border bg-bg/80 backdrop-blur-md'>
        <span className='font-mono text-xs text-green'>// image_preview</span>
        <span className='font-mono text-xs text-muted'>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className='font-mono text-md text-muted hover:text-green transition-colors bg-transparent border-none cursor-pointer p-2'
          aria-label='Close'
        >
          [X]
        </button>
      </div>

      {/* Prev button */}
      {total > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className='absolute left-0 md:left-4 top-1/2 -translate-y-1/2 font-mono text-muted hover:text-green text-5xl md:text-6xl bg-transparent border-none cursor-pointer transition-colors p-4 md:p-6 z-20'
          aria-label='Previous image'
        >
          ‹
        </button>
      )}

      {/* Image Container */}
      <div
        className='absolute top-14 bottom-20 left-12 right-12 md:top-16 md:bottom-24 md:left-24 md:right-24 flex items-center justify-center pointer-events-none'
      >
        <img
          src={images[index]}
          alt={`Image ${index + 1}`}
          className='max-w-full max-h-full object-contain pointer-events-auto'
          onClick={(e) => e.stopPropagation()}
          draggable={false}
        />
      </div>

      {/* Next button */}
      {total > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className='absolute right-0 md:right-4 top-1/2 -translate-y-1/2 font-mono text-muted hover:text-green text-5xl md:text-6xl bg-transparent border-none cursor-pointer transition-colors p-4 md:p-6 z-20'
          aria-label='Next image'
        >
          ›
        </button>
      )}

      {/* Thumbnail strip */}
      {total > 1 && (
        <div className='absolute bottom-0 left-0 right-0 z-20 flex justify-center gap-2 px-4 py-3 border-t border-border bg-bg/80 backdrop-blur-md overflow-x-auto'>
          {images.map((img, i) => (
            <button
              key={img}
              onClick={(e) => { e.stopPropagation(); if (i !== index) { onJump(i); } }}
              aria-label={`View image ${i + 1}`}
              className={`shrink-0 w-14 h-10 border transition-all duration-200 bg-transparent cursor-pointer p-0 overflow-hidden ${i === index ? 'border-green opacity-100' : 'border-border opacity-40 hover:opacity-70'
                }`}
            >
              <img src={img} alt={`thumb ${i + 1}`} className='w-full h-full object-cover pointer-events-none' />
            </button>
          ))}
        </div>
      )}
    </div>
  );

  if (typeof window === 'undefined') return null;
  return createPortal(content, document.body);
};
