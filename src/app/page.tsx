import type { Metadata } from 'next';
import Calculator from './calculator';

export const metadata: Metadata = {
  title: 'Salary Tax Calculator – Free Income Tax Estimator 2025-2026',
  description:
    'Free online salary tax calculator. Calculate your take-home pay with 2025-2026 federal tax brackets, state taxes, and FICA deductions.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-gray-900">
            Salary Tax Calculator
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
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
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              How It Works
            </h2>
            <ol className="space-y-3 text-gray-700">
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
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Key Features</h2>
            <ul className="space-y-3 text-gray-700">
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

        <div className="mt-16 bg-purple-50 rounded-2xl p-8 border border-purple-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">About This Calculator</h2>
          <p className="text-gray-700 leading-relaxed">
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
    </div>
  );
}
