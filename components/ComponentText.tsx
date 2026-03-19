export const ComponentText = ({ text }: { text: string; }) => {
  return (
    <div className='hover:text-blue-1 '>
      <span className='text-gray-1'>{'<'}</span>
      <span className='text-green-2'>{text}</span>
      <span className='text-gray-1'>{' />'}</span>
    </div>
  );
};