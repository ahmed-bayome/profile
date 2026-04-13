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
      <section className='container-x section-y text-center relative items-center overflow-hidden border-b border-border'>
        <div className='relative z-1 items-center flex flex-col justify-center'>
          <div className='h-12 bg-border animate-pulse w-72 mb-6'></div>
          <div className='max-w-2xl w-full mb-10 space-y-3 flex flex-col items-center'>
            <div className='h-4 bg-border animate-pulse w-full'></div>
            <div className='h-4 bg-border animate-pulse w-[95%]'></div>
            <div className='h-4 bg-border animate-pulse w-[80%]'></div>
          </div>
          <div className='flex gap-4 flex-wrap'>
            <div className='h-12 bg-border animate-pulse w-32'></div>
            <div className='h-12 bg-border animate-pulse w-32'></div>
          </div>
        </div>
      </section>

      {/* Projects Skeleton */}
      <section className='container-x section-y border-b border-border scroll-mt-section'>
        <SectionHeaderSkeleton />
        <div className='grid gap-5'>
          {/* Skeleton Item */}
          <div className='responsive gap-6 justify-between bg-surface border border-border p-8 shrink-0'>
            <div className='flex flex-col justify-between w-full max-w-lg'>
              <div>
                <div className='h-3 bg-border animate-pulse w-12 mb-4'></div>
                <div className='h-6 bg-border animate-pulse w-48 mb-3'></div>
                <div className='h-4 bg-border animate-pulse w-full mb-5'></div>
                <div className='flex gap-2 flex-wrap'>
                  <div className='h-6 w-16 bg-border animate-pulse'></div>
                  <div className='h-6 w-20 bg-border animate-pulse'></div>
                  <div className='h-6 w-14 bg-border animate-pulse'></div>
                </div>
              </div>
              <div className='h-4 bg-border animate-pulse w-24 mt-5'></div>
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

      {/* Blogs Skeleton */}
      <section className='container-x section-y border-b border-border scroll-mt-section'>
        <SectionHeaderSkeleton />
        <div className='grid gap-5'>
          <div className='bg-surface border border-border p-8'>
            <div className='h-3 bg-border animate-pulse w-24 mb-3'></div>
            <div className='h-6 bg-border animate-pulse w-64 mb-2'></div>
            <div className='space-y-2 mb-4 max-w-md'>
                <div className='h-4 bg-border animate-pulse w-full'></div>
                <div className='h-4 bg-border animate-pulse w-5/6'></div>
            </div>
            <div className='h-4 bg-border animate-pulse w-24 mt-10'></div>
          </div>
        </div>
      </section>

      {/* Contact Skeleton */}
      <section className='container-x section-y scroll-mt-section'>
        <SectionHeaderSkeleton />
        <div className='flex gap-4 flex-wrap'>
          <div className='h-[66px] w-[116px] border border-border bg-surface animate-pulse'></div>
          <div className='h-[66px] w-[147px] border border-border bg-surface animate-pulse'></div>
          <div className='h-[66px] w-[112px] border border-border bg-surface animate-pulse'></div>
          <div className='h-[66px] w-[130px] border border-border bg-surface animate-pulse'></div>
        </div>
      </section>
    </main>
  );
};

export default Loading;
