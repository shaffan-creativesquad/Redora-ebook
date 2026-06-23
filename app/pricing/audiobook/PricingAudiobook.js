'use client'
import { useState } from 'react'
import '../configurator.css'

const TIER = 'NSA - Audiobook'
const API_BASE = 'https://scribe-pricing-api.vercel.app'

const WORD_PRICES = { '50000': 8000, '80000': 10000, '120000': 12000, '120001': 14000 }
const WORD_LABELS = { '50000': 'up to 50,000 words', '80000': '50,001–80,000 words', '120000': '80,001–120,000 words', '120001': '120,001+ words' }
const WORD_SHORT = { '50000': 'up to 50k words', '80000': '50k–80k words', '120000': '80k–120k words', '120001': '120k+ words' }
const MUSIC_PRICES = { none: 0, basic: 1500, standard: 3000, premium: 5000 }
const MUSIC_LABELS = { none: '', basic: 'Basic Music & Sound', standard: 'Standard Music & Sound', premium: 'Premium Sound Design' }
const NARRATOR_PRICE = 2000

export default function PricingAudiobook() {
  const [step, setStep] = useState(1)
  const [wordCount, setWordCount] = useState('50000')
  const [narration, setNarration] = useState('professional')
  const [location, setLocation] = useState('la')
  const [extraNarrators, setExtraNarrators] = useState(0)
  const [music, setMusic] = useState('none')
  const [sign, setSign] = useState({
    name: '', email: '', phone: '', address: '', city: '', state: '', zip: '',
    agreeTerms: false, agreePayment: false, agreeElectronic: false, signature: '',
  })
  const [quoteEmail, setQuoteEmail] = useState('')
  const [quoteStatus, setQuoteStatus] = useState('')
  const [payLoading, setPayLoading] = useState(false)

  const basePrice = WORD_PRICES[wordCount] || 8000
  const narratorsCost = extraNarrators * NARRATOR_PRICE
  const musicCost = MUSIC_PRICES[music] || 0
  const total = basePrice + narratorsCost + musicCost
  const fmt = n => '$' + n.toLocaleString()

  const addons = []
  if (narratorsCost > 0) addons.push({ name: `${extraNarrators} Additional Narrator${extraNarrators > 1 ? 's' : ''}`, price: narratorsCost })
  if (musicCost > 0) addons.push({ name: MUSIC_LABELS[music], price: musicCost })

  const signValid =
    sign.name && sign.email && sign.address && sign.city && sign.state && sign.zip &&
    sign.signature && sign.agreeTerms && sign.agreePayment && sign.agreeElectronic &&
    sign.signature.toLowerCase() === sign.name.toLowerCase()

  function stepLabel(n) {
    if (n < step) return 'is-done'
    if (n === step) return 'is-active'
    return ''
  }

  function goTo(n) {
    setStep(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function emailQuote() {
    if (!quoteEmail || !quoteEmail.includes('@')) {
      setQuoteStatus('Please enter a valid email address.')
      return
    }
    setQuoteStatus('Sending...')
    try {
      const res = await fetch(`${API_BASE}/api/email-quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: quoteEmail,
          authorName: sign.name,
          phone: sign.phone,
          address: sign.address,
          city: sign.city,
          state: sign.state,
          zip: sign.zip,
          tier: TIER,
          totalAmount: total,
          monthlyPayment: total,
          numMonths: 1,
          addons,
          basePrice,
        }),
      })
      const data = await res.json()
      setQuoteStatus(data.success ? 'Quote sent! Check your inbox.' : data.error || 'Something went wrong.')
    } catch {
      setQuoteStatus('Network error. Please try again.')
    }
  }

  async function startCheckout() {
    setPayLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/create-checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tier: TIER,
          addons,
          totalAmount: total,
          monthlyPayment: total,
          numMonths: 1,
          authorName: sign.name,
          email: sign.email,
          phone: sign.phone,
          address: sign.address,
          city: sign.city,
          state: sign.state,
          zip: sign.zip,
          agreementSignature: sign.signature,
          agreementTimestamp: new Date().toISOString(),
          agreementIP: '',
          wordCount,
          narration,
          location: narration === 'self' ? location : null,
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert(data.error || 'Something went wrong. Please try again.')
        setPayLoading(false)
      }
    } catch {
      alert('Network error. Please try again.')
      setPayLoading(false)
    }
  }

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
        {/* MAIN */}
        <div className="pub-main">

          {/* STEP 1 — Configure */}
          <div className={`pub-section ${step === 1 ? 'is-visible' : ''}`}>
            <div className="pub-hero">
              <div className="pub-hero__badge">Standalone Service for Published Authors</div>
              <h1 className="pub-hero__title">Audiobook Production</h1>
              <p className="pub-hero__subtitle">
                Professional audiobook production for published authors. Studio recording,
                post-production, and distribution to all major platforms including Audible,
                Apple Books, and more.
              </p>
              <p className="pub-hero__note">
                This is a standalone service. You will not be assigned a Scribe Publishing Manager.
                Work is fulfilled by our vetted production partners.
              </p>
            </div>

            <div className="pub-review-warning">
              <strong>Order Review</strong>
              Your order is subject to review. We will confirm all details within 1 business day
              and approve your order. If we are unable to fulfill your order, you will receive a full refund.
            </div>

            {/* Manuscript Length */}
            <div className="pub-config-card">
              <h3>Manuscript Length</h3>
              {[
                { val: '50000', label: 'Up to 50,000 words', price: '$8,000' },
                { val: '80000', label: '50,001 – 80,000 words', price: '$10,000' },
                { val: '120000', label: '80,001 – 120,000 words', price: '$12,000' },
                { val: '120001', label: '120,001+ words', price: '$14,000' },
              ].map(opt => (
                <label key={opt.val} className={`pub-radio ${wordCount === opt.val ? 'is-selected' : ''}`} onClick={() => setWordCount(opt.val)}>
                  <input type="radio" name="wordcount" value={opt.val} checked={wordCount === opt.val} onChange={() => setWordCount(opt.val)} />
                  <span>{opt.label}</span>
                  <span className="pub-radio__price">{opt.price}</span>
                </label>
              ))}
            </div>

            {/* Narration */}
            <div className="pub-config-card">
              <h3>Narration</h3>
              <label className={`pub-radio ${narration === 'professional' ? 'is-selected' : ''}`} onClick={() => setNarration('professional')}>
                <input type="radio" name="narration" value="professional" checked={narration === 'professional'} onChange={() => setNarration('professional')} />
                <span>Professional narrator (we match you with the right voice)</span>
              </label>
              <label className={`pub-radio ${narration === 'self' ? 'is-selected' : ''}`} onClick={() => setNarration('self')}>
                <input type="radio" name="narration" value="self" checked={narration === 'self'} onChange={() => setNarration('self')} />
                <span>Self-narration at a partner studio (LA, NY, or other locations available)</span>
              </label>

              {narration === 'self' && (
                <div style={{ marginTop: '12px', padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(168,168,168,0.15)', borderRadius: '10px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#bfbfbf', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Recording Location</h4>
                  {[
                    { val: 'la', label: 'Los Angeles' },
                    { val: 'ny', label: 'New York' },
                    { val: 'other', label: "Other (we'll find a partner studio near you)" },
                  ].map(opt => (
                    <label key={opt.val} className={`pub-radio ${location === opt.val ? 'is-selected' : ''}`} onClick={() => setLocation(opt.val)}>
                      <input type="radio" name="location" value={opt.val} checked={location === opt.val} onChange={() => setLocation(opt.val)} />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                  <p style={{ fontSize: '12px', color: '#9a9a9a', marginTop: '8px', paddingLeft: '4px' }}>
                    Note: Studio rates may vary by location. If costs differ from the estimate shown, we will confirm pricing before proceeding.
                  </p>
                </div>
              )}
            </div>

            {/* Additional Narrators */}
            <div className="pub-config-card">
              <h3>Additional Narrators</h3>
              <p style={{ color: '#9a9a9a', fontSize: '13px', margin: '0 0 12px' }}>
                Add extra voices for dialogue, foreword, or multi-perspective sections. $2,000 per additional narrator.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button type="button" className="pub-qty-btn" onClick={() => setExtraNarrators(Math.max(0, extraNarrators - 1))}>-</button>
                <span style={{ fontSize: '20px', fontWeight: 700, color: '#fff', minWidth: '30px', textAlign: 'center' }}>{extraNarrators}</span>
                <button type="button" className="pub-qty-btn" onClick={() => setExtraNarrators(Math.min(5, extraNarrators + 1))}>+</button>
                <span style={{ color: '#9a9a9a', fontSize: '14px', marginLeft: '8px' }}>additional narrators</span>
                <span style={{ color: '#e02d2d', fontSize: '15px', fontWeight: 600, marginLeft: 'auto' }}>
                  {narratorsCost > 0 ? `+${fmt(narratorsCost)}` : '$0'}
                </span>
              </div>
            </div>

            {/* Music & Sound */}
            <div className="pub-config-card">
              <h3>Music &amp; Sound Effects</h3>
              <p style={{ color: '#9a9a9a', fontSize: '13px', margin: '0 0 12px' }}>Custom audio elements for your audiobook.</p>
              {[
                { val: 'none', label: 'None', price: '$0' },
                { val: 'basic', label: 'Basic (intro/outro music, simple transitions)', price: '+$1,500' },
                { val: 'standard', label: 'Standard (chapter transitions, ambient elements)', price: '+$3,000' },
                { val: 'premium', label: 'Premium (full sound design throughout)', price: '+$5,000' },
              ].map(opt => (
                <label key={opt.val} className={`pub-radio ${music === opt.val ? 'is-selected' : ''}`} onClick={() => setMusic(opt.val)}>
                  <input type="radio" name="music" value={opt.val} checked={music === opt.val} onChange={() => setMusic(opt.val)} />
                  <span>{opt.label}</span>
                  <span className="pub-radio__price">{opt.price}</span>
                </label>
              ))}
            </div>

            <div className="pub-step-nav" style={{ borderTop: 'none', paddingTop: 0, marginTop: '24px' }}>
              <a href="/pricing" className="pub-btn pub-btn--outline">← All Services</a>
              <button className="pub-btn pub-btn--red" onClick={() => goTo(2)}>Review Agreement →</button>
            </div>
          </div>

          {/* STEP 2 — Agreement */}
          <div className={`pub-section ${step === 2 ? 'is-visible' : ''}`}>
            <div className="pub-card">
              <h2>Your Agreement</h2>
              <p style={{ color: '#9a9a9a', fontSize: '13px', margin: '4px 0 16px' }}>Please review the full agreement below. Scroll to read all sections.</p>

              <div className="pub-agreement">
                <h4>Audiobook Production Agreement</h4>
                <p>This agreement is intentionally written in plain English. We think the impenetrable lawyer-speak of modern contracts inhibits understanding, cooperation, and mutual benefit, which helps no one (except the lawyers). We want what&apos;s best for both of us, now and in the future, and we think plain English agreements help achieve that.</p>
                <p>In short, the purpose of this agreement is simple:</p>
                <p>You are hiring us, Scribe Media, to produce a professional audiobook from your completed, published manuscript. This agreement is the official record of our relationship, and it lays out what we can both expect, who should do what and when, and what will happen if something goes wrong.</p>

                <h4>Timeline</h4>
                <p>The estimated timeline for audiobook production is 3–4 months from your kickoff call. This includes narrator selection or studio scheduling, recording, post-production editing, quality assurance, and distribution setup.</p>

                <h4>What We Will Do for You</h4>
                <p><strong>Audiobook Production:</strong> We will facilitate the complete production of your audiobook, from <span className="dynamic-field">{narration === 'professional' ? 'professional narration' : 'self-narration at a partner studio'}</span> through final mastering. Your audiobook will meet ACX and retail distribution technical standards.</p>

                {narration === 'professional' ? (
                  <p><strong>Professional Narrator:</strong> We will match you with a professional narrator whose voice fits your book&apos;s tone and audience. You will have the opportunity to review auditions and approve the final selection before recording begins.</p>
                ) : (
                  <p><strong>Self-Narration:</strong> You will record your audiobook at one of our partner studios. We will coordinate studio scheduling and provide direction to ensure professional quality. Studio time and engineering are included in your package.</p>
                )}

                <p><strong>Post-Production:</strong> All recordings will go through professional editing, noise reduction, mastering, and quality assurance to meet retail distribution standards.</p>
                <p><strong>Distribution:</strong> Your finished audiobook will be distributed to all major platforms including Amazon, Audible, Apple Books, Scribd, Google Play, and more.</p>

                {extraNarrators > 0 && (
                  <p><strong>Additional Narrator:</strong> A second professional narrator will be cast and recorded for your audiobook, providing a distinct voice for dialogue, foreword, or multi-perspective sections.</p>
                )}
                {musicCost > 0 && (
                  <p><strong>Music and Sound Effects:</strong> Custom audio elements including intro/outro music, chapter transitions, and/or ambient sound design will be produced and integrated into your audiobook.</p>
                )}

                <h4>What&apos;s Included in Your Package</h4>
                <ul>
                  <li>Audiobook production for a manuscript of <span className="dynamic-field">{WORD_LABELS[wordCount]}</span></li>
                  <li>{narration === 'professional' ? 'Professional narrator matching and recording' : 'Self-narration at a partner studio'}</li>
                  <li>Post-production editing, noise reduction, and mastering</li>
                  <li>Quality assurance review</li>
                  <li>Distribution to Audible, Apple Books, Amazon, Scribd, Google Play, and more</li>
                  {extraNarrators > 0 && <li>{extraNarrators} additional narrator{extraNarrators > 1 ? 's' : ''} for multi-voice recording</li>}
                  {musicCost > 0 && <li>{MUSIC_LABELS[music]} package</li>}
                </ul>

                <h4>Important Other Things</h4>
                <p><strong>Order Review:</strong> Your order is subject to review. We will confirm all details within 1 business day and approve your order. If we are unable to fulfill your order, you will receive a full refund.</p>
                <p><strong>Manuscript Requirement:</strong> You must provide a completed, publication-ready manuscript. This service does not include editing, proofreading, or manuscript preparation.</p>
                <p><strong>Audiobook Overage:</strong> If your final manuscript exceeds the word count tier selected, additional charges may apply. We will notify you and provide a quote before any additional work begins.</p>
                <p><strong>Approval Process:</strong> You will have the opportunity to review and approve narrator auditions (if applicable) and a sample chapter before full production begins. Once full production is approved, changes to the narration style or narrator may incur additional costs.</p>
                <p><strong>Communication:</strong> Timely responses are important to keep your project on schedule. Delays in communication may extend your project timeline.</p>
                <p><strong>No Hidden Costs:</strong> We will never do additional work that costs you money without first getting your explicit approval.</p>
                <p><strong>Pricing Expiration:</strong> The price you commit to is good for 3 months. If you don&apos;t start within 3 months and prices have increased, an amended agreement will be required.</p>

                <h4>Legal Terms</h4>
                <p><strong>Intellectual Property:</strong> You retain full ownership of your audiobook content. Scribe Media does not claim any rights to your work.</p>
                <p><strong>Royalties and Profits:</strong> You get all the profit from your audiobook. Neither Scribe Media, nor any third party is entitled to any share of audiobook profits. All distribution accounts are yours.</p>
                <p><strong>Liability &amp; Indemnification:</strong> You are solely responsible for the content of your book. You represent and warrant that the content does not infringe the rights of any third party. You agree to indemnify Scribe Media for any liability arising from your book&apos;s content.</p>
                <p><strong>Cancellation:</strong> If either party decides to part ways before production begins, we will refund your payment minus any costs already incurred. Once recording has begun, refunds will be prorated based on work completed.</p>
                <p><strong>Delay:</strong> If you need to pause, we cannot guarantee the same timeline or production team when you restart. Pauses of 3+ months may require a price update.</p>
                <p><strong>The Sunset Clause:</strong> If you are non-responsive for 12 months or more, we have the right to cancel the project and retain payment.</p>
                <p><strong>AI Content:</strong> We reserve the right to use AI as a productivity tool in post-production workflows. You may request details of AI use at any time. You must notify us of any AI-generated content in your manuscript.</p>

                <h4>Your Investment</h4>
                <p>Full payment of <span className="dynamic-field">{fmt(total)}</span> is due at signing. There is a 3% processing fee for all credit card payments.</p>

                <table style={{ width: '100%', borderCollapse: 'collapse', margin: '16px 0' }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(168,168,168,0.15)' }}>
                      <td style={{ padding: '10px 0', color: '#bfbfbf' }}>Audiobook Production ({WORD_LABELS[wordCount]})</td>
                      <td style={{ padding: '10px 0', textAlign: 'right', color: '#fff', fontWeight: 600 }}>{fmt(basePrice)}</td>
                    </tr>
                    {addons.map(a => (
                      <tr key={a.name} style={{ borderBottom: '1px solid rgba(168,168,168,0.15)' }}>
                        <td style={{ padding: '10px 0', color: '#bfbfbf' }}>{a.name}</td>
                        <td style={{ padding: '10px 0', textAlign: 'right', color: '#fff', fontWeight: 600 }}>{fmt(a.price)}</td>
                      </tr>
                    ))}
                    <tr style={{ borderTop: '2px solid #e02d2d' }}>
                      <td style={{ padding: '12px 0', fontWeight: 700, fontSize: '16px', color: '#fff' }}>Total</td>
                      <td style={{ padding: '12px 0', textAlign: 'right', fontWeight: 700, fontSize: '16px', color: '#e02d2d' }}>{fmt(total)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pub-step-nav">
                <button className="pub-btn pub-btn--outline" onClick={() => goTo(1)}>← Back to Configure</button>
                <button className="pub-btn pub-btn--red" onClick={() => goTo(3)}>Sign Agreement →</button>
              </div>
            </div>
          </div>

          {/* STEP 3 — Sign */}
          <div className={`pub-section ${step === 3 ? 'is-visible' : ''}`}>
            <div className="pub-card">
              <h2>Sign Your Agreement</h2>
              <p style={{ color: '#9a9a9a', fontSize: '13px', margin: '4px 0 20px' }}>Complete the fields below and type your full legal name to sign.</p>

              {[
                { id: 'name', label: 'Full Legal Name', type: 'text', placeholder: 'Your full name as it appears on legal documents' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 555-5555' },
                { id: 'address', label: 'Mailing Address', type: 'text', placeholder: 'Street address' },
              ].map(f => (
                <div key={f.id} className="pub-sign-field">
                  <label>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} value={sign[f.id]} onChange={e => setSign(s => ({ ...s, [f.id]: e.target.value }))} />
                </div>
              ))}

              <div style={{ display: 'flex', gap: '12px' }}>
                <div className="pub-sign-field" style={{ flex: 2 }}>
                  <label>City</label>
                  <input type="text" placeholder="City" value={sign.city} onChange={e => setSign(s => ({ ...s, city: e.target.value }))} />
                </div>
                <div className="pub-sign-field" style={{ flex: 1 }}>
                  <label>State</label>
                  <input type="text" placeholder="State" value={sign.state} onChange={e => setSign(s => ({ ...s, state: e.target.value }))} />
                </div>
                <div className="pub-sign-field" style={{ flex: 1 }}>
                  <label>Zip Code</label>
                  <input type="text" placeholder="Zip" value={sign.zip} onChange={e => setSign(s => ({ ...s, zip: e.target.value }))} />
                </div>
              </div>

              <label className="pub-sign-checkbox">
                <input type="checkbox" checked={sign.agreeTerms} onChange={e => setSign(s => ({ ...s, agreeTerms: e.target.checked }))} />
                I have read and agree to the terms of this agreement
              </label>
              <label className="pub-sign-checkbox">
                <input type="checkbox" checked={sign.agreePayment} onChange={e => setSign(s => ({ ...s, agreePayment: e.target.checked }))} />
                I agree to the full payment amount shown in the summary
              </label>
              <label className="pub-sign-checkbox">
                <input type="checkbox" checked={sign.agreeElectronic} onChange={e => setSign(s => ({ ...s, agreeElectronic: e.target.checked }))} />
                I consent to conduct this transaction electronically
              </label>

              <div className="pub-signature-box">
                <input type="text" placeholder="Type your full legal name" value={sign.signature} onChange={e => setSign(s => ({ ...s, signature: e.target.value }))} />
                <div className="hint">Type your full legal name exactly as entered above to sign</div>
              </div>

              <div style={{ fontSize: '12px', color: '#9a9a9a', marginTop: '12px', textAlign: 'center' }}>
                Signed electronically · IP recorded automatically
              </div>

              <div className="pub-step-nav">
                <button className="pub-btn pub-btn--outline" onClick={() => goTo(2)}>← Back to Agreement</button>
                <button className={`pub-btn pub-btn--red ${signValid ? '' : 'pub-btn--disabled'}`} onClick={() => signValid && goTo(4)}>Proceed to Payment →</button>
              </div>
            </div>
          </div>

          {/* STEP 4 — Pay */}
          <div className={`pub-section ${step === 4 ? 'is-visible' : ''}`}>
            <div className="pub-card">
              <h2>Complete Your Payment</h2>

              <div className="pub-pay-summary">
                <div className="first-payment">{fmt(total)}</div>
                <div className="pay-note">Full payment due now</div>
                <div className="pay-note" style={{ marginTop: '8px', color: '#e02d2d' }}>
                  Your payment is subject to our 1 business day review. If we cannot fulfill your order, you will receive a full refund.
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  className={`pub-btn pub-btn--red ${payLoading ? 'pub-btn--disabled' : ''}`}
                  onClick={startCheckout}
                  style={{ padding: '18px 48px', fontSize: '17px' }}
                >
                  {payLoading ? 'Creating checkout session...' : 'Pay Now'}
                </button>
                <p style={{ fontSize: '12px', color: '#9a9a9a', marginTop: '12px' }}>
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

        {/* SIDEBAR */}
        <div className="pub-sidebar">
          <div className="pub-summary">
            <h3>Project Summary</h3>
            <div className="pub-summary__line">
              <span className="label">Audiobook Production ({WORD_SHORT[wordCount]})</span>
              <span className="value">{fmt(basePrice)}</span>
            </div>
            {addons.map(a => (
              <div key={a.name} className="pub-summary__line">
                <span className="label">{a.name}</span>
                <span className="value">+{fmt(a.price)}</span>
              </div>
            ))}
            <div className="pub-summary__total">
              <span>Total Investment</span>
              <span className="value">{fmt(total)}</span>
            </div>
            <div className="pub-summary__payment">
              <div className="amount">{fmt(total)}</div>
              <div className="term">Full payment at checkout</div>
            </div>

            <div className="pub-email-quote">
              <div style={{ fontSize: '13px', color: '#9a9a9a', marginBottom: '8px' }}>Email this quote to yourself</div>
              <div className="pub-email-quote__row">
                <input type="email" placeholder="your@email.com" value={quoteEmail} onChange={e => setQuoteEmail(e.target.value)} />
                <button onClick={emailQuote}>Send</button>
              </div>
              <div
                className="pub-email-quote__status"
                style={{
                  color: quoteStatus.includes('sent') ? '#4ade80'
                    : (quoteStatus.includes('error') || quoteStatus.includes('valid') || quoteStatus.includes('wrong')) ? '#e02d2d'
                    : '#9a9a9a',
                }}
              >
                {quoteStatus}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
