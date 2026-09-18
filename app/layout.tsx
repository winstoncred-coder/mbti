import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import './globals.css';

export const metadata: Metadata = {
  title: 'Latent — a photography commons',
  description:
    'A growing collection of digital and film photographs. Nothing posed. Look longer than you meant to.',
  openGraph: {
    title: 'Latent — a photography commons',
    description: 'A growing collection of digital and film photographs.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
