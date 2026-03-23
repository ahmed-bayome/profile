// app/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        <p style={{ color: '#4ade80', fontSize: '24px', margin: '0 0 16px' }}>
          // software_developer
        </p>
        <h1 style={{ color: '#ffffff', fontSize: '72px', margin: '0 0 24px', fontWeight: 'bold' }}>
          Ahmed Bayome
        </h1>
        <p style={{ color: '#666', fontSize: '28px', margin: '0 0 48px' }}>
          React Native · Next.js · Laravel · Vue.js
        </p>
        <p style={{ color: '#4ade80', fontSize: '20px', margin: 0 }}>
          ahmedbayome.vercel.app
        </p>
      </div>
    ),
    { ...size }
  );
}