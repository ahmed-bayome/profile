export const ComponentText = ({ text }: { text: string }) => {
  return (
    <div className='hover:text-blue'>
      <span className='text-muted'>{'<'}</span>
      <span className='text-green'>{text}</span>
      <span className='text-muted'>{' />'}</span>
    </div>
  );
};