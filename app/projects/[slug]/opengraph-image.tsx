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
        {/* Grid background */}
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

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(to right, #4ade80, transparent)',
            display: 'flex',
          }}
        />

        {/* Glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -60,
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(74,222,128,0.13) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Stack pills - decorative right side */}
        {stack.length > 0 && (
          <div
            style={{
              position: 'absolute',
              right: 72,
              top: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 10,
              transform: 'translateY(-50%)',
            }}
          >
            {stack.slice(0, 5).map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#1e1e1e',
                  border: '1px solid #2a2a2a',
                  padding: '10px 18px',
                  opacity: 1 - i * 0.18,
                }}
              >
                <span style={{ fontSize: 13, color: '#e2e2e2', fontWeight: 400 }}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '56px 72px',
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Top */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#4ade80', fontSize: 14 }}>
              <span style={{ color: '#666' }}>//</span>
              <span>ahmed-bayome.dev</span>
              <span style={{ color: '#2a2a2a', margin: '0 4px' }}>/</span>
              <span style={{ color: '#666' }}>projects</span>
            </div>
          </div>

          {/* Middle */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Tags */}
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
            <div
              style={{
                fontSize: title.length > 30 ? 48 : 64,
                fontWeight: 800,
                color: '#e2e2e2',
                lineHeight: 1.1,
                letterSpacing: '-1.5px',
                maxWidth: 740,
              }}
            >
              {title}
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: 17,
                color: '#8a96a3',
                fontWeight: 400,
                maxWidth: 620,
                lineHeight: 1.5,
              }}
            >
              {description.length > 110 ? description.slice(0, 110) + '...' : description}
            </div>
          </div>

          {/* Bottom */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                background: '#4ade80',
                color: '#111',
                fontSize: 13,
                fontWeight: 800,
                padding: '5px 16px',
                display: 'flex',
              }}
            >
              VIEW_PROJECT
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
