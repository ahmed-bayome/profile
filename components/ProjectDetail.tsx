'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { Project } from '@/data/projects';
import { projects } from '@/data/projects';
import { ActionButton } from './ActionButton';
import Image from 'next/image';
import Testimg from '../assets/images/1.webp';
import Testimg2 from '../assets/images/web-2.png';
import { CornerBorder } from './CornerBorders';

const stack = [
  { cat: 'LANGUAGE', name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', desc: 'Type safety' },
  { cat: 'LANGUAGE', name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', desc: 'Scripting & backend' },
  { cat: 'FRAMEWORK', name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'Component UI' },
  { cat: 'FRAMEWORK', name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', desc: 'SSR & routing' },
  { cat: 'FRAMEWORK', name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', desc: 'Component UI' },
  { cat: 'FRAMEWORK', name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', desc: 'Backend framework' },
  // { cat: 'BACKEND', name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', desc: 'JS runtime' },
  // { cat: 'BACKEND', name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', desc: 'Auth & database' },
  // { cat: 'DATABASE', name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg', desc: 'NoSQL DB' },
  // { cat: 'TOOLS', name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg', desc: 'Containerization' },
  // { cat: 'TOOLS', name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-plain.svg', desc: 'UI design' },
  // { cat: 'TOOLS', name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg', desc: 'Version control' },
];

const challenges = [
  { icon: '⚡', cat: 'CHALLENGE', title: 'Offline-first architecture', desc: 'Designed a sync queue that holds mutations locally and replays them once connectivity is restored.'.repeat(23) },
  { icon: '🔔', cat: 'CHALLENGE', title: 'Push notifications', desc: '...' },
  { icon: '📦', cat: 'CHALLENGE', title: 'App store submission', desc: '...' },
  { icon: '🌍', cat: 'LEARNED', title: 'What I learned', desc: '...' },
];
export const ProjectDetail = ({ project }: { project: Project; }) => {
  const router = useRouter();
  const nextProject = projects.find((p) => p.slug === project.nextSlug);
  const imagesTestList = [Testimg, Testimg2, Testimg,];
  return (
    <div>
      {/* Detail Nav */}
      <div className='container-x flex py-5 border-b border-border bg-bg z-10'>
        <button
          onClick={router.back}
          className='text-muted text-xs flex items-center gap-2 transition-colors hover:text-green border-none bg-transparent font-mono cursor-pointer'
        >
          ← ./projects
        </button>
      </div>
      {/* Detail Hero */}
      <div className='container-x section-y responsive gap-8 border-b border-border'>
        <div>
          {/* <div className='text-green text-2xs mb-3'>{project.num}</div> */}
          <h1 className='font-mono font-extrabold leading-[1.05] mb-5 text-text text-title'>
            {project.title}
          </h1>
          <div className='text-muted max-w-140 leading-[1.8] text-sm'>
            {project.subtitle}
          </div>
        </div>
        <div className='flex flex-col gap-8 justify-between bg-surface border-border border p-5'>
          <div className='flex flex-wrap gap-5'>
            {project.meta.map(({ label, value }) => (
              <div key={label}>
                <div className='text-green text-2xs tracking-widest mb-1'>{label}</div>
                <div className='text-xs text-text'>{value}</div>
              </div>
            ))}
          </div>
          <div className='flex gap-3 self-start'>
            <ActionButton type='highlighted' href='#' text='↗ Live Demo' />
            <ActionButton href='https://github.com/ahmedbayome' text='{ } GitHub' />
          </div>
        </div>
      </div>
      <div className='container-x section-y border-b border-border'>
        <p className='text-green text-xs mb-3'>// images_preview</p>
        <div className='flex flex-wrap gap-4'>
          {imagesTestList.map((img, index) => (
            <CornerBorder key={index}>
              <Image
                src={img}
                alt={img.toString()}
                className='w-full max-h-100'
              />
            </CornerBorder>
          ))}
        </div>
      </div>
      <div className='container-x section-y border-b border-border'>
        <p className='text-green text-xs mb-6'>// tech_stack</p>
        <div className='flex flex-wrap gap-4'>
          {stack.map(({ cat, name, icon, desc }) => (
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
      <div className='container-x section-y border-b border-border'>
        <p className='text-green text-xs mb-6'>// challenges_&_learnings</p>
        <div className='flex flex-col border-t border-border'>
          {challenges.map(({ icon, title, desc, cat }, index) => (
            <div
              key={title}
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
                <div className='text-xs text-muted leading-relaxed'>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Next project */}
      {/* {nextProject && (
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
      )} */}
    </div>
  );
};
