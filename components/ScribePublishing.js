'use client'
import { useState } from 'react'

const features = [
  { title: 'Manuscript Evaluation', desc: 'Full manuscript evaluation by our Executive Editor, who provides a detailed editing plan.' },
  { title: 'Quality Assurance', desc: 'Professional copyediting and proofreading.' },
  { title: 'Book Design', desc: 'Professional cover design, interior layout, author photo, and up to 25 graphics included.' },
  { title: 'Publishing & Distribution', desc: 'eBook, paperback, and hardcover formats. Distribution through Amazon, Barnes & Noble, and all major retailers.' },
  { title: 'Marketing & Launch', desc: 'Amazon strategy, social media assets, email campaign templates, Goodreads giveaway, and media opportunities. 50 free copies included.' },
  { title: 'Audiobook Included', desc: 'Your professionally produced audiobook, recorded and distributed on Audible, Amazon, Apple Books, and Spotify.', link: true },
]

const steps = [
  { num: 1, title: 'Welcome Call', desc: 'Meet your Publishing Manager and align on timeline and expectations.' },
  { num: 2, title: 'Manuscript Evaluation', desc: 'Professional review of your completed manuscript.' },
  { num: 3, title: 'Begin Publishing', desc: 'Gather all elements needed for your book.' },
  { num: 4, title: 'Cover Design', desc: 'Collaborative cover development with our creative team.' },
  { num: 5, title: 'Quality Assurance', desc: 'Professional copyediting and proofreading.' },
  { num: 6, title: 'Interior Layout', desc: 'Professional interior design and formatting.' },
  { num: 7, title: 'Publishing & Distribution', desc: 'Final files prepared and distributed to all retail channels.' },
]

const goodFor = [
  'You have a finished manuscript',
  "You're writing nonfiction",
  'You prioritize professional quality',
  'You want full distribution to major retailers',
]

const notFor = [
  "You're writing fiction",
  "You're writing a cookbook or children's book",
  'You want a quick, cheap option',
]

const faqs = [
  { q: 'Do I own the rights to my book?', a: 'Yes, you own the copyright and all print and reproduction rights.' },
  { q: 'Do I keep the profits?', a: 'Yes, you receive 100% of royalties from all book sales.' },
  { q: 'Who is the publisher?', a: 'Your book is published under Lioncrest Publishing or Houndstooth Press, or you can create a custom imprint.' },
  { q: 'Will my book be in bookstores?', a: 'Your book will be in the Ingram database and available for order at any bookstore. Physical shelf placement typically requires 25,000+ sales.' },
  { q: 'Is this self-publishing?', a: 'No, this is professional hybrid publishing. You retain all rights while getting the quality and support of a traditional publisher.' },
]

const audiobookItems = [
  { title: 'Narrator Matching', desc: "Tell us who your narrator is—the voice you hear when you imagine your book being read to millions of people. We're networked with thousands of narrators and we'll find one that fits your voice and has experience in your industry. If you choose to narrate yourself, we'll personally prepare you for the process, ensuring you give the best performance possible for your book." },
  { title: 'Recording & Post-Production', desc: 'A director sits in throughout the reading to make sure narration is hitting its marks, pronunciation is accurate, and the pacing is good. Each audiobook goes through a detailed post-production process handled by 2 engineers: an editor & mastering engineer, and a quality control & spot check engineer.' },
  { title: 'Distribution on 50+ Platforms', desc: 'Your audiobook is distributed on over 50 platforms including Audible, Amazon, Apple Books, Apple Music, and Spotify. Sales from all platforms are tracked in one easy-to-use dashboard. You maintain full ownership and keep royalties from all audiobook sales.' },
]

const relatedServices = [
  { name: 'Scribe Guided Author', price: '$44,000', desc: 'We guide your writing, then publish', href: '/services/guided-author' },
  { name: 'Scribe Professional', price: '$56,000', desc: 'We interview you, write, and publish', href: '/services/professional-book-writers' },
  { name: 'Scribe Elite', price: '$135,000+', desc: 'Premium customized ghostwriting', href: '/services/ghostwriting' },
]

const testimonials = [
  {
    quote: "When you write a really good human book, people notice. People can tell that this is something different here. And people are going to crave that human touch more and more. The more you can personalize and humanize things, it's actually a great differentiator in increasingly AI-competitive markets.",
    name: 'Shaan Patel',
    credential: 'CEO, Prep Expert',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/author-headshots/Shaan_Patel_Headshot.jpg?width=48&height=48&name=Shaan_Patel_Headshot.jpg',
  },
  {
    quote: "It was a pleasure working with you on this book project! I've gotten everything I wanted out of this endeavor! Definitely ranks as a success in my book.",
    name: 'Sam Goodner',
    credential: 'Serial Entrepreneur, Founder of Catapult Systems',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/images/testimonials/RichKurtzman_Headshot.jpg?width=48&height=48&name=RichKurtzman_Headshot.jpg',
  },
  {
    quote: "I don't have enough good words to say about my ghostwriter Mikey. She held my hand through the entire process. She's an angel.",
    name: 'Pavel Ythjall',
    credential: 'Fitness Photographer & Entrepreneur',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/images/testimonials/AdamSkolnick_Headshot.jpg?width=48&height=48&name=AdamSkolnick_Headshot.jpg',
  },
  {
    quote: "I expected the actual writing and publishing process to be really hard, but honestly, it was much easier than I thought it would be. They gave me hands-on guidance every step of the way, and I just followed the process.",
    name: 'Iona Holloway',
    credential: 'Author & Women\'s Empowerment Coach',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/images/testimonials/Yuzheng-Sun_AuthorCentral_Headsh.jpg?width=48&height=48&name=Yuzheng-Sun_AuthorCentral_Headsh.jpg',
  },
  {
    quote: "There's a real silo in publishing for, there are voices that aren't heard that Scribe is allowing to be heard.",
    name: 'MyLinh Shattan',
    credential: 'Author, Raising Athena',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/images/testimonials/JohnSchachnovsky_AuthorCentral_H.jpg?width=48&height=48&name=JohnSchachnovsky_AuthorCentral_H.jpg',
  },
  {
    quote: "The incredible praise we received from our industry colleagues for The Invisible Threat validates the effort and dedication we poured into the book. We couldn't have reached this milestone without the support of Scribe — especially Mark. He has been fantastic to work with. A truly skilled professional.",
    name: 'Matthew Eby, Joanne Eby',
    credential: 'Co-Founders, Nth Degree Financial Solutions',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/author-headshots/Shaan_Patel_Headshot.jpg?width=48&height=48&name=Shaan_Patel_Headshot.jpg',
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

export default function ScribePublishing() {
  return (
    <>
      <div className="svc-detail">
        {/* Hero */}
        <div className="svc-detail__hero">
          <h1>Book publishing services. It&apos;s not just a book. It&apos;s your legacy.</h1>
          <p className="svc-detail__subtitle">Scribe Publishing is the premier professional book publishing service for entrepreneurs, consultants, and executives with completed manuscripts.</p>
          <div className="svc-detail__price">$29,000</div>
          <div className="svc-detail__price-note">Paid over 6 months</div>
          <div className="svc-detail__timeline">Typical timeline: ~7 months</div>
          <a href="#" className="svc-detail__cta-btn">Schedule a Consult</a>
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
        <div className="svc-detail__section" style={{ paddingTop: '2rem', background: '#13182d', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)', marginTop: '-5rem' }}>
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
