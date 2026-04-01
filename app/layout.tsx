import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/Navbar';


export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Ahmed Bayome',
  description: 'Frontend Engineer',


  twitter: {
    card: 'summary_large_image',
  },
};
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
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
