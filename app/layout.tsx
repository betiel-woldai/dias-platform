import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DIAS - Digitaler Intelligenter Assistent',
  description: 'Ihre zentrale Plattform für KI-gestützte Tools und Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`bg-gray-50 ${inter.className}`}>{children}</body>
    </html>
  );
}