import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Salary Tax Calculator',
    short_name: 'Salary',
    description: 'Take-Home Pay Estimator',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#22C55E',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
