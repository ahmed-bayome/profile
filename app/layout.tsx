import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/Navbar';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Ahmed Bayome'
};

export const dynamic = 'force-dynamic';

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang='en' className={jetbrainsMono.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
