'use client'

import { type CSSProperties, type ReactNode } from 'react'

// ─── Skeletonize ────────────────────────────────────────────────────────────
//
// Wraps any component and auto-generates a perfectly-fitted skeleton.
// No manual shimmer blocks needed — the real component layout IS the template.
//
// How it works:
//   CSS `:not(:has(> *))` targets only "leaf" elements (elements with no
//   child elements). These are exactly the spots where visible content lives:
//   text nodes, button labels, badges, etc. Structural wrapper divs are left
//   alone, so the layout is preserved with zero double-shimmer artifacts.
//
// Usage:
//   <Skeletonize loading={isLoading}>
//     <Skills />
//   </Skeletonize>
//
//   // With escape hatch for elements that should never shimmer:
//   <span data-skeleton-ignore>always visible</span>
//
// ────────────────────────────────────────────────────────────────────────────

interface SkeletonizeProps {
  /** When true, the children render as a shimmering skeleton */
  loading: boolean
  /** The real component — its DOM structure becomes the skeleton template */
  children: ReactNode
  /** Optional wrapper className (e.g. for width/height constraints) */
  className?: string
}

export const Skeletonize = ({ loading, children, className }: SkeletonizeProps) => (
  <div
    className={className}
    data-skeleton={loading ? '' : undefined}
    aria-busy={loading}
    aria-label={loading ? 'Loading…' : undefined}
  >
    {children}
  </div>
)

// ─── SkeletonBlock ───────────────────────────────────────────────────────────
//
// A standalone shimmer block for explicit/manual skeleton layouts.
// Uses the same animation as Skeletonize so they look consistent on screen.
//
// Usage:
//   <SkeletonBlock className="h-4 w-32 mb-2" />
//   <SkeletonBlock className="h-4 w-20" />
//
// ────────────────────────────────────────────────────────────────────────────

interface SkeletonBlockProps {
  className?: string
  style?: CSSProperties
  /** Renders as a pill shape (fully rounded) */
  pill?: boolean
}

export const SkeletonBlock = ({ className = '', style, pill }: SkeletonBlockProps) => (
  <div
    className={`skeleton-block${pill ? ' rounded-full' : ''}${className ? ` ${className}` : ''}`}
    style={style}
    aria-hidden
  />
)
