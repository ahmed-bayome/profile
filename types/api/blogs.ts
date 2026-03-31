export type Blog = {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  created_at: string;
  content: string;
};

export type GetBlogsResponse = Blog[];

