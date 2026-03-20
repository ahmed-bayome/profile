import Link from 'next/link';
import { ParticleBackground } from '@/components/ParticleBackground';

export const Hero = () => (
  <section className='container-x relative flex items-center min-h-[70vh] overflow-hidden border-b border-border'>
    {/* Canvas — z-index 0 */}
    <ParticleBackground />

    {/* Status badge — z-index 1 */}
    <div className='absolute right-12 top-20 border border-border bg-bg px-5 py-3 text-2xs text-muted z-1'>
      <span className='inline-block w-1.5 h-1.5 rounded-full bg-green mr-2 animate-[pulse_2s_ease_infinite]' />
      open to work
    </div>

    {/* Text content — z-index 1 */}
    <div className='relative z-1 max-w-2xl'>
      <div className='text-muted text-xs mb-2 font-mono'>
        {'// hello world'}
      </div>

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
        <Link
          href='#'
          className='px-6 py-2.5 font-mono text-xs bg-green text-on-green font-bold no-underline transition-colors hover:bg-green-soft'
        >
          ./view_resume
        </Link>
        <Link
          href='#contact'
          className='px-6 py-2.5 font-mono text-xs bg-transparent border border-border text-muted no-underline transition-all hover:border-green hover:text-green'
        >
          ./get_in_touch
        </Link>
      </div>
    </div>
  </section>
);
