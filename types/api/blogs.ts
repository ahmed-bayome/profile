// ─── Content Block Types ────────────────────────────────────────────────────
// Each blog post stores its content as a JSONB array of blocks in Supabase.
// This lets you freely mix headings, paragraphs, and images in any order.
//
// Supabase table schema (blogs):
//   id           bigint PK
//   slug         text UNIQUE NOT NULL
//   title        text NOT NULL
//   description      text
//   cover_image  text         -- URL from Supabase Storage
//   tags         text[]
//   created_at   timestamptz  DEFAULT now()
//   content      jsonb        -- array of ContentBlock[]
// ─────────────────────────────────────────────────────────────────────────────

export enum ContentTypes {
  PARAGRAPH = 'paragraph',
  HEADING = 'heading',
  IMAGE = 'image',
}

export type ParagraphBlock = {
  type: ContentTypes.PARAGRAPH | ContentTypes.HEADING;
  text: string;
};

export type ImageBlock = {
  type: ContentTypes.IMAGE;
  src: string;
  caption?: string;
};

export type ContentBlock = ParagraphBlock | ImageBlock;

export type Blog = {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  created_at: string;
  content: ContentBlock[];
};

export type GetBlogsResponse = Blog[];
