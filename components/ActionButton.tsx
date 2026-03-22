export const ActionButton = ({
  href,
  text,
  type = 'dimmed',
  icon,
  target
}: {
  href: string;
  text: string;
  type?: 'dimmed' | 'highlighted';
  icon?: string;
  target?: 'blank' | 'self';
}) => {
  const types = {
    dimmed: 'bg-transparent border border-border text-muted transition-all hover:border-green hover:text-green',
    highlighted: 'bg-green text-on-green transition-colors hover:bg-green-soft'
  };
  return (
    <a
      href={href}
      target={target}
      className={`${types[type] ?? types.dimmed} flex px-6 py-2.5 font-mono text-xs font-bold`}
    >
      {icon && <img src={icon} alt={text} className='w-4 h-4 mr-2' />}
      {text}
    </a>
  );
};
