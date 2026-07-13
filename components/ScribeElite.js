'use client'
import { useState } from 'react'

const features = [
  { title: 'Bestselling Writer', desc: 'Your book is written by a vetted writer from our elite roster of experienced professionals.' },
  { title: 'Fully Customized Process', desc: 'Every aspect of the process is tailored to your schedule, preferences, and vision. We integrate seamlessly into your life.' },
  { title: 'Premium Publishing', desc: 'Top-tier cover design, interior layout, and full publishing coordination across all formats and retailers.' },
  { title: 'Complete Launch Package', desc: "Comprehensive marketing, PR, and launch strategy to maximize your book's impact and reach." },
  { title: 'Audiobook Included', desc: 'Your professionally produced audiobook, recorded and distributed on Audible, Amazon, Apple Books, and Spotify.', link: true },
]

const steps = [
  { num: 1, title: 'Committing to Your Legacy', desc: 'Initial consultation to understand your vision, goals, and what makes your story unique.' },
  { num: 2, title: 'Galvanize Your Message', desc: 'Content extraction through in-depth conversations, removing all stress from the process.' },
  { num: 3, title: 'Crafting the Perfect Asset', desc: 'Professional writing, editing, and design to create a book that reflects your excellence.' },
  { num: 4, title: 'Transcendent Evolution', desc: "Launch and post-publication positioning to maximize your book's impact." },
]

const goodFor = [
  'You want the absolute best quality',
  'You need complete flexibility in scheduling',
  "You're a high-profile executive or thought leader",
  'Your story deserves a bestselling writer',
]

const notFor = [
  'You want to write the book yourself',
  "You're looking for the most affordable option",
  "You're writing fiction",
]

const faqs = [
  { q: 'How is this different from Readora Professional?', a: 'Elite provides a fully customized experience with bestselling writers, premium service, and complete flexibility. Every aspect is tailored to you.' },
  { q: 'Am I still the author?', a: 'Yes, you are the sole author. All content derives from your interviews and expertise.' },
  { q: 'How do you select my ghostwriter?', a: 'We match you with a writer based on your subject, style, and personality so your book stays authentic to your voice.' },
  { q: 'Can a book really boost my career?', a: 'A professionally published book is one of the most powerful authority-building tools available. It opens doors to speaking, media, and business opportunities.' },
]

const audiobookItems = [
  { title: 'Narrator Matching', desc: "Tell us who your narrator is—the voice you hear when you imagine your book being read to millions of people. We're networked with thousands of narrators and we'll find one that fits your voice and has experience in your industry. If you choose to narrate yourself, we'll personally prepare you for the process, ensuring you give the best performance possible for your book." },
  { title: 'Recording & Post-Production', desc: 'A director sits in throughout the reading to make sure narration is hitting its marks, pronunciation is accurate, and the pacing is good. Each audiobook goes through a detailed post-production process handled by 2 engineers: an editor & mastering engineer, and a quality control & spot check engineer.' },
  { title: 'Distribution on 50+ Platforms', desc: 'Your audiobook is distributed on over 50 platforms including Audible, Amazon, Apple Books, Apple Music, and Spotify. Sales from all platforms are tracked in one easy-to-use dashboard. You maintain full ownership and keep royalties from all audiobook sales.' },
]

const relatedServices = [
  { name: 'Readora Publishing', price: '$29,000', desc: 'You write the book, we handle publishing', href: '/services/publishing' },
  { name: 'Readora Guided Author', price: '$44,000', desc: 'We guide your writing, then publish', href: '/services/guided-author' },
  { name: 'Readora Professional', price: '$56,000', desc: 'We interview you, write, and publish', href: '/services/professional-book-writers' },
]

const testimonials = [
  {
    quote: "I always wanted to get back to that original level [of McGraw Hill quality] but without having to take the kind of pay cut that you do through a major publisher. And so that's when I found Readora. And it was kind of the perfect match between self-publishing but still getting that professional level of publication.",
    name: 'Shaan Patel',
    credential: 'CEO, Prep Expert',
    avatar: '/assets/shaan-patel.png',
  },
  {
    quote: 'As soon as I made the commitment to publish this book with Readora and go through you guys and just see it through, as soon as that contract was signed, everything else opened up.',
    name: 'Adam Skolnick',
    credential: "Co-Author of Can't Hurt Me, NYT Contributor",
    avatar: '/assets/AdamSkolnick_Headshot.png',
  },
  {
    quote: "I wasn't a 'writer.' Readora turned years of workshops into a clear book—and the book turned into credibility, revenue, and relationships I couldn't have reached any other way.",
    name: 'Rich Kurtzman',
    credential: 'Founder & CEO, Barcelona SAE',
    avatar: '/assets/RichKurtzman_Headshot.jpg',
  },
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
    quote: "It has really been a pleasure to work with you. The process is smooth, and the result is outstanding. I'll definitely recommend you to anyone who seeks to publish a book.",
    name: 'Yuzheng Sun',
    credential: 'Staff Data Scientist, Statsig',
    avatar: '/assets/Yuzheng-Sun_AuthorCentral_Headsh.png',
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

export default function ReadoraElite() {
  return (
    <>
      <div className="svc-detail">
        {/* Hero */}
        <div className="svc-detail__hero">
          <h1>Readora Elite is the premier professional ghostwriting experience.</h1>
          <p className="svc-detail__subtitle">For executives and thought leaders who want the absolute best. Your book is written by a bestselling writer with a fully customized process designed around your life.</p>
          <div className="svc-detail__price">$135,000+</div>
          <div className="svc-detail__price-note">Custom pricing based on project scope</div>
          <div className="svc-detail__timeline">Timeline varies by project scope</div>
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
