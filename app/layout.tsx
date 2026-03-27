import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/components/context/AuthContext';
import Sidebar from '@/components/layout/Sidebar';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Lucy Gray R | Creative AI Studio',
  description: 'We see the soul. AI only helps us reveal it. Mongolian essence • Global vision.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#243949] text-[#FDFCF8] antialiased">
        <AuthProvider>
          <div className="flex min-h-screen">
            {/* Sidebar - Desktop */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 md:ml-80 transition-all duration-300">
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
