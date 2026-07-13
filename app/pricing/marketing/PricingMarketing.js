'use client'
import { useState } from 'react'
import '../configurator.css'

const API_BASE = 'https://e-book-nine-mu.vercel.app'
const TIER = 'NSA - Marketing'

const SERVICES = {
  'opt-expanded':      { name: 'Expanded Readership Package',  displayName: 'Expanded Readership',       price: 3000 },
  'opt-spotlight':     { name: 'Author Spotlight Package',     displayName: 'Author Spotlight',           price: 3500 },
  'opt-netgalley':     { name: 'NetGalley (standalone)',       displayName: 'NetGalley Campaign',         price: 1500 },
  'opt-podcast':       { name: 'Podcast PR Campaign',          displayName: 'Podcast PR Campaign',        price: 8250,
    terms: '<h4>Podcast PR Terms</h4><p>Your Podcast PR campaign includes: a 3-month blueprint with an audience-focused strategy, story angles, and timelines; a custom media kit for podcast outreach and interviews; research to build a database of podcast producers aligned with your goals; targeted outreach to top podcasts in your niche; seamless scheduling and management of podcast appearances; bi-weekly reporting on outreach progress; and monthly invoicing.</p><p><strong>Cancellation:</strong> Your first payment of $2,750.00 is due before we begin work. No refunds shall be given, but cancellation is permissible at any time. There are no guarantees in the amount of coverage received.</p>' },
  'opt-pr':            { name: 'PR Campaign',                  displayName: 'PR Campaign',                price: 12000,
    terms: '<h4>PR Campaign Terms</h4><p>Your PR campaign includes: a 3-month media and public relations outreach blueprint, media kit creation, research and outreach to appropriate media contacts, facilitation and coordination of media opportunities, follow-ups to outreach contacts, bi-weekly reporting, and monthly invoicing.</p><p><strong>Cancellation:</strong> Your first payment of $4,000.00 is due before we begin work. No refunds shall be given, but cancellation is permissible at any time. There are no guarantees in the amount of coverage received.</p>' },
  'opt-publicity':     { name: 'Publicity Campaign (6 months)', displayName: 'Publicity Campaign (6 months)', price: 24000,
    terms: '<h4>Publicity Service Terms</h4><p>In partnership with Shift6 Studios and their proprietary Media Intelligence (MI) software, we access the best PR and SEO tools in combination with decades of PR talent. We will design a publicity plan that places your message in front of your target audiences over six months. This service includes an average of 4–8 media opportunities brought to you per month. While we cannot guarantee coverage, we do expect an average of 2–4 of these opportunities to go live per month.</p><p><strong>Cancellation:</strong> 50% of the service must be paid to begin work. This deposit is non-refundable.</p>' },
  'opt-amazon-ads':    { name: 'Advanced Amazon Ads (ShelfLife)', displayName: 'Amazon Advertising',      price: 10000 },
  'opt-ads':           { name: 'Online Advertising',            displayName: 'Online Advertising',        price: 1300,
    terms: '<h4>Online Advertising Terms</h4><p>Ingram iD is an advertising platform that gives publishers and authors access to targeted audiences of readers. In the two weeks following your launch, we will run customized Google Search, Instagram, and Facebook ads for your book, connected to your Amazon listing to track conversion from clicks to sales.</p>' },
  'opt-video':         { name: 'Custom Video Content',          displayName: 'Professional Video Content', price: 12000,
    terms: '<h4>Custom Video Content Terms</h4><p>Includes one full-day, on-site video shoot; 50 short-form vertical videos; pre-production strategy, scripting, and content planning; post-production editing, captioning, and formatting for Instagram Reels, TikTok, YouTube Shorts, and LinkedIn. One round of revisions included. You retain full ownership and usage rights to all final edited video content.</p><p><strong>Cancellation:</strong> 50% of the service must be paid to begin work. This deposit is non-refundable and covers scripting, planning, and pre-production.</p>' },
  'opt-landing':       { name: 'Landing Page & Email Campaign', displayName: 'Landing Page & Email Campaign', price: 5000,
    terms: '<h4>Landing Page &amp; Email Campaign Terms</h4><p>We will create a customized landing page based on your book design, integrate a lead magnet, and build an 8-email campaign that engages readers leading up to and during your launch. Includes 5 automated emails: announcement, inside look, launch date, day of launch, and post-launch.</p>' },
  'opt-authors-unite': { name: 'Authors Unite',                 displayName: 'Authors Unite Campaign',    price: 35000 },
}

const CATEGORIES = [
  { label: 'Readership & Reviews', ids: ['opt-expanded', 'opt-spotlight', 'opt-netgalley'] },
  { label: 'Visibility & Media',   ids: ['opt-podcast', 'opt-pr', 'opt-publicity'] },
  { label: 'Growth & Advertising', ids: ['opt-amazon-ads', 'opt-ads'] },
  { label: 'Content & Branding',   ids: ['opt-video', 'opt-landing'] },
  { label: 'Premium',              ids: ['opt-authors-unite'] },
]

export default function PricingMarketing() {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState(new Set())
  const [sign, setSign] = useState({ name: '', email: '', phone: '', address: '', city: '', state: '', zip: '', sig: '', agreeTerms: false, agreePayment: false, agreeElectronic: false })
  const [quoteEmail, setQuoteEmail] = useState('')
  const [quoteStatus, setQuoteStatus] = useState({ text: '', color: '#8a9bc2' })
  const [payLoading, setPayLoading] = useState(false)
  const [signTimestamp] = useState(() => new Date().toLocaleString())

  const selectedList = [...selected].map(id => SERVICES[id]).filter(Boolean)
  const total = selectedList.reduce((s, x) => s + x.price, 0)
  const totalStr = '$' + total.toLocaleString()

  function toggle(id) {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function goTo(n) {
    setStep(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const setS = k => e => setSign(p => ({ ...p, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))
  const signValid = sign.name && sign.email && sign.address && sign.city && sign.state && sign.zip && sign.sig && sign.agreeTerms && sign.agreePayment && sign.agreeElectronic && sign.sig.toLowerCase() === sign.name.toLowerCase()

  async function emailQuote() {
    if (!quoteEmail || !quoteEmail.includes('@')) {
      setQuoteStatus({ text: 'Please enter a valid email address.', color: '#f87171' })
      return
    }
    setQuoteStatus({ text: 'Sending...', color: '#8a9bc2' })
    try {
      const r = await fetch(API_BASE + '/api/email-quote', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: quoteEmail, tier: TIER, totalAmount: total, monthlyPayment: total, numMonths: 1, addons: selectedList, basePrice: 0 }),
      })
      const d = await r.json()
      setQuoteStatus(d.success ? { text: 'Quote sent! Check your inbox.', color: '#4ade80' } : { text: d.error || 'Something went wrong.', color: '#f87171' })
    } catch {
      setQuoteStatus({ text: 'Network error. Please try again.', color: '#f87171' })
    }
  }

  async function startCheckout() {
    setPayLoading(true)
    try {
      const r = await fetch(API_BASE + '/api/create-checkout', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier: TIER, addons: selectedList, totalAmount: total, monthlyPayment: total, numMonths: 1, authorName: sign.name, email: sign.email, phone: sign.phone, address: sign.address, city: sign.city, state: sign.state, zip: sign.zip, agreementSignature: sign.sig, agreementTimestamp: new Date().toISOString(), agreementIP: '' }),
      })
      const d = await r.json()
      if (d.url) window.location.href = d.url
      else alert(d.error || 'Something went wrong. Please try again.')
    } catch {
      alert('Network error. Please try again.')
    }
    setPayLoading(false)
  }

  const stepLabel = s => step > s ? 'is-done' : step === s ? 'is-active' : ''

  return (
    <div className="pub-page">
      {/* Progress */}
      <div className="pub-progress">
        {['Configure', 'Agreement', 'Sign', 'Pay'].flatMap((label, i) => {
          const items = []
          if (i > 0) items.push(<div key={`line-${i}`} className="pub-progress__line" />)
          items.push(
            <div key={label} className={`pub-progress__step ${stepLabel(i + 1)}`}>
              <span className="pub-progress__num">{step > i + 1 ? '✓' : i + 1}</span>
              <span>{label}</span>
            </div>
          )
          return items
        })}
      </div>

      <div className="pub-layout">
        {/* ── MAIN ── */}
        <div className="pub-main">

          {/* STEP 1: Configure */}
          <div className={`pub-section ${step === 1 ? 'is-visible' : ''}`}>
            <div className="pub-hero">
              <div className="pub-hero__badge">Standalone Service for Published Authors</div>
              <h1 className="pub-hero__title">Book Marketing Services</h1>
              <p className="pub-hero__subtitle">Maximize your book&apos;s reach, credibility, and impact with professional marketing services. Select any combination of services below.</p>
              <p className="pub-hero__note">This is a standalone service. You will not be assigned a Readora Publishing Manager. Work is fulfilled by our vetted production partners.</p>
            </div>

            <div className="pub-review-warning">
              <strong>Order Review</strong>
              Your order is subject to review. We will confirm all details within 1 business day and approve your order. If we are unable to fulfill your order, you will receive a full refund.
            </div>

            {CATEGORIES.map(cat => (
              <div key={cat.label} className="pub-config-card">
                <h3>{cat.label}</h3>
                {cat.ids.map(id => {
                  const svc = SERVICES[id]
                  const checked = selected.has(id)
                  return (
                    <div key={id} className={`pub-addon-card${checked ? ' is-selected' : ''}`} onClick={() => toggle(id)}>
                      <input type="checkbox" checked={checked} readOnly />
                      <div className="pub-addon-card__body">
                        <div className="pub-addon-card__top">
                          <div className="pub-addon-card__name">{svc.name}</div>
                          <div className="pub-addon-card__price">${svc.price.toLocaleString()}</div>
                        </div>
                        <div className="pub-addon-card__desc">{svc.displayName}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}

            <div className="pub-step-nav" style={{ borderTop: 'none', paddingTop: 0, marginTop: 24 }}>
              <a href="/pricing" className="pub-btn pub-btn--outline">← All Services</a>
              <button className={`pub-btn pub-btn--gold ${selectedList.length === 0 ? 'pub-btn--disabled' : ''}`} onClick={() => goTo(2)}>
                Review Agreement →
              </button>
            </div>
          </div>

          {/* STEP 2: Agreement */}
          <div className={`pub-section ${step === 2 ? 'is-visible' : ''}`}>
            <div className="pub-card">
              <h2>Your Agreement</h2>
              <p style={{ color: '#8a9bc2', fontSize: 13, margin: '4px 0 16px' }}>Please review the full agreement below. Scroll to read all sections.</p>
              <div className="pub-agreement">
                <h4>Marketing Services Agreement</h4>
                <p>This agreement is intentionally written in plain English. The purpose is simple: you are hiring us, Readora, to provide professional marketing services for your published book.</p>

                <h4>What You Are Purchasing</h4>
                <p>You have selected the following marketing services:</p>
                <ul>
                  {selectedList.length === 0
                    ? <li style={{ color: '#8a9bc2', fontStyle: 'italic' }}>No services selected yet.</li>
                    : selectedList.map(s => <li key={s.name}>{s.displayName} — ${s.price.toLocaleString()}</li>)
                  }
                </ul>

                <h4>Timeline</h4>
                <p>Each marketing service has its own timeline. Most services begin within 2–4 weeks of signing.</p>

                <h4>What We Will Do for You</h4>
                <p>We will coordinate the delivery of your selected marketing services through our vetted production partners.</p>

                <h4>Important Terms</h4>
                <p><strong>Order Review:</strong> Your order is subject to review within 1 business day. Full refund if we cannot fulfill your order.</p>
                <p><strong>Published Book Required:</strong> You must have a published book available for purchase.</p>
                <p><strong>No Hidden Costs:</strong> We will never do additional work that costs you money without first getting your explicit approval.</p>
                <p><strong>Pricing Expiration:</strong> The price you commit to is good for 3 months.</p>

                <h4>Legal Terms</h4>
                <p><strong>Intellectual Property:</strong> You retain full ownership of your book content.</p>
                <p><strong>Cancellation:</strong> If either party decides to part ways before services begin, we will refund your payment minus any costs already incurred. Once work has begun, refunds will be prorated based on work completed.</p>
                <p><strong>The Sunset Clause:</strong> If you are non-responsive for 12 months or more, we have the right to cancel the project and retain payment.</p>

                <h4>Your Investment</h4>
                <p>Full payment of <span className="dynamic-field">{totalStr}</span> is due at signing. There is a 3% processing fee for all credit card payments.</p>
                <table style={{ width: '100%', borderCollapse: 'collapse', margin: '16px 0' }}>
                  <tbody>
                    {selectedList.map(s => (
                      <tr key={s.name} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                        <td style={{ padding: '10px 0', color: '#c6d1ea' }}>{s.displayName}</td>
                        <td style={{ padding: '10px 0', textAlign: 'right', color: '#fff', fontWeight: 600 }}>${s.price.toLocaleString()}</td>
                      </tr>
                    ))}
                    <tr style={{ borderTop: '2px solid #c6a87c' }}>
                      <td style={{ padding: '12px 0', fontWeight: 700, fontSize: 16 }}>Total</td>
                      <td style={{ padding: '12px 0', textAlign: 'right', fontWeight: 700, fontSize: 16, color: '#c6a87c' }}>{totalStr}</td>
                    </tr>
                  </tbody>
                </table>
                {selectedList.filter(s => s.terms).map(s => (
                  <div key={s.name} dangerouslySetInnerHTML={{ __html: s.terms }} />
                ))}
              </div>
              <div className="pub-step-nav">
                <button className="pub-btn pub-btn--outline" onClick={() => goTo(1)}>← Back to Configure</button>
                <button className="pub-btn pub-btn--gold" onClick={() => goTo(3)}>Sign Agreement →</button>
              </div>
            </div>
          </div>

          {/* STEP 3: Sign */}
          <div className={`pub-section ${step === 3 ? 'is-visible' : ''}`}>
            <div className="pub-card">
              <h2>Sign Your Agreement</h2>
              <p style={{ color: '#8a9bc2', fontSize: 13, margin: '4px 0 20px' }}>Complete the fields below and type your full legal name to sign.</p>

              <div className="pub-sign-field">
                <label>Full Legal Name</label>
                <input type="text" value={sign.name} onChange={setS('name')} placeholder="Your full name as it appears on legal documents" />
              </div>
              <div className="pub-sign-field">
                <label>Email Address</label>
                <input type="email" value={sign.email} onChange={setS('email')} placeholder="your@email.com" />
              </div>
              <div className="pub-sign-field">
                <label>Phone Number</label>
                <input type="tel" value={sign.phone} onChange={setS('phone')} placeholder="(555) 555-5555" />
              </div>
              <div className="pub-sign-field">
                <label>Mailing Address</label>
                <input type="text" value={sign.address} onChange={setS('address')} placeholder="Street address" />
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <div className="pub-sign-field" style={{ flex: 2 }}>
                  <label>City</label>
                  <input type="text" value={sign.city} onChange={setS('city')} placeholder="City" />
                </div>
                <div className="pub-sign-field" style={{ flex: 1 }}>
                  <label>State</label>
                  <input type="text" value={sign.state} onChange={setS('state')} placeholder="State" />
                </div>
                <div className="pub-sign-field" style={{ flex: 1 }}>
                  <label>Zip Code</label>
                  <input type="text" value={sign.zip} onChange={setS('zip')} placeholder="Zip" />
                </div>
              </div>

              <label className="pub-sign-checkbox">
                <input type="checkbox" checked={sign.agreeTerms} onChange={setS('agreeTerms')} />
                I have read and agree to the terms of this agreement
              </label>
              <label className="pub-sign-checkbox">
                <input type="checkbox" checked={sign.agreePayment} onChange={setS('agreePayment')} />
                I agree to the full payment amount shown in the summary
              </label>
              <label className="pub-sign-checkbox">
                <input type="checkbox" checked={sign.agreeElectronic} onChange={setS('agreeElectronic')} />
                I consent to conduct this transaction electronically
              </label>

              <div className="pub-signature-box">
                <input type="text" value={sign.sig} onChange={setS('sig')} placeholder="Type your full legal name" />
                <div className="hint">Type your full legal name exactly as entered above to sign</div>
              </div>
              <div style={{ fontSize: 12, color: '#8a9bc2', marginTop: 12, textAlign: 'center' }}>
                Signed on: {signTimestamp} · IP recorded automatically
              </div>

              <div className="pub-step-nav">
                <button className="pub-btn pub-btn--outline" onClick={() => goTo(2)}>← Back to Agreement</button>
                <button className={`pub-btn pub-btn--gold ${!signValid ? 'pub-btn--disabled' : ''}`} onClick={() => goTo(4)}>
                  Proceed to Payment →
                </button>
              </div>
            </div>
          </div>

          {/* STEP 4: Pay */}
          <div className={`pub-section ${step === 4 ? 'is-visible' : ''}`}>
            <div className="pub-card">
              <h2>Complete Your Payment</h2>
              <div className="pub-pay-summary">
                <div className="first-payment">{totalStr}</div>
                <div className="pay-note">Full payment due now</div>
                <div className="pay-note" style={{ marginTop: 8, color: '#c6a87c' }}>
                  Your payment is subject to our 1 business day review. If we cannot fulfill your order, you will receive a full refund.
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button className={`pub-btn pub-btn--gold ${payLoading ? 'pub-btn--disabled' : ''}`} onClick={startCheckout} style={{ padding: '18px 48px', fontSize: 17 }}>
                  {payLoading ? 'Creating checkout session…' : 'Pay Now'}
                </button>
                <p style={{ fontSize: 12, color: '#8a9bc2', marginTop: 12 }}>
                  You will be redirected to Stripe&apos;s secure checkout page.<br />
                  Powered by Stripe. Your card information never touches our servers.
                </p>
              </div>
              <div className="pub-step-nav">
                <button className="pub-btn pub-btn--outline" onClick={() => goTo(3)}>← Back to Sign</button>
                <span />
              </div>
            </div>
          </div>

        </div>

        {/* ── SIDEBAR ── */}
        <div className="pub-sidebar">
          <div className="pub-summary">
            <h3>Project Summary</h3>
            {selectedList.length === 0
              ? <div className="pub-summary__empty">Select services to get started</div>
              : selectedList.map(s => (
                <div key={s.name} className="pub-summary__line">
                  <span className="label">{s.displayName}</span>
                  <span className="value">${s.price.toLocaleString()}</span>
                </div>
              ))
            }
            <div className="pub-summary__total">
              <span>Total Investment</span>
              <span className="value">{totalStr}</span>
            </div>
            <div className="pub-summary__payment">
              <div className="amount">{totalStr}</div>
              <div className="term">Full payment at checkout</div>
            </div>
            <div className="pub-email-quote">
              <div style={{ fontSize: 13, color: '#8a9bc2', marginBottom: 8 }}>Email this quote to yourself</div>
              <div className="pub-email-quote__row">
                <input type="email" value={quoteEmail} onChange={e => setQuoteEmail(e.target.value)} placeholder="your@email.com" />
                <button onClick={emailQuote}>Send</button>
              </div>
              <div className="pub-email-quote__status" style={{ color: quoteStatus.color }}>{quoteStatus.text}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
