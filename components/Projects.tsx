import Link from 'next/link';
import { projects } from '@/data/projects';
import { SectionHeader } from './SectionHeader';

export const Projects = () => (
  <section id='projects' className='px-12 py-[60px] border-b border-border'>
    <SectionHeader title='projects' subtitle="things i've built" />

    {/* Projects grid */}
    <div className='grid gap-px bg-border'>
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className='no-underline text-inherit'
        >
          <div className='bg-bg p-8 transition-colors hover:bg-hover cursor-pointer h-full'>
            <div className='text-green text-[11px] mb-4'>{project.num}</div>
            <div className='font-syne text-[18px] font-bold mb-3'>
              {project.title.replace('\n', ' — ')}
            </div>
            <p className='text-muted text-[12px] leading-[1.7] mb-5'>
              {project.subtitle.slice(0, 120)}…
            </p>
            <div className='flex gap-2 flex-wrap'>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className='border border-border text-muted px-2.5 py-1 text-[10px] tracking-[0.05em]'
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className='mt-5 text-green text-[11px]'>→ view project</div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);
