import Link from 'next/link';
import { SectionHeader } from '../common/SectionHeader';
import { supabaseProvider } from '@/lib/supabase';
import { formatDate } from '@/utils/text';

export const Blogs = async () => {
  const blogs = await supabaseProvider.get('blogs');
  return (
    <section id='blogs' className='container-x section-y border-b border-border scroll-mt-section'>
      <SectionHeader title='blogs' subtitle='thoughts & write-ups' />
      <div className='grid gap-px bg-border'>
        {blogs.map(({ id, slug, title, description, tags, createdAt }) => (
          <Link
            key={id}
            href={`/blog/${slug}`}
          >
            <div className='bg-bg p-8 transition-colors hover:bg-hover cursor-pointer'>
              <div>
                <p className='text-green text-2xs mb-3'>// {formatDate(createdAt)}</p>
                <p className='font-mono text-md font-bold mb-2 line-clamp-1'>{title}</p>
                <p className='line-clamp-2 max-w-md text-muted text-xs mb-4 leading-relaxed'>{description}</p>
                <div className='flex gap-2 flex-wrap'>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className='border border-border text-muted px-2.5 py-1 text-2xs'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className='text-green text-2xs self-start mt-10'>→ read post</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
