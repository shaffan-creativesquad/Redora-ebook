'use client'
import { useState } from 'react'

const features = [
  { title: 'Narrator Matching', desc: "Tell us the voice you hear when you imagine your book being read. We're networked with thousands of narrators and will find the perfect match. If you choose to narrate yourself, we'll prepare and coach you through the process." },
  { title: 'Professional Recording', desc: 'Studio-quality recording with professional direction and engineering at partner studios in Los Angeles, New York, and nationwide.' },
  { title: 'Post-Production', desc: "Full editing, mastering, and quality control to meet Audible's standards. Your audiobook will sound polished and professional from start to finish." },
  { title: 'Distribution & Royalties', desc: 'Your audiobook distributed on Audible, Amazon, iTunes, Spotify, and more. You maintain full ownership and keep royalties from all sales.' },
]

const steps = [
  { num: 1, title: 'Consultation', desc: "Discuss your audiobook goals, narrator preferences, and timeline. We'll share curated narration samples so you can hear our quality firsthand." },
  { num: 2, title: 'Narrator Selection', desc: "Tell us exactly what that voice sounds like. Whether it's a deep, authoritative tone or an energetic, conversational style, we'll find the narrator who matches your vision." },
  { num: 3, title: 'Recording', desc: 'Professional studio recording with expert direction. A professional narrator typically records at a 2:1 ratio—2 hours of recording for every 1 hour of finished audio.' },
  { num: 4, title: 'Post-Production', desc: 'Editing, mastering, and quality assurance to meet industry standards. This process typically takes 1–2 weeks based on the length of your book.' },
  { num: 5, title: 'Distribution', desc: 'Upload and distribute across all major audiobook platforms. Your audiobook goes live on Audible, Amazon, iTunes, Spotify, and more.' },
]

const goodFor = [
  'You have a completed book ready for audio',
  'You want professional production quality on Audible and all major platforms',
  'You want narrator matching or self-narration coaching',
  'You want to retain full ownership and royalties',
]

const notFor = [
  "You don't have a completed book yet",
  'You want to record and produce it entirely on your own at home',
  'You need it done in under 2 months',
]

const faqs = [
  { q: 'How do I estimate how long my audiobook will be?', a: 'Divide your word count by 9,000 to estimate your final runtime. For example, a typical 50,000-word manuscript (about 200 pages) will be roughly 5.5 hours of finished audio.' },
  { q: 'How long does it take to fully produce an audiobook?', a: 'Typical audiobook production takes 3–4 months from signing your agreement to going live on all platforms.' },
  { q: 'How long does it take to record an audiobook?', a: 'A professional narrator records at close to a 2:1 ratio—for every 2 hours of recording, 1 hour of finished audio is produced. Authors or newer narrators typically record at a 3:1 ratio, which extends the recording time.' },
  { q: 'Do I need to narrate the audiobook myself?', a: "No. We're networked with thousands of professional narrators and will find one that fits the voice you envision for your book. If you do choose to narrate yourself, we'll coach and prepare you for the process at one of our partner studios." },
  { q: "I'm going to narrate my audiobook. How do I prepare?", a: "Long-form narration takes practice. We'll personally prepare you for the recording process to ensure you give the best performance possible. Our team will guide you on pacing, tone, and delivery before you step into the studio." },
  { q: 'Where will my audiobook be available?', a: 'Your audiobook will be distributed on Audible, Amazon, iTunes, Spotify, and other major platforms worldwide.' },
  { q: 'Do I keep my royalties?', a: 'Yes. You maintain full ownership and keep royalties from all audiobook sales. If distributed through ACX/Audible, the author receives 40% of net sales. Amazon and Audible set the retail price based on your audiobook\'s length.' },
]

const relatedServices = [
  { name: 'Scribe Publishing', price: '$29,000', desc: 'You write the book, we handle publishing', href: '/services/publishing' },
  { name: 'Scribe Guided Author', price: '$44,000', desc: 'We guide your writing, then publish', href: '/services/guided-author' },
  { name: 'Scribe Professional', price: '$56,000', desc: 'We interview you, write, and publish', href: '/services/professional-book-writers' },
  { name: 'Scribe Elite', price: '$135,000+', desc: 'Premium customized ghostwriting', href: '/services/ghostwriting' },
]

const testimonials = [
  {
    quote: "I don't have enough good words to say about my ghostwriter Mikey. She held my hand through the entire process. She's an angel.",
    name: 'Pavel Ythjall',
    credential: 'Fitness Photographer & Entrepreneur',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/images/testimonials/AdamSkolnick_Headshot.jpg?width=48&height=48&name=AdamSkolnick_Headshot.jpg',
  },
  {
    quote: "I expected the actual writing and publishing process to be really hard, but honestly, it was much easier than I thought it would be. They gave me hands-on guidance every step of the way, and I just followed the process.",
    name: 'Iona Holloway',
    credential: "Author & Women's Empowerment Coach",
    avatar: 'https://scribemedia.com/hs-fs/hubfs/images/testimonials/JohnSchachnovsky_AuthorCentral_H.jpg?width=48&height=48&name=JohnSchachnovsky_AuthorCentral_H.jpg',
  },
  {
    quote: "There's a real silo in publishing for, there are voices that aren't heard that Scribe is allowing to be heard.",
    name: 'MyLinh Shattan',
    credential: 'Author, Raising Athena',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/images/testimonials/RichKurtzman_Headshot.jpg?width=48&height=48&name=RichKurtzman_Headshot.jpg',
  },
  {
    quote: "The incredible praise we received from our industry colleagues for The Invisible Threat validates the effort and dedication we poured into the book. We couldn't have reached this milestone without the support of Scribe — especially Mark. He has been fantastic to work with. A truly skilled professional.",
    name: 'Matthew Eby, Joanne Eby',
    credential: 'Co-Founders, Nth Degree Financial Solutions',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/author-headshots/Shaan_Patel_Headshot.jpg?width=48&height=48&name=Shaan_Patel_Headshot.jpg',
  },
  {
    quote: "[The editor] at Scribe just reads a gazillion books. He said, we're all dying to know who this Cara is. So one of the last, probably the last two rewrites, I developed her character.",
    name: 'MyLinh Shattan',
    credential: 'Author, Raising Athena',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/images/testimonials/RichKurtzman_Headshot.jpg?width=48&height=48&name=RichKurtzman_Headshot.jpg',
  },
  {
    quote: "Writing that book and working with [Scribe] is one of the best decisions I have ever made. There have been doors opened and connections formed I would have never had imagined.",
    name: 'Linden Loren',
    credential: 'Co-Founder, Camo & Wind',
    avatar: 'https://scribemedia.com/hs-fs/hubfs/images/testimonials/Yuzheng-Sun_AuthorCentral_Headsh.jpg?width=48&height=48&name=Yuzheng-Sun_AuthorCentral_Headsh.jpg',
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

export default function ScribeAudiobook() {
  return (
    <>
      <div className="svc-detail">
        {/* Hero */}
        <div className="svc-detail__hero">
          <h1>Give your book a voice.</h1>
          <p className="svc-detail__subtitle">Professional audiobook recording, production, and distribution across Audible, Amazon, iTunes, and Spotify.</p>
          <div className="svc-detail__price">Starting at $8,000</div>
          <div className="svc-detail__price-note">Custom quoted for your project.</div>
          <div className="svc-detail__timeline">Typical timeline: 3–4 months</div>
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

      {/* Hear Our Quality */}
      <section className="svc-audio-samples">
        <div className="svc-audio-samples__inner">
          <h2>Hear Our Quality</h2>
          <p>We share curated narration samples during your consult so we can match voice, tone, and delivery to your book goals.</p>
          <a href="#" className="svc-audio-samples__cta">Schedule a Consult to Hear Samples</a>
        </div>
      </section>

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
