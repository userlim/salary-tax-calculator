# Salary Tax Calculator

A free, open-source salary tax calculator built with Next.js 14. Calculate your take-home pay with federal and state taxes, Social Security, and Medicare deductions.

## Features

- **2025-2026 Federal Tax Brackets**: Updated with current IRS rates
- **All 50 States + DC**: Tax rates for every US state and DC
- **Multiple Filing Statuses**: Single, Married Filing Jointly, Married Filing Separately, Head of Household
- **Pay Frequency Options**: Annual, Monthly, Bi-weekly, Weekly
- **FICA Deductions**: Social Security (6.2%) and Medicare (1.45% + 0.9% additional)
- **20-Language Support**: UI available in English, Spanish, French, German, Italian, Portuguese, Japanese, Chinese, Korean, Russian, Arabic, Hindi, Vietnamese, and more
- **Tax Breakdown Chart**: Visual representation of tax composition
- **LocalStorage Persistence**: Your settings are saved automatically
- **Mobile Responsive**: Works perfectly on all devices
- **SEO Optimized**: Optimized for search engines and AdSense

## Tech Stack

- **Next.js 14**: Latest React framework with App Router
- **React 18**: Modern React with hooks
- **TailwindCSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd salary-tax-calculator

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
salary-tax-calculator/
├── src/
│   └── app/
│       ├── layout.tsx         # Root layout with GA and metadata
│       ├── page.tsx           # Home page with SEO and FAQ schema
│       ├── calculator.tsx      # Main calculator component (client)
│       └── globals.css        # Global styles with Nunito font
├── public/                    # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── README.md
```

## Features Details

### Tax Calculation

- **Federal Income Tax**: Calculated using 2025 tax brackets with standard deductions
- **State Income Tax**: All 50 states with current rates
- **Social Security**: 6.2% up to $176,100 annual income
- **Medicare**: 1.45% base + 0.9% additional on income over $200,000

### UI/UX

- Clean, modern design with Nunito font
- Purple-themed color scheme
- Responsive grid layouts
- Real-time calculations
- Tax breakdown visualization
- Effective tax rate display

### Localization

Supported languages:
- English
- Spanish
- French
- German
- Italian
- Portuguese
- Japanese
- Chinese (Simplified)
- Korean
- Russian
- Arabic
- Hindi
- Vietnamese

## Configuration

### Google Analytics

Update the GA ID in `src/app/layout.tsx`:

```typescript
src="https://www.googletagmanager.com/gtag/js?id=G-P08T3SZDQH"
```

### Domain/Base URL

Update `metadataBase` in `src/app/layout.tsx`:

```typescript
metadataBase: new URL('https://your-domain.com')
```

## State Tax Rates

State tax rates are stored as a flat rate in the calculator. For production, consider:

1. Updating with current rates annually
2. Adding progressive tax brackets for states that use them
3. Adding deduction amounts by state

Current implementation uses approximate flat rates for simplicity.

## Performance

- **Production Ready**: Optimized for fast load times
- **No External Dependencies**: Tax calculations done client-side (no API calls)
- **CSS Optimized**: TailwindCSS with purging
- **Image Optimization**: Next.js automatic image optimization
- **Type Safety**: Full TypeScript coverage

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Other Platforms

The project can be deployed to any Node.js hosting platform (AWS, Heroku, DigitalOcean, etc.).

## Legal Disclaimer

This calculator provides estimates based on 2025-2026 federal tax brackets and standard state rates. Actual tax liability may differ based on deductions, credits, filing status changes, and other factors. This is not professional tax advice. Always consult a tax professional for accurate tax planning.

## License

MIT License - feel free to use for personal or commercial projects.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## Changelog

### v1.0.0 (Initial Release)

- Initial release with federal and state tax calculations
- 20-language support
- LocalStorage persistence
- Mobile responsive design
- SEO optimization for AdSense

## Support

For issues, questions, or suggestions, please create an issue in the repository.
