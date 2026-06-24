'use client'
import { useState } from 'react'

const features = [
  { title: 'Customized Process', desc: 'Every aspect of the writing and publishing process is tailored to your unique requirements.' },
  { title: 'Dedicated Team', desc: 'A hand-picked team of writing, editing, and design professionals committed to your project.' },
  { title: 'Full Publishing Suite', desc: 'Complete publishing, distribution, and marketing services included.' },
  { title: 'Flexible Timeline', desc: 'We work around your schedule to deliver your book when you need it.' },
  { title: 'Audiobook Included', desc: 'Your professionally produced audiobook, recorded and distributed on Audible, Amazon, Apple Books, and Spotify.' },
]

const steps = [
  { n: 1, title: 'Strategic Kickoff', desc: 'Start with a high-touch strategy session to define goals, positioning, audience, and the success criteria for your book project.' },
  { n: 2, title: 'Collaborative Development', desc: 'Work with your dedicated Scribe team to shape structure, capture source material, and develop a manuscript aligned to your voice.' },
  { n: 3, title: 'Premium Editorial and Production', desc: 'Your manuscript moves through editorial refinement, design direction, and publishing preparation with white-glove project management.' },
  { n: 4, title: 'Launch and Ongoing Support', desc: 'Finalize publishing and launch execution with coordinated guidance across visibility, messaging, and next-phase author strategy.' },
]

const goodFor = [
  'You need a customized approach',
  'You have specific requirements or timeline constraints',
  'You want premium, personalized service',
]

const notFor = [
  "You're looking for a standard package",
  "You're writing fiction",
]

const faqs = [
  { q: 'How does pricing work?', a: 'Scribe Signature is priced based on your specific project requirements. Schedule a consult to discuss your needs.' },
  { q: 'What makes Signature different?', a: 'Signature offers complete flexibility and customization that goes beyond our standard service packages.' },
]

const audiobookItems = [
  { title: 'Narrator Matching', desc: "Tell us who your narrator is — the voice you hear when you imagine your book being read to millions of people. We're networked with thousands of narrators and we'll find one that fits your voice and has experience in your industry. If you choose to narrate yourself, we'll personally prepare you for the process." },
  { title: 'Recording & Post-Production', desc: 'A director sits in throughout the reading to make sure narration is hitting its marks, pronunciation is accurate, and the pacing is good. Each audiobook goes through a detailed post-production process handled by 2 engineers: an editor & mastering engineer, and a quality control & spot check engineer.' },
  { title: 'Distribution on 50+ Platforms', desc: 'Your audiobook is distributed on over 50 platforms including Audible, Amazon, Apple Books, Apple Music, and Spotify. Sales from all platforms are tracked in one easy-to-use dashboard. You maintain full ownership and keep royalties from all audiobook sales.' },
]

const relatedServices = [
  { name: 'Scribe Publishing', price: '$29,000', desc: 'You write the book, we handle publishing', href: '/services/publishing' },
  { name: 'Scribe Guided Author', price: '$44,000', desc: 'We guide your writing, then publish', href: '/services/guided-author' },
  { name: 'Scribe Professional', price: '$56,000', desc: 'We interview you, write, and publish', href: '/services/professional-book-writers' },
  { name: 'Scribe Elite', price: '$135,000+', desc: 'Premium customized ghostwriting', href: '/services/ghostwriting' },
]

const testimonials = [
  {
    quote: '[The Scribe team] made it happen, putting the book together in such a short time frame and then making all of that come to life in such an amazing and professional way, that we can compete with the Princeton Reviews and the Kaplans and the juggernauts in our space without having to go through a major publisher and still keep all that ROI for ourselves.',
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
    quote: 'The amount that we spent on the Scribe project has generated a 10x plus return ever since, if not 20x.',
    name: 'Shaan Patel',
    credential: 'CEO, Prep Expert',
    avatar: '/assets/shaan-patel.png',
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
  {
    quote: "I don't have enough good words to say about my ghostwriter Mikey. She held my hand through the entire process. She's an angel.",
    name: 'Pavel Ythjall',
    credential: 'Fitness Photographer & Entrepreneur',
    avatar: '/assets/Pavel-Ythjal-541-296.jpg',
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

export default function ScribeSignature() {
  return (
    <>
      <div className="svc-detail">
        {/* Hero */}
        <div className="svc-detail__hero">
          <h1>Scribe Signature: Your book, your way.</h1>
          <p className="svc-detail__subtitle">A premium, customized book writing and publishing experience designed around your specific needs, timeline, and vision.</p>
          <div className="svc-detail__price">Custom Pricing</div>
          <div className="svc-detail__price-note">Contact us for a personalized quote</div>
          <div className="svc-detail__timeline">Typical timeline: 12&ndash;18 months</div>
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

        {/* Audiobook Section */}
        <div className="svc-detail__section svc-detail__audiobook-section" id="audiobook-section">
          <div className="svc-detail__audiobook-badge">Included</div>
          <h2>Your Audiobook, Produced &amp; Distributed</h2>
          <p className="svc-detail__audiobook-lead">Audiobooks are one of the fastest growing areas of publishing. Your audiobook gives your audience another dynamic way to interact with your content, connecting you with busy professionals, commuters, and multitaskers who prefer to consume content on the go.</p>
          <div className="svc-detail__audiobook-grid">
            {audiobookItems.map((item, i) => (
              <div key={i} className="svc-detail__audiobook-item">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="svc-detail__audiobook-callout">
            <p>Over 45% of readers prefer audiobooks to physical books. Without an audio version, you may never reach them.</p>
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
