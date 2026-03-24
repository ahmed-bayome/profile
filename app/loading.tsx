const Loading = () => {
  return (
    <div className=' bg-bg flex flex-col container-x section-y gap-8 animate-pulse pt-20 overflow-hidden'>
      {/* ── Hero Skeleton ── */}
      <div className='flex flex-col lg:flex-row justify-between lg:items-center gap-10 lg:gap-0 mt-10 md:mt-16 w-full'>
        <div className='max-w-xl w-full'>
          {/* ComponentText wrapper (Green highlight) */}
          <div className='w-40 h-5 bg-green/20 rounded-sm mb-5'></div>

          {/* Title */}
          <div className='w-full max-w-[400px] h-12 lg:h-16 bg-border/80 rounded-sm mb-6'></div>

          {/* Subtitle */}
          <div className='w-3/4 h-8 bg-surface-2 rounded-sm mb-8'></div>

          {/* Description lines */}
          <div className='space-y-3 mb-10 w-full'>
            <div className='w-full h-4 bg-surface-2/70 rounded-sm'></div>
            <div className='w-[90%] h-4 bg-surface-2/70 rounded-sm'></div>
            <div className='w-[80%] h-4 bg-surface-2/70 rounded-sm'></div>
          </div>

          {/* Buttons (Green accents) */}
          <div className='flex gap-4 mt-8 lg:mt-12'>
            <div className='w-32 h-10 bg-green/20 border border-green/30 rounded-sm'></div>
            <div className='w-32 h-10 bg-surface-2 rounded-sm'></div>
          </div>
        </div>

        {/* ── Right side / Code block or Image Skeleton ── */}
        <div className='hidden lg:block w-[400px] h-[300px] border border-border bg-surface/50 rounded-sm relative'>
          {/* Terminal header */}
          <div className='absolute top-0 left-0 right-0 h-8 border-b border-border bg-surface-2/30 flex items-center px-3 gap-1.5'>
            <div className='w-2.5 h-2.5 rounded-full bg-border'></div>
            <div className='w-2.5 h-2.5 rounded-full bg-border'></div>
            <div className='w-2.5 h-2.5 rounded-full bg-border'></div>
          </div>
          {/* Terminal lines */}
          <div className='absolute top-12 left-4 right-4 space-y-3'>
            <div className='w-1/2 h-3 bg-surface-2 rounded-sm'></div>
            <div className='w-3/4 h-3 bg-green/10 rounded-sm line-clamp-1'></div>
            <div className='w-2/3 h-3 bg-surface-2 rounded-sm'></div>
            <div className='w-1/3 h-3 bg-surface-2 rounded-sm'></div>
            <div className='w-4/5 h-3 bg-green/10 rounded-sm'></div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Loading;