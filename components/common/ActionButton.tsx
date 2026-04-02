import { AnchorHTMLAttributes } from 'react';

export const ActionButton = ({
  text,
  type,
  icon,
  ...props
}: {
  text: any;
  type?: 'secondary';
  icon?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>) => {
  const isPrimary = !type || type !== 'secondary';

  return (
    <a
      {...props}
      className={
        [
          // base
          'group relative inline-flex items-center gap-2.5',
          'px-6 py-2.5 font-mono text-xs font-bold tracking-widest uppercase',
          'transition-all duration-300 no-underline select-none',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/60',
          'overflow-hidden',

          isPrimary
            ? [
              // primary — filled with glow
              'bg-green/10 text-green border border-green/70',
              'hover:bg-green hover:text-black hover:border-green',
              'hover:[box-shadow:var(--glow-hover)]',
              '[box-shadow:var(--glow)]',
            ].join(' ')
            : [
              // secondary — ghost with dashed border
              'bg-transparent text-muted border border-dashed border-border',
              'hover:text-green hover:border-green/60 hover:bg-green/5',
            ].join(' '),
        ].join(' ')
      }
    >
      {/* Corner brackets — primary only */}
      {
        isPrimary && (
          <>
            <span className='pointer-events-none absolute -top-px -left-px w-2 h-2 border-t border-l border-green opacity-60 group-hover:opacity-100 group-hover:w-3 group-hover:h-3 transition-all duration-300' />
            <span className='pointer-events-none absolute -bottom-px -right-px w-2 h-2 border-b border-r border-green opacity-60 group-hover:opacity-100 group-hover:w-3 group-hover:h-3 transition-all duration-300' />
          </>
        )
      }

      {/* Scan-line sweep on hover */}
      {
        isPrimary && (
          <span
            className='pointer-events-none absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out'
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, #4ade8022 40%, #4ade8044 50%, #4ade8022 60%, transparent 100%)',
            }}
          />
        )
      }

      {/* Blinking cursor prefix */}




      <span className='relative z-10'>{text}</span>
    </a >
  );
};