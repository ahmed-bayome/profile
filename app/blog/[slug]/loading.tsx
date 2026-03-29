const Loading = () => (
  <div className='animate-pulse'>
    <div className='container-x py-10 border-b border-border'>
      {/* Date */}
      <div className='w-32 h-3 bg-green/20 rounded-sm mb-5' />
      {/* Title */}
      <div className='w-3/4 h-10 bg-border/80 rounded-sm mb-3' />
      <div className='w-1/2 h-10 bg-border/80 rounded-sm mb-6' />
      {/* description */}
      <div className='space-y-2 max-w-2xl mb-6'>
        <div className='w-full h-3 bg-surface-2/70 rounded-sm' />
        <div className='w-[90%] h-3 bg-surface-2/70 rounded-sm' />
        <div className='w-[80%] h-3 bg-surface-2/70 rounded-sm' />
      </div>
      {/* Tags */}
      <div className='flex gap-2'>
        <div className='w-16 h-6 border border-border rounded-sm bg-surface-2/30' />
        <div className='w-20 h-6 border border-border rounded-sm bg-surface-2/30' />
      </div>
    </div>

    <div className='container-x py-12 max-w-3xl mx-auto'>
      <div className='w-24 h-3 bg-green/20 rounded-sm mb-8' />
      {/* Content blocks */}
      <div className='space-y-4'>
        <div className='w-1/2 h-7 bg-border/80 rounded-sm' />
        <div className='space-y-2'>
          <div className='w-full h-3 bg-surface-2/70 rounded-sm' />
          <div className='w-[95%] h-3 bg-surface-2/70 rounded-sm' />
          <div className='w-[88%] h-3 bg-surface-2/70 rounded-sm' />
          <div className='w-[92%] h-3 bg-surface-2/70 rounded-sm' />
        </div>
        <div className='w-full h-52 bg-surface-2/40 rounded-sm mt-6' />
        <div className='w-2/5 h-6 bg-border/60 rounded-sm mt-4' />
        <div className='space-y-2'>
          <div className='w-full h-3 bg-surface-2/70 rounded-sm' />
          <div className='w-[85%] h-3 bg-surface-2/70 rounded-sm' />
          <div className='w-[90%] h-3 bg-surface-2/70 rounded-sm' />
        </div>
      </div>
    </div>
  </div>
);

export default Loading;
