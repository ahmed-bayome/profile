import Link from 'next/link';
import { ParticleBackground } from '@/components/ParticleBackground';

export const Hero = () => (
  <section className='relative flex items-center min-h-[70vh] overflow-hidden border-b border-border px-12'>
    {/* Canvas — z-index 0 */}
    <ParticleBackground />

    {/* Status badge — z-index 1 */}
    <div className='absolute right-12 top-20 border border-border bg-bg px-5 py-3 text-[11px] text-muted z-1'>
      <span className='inline-block w-1.5 h-1.5 rounded-full bg-green mr-2 animate-[pulse_2s_ease_infinite]' />
      open to work
    </div>

    {/* Text content — z-index 1 */}
    <div className='relative z-1 max-w-2xl'>
      <div className='text-muted text-[12px] mb-2 font-mono'>
        {'// hello world'}
      </div>

      <h1
        className='font-mono font-extrabold leading-none mb-6 text-text'
        style={{ fontSize: 'clamp(48px, 8vw, 88px)' }}
      >
        Hello, I am
        <br />
        <span className='text-green'>Ahmed Bayome</span>
      </h1>

      <p className='max-w-[520px] text-muted text-[13px] leading-[1.8] mb-8'>
        Software Developer with 2+ years of experience delivering production applications from UI
        to API. Shipped a live mobile app to the App Store and Google Play, and a bilingual SSR
        web platform. Frontend-strong with solid backend exposure across the full request lifecycle.
      </p>

      <div className='flex gap-4 flex-wrap'>
        <Link
          href='#'
          className='px-6 py-2.5 font-mono text-[12px] bg-green text-[#111] font-bold no-underline transition-colors hover:bg-green-3'
        >
          ./view_resume
        </Link>
        <Link
          href='#contact'
          className='px-6 py-2.5 font-mono text-[12px] bg-transparent border border-border text-muted no-underline transition-all hover:border-green hover:text-green'
        >
          ./get_in_touch
        </Link>
      </div>
    </div>
  </section>
);
