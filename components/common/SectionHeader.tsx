export const SectionHeader = ({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) => (
  <div className='flex items-center gap-4 mb-12'>
    <span className='font-mono text-3xl md:text-4xl font-bold tracking-tight'>
      <span className='text-green'>#</span>
      {title}
    </span>
    <div className='flex-1 h-px bg-border' />
    <span className='text-muted text-xs font-mono lowercase tracking-widest'>{subtitle}</span>
  </div>
);
