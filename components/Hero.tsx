import { ParticleBackground } from '@/components/ParticleBackground';
import { ActionButton } from './ActionButton';
import { TerminalLoader } from '@/components/TerminalLoader';
import { toCamelCase } from '@/utils/objects';
import { getHero } from '@/lib/hero';

const formatText = (text: string) => {
  const parts = text.split(/\{([\s\S]*?)\}/g);

  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong className='text-green' key={index}>{part}</strong>;
    }
    return part;
  });
};

export const Hero = async () => {
  const data = await getHero();
  const { heroName, about, resumeUrl } = toCamelCase(data);
  return (
    <section id='hero' className='container-x section-y relative responsive gap-10 justify-between overflow-hidden border-b border-border'>
      {/* Canvas — z-index 0 */}
      <ParticleBackground />
      {/* Text content — z-index 1 */}
      <div className='relative z-1 max-w-2xl'>
        <h1 className='font-mono font-extrabold leading-none mb-6 text-body text-title'>
          Hi, I am
          <br />
          <span className='text-green text-hero'>{heroName}</span>
        </h1>
        <p className='max-w-130 text-text text-sm mb-10'>{formatText(about)}</p>
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
