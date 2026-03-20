'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { Project } from '@/data/projects';
import { projects } from '@/data/projects';

export const ProjectDetail = ({ project }: { project: Project }) => {
  const router = useRouter();
  const nextProject = projects.find((p) => p.slug === project.nextSlug);

  return (
    <div>
      {/* Detail Nav */}
      <div className='container-x flex justify-between items-center py-5 border-b border-border sticky top-0 bg-bg z-10'>
        <button
          onClick={() => router.back()}
          className='text-muted text-xs flex items-center gap-2 transition-colors hover:text-green border-none bg-transparent font-mono cursor-pointer'
        >
          ← ./projects
        </button>
        <div className='flex gap-3'>
          <a
            href='https://github.com/ahmedbayome'
            target='_blank'
            rel='noopener noreferrer'
            className='px-5 py-2 font-mono text-xs bg-transparent border border-border text-muted no-underline transition-all flex items-center gap-2 hover:border-green hover:text-green'
          >
            {'{ } GitHub'}
          </a>
          <a
            href='#'
            className='px-5 py-2 font-mono text-xs bg-green text-on-green font-bold no-underline transition-colors flex items-center gap-2 hover:bg-green-soft'
          >
            ↗ Live Demo
          </a>
        </div>
      </div>

      {/* Detail Hero */}
      <div className='container-x section-y border-b border-border pb-10'>
        <div className='text-green text-2xs mb-3'>{project.num}</div>
        <h1
          className='font-mono font-extrabold leading-[1.05] mb-5 text-text text-title'
          dangerouslySetInnerHTML={{ __html: project.title.replace('\n', '<br />') }}
        />
        <div className='text-muted max-w-[560px] leading-[1.8] text-sm'>
          {project.subtitle}
        </div>
        <div className='flex gap-8 mt-8 flex-wrap'>
          {project.meta.map(({ label, value }) => (
            <div key={label}>
              <div className='text-green text-2xs tracking-widest mb-1'>{label}</div>
              <div className='text-xs text-text'>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className='container-x py-12 border-b border-border'>
        <div className='flex items-center gap-4 mb-6'>
          <span className='font-mono text-base font-bold'>
            <span className='text-green'>./</span>tech_stack
          </span>
          <div className='flex-1 h-px bg-border' />
        </div>
        <div className='grid gap-px bg-border grid-cols-[repeat(auto-fit,minmax(180px,1fr))]'>
          {project.stack.map(({ cat, name, desc }) => (
            <div
              key={name}
              className='bg-bg px-6 py-5 transition-colors hover:bg-hover'
            >
              <div className='text-green text-2xs tracking-widest mb-1.5'>{cat}</div>
              <div className='text-sm text-text'>{name}</div>
              <div className='text-2xs text-muted mt-1'>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges & Learnings */}
      <div className='container-x py-12 border-b border-border'>
        <div className='flex items-center gap-4 mb-6'>
          <span className='font-mono text-base font-bold'>
            <span className='text-green'>./</span>challenges_&amp;_learnings
          </span>
          <div className='flex-1 h-px bg-border' />
        </div>
        <div className='grid grid-cols-2 gap-px bg-border'>
          {project.challenges.map(({ icon, title, desc }) => (
            <div key={title} className='bg-bg px-8 py-7'>
              <div className='text-green text-md mb-3'>{icon}</div>
              <div className='text-sm font-bold mb-2 text-text'>{title}</div>
              <div className='text-xs text-muted leading-[1.7]'>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Next project */}
      {nextProject && (
        <div className='container-x py-10 flex justify-between items-center'>
          <div>
            <div className='text-2xs text-muted mb-1.5'>{'// next project'}</div>
            <div className='font-mono text-md font-bold text-text'>
              {nextProject.title.replace('\n', ' ')}
            </div>
          </div>
          <Link
            href={`/projects/${nextProject.slug}`}
            className='text-green text-xs font-mono no-underline transition-opacity hover:opacity-70'
          >
            → view next
          </Link>
        </div>
      )}
    </div>
  );
};
