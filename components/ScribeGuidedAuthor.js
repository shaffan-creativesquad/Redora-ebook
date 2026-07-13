'use client'
import { useState } from 'react'

const features = [
  { title: 'North Star & Book Roadmap', desc: 'Strategy calls with your Book Coach to define your book\'s direction, audience, and structure.' },
  { title: 'Book Coaching Sessions', desc: 'Three coaching sessions during writing plus a final manuscript review to keep you on track.' },
  { title: 'Full Digital Course', desc: 'Comprehensive writing course covering everything from positioning through publication.' },
  { title: 'Full Manuscript Edit', desc: 'Professional structural editing by an experienced editor.' },
  { title: 'Publishing & Distribution', desc: 'Cover design, interior layout, all formats (hardcover, paperback, eBook), and major retailer distribution.' },
  { title: 'Launch & Promotion', desc: 'Amazon strategy, social media assets, email templates, Goodreads campaigns, and media opportunities.' },
  { title: 'Audiobook Included', desc: 'Your professionally produced audiobook, recorded and distributed on Audible, Amazon, Apple Books, and Spotify.', link: true },
]

const steps = [
  { num: 1, title: 'Book Strategy Consult', desc: 'Initial assessment with Author Strategist to validate your book idea and clarify objectives.' },
  { num: 2, title: 'Assemble Your Team', desc: 'Meet your Publishing Manager who coordinates your creative team.' },
  { num: 3, title: 'Digital Course', desc: 'Self-paced course covering positioning, outlining, writing, and editing.' },
  { num: 4, title: 'Book Coaching Sessions', desc: 'Refinement of your North Star, Table of Contents, and chapter-by-chapter Roadmap.' },
  { num: 5, title: 'Write Your Book', desc: 'Manuscript development with check-in calls and feedback.' },
  { num: 6, title: 'Manuscript Review', desc: 'Full manuscript review with Book Coach before professional evaluation, structural editing, copyediting, and proofreading.' },
  { num: 7, title: 'Design & Publishing', desc: 'Professional cover, interior layout, and full publishing services.' },
  { num: 8, title: 'Launch & Promotion', desc: 'Marketing campaign, social graphics, email strategy, and review coordination.' },
]

const goodFor = [
  'You want to write the book yourself',
  'You need guidance and accountability',
  "You're writing nonfiction or memoir",
  'You want professional editing and publishing',
]

const notFor = [
  'You want someone else to write your book',
  "You're writing fiction",
  "You're writing a children's book or cookbook",
]

const faqs = [
  { q: 'Is editing included?', a: 'Yes, your book receives a full structural edit by an experienced editor.' },
  { q: 'Is publishing included?', a: 'Yes, complete publishing services are provided including design, formatting, and distribution.' },
  { q: 'How long does the process take?', a: 'You can publish in as few as 9 months. The 15-month payment plan gives you flexibility.' },
  { q: 'What if I get stuck writing?', a: 'You have access to your Book Coach, the digital course, and your Publishing Manager for support.' },
]

const audiobookItems = [
  { title: 'Narrator Matching', desc: "Tell us who your narrator is—the voice you hear when you imagine your book being read to millions of people. We're networked with thousands of narrators and we'll find one that fits your voice and has experience in your industry. If you choose to narrate yourself, we'll personally prepare you for the process, ensuring you give the best performance possible for your book." },
  { title: 'Recording & Post-Production', desc: 'A director sits in throughout the reading to make sure narration is hitting its marks, pronunciation is accurate, and the pacing is good. Each audiobook goes through a detailed post-production process handled by 2 engineers: an editor & mastering engineer, and a quality control & spot check engineer.' },
  { title: 'Distribution on 50+ Platforms', desc: 'Your audiobook is distributed on over 50 platforms including Audible, Amazon, Apple Books, Apple Music, and Spotify. Sales from all platforms are tracked in one easy-to-use dashboard. You maintain full ownership and keep royalties from all audiobook sales.' },
]

const relatedServices = [
  { name: 'Readora Publishing', price: '$29,000', desc: 'You write the book, we handle publishing', href: '/services/publishing' },
  { name: 'Readora Professional', price: '$56,000', desc: 'We interview you, write, and publish', href: '/services/professional-book-writers' },
  { name: 'Readora Elite', price: '$135,000+', desc: 'Premium customized ghostwriting', href: '/services/ghostwriting' },
]

const testimonials = [
  {
    quote: 'The amount that we spent on the Readora project has generated a 10x plus return ever since, if not 20x.',
    name: 'Shaan Patel',
    credential: 'CEO, Prep Expert',
    avatar: '/assets/shaan-patel.png',
  },
  {
    quote: "Something that I can tell you now probably because of Readora and how great an experience it was for me, I am crazily thinking about writing a second book… that is, if I can give a testament to Readora, there's no way, if the process wasn't anything but great, that I would say I want to do this again.",
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
    quote: "It has really been a pleasure to work with you. The process is smooth, and the result is outstanding. I'll definitely recommend you to anyone who seeks to publish a book. Hope our path come across again in the future.",
    name: 'Yuzheng Sun',
    credential: 'Staff Data Scientist, Statsig',
    avatar: '/assets/Yuzheng-Sun_AuthorCentral_Headsh.png',
  },
  {
    quote: "When you write a really good human book, people notice. People can tell that this is something different here. And people are going to crave that human touch more and more. The more you can personalize and humanize things, it's actually a great differentiator in increasingly AI-competitive markets.",
    name: 'Shaan Patel',
    credential: 'CEO, Prep Expert',
    avatar: '/assets/shaan-patel.png',
  },
  {
    quote: "It was a pleasure working with you on this book project! I've gotten everything I wanted out of this endeavor! Definitely ranks as a success in my book.",
    name: 'Sam Goodner',
    credential: 'Serial Entrepreneur, Founder of Catapult Systems',
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

export default function ReadoraGuidedAuthor() {
  return (
    <>
      <div className="svc-detail">
        {/* Hero */}
        <div className="svc-detail__hero">
          <h1>Ready to write your book, but need guidance and accountability?</h1>
          <p className="svc-detail__subtitle">The Guided Author Program is led by the same book coaches and editorial team who have helped produce 23 New York Times and Wall Street Journal bestsellers.</p>
          <div className="svc-detail__price">$44,000</div>
          <div className="svc-detail__price-note">Paid over 15 months</div>
          <div className="svc-detail__timeline">Typical timeline: 9–15 months</div>
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
                {f.link && <a href="#audiobook-section" className="svc-detail__audiobook-link">See full details below ↓</a>}
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

        {/* Audiobook */}
        <div className="svc-detail__section" id="audiobook-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="svc-detail__audiobook-section">
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
        </div>

        {/* Related Services */}
        <div className="svc-detail__section" style={{ paddingTop: '2rem', background: '#161616', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)', marginTop: '-5rem' }}>
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
