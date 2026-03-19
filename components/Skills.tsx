import { SectionHeader } from './SectionHeader';

type Skill = {
  cat: string;
  set: string[];
};

const skills: Skill[] = [
  {
    cat: 'LANGUAGES',
    set: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'HTML', 'CSS'],
  },
  {
    cat: 'FRONTEND',
    set: ['React', 'React Native', 'Remix', 'NextJS', 'Vue.js', 'Tailwind', 'Redux', 'Pinia', 'React Hook Form'],
  },
  {
    cat: 'BACKEND',
    set: ['Django', 'NodeJS', 'Laravel', 'Websockets', 'Workers', 'MySQL', 'Realm DB'],
  },
  {
    cat: 'TOOLS',
    set: ['Antigravity', 'Gemini CLI', 'Figma', 'Zeplin', 'Git / GitHub', 'Xcode', 'Android Studio', 'Notion', 'Trello'],
  },
];

export const Skills = () => (
  <section id='skills' className='px-12 py-[60px] border-b border-border'>
    <SectionHeader title='skills' subtitle='what i work with' />

    {/* Skills grid */}
    <div className='grid gap-px bg-border'>
      {skills.map(({ cat, set }) => (
        <div
          key={cat}
          className='bg-bg px-6 py-5 cursor-default transition-colors hover:bg-hover'
        >
          <div className='text-green text-[10px] mb-2 tracking-widest'>{cat}</div>
          <div className='text-[13px] text-text'>{set.join(' / ')}</div>
        </div>
      ))}
    </div>
  </section>
);
