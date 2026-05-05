import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script'; // 👈 IMPORTANTE
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FloatingSectionNav from '@/components/FloatingSectionNav';
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
        <WhatsAppButton />
        <FloatingSectionNav />

        {/* 👇 GOOGLE ANALYTICS */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RZDTRVB17X"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RZDTRVB17X');
          `}
        </Script>

      </body>
    </html>
  );
}