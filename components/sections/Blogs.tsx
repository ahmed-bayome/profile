import Link from 'next/link';
import { SectionHeader } from '../common/SectionHeader';
import { supabase } from '@/lib/supabase';
import { formatDate } from '@/utils/text';
import { ExternalLink } from 'lucide-react';

export const Blogs = async () => {
  const blogs = await supabase.get('blogs');
  return (
    <section id='blogs' className='container-x section-y border-b border-border scroll-mt-section'>
      <SectionHeader title='blogs' subtitle='thoughts & write-ups' />
      <div className='grid gap-5'>
        {blogs.map(({ id, slug, title, description, createdAt }) => (
          <Link
            key={id}
            href={`/blog/${slug}`}
          >
            <div className='bg-surface border border-border p-8 transition-colors hover:bg-hover cursor-pointer'>
              <p className='text-green text-2xs mb-3'>// {formatDate(createdAt)}</p>
              <p className='font-mono text-md font-bold mb-2 line-clamp-1'>{title}</p>
              <p className='line-clamp-2 max-w-md text-muted text-xs mb-4 leading-relaxed'>{description}</p>
              <p className='text-green text-2xs self-start mt-10 flex items-center gap-2'><ExternalLink className="w-4 h-4" />read post</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
