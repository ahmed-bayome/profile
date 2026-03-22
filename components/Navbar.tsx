'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ComponentText } from '@/components/ComponentText';

const navs = [
  { nav: './skills', href: '/#skills' },
  { nav: './projects', href: '/#projects' },
  { nav: './contact', href: '/#contact' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav className='border-b border-border sticky top-0 bg-bg z-50' ref={menuRef}>
      <div className='container-x flex justify-between items-center h-16'>
        {/* Logo */}
        <Link href='/' className='no-underline' onClick={() => setOpen(false)}>
          <ComponentText text='Hero' />
        </Link>

        {/* Desktop nav */}
        <div className='hidden md:flex gap-9'>
          {navs.map(({ nav, href }) => (
            <Link
              key={nav}
              href={href}
              className='text-muted no-underline text-sm transition-colors hover:text-green'
            >
              {nav}
            </Link>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className='md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 bg-transparent border-none cursor-pointer group'
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-px bg-green transition-all duration-300 origin-center ${open ? 'translate-y-[7px] rotate-45' : ''
              }`}
          />
          <span
            className={`block w-6 h-px bg-green transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''
              }`}
          />
          <span
            className={`block w-6 h-px bg-green transition-all duration-300 origin-center ${open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
          />
        </button>
      </div>

      {/* Mobile fullscreen overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-bg z-40 flex flex-col transition-all duration-300 ease-in-out ${open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        {/* Scanline decorative top bar */}
        <div className='border-b border-border px-6 py-3'>
          <span className='text-green text-xs'>// nav_menu</span>
        </div>

        {/* Nav links */}
        <nav className='flex flex-col flex-1 overflow-y-auto'>
          {navs.map(({ nav, href }, i) => (
            <Link
              key={nav}
              href={href}
              onClick={() => setOpen(false)}
              className='no-underline flex items-center gap-4 border-b border-border px-6 py-6 text-muted hover:text-green hover:bg-hover transition-colors duration-200'
            >
              <span className='text-2xs text-border font-mono'>0{i + 1}</span>
              <span className='font-mono text-base tracking-wide'>{nav}</span>
            </Link>
          ))}
        </nav>

        {/* Footer inside drawer */}
        <div className='px-6 py-4 border-t border-border'>
          <span className='text-2xs text-muted font-mono'>▸ ready_</span>
        </div>
      </div>
    </nav>
  );
};
