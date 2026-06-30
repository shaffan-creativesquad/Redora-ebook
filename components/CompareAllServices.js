'use client'
import { useState } from 'react'

const included = [
  { icon: '🎨', title: 'Cover Design', desc: 'Our designers are quite literally some of the best in the world. Minimum 3-5 original proofs with up to 5 rounds of revisions.' },
  { icon: '📖', title: 'Interior Layout and Design', desc: 'Your manuscript isn\'t just a drag and drop template. It\'s a chance to create a cohesive visual experience for your reader, from the cover to the final page.' },
  { icon: '✏️', title: 'Proofreading', desc: 'Professional copyediting and proofreading to ensure every word is clean, polished, and meets industry standards.' },
  { icon: '📚', title: 'All Book Formats Included', desc: 'E-book, paperback, hardcover, and audiobook. Your book available in every format readers want, plus 50 paperback or 25 hardcover copies delivered to you.' },
  { icon: '🌎', title: 'Global Distribution', desc: 'Distribution on every major online platform: Amazon, Audible, Kindle, Barnes & Noble, Apple Books, Kobo, Google Play, and more. Plus, all accounts are in your name.' },
  { icon: '🎤', title: 'Audiobook Production', desc: 'Your professionally produced audiobook, recorded and distributed on over 50 platforms including Audible, Amazon, Apple Books, and Spotify.' },
  { icon: '📝', title: 'Author Marketing Materials', desc: 'Our copywriting pros craft an engaging author bio and book description to ensure your book is interesting and appealing to your ideal readers.' },
  { icon: '🚀', title: 'Launch Week Support', desc: 'Amazon Best Seller campaign, custom social media graphics, email templates, Goodreads giveaway, Amazon A+ content, and local media outreach — all included.' },
  { icon: '©️', title: 'Copyright & Cataloging', desc: 'Your manuscript registered with the United States copyright office, Bowker\'s Books In Print database, and assigned all ISBN and BISAC codes for retail distribution.' },
  { icon: '👑', title: 'Full Ownership', desc: 'You own all of your content and royalties. We set up all distributor and retailer accounts in your name. 100% creative control, 100% of royalties.' },
  { icon: '🏷️', title: 'Publishing Imprint', desc: 'Your book published under one of Scribe\'s premier imprints, Lioncrest or Houndstooth, or under a custom imprint of your own brand and choosing.' },
  { icon: '📸', title: 'Author Photo', desc: 'A great author photo is a powerful tool. We can recommend a professional photographer, or use your existing professional photos.' },
]

const quizSteps = [
  {
    id: 'step1',
    progress: [true, false, false],
    question: 'Do you already have a completed manuscript?',
    options: [
      { label: 'Yes, my manuscript is ready', next: 'result-pub' },
      { label: 'No, I still need to create my book', next: 'step2' },
    ],
    back: null,
  },
  {
    id: 'step2',
    progress: [true, true, false],
    question: 'Would you rather write the book yourself, or have us write it for you?',
    options: [
      { label: 'I want to write it myself with coaching', next: 'result-ga' },
      { label: 'I want Scribe to write it for me', next: 'step3' },
    ],
    back: 'step1',
  },
  {
    id: 'step3',
    progress: [true, true, true],
    question: 'What level of service are you looking for?',
    options: [
      { label: 'Our flagship experience', next: 'result-pro' },
      { label: 'The most premium, fully bespoke', next: 'result-elite' },
    ],
    back: 'step2',
  },
]

const quizResults = {
  'result-pub': {
    label: 'We recommend',
    featured: false,
    name: 'Scribe Publishing',
    price: '$29,000',
    desc: 'You bring the finished book. We professionally edit, design, publish, and distribute it. A fully managed, end-to-end publishing experience. Paid over 6 months.',
    back: 'step1',
  },
  'result-ga': {
    label: 'We recommend',
    featured: false,
    name: 'Scribe Guided Author',
    price: '$44,000',
    desc: 'We coach you through writing your book with 10 dedicated Book Coach calls, a structured framework, and a peer community. Then we edit, design, publish, and distribute. Paid over 15 months.',
    back: 'step2',
  },
  'result-pro': {
    label: 'We recommend',
    featured: true,
    badge: 'Most popular',
    name: 'Scribe Professional',
    price: '$56,000',
    desc: 'We interview you over a series of calls, capture your ideas and voice, then write the entire book for you. You review drafts and give feedback. We handle everything else. Paid over 12 months.',
    back: 'step3',
  },
  'result-elite': {
    label: 'We recommend',
    featured: false,
    name: 'Scribe Elite',
    price: '$135,000+',
    desc: 'Work with one of our most elite and experienced ghostwriters, who interviews you, conducts outside research, references multiple sources, and helps create the highest-quality book possible. Flexible payment plan.',
    back: 'step3',
  },
}

function Quiz() {
  const [current, setCurrent] = useState('step1')

  const step = quizSteps.find(s => s.id === current)
  const result = quizResults[current]

  return (
    <div className="sv2-quiz">
      <h2>Not sure which is right for you?</h2>
      <p className="sv2-quiz-sub">Answer a few quick questions and we'll point you in the right direction.</p>
      <div className="sv2-quiz-box">
        {step && (
          <div className="sv2-quiz-step active">
            <div className="sv2-quiz-progress">
              {step.progress.map((filled, i) => (
                <span key={i} className={`sv2-quiz-dot${filled ? (i === step.progress.lastIndexOf(true) ? ' active' : ' completed') : ''}`} />
              ))}
            </div>
            <div className="sv2-quiz-q">{step.question}</div>
            <div className="sv2-quiz-options">
              {step.options.map((opt, i) => (
                <button key={i} className="sv2-quiz-btn" onClick={() => setCurrent(opt.next)}>{opt.label}</button>
              ))}
            </div>
            {step.back && <button className="sv2-quiz-back" onClick={() => setCurrent(step.back)}>← Back</button>}
          </div>
        )}
        {result && (
          <div className="sv2-quiz-step active">
            <div className="sv2-quiz-result-label">{result.label}</div>
            <div className={`sv2-quiz-result${result.featured ? ' sv2-quiz-result--featured' : ''}`}>
              {result.badge && <div className="sv2-badge" style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>{result.badge}</div>}
              <h3>{result.name}</h3>
              <div className="sv2-quiz-result-price">{result.price}</div>
              <p>{result.desc}</p>
              <div className="sv2-quiz-result-btns">
                <a href="/services/publishing" className="sv2-quiz-link">Learn more</a>
                <a href="/consult" className="sv2-cta-btn">Schedule a consult</a>
              </div>
            </div>
            <button className="sv2-quiz-back" onClick={() => setCurrent(result.back)}>← Back</button>
            <button className="sv2-quiz-restart" onClick={() => setCurrent('step1')}>Start over</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function CompareAllServices() {
  const [panel, setPanel] = useState('write')

  return (
    <div className="sv2">
      <h1 className="sv2-heading font-playfair">Two ways to create your book</h1>
      <p className="sv2-intro">Every path includes professional editing, cover design, interior layout, audiobook, publishing, distribution, full ownership, and 100% of royalties.</p>

      {/* Toggle */}
      <div className="sv2-toggle-wrap">
        <div className="sv2-toggle">
          <button className={`sv2-toggle-btn${panel === 'write' ? ' active' : ''}`} onClick={() => setPanel('write')}>We write your book</button>
          <button className={`sv2-toggle-btn${panel === 'you' ? ' active' : ''}`} onClick={() => setPanel('you')}>You write your book</button>
        </div>
      </div>

      {/* Panel: We write */}
      <div className={`sv2-panel${panel === 'write' ? ' active' : ''}`}>
        <div className="sv2-cards">
          <div className="sv2-card sv2-card--featured">
            <div className="sv2-badge">Most popular</div>
            <div className="sv2-card-label">Our flagship service</div>
            <h3>Scribe Professional</h3>
            <p>We interview you over a series of calls, capture your ideas and voice, then write the entire book for you. You review drafts and give feedback. We handle everything else.</p>
            <div className="sv2-price">$56,000</div>
            <div className="sv2-price-note">Paid over 12 months</div>
            <div className="sv2-time-box">
              <div className="sv2-time-label">Why authors choose this</div>
              <div className="sv2-time-value">80% of our authors choose this — you talk, we write every word.</div>
            </div>
            <a href="/services/professional-book-writers" className="sv2-card-link">Learn more about Professional →</a>
          </div>
          <div className="sv2-card">
            <div className="sv2-card-label">The premium experience</div>
            <h3>Scribe Elite</h3>
            <p>Work with one of our most elite and experienced ghostwriters, who interviews you, conducts outside research, references multiple sources, and helps create the highest-quality book possible.</p>
            <div className="sv2-price">$135,000+</div>
            <div className="sv2-price-note">Flexible payment plan</div>
            <div className="sv2-time-box">
              <div className="sv2-time-label">What sets Elite apart</div>
              <div className="sv2-time-value">Our most tenured scribes + $25K marketing budget included.</div>
            </div>
            <a href="/services/ghostwriting" className="sv2-card-link">Learn more about Elite →</a>
          </div>
        </div>
      </div>

      {/* Panel: You write */}
      <div className={`sv2-panel${panel === 'you' ? ' active' : ''}`}>
        <div className="sv2-cards">
          <div className="sv2-card sv2-card--featured">
            <div className="sv2-badge">Coaching + Publishing</div>
            <div className="sv2-card-label">Write it yourself with expert support</div>
            <h3>Scribe Guided Author</h3>
            <p>We coach you through writing your book with 10 dedicated Book Coach calls, a structured framework, and a peer community. Then we edit, design, publish, and distribute.</p>
            <div className="sv2-price">$44,000</div>
            <div className="sv2-price-note">Paid over 15 months</div>
            <div className="sv2-time-box">
              <div className="sv2-time-label">You'll never write alone</div>
              <div className="sv2-time-value">10 dedicated coaching sessions + private writing community.</div>
            </div>
            <a href="/services/guided-author" className="sv2-card-link">Learn more about Guided Author →</a>
          </div>
          <div className="sv2-card">
            <div className="sv2-card-label">Already have a manuscript?</div>
            <h3>Scribe Publishing</h3>
            <p>You bring the finished book. We professionally edit, design, publish, and distribute it. A fully managed, end-to-end publishing experience.</p>
            <div className="sv2-price">$29,000</div>
            <div className="sv2-price-note">Paid over 6 months</div>
            <div className="sv2-time-box">
              <div className="sv2-time-label">Already have a manuscript?</div>
              <div className="sv2-time-value">You've written it. We handle everything else.</div>
            </div>
            <a href="/services/publishing" className="sv2-card-link">Learn more about Publishing →</a>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="sv2-table-section">
        <h2>Compare at a glance</h2>
        <div style={{ overflowX: 'auto' }}>
          <table className="sv2-table">
            <thead>
              <tr>
                <th></th>
                <th>Publishing<br/>$29K</th>
                <th>Guided Author<br/>$44K</th>
                <th className="sv2-hl">Professional<br/>$56K</th>
                <th>Elite<br/>$135K+</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Who writes the book?</td><td>You</td><td>You, with coaching</td><td className="sv2-hl-col">Scribe, from your interviews</td><td>Elite scribe, from your interviews</td></tr>
              <tr><td>Author time required</td><td>1-3 hrs/week (30-50 hrs total)</td><td>2-6 hrs/week (varies)</td><td className="sv2-hl-col">2-4 hrs/week (60-100 hrs total)</td><td>2-4 hrs/week (80-120 hrs total)</td></tr>
              <tr><td>Project length</td><td>6-7 months</td><td>12-18 months</td><td className="sv2-hl-col">9-12 months</td><td>9-12 months</td></tr>
              <tr><td>Content editing</td><td>Optional add-on</td><td>3 editing passes</td><td className="sv2-hl-col">Ongoing</td><td>Ongoing</td></tr>
              <tr><td>Writing coaching</td><td>—</td><td>10 Book Coach calls + course access</td><td className="sv2-hl-col">—</td><td>—</td></tr>
              <tr><td>Interview-based writing</td><td>—</td><td>—</td><td className="sv2-hl-col">Yes</td><td>Yes + outside sources</td></tr>
              <tr><td>Payment timeline</td><td>6 months</td><td>15 months</td><td className="sv2-hl-col">12 months</td><td>Flexible</td></tr>
            </tbody>
          </table>
        </div>

        {/* Included in every package */}
        <div className="sv2-all-included">
          <h2>Included in every package</h2>
          <p className="sv2-all-intro">No matter which path you choose, you get the same world-class publishing experience.</p>
          <div className="sv2-inc-grid">
            {included.map((item, i) => (
              <div key={i} className="sv2-inc-card">
                <div className="sv2-inc-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quiz */}
      <Quiz />

      {/* CTA */}
      <div className="sv2-cta">
        <h2>Still undecided?</h2>
        <p>Our author strategists can help you choose the right path in a free consultation.</p>
        <a href="/consult" className="sv2-cta-btn">Schedule a consult</a>
      </div>
    </div>
  )
}
