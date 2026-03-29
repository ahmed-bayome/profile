const SectionHeaderSkeleton = () => (
  <div className='flex items-center gap-4 mb-12'>
    <div className='h-10 w-48 bg-border animate-pulse'></div>
    <div className='flex-1 h-px bg-border' />
    <div className='h-4 w-32 bg-border animate-pulse'></div>
  </div>
);

const Loading = () => {
  return (
    <main>
      {/* Hero Skeleton */}
      <section className='container-x section-y relative responsive gap-10 justify-between overflow-hidden border-b border-border'>
        <div className='relative z-1 max-w-2xl w-full'>
          <div className='mb-6'>
            <div className='h-10 bg-border animate-pulse w-40 mb-4'></div>
            <div className='h-20 bg-border animate-pulse w-96'></div>
          </div>
          <div className='max-w-130 mb-10 space-y-3'>
            <div className='h-4 bg-border animate-pulse w-full'></div>
            <div className='h-4 bg-border animate-pulse w-11/12'></div>
            <div className='h-4 bg-border animate-pulse w-9/12'></div>
          </div>
          <div className='flex gap-4 flex-wrap'>
            <div className='h-10 bg-border animate-pulse w-32'></div>
            <div className='h-10 bg-border animate-pulse w-32'></div>
          </div>
        </div>
        <div className='z-2'>
          <div className='border border-border flex flex-col w-[300px] h-[340px] bg-surface animate-pulse'>
            <div className='h-8 border-b border-border bg-bg-2 shrink-0'></div>
            <div className='flex-1'></div>
          </div>
        </div>
      </section>

      {/* Projects Skeleton */}
      <section className='container-x section-y border-b border-border'>
        <SectionHeaderSkeleton />
        <div className='grid gap-px bg-border'>
          <div className='responsive gap-6 justify-between bg-bg p-8'>
            <div className='flex flex-col justify-between w-full max-w-lg'>
              <div>
                <div className='h-3 bg-border animate-pulse w-16 mb-4'></div>
                <div className='h-6 bg-border animate-pulse w-48 mb-3'></div>
                <div className='h-4 bg-border animate-pulse w-full mb-2'></div>
                <div className='h-4 bg-border animate-pulse w-3/4 mb-5'></div>
                <div className='flex gap-2 flex-wrap'>
                  <div className='h-6 w-16 bg-border animate-pulse'></div>
                  <div className='h-6 w-20 bg-border animate-pulse'></div>
                  <div className='h-6 w-14 bg-border animate-pulse'></div>
                </div>
              </div>
              <div className='h-3 bg-border animate-pulse w-24 mt-5'></div>
            </div>
            <div className='relative aspect-square w-60 h-60 grid grid-cols-2 grid-rows-2 gap-1 bg-border shrink-0'>
              <div className='bg-surface animate-pulse w-full h-full'></div>
              <div className='bg-surface animate-pulse w-full h-full'></div>
              <div className='bg-surface animate-pulse w-full h-full'></div>
              <div className='bg-surface animate-pulse w-full h-full'></div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Loading;
