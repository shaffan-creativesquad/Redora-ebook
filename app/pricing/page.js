'use client'
import { useState } from 'react'
import './pricing.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

const tiers = [
  {
    name: 'Scribe Publishing',
    tagline: "You've written your manuscript. We handle everything else.",
    price: '$29,000',
    term: '6 monthly payments of $4,833',
    features: [
      'Professional editing and design',
      'Full publishing and distribution',
      'Audiobook production included',
      'Up to 50,000 words',
      'Houndstooth Press imprint',
    ],
    cta: 'Configure Your Package',
    href: '/pricing/publishing',
    featured: false,
  },
  {
    name: 'Guided Author',
    tagline: 'You write your book with expert coaching. We publish it.',
    price: '$44,000',
    term: '15 monthly payments of $2,933',
    features: [
      'Dedicated book coach',
      'Structured writing process with support',
      'Professional editing and design',
      'Audiobook production included',
      'Full publishing and distribution',
      'Up to 50,000 words',
      'Lioncrest Publishing imprint',
    ],
    cta: 'Configure Your Package',
    href: '/pricing/guided-author',
    featured: false,
  },
  {
    name: 'Scribe Professional',
    tagline: 'We interview you and write your book. You talk, we create.',
    price: '$56,000',
    term: '12 monthly payments of $4,667',
    features: [
      'Collaborative interview-based writing process',
      'Work with a professional ghostwriter',
      'Full editing, design, and publishing',
      'Audiobook production included',
      'Publishing and distribution',
      'Up to 60,000 words',
      'Lioncrest Publishing imprint',
    ],
    cta: 'Configure Your Package',
    href: '/pricing/professional',
    featured: true,
  },
  {
    name: 'Scribe Elite',
    tagline: 'Our most comprehensive writing and publishing package. Work with our most elite ghostwriters with a built-in marketing budget.',
    price: '$135,000',
    term: '15 monthly payments of $9,000',
    features: [
      'Work with our most elite ghostwriters',
      'Up to 40 hours of interviews with your Scribe',
      'Three days of in-person time with your Scribe',
      'Dedicated external research support',
      '$25,000 built-in marketing budget',
      'Premium editing and design',
      'Audiobook production included',
      'Full publishing and distribution',
      'Up to 60,000 words',
      'Lioncrest Publishing imprint',
      'Priority timeline',
    ],
    cta: 'Configure Your Package',
    href: '/pricing/elite',
    featured: false,
  },
]

const faqs = [
  {
    q: "What's included in the price?",
    a: 'Every Scribe package includes professional editing, cover design, interior layout, audiobook production, publishing, and distribution to Amazon, Barnes & Noble, Apple Books, Kobo, Google Play, and other major online retailers. Higher tiers include writing support and additional services.',
  },
  {
    q: 'How long does the process take?',
    a: 'Most books are published within 12–18 months depending on the package and your responsiveness during the process. Elite clients often have faster timelines.',
  },
  {
    q: 'How do payments work?',
    a: 'Your total investment is split into equal monthly payments. Your first payment is collected when you sign your agreement. Subsequent payments are charged automatically each month. There are no hidden fees.',
  },
  {
    q: 'Can I add services later?',
    a: 'Yes. You can add marketing services or other add-ons at any point during your project. Your team will help you decide what makes sense and when.',
  },
  {
    q: "What if I'm not sure which tier to choose?",
    a: "Schedule a free consult below. Our team will learn about your goals, timeline, and book idea, and recommend the best fit. There's no pressure and no obligation.",
  },
  {
    q: 'What happens after I sign and pay?',
    a: "You'll receive a welcome email within 24 hours with your onboarding materials. Your project manager will reach out to schedule your kickoff call and introduce you to your team.",
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`pnew-faq__item${open ? ' open' : ''}`}>
      <button className="pnew-faq__q" onClick={() => setOpen(v => !v)}>
        {q}
        <span className="pnew-faq__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="pnew-faq__a">{a}</div>}
    </div>
  )
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <div className="pnew">

          {/* Hero */}
          <section className="pnew-hero">
            <h1>Invest in Your Book</h1>
            <p>Choose the service that fits your goals. Configure your package, review your agreement, and get started — all in one place.</p>
          </section>

          {/* Tier Cards */}
          <div className="pnew-grid">
            {tiers.map((tier, i) => (
              <div key={i} className={`pnew-card${tier.featured ? ' pnew-card--featured' : ''}`}>
                {tier.featured && <div className="pnew-badge">Most Popular</div>}
                <h2 className="pnew-card__name">{tier.name}</h2>
                <p className="pnew-card__tagline">{tier.tagline}</p>
                <div className="pnew-card__price">{tier.price} <span>total</span></div>
                <div className="pnew-card__term">{tier.term}</div>
                <ul className="pnew-card__features">
                  {tier.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <a href={tier.href} className={`pnew-card__cta${tier.featured ? ' pnew-card__cta--primary' : ' pnew-card__cta--secondary'}`}>
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Compare link */}
          <div className="pnew-compare">
            <p>Not sure which service is right for you?</p>
            <a href="/services">Compare all services in detail →</a>
          </div>

          {/* FAQ */}
          <section className="pnew-faq">
            <h2>Common Questions</h2>
            {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </section>

          {/* Bottom CTA */}
          <section className="pnew-consult">
            <h2>Not Ready to Start Yet?</h2>
            <p>Schedule a free Author Consult. We&apos;ll help you figure out the right path for your book, with no obligation.</p>
            <a href="/consult" className="pnew-consult__btn">Schedule a Free Consult</a>
          </section>

        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
