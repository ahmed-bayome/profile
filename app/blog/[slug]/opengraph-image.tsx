import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { supabaseProvider } from '@/lib/supabase';

export const runtime = 'nodejs';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

const Image = async ({ params }: { params: Promise<{ slug: string }>; }) => {
  const { slug } = await params;

  const [blog, fontRegular, fontBold, fontExtraBold] = await Promise.all([
    supabaseProvider.getBySlug('blogs', slug).catch(() => null),
    readFile(join(process.cwd(), 'public/fonts/JetBrainsMono-Regular.ttf')),
    readFile(join(process.cwd(), 'public/fonts/JetBrainsMono-Bold.ttf')),
    readFile(join(process.cwd(), 'public/fonts/JetBrainsMono-ExtraBold.ttf')),
  ]);

  const title = blog?.title ?? 'Blog Post';
  const description = blog?.description ?? 'A technical write-up on modern web development.';
  const tags: string[] = blog?.tags ?? [];
  const date = blog?.createdAt
    ? new Date(blog.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  const shortDesc = description.length > 120 ? description.slice(0, 120) + '...' : description;
  const fontSize = title.length > 50 ? 44 : 56;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#1a1a1a',
          fontFamily: 'JetBrainsMono',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(74,222,128,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            display: 'flex',
          }}
        />

        {/* Left accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            background: 'linear-gradient(to bottom, #4ade80, transparent)',
            display: 'flex',
          }}
        />

        {/* Glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(74,222,128,0.13) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '56px 80px 56px 88px',
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Top row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14 }}>
              <span style={{ color: '#666' }}>//</span>
              <span style={{ color: '#4ade80' }}>ahmed-bayome.dev</span>
              <span style={{ color: '#2a2a2a' }}>/</span>
              <span style={{ color: '#666' }}>blog</span>
            </div>
            {date ? (
              <span style={{ color: '#666', fontSize: 13 }}>{date}</span>
            ) : (
              <span style={{ color: 'transparent', fontSize: 13 }}>-</span>
            )}
          </div>

          {/* Middle content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Tags row */}
            {tags.length > 0 && (
              <div style={{ display: 'flex', gap: 8 }}>
                {tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      border: '1px solid #2a2a2a',
                      color: '#666',
                      fontSize: 12,
                      padding: '3px 12px',
                      display: 'flex',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <span
              style={{
                fontSize,
                fontWeight: 800,
                color: '#e2e2e2',
                lineHeight: 1.1,
                letterSpacing: '-1.5px',
                maxWidth: 900,
              }}
            >
              {title}
            </span>

            {/* Description */}
            <span
              style={{
                fontSize: 17,
                color: '#8a96a3',
                fontWeight: 400,
                maxWidth: 700,
                lineHeight: 1.5,
              }}
            >
              {shortDesc}
            </span>
          </div>

          {/* Bottom row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                background: '#4ade80',
                color: '#111',
                fontWeight: 800,
                fontSize: 13,
                padding: '5px 14px',
                display: 'flex',
              }}
            >
              READ_POST
            </span>
            <div
              style={{
                width: 40,
                height: 40,
                background: '#4ade80',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                fontWeight: 800,
                color: '#111',
              }}
            >
              AB
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'JetBrainsMono', data: fontRegular, weight: 400, style: 'normal' },
        { name: 'JetBrainsMono', data: fontBold, weight: 700, style: 'normal' },
        { name: 'JetBrainsMono', data: fontExtraBold, weight: 800, style: 'normal' },
      ],
    }
  );
};

export default Image;
