import { getBlogs } from '@/lib/blogs';
import { Footer } from '@/components/Footer';
import { BlogDetail } from '@/components/BlogDetail';
import { notFound } from 'next/navigation';

const BlogPage = async ({ params }: { params: Promise<{ slug: string; }>; }) => {
  const blogs = await getBlogs();
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();
  return (
    <div>
      <BlogDetail blog={blog as any} />
      <Footer />
    </div>
  );
};

export default BlogPage;
