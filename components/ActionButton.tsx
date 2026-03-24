export const ActionButton = ({
  href,
  text,
  icon,
  target
}: {
  href: string;
  text: any;
  icon?: string;
  target?: 'blank' | 'self';
}) => {
  return (
    <a
      href={href}
      target={target}
      className='bg-transparent hover:bg-green border transition-all border-green text-green hover:text-black flex px-6 py-2.5 font-mono text-xs font-bold'
    >
      {icon && <img src={icon} alt={text} className='w-4 h-4 mr-2' />}
      {text}
    </a>
  );
};
