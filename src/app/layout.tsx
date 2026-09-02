import type { Metadata, Viewport } from 'next';
import { Inter, Outfit, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import SiteLayoutWrapper from '@/components/SiteLayoutWrapper';
import { RequestCallbackProvider } from '@/components/request-callback-provider';
import { AttributionCapture } from '@/components/attribution-capture';
import { FirebaseClientProvider } from '@/firebase';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6F5FB' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ariesxpert.co.uk'),
  title: {
    default: 'Aries PhysioCare UK | In-Home & Virtual HCPC Registered Physiotherapy',
    template: '%s | Aries PhysioCare UK',
  },
  description:
    'Hospital-grade in-home and virtual physiotherapy across London, Manchester, Birmingham, Edinburgh & UK. Direct billing to Bupa, AXA Health, Aviva, Vitality & WPA. HCPC & CSP registered clinicians.',
  keywords: [
    'home visit physiotherapy London',
    'private physiotherapy Manchester',
    'HCPC registered physiotherapist UK',
    'Bupa physiotherapy direct billing',
    'AXA Health physiotherapy provider',
    'NHS step down rehabilitation',
    'in-home physiotherapy Birmingham',
    'chartered physiotherapist Edinburgh',
    'post surgery knee rehabilitation UK',
    'sports physio London'
  ],
  authors: [{ name: 'Aries HealthCare UK Directorate' }],
  creator: 'Aries HealthCare UK',
  publisher: 'Aries HealthCare International',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.ariesxpert.co.uk',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.ariesxpert.co.uk',
    siteName: 'Aries PhysioCare UK',
    title: 'Aries PhysioCare UK | In-Home & Virtual HCPC Registered Physiotherapy',
    description:
      'Connecting patients with top Chartered Physiotherapists for in-home rehabilitation and virtual tele-physio across the United Kingdom.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FirebaseClientProvider>
            <RequestCallbackProvider>
              <AttributionCapture />
              <SiteLayoutWrapper>{children}</SiteLayoutWrapper>
              <Toaster />
            </RequestCallbackProvider>
          </FirebaseClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
