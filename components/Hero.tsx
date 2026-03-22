import { ParticleBackground } from '@/components/ParticleBackground';
import { ActionButton } from './ActionButton';
import { TerminalLoader } from '@/components/TerminalLoader';
import { API_ENDPOINTS } from '@/constants/api';
import { get } from '@/utils/api';
import { GetHeroResponse } from '@/types/api/hero';
import { toCamelCase } from '@/utils/objects';

export const getHero = async () => {
  const data = await get<GetHeroResponse>(API_ENDPOINTS.HERO);
  return data;
};

export const Hero = async () => {
  const data = await getHero();
  const { heroName, about, resumeUrl } = toCamelCase(data);
  return (
    <section className='container-x section-y relative responsive gap-10 justify-between overflow-hidden border-b border-border'>
      {/* Canvas — z-index 0 */}
      <ParticleBackground />
      {/* Text content — z-index 1 */}
      <div className='relative z-1 max-w-2xl'>
        <h1 className='font-mono font-extrabold leading-none mb-6 text-text text-title'>
          Hello, I am
          <br />
          <span className='text-green text-hero'>{heroName}</span>
        </h1>
        <p className='max-w-130 text-muted text-sm leading-[1.8] mb-8'>{about}</p>
        <div className='flex gap-4 flex-wrap'>
          <ActionButton
            href={resumeUrl}
            text='./view_resume'
            type='highlighted'
          />
          <ActionButton
            href='#contact'
            text='./get_in_touch'
            type='dimmed'
          />
        </div>
      </div>
      <div className='z-2'>
        <TerminalLoader />
      </div>
    </section>
  );
};
