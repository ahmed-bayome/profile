import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { supabaseProvider } from '@/lib/supabase';

export const runtime = 'nodejs';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const Image = async () => {
  const [hero, fontRegular, fontBold, fontExtraBold] = await Promise.all([
    supabaseProvider.getSingle('hero').catch(() => null),
    readFile(join(process.cwd(), 'public/fonts/JetBrainsMono-Regular.ttf')),
    readFile(join(process.cwd(), 'public/fonts/JetBrainsMono-Bold.ttf')),
    readFile(join(process.cwd(), 'public/fonts/JetBrainsMono-ExtraBold.ttf')),
  ]);

  const name: string = (hero as any)?.heroName ?? 'Ahmed Bayome';

  // Split name for two-line display
  const nameParts = name.split(' ');
  const firstName = nameParts[0] ?? name;
  const lastName = nameParts.slice(1).join(' ') || '';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#0f0f0f',
          fontFamily: 'JetBrainsMono',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── Dot grid ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, #1e1e1e 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            display: 'flex',
            opacity: 0.9,
          }}
        />

        {/* ── Large green glow — center-left ── */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: -120,
            width: 700,
            height: 700,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(74,222,128,0.10) 0%, rgba(74,222,128,0.03) 40%, transparent 70%)',
            transform: 'translateY(-50%)',
            display: 'flex',
          }}
        />

        {/* ── Dim glow — top-right corner ── */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -40,
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 65%)',
            display: 'flex',
          }}
        />

        {/* ── Scattered code chars (decorative) ── */}
        {/* top-right cluster */}
        <span style={{ position: 'absolute', top: 48, right: 88, fontSize: 13, color: '#1e3a28', display: 'flex' }}>{'<Portfolio />'}</span>
        <span style={{ position: 'absolute', top: 78, right: 148, fontSize: 11, color: '#162a1e', display: 'flex' }}>{'// frontend engineer'}</span>
        <span style={{ position: 'absolute', top: 106, right: 108, fontSize: 11, color: '#111f17', display: 'flex' }}>{'const me = { skills: [...] }'}</span>

        {/* bottom-right cluster */}
        <span style={{ position: 'absolute', bottom: 96, right: 72, fontSize: 12, color: '#162a1e', display: 'flex' }}>{'export default Ahmed'}</span>
        <span style={{ position: 'absolute', bottom: 68, right: 128, fontSize: 11, color: '#111f17', display: 'flex' }}>{'return <Portfolio />'}</span>
        <span style={{ position: 'absolute', bottom: 44, right: 88, fontSize: 11, color: '#0e1a12', display: 'flex' }}>{'}'}</span>

        {/* bottom-left faint */}
        <span style={{ position: 'absolute', bottom: 52, left: 72, fontSize: 11, color: '#141a14', display: 'flex' }}>{'import React from "react"'}</span>

        {/* ── Left accent strip ── */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 3,
            background:
              'linear-gradient(to bottom, transparent 5%, #4ade80 35%, #4ade80 65%, transparent 95%)',
            display: 'flex',
          }}
        />

        {/* ── Terminal prompt row — top ── */}
        <div
          style={{
            position: 'absolute',
            top: 44,
            left: 56,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ fontSize: 12, color: '#4ade80' }}>~$</span>
          <span style={{ fontSize: 12, color: '#2a3a2a' }}>whoami</span>
          <div
            style={{
              width: 8,
              height: 14,
              background: '#4ade80',
              opacity: 0.7,
              display: 'flex',
            }}
          />
        </div>

        {/* ── Main content ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 56px',
            width: '100%',
            position: 'relative',
            gap: 0,
          }}
        >
          {/* "Hi, I am" label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 16,
            }}
          >
            <div style={{ width: 24, height: 1, background: '#2a3a2a', display: 'flex' }} />
            <span style={{ fontSize: 13, color: '#3a4a3a', letterSpacing: 3 }}>HI, I AM</span>
            <div style={{ width: 24, height: 1, background: '#2a3a2a', display: 'flex' }} />
          </div>

          {/* First name */}
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              color: '#e8e8e8',
              lineHeight: 0.92,
              letterSpacing: '-3px',
            }}
          >
            {firstName}
          </div>

          {/* Last name — green */}
          {lastName && (
            <div
              style={{
                fontSize: 96,
                fontWeight: 800,
                color: '#4ade80',
                lineHeight: 0.92,
                letterSpacing: '-3px',
                marginBottom: 32,
              }}
            >
              {lastName}
            </div>
          )}

          {/* Divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginTop: 28,
              marginBottom: 28,
            }}
          >
            <div style={{ width: 40, height: 2, background: '#4ade80', display: 'flex' }} />
            <span style={{ fontSize: 13, color: '#3a5a3a', letterSpacing: 4 }}>
              SOFTWARE DEVELOPER
            </span>
          </div>

          {/* Nav pills */}
          <div style={{ display: 'flex', gap: 10 }}>
            {['./projects', './blogs', './contact'].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  padding: '6px 16px',
                  border: '1px solid #1e2e1e',
                  fontSize: 11,
                  color: '#3a5a3a',
                  letterSpacing: 1,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 52,
            borderTop: '1px solid #161616',
            background: '#0a0a0a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 56px',
          }}
        >
          <span style={{ fontSize: 11, color: '#252525' }}>ahmed-bayome.dev</span>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#4ade80',
                  display: 'flex',
                }}
              />
            </div>

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