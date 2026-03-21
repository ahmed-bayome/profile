import Link from 'next/link';
import { ComponentText } from '@/components/ComponentText';

const navs = [
  { nav: './skills', href: '/#skills' },
  { nav: './projects', href: '/#projects' },
  { nav: './contact', href: '/#contact' },
];

export const Navbar = () => (
  <nav className='border-b border-border sticky top-0 bg-bg z-50'>
    <div className='container-x flex justify-between items-center h-16'>
      <Link href='/' className='no-underline'>
        <ComponentText text='Hero' />
      </Link>
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
    </div>
  </nav>
);
