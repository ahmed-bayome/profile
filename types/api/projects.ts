export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  links: {
    icon: string | null;
    label: string;
    url: string;
  }[];
  stack: {
    name: string;
    icon: string;
  }[];
  challenges: {
    title: string;
    description: string;
  }[];
};

export type GetProjectsResponse = Project[];
