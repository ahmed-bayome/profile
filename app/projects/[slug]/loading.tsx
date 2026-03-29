const Loading = () => (
  <div className='animate-pulse'>
    {/* Detail Hero */}
    <div className='container-x section-y responsive justify-between gap-8 border-b border-border'>
      <div className='max-w-240 w-full'>
        <div className='w-[80vw] max-w-150 h-10 lg:h-16 bg-border/80 rounded-sm mb-5'></div>
        <div className='w-[60vw] max-w-100 h-10 lg:h-16 bg-border/80 rounded-sm mb-5'></div>
        <div className='space-y-3 max-w-140 mt-5'>
          <div className='w-full h-4 bg-surface-2/70 rounded-sm'></div>
          <div className='w-[90%] h-4 bg-surface-2/70 rounded-sm'></div>
          <div className='w-[95%] h-4 bg-surface-2/70 rounded-sm'></div>
          <div className='w-[80%] h-4 bg-surface-2/70 rounded-sm'></div>
          <div className='w-[80%] h-4 bg-surface-2/70 rounded-sm'></div>
          <div className='w-[70%] h-4 bg-surface-2/70 rounded-sm'></div>
        </div>
      </div>
      <div className='flex gap-3 self-start mt-6 lg:mt-0'>
        <div className='w-28 h-8 border border-border rounded-sm bg-surface-2/30'></div>
        <div className='w-28 h-8 border border-border rounded-sm bg-surface-2/30'></div>
      </div>
    </div>
    {/* Images Preview */}
    <div className='container-x section-y border-b border-border'>
      <div className='w-32 h-3 bg-green/20 rounded-sm mb-6'></div>
      <div className='flex flex-wrap gap-4'>
        {[1, 2, 3].map((i) => (
          <div key={i} className='w-80 h-60   bg-surface-2/50 rounded-sm shrink-0 border border-border'></div>
        ))}
      </div>
    </div>
  </div>
);

export default Loading;
