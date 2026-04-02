import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/common/Navbar';
import { doMetadata } from '@/utils/seo';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const dynamic = 'force-dynamic';

export const metadata: Metadata = doMetadata({
  title: 'Ahmed Bayome - Portfolio',
  description: 'Welcome to the portfolio of Ahmed Bayome.',
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => (
  <html lang='en' className={jetbrainsMono.variable}>
    <body>
      <Navbar />
      {children}
    </body>
  </html>
);


export default RootLayout;
