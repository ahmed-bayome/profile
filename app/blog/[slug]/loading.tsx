const Loading = () => (
  <div className='animate-pulse'>
    <div className='border-b border-border container-x'>
      <div className='py-10'>
        {/* Date */}
        <div className='w-32 h-3 bg-green/20 rounded-sm mb-4 font-mono' />
        {/* Title */}
        <div className='w-3/4 h-12 text-title bg-border/80 rounded-sm mb-4' />
        <div className='w-1/2 h-12 text-title bg-border/80 rounded-sm mb-4' />
        {/* Description */}
        <div className='space-y-2 max-w-2xl'>
          <div className='w-full h-4 bg-surface-2/70 rounded-sm' />
          <div className='w-[90%] h-4 bg-surface-2/70 rounded-sm' />
          <div className='w-[80%] h-4 bg-surface-2/70 rounded-sm' />
        </div>
      </div>
    </div>

    <div className='py-12 max-w-4xl mx-auto container-x'>
      {/* Content blocks */}
      <div className='space-y-4'>
        <div className='w-1/2 h-8 text-lg bg-border/80 rounded-sm mb-8' />
        <div className='space-y-2 mb-4'>
          <div className='w-full h-3 bg-surface-2/70 rounded-sm' />
          <div className='w-[95%] h-3 bg-surface-2/70 rounded-sm' />
          <div className='w-[88%] h-3 bg-surface-2/70 rounded-sm' />
          <div className='w-[92%] h-3 bg-surface-2/70 rounded-sm' />
        </div>
        {/* Image skeleton */}
        <div className='w-full h-64 bg-surface-2/40 rounded-xl my-8 border border-border' />
        
        <div className='w-2/5 h-6 bg-border/60 rounded-sm mt-4' />
        <div className='space-y-2 mb-4'>
          <div className='w-full h-3 bg-surface-2/70 rounded-sm' />
          <div className='w-[85%] h-3 bg-surface-2/70 rounded-sm' />
          <div className='w-[90%] h-3 bg-surface-2/70 rounded-sm' />
        </div>
      </div>
    </div>
  </div>
);

export default Loading;
