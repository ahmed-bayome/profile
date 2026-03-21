import { ParticleBackground } from '@/components/ParticleBackground';
import { ActionButton } from './ActionButton';
import { TerminalLoader } from '@/components/TerminalLoader';

export const Hero = () => (
  <section className='container-x section-y relative responsive gap-10 justify-between overflow-hidden border-b border-border'>
    {/* Canvas — z-index 0 */}
    <ParticleBackground />
    {/* Text content — z-index 1 */}
    <div className='relative z-1 max-w-2xl'>
      <h1 className='font-mono font-extrabold leading-none mb-6 text-text text-hero'>
        Hello, I am
        <br />
        <span className='text-green'>Ahmed Bayome</span>
      </h1>
      <p className='max-w-130 text-muted text-sm leading-[1.8] mb-8'>
        Software Developer with 2+ years of experience delivering production applications from UI
        to API. Shipped a live mobile app to the App Store and Google Play, and a bilingual SSR
        web platform. Frontend-strong with solid backend exposure across the full request lifecycle.
      </p>

      <div className='flex gap-4 flex-wrap'>
        <ActionButton
          href='#'
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
