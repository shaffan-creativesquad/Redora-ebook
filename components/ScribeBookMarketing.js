'use client'
import { useState } from 'react'

const packages = [
  { title: 'Expanded Readership ($3,000)', desc: 'Digital review placement, premium giveaway on reader community sites, and 5-day promotion with paid social ads.' },
  { title: 'Amazon Ad Management ($10,000)', desc: 'Expert-managed Amazon advertising campaigns with pre-set budgets and comprehensive reporting over 4 months.' },
  { title: 'PR Campaign ($16,000)', desc: 'Media kit creation, pitch development, audience research, and bi-weekly reporting over 4 months.' },
  { title: 'Podcast PR ($11,000)', desc: 'Podcast guest booking management including pitch creation and host targeting over 4 months.' },
  { title: 'Custom Video Content ($12,000)', desc: '50 short-form social media videos from 1 day of professional filming, edited for multiple platforms.' },
  { title: 'Bestseller Campaign (from $35,000)', desc: 'Premium launch support with guaranteed sales, reviews, podcast interviews, and bestseller status.' },
]

const steps = [
  { num: 1, title: 'Strategy Consultation', desc: 'Discuss your goals and identify the right marketing package for your book.' },
  { num: 2, title: 'Campaign Planning', desc: 'Our marketing team builds a customized plan based on your selected services.' },
  { num: 3, title: 'Execution', desc: 'We execute your marketing campaigns with regular reporting and optimization.' },
  { num: 4, title: 'Results & Reporting', desc: 'Comprehensive reporting on campaign performance and impact.' },
]

const goodFor = [
  'You have a published book ready to promote',
  'You want to reach more readers',
  'You want professional marketing support',
  'You have specific marketing goals',
]

const notFor = [
  "You haven't published your book yet",
  'You want free marketing advice only',
]

const faqs = [
  { q: 'Can I combine multiple packages?', a: 'Yes, packages can be combined and customized to meet your specific goals and budget.' },
  { q: 'Do I need to be a Readora author?', a: 'Our marketing services are available exclusively to authors who have published with Readora.' },
  { q: 'How long do campaigns run?', a: 'Campaign lengths vary from 2 weeks to 6 months depending on the package selected.' },
]

const relatedServices = [
  { name: 'Readora Publishing', price: '$29,000', desc: 'You write the book, we handle publishing', href: '/services/publishing' },
  { name: 'Readora Guided Author', price: '$44,000', desc: 'We guide your writing, then publish', href: '/services/guided-author' },
  { name: 'Readora Professional', price: '$56,000', desc: 'We interview you, write, and publish', href: '/services/professional-book-writers' },
  { name: 'Readora Elite', price: '$135,000+', desc: 'Premium customized ghostwriting', href: '/services/ghostwriting' },
]

const testimonials = [
  {
    quote: "I don't have enough good words to say about my ghostwriter Mikey. She held my hand through the entire process. She's an angel.",
    name: 'Pavel Ythjall',
    credential: 'Fitness Photographer & Entrepreneur',
    avatar: '/assets/Pavel-Ythjal-541-296.jpg',
  },
  {
    quote: "I expected the actual writing and publishing process to be really hard, but honestly, it was much easier than I thought it would be. They gave me hands-on guidance every step of the way, and I just followed the process.",
    name: 'Iona Holloway',
    credential: "Author & Women's Empowerment Coach",
    avatar: '/assets/Iona-Holloway-541-296.jpg',
  },
  {
    quote: "There's a real silo in publishing for, there are voices that aren't heard that Readora is allowing to be heard.",
    name: 'MyLinh Shattan',
    credential: 'Author, Raising Athena',
    avatar: '/assets/mylinh-shattan-headshot.png',
  },
  {
    quote: "The incredible praise we received from our industry colleagues for The Invisible Threat validates the effort and dedication we poured into the book. We're excited to continue sharing our message with a broader audience when the book is distributed. We couldn't have reached this milestone without the support of Readora — especially Mark. He has been fantastic to work with. A truly skilled professional.",
    name: 'Matthew Eby, Joanne Eby',
    credential: 'Co-Founders, Nth Degree Financial Solutions',
    avatar: '/assets/Eby-Headshots.jpg',
  },
  {
    quote: "[The editor] at Readora just reads a gazillion books. He said, we're all dying to know who this Cara is. So one of the last, probably the last two rewrites, I developed her character.",
    name: 'MyLinh Shattan',
    credential: 'Author, Raising Athena',
    avatar: '/assets/mylinh-shattan-headshot.png',
  },
  {
    quote: "Writing that book and working with [Readora] is one of the best decisions I have ever made. There have been doors opened and connections formed I would have never had imagined.",
    name: 'Linden Loren',
    credential: 'Co-Founder, Camo & Wind',
    avatar: '/assets/Linden-v2.png',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="svc-detail__faq-item">
      <div className="svc-detail__faq-q" onClick={() => setOpen(v => !v)}>
        {q}
        <span className={`svc-detail__faq-chevron${open ? ' open' : ''}`}>▾</span>
      </div>
      <div className={`svc-detail__faq-a${open ? ' open' : ''}`}>{a}</div>
    </div>
  )
}

export default function ReadoraBookMarketing() {
  return (
    <>
      <div className="svc-detail">
        {/* Hero */}
        <div className="svc-detail__hero">
          <h1>Book marketing services to maximize your book&apos;s impact.</h1>
          <p className="svc-detail__subtitle">Customizable marketing packages designed around your goals: reach, credibility, business impact, and royalties.</p>
          <div className="svc-detail__price">From $3,000</div>
          <div className="svc-detail__price-note">Multiple packages available</div>
          <a href="/consult" className="svc-detail__cta-btn">Schedule a Consult</a>
        </div>

        {/* Our Packages */}
        <div className="svc-detail__section svc-detail__section--alt">
          <h2>Our Packages</h2>
          <div className="svc-detail__features-grid">
            {packages.map((pkg, i) => (
              <div key={i} className="svc-detail__feature-card">
                <h3>{pkg.title}</h3>
                <p>{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="svc-detail__section">
          <h2>How It Works</h2>
          <div className="svc-detail__process">
            {steps.map(s => (
              <div key={s.num} className="svc-detail__step">
                <div className="svc-detail__step-num">{s.num}</div>
                <div className="svc-detail__step-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Is This Right for You */}
        <div className="svc-detail__section svc-detail__section--alt">
          <h2>Is This Right for You?</h2>
          <div className="svc-detail__eligibility">
            <div className="svc-detail__eligibility-col good">
              <h3>This is for you if...</h3>
              <ul>{goodFor.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>
            <div className="svc-detail__eligibility-col bad">
              <h3>This is NOT for you if...</h3>
              <ul>{notFor.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="svc-detail__section">
          <h2>Frequently Asked Questions</h2>
          <div className="svc-detail__faq-list">
            {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>

        {/* Related Services */}
        <div className="svc-detail__section svc-detail__section--alt">
          <h2>Explore Other Services</h2>
          <div className="svc-detail__related" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {relatedServices.map((s, i) => (
              <a key={i} href={s.href} className="svc-detail__related-card">
                <h3>{s.name}</h3>
                <div className="price">{s.price}</div>
                <p>{s.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="svc-detail__bottom-cta">
          <h2>Ready to Get Started?</h2>
          <p>Schedule a free consultation with our publishing strategists to discuss your book.</p>
          <a href="/consult" className="svc-detail__cta-btn">Schedule a Consult</a>
        </div>
      </div>

      {/* Testimonials */}
      <section className="svc-testimonials">
        <div className="svc-testimonials__inner">
          <div className="svc-testimonials__heading">
            <h2>What Our Authors Say</h2>
            <p>Hear from authors who brought their books to life with Readora</p>
          </div>
          <div className="svc-testimonials__grid">
            {testimonials.map((t, i) => (
              <div key={i} className="svc-testimonial-card">
                <div className="svc-testimonial-card__stars">★★★★★</div>
                <div className="svc-testimonial-card__quote">{t.quote}</div>
                <div className="svc-testimonial-card__author">
                  <img
                    className="svc-testimonial-card__avatar"
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="svc-testimonial-card__name">{t.name}</div>
                    <div className="svc-testimonial-card__credential">{t.credential}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="svc-testimonials__cta">
            <a href="/reviews">Read More Reviews</a>
          </div>
        </div>
      </section>
    </>
  )
}
