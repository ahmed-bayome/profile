import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const runtime = 'nodejs';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

const Image = async () => {
  const [fontRegular, fontBold, fontExtraBold] = await Promise.all([
    readFile(join(process.cwd(), 'public/fonts/JetBrainsMono-Regular.ttf')),
    readFile(join(process.cwd(), 'public/fonts/JetBrainsMono-Bold.ttf')),
    readFile(join(process.cwd(), 'public/fonts/JetBrainsMono-ExtraBold.ttf')),
  ]);

  const title = 'Ahmed Bayome';
  const subtitle = 'Software Developer';
  const description = 'Explore the projects, skills, and contact information of Ahmed Bayome, a passionate developer building modern web experiences.';

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

        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(to right, #4ade80, transparent)',
            display: 'flex',
          }}
        />

        {/* Glow center */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '80px',
            width: '100%',
            height: '100%',
            position: 'relative',
            textAlign: 'center',
          }}
        >
          {/* Tagline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#4ade80', fontSize: 18, marginBottom: 24 }}>
            <span style={{ color: '#666' }}>//</span>
            <span>PORTFOLIO_V2</span>
            <span style={{ color: '#666' }}>.EXE</span>
          </div>

          {/* Title */}
          <span
            style={{
              fontSize: 84,
              fontWeight: 800,
              color: '#e2e2e2',
              lineHeight: 1,
              letterSpacing: '-4px',
              marginBottom: 16,
            }}
          >
            {title}
          </span>

          {/* Subtitle */}
          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#4ade80',
              marginBottom: 32,
              letterSpacing: '-1px',
            }}
          >
            {subtitle}
          </span>

          {/* Description */}
          <span
            style={{
              fontSize: 20,
              color: '#8a96a3',
              fontWeight: 400,
              maxWidth: 800,
              lineHeight: 1.6,
            }}
          >
            {description}
          </span>

          {/* Bottom details */}
          <div
            style={{
              position: 'absolute',
              bottom: 56,
              left: 80,
              right: 80,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 'calc(100% - 160px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14 }}>
              <span style={{ color: '#666' }}>URL:</span>
              <span style={{ color: '#e2e2e2' }}>ahmed-bayome.dev</span>
            </div>
            <div
              style={{
                width: 48,
                height: 48,
                background: '#4ade80',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
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
