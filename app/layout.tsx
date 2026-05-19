import { Playfair_Display, Outfit } from 'next/font/google';
import './globals.css';

const heading = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-heading',
  display: 'swap'
});

const body = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-body',
  display: 'swap'
});

export const metadata = {
  title: 'Flourish Dreadlocks | The Art of Loc Transformation',
  description: 'Lagos premier destination for luxury loc installations, micro locs, and specialized maintenance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}