import { ParticleBackground } from '@/components/common/ParticleBackground';
import { ActionButton } from '../common/ActionButton';
import { TerminalLoader } from '@/components/common/TerminalLoader';
import { supabaseProvider } from '@/lib/supabase';
import Markdown from 'react-markdown';
import type { Components } from 'react-markdown';

const markdownComponents: Components = {
  p: ({ children }) => <p className='max-w-130 text-text text-sm mb-10'>{children}</p>,
  strong: ({ children }) => <strong className='text-green'>{children}</strong>,
};

export const Hero = async () => {
  const { heroName, about, resumeUrl } = await supabaseProvider.getSingle('hero');
  return (
    <section id='hero' className='container-x section-y relative responsive gap-10 justify-between overflow-hidden border-b border-border'>
      <ParticleBackground />
      <div className='relative z-1 max-w-2xl'>
        <h1 className='font-mono font-extrabold leading-none mb-6 text-body text-title'>
          Hi, I am
          <br />
          <span className='text-green text-hero'>{heroName}</span>
        </h1>
        <Markdown
          components={markdownComponents}
          children={about}
        />
        <div className='flex gap-4 flex-wrap'>
          <ActionButton
            href='#contact'
            text='CONTACT_ME'
          />
          <ActionButton
            href={resumeUrl}
            text='VIEW_RESUME'
            target='blank'
            type='secondary'
          />
        </div>
      </div>
      <div className='z-2'>
        <TerminalLoader />
      </div>
    </section>
  );
};
