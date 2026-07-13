'use client'
import { useState } from 'react'

const features = [
  { title: 'Your Story, Your Impact', desc: 'We capture your personal transformation and expertise through in-depth interviews and craft it into a compelling narrative.' },
  { title: 'Expert Positioning', desc: 'Your book is positioned to establish you as an authority in personal development and self-improvement.' },
  { title: 'Full Publishing', desc: 'Professional editing, design, publishing, and distribution across all platforms.' },
  { title: 'Reach Your Audience', desc: 'Launch and marketing support to get your message to the people who need it most.' },
]

const goodFor = [
  'You have personal growth expertise to share',
  "You've experienced a transformation worth sharing",
  'You want to help others through your story',
  "You're a coach, speaker, or thought leader",
]

const notFor = [
  "You're writing fiction",
  "You don't have personal expertise or experience to draw from",
]

const faqs = [
  { q: 'Can my self-help book include personal stories?', a: 'Absolutely. The most powerful self-help books blend personal narrative with practical advice. We help you find the right balance.' },
  { q: 'How do you handle sensitive personal content?', a: 'We treat your story with complete confidentiality and sensitivity. You have full control over what goes into your book.' },
]

const relatedServices = [
  { name: 'Readora Publishing', price: '$29,000', desc: 'You write the book, we handle publishing', href: '/services/publishing' },
  { name: 'Readora Guided Author', price: '$44,000', desc: 'We guide your writing, then publish', href: '/services/guided-author' },
  { name: 'Readora Professional', price: '$56,000', desc: 'We interview you, write, and publish', href: '/services/professional-book-writers' },
  { name: 'Readora Elite', price: '$135,000+', desc: 'Premium customized ghostwriting', href: '/services/ghostwriting' },
]

const testimonials = [
  {
    quote: 'A book is one of the most powerful lead generators for businesses out there.',
    name: 'Shaan Patel',
    credential: 'Shark Tank Veteran · CEO, Prep Expert',
    avatar: '/assets/shaan-patel.png',
  },
  {
    quote: "I can say with 100% honesty that it was great every step of the way. If it was just you and me, not on a podcast, and you said, 'Just tell me what we could have done better,' I'd say: I don't know. I can't think of anything.",
    name: 'Sarma Melngailis',
    credential: 'Former Owner, Pure Food and Wine',
    avatar: '/assets/sarma-mengailis.png',
  },
  {
    quote: "I always wanted to get back to that original level but without having to take the kind of pay cut that you do through a major publisher. And so that's when I found Readora. And it was kind of the perfect match between self-publishing but still getting that professional level of publication.",
    name: 'Shaan Patel',
    credential: 'CEO, Prep Expert',
    avatar: '/assets/shaan-patel.png',
  },
  {
    quote: 'As soon as I made the commitment to publish this book with Readora and go through you guys and just see it through, as soon as that contract was signed, everything else opened up.',
    name: 'Adam Skolnick',
    credential: "Co-Author of Can't Hurt Me, NYT Contributor",
    avatar: '/assets/AdamSkolnick_Headshot.jpg',
  },
  {
    quote: '[The Readora team] made it happen, putting the book together in such a short time frame and then making all of that come to life in such an amazing and professional way, that we can compete with the Princeton Reviews and the Kaplans and the juggernauts in our space without having to go through a major publisher and still keep all that ROI for ourselves.',
    name: 'Shaan Patel',
    credential: 'CEO, Prep Expert',
    avatar: '/assets/shaan-patel.png',
  },
  {
    quote: "I wasn't a 'writer.' Readora turned years of workshops into a clear book—and the book turned into credibility, revenue, and relationships I couldn't have reached any other way.",
    name: 'Rich Kurtzman',
    credential: 'Founder & CEO, Barcelona SAE',
    avatar: '/assets/RichKurtzman_Headshot.jpg',
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

export default function WriteASelfHelpBook() {
  return (
    <>
      <div className="svc-detail">
        {/* Hero */}
        <div className="svc-detail__hero">
          <h1>Self-help book ghostwriting that changes lives.</h1>
          <p className="svc-detail__subtitle">Transform your personal growth expertise, life lessons, and transformative insights into a professionally published book that helps others.</p>
          <div className="svc-detail__price">From $56,000</div>
          <div className="svc-detail__price-note">Readora Professional or Elite Ghostwriting</div>
          <a href="/consult" className="svc-detail__cta-btn">Schedule a Consult</a>
        </div>

        {/* What's Included */}
        <div className="svc-detail__section svc-detail__section--alt">
          <h2>What&apos;s Included</h2>
          <div className="svc-detail__features-grid">
            {features.map((f, i) => (
              <div key={i} className="svc-detail__feature-card">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
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
          <div className="svc-detail__related">
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
