import { notFound } from 'next/navigation';
import { ProjectDetail } from '@/components/pages/ProjectDetail';
import { Footer } from '@/components/common/Footer';
import { supabase } from '@/lib/supabase';
import { Metadata } from 'next';
import { doMetadata } from '@/utils/seo';

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string; }>; }): Promise<Metadata> => {
  const { slug } = await params;
  const project = await supabase.getBySlug('projects', slug);
  if (!project) notFound();
  const { title, description } = project;
  return doMetadata({
    title,
    description
  });
};

const ProjectPage = async ({ params }: { params: Promise<{ slug: string; }>; }) => {
  const { slug } = await params;
  const project = await supabase.getBySlug('projects', slug);
  if (!project) notFound();
  return (
    <div>
      <ProjectDetail project={project} />
      <Footer />
    </div>
  );
};

export default ProjectPage;
