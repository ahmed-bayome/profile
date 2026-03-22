import { SectionHeader } from './SectionHeader';
import { getSkills } from '@/lib/skills';

export const Skills = async () => {
  const skills = await getSkills();
  return (
    <section id='skills' className='container-x section-y border-b border-border'>
      <SectionHeader title='skills' subtitle='what i work with' />
      <div className='grid gap-px bg-border'>
        {skills.map(({ id, category, skills }) => (
          <div
            key={id}
            className='bg-bg px-6 py-5 cursor-default transition-colors hover:bg-hover'
          >
            <div className='text-green font-bold text-2xs mb-2 tracking-widest'>{category}</div>
            <div className='text-sm text-text'>{skills.join(' - ')}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
