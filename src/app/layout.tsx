import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Salary Tax Calculator (Free, 2026) – Take-Home Pay Estimator',
  description:
    'Calculate your take-home pay in seconds. Free 2026 salary tax calculator with federal & state brackets, FICA, and deductions. See your net income — try now.',
  keywords:
    'salary calculator, take home pay calculator, paycheck calculator, income tax calculator, after tax salary calculator, hourly to salary calculator, net pay calculator, federal tax calculator, tax bracket calculator 2026, gross to net calculator, salary after tax, state tax calculator, w2 tax calculator, paycheck withholding calculator, how much tax on my salary',
  metadataBase: new URL('https://take-home-pay-calculator-sandy.vercel.app'),
  openGraph: {
    title: 'Salary Tax Calculator (Free, 2026) – Take-Home Pay Estimator',
    description:
      'Calculate your take-home pay in seconds. Free 2026 salary tax calculator with federal & state brackets, FICA, and deductions. See your net income — try now.',
  keywords:
    'salary calculator, take home pay calculator, paycheck calculator, income tax calculator, after tax salary calculator, hourly to salary calculator, net pay calculator, federal tax calculator, tax bracket calculator 2026, gross to net calculator, salary after tax, state tax calculator, w2 tax calculator, paycheck withholding calculator, how much tax on my salary',
    url: 'https://take-home-pay-calculator-sandy.vercel.app',
    siteName: 'Salary Tax Calculator',
    locale: 'en_US',
    type: 'website',
  },
    twitter: {
    card: 'summary_large_image',
    title: 'Salary Tax Calculator — Take-Home Pay Estimator',
    description: 'Take-Home Pay Estimator',
  keywords:
    'salary calculator, take home pay calculator, paycheck calculator, income tax calculator, after tax salary calculator, hourly to salary calculator, net pay calculator, federal tax calculator, tax bracket calculator 2026, gross to net calculator, salary after tax, state tax calculator, w2 tax calculator, paycheck withholding calculator, how much tax on my salary',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://take-home-pay-calculator-sandy.vercel.app',
    languages: {
      'en': 'https://take-home-pay-calculator-sandy.vercel.app',
      'x-default': 'https://take-home-pay-calculator-sandy.vercel.app',
    },
  },
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P04TH8XJJ9" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P04TH8XJJ9');
            `,
          }}
        />
        <meta name="google-site-verification" content="hsjncRi9cl3tz3Otd6SJKurSt_V1bZ0AKO-bdWIGeHM" />
        <meta name="google-site-verification" content="ETO59LUETFhBHTx7GMun0GscvJgzLq2iGWdeAmh3e10" />
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous" strategy="afterInteractive" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="theme-color" content="#fefcff" />
              {/* BreadcrumbList Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://take-home-pay-calculator-sandy.vercel.app"}, {"@type": "ListItem", "position": 2, "name": "Salary Tax Calculator", "item": "https://take-home-pay-calculator-sandy.vercel.app"}]})
        }} />
        {/* Organization & WebSite Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "name": "Salary Tax Calculator", "url": "https://take-home-pay-calculator-sandy.vercel.app", "publisher": {"@type": "Organization", "name": "UtiliCalc Tools", "url": "https://utilicalc.vercel.app", "logo": {"@type": "ImageObject", "url": "https://take-home-pay-calculator-sandy.vercel.app/favicon.svg"}}, "potentialAction": {"@type": "SearchAction", "target": "https://take-home-pay-calculator-sandy.vercel.app/?q={search_term_string}", "query-input": "required name=search_term_string"}})
        }} />
        {/* Preconnect & DNS-Prefetch Hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        {/* Speakable Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["h1", ".keyword-seo-section p"]}})
        }} />
</head>
      <body suppressHydrationWarning>
        <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white">
          {children}
        </main>
        <footer className="border-t border-white/5 py-6 text-center text-sm text-gray-500 bg-black/20 backdrop-blur-sm">
          
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Related Free Tools:</span>
                <a href="https://loan-payment-calculator-eosin.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs">Loan Payment Calculator</a>
                <a href="https://inflation-rate-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs">Inflation Rate Calculator</a>
                <a href="https://gold-price-today-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs">Gold Price Calculator</a>
                <a href="https://fuel-cost-calculator-ten.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs">Fuel Cost Calculator</a>
                <a href="https://utilicalc.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs">UtiliCalc All-in-One Tools</a>
            </div>
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-xs">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-xs">Terms of Service</a>
          </div>
          &copy; 2026 Take Home Pay Calculator. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
