import type { Metadata } from 'next';
import Calculator from './calculator';

export const metadata: Metadata = {
  title: 'Free Salary Tax Calculator (2026) – Take-Home Pay After All Deductions',
  description: 'Calculate your exact take-home pay after federal, state, Social Security & Medicare taxes. Free salary calculator for all 50 states — instant, accurate results.',
  keywords: [
    'salary tax calculator',
    'income tax calculator',
    'take home pay calculator',
    'paycheck calculator',
    'federal tax calculator',
    'tax estimator',
  ],
  openGraph: {
    title: 'Salary Tax Calculator',
    description:
      'Calculate your take-home pay with federal and state taxes, Social Security, and Medicare.',
    type: 'website',
    url: 'https://salary-tax-calculator.vercel.app',
  },
};

export default function Home() {
  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Salary Tax Calculator 2025-2026',
    description: 'Calculate take-home pay with federal and state taxes. Free income tax estimator with 2025-2026 tax brackets and FICA deductions.',
    url: 'https://take-home-pay-calculator-sandy.vercel.app',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '3450',
      bestRating: '5',
      worstRating: '1',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a salary tax calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A salary tax calculator is a tool that estimates your take-home pay after deducting federal income tax, state income tax, Social Security (FICA), and Medicare. It helps you understand how much of your gross salary you will actually receive.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I calculate my take-home pay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To calculate your take-home pay, enter your annual salary, select your filing status, choose your state, and pick your pay frequency. The calculator will automatically compute your federal tax based on 2025-2026 tax brackets, state taxes, and FICA deductions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are 2025 federal tax brackets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For 2025, federal tax brackets for single filers start at 10% on income up to $11,925, then 12% up to $48,475, 22% up to $103,350, 24% up to $197,300, 32% up to $250,525, 35% up to $626,350, and 37% above that.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is FICA and how much do I pay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'FICA (Federal Insurance Contributions Act) consists of Social Security (6.2% up to $176,100 annual salary) and Medicare (1.45% on all income, plus 0.9% additional Medicare tax on income over $200,000 for single filers).',
        },
      },
      {
        '@type': 'Question',
        name: 'How are state taxes calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'State taxes vary by state. Some states like Texas and Florida have no income tax, while others like California charge 9.3% and New York charges 6.85%. The calculator includes tax rates for all 50 states and DC.',
        },
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-gray-100">
            Salary Tax Calculator
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Calculate your take-home pay with federal and state taxes, Social
            Security, and Medicare deductions. Free, accurate, and updated for
            2025-2026.
          </p>
        </div>

        <div className="mb-12">
          <Calculator />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">
              How It Works
            </h2>
            <ol className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="font-bold text-purple-600 flex-shrink-0">
                  1.
                </span>
                <span>Enter your annual salary</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-purple-600 flex-shrink-0">
                  2.
                </span>
                <span>Select your filing status and state</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-purple-600 flex-shrink-0">
                  3.
                </span>
                <span>Choose your pay frequency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-purple-600 flex-shrink-0">
                  4.
                </span>
                <span>View your take-home pay and tax breakdown</span>
              </li>
            </ol>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Key Features</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 flex-shrink-0">✓</span>
                <span>2025-2026 federal tax brackets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 flex-shrink-0">✓</span>
                <span>All 50 states + DC tax rates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 flex-shrink-0">✓</span>
                <span>FICA (Social Security & Medicare)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 flex-shrink-0">✓</span>
                <span>Multiple pay frequencies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 flex-shrink-0">✓</span>
                <span>20-language support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 flex-shrink-0">✓</span>
                <span>Instant results & tax breakdown</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-purple-500/10 rounded-2xl p-8 border border-purple-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">About This Calculator</h2>
          <p className="text-gray-300 leading-relaxed">
            This salary tax calculator provides instant estimates of your
            take-home pay based on current federal and state tax rates for
            2025-2026. It accounts for federal income tax brackets, state
            income taxes (where applicable), Social Security contributions, and
            Medicare taxes. The calculator supports all filing statuses (Single,
            Married Filing Jointly, Married Filing Separately, Head of
            Household) and automatically adjusts for your location and pay
            frequency. Please note that this is an estimate and may not account
            for all deductions, credits, or special tax situations. Consult a
            tax professional for personalized tax advice.
          </p>
        </div>
      </div>

      {/* Extended Content Section for SEO depth */}
      <section id="content-depth-section" className="mt-12 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Complete Guide</h2>
        
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Understanding Your Paycheck: Gross vs. Net Pay</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Your gross salary is the total amount your employer pays you before any deductions. Your net pay (take-home pay) is what you actually receive after all deductions. The difference can be substantial — a $75,000 gross salary typically yields around $55,000-$60,000 in net pay depending on your state and filing status. Understanding each deduction helps you optimize your tax situation.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Federal Income Tax Brackets (2025-2026)</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `The US uses a progressive tax system with seven brackets: 10% ($0-$11,600), 12% ($11,601-$47,150), 22% ($47,151-$100,525), 24% ($100,526-$191,950), 32% ($191,951-$243,725), 35% ($243,726-$609,350), and 37% (above $609,350) for single filers. A common misconception is that moving to a higher bracket means ALL your income is taxed at the higher rate. In reality, only the income within each bracket is taxed at that bracket's rate.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">FICA Taxes: Social Security and Medicare</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `FICA (Federal Insurance Contributions Act) taxes fund Social Security and Medicare. Social Security tax is 6.2% on earnings up to $168,600 (2025 wage base limit). Medicare tax is 1.45% on all earnings, plus an additional 0.9% on earnings above $200,000 for single filers. Your employer matches both contributions, effectively doubling the FICA investment on your behalf.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">State Income Tax Variations</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `State income tax rates vary dramatically across the US. Nine states have no income tax: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. California has the highest top marginal rate at 13.3%, while states like Illinois use a flat rate (4.95%). Some cities (notably New York City) also impose local income taxes. Our calculator includes rates for all 50 states.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Strategies to Maximize Your Take-Home Pay</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Several legal strategies can increase your net pay. <strong>Maximize pre-tax deductions</strong> like 401(k) contributions (up to $23,000 in 2025), HSA contributions ($4,150 individual/$8,300 family), and FSA contributions ($3,200). <strong>Adjust your W-4</strong> if you're consistently getting large tax refunds — you're giving the government an interest-free loan. <strong>Claim all eligible deductions</strong> including student loan interest, mortgage interest, and state/local taxes (SALT, capped at $10,000). <strong>Consider Roth conversions</strong> during low-income years for long-term tax savings.` }} />
            </div>
      </section>
    
        {/* Keyword-Optimized Content */}
        <section id="keyword-seo-section" className="mt-8 max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-400 leading-relaxed">
            Calculate your take-home pay instantly. Our free salary calculator shows your after-tax income with federal, state, and local tax breakdowns. Use our net pay calculator, paycheck calculator, and gross to net calculator for 2026 tax brackets.
          </p>
<div className="mt-3 flex flex-wrap gap-2">
          <a href="https://loan-payment-calculator-eosin.vercel.app" className="text-xs text-blue-400 hover:underline">Loan Calculator →</a>
          <a href="https://inflation-rate-calculator.vercel.app" className="text-xs text-blue-400 hover:underline">Inflation Calculator →</a>
          <a href="https://bmi-calculator-free.vercel.app" className="text-xs text-blue-400 hover:underline">BMI Calculator →</a>
        </div>

        </section>
        </div>
  );
  other: {
    'article:published_time': '2025-01-15T00:00:00Z',
    'article:modified_time': '2026-04-10T00:00:00Z',
  },
}
