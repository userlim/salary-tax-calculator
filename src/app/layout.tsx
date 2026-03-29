import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Salary Tax Calculator – Free Income Tax Estimator 2025-2026',
  description:
    'Free online salary tax calculator. Estimate your take-home pay, federal and state taxes, Social Security, and Medicare. 2025-2026 tax brackets included.',
  metadataBase: new URL('https://salary-tax-calculator.vercel.app'),
  openGraph: {
    title: 'Salary Tax Calculator – Free Income Tax Estimator',
    description:
      'Calculate your take-home pay instantly. Includes federal tax brackets, state taxes, FICA, and more.',
    url: 'https://salary-tax-calculator.vercel.app',
    siteName: 'Salary Tax Calculator',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://salary-tax-calculator.vercel.app',
  },
  keywords: [
    'salary tax calculator',
    'income tax calculator',
    'take home pay calculator',
    'paycheck calculator',
    'federal tax calculator',
    'state tax calculator',
    'FICA calculator',
    'net pay calculator',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P08T3SZDQH"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P08T3SZDQH');
            `,
          }}
        />
        <meta name="google-site-verification" content="hsjncRi9cl3tz3Otd6SJKurSt_V1bZ0AKO-bdWIGeHM" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="theme-color" content="#fefcff" />
      </head>
      <body suppressHydrationWarning>
        <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white">
          {children}
        </main>
      </body>
    </html>
  );
}
