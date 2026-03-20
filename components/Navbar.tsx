import Link from 'next/link';
import { ComponentText } from '@/components/ComponentText';

const navs = [
  { nav: './contact', href: '/#contact' },
  { nav: './skills',  href: '/#skills'  },
  { nav: './projects', href: '/#projects' },
];

export const Navbar = () => (
  <nav className='border-b border-border sticky top-0 bg-bg z-50'>
    <div className='container-x flex justify-between items-center h-16'>
      <Link href='/' className='no-underline'>
        <ComponentText text='AhmedBayome' />
      </Link>
      <div className='flex gap-9'>
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