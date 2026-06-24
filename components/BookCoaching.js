'use client'
import { useState } from 'react'

const features = [
  { title: 'North Star Sessions', desc: 'Define your core message, target audience, and book positioning to ensure your book achieves your goals.' },
  { title: 'Roadmap Development', desc: 'Build a detailed table of contents and chapter-by-chapter plan before you write a single word.' },
  { title: 'Writing Coaching Calls', desc: 'Regular check-ins with your coach to keep you on track, answer questions, and overcome challenges.' },
  { title: 'Manuscript Review', desc: 'Professional feedback on your manuscript to ensure quality, clarity, and impact throughout the writing process.' },
]

const goodFor = [
  'You want to write the book yourself',
  'You need structure and accountability',
  'You want expert feedback on your writing',
]

const notFor = [
  'You want someone else to write the book',
  "You're writing fiction",
]

const faqs = [
  { q: 'Is coaching available separately?', a: 'Book coaching is part of our Guided Author program, which includes coaching, community support, a full digital course, and publishing. It\'s designed as a complete system to help you write and publish your book.' },
  { q: 'How often are coaching sessions?', a: 'You receive multiple coaching sessions throughout the program, scheduled at key milestones in your writing journey. Your coach will work with you to set a cadence that keeps you on track.' },
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
    avatar: '/assets/shaan-patel.png',
  },
  {
    quote: "I can say with 100% honesty that it was great every step of the way. If it was just you and me, not on a podcast, and you said, 'Just tell me what we could have done better,' I'd say: I don't know. I can't think of anything.",
    name: 'Sarma Melngailis',
    credential: 'Former Owner, Pure Food and Wine',
    avatar: '/assets/sarma-mengailis.png',
  },
  {
    quote: "I always wanted to get back to that original level but without having to take the kind of pay cut that you do through a major publisher. And so that's when I found Scribe — the perfect match between self-publishing but still getting that professional level of publication.",
    name: 'Shaan Patel',
    credential: 'CEO, Prep Expert',
    avatar: '/assets/shaan-patel.png',
  },
  {
    quote: 'As soon as I made the commitment to publish this book with Scribe and go through you guys and just see it through, as soon as that contract was signed, everything else opened up.',
    name: 'Adam Skolnick',
    credential: "Co-Author of Can't Hurt Me, NYT Contributor",
    avatar: '/assets/AdamSkolnick_Headshot.jpg',
  },
  {
    quote: 'The amount that we spent on the Scribe project has generated a 10x plus return ever since, if not 20x.',
    name: 'Shaan Patel',
    credential: 'CEO, Prep Expert',
    avatar: '/assets/shaan-patel.png',
  },
  {
    quote: "I wasn't a 'writer.' Scribe turned years of workshops into a clear book—and the book turned into credibility, revenue, and relationships I couldn't have reached any other way.",
    name: 'Rich Kurtzman',
    credential: 'Founder & CEO, Barcelona SAE',
    avatar: '/assets/RichKurtzman_Headshot.jpg',
  },
  {
    quote: "Something that I can tell you now probably because of Scribe and how great an experience it was for me, I am crazily thinking about writing a second book… there's no way, if the process wasn't anything but great, that I would say I want to do this again.",
    name: 'John Schachnovsky',
    credential: 'Former FBI Legal Attaché',
    avatar: '/assets/JohnSchachnovsky_AuthorCentral_H.jpg',
  },
  {
    quote: "You really have to think about authorship in a decade's game, not a year's game. I'm in my second decade. I'm sure the third decade will be even better because you've built a great reputation over time.",
    name: 'Shaan Patel',
    credential: 'CEO, Prep Expert',
    avatar: '/assets/shaan-patel.png',
  },
  {
    quote: "It has really been a pleasure to work with you. The process is smooth, and the result is outstanding. I'll definitely recommend you to anyone who seeks to publish a book.",
    name: 'Yuzheng Sun',
    credential: 'Staff Data Scientist, Statsig',
    avatar: '/assets/Yuzheng-Sun_AuthorCentral_Headsh.png',
  },
  {
    quote: "It was a pleasure working with you on this book project! I've gotten everything I wanted out of this endeavor! Definitely ranks as a success in my book.",
    name: 'Sam Goodner',
    credential: 'Serial Entrepreneur, Founder of Catapult Systems',
    avatar: '/assets/SamGoodner_Headshot.jpg',
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

export default function BookCoaching() {
  return (
    <>
      <div className="svc-detail">
        {/* Hero */}
        <div className="svc-detail__hero">
          <h1>Expert book coaching to guide your writing journey.</h1>
          <p className="svc-detail__subtitle">Get the structure, accountability, and expert feedback you need to write a great book — in your own voice, on your own timeline.</p>
          <div className="svc-detail__price">Included in Guided Author</div>
          <div className="svc-detail__price-note">$44,000 for the full Guided Author program</div>
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
