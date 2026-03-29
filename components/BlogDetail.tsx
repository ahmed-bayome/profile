import { Blog, ContentBlock } from '@/types/api/blogs';
import { formatDate } from '@/utils/text';

const HeadingRenderer = ({ text }: { text: string; }) => {
  return (
    <h2 className={`font-mono font-bold text-lg text-text mt-10 mb-4 leading-tight`}>
      {text}
    </h2>
  );
};

const ParagraphRenderer = ({ text }: { text: string; }) => (
  <p className='text-muted text-sm leading-7 mb-5'>{text}</p>
);

const ImageRenderer = ({ src, caption }: { src: string; caption?: string; }) => (
  <figure className='my-8 border border-border'>
    {caption && (
      <figcaption className='border-t border-border px-4 py-2 text-2xs text-muted font-mono'>
        <span className='text-green mr-2'>//</span>{caption}
      </figcaption>
    )}
    <img
      src={src}
      className='w-full h-full object-contain'
    />
  </figure>
);

const renderBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case 'heading':
      return <HeadingRenderer key={index} text={block.text} />;
    case 'paragraph':
      return <ParagraphRenderer key={index} text={block.text} />;
    case 'image':
      return <ImageRenderer key={index} src={block.src} caption={block.caption} />;
    default:
      return null;
  }
};

// ─── Main Component ──────────────────────────────────────────────────────────

export const BlogDetail = ({ blog }: { blog: Blog; }) => {
  const { title, description, tags, created_at, content } = blog;

  return (
    <div className='container-x'>
      {/* Hero */}
      <div className='border-b border-border'>
        <div className='py-10'>
          <p className='text-green text-2xs mb-4 font-mono'>
            // {formatDate(created_at)}
          </p>
          <h1 className='font-mono font-extrabold text-title text-text mb-4 leading-tight'>
            {title}
          </h1>
          {description && (
            <p className='text-muted text-sm max-w-2xl leading-relaxed mb-6'>{description}</p>
          )}
          <div className='flex gap-2 flex-wrap'>
            {tags.map((tag) => (
              <span
                key={tag}
                className='border border-border text-muted px-2.5 py-1 text-2xs font-mono'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='py-12 max-w-3xl mx-auto'>
        {content.map(renderBlock)}
      </div>
    </div>
  );
};
