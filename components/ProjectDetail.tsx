'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CornerBorder } from './CornerBorders';
import { Project } from '@/types/api/projects';
import { ImageLightbox } from './ImageLightbox';

export const ProjectDetail = ({ project }: { project: Project; }) => {
  const router = useRouter();
  const { title, description, images, links, stack, challenges } = project;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  const openLightbox = (index: number) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? lightboxImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === lightboxImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>

      {/* Detail Hero */}
      <div className='container-x section-y responsive justify-between gap-8 border-b border-border'>
        <div className='max-w-240'>
          <h1 className='font-mono font-extrabold mb-5 text-text text-title'>
            {title}
          </h1>
          <div className='text-muted text-sm'>
            {description}
          </div>
        </div>
        <div className='flex gap-3 self-start'>
          {links.map(({ icon, label, url }) => (
            <a
              key={label}
              href={url}
              target='blank'
              className='flex flex-nowrap items-center gap-2 p-2 font-mono text-xs font-bold border border-border hover:border-green transition-colors whitespace-nowrap'
            >
              {icon && <img src={icon} alt={label} className='w-4 h-4 shrink-0' />}
              {label}
              <span className='w-2 h-2 shrink-0 animate-pulse bg-red-500 rounded-full'></span>
            </a>
          ))}
        </div>
      </div>
      <div className='container-x section-y border-b border-border'>
        <p className='text-green text-xs mb-3'>// images_preview</p>
        <div className='flex flex-wrap gap-4'>
          {images.map((img, index) => (
            <CornerBorder key={`${img}-${index}`}>
              <button
                onClick={() => openLightbox(index)}
                className='block w-full bg-transparent border-none p-0 cursor-pointer group/img relative'
                aria-label={`Open image ${index + 1} fullscreen`}
              >
                <img
                  src={img}
                  alt={img.toString()}
                  className='w-full max-h-80 object-cover transition-opacity duration-200 group-hover/img:opacity-80'
                />
                <span className='absolute bottom-2 right-2 font-mono text-2xs text-green opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 bg-bg/70 px-1.5 py-0.5'>
                  [expand]
                </span>
              </button>
            </CornerBorder>
          ))}
        </div>
      </div>
      <div className='container-x section-y border-b border-border'>
        <p className='text-green text-xs mb-6'>// tech_stack</p>
        <div className='flex flex-wrap gap-4'>
          {stack.map(({ name, icon }) => (
            <div key={name} className='border border-border p-3 mb-4 flex items-center gap-4 group hover:bg-bg transition-colors'>
              <img
                src={icon}
                alt={icon}
                className='h-8'
              />
              <p className='text-sm text-text font-bold'>{name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='container-x section-y'>
        <p className='text-green text-xs mb-6'>// challenges_&_learnings</p>
        <div className='flex flex-col border-t border-border'>
          {challenges.map(({ title, description }, index) => (
            <div
              key={title + index}
              className='group flex border-b border-border hover:bg-hover transition-colors duration-200 cursor-default'
            >
              {/* left index sidebar */}
              <div className='flex flex-col items-center justify-center w-12 border-r border-border py-5 gap-2 shrink-0'>
                <span className='text-2xs text-muted group-hover:text-green transition-colors duration-200'>
                  0{index + 1}
                </span>
                <span className='w-1 h-1 rounded-full bg-border group-hover:bg-green transition-colors duration-200' />
              </div>
              {/* content */}
              <div className='flex flex-col gap-1 py-5 px-6'>
                <div className='text-sm text-text group-hover:text-green transition-colors duration-200'>{title}</div>
                <div className='text-xs text-muted leading-relaxed'>{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={lightboxImages}
          index={currentImageIndex}
          onClose={closeLightbox}
          onPrev={goToPrevImage}
          onNext={goToNextImage}
          onJump={setCurrentImageIndex}
        />
      )}
    </div>
  );
};
