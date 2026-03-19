// components/Loader.tsx
export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#1a1a1a',
      fontFamily: 'JetBrains Mono, monospace',
      color: '#4ade80',
      fontSize: '14px',
      letterSpacing: '0.1em',
    }}>
      loading...
    </div>
  )
}