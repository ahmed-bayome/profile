import Link from 'next/link';
import { SectionHeader } from './SectionHeader';
import { get } from '@/utils/api';
import { GetProjectsResponse } from '@/types/api/projects';
import { API_ENDPOINTS } from '@/constants/api';
import { toCamelCase } from '@/utils/objects';

export const getProjects = async () => {
  const data = await get<GetProjectsResponse>(API_ENDPOINTS.PROJECTS);
  return data;
};

const ImagesMasonry = ({ images }: { images: string[]; }) => {
  const maxLength = 4;
  const visible = images.slice(0, maxLength);

  return (
    <div className='relative aspect-square w-60 h-60 grid grid-cols-2 grid-rows-2 gap-1 bg-border'>
      {visible.map((img, index) => (
        <div key={index} className='relative overflow-hidden'>
          <img
            src={img}
            alt=''
            className='w-full h-full object-cover'
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

export const Projects = async () => {
  const projects = await getProjects();
  const camelCaseProjects = toCamelCase(projects);
  return (
    <section id='projects' className='container-x section-y border-b border-border'>
      <SectionHeader title='projects' subtitle="things i've built" />

      <div className='grid gap-px bg-border'>
        {camelCaseProjects.map(({ id, slug, title, description, tags, images }, index) => (
          <Link
            key={id}
            href={`/projects/${slug}`}
            className='no-underline text-inherit'
          >
            <div className='responsive gap-6 justify-between bg-bg p-8 transition-colors hover:bg-hover cursor-pointer'>
              <div className='flex flex-col justify-between'>
                <div>
                  <p className='text-green text-2xs mb-4'>// 0{index + 1}</p>
                  <p className='font-mono text-md font-bold mb-3'>{title}</p>
                  <p className='line-clamp-1 text-muted text-xs mb-5'>{description}</p>
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
              <ImagesMasonry images={images} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
