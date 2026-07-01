import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency | Meta Ads, Google Ads & SEO | Zyra Digital',
  description: 'Zyra Digital is a results-driven digital marketing agency helping entrepreneurs and business owners grow with Meta Ads, Google Ads, SEO, Social Media Management & Web Design. Get a free strategy call today.',
  keywords: 'digital marketing agency, meta ads, google ads, SEO, social media marketing, web design, performance marketing',
  alternates: { canonical: 'https://zyradigital.in/' },
  openGraph: {
    type: 'website',
    url: 'https://zyradigital.in/',
    title: 'Zyra Digital — Digital Marketing Agency | Meta Ads, Google Ads & SEO',
    description: "Stop burning money on ads that don't convert. Zyra Digital turns your online presence into a revenue machine with proven digital marketing strategy.",
    images: [{ url: 'https://zyradigital.in/og-image.jpg' }],
    siteName: 'Zyra Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zyra Digital — Digital Marketing Agency',
    description: 'Meta Ads, Google Ads, SEO & Web Design for entrepreneurs and business owners who want real growth.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'Zyra Digital',
      description: 'Results-driven digital marketing agency specialising in Meta Ads, Google Ads, SEO, Social Media Management and Web Design.',
      url: 'https://zyradigital.in',
      logo: 'https://zyradigital.in/logo.png',
      slogan: 'Elevate Your Presence',
      contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', availableLanguage: ['English', 'Hindi'] },
      sameAs: ['https://www.instagram.com/zyradigital', 'https://www.facebook.com/zyradigital', 'https://www.linkedin.com/company/zyradigital'],
      serviceArea: { '@type': 'Country', name: 'India' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How soon can we start seeing results?', acceptedAnswer: { '@type': 'Answer', text: 'Paid ads typically show measurable results within 2–4 weeks. SEO takes 2–3 months to build momentum. We set clear expectations upfront.' } },
        { '@type': 'Question', name: 'What is the minimum budget for ads?', acceptedAnswer: { '@type': 'Answer', text: 'We recommend a minimum ad spend of ₹15,000–₹20,000/month for meaningful data and results. Our management fee is separate.' } },
        { '@type': 'Question', name: 'Do you lock clients into long-term contracts?', acceptedAnswer: { '@type': 'Answer', text: 'No long-term lock-ins. We operate on a month-to-month basis. We earn your business every month with results.' } },
        { '@type': 'Question', name: "What if I don't see results?", acceptedAnswer: { '@type': 'Answer', text: "We provide a 30-day progress review. If we're not hitting agreed KPIs, we revise the strategy at no extra charge. We don't disappear — we show up and fix it." } },
        { '@type': 'Question', name: 'How do you communicate and report?', acceptedAnswer: { '@type': 'Answer', text: 'You get a dedicated account manager reachable on WhatsApp. We send weekly performance reports and do a monthly strategy review call.' } },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
