import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { RealtimeUpdater } from '@/components/RealtimeUpdater';

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
        <RealtimeUpdater />
      </body>
    </html>
  );
};

export default RootLayout;
