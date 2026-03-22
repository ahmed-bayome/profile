const Loading = () => (
  <div className='container-x section-y responsive justify-between gap-8'>
    <div>
      {/* Title */}
      <div className='w-[80vw] max-w-150 h-10 lg:h-16 bg-border/80 rounded-sm mb-5'></div>
      <div className='w-[60vw] max-w-100 h-10 lg:h-16 bg-border/80 rounded-sm mb-5'></div>
      {/* Description */}
      <div className='space-y-3 max-w-140'>
        <div className='w-full h-4 bg-surface-2/70 rounded-sm'></div>
        <div className='w-[90%] h-4 bg-surface-2/70 rounded-sm'></div>
        <div className='w-[95%] h-4 bg-surface-2/70 rounded-sm'></div>
        <div className='w-[80%] h-4 bg-surface-2/70 rounded-sm'></div>
        <div className='w-[80%] h-4 bg-surface-2/70 rounded-sm'></div>
        <div className='w-[70%] h-4 bg-surface-2/70 rounded-sm'></div>
      </div>
    </div>
    {/* Image */}
    <div className='flex gap-3 self-start'>
      {/* Links / Buttons */}
      <div className='w-28 h-8 border border-border rounded-sm bg-surface-2/30'></div>
      <div className='w-28 h-8 border border-border rounded-sm bg-surface-2/30'></div>

    </div>
  </div>
);

export default Loading;
