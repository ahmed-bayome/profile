import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { supabase } from '@/lib/supabase';

export const runtime = 'nodejs';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

const Image = async ({ params }: { params: Promise<{ slug: string; }>; }) => {
  const { slug } = await params;

  const [blog, fontRegular, fontBold, fontExtraBold] = await Promise.all([
    supabase.getBySlug('blogs', slug).catch(() => null),
    readFile(join(process.cwd(), 'public/fonts/JetBrainsMono-Regular.ttf')),
    readFile(join(process.cwd(), 'public/fonts/JetBrainsMono-Bold.ttf')),
    readFile(join(process.cwd(), 'public/fonts/JetBrainsMono-ExtraBold.ttf')),
  ]);

  const title = blog?.title ?? 'Blog Post';
  const description = blog?.description ?? 'A technical write-up by Ahmed Bayome.';
  const tags: string[] = blog?.tags ?? [];
  const date = blog?.createdAt
    ? new Date(blog.createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : '';

  const shortDesc = description.length > 110 ? description.slice(0, 110) + '...' : description;
  const titleFontSize = title.length > 50 ? 40 : title.length > 35 ? 48 : 58;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#111111',
          fontFamily: 'JetBrainsMono',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot-grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, #222 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            display: 'flex',
            opacity: 0.7,
          }}
        />

        {/* Glow — top-left */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -60,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(74,222,128,0.10) 0%, transparent 65%)',
            display: 'flex',
          }}
        />

        {/* Glow — bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            right: 200,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(74,222,128,0.05) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'linear-gradient(to right, transparent, #4ade80 20%, #4ade80 60%, transparent)',
            display: 'flex',
          }}
        />

        {/* ── Right panel ── */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 264,
            borderLeft: '1px solid #1c1c1c',
            background: '#0d0d0d',
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 24px',
          }}
        >
          {/* Blog label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 28,
              paddingBottom: 18,
              borderBottom: '1px solid #1c1c1c',
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'flex' }} />
            <span style={{ fontSize: 10, color: '#3a3a3a', letterSpacing: 2 }}>BLOG_POST</span>
          </div>

          {/* Tags list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {tags.length > 0
              ? tags.slice(0, 5).map((tag, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '10px 14px',
                    background: '#131313',
                    border: '1px solid #1c1c1c',
                    opacity: 1 - i * 0.14,
                  }}
                >
                  <span style={{ fontSize: 10, color: '#4ade80', opacity: 0.6 }}>#</span>
                  <span style={{ fontSize: 12, color: '#b0bec5' }}>{tag}</span>
                </div>
              ))
              : [0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    height: 38,
                    background: '#131313',
                    border: '1px solid #1c1c1c',
                    opacity: 0.3 - i * 0.08,
                  }}
                />
              ))}
          </div>

          {/* Date badge */}
          {date && (
            <div
              style={{
                marginTop: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                paddingTop: 20,
                borderTop: '1px solid #1c1c1c',
              }}
            >
              <span style={{ fontSize: 10, color: '#2a2a2a', letterSpacing: 1 }}>PUBLISHED</span>
              <span style={{ fontSize: 11, color: '#4ade80' }}>{date}</span>
            </div>
          )}

          {/* AB badge */}
          <div
            style={{
              marginTop: date ? 16 : 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              paddingTop: 16,
              borderTop: '1px solid #1c1c1c',
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                background: '#4ade80',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                fontWeight: 800,
                color: '#111',
                flexShrink: 0,
              }}
            >
              AB
            </div>
            <span style={{ fontSize: 10, color: '#3a3a3a' }}>ahmed-bayome.dev</span>
          </div>
        </div>

        {/* ── Main content ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '48px 52px 48px 56px',
            width: 936,
            position: 'relative',
          }}
        >
          {/* Top breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: '#4ade80', letterSpacing: 1 }}>~/blog</span>
              <span style={{ fontSize: 11, color: '#2a2a2a', margin: '0 8px' }}>/</span>
              <span
                style={{
                  fontSize: 11,
                  color: '#444',
                  maxWidth: 300,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >
                {slug}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 10, color: '#2a2a2a', letterSpacing: 2 }}>READ_TIME</span>
              <span style={{ fontSize: 10, color: '#444' }}>~5 min</span>
            </div>
          </div>

          {/* Center content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Comment-style prefix */}
            <span style={{ fontSize: 13, color: '#2e4a3a', letterSpacing: 1 }}>
              // write-up
            </span>

            {/* Title */}
            <div
              style={{
                fontSize: titleFontSize,
                fontWeight: 800,
                color: '#eaeaea',
                lineHeight: 1.08,
                letterSpacing: '-1px',
                maxWidth: 800,
              }}
            >
              {title}
            </div>

            {/* Green divider */}
            <div style={{ width: 48, height: 2, background: '#4ade80', display: 'flex' }} />

            {/* Description */}
            <div
              style={{
                fontSize: 16,
                color: '#5a6a75',
                fontWeight: 400,
                maxWidth: 680,
                lineHeight: 1.65,
              }}
            >
              {shortDesc}
            </div>
          </div>

          {/* Bottom CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 22px',
                background: '#4ade80',
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 800, color: '#111', letterSpacing: 2 }}>
                READ_POST
              </span>
              <span style={{ fontSize: 14, color: '#111', fontWeight: 800 }}>→</span>
            </div>
            <span style={{ fontSize: 11, color: '#2a2a2a' }}>
              ahmed-bayome.dev/blog/{slug}
            </span>
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