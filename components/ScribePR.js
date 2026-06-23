'use client'
import { useState } from 'react'

const packages = [
  { title: 'Podcast PR ($8,250)', desc: '3 months of podcast guest booking management including pitch creation and host targeting.' },
  { title: 'PR Campaign ($12,000)', desc: '3 months of media kit creation, pitch development, audience research, and bi-weekly reporting.' },
  { title: 'Publicity Campaign ($24,000)', desc: '6 months of comprehensive visibility targeting 2–4 live media features per month.' },
  { title: 'Bestseller & Media ($35,000+)', desc: 'Premium launch support with guaranteed sales, reviews, podcast interviews, and bestseller positioning.' },
]

const goodFor = [
  'You have a published book to promote',
  'You want media and podcast exposure',
  "You're building thought leadership",
]

const notFor = [
  "Your book isn't published yet",
  'You want free publicity advice only',
]

const faqs = [
  { q: 'Do I need to be a Scribe author?', a: 'Our PR services are available to Scribe authors and selected external authors.' },
  { q: 'What results can I expect?', a: 'Results vary by package and market, but our team provides regular reporting on media placements, podcast bookings, and campaign performance.' },
]

const relatedServices = [
  { name: 'Scribe Publishing', price: '$29,000', desc: 'You write the book, we handle publishing', href: '/services/publishing' },
  { name: 'Scribe Guided Author', price: '$44,000', desc: 'We guide your writing, then publish', href: '/services/guided-author' },
  { name: 'Scribe Professional', price: '$56,000', desc: 'We interview you, write, and publish', href: '/services/professional-book-writers' },
  { name: 'Scribe Elite', price: '$135,000+', desc: 'Premium customized ghostwriting', href: '/services/ghostwriting' },
]

const testimonials = [
  {
    quote: 'A book is one of the most powerful lead generators for businesses out there.',
    name: 'Shaan Patel',
    credential: 'Shark Tank Veteran · CEO, Prep Expert',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/author-headshots/Shaan_Patel_Headshot.jpg?width=48&height=48&name=Shaan_Patel_Headshot.jpg',
  },
  {
    quote: "I can say with 100% honesty that it was great every step of the way. If it was just you and me, not on a podcast, and you said, 'Just tell me what we could have done better,' I'd say: I don't know. I can't think of anything.",
    name: 'Shaan Patel',
    credential: 'CEO, Prep Expert',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/author-headshots/Shaan_Patel_Headshot.jpg?width=48&height=48&name=Shaan_Patel_Headshot.jpg',
  },
  {
    quote: "I wasn't a 'writer.' Scribe turned years of workshops into a clear book—and the book turned into credibility, revenue, and relationships I couldn't have reached any other way.",
    name: 'Rich Kurtzman',
    credential: 'Founder & CEO, Barcelona SAE',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/images/testimonials/RichKurtzman_Headshot.jpg?width=48&height=48&name=RichKurtzman_Headshot.jpg',
  },
  {
    quote: 'The amount that we spent on the Scribe project has generated a 10x plus return ever since, if not 20x.',
    name: 'Shaan Patel',
    credential: 'CEO, Prep Expert',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/author-headshots/Shaan_Patel_Headshot.jpg?width=48&height=48&name=Shaan_Patel_Headshot.jpg',
  },
  {
    quote: "Something that I can tell you now probably because of Scribe and how great an experience it was for me, I am crazily thinking about writing a second book… if the process wasn't anything but great, that I would say I want to do this again.",
    name: 'John Schachnovsky',
    credential: 'Former FBI Legal Attaché',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/images/testimonials/JohnSchachnovsky_AuthorCentral_H.jpg?width=48&height=48&name=JohnSchachnovsky_AuthorCentral_H.jpg',
  },
  {
    quote: 'It was a pleasure working with you on this book project! I\'ve gotten everything I wanted out of this endeavor! Definitely ranks as a success in my book.',
    name: 'Sam Goodner',
    credential: 'Serial Entrepreneur, Founder of Catapult Systems',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/images/testimonials/SamGoodner_Headshot.jpg?width=48&height=48&name=SamGoodner_Headshot.jpg',
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

export default function ScribePR() {
  return (
    <>
      <div className="svc-detail">
        {/* Hero */}
        <div className="svc-detail__hero">
          <h1>Professional book publicity and PR services.</h1>
          <p className="svc-detail__subtitle">Get your book and your expertise in front of the right audiences with targeted media placements, podcast bookings, and comprehensive PR campaigns.</p>
          <div className="svc-detail__price">From $8,250</div>
          <div className="svc-detail__price-note">Multiple PR packages available</div>
          <a href="#" className="svc-detail__cta-btn">Schedule a Consult</a>
        </div>

        {/* What's Included */}
        <div className="svc-detail__section svc-detail__section--alt">
          <h2>What&apos;s Included</h2>
          <div className="svc-detail__features-grid">
            {packages.map((pkg, i) => (
              <div key={i} className="svc-detail__feature-card">
                <h3>{pkg.title}</h3>
                <p>{pkg.desc}</p>
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
          <a href="#" className="svc-detail__cta-btn">Schedule a Consult</a>
        </div>
      </div>

      {/* Testimonials */}
      <section className="svc-testimonials">
        <div className="svc-testimonials__inner">
          <div className="svc-testimonials__heading">
            <h2>What Our Authors Say</h2>
            <p>Hear from authors who brought their books to life with Scribe</p>
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
