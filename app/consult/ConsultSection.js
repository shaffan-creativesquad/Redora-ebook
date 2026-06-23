'use client'
import { useState } from 'react'

const panelCopy = {
  write: {
    eyebrow:  'Ghostwriting',
    heading:  "Let's talk about writing your book together",
    body:     "Book a free 15-minute strategy call. We'll learn about your idea, your voice, and your goals, then walk you through exactly how our ghostwriting process works.",
    products: [
      { name: 'Scribe Professional', price: '$4,667', unit: '/mo', note: '12 payments · $56K total' },
      { name: 'Scribe Elite',        price: '$9,000', unit: '/mo', note: '15 payments · $135K total' },
    ],
    bullets: [
      'Collaborative interview-based writing process',
      'Professional ghostwriter captures your voice and ideas',
      'Full editing, design, and cover art included',
      'Audiobook production included',
      'Published to 40,000+ retailers worldwide',
    ],
  },
  publish: {
    eyebrow:  'Publishing',
    heading:  "Let's get your manuscript published the right way",
    body:     "Book a free 15-minute strategy call. We'll review where your manuscript stands, walk through your publishing options, and help you choose the right path forward.",
    products: [
      { name: 'Scribe Publishing', price: '$4,833', unit: '/mo', note: '6 payments · $29K total' },
      { name: 'Guided Author',     price: '$2,933', unit: '/mo', note: '15 payments · $44K total' },
    ],
    bullets: [
      'Professional editing and cover design',
      'Full publishing and worldwide distribution',
      'Audiobook production included',
      'Up to 50,000 words',
      'Published under our Houndstooth Press imprint',
    ],
  },
}

const paths = [
  {
    key:   'write',
    icon:  'ph ph-pen-nib',
    label: 'Ghostwriting',
    title: 'I want experts to write my book for me.',
    desc:  'We interview you, capture your voice, and write the entire book. No typing required.',
  },
  {
    key:   'publish',
    icon:  'ph ph-book-open',
    label: 'Publishing',
    title: 'I want to write the book myself, with experts in my corner.',
    desc:  'Coaching, editing, design, and publishing for authors who want to write it themselves. From idea to finished manuscript, at any stage.',
  },
  {
    key:   'market',
    icon:  'ph ph-megaphone',
    label: 'Marketing & Audiobook',
    title: 'My book is out. I want it in more hands.',
    desc:  'Marketing campaigns and professional audiobook production to grow your reach and business impact.',
  },
]

export default function ConsultSection() {
  const [selected, setSelected] = useState(null)

  function reset() {
    setSelected(null)
    setTimeout(() => {
      document.querySelector('.cs-paths')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  function selectPath(key) {
    setSelected(key)
    setTimeout(() => {
      document.getElementById('cs-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const copy = selected && selected !== 'market' ? panelCopy[selected] : null

  return (
    <>
      {/* Path cards */}
      <div className="cs-paths">
        {paths.map(p => (
          <button
            key={p.key}
            className={`cs-path-card${selected === p.key ? ' is-selected' : ''}`}
            type="button"
            onClick={() => selectPath(p.key)}
            aria-pressed={selected === p.key}
          >
            <span className="cs-path-card__check" aria-hidden="true">✓</span>
            <div className="cs-path-card__icon"><i className={p.icon} /></div>
            <div className="cs-path-card__label">{p.label}</div>
            <div className="cs-path-card__title">{p.title}</div>
            <div className="cs-path-card__desc">{p.desc}</div>
            <div className="cs-path-card__cta">Select this path <i className="ph ph-arrow-right" /></div>
          </button>
        ))}
      </div>

      {/* Ghostwriting / Publishing panel */}
      <div id="cs-panel" className={`cs-panel${copy ? ' is-active' : ''}`}>
        {copy && (
          <>
            <div>
              <button type="button" className="cs-panel__back" onClick={reset}>← Change my selection</button>
              <p className="cs-panel__eyebrow">{copy.eyebrow}</p>
              <h2 className="cs-panel__heading">{copy.heading}</h2>
              <p className="cs-panel__body">{copy.body}</p>
              <ul className="cs-panel__benefits">
                {copy.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
              <div className="cs-panel__pricing">
                <span className="cs-panel__pricing-label">Investment</span>
                {copy.products.map(prod => (
                  <div key={prod.name} className="cs-panel__product">
                    <span className="cs-panel__product-name">{prod.name}</span>
                    <span className="cs-panel__product-price">
                      {prod.price}<span>{prod.unit}</span>
                    </span>
                    <span className="cs-panel__product-note">{prod.note}</span>
                  </div>
                ))}
                <a href="/pricing" className="cs-panel__pricing-link">See all packages →</a>
              </div>
              <div className="cs-social-proof">
                <span className="cs-social-proof__stars">★★★★★</span>
                <span>Trusted by 3,000+ published authors</span>
              </div>
            </div>

            <div>
              <div className="cs-form-box">
                <p className="cs-form-box__heading">Book your free strategy call</p>
                <p className="cs-form-box__sub">Fill out the form below and you&apos;ll be able to pick a time that works for you.</p>
                <div className="cs-form-placeholder">
                  Booking form will be configured soon.<br />
                  <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Contact us at <a href="mailto:privacy@scribemedia.com" style={{ color: '#e02d2d' }}>privacy@scribemedia.com</a> in the meantime.</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Marketing panel */}
      <div className={`cs-mkt-panel${selected === 'market' ? ' is-active' : ''}`}>
        <button type="button" className="cs-panel__back" onClick={reset}>← Change my selection</button>
        <h3>Reach more readers without starting from scratch</h3>
        <p>You&apos;ve already done the hard work of writing and publishing. We&apos;ll help you grow your book&apos;s reach through targeted marketing campaigns or turn your book into a professionally produced audiobook.</p>
        <div className="cs-mkt-chips">
          <span className="cs-mkt-chip">Book Marketing Campaigns</span>
          <span className="cs-mkt-chip">Audiobook Production</span>
          <span className="cs-mkt-chip">Amazon &amp; Retail Distribution</span>
          <span className="cs-mkt-chip">Speaking &amp; Media Strategy</span>
        </div>
        <div className="cs-form-placeholder">
          Marketing inquiry form will be configured soon.<br />
          <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Contact us at <a href="mailto:privacy@scribemedia.com" style={{ color: '#e02d2d' }}>privacy@scribemedia.com</a> in the meantime.</span>
        </div>
      </div>
    </>
  )
}
