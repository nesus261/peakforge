import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://peakforge.pl',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://peakforge.pl/en',
          pl: 'https://peakforge.pl/pl',
        },
      },
    },
    {
        url: 'https://peakforge.pl/contact',
        lastModified: new Date(),
        alternates: {
          languages: {
            en: 'https://peakforge.pl/en/contact',
            pl: 'https://peakforge.pl/pl/contact',
          },
        },
    },
    {
        url: 'https://peakforge.pl/about',
        lastModified: new Date(),
        alternates: {
          languages: {
            en: 'https://peakforge.pl/en/about',
            pl: 'https://peakforge.pl/pl/about',
          },
        },
    },
  ]
}