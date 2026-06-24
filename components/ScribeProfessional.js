'use client'
import { useState } from 'react'

const features = [
  { title: 'Completed Book Manuscript', desc: 'We validate your idea, structure your book, and conduct comprehensive interviews to capture your expertise in your authentic voice.' },
  { title: 'Published Book', desc: 'Professional cover and interior design, full publishing coordination including ISBN and metadata. Hardcover, paperback, and eBook formats included.' },
  { title: 'Distribution', desc: 'Major retailer distribution (Amazon, Barnes & Noble, iBooks). Printing services with unlimited reorder capability. You keep 100% of royalties.' },
  { title: 'Launch & Promotion', desc: "Amazon Best Seller strategy, social media graphics, email templates, Goodreads giveaway coordination, and media opportunities through Scribe's network." },
  { title: 'Audiobook Included', desc: 'Your professionally produced audiobook, recorded and distributed on Audible, Amazon, Apple Books, and Spotify.', link: true },
]

const steps = [
  { num: 1, title: 'Book Strategy Consult', desc: 'Validation call with an Author Strategist covering your idea, target audience, and book objectives.' },
  { num: 2, title: 'Assemble Publishing Team', desc: 'Meet your Publishing Manager who coordinates creative team assembly and Scribe writer selection.' },
  { num: 3, title: 'North Star and Roadmap', desc: 'Refinement of your North Star, Table of Contents, and chapter-by-chapter Roadmap.' },
  { num: 4, title: 'Roadmap', desc: 'Table of Contents and interview guide development.' },
  { num: 5, title: 'Interviews', desc: '10 interview calls (90–120 minutes each) capturing your content via natural conversation.' },
  { num: 6, title: 'First Pages', desc: 'Sample chapter written to establish voice and tone for your approval.' },
  { num: 7, title: 'Manuscript Revisions', desc: 'Full manuscript review with multiple rounds of author feedback.' },
  { num: 8, title: 'Book Design', desc: 'Cover and interior layout development with creative director collaboration.' },
  { num: 9, title: 'Publishing & Distribution', desc: 'Retail channel coordination and file preparation for all formats.' },
  { num: 10, title: 'Launch and Promotion', desc: 'Pre-release and launch-week marketing campaign execution.' },
]

const goodFor = [
  "You're writing a nonfiction book",
  'You want to share impactful knowledge or expertise',
  "You're too busy to write it yourself",
  'You care about professional quality',
  'You want a book in your authentic voice',
]

const notFor = [
  'You want to write fiction',
  "You don't have a clear purpose for your book",
  "You're unconcerned with quality",
  'You prefer to write the book yourself',
]

const faqs = [
  { q: 'Am I the author? Is the book in my voice?', a: 'Yes, you are the sole author. All content comes from your interviews and expertise. The book is written in your voice and reflects your ideas.' },
  { q: 'How is this different from ghostwriting?', a: 'Unlike traditional ghostwriting, all content originates directly from you through interviews. Your Scribe captures your authentic voice rather than inventing content.' },
  { q: 'How do you select my Scribe writer?', a: 'We match you with a writer based on your subject matter, writing style preferences, and personality. You can interview up to three candidates.' },
  { q: 'Can I incorporate existing writing?', a: 'Yes. We can incorporate existing writing such as blog posts, articles, and notes when it strengthens the manuscript and aligns with your book strategy.' },
  { q: 'How long will the book be?', a: 'Most business books are around 150 pages, but final length depends on your goals, audience, and content. You decide the target length with guidance from your Scribe team.' },
  { q: 'Do I have control over the cover design?', a: 'Absolutely. You have full creative approval over your cover and interior design.' },
]

const audiobookItems = [
  { title: 'Narrator Matching', desc: "Tell us who your narrator is—the voice you hear when you imagine your book being read to millions of people. We're networked with thousands of narrators and we'll find one that fits your voice and has experience in your industry. If you choose to narrate yourself, we'll personally prepare you for the process, ensuring you give the best performance possible for your book." },
  { title: 'Recording & Post-Production', desc: 'A director sits in throughout the reading to make sure narration is hitting its marks, pronunciation is accurate, and the pacing is good. Each audiobook goes through a detailed post-production process handled by 2 engineers: an editor & mastering engineer, and a quality control & spot check engineer.' },
  { title: 'Distribution on 50+ Platforms', desc: 'Your audiobook is distributed on over 50 platforms including Audible, Amazon, Apple Books, Apple Music, and Spotify. Sales from all platforms are tracked in one easy-to-use dashboard. You maintain full ownership and keep royalties from all audiobook sales.' },
]

const relatedServices = [
  { name: 'Scribe Publishing', price: '$29,000', desc: 'You write the book, we handle publishing', href: '/services/publishing' },
  { name: 'Scribe Guided Author', price: '$44,000', desc: 'We guide your writing, then publish', href: '/services/guided-author' },
  { name: 'Scribe Elite', price: '$135,000+', desc: 'Premium customized ghostwriting', href: '/services/ghostwriting' },
]

const testimonials = [
  {
    quote: 'A book is one of the most powerful lead generators for businesses out there.',
    name: 'Shaan Patel',
    credential: 'Shark Tank veteran · CEO, Prep Expert',
    avatar: '../assets/shaan-patel.png',
  },
  {
    quote: "I can say with 100% honesty that it was great every step of the way. If it was just you and me, not on a podcast, and you said, 'Just tell me what we could have done better,' I'd say: I don't know. I can't think of anything.",
    name: 'Sarma Melngailis',
    credential: 'Former Owner, Pure Food and Wine',
    avatar: '../assets/sarma-mengailis.png'  },
  {
    quote: "I always wanted to get back to that original level [of McGraw Hill quality] but without having to take the kind of pay cut that you do through a major publisher. And so that's when I found Scribe. And it was kind of the perfect match between self-publishing but still getting that professional level of publication.",
    name: 'Shaan Patel',
    credential: 'CEO, Prep Expert',
    avatar: '../assets/shaan-patel.png',
  },
  {
    quote: 'As soon as I made the commitment to publish this book with Scribe and go through you guys and just see it through, as soon as that contract was signed, everything else opened up.',
    name: 'Adam Skolnick',
    credential: "Co-Author of Can't Hurt Me, NYT Contributor",
    avatar: '../assets/AdamSkolnick_Headshot.png',
  },
  {
    quote: "[The Scribe team] made it happen, putting the book together in such a short time frame and then making all of that come to life in such an amazing and professional way, that we can compete with the Princeton Reviews and the Kaplans and the juggernauts in our space without having to go through a major publisher and still keep all that ROI for ourselves.",
    name: 'Shaan Patel',
    credential: 'CEO, Prep Expert',
    avatar: '../assets/shaan-patel.png',
  },
  {
    quote: "I wasn't a 'writer.' Scribe turned years of workshops into a clear book—and the book turned into credibility, revenue, and relationships I couldn't have reached any other way.",
    name: 'Rich Kurtzman',
    credential: 'Founder & CEO, Barcelona SAE',
    avatar: '../assets/RichKurtzman_Headshot.jpg',
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

export default function ScribeProfessional() {
  return (
    <>
      <div className="svc-detail">
        {/* Hero */}
        <div className="svc-detail__hero">
          <h1>How professionals write and publish their books.</h1>
          <p className="svc-detail__subtitle">Scribe Professional is for entrepreneurs, consultants, and executives who want a professionally published book in their words and in their voice, but don&apos;t have time to write it themselves.</p>
          <div className="svc-detail__price">$56,000</div>
          <div className="svc-detail__price-note">Paid over 12 months</div>
          <div className="svc-detail__timeline">Typical timeline: 10–12 months</div>
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
