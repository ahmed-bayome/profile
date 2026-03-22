import { notFound } from 'next/navigation';
import { ProjectDetail } from '@/components/ProjectDetail';
import { Footer } from '@/components/Footer';
import { get } from '@/utils/api';
import { API_ENDPOINTS } from '@/constants/api';
import { GetProjectsResponse } from '@/types/api/projects';
import { toCamelCase } from '@/utils/objects';
import { getProjects } from '@/components/Projects';

const ProjectPage = async ({ params }: { params: Promise<{ slug: string; }>; }) => {
  const { slug } = await params;
  const projects = await getProjects();
  const camelCaseProjects = toCamelCase(projects);
  const project = camelCaseProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div>
      <ProjectDetail project={project} />
      <Footer />
    </div>
  );
};

export default ProjectPage;
