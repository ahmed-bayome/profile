type Hero = {
  id: number;
  hero_name: string;
  resume_url: string;
  about: string;
};

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

type Contact = {
  id: number;
  icon: string;
  label: string;
  url: string;
};

type Blog = {
  id: number;
  slug: string;
  title: string;
  description: string;
  created_at: string;
  content: string;
};

export type TableTypes = {
  projects: Project[];
  blogs: Blog[];
  hero: Hero[];
  contacts: Contact[];
};

export type TablesWithSlug = {
  [K in keyof TableTypes]: TableTypes[K][number] extends { slug: string; } ? K : never;
}[keyof TableTypes];
