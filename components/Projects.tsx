import Link from 'next/link';
import { projects } from '@/data/projects';
import { SectionHeader } from './SectionHeader';
import Image from 'next/image';
import Testimg from '../assets/images/1.webp';
import Testimg2 from '../assets/images/web-2.png';
import { CornerBorder } from './CornerBorders';

const imagesTestList = [Testimg, Testimg2, Testimg, Testimg2, Testimg, Testimg2,];

const ImagesMasonry = ({ images }: { images: any[]; }) => {
  const maxLength = 4;
  const visible = images.slice(0, maxLength);
  return (
    <div className='relative aspect-square w-60 h-60 grid grid-cols-2 grid-rows-2 gap-1 bg-border'>
      {visible.map((img, index) => (
        <div
          key={index}
          className={'relative '}
        >
          <Image
            src={img}
            alt=''
            fill
            className='object-cover'
          />
        </div>
      ))}
      {images.length > maxLength && (
        <div className='absolute inset-0 z-10 bg-black/50 flex items-center justify-center'>
          <span className='text-green text-lg font-bold'>+{images.length - maxLength}</span>
        </div>
      )}
    </div>
  );
};

export const Projects = () => (
  <section id='projects' className='container-x section-y border-b border-border'>
    <SectionHeader title='projects' subtitle="things i've built" />

    <div className='grid gap-px bg-border'>
      {projects.map(({ slug, title, subtitle, num, tags }) => (
        <Link
          key={slug}
          href={`/projects/${slug}`}
          className='no-underline text-inherit'
        >
          <div className='responsive gap-6 justify-between bg-bg p-8 transition-colors hover:bg-hover cursor-pointer'>
            <div className='flex flex-col justify-between'>
              <div>
                <p className='text-green text-2xs mb-4'>{num}</p>
                <p className='font-mono text-md font-bold mb-3'>{title}</p>
                <p className='line-clamp-1 text-muted text-xs mb-5'>{subtitle}</p>
                <div className='flex gap-2 flex-wrap'>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className='border border-border text-muted px-2.5 py-1 text-2xs'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className='mt-5 text-green text-2xs self-start'>→ view project</p>
            </div>
            <ImagesMasonry images={imagesTestList} />
          </div>
        </Link>
      ))}
    </div>
  </section>
);
