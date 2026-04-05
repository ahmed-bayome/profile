'use client';

import { ArrowRight, ArrowLeft, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { useEffect, useCallback, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

export const ImageLightbox = ({
  images,
  index,
  onClose,
  onPrev,
  onNext,
  onJump
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onJump: (index: number) => void;
}) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const total = images.length;
  const imageRef = useRef<HTMLImageElement>(null);

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && scale === 1) onPrev();
    if (e.key === 'ArrowRight' && scale === 1) onNext();
  }, [onClose, onPrev, onNext, scale]);

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => {
      const newScale = Math.max(prev - 0.5, 1);
      if (newScale === 1) setPosition({ x: 0, y: 0 });
      return newScale;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleJump = (i: number) => {
    if (i !== index) {
      resetZoom();
      onJump(i);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    resetZoom();
    onPrev();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    resetZoom();
    onNext();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  useEffect(() => {
    resetZoom();
  }, [index, resetZoom]);

  const content = (
    <div
      className='fixed inset-0 z-9999 flex flex-col bg-black/95 backdrop-blur-md select-none touch-none cursor-pointer'
      onClick={onClose}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Top Header/Controls */}
      <div className='flex items-center justify-between p-4 md:p-6 z-50 text-white/70'>
        <div className='text-sm font-mono'>
          {index + 1} / {total}
        </div>

        <div className='flex items-center gap-4 bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm border border-white/10'>
          <button
            onClick={handleZoomOut}
            className='hover:text-white transition-colors p-1 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed'
            title='Zoom Out'
            disabled={scale <= 1}
          >
            <ZoomOut size={20} />
          </button>
          <span className='w-12 text-center text-xs font-mono'>{Math.round(scale * 100)}%</span>
          <button
            onClick={handleZoomIn}
            className='hover:text-white transition-colors p-1 cursor-pointer'
            title='Zoom In'
          >
            <ZoomIn size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); resetZoom(); }}
            className='hover:text-white transition-colors p-1 border-l border-white/10 ml-1 pl-2 cursor-pointer'
            title='Reset Zoom'
          >
            <RotateCcw size={18} />
          </button>
        </div>

        <button
          onClick={onClose}
          className='hover:text-white items-center justify-center transition-colors bg-white/5 p-2 rounded-full border border-white/10 hover:bg-white/10 cursor-pointer'
          aria-label='Close'
        >
          <X className='text-red-500' size={24} />
        </button>
      </div>

      {/* Main Image Viewport */}
      <div
        className='flex-1 relative flex items-center justify-center overflow-hidden cursor-default'
      >
        {/* Navigation Arrows (Visible only on Desktop sidebars) */}
        {total > 1 && (
          <>
            <button
              onClick={handlePrev}
              className='absolute cursor-pointer left-4 md:left-8 z-50 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/50 hover:text-white transition-all hidden md:flex items-center justify-center'
              aria-label='Previous'
            >
              <ArrowLeft size={32} />
            </button>
            <button
              onClick={handleNext}
              className='absolute cursor-pointer right-4 md:right-8 z-50 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/50 hover:text-white transition-all hidden md:flex items-center justify-center'
              aria-label='Next'
            >
              <ArrowRight size={32} />
            </button>
          </>
        )}

        <div
          className='relative w-full h-full flex items-center justify-center'
          onClick={(e) => e.stopPropagation()}
        >
          <img
            ref={imageRef}
            src={images[index]}
            alt={`Gallery ${index + 1}`}
            onMouseDown={handleMouseDown}
            onTouchStart={(e) => {
              if (scale > 1 && e.touches.length === 1) {
                const touch = e.touches[0];
                setIsDragging(true);
                setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
              }
            }}
            onTouchMove={(e) => {
              if (isDragging && scale > 1 && e.touches.length === 1) {
                const touch = e.touches[0];
                setPosition({
                  x: touch.clientX - dragStart.x,
                  y: touch.clientY - dragStart.y
                });
              }
            }}
            onTouchEnd={handleMouseUp}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
              transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.1, 0.7, 0.6, 0.9)'
            }}
            className='max-w-[95%] max-h-[90%] object-contain pointer-events-auto will-change-transform drop-shadow-2xl'
            draggable={false}
          />
        </div>
      </div>

      {/* Navigation for Mobile (Buttons appearing at bottom) */}
      <div className='md:hidden flex justify-center items-center gap-12 py-4 z-50'>
        {total > 1 && (
          <>
            <button onClick={handlePrev} className='text-white/50 hover:text-white p-2 cursor-pointer'>
              <ArrowLeft size={28} />
            </button>
            <button onClick={handleNext} className='text-white/50 hover:text-white p-2 cursor-pointer'>
              <ArrowRight size={28} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Bar (Simplified) */}
      {total > 1 && (
        <div
          className='w-full p-4 flex justify-center gap-2 overflow-x-auto no-scrollbar pb-8'
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => handleJump(i)}
              className={`relative shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${i === index ? 'border-white scale-105 shadow-lg' : 'border-transparent opacity-40 hover:opacity-70'
                }`}
            >
              <img src={img} alt={`Thumb ${i}`} className='w-full h-full object-cover' />
            </button>
          ))}
        </div>
      )}
    </div>
  );

  if (typeof window === 'undefined') return null;
  return createPortal(content, document.body);
};
