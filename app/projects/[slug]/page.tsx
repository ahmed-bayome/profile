import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/data/projects';
import { ProjectDetail } from '@/components/ProjectDetail';
import { Footer } from '@/components/Footer';

export const generateStaticParams = () => {
  return projects.map((p) => ({ slug: p.slug }));
};

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string; }>; }) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title.replace('\n', ' ')} — Ahmed Bayome`,
    description: project.subtitle,
  };
};

const ProjectPage = async ({ params }: { params: Promise<{ slug: string; }>; }) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div>
      <ProjectDetail project={project} />
      <Footer />
    </div>
  );
};

export default ProjectPage;
