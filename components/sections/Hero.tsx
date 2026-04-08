import { ParticleBackground } from '@/components/common/ParticleBackground';
import { ActionButton } from '../common/ActionButton';
import { supabase } from '@/lib/supabase';
import Markdown from 'react-markdown';
import type { Components } from 'react-markdown';
import { Mail, FileText } from 'lucide-react';

const markdownComponents: Components = {
  p: ({ children }) => <p className='max-w-2xl text-body text-base mb-section leading-relaxed'>{children}</p>,
  strong: ({ children }) => <strong className='text-green'>{children}</strong>,
};

export const Hero = async () => {
  const { heroName, about, resumeUrl } = await supabase.getSingle('hero');
  return (
    <section id='hero' className='container-x section-y text-center  relative items-center overflow-hidden border-b border-border'>
      <ParticleBackground />
      <div className='relative z-1 items-center flex flex-col justify-center'>
        <h1 className='font-mono font-extrabold leading-none mb-6 text-body text-title '>
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
            Icon={Mail}
          />
          <ActionButton
            href={resumeUrl}
            text='VIEW_RESUME'
            target='blank'
            type='secondary'
            Icon={FileText}
          />
        </div>
      </div>
    </section>
  );
};
