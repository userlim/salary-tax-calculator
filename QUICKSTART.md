# Quick Start Guide

## Installation (2 steps)

```bash
cd /sessions/pensive-wizardly-bardeen/mnt/Desktop/salary-tax-calculator
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features at a Glance

### 1. Basic Calculation
- Enter annual salary
- Select filing status (Single, MFJ, MFS, HOH)
- Choose state (all 50 + DC)
- Pick pay frequency (Annual, Monthly, Bi-weekly, Weekly)
- Click Calculate

### 2. Instant Results
- Take-home pay for selected frequency
- Tax breakdown chart
- Effective tax rate
- Detailed deduction breakdown

### 3. Multi-Language
- Click language selector (top right)
- Choose from 20+ languages
- Settings auto-save to localStorage

## What Gets Calculated?

**Gross Pay** → minus
- Federal Income Tax (2025 brackets)
- State Income Tax (all 50 states)
- Social Security (6.2% up to $176,100)
- Medicare (1.45% + 0.9% above $200K)
= **Take-Home Pay**

## 2025 Tax Brackets Included

All filing statuses covered:
- Single
- Married Filing Jointly
- Married Filing Separately
- Head of Household

## State Tax Rates

All 51 entries (50 states + DC) with current rates:
- No tax states: TX, FL, NV, WA, etc.
- High tax states: CA (9.3%), NY (6.85%), MD (9.53%), etc.

## Customization

### Update GA ID
Edit `src/app/layout.tsx`:
```typescript
src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"
```

### Update Domain
Edit `src/app/layout.tsx`:
```typescript
metadataBase: new URL('https://your-domain.com')
```

### Modify Colors
Edit `src/app/globals.css`:
```css
:root {
  --accent: #7c5cbf;  /* Change purple to your color */
  --bg: #fefcff;      /* Change background */
}
```

## Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Home page with SEO |
| `src/app/calculator.tsx` | Main calculator logic & UI |
| `src/app/layout.tsx` | Layout + Google Analytics |
| `src/app/globals.css` | Styling + Nunito font |
| `tsconfig.json` | TypeScript config |
| `next.config.js` | Next.js config |
| `tailwind.config.ts` | Tailwind config |

## Common Tasks

### Add New Language
1. Open `src/app/calculator.tsx`
2. Add language code to language selector options
3. Add translations object (search for `'en': {`)
4. Add translations for all keys

### Update State Tax Rate
Edit `src/app/calculator.tsx`, find `STATE_TAX_RATES` object, update the state rate.

### Change Standard Deduction
Edit `src/app/calculator.tsx`, find `STANDARD_DEDUCTIONS` object.

### Update Federal Brackets
Edit `src/app/calculator.tsx`, find `FEDERAL_BRACKETS_2025` object.

## TypeScript Checking

```bash
npx tsc --noEmit
```

## Troubleshooting

### Localhost won't load
- Kill existing process: `lsof -i :3000` then `kill -9 <PID>`
- Clear `.next` folder: `rm -rf .next`
- Reinstall: `npm install`

### localStorage not persisting
- Check browser privacy settings
- Verify localStorage is enabled
- Check browser dev tools (Application tab)

### Styles not showing
- Clear cache: `Ctrl+Shift+Delete`
- Rebuild: `npm run build`
- Restart: `npm run dev`

## Next Steps

1. Run `npm install`
2. Run `npm run dev`
3. Open http://localhost:3000
4. Test calculator with sample data
5. Update GA ID and domain (see Customization)
6. Deploy to Vercel or your hosting

## Support

Check `README.md` for detailed documentation.
