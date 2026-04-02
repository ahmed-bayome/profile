import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { supabaseProvider } from '@/lib/supabase';

export const runtime = 'nodejs';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

const Image = async ({ params }: { params: Promise<{ slug: string; }>; }) => {
  const { slug } = await params;

  const [project, fontRegular, fontBold, fontExtraBold] = await Promise.all([
    supabaseProvider.getBySlug('projects', slug).catch(() => null),
    readFile(join(process.cwd(), 'public/fonts/JetBrainsMono-Regular.ttf')),
    readFile(join(process.cwd(), 'public/fonts/JetBrainsMono-Bold.ttf')),
    readFile(join(process.cwd(), 'public/fonts/JetBrainsMono-ExtraBold.ttf')),
  ]);

  const title = project?.title ?? 'Project';
  const description = project?.description ?? 'A project by Ahmed Bayome.';
  const tags: string[] = project?.tags ?? [];
  const stack: { name: string; icon: string; }[] = project?.stack ?? [];

  const shortDesc = description.length > 100 ? description.slice(0, 100) + '...' : description;
  const titleFontSize = title.length > 40 ? 44 : title.length > 25 ? 52 : 62;
  const stackItems = stack.slice(0, 4);

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
        {/* Dot-grid background */}
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

        {/* Green radial glow — bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(74,222,128,0.11) 0%, transparent 65%)',
            display: 'flex',
          }}
        />

        {/* Dim glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -60,
            right: 200,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(74,222,128,0.05) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Left accent strip */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 3,
            background: 'linear-gradient(to bottom, transparent, #4ade80 30%, #4ade80 70%, transparent)',
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
          {/* Panel header */}
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
            <span style={{ fontSize: 10, color: '#3a3a3a', letterSpacing: 2 }}>TECH_STACK</span>
          </div>

          {/* Stack list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {stackItems.length > 0
              ? stackItems.map((item, i) => (
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
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      background: '#4ade80',
                      opacity: 0.5,
                      display: 'flex',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 12, color: '#b0bec5', fontWeight: 400 }}>
                    {item.name}
                  </span>
                </div>
              ))
              : /* Placeholder rows when no stack */
              [0, 1, 2].map((i) => (
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

          {/* AB badge at bottom */}
          <div
            style={{
              marginTop: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              paddingTop: 20,
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
              <span style={{ fontSize: 11, color: '#4ade80', letterSpacing: 1 }}>~/projects</span>
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
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#4ade80',
                  display: 'flex',
                }}
              />
              <span style={{ fontSize: 10, color: '#4ade80', letterSpacing: 2 }}>LIVE</span>
            </div>
          </div>

          {/* Center: tags + title + divider + desc */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {tags.length > 0 && (
              <div style={{ display: 'flex', gap: 8 }}>
                {tags.slice(0, 3).map((tag) => (
                  <div
                    key={tag}
                    style={{
                      display: 'flex',
                      padding: '4px 14px',
                      border: '1px solid #222',
                      fontSize: 11,
                      color: '#444',
                      letterSpacing: 1,
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}

            <div
              style={{
                fontSize: titleFontSize,
                fontWeight: 800,
                color: '#eaeaea',
                lineHeight: 1.06,
                letterSpacing: '-1px',
                maxWidth: 800,
              }}
            >
              {title}
            </div>

            <div style={{ width: 48, height: 2, background: '#4ade80', display: 'flex' }} />

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
                VIEW_PROJECT
              </span>
              <span style={{ fontSize: 14, color: '#111', fontWeight: 800 }}>→</span>
            </div>
            <span style={{ fontSize: 11, color: '#2a2a2a' }}>
              ahmed-bayome.dev/projects/{slug}
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