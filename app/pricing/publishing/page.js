'use client'
import { useState, useMemo } from 'react'
import './pub.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_PRICE = 29000
const NUM_MONTHS = 6
const API_BASE = 'https://e-book-nine-mu.vercel.app'

const INCLUDED = [
  { icon: 'ph ph-user-circle', label: 'Dedicated Publishing Manager', detail: 'Your single point of contact from start to finish' },
  { icon: 'ph ph-book-open', label: 'Manuscript Evaluation', detail: 'Full read by our Executive Editor with detailed feedback' },
  { icon: 'ph ph-paint-brush', label: 'Professional Cover Design', detail: '3+ options, 5 rounds of revisions. Your decision.' },
  { icon: 'ph ph-layout', label: 'Interior Layout Design', detail: 'Hardcover, paperback, and eBook formats' },
  { icon: 'ph ph-text-aa', label: 'Copyediting & Proofreading', detail: 'Professional polish for a flawless final product' },
  { icon: 'ph ph-microphone', label: 'Audiobook Production', detail: 'Professional narration, distributed to Audible, Apple Books, and more' },
  { icon: 'ph ph-globe', label: 'Global Distribution', detail: 'Amazon, Barnes & Noble, Apple Books, Kobo, bookstores worldwide' },
  { icon: 'ph ph-rocket', label: 'Book Launch Marketing', detail: 'Amazon strategy, social graphics, email templates, Goodreads giveaway' },
  { icon: 'ph ph-package', label: '50 Paperback or 25 Hardcover Author Copies', detail: 'Unlimited extras at printer cost.' },
  { icon: 'ph ph-shield-check', label: 'Copyright & ISBN Registration', detail: 'U.S. Copyright Office filing and all ISBNs handled' },
  { icon: 'ph ph-currency-dollar', label: '100% of All Rights and Royalties', detail: 'All book profits and rights are yours.' },
  { icon: 'ph ph-certificate', label: 'International Rights Representation', detail: '1 year of exclusive international rights support' },
]

const ADDONS = [
  {
    group: 'Readership & Reviews',
    items: [
      { id: 'expanded', name: 'Expanded Readership', price: 3000, hook: 'Reach thousands of new readers beyond your personal network.', details: ['NetGalley campaign (6 months, targeted to reviewers and industry readers)', 'Premium Goodreads giveaway with direct follow-up to every entrant', '5-Day Amazon promotion stack (Facebook ads + email promos + eBook price drop)'], tag: 'Ideal for boosting visibility and early reviews' },
      { id: 'spotlight', name: 'Author Spotlight', price: 3500, hook: 'Earn third-party endorsements and prestigious award recognition.', details: ['5 major book award submissions', 'Kirkus Indie Review (trusted since 1933)', 'IndieReader Review (4-5 star books get featured interview)'], tag: 'Ideal for authors leading with prestige and trust' },
    ],
  },
  {
    group: 'Visibility & Media',
    items: [
      { id: 'podcast', name: 'Podcast PR Campaign', price: 8250, hook: 'Get booked as a guest expert on high-fit podcasts.', details: ['3-month podcast booking strategy', 'Custom media kit and pitch materials', 'Targeted host selection, scheduling, and follow-up'], tag: 'Ideal for building thought leadership' },
      { id: 'pr', name: 'PR Campaign', price: 12000, hook: 'Comprehensive media outreach to secure interviews and press coverage.', details: ['Full public relations campaign (3 months)', 'Media kit creation and pitch development', 'Audience research and bi-weekly progress reports'], tag: 'Ideal for authors who want press and media coverage' },
    ],
  },
  {
    group: 'Growth & Advertising',
    items: [
      { id: 'amazon-ads', name: 'Amazon Advertising', price: 10000, hook: 'Expert-managed Amazon ad campaigns for sustained book sales.', details: ['4 months of managed advertising', 'Preset budgets with comprehensive performance reporting'], tag: 'Ideal for long-term Amazon visibility' },
      { id: 'video', name: 'Professional Video Content', price: 12000, hook: '50 short-form social videos from one professional filming day.', details: ['One day of professional filming', '50 clips formatted for all social platforms'], tag: 'Ideal for building your author brand on social media' },
    ],
  },
]

const MORE_ADDONS = [
  { id: 'netgalley', name: 'NetGalley Campaign', price: 1500, hook: '6 months on NetGalley, targeted to reviewers and industry readers.', tag: 'Standalone option (also included in Expanded Readership)' },
  { id: 'ads', name: 'Online Advertising', price: 1300, hook: 'Targeted digital ad campaigns to promote your book.' },
  { id: 'landing', name: 'Landing Page & Email Campaign', price: 5000, hook: 'Custom landing page and email marketing to build your audience before launch.' },
  { id: 'publicity', name: 'Publicity Campaign (6 months)', price: 24000, hook: 'Extended 6-month publicity and media campaign with full agency support.' },
  { id: 'authors-unite', name: 'Authors Unite Campaign', price: 35000, hook: 'Guaranteed sales, verified reviews, media placements, and Barnes & Noble bestseller campaign.' },
]

const AGREEMENT_TEXT = `
<h4>Readora Agreement</h4>
<p>This agreement is intentionally written in plain English. We think the impenetrable lawyer-speak of modern contracts inhibits understanding, cooperation, and mutual benefit, which helps no one (except the lawyers). We want what's best for both of us, now and in the future, and we think plain English agreements help achieve that.</p>
<p>In short, the purpose of this agreement is simple: You are hiring us, Readora, to perform the services described below. This agreement is the official record of our relationship, and it lays out what we can both expect, who should do what and when, and what will happen if something goes wrong.</p>
<h4>Timeline</h4>
<p>The minimum time-to-publish for this experience is 7 months from your kickoff call. That's as fast as we can move. It's completely normal for authors to take closer to 9 or 10 months, so that's what we recommend you budget.</p>
<h4>What We Will Do for You</h4>
<p><strong>Project Management:</strong> You will be assigned a dedicated Publishing Manager who functions as the project manager for your book, ensuring all next steps are clearly outlined, deadlines are met, and the entire process runs smoothly.</p>
<p><strong>Manuscript Evaluation:</strong> Before we can start publishing, our Executive Editor will do a full read of your manuscript, assessing structure, flow, completeness, and overall quality.</p>
<p><strong>Proofreading & Copyediting:</strong> Your book will go through full quality assurance and technical preparation to ensure it is ready to publish.</p>
<p><strong>Book Cover Design:</strong> Our design team will create a high-quality book cover for your print and eBook versions. You will get at least three cover design options and up to five rounds of edits.</p>
<p><strong>Interior Layout Design & eBook Conversion:</strong> An interior layout designer will craft the interior for your hardcover, paperback, and eBook editions.</p>
<p><strong>Copyright & ISBN Registration:</strong> Your manuscript will be copyrighted with the U.S. Copyright Office. Your book will be registered in Bowker's Books In Print database with all necessary ISBNs and barcodes.</p>
<p><strong>Publishing Imprint:</strong> You will publish under our Ember Press Publishing imprint. You may publish under your own imprint for an additional cost.</p>
<p><strong>Publishing:</strong> We will format, publish, and distribute your title on Kindle Direct Publishing and IngramSpark platforms.</p>
<p><strong>Author Copies:</strong> We will provide 50 paperback copies or 25 hardcover copies at no extra charge. You can order unlimited additional copies at the printer's cost.</p>
<p><strong>Audiobook Creation and Distribution:</strong> We will facilitate the creation and publication of an audiobook version. Your audiobook will be available on Amazon, Audible, Apple Books, Scribd, Google Play, and more.</p>
<p><strong>Book Distribution:</strong> Your eBook/Kindle will be available on Amazon's global marketplaces plus iBooks, Kobo, Barnes & Noble, and more.</p>
<h4>Book Marketing</h4>
<ul>
<li>Targeted Amazon Best Seller Strategy with discounted eBook campaign</li>
<li>Social media graphics and banners</li>
<li>Email strategy and templates for early reviews and sales</li>
<li>Goodreads eBook giveaway (US only)</li>
<li>A+ Content for your Amazon listing</li>
<li>Added media opportunities through our network</li>
</ul>
<h4>Important Other Things</h4>
<p><strong>Additional Editing:</strong> If our Executive Editor determines additional editing is needed, you can edit the manuscript yourself or hire our editors.</p>
<p><strong>The Opt Out Clause:</strong> If our Executive Editor determines we cannot publish a manuscript in its current form, and you don't want to revise it, both parties can opt out without penalty. We will refund all monies paid minus the first non-refundable invoice.</p>
<p><strong>Total Length Clause:</strong> Our price works for books up to 50,000 words. If the manuscript is over 50k words at manuscript evaluation, we charge an additional $100 per 1,000 words.</p>
<h4>Legal Terms</h4>
<p><strong>Royalties and Profits:</strong> You get all the profit from your work. Neither Readora, nor any third party is entitled to any share of book profits. All book and distribution accounts are yours.</p>
<p><strong>Liability & Indemnification:</strong> You are solely responsible for the content of your book. You agree to indemnify Readora for any liability arising from your book's content.</p>
<p><strong>Cancellation:</strong> If either party decides to part ways, we will discuss next steps. If paid invoices (beyond the non-refundable first invoice) exceed incurred creative costs, we will refund the difference.</p>
<p><strong>No Hidden Costs:</strong> We will never do additional work that costs you money without first getting your explicit approval.</p>
`

function fmt(n) {
  return '$' + n.toLocaleString()
}
function fmtMonthly(n) {
  return '$' + (n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function PricingPublishing() {
  const [step, setStep] = useState(1)
  const [selectedAddons, setSelectedAddons] = useState({})
  const [imprint, setImprint] = useState('lioncrest')
  const [returningAuthor, setReturningAuthor] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [quoteEmail, setQuoteEmail] = useState('')
  const [quoteStatus, setQuoteStatus] = useState('')
  const [payBtnLoading, setPayBtnLoading] = useState(false)

  // Sign form
  const [signName, setSignName] = useState('')
  const [signEmail, setSignEmail] = useState('')
  const [signPhone, setSignPhone] = useState('')
  const [signAddress, setSignAddress] = useState('')
  const [signCity, setSignCity] = useState('')
  const [signState, setSignState] = useState('')
  const [signZip, setSignZip] = useState('')
  const [signTerms, setSignTerms] = useState(false)
  const [signPayment, setSignPayment] = useState(false)
  const [signElectronic, setSignElectronic] = useState(false)
  const [signSig, setSignSig] = useState('')

  const imprintCost = imprint === 'custom-readora' ? 750 : imprint === 'custom-own' ? 375 : 0

  const addonTotal = useMemo(() => {
    let t = 0
    const allAddons = [...ADDONS.flatMap(g => g.items), ...MORE_ADDONS]
    for (const a of allAddons) {
      if (selectedAddons[a.id]) t += a.price
    }
    return t
  }, [selectedAddons])

  const total = BASE_PRICE + imprintCost + addonTotal - (returningAuthor ? 1000 : 0)
  const monthly = total / NUM_MONTHS
  const monthlyStr = fmtMonthly(monthly)

  const toggleAddon = (id) => setSelectedAddons(prev => ({ ...prev, [id]: !prev[id] }))

  const signValid = signName && signEmail && signAddress && signCity && signState && signZip &&
    signTerms && signPayment && signElectronic &&
    signSig && signSig.toLowerCase() === signName.toLowerCase()

  const goToStep = (s) => {
    setStep(s)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleEmailQuote = async () => {
    if (!quoteEmail || !quoteEmail.includes('@')) {
      setQuoteStatus({ msg: 'Please enter a valid email address.', ok: false })
      return
    }
    setQuoteStatus({ msg: 'Sending...', ok: null })
    try {
      const res = await fetch(API_BASE + '/api/email-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: quoteEmail, tier: 'Readora Publishing', totalAmount: total, monthlyPayment: monthly, numMonths: NUM_MONTHS, addons: Object.keys(selectedAddons).filter(k => selectedAddons[k]), basePrice: BASE_PRICE }),
      })
      const data = await res.json()
      setQuoteStatus(data.success ? { msg: 'Quote sent! Check your inbox.', ok: true } : { msg: data.error || 'Something went wrong.', ok: false })
    } catch {
      setQuoteStatus({ msg: 'Network error. Please try again.', ok: false })
    }
  }

  const handleCheckout = async () => {
    setPayBtnLoading(true)
    try {
      const res = await fetch(API_BASE + '/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tier: 'Readora Publishing',
          addons: Object.keys(selectedAddons).filter(k => selectedAddons[k]),
          totalAmount: total,
          monthlyPayment: monthly,
          numMonths: NUM_MONTHS,
          authorName: signName,
          email: signEmail,
          phone: signPhone,
          address: signAddress,
          city: signCity,
          state: signState,
          zip: signZip,
          agreementSignature: signSig,
          agreementTimestamp: new Date().toISOString(),
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Error: ' + (data.error || 'Could not create checkout session'))
        setPayBtnLoading(false)
      }
    } catch {
      alert('Network error. Please try again.')
      setPayBtnLoading(false)
    }
  }

  const MktCard = ({ item }) => (
    <label className={`pub-mkt-card${selectedAddons[item.id] ? ' is-selected' : ''}`}>
      <input type="checkbox" checked={!!selectedAddons[item.id]} onChange={() => toggleAddon(item.id)} />
      <div className="pub-mkt-card__body">
        <div className="pub-mkt-card__top">
          <div className="pub-mkt-card__name">{item.name}</div>
          <div className="pub-mkt-card__price">{fmt(item.price)}</div>
        </div>
        <div className="pub-mkt-card__hook">{item.hook}</div>
        {item.details && (
          <ul className="pub-mkt-card__details">
            {item.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        )}
        {item.tag && <div className="pub-mkt-card__tag">{item.tag}</div>}
      </div>
    </label>
  )

  return (
    <>
      <Navbar />
      <div className="pub-page" style={{ paddingTop: '84px' }}>

        {/* Progress */}
        <div className="pub-progress">
          {['Configure', 'Agreement', 'Sign', 'Pay'].map((label, i) => {
            const n = i + 1
            return (
              <div key={n} style={{ display: 'flex', alignItems: 'center' }}>
                <div className={`pub-progress__step${step === n ? ' is-active' : step > n ? ' is-done' : ''}`}>
                  <span className="pub-progress__num">{step > n ? '✓' : n}</span>
                  <span>{label}</span>
                </div>
                {n < 4 && <div className="pub-progress__line" />}
              </div>
            )
          })}
        </div>

        <div className="pub-layout">
          {/* ── MAIN ── */}
          <div className="pub-main">

            {/* STEP 1 */}
            {step === 1 && (
              <div>
                <div className="pub-hero">
                  <div className="pub-hero__badge">Your Complete Publishing Package</div>
                  <h1 className="pub-hero__title">Readora Publishing</h1>
                  <p className="pub-hero__subtitle">Everything you need to turn your completed manuscript into a professionally published book, audiobook, and global launch. You retain 100% of your royalties and full ownership.</p>
                  <div className="pub-hero__price-row">
                    <span className="pub-hero__price">{fmt(BASE_PRICE)}</span>
                    <span className="pub-hero__price-term">over {NUM_MONTHS} months</span>
                  </div>
                  <div className="pub-hero__price-note">{fmtMonthly(BASE_PRICE / NUM_MONTHS)}/mo · $1,000 deposit to get started</div>
                </div>

                <div className="pub-included">
                  <div className="pub-included__heading">Everything Included in Your Package</div>
                  <div className="pub-included__grid">
                    {INCLUDED.map((item, i) => (
                      <div key={i} className="pub-included__item">
                        <div className="pub-included__icon"><i className={item.icon} /></div>
                        <div>
                          <div className="pub-included__label">{item.label}</div>
                          <div className="pub-included__detail">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pub-card pub-enhance">
                  <h2 className="pub-enhance__heading">Enhance Your Launch</h2>
                  <p className="pub-enhance__sub">Optional services to maximize your book's reach and impact.</p>
                  {ADDONS.map((group) => (
                    <div key={group.group}>
                      <div className="pub-enhance__group-label">{group.group}</div>
                      {group.items.map(item => <MktCard key={item.id} item={item} />)}
                    </div>
                  ))}

                  <button className={`pub-more-toggle${showMore ? ' open' : ''}`} onClick={() => setShowMore(v => !v)}>
                    <span>More options</span>
                    <span className="arrow">▼</span>
                  </button>
                  {showMore && MORE_ADDONS.map(item => <MktCard key={item.id} item={item} />)}

                  <p style={{ fontSize: '12px', color: '#a0a0a0', marginTop: '14px' }}>Want to bundle multiple services? Ask your Readora representative about package discounts.</p>
                </div>

                <button className={`pub-customize-toggle${showCustomize ? ' open' : ''}`} onClick={() => setShowCustomize(v => !v)}>
                  <span>Customize Your Imprint</span>
                  <span className="arrow">▼</span>
                </button>
                {showCustomize && (
                  <div className="pub-card" style={{ marginTop: 0 }}>
                    <div className="pub-card-section-label">Publishing Imprint</div>
                    <p style={{ fontSize: '13px', color: '#a0a0a0', marginBottom: '12px' }}>Choose how your book is branded. Most authors publish under our Ember Press Publishing imprint at no extra cost.</p>
                    {[
                      { val: 'lioncrest', label: 'Ember Press Publishing (included)' },
                      { val: 'custom-readora', label: 'Custom Publishing Imprint (Readora designs your logo) +$750' },
                      { val: 'custom-own', label: 'Custom Imprint (bring your own logo) +$375' },
                    ].map(opt => (
                      <label key={opt.val} className="pub-radio">
                        <input type="radio" name="imprint" value={opt.val} checked={imprint === opt.val} onChange={() => setImprint(opt.val)} />
                        {opt.label}
                      </label>
                    ))}

                    <div className="pub-card-section-label" style={{ marginTop: '18px' }}>Returning Author</div>
                    <label className="pub-check">
                      <input type="checkbox" checked={returningAuthor} onChange={e => setReturningAuthor(e.target.checked)} />
                      <div className="pub-check__info">
                        <div className="pub-check__name">Returning Author Discount</div>
                        <div className="pub-check__desc">Previously published with Readora</div>
                      </div>
                      <div className="pub-check__price">−$1,000</div>
                    </label>
                  </div>
                )}

                <div className="pub-step-nav" style={{ borderTop: 'none', paddingTop: 0, marginTop: '24px' }}>
                  <a href="/pricing" className="pub-btn pub-btn--outline">← All Services</a>
                  <button className="pub-btn pub-btn--primary" onClick={() => goToStep(2)}>Review Agreement →</button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="pub-card">
                <h2>Your Agreement</h2>
                <p style={{ color: '#a0a0a0', fontSize: '13px', margin: '4px 0 16px' }}>Please review the full agreement below. Scroll to read all sections.</p>
                <div className="pub-agreement" dangerouslySetInnerHTML={{ __html: AGREEMENT_TEXT + `
                  <h4>Your Investment</h4>
                  <p>Your investment is paid over <strong>${NUM_MONTHS}</strong> months at <strong>${monthlyStr}</strong>/month. A $1,000 deposit is due at signing and will be deducted from your first monthly payment. There is a 3% processing fee for all credit card payments. Full payment is required before publishing.</p>
                  <table>
                    <tbody>
                      <tr><td>Readora Publishing</td><td style="text-align:right;font-weight:600;">$21,000</td></tr>
                      <tr><td>Audiobook</td><td style="text-align:right;font-weight:600;">$8,000</td></tr>
                      ${imprintCost > 0 ? `<tr><td>Custom Imprint</td><td style="text-align:right;font-weight:600;">${fmt(imprintCost)}</td></tr>` : ''}
                      ${returningAuthor ? `<tr><td>Returning Author Discount</td><td style="text-align:right;color:#4ade80;font-weight:600;">-$1,000</td></tr>` : ''}
                      ${Object.keys(selectedAddons).filter(k => selectedAddons[k]).map(id => {
                        const a = [...ADDONS.flatMap(g => g.items), ...MORE_ADDONS].find(x => x.id === id)
                        return a ? `<tr><td>${a.name}</td><td style="text-align:right;font-weight:600;">${fmt(a.price)}</td></tr>` : ''
                      }).join('')}
                      <tr style="border-top:2px solid #e02d2d;"><td style="font-weight:700;font-size:16px;padding-top:12px;">Total</td><td style="text-align:right;font-weight:700;font-size:16px;color:#e02d2d;padding-top:12px;">${fmt(total)}</td></tr>
                    </tbody>
                  </table>
                ` }} />
                <div className="pub-step-nav">
                  <button className="pub-btn pub-btn--outline" onClick={() => goToStep(1)}>← Back to Configure</button>
                  <button className="pub-btn pub-btn--primary" onClick={() => goToStep(3)}>Sign Agreement →</button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="pub-card">
                <h2>Sign Your Agreement</h2>
                <p style={{ color: '#a0a0a0', fontSize: '13px', margin: '4px 0 20px' }}>Complete the fields below and type your full legal name to sign.</p>

                <div className="pub-sign-field">
                  <label>Full Legal Name</label>
                  <input type="text" placeholder="Your full name as it appears on legal documents" value={signName} onChange={e => setSignName(e.target.value)} />
                </div>
                <div className="pub-sign-field">
                  <label>Email Address</label>
                  <input type="email" placeholder="your@email.com" value={signEmail} onChange={e => setSignEmail(e.target.value)} />
                </div>
                <div className="pub-sign-field">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="(555) 555-5555" value={signPhone} onChange={e => setSignPhone(e.target.value)} />
                </div>
                <div className="pub-sign-field">
                  <label>Mailing Address</label>
                  <input type="text" placeholder="Street address" value={signAddress} onChange={e => setSignAddress(e.target.value)} />
                </div>
                <div className="pub-sign-row">
                  <div className="pub-sign-field" style={{ flex: 2 }}>
                    <label>City</label>
                    <input type="text" placeholder="City" value={signCity} onChange={e => setSignCity(e.target.value)} />
                  </div>
                  <div className="pub-sign-field" style={{ flex: 1 }}>
                    <label>State</label>
                    <input type="text" placeholder="State" value={signState} onChange={e => setSignState(e.target.value)} />
                  </div>
                  <div className="pub-sign-field" style={{ flex: 1 }}>
                    <label>Zip Code</label>
                    <input type="text" placeholder="Zip" value={signZip} onChange={e => setSignZip(e.target.value)} />
                  </div>
                </div>

                <label className="pub-sign-checkbox">
                  <input type="checkbox" checked={signTerms} onChange={e => setSignTerms(e.target.checked)} />
                  I have read and agree to the terms of this agreement
                </label>
                <label className="pub-sign-checkbox">
                  <input type="checkbox" checked={signPayment} onChange={e => setSignPayment(e.target.checked)} />
                  I agree to the payment schedule shown in the summary
                </label>
                <label className="pub-sign-checkbox">
                  <input type="checkbox" checked={signElectronic} onChange={e => setSignElectronic(e.target.checked)} />
                  I consent to conduct this transaction electronically
                </label>

                <div className="pub-signature-box">
                  <input type="text" placeholder="Type your full legal name" value={signSig} onChange={e => setSignSig(e.target.value)} />
                  <div className="hint">Type your full legal name exactly as entered above to sign</div>
                </div>

                <div style={{ fontSize: '12px', color: '#a0a0a0', marginTop: '12px', textAlign: 'center' }}>
                  Signed on: {new Date().toLocaleString()} · IP recorded automatically
                </div>

                <div className="pub-consult-cta">
                  <p>Have questions before signing? Talk to our team first.</p>
                  <a href="/consult" className="pub-btn pub-btn--outline">Schedule a Free Consult</a>
                </div>

                <div className="pub-step-nav">
                  <button className="pub-btn pub-btn--outline" onClick={() => goToStep(2)}>← Back to Agreement</button>
                  <button className={`pub-btn pub-btn--primary${signValid ? '' : ' pub-btn--disabled'}`} onClick={() => signValid && goToStep(4)}>Proceed to Payment →</button>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div className="pub-card">
                <h2>Make Your Deposit</h2>
                <div className="pub-pay-summary">
                  <div className="first-payment">$1,000</div>
                  <div className="pay-note">Deposit to get started</div>
                  <div className="pay-note" style={{ marginTop: '8px' }}>
                    This $1,000 will be deducted from your first monthly payment of {monthlyStr}/mo.
                  </div>
                  <div className="pay-note pay-note--green" style={{ marginTop: '8px' }}>
                    Pay your deposit and we'll start your book process immediately.
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button
                    className={`pub-btn pub-btn--primary pub-btn--lg${payBtnLoading ? ' pub-btn--disabled' : ''}`}
                    onClick={handleCheckout}
                  >
                    {payBtnLoading ? 'Creating checkout session...' : 'Pay $1,000 Deposit'}
                  </button>
                  <p style={{ fontSize: '12px', color: '#a0a0a0', marginTop: '12px' }}>
                    You will be redirected to Stripe's secure checkout page.<br />
                    Powered by Stripe. Your card information never touches our servers.
                  </p>
                </div>

                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                  <a href="/pricing/success?skipped=true" style={{ color: '#a0a0a0', fontSize: '13px', textDecoration: 'underline' }}>Skip deposit for now</a>
                  <p style={{ fontSize: '11px', color: '#a0a0a0', marginTop: '6px', opacity: 0.7 }}>
                    Your book process won't begin until we receive your first payment or ACH information.
                  </p>
                </div>

                <div className="pub-consult-cta">
                  <p>Changed your mind? No problem. Talk to us first.</p>
                  <a href="/consult" className="pub-btn pub-btn--outline">Schedule a Free Consult Instead</a>
                </div>

                <div className="pub-step-nav">
                  <button className="pub-btn pub-btn--outline" onClick={() => goToStep(3)}>← Back to Sign</button>
                  <span />
                </div>
              </div>
            )}

          </div>

          {/* ── SIDEBAR ── */}
          <div className="pub-sidebar">
            <div className="pub-summary">
              <h3>Project Summary</h3>
              <div className="pub-summary__line"><span className="label">Readora Publishing</span><span className="value">$21,000</span></div>
              <div className="pub-summary__line"><span className="label">Audiobook</span><span className="value">$8,000</span></div>
              {imprintCost > 0 && (
                <div className="pub-summary__line"><span className="label">Custom imprint</span><span className="value">+{fmt(imprintCost)}</span></div>
              )}
              {returningAuthor && (
                <div className="pub-summary__line"><span className="label">Returning author discount</span><span className="value" style={{ color: '#4ade80' }}>-$1,000</span></div>
              )}
              {[...ADDONS.flatMap(g => g.items), ...MORE_ADDONS].filter(a => selectedAddons[a.id]).map(a => (
                <div key={a.id} className="pub-summary__line"><span className="label">{a.name}</span><span className="value">+{fmt(a.price)}</span></div>
              ))}
              <div className="pub-summary__total">
                <span>Total Investment</span>
                <span className="value">{fmt(total)}</span>
              </div>
              <div className="pub-summary__payment">
                <div className="amount">{monthlyStr}</div>
                <div className="term">{NUM_MONTHS} monthly payments</div>
              </div>

              <div className="pub-email-quote">
                <div style={{ fontSize: '13px', color: '#a0a0a0', marginBottom: '8px' }}>Email this quote to yourself</div>
                <div className="pub-email-quote__row">
                  <input type="email" placeholder="your@email.com" value={quoteEmail} onChange={e => setQuoteEmail(e.target.value)} />
                  <button onClick={handleEmailQuote}>Send</button>
                </div>
                {quoteStatus && (
                  <div className="pub-email-quote__status" style={{ color: quoteStatus.ok === true ? '#4ade80' : quoteStatus.ok === false ? '#f87171' : '#a0a0a0' }}>
                    {quoteStatus.msg}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
