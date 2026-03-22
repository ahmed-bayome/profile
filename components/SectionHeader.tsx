export const SectionHeader = ({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) => (
  <div className='flex items-center gap-4 mb-10'>
    <span className='font-mono text-lg font-bold'>
      <span className='text-green'>./</span>
      {title}
    </span>
    <div className='flex-1 h-px bg-border' />
    <span className='text-muted text-2xs'>{subtitle}</span>
  </div>
);
