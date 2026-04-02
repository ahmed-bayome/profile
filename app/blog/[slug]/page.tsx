import { supabaseProvider } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import { formatDate } from '@/utils/text';
import type { Components } from 'react-markdown';
import Markdown from 'react-markdown';
import { Metadata } from 'next';
import { doMetadata } from '@/utils/seo';

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string; }>; }): Promise<Metadata> => {
  const { slug } = await params;
  const blog = await supabaseProvider.getBySlug('blogs', slug);
  if (!blog) notFound();
  const { title, description } = blog;
  return doMetadata({
    title,
    description
  });
};

const markdownComponents: Components = {
  hr: () => <hr className='border-border my-8' />,
  h1: ({ children }) => <h1 className='text-lg text-white font-bold mb-8'>{children}</h1>,
  p: ({ children }) => <p className='text-body text-sm mb-4'>{children}</p>,
  strong: ({ children }) => <strong className='font-bold '>{children}</strong>,
  a: ({ href, children }) => <a href={href} target='blank' className='text-green underline'>{children}</a>,
  img: ({ src, alt }) => (
    <div className='bg-surface-2 border border-border rounded-xl overflow-hidden my-8'>
      <div className='flex items-center gap-1.5 px-3 py-2 bg-bg-2 border-b border-border'>
        <div className='w-2.5 h-2.5 rounded-full bg-[#ff5f57]' />
        <div className='w-2.5 h-2.5 rounded-full bg-[#febc2e]' />
        <div className='w-2.5 h-2.5 rounded-full bg-[#28c840]' />
        <span className='text-2xs text-muted ml-2 tracking-wide line-clamp-1'>{alt}</span>
      </div>
      <img src={src} alt={alt} className='h-full w-full' />
    </div>
  )
};

const BlogPage = async ({ params }: { params: Promise<{ slug: string; }>; }) => {
  const { slug } = await params;
  const blog = await supabaseProvider.getBySlug('blogs', slug);
  if (!blog) notFound();
  const { title, description, tags, createdAt, content } = blog;
  return (
    <main>
      <div className='border-b border-border container-x'>
        <div className='py-10'>
          <p className='text-green text-2xs mb-4 font-mono'>// {formatDate(createdAt)}</p>
          <h1 className='font-mono font-extrabold text-title text-text mb-4 leading-tight'>{title}</h1>
          <p className='text-body text-sm max-w-2xl leading-relaxed mb-6'>{description}</p>
          <div className='flex gap-2 flex-wrap'>
            {tags.map((tag) => (
              <span key={tag} className='border border-border text-muted px-2.5 py-1 text-2xs font-mono'>{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className='py-12 max-w-4xl mx-auto container-x'>
        <Markdown
          children={content}
          components={markdownComponents}
        />
      </div>
    </main>
  );
};

export default BlogPage;
