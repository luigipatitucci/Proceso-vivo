import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Proceso Vivo',
  description: 'Un método terapéutico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
