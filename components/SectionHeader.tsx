type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <div className='flex items-center gap-4 mb-10'>
    <span className='font-syne text-[22px] font-bold'>
      <span className='text-green'>./</span>
      {title}
    </span>
    <div className='flex-1 h-px bg-border' />
    <span className='text-muted text-[11px]'>{subtitle}</span>
  </div>
);
