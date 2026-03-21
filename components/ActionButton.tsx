export const ActionButton = ({
  href,
  text,
  type = 'dimmed'
}: {
  href: string;
  text: string;
  type?: 'dimmed' | 'highlighted';
}) => {
  const types = {
    dimmed: 'bg-transparent border border-border text-muted transition-all hover:border-green hover:text-green',
    highlighted: 'bg-green text-on-green transition-colors hover:bg-green-soft'
  };
  return (
    <a
      href={href}
      className={`${types[type] ?? types.dimmed} px-6 py-2.5 font-mono text-xs font-bold`}
    >
      {text}
    </a>
  );
};
