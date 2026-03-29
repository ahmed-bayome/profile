import { notFound } from 'next/navigation';
import { ProjectDetail } from '@/components/ProjectDetail';
import { Footer } from '@/components/Footer';
import { toCamelCase } from '@/utils/objects';
import { getProjects } from '@/lib/projects';

const ProjectPage = async ({ params }: { params: Promise<{ slug: string; }>; }) => {
  const { slug } = await params;
  const data = await getProjects();
  const projects = toCamelCase(data);
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <div>
      <ProjectDetail project={project} />
      <Footer />
    </div>
  );
};

export default ProjectPage;
