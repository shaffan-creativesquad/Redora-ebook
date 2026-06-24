'use client'
import { useState } from 'react'

const features = [
  { title: 'Book Strategy', desc: "Define your book's core purpose, target audience, and competitive positioning." },
  { title: 'Content Planning', desc: "Develop a clear roadmap for your book's structure and key messages." },
]

const steps = [
  { n: 1, title: 'Meet Your Publishing Manager', desc: 'You are paired with a dedicated Publishing Manager who coordinates your calls, answers questions, and manages your engagement.' },
  { n: 2, title: 'Deep Dive Strategy Sessions', desc: "Two calls with your assigned Book Coach to define your book's core purpose, positioning, target audience, and author goals." },
  { n: 3, title: 'Build Your Book Roadmap', desc: 'Three calls to develop a professional table of contents, structural guidance, and a content map for what to include.' },
  { n: 4, title: 'Walk Away with Clarity', desc: 'You leave with a North Star document and a professionally structured roadmap for your book.' },
]

const goodFor = [
  'You have a book idea but need strategic clarity',
  "You want to maximize your book's impact",
  "You're planning before writing",
]

const notFor = [
  "You've already finished your book",
  "You don't want strategic planning",
]

const faqs = [
  { q: 'Can I use Compass before starting a Scribe program?', a: 'Yes, Compass is designed to be used before you begin writing, whether you plan to use a Scribe service or write independently.' },
  { q: 'Who is Scribe Compass best for?', a: 'Scribe Compass is for authors who want expert structure and strategy before committing to a full writing or publishing package.' },
  { q: 'What do I leave with at the end of Compass?', a: 'You leave with a clear North Star, a professional table of contents, and a practical chapter roadmap you can execute.' },
]

const relatedServices = [
  { name: 'Scribe Publishing', price: '$29,000', desc: 'You write the book, we handle publishing', href: '/services/publishing' },
  { name: 'Scribe Guided Author', price: '$44,000', desc: 'We guide your writing, then publish', href: '/services/guided-author' },
  { name: 'Scribe Professional', price: '$56,000', desc: 'We interview you, write, and publish', href: '/services/professional-book-writers' },
  { name: 'Scribe Elite', price: '$135,000+', desc: 'Premium customized ghostwriting', href: '/services/ghostwriting' },
]

const testimonials = [
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
    quote: "When you write a really good human book, people notice. People can tell that this is something different here. And people are going to crave that human touch more and more.",
    name: 'Shaan Patel',
    credential: 'CEO, Prep Expert',
    avatar: '/assets/shaan-patel.png',
  },
  {
    quote: "It was a pleasure working with you on this book project! I've gotten everything I wanted out of this endeavor! Definitely ranks as a success in my book.",
    name: 'Sam Goodner',
    credential: 'Serial Entrepreneur, Founder of Catapult Systems',
    avatar: '/assets/SamGoodner_Headshot.jpg',
  },
  {
    quote: "I don't have enough good words to say about my ghostwriter Mikey. She held my hand through the entire process. She's an angel.",
    name: 'Pavel Ythjall',
    credential: 'Fitness Photographer & Entrepreneur',
    avatar: '/assets/Pavel-Ythjal-541-296.jpg',
  },
  {
    quote: 'I expected the actual writing and publishing process to be really hard, but honestly, it was much easier than I thought it would be. They gave me hands-on guidance every step of the way, and I just followed the process.',
    name: 'Iona Holloway',
    credential: "Author & Women's Empowerment Coach",
    avatar: '/assets/Iona-Holloway-541-296.jpg',
  },
  {
    quote: "There's a real silo in publishing — there are voices that aren't heard that Scribe is allowing to be heard.",
    name: 'MyLinh Shattan',
    credential: 'Author, Raising Athena',
    avatar: '/assets/mylinh-shattan-headshot.png',
  },
  {
    quote: "The incredible praise we received from our industry colleagues for The Invisible Threat validates the effort and dedication we poured into the book. We couldn't have reached this milestone without the support of Scribe — especially Mark. A truly skilled professional.",
    name: 'Matthew Eby, Joanne Eby',
    credential: 'Co-Founders, Nth Degree Financial Solutions',
    avatar: '/assets/Eby-Headshots.jpg',
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

export default function ScribeCompass() {
  return (
    <>
      <div className="svc-detail">
        {/* Hero */}
        <div className="svc-detail__hero">
          <h1>Scribe Compass: Strategic book positioning and planning.</h1>
          <p className="svc-detail__subtitle">Before you write a word, Compass helps you define your book&apos;s strategy, positioning, audience, and path to success.</p>
          <div className="svc-detail__price">Contact for Pricing</div>
          <div className="svc-detail__price-note">Strategic planning service</div>
          <div className="svc-detail__timeline">Typical timeline: 4&ndash;6 weeks</div>
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

        {/* How It Works */}
        <div className="svc-detail__section">
          <h2>How It Works</h2>
          <p className="svc-detail__section-subtitle">5 coaching calls over 4&ndash;6 weeks</p>
          <div className="svc-detail__process">
            {steps.map(s => (
              <div key={s.n} className="svc-detail__step">
                <div className="svc-detail__step-num">{s.n}</div>
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
