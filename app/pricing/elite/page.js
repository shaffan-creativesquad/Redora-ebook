'use client'
import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../publishing/pub.css'

const BASE_PRICE = 135000
const NUM_MONTHS = 15
const EXTRA_AUTHOR_PRICE = 3500
const RETURNING_DISCOUNT = 4000
const API_BASE = 'https://e-book-nine-mu.vercel.app'

const INCLUDED = [
  { icon: 'ph ph-user-circle',     label: 'Dedicated Publishing Manager',       detail: 'Your single point of contact from start to finish' },
  { icon: 'ph ph-compass',         label: 'North Star & Book Roadmap',           detail: 'Strategic positioning for your book\'s purpose and audience' },
  { icon: 'ph ph-pen-nib',         label: 'Premier Ghostwriter',                 detail: 'A dedicated writer who captures your voice and expertise' },
  { icon: 'ph ph-chats',           label: '20 In-Depth Content Interviews',      detail: 'Two-hour sessions. What you say on these calls becomes your book.' },
  { icon: 'ph ph-text-aa',         label: 'Copyediting & Proofreading',          detail: 'Professional polish for a flawless final product' },
  { icon: 'ph ph-paint-brush',     label: 'Professional Cover Design',           detail: '3+ options, 5 rounds of revisions. Your decision.' },
  { icon: 'ph ph-layout',          label: 'Interior Layout Design',              detail: 'Hardcover, paperback, and eBook formats' },
  { icon: 'ph ph-microphone',      label: 'Audiobook Production & Distribution', detail: 'Professional narration, distributed to Audible, Apple Books, and more' },
  { icon: 'ph ph-globe',           label: 'Global Distribution',                 detail: 'Amazon, Barnes & Noble, Apple Books, Kobo, bookstores worldwide' },
  { icon: 'ph ph-rocket',          label: 'Book Launch Marketing',               detail: 'Amazon strategy, social graphics, email templates, Goodreads giveaway' },
  { icon: 'ph ph-package',         label: '50 Paperback or 25 Hardcover Copies', detail: 'Author copies included. Unlimited extras at printer cost.' },
  { icon: 'ph ph-shield-check',    label: 'Copyright & ISBN Registration',       detail: 'U.S. Copyright Office filing and all ISBNs handled' },
  { icon: 'ph ph-currency-dollar', label: '100% of All Rights and Royalties',   detail: 'All book profits and rights are yours. All accounts are yours.' },
]

const ADDONS = [
  {
    group: 'Readership & Reviews',
    items: [
      { id: 'expanded',   label: 'Expanded Readership',  price: 3000,  hook: 'Reach thousands of new readers beyond your personal network.', bullets: ['NetGalley campaign (6 months, targeted to reviewers and industry readers)', 'Premium Goodreads giveaway with direct follow-up to every entrant', '5-Day Amazon promotion stack (Facebook ads + email promos + eBook price drop)'], tag: 'Ideal for boosting visibility and early reviews' },
      { id: 'spotlight',  label: 'Author Spotlight',     price: 3500,  hook: 'Earn third-party endorsements and prestigious award recognition.', bullets: ['5 major book award submissions', 'Kirkus Indie Review (trusted since 1933)', 'IndieReader Review (4-5 star books get featured interview)'], tag: 'Ideal for authors leading with prestige and trust' },
    ],
  },
  {
    group: 'Visibility & Media',
    items: [
      { id: 'podcast',    label: 'Podcast PR Campaign',  price: 8250,  hook: 'Get booked as a guest expert on high-fit podcasts.', bullets: ['3-month podcast booking strategy', 'Custom media kit and pitch materials', 'Targeted host selection, scheduling, and follow-up'], tag: 'Ideal for building thought leadership' },
      { id: 'pr',         label: 'PR Campaign',          price: 12000, hook: 'Comprehensive media outreach to secure interviews and press coverage.', bullets: ['Full public relations campaign (3 months)', 'Media kit creation and pitch development', 'Audience research and bi-weekly progress reports'], tag: 'Ideal for authors who want press and media coverage' },
    ],
  },
  {
    group: 'Growth & Advertising',
    items: [
      { id: 'amazon-ads', label: 'Amazon Advertising',       price: 10000, hook: 'Expert-managed Amazon ad campaigns for sustained book sales.', bullets: ['4 months of managed advertising', 'Preset budgets with comprehensive performance reporting'], tag: 'Ideal for long-term Amazon visibility' },
      { id: 'video',      label: 'Professional Video Content', price: 12000, hook: '50 short-form social videos from one professional filming day.', bullets: ['One day of professional filming', '50 clips formatted for all social platforms'], tag: 'Ideal for building your author brand on social media' },
    ],
  },
]

const MORE_ADDONS = [
  { id: 'netgalley',      label: 'NetGalley Campaign',           price: 1500,  hook: '6 months on NetGalley, targeted to reviewers and industry readers.', tag: 'Standalone option (also included in Expanded Readership)' },
  { id: 'ads',            label: 'Online Advertising',            price: 1300,  hook: 'Targeted digital ad campaigns to promote your book.' },
  { id: 'landing',        label: 'Landing Page & Email Campaign', price: 5000,  hook: 'Custom landing page and email marketing to build your audience before launch.' },
  { id: 'publicity',      label: 'Publicity Campaign (6 months)', price: 24000, hook: 'Extended 6-month publicity and media campaign with full agency support.' },
  { id: 'authors-unite',  label: 'Authors Unite Campaign',        price: 35000, hook: 'Guaranteed sales, verified reviews, media placements, and Barnes & Noble bestseller campaign.' },
]

function fmt(n) { return '$' + n.toLocaleString() }
function fmtM(n) { return '$' + n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }

export default function ElitePage() {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState({})
  const [imprint, setImprint] = useState('lioncrest')
  const [extraAuthors, setExtraAuthors] = useState(0)
  const [returning, setReturning] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)

  // Sign step
  const [signName, setSignName] = useState('')
  const [signEmail, setSignEmail] = useState('')
  const [signPhone, setSignPhone] = useState('')
  const [signAddress, setSignAddress] = useState('')
  const [signCity, setSignCity] = useState('')
  const [signState, setSignState] = useState('')
  const [signZip, setSignZip] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [agreePayment, setAgreePayment] = useState(false)
  const [agreeElectronic, setAgreeElectronic] = useState(false)
  const [signature, setSignature] = useState('')

  // Email quote
  const [quoteEmail, setQuoteEmail] = useState('')
  const [quoteStatus, setQuoteStatus] = useState('')

  // Checkout
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  const toggle = id => setSelected(s => ({ ...s, [id]: !s[id] }))

  const imprintCost = imprint === 'custom-scribe' ? 750 : imprint === 'custom-own' ? 375 : 0
  const authorCost = extraAuthors * EXTRA_AUTHOR_PRICE
  const returningDisc = returning ? RETURNING_DISCOUNT : 0

  const addonTotal = useMemo(() => {
    let t = 0
    ;[...ADDONS.flatMap(g => g.items), ...MORE_ADDONS].forEach(a => { if (selected[a.id]) t += a.price })
    return t
  }, [selected])

  const total = BASE_PRICE + imprintCost + authorCost + addonTotal - returningDisc
  const monthly = total / NUM_MONTHS

  const selectedAddonList = useMemo(() => {
    return [...ADDONS.flatMap(g => g.items), ...MORE_ADDONS].filter(a => selected[a.id])
  }, [selected])

  const signValid =
    signName.trim() &&
    signEmail.trim() &&
    signAddress.trim() &&
    signCity.trim() &&
    signState.trim() &&
    signZip.trim() &&
    agreeTerms && agreePayment && agreeElectronic &&
    signature.trim().toLowerCase() === signName.trim().toLowerCase()

  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  const agreementHTML = `
    <h4>Scribe Agreement</h4>
    <p>This agreement is intentionally written in plain English. We think the impenetrable lawyer-speak of modern contracts inhibits understanding, cooperation, and mutual benefit, which helps no one (except the lawyers). We want what's best for both of us, now and in the future, and we think plain English agreements help achieve that.</p>
    <p>In short, the purpose of this agreement is simple:</p>
    <p>You are hiring us, Scribe Media, to perform the services described below. This agreement is the official record of our relationship, and it lays out what we can both expect, who should do what and when, and what will happen if something goes wrong.</p>

    <h4>What We Will Do for You</h4>
    <p>The Scribe Elite experience is the premier ghostwriting service. White-glove, start to finish. We handle everything so you can focus on your ideas.</p>
    <p><strong>Project Management:</strong> You will be assigned a dedicated Publishing Manager who functions as the project manager for your book, ensuring all next steps are clearly outlined, deadlines are met, and the entire process runs smoothly. They will serve as your main point of contact and coordinate all aspects to keep everything on track and aligned with your vision.</p>
    <p><strong>Book Positioning &amp; Book Roadmap Creation:</strong> Several in-depth collaborative calls to position your book in the market and create a comprehensive Book Roadmap that serves as the blueprint for your manuscript.</p>
    <p><strong>Content Interviews:</strong> Interviews based on the Book Roadmap create the raw material for your manuscript. We work around your schedule with as many sessions as needed.</p>
    <p><strong>Transcription and Manuscript Writing:</strong> Scribe turns your words into a cohesive, polished book. An elite Scribe writer crafts your manuscript from the interviews.</p>
    <p><strong>Revisions:</strong> You will receive 10 revision calls, chapter by chapter, to refine and perfect your manuscript until it matches your vision.</p>
    <p><strong>Research:</strong> 20 hours of research included. Our team will reference your materials, books, podcasts, and other sources to enrich and support your content.</p>
    <p><strong>Proofreading:</strong> Your book will go through full quality assurance and technical preparation to ensure it is ready to publish.</p>
    <p><strong>Book Cover Design:</strong> Our design team will create a high-quality book cover for your print and eBook versions. You will get at least three cover design options and up to five rounds of edits, backed by market research. The cover decision is yours alone.</p>
    <p><strong>Interior Layout Design &amp; eBook Conversion:</strong> An interior layout designer will craft the interior for your hardcover, paperback, and eBook editions. You can provide up to 25 print-ready visual images. Custom graphics incur an additional cost.</p>
    <p><strong>Copyright &amp; ISBN Registration:</strong> Your manuscript will be copyrighted with the U.S. Copyright Office. Your book will be registered in Bowker's Books In Print database with all necessary ISBNs and barcodes.</p>
    <p><strong>Publishing Imprint:</strong> You will publish under our Lioncrest Imprint. You may publish under your own custom imprint at no additional cost.</p>
    <p><strong>Pre-Launch Physical Proof:</strong> We'll order you a physical proof copy of your paperback and hardcover to review before setting a launch date.</p>
    <p><strong>Publishing:</strong> We will format, publish, and distribute your title on Kindle Direct Publishing and IngramSpark platforms.</p>
    <p><strong>Author Copies:</strong> We will provide 50 paperback copies or 25 hardcover copies at no extra charge. You can order unlimited additional copies at the printer's cost.</p>
    <p><strong>Audiobook Creation and Distribution:</strong> Included with your Elite package. We will facilitate the creation and publication of an audiobook version. You can narrate it yourself or use a professional voice actor. Your audiobook will be available on Amazon, Audible, Apple Books, Scribd, Google Play, and more.</p>
    <p><strong>Book Distribution:</strong> Your eBook/Kindle will be available on Amazon's global marketplaces plus iBooks, Kobo, Barnes &amp; Noble, and more. Print books will be available through Amazon and Ingram Book Group's channels, reaching tens of thousands of retailers, libraries, and bookstores worldwide.</p>
    <p><strong>Quality Assurance Commitment:</strong> We are dedicated to delivering a professionally crafted book that adheres to the highest traditional publishing standards.</p>

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
    <p><strong>Unlock Fees:</strong> If you need to change something you've already locked in, we can do so, but it will add time and incur additional cost.</p>
    <p><strong>Audiobook Overage:</strong> Professional narrator covers up to 75,430 words / 8.38 hours. Self-narration covers up to 56,298 words / 6.26 hours with 18 hours of studio time. Overages will be quoted before recording begins.</p>

    <h4>Post-Publishing Support</h4>
    <p>Within three months of your book's launch date, we will fix one round of typos for free. Beyond this, contact alumni@scribemedia.com for post-publishing support quotes.</p>

    <h4>AI Content</h4>
    <p>We reserve the right to use AI as a productivity tool. You may request details of AI use at any time, or explicitly ask us not to use AI on your project. You must notify us of any AI-generated content (text, images, translations) in your manuscript.</p>

    <h4>Best Practices</h4>
    <p><strong>Review and Give Notes:</strong> Be as honest and intentional with feedback as possible. You call the shots.</p>
    <p><strong>Communication:</strong> A fair amount of our work requires video and audio calls. Delays in communication can delay your book's schedule and may result in additional costs.</p>
    <p><strong>Cancellation Policy:</strong> Cancel or reschedule calls 24+ hours in advance. One missed call is fine. Beyond that, no-shows or late cancellations are subject to a $150 fee.</p>

    <h4>Legal Terms</h4>
    <p><strong>Call Recordings:</strong> Our calls will be recorded and may be monitored. By signing, you consent to this recording.</p>
    <p><strong>Intellectual Property:</strong> Until full payment is received, your manuscript will not be published. If the project is terminated before full payment, you retain ownership of the content paid for up to that point.</p>
    <p><strong>Royalties and Profits:</strong> You get all the profit from your work. Neither Scribe Media, nor any third party is entitled to any share of book profits. All book and distribution accounts are yours.</p>
    <p><strong>Liability &amp; Indemnification:</strong> You are solely responsible for the content of your book. You represent and warrant that the content does not infringe the rights of any third party. You agree to indemnify Scribe Media for any liability arising from your book's content.</p>
    <p><strong>Image and IP Licensing:</strong> If you provide images, you must have the right to use them. If we source images, we will obtain proper licenses. Both parties indemnify each other for their respective media sourcing.</p>
    <p><strong>Cancellation:</strong> If either party decides to part ways, we will discuss next steps. If paid invoices (beyond the non-refundable first invoice) exceed incurred creative costs, we will refund the difference.</p>
    <p><strong>Delay:</strong> If you need to pause, we cannot guarantee the same timeline or team when you restart. Projects are auto-paused after 4 unreturned contact attempts. Pauses of 3+ months may require a price update.</p>
    <p><strong>The Sunset Clause:</strong> If you are non-responsive for 12 months or more, we have the right to cancel the project and retain payment.</p>
    <p><strong>No Hidden Costs:</strong> We will never do additional work that costs you money without first getting your explicit approval.</p>
    <p><strong>Pricing Expiration:</strong> The price you commit to is good for 3 months. If you don't start within 3 months and prices have increased, an amended agreement will be required.</p>
    <p><strong>Outside Work:</strong> You agree not to hire Scribe team members for independent work identical or similar to our services without explicit approval.</p>

    <h4>Your Investment</h4>
    <p>Your investment is paid over <span class="pub-dynamic-field">${NUM_MONTHS}</span> months at <span class="pub-dynamic-field">${fmtM(monthly)}</span>/month. A $1,000 deposit is due at signing and will be deducted from your first monthly payment. Remaining payments will be set up via ACH. There is a 3% processing fee for all credit card payments. If we're still working on your book beyond the payment term, payments continue at $2,500/month. Unpaid invoices past 14 days will pause work on your project. Full payment is required before publishing.</p>

    <table style="width:100%;border-collapse:collapse;margin:16px 0;">
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
          <td style="padding:10px 0;color:#a0a0a0;">Scribe Elite Ghostwriting Services (includes audiobook)</td>
          <td style="padding:10px 0;text-align:right;color:#f0f0f0;font-weight:600;">$135,000</td>
        </tr>
        ${extraAuthors > 0 ? `<tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:10px 0;color:#a0a0a0;">Additional Authors (${extraAuthors})</td><td style="padding:10px 0;text-align:right;color:#f0f0f0;font-weight:600;">${fmt(authorCost)}</td></tr>` : ''}
        ${imprintCost > 0 ? `<tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:10px 0;color:#a0a0a0;">Custom Imprint</td><td style="padding:10px 0;text-align:right;color:#f0f0f0;font-weight:600;">${fmt(imprintCost)}</td></tr>` : ''}
        ${returningDisc > 0 ? `<tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:10px 0;color:#a0a0a0;">Returning Author Discount</td><td style="padding:10px 0;text-align:right;color:#4ade80;font-weight:600;">-${fmt(returningDisc)}</td></tr>` : ''}
        ${selectedAddonList.map(a => `<tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:10px 0;color:#a0a0a0;">${a.label}</td><td style="padding:10px 0;text-align:right;color:#f0f0f0;font-weight:600;">+${fmt(a.price)}</td></tr>`).join('')}
        <tr style="border-top:2px solid #e02d2d;">
          <td style="padding:12px 0;font-weight:700;font-size:16px;color:#f0f0f0;">Total</td>
          <td style="padding:12px 0;text-align:right;font-weight:700;font-size:16px;color:#e02d2d;">${fmt(total)}</td>
        </tr>
      </tbody>
    </table>
  `

  async function handleEmailQuote(e) {
    e.preventDefault()
    if (!quoteEmail) return
    setQuoteStatus('Sending…')
    try {
      const res = await fetch(API_BASE + '/api/email-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: quoteEmail,
          tier: 'Scribe Elite',
          total,
          monthly,
          months: NUM_MONTHS,
          addons: selectedAddonList.map(a => ({ name: a.label, price: a.price })),
        }),
      })
      setQuoteStatus(res.ok ? 'Quote sent! Check your inbox.' : 'Failed to send. Try again.')
    } catch {
      setQuoteStatus('Failed to send. Try again.')
    }
  }

  async function startCheckout() {
    setCheckoutLoading(true)
    try {
      const res = await fetch(API_BASE + '/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tier: 'Scribe Elite',
          amount: 1000,
          name: signName,
          email: signEmail,
          total,
          monthly,
          months: NUM_MONTHS,
        }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
      else setCheckoutLoading(false)
    } catch {
      setCheckoutLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="pub-page">

        {/* Progress */}
        <div className="pub-progress">
          {['Configure', 'Agreement', 'Sign', 'Pay'].map((label, i) => (
            <div key={label} style={{ display: 'contents' }}>
              <div className={`pub-progress__step${step === i + 1 ? ' is-active' : step > i + 1 ? ' is-done' : ''}`}>
                <span className="pub-progress__num">{step > i + 1 ? '✓' : i + 1}</span>
                <span>{label}</span>
              </div>
              {i < 3 && <div className="pub-progress__line" />}
            </div>
          ))}
        </div>

        <div className="pub-layout">
          {/* ── MAIN ── */}
          <div className="pub-main">

            {/* STEP 1 */}
            {step === 1 && (
              <div>
                {/* Hero */}
                <div className="pub-hero">
                  <div className="pub-hero__badge">The Premier Ghostwriting Experience</div>
                  <h1 className="pub-hero__title">Scribe Elite</h1>
                  <p className="pub-hero__subtitle">Our most comprehensive writing and publishing package. A dedicated ghostwriter captures your voice and ideas through in-depth interviews, delivering a polished, publish-ready manuscript. You retain 100% of your royalties and full ownership.</p>
                  <div className="pub-hero__price-row">
                    <span className="pub-hero__price">$135,000</span>
                    <span className="pub-hero__price-term">over 15 months</span>
                  </div>
                  <div className="pub-hero__price-note">$9,000/mo · $1,000 deposit to get started</div>
                </div>

                {/* Included */}
                <div className="pub-included">
                  <div className="pub-included__heading">Everything Included in Your Package</div>
                  <div className="pub-included__grid">
                    {INCLUDED.map(item => (
                      <div key={item.label} className="pub-included__item">
                        <div className="pub-included__icon"><i className={item.icon} /></div>
                        <div>
                          <div className="pub-included__label">{item.label}</div>
                          <div className="pub-included__detail">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Add-ons */}
                <div className="pub-card pub-enhance">
                  <h2 className="pub-enhance__heading">Enhance Your Launch</h2>
                  <p className="pub-enhance__sub">Optional services to maximize your book's reach and impact.</p>

                  {ADDONS.map(group => (
                    <div key={group.group}>
                      <div className="pub-enhance__group-label">{group.group}</div>
                      {group.items.map(item => (
                        <label
                          key={item.id}
                          className={`pub-mkt-card${selected[item.id] ? ' is-selected' : ''}`}
                          htmlFor={`opt-${item.id}`}
                        >
                          <input
                            type="checkbox"
                            id={`opt-${item.id}`}
                            checked={!!selected[item.id]}
                            onChange={() => toggle(item.id)}
                          />
                          <div className="pub-mkt-card__body">
                            <div className="pub-mkt-card__top">
                              <div className="pub-mkt-card__name">{item.label}</div>
                              <div className="pub-mkt-card__price">{fmt(item.price)}</div>
                            </div>
                            <div className="pub-mkt-card__hook">{item.hook}</div>
                            {item.bullets && (
                              <ul className="pub-mkt-card__details">
                                {item.bullets.map(b => <li key={b}>{b}</li>)}
                              </ul>
                            )}
                            {item.tag && <div className="pub-mkt-card__tag">{item.tag}</div>}
                          </div>
                        </label>
                      ))}
                    </div>
                  ))}

                  <button className={`pub-more-toggle${showMore ? ' is-open' : ''}`} onClick={() => setShowMore(v => !v)}>
                    <span>More options</span>
                    <span className="arrow">▼</span>
                  </button>

                  {showMore && (
                    <div>
                      {MORE_ADDONS.map(item => (
                        <label
                          key={item.id}
                          className={`pub-mkt-card${selected[item.id] ? ' is-selected' : ''}`}
                          htmlFor={`opt-${item.id}`}
                        >
                          <input
                            type="checkbox"
                            id={`opt-${item.id}`}
                            checked={!!selected[item.id]}
                            onChange={() => toggle(item.id)}
                          />
                          <div className="pub-mkt-card__body">
                            <div className="pub-mkt-card__top">
                              <div className="pub-mkt-card__name">{item.label}</div>
                              <div className="pub-mkt-card__price">{fmt(item.price)}</div>
                            </div>
                            <div className="pub-mkt-card__hook">{item.hook}</div>
                            {item.tag && <div className="pub-mkt-card__tag">{item.tag}</div>}
                          </div>
                        </label>
                      ))}
                    </div>
                  )}

                  <p style={{ fontSize: '12px', color: '#777', marginTop: '16px' }}>Want to bundle multiple services? Ask your Scribe representative about package discounts.</p>
                </div>

                {/* Customize */}
                <button
                  className={`pub-customize-toggle${showCustomize ? ' is-open' : ''}`}
                  onClick={() => setShowCustomize(v => !v)}
                >
                  <span>Customize Your Package</span>
                  <span className="arrow">▼</span>
                </button>

                {showCustomize && (
                  <div className="pub-card" style={{ marginTop: 0 }}>
                    <h3 style={{ marginTop: 0 }}>Publishing Imprint</h3>
                    <p style={{ fontSize: '13px', color: '#777', marginBottom: '12px' }}>Choose how your book is branded. Elite authors publish under Lioncrest Publishing at no extra cost.</p>
                    {[
                      { value: 'lioncrest',    label: 'Lioncrest Publishing (included)' },
                      { value: 'custom-scribe', label: 'Custom Publishing Imprint (Scribe designs your logo) +$750' },
                      { value: 'custom-own',    label: 'Custom Imprint (bring your own logo) +$375' },
                    ].map(opt => (
                      <label key={opt.value} className="pub-radio">
                        <input type="radio" name="imprint" value={opt.value} checked={imprint === opt.value} onChange={() => setImprint(opt.value)} />
                        {opt.label}
                      </label>
                    ))}

                    <h3>Additional Authors</h3>
                    <div className="pub-stepper-row">
                      <div className="pub-stepper-row__info">
                        <div className="pub-stepper-row__name">Additional Author</div>
                        <div className="pub-stepper-row__desc">Add co-authors to the project ($3,500 each)</div>
                      </div>
                      <div className="pub-stepper">
                        <button className="pub-stepper__btn" onClick={() => setExtraAuthors(v => Math.max(0, v - 1))}>−</button>
                        <span className="pub-stepper__val">{extraAuthors}</span>
                        <button className="pub-stepper__btn" onClick={() => setExtraAuthors(v => Math.min(10, v + 1))}>+</button>
                      </div>
                      {authorCost > 0 && <span style={{ fontSize: '14px', fontWeight: 600, color: '#e02d2d' }}>+{fmt(authorCost)}</span>}
                    </div>

                    <h3>Returning Author</h3>
                    <label className="pub-check">
                      <input type="checkbox" checked={returning} onChange={e => setReturning(e.target.checked)} />
                      <div className="pub-check__info">
                        <div className="pub-check__name">Returning Author Discount</div>
                        <div className="pub-check__desc">For authors who have previously published with Scribe</div>
                      </div>
                      <div className="pub-check__price">-{fmt(RETURNING_DISCOUNT)}</div>
                    </label>
                  </div>
                )}

                <div className="pub-step-nav" style={{ borderTop: 'none', paddingTop: 0, marginTop: '24px' }}>
                  <a href="/pricing" className="pub-btn pub-btn--outline">← All Services</a>
                  <button className="pub-btn pub-btn--primary" onClick={() => setStep(2)}>Review Agreement →</button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="pub-card">
                <h2>Your Agreement</h2>
                <p style={{ color: '#777', fontSize: '13px', margin: '4px 0 16px' }}>Please review the full agreement below. Scroll to read all sections.</p>
                <div className="pub-agreement" dangerouslySetInnerHTML={{ __html: agreementHTML }} />
                <div className="pub-step-nav">
                  <button className="pub-btn pub-btn--outline" onClick={() => setStep(1)}>← Back to Configure</button>
                  <button className="pub-btn pub-btn--primary" onClick={() => setStep(3)}>Sign Agreement →</button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="pub-card">
                <h2>Sign Your Agreement</h2>
                <p style={{ color: '#777', fontSize: '13px', margin: '4px 0 20px' }}>Complete the fields below and type your full legal name to sign.</p>

                <div className="pub-sign-field">
                  <label htmlFor="sign-name">Full Legal Name</label>
                  <input type="text" id="sign-name" placeholder="Your full name as it appears on legal documents" value={signName} onChange={e => setSignName(e.target.value)} />
                </div>
                <div className="pub-sign-field">
                  <label htmlFor="sign-email">Email Address</label>
                  <input type="email" id="sign-email" placeholder="your@email.com" value={signEmail} onChange={e => setSignEmail(e.target.value)} />
                </div>
                <div className="pub-sign-field">
                  <label htmlFor="sign-phone">Phone Number</label>
                  <input type="tel" id="sign-phone" placeholder="(555) 555-5555" value={signPhone} onChange={e => setSignPhone(e.target.value)} />
                </div>
                <div className="pub-sign-field">
                  <label htmlFor="sign-address">Mailing Address</label>
                  <input type="text" id="sign-address" placeholder="Street address" value={signAddress} onChange={e => setSignAddress(e.target.value)} />
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div className="pub-sign-field" style={{ flex: 2 }}>
                    <label htmlFor="sign-city">City</label>
                    <input type="text" id="sign-city" placeholder="City" value={signCity} onChange={e => setSignCity(e.target.value)} />
                  </div>
                  <div className="pub-sign-field" style={{ flex: 1 }}>
                    <label htmlFor="sign-state">State</label>
                    <input type="text" id="sign-state" placeholder="State" value={signState} onChange={e => setSignState(e.target.value)} />
                  </div>
                  <div className="pub-sign-field" style={{ flex: 1 }}>
                    <label htmlFor="sign-zip">Zip Code</label>
                    <input type="text" id="sign-zip" placeholder="Zip" value={signZip} onChange={e => setSignZip(e.target.value)} />
                  </div>
                </div>

                <label className="pub-sign-checkbox">
                  <input type="checkbox" checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} />
                  I have read and agree to the terms of this agreement
                </label>
                <label className="pub-sign-checkbox">
                  <input type="checkbox" checked={agreePayment} onChange={e => setAgreePayment(e.target.checked)} />
                  I agree to the payment schedule shown in the summary
                </label>
                <label className="pub-sign-checkbox">
                  <input type="checkbox" checked={agreeElectronic} onChange={e => setAgreeElectronic(e.target.checked)} />
                  I consent to conduct this transaction electronically
                </label>

                <div className="pub-signature-box">
                  <input type="text" placeholder="Type your full legal name" value={signature} onChange={e => setSignature(e.target.value)} />
                  <div className="hint">Type your full legal name exactly as entered above to sign</div>
                </div>

                <div style={{ fontSize: '12px', color: '#777', marginTop: '12px', textAlign: 'center' }}>
                  Signed on: {today} · IP recorded automatically
                </div>

                <div className="pub-consult-cta">
                  <p>Have questions before signing? Talk to our team first.</p>
                  <a href="/consult" className="pub-btn pub-btn--outline pub-btn--lg">Schedule a Free Consult</a>
                </div>

                <div className="pub-step-nav">
                  <button className="pub-btn pub-btn--outline" onClick={() => setStep(2)}>← Back to Agreement</button>
                  <button
                    className={`pub-btn pub-btn--primary${signValid ? '' : ' pub-btn--disabled'}`}
                    onClick={() => signValid && setStep(4)}
                  >
                    Proceed to Payment →
                  </button>
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
                    This $1,000 will be deducted from your first monthly payment of {fmtM(monthly)}/mo.
                  </div>
                  <div className="pay-note" style={{ marginTop: '8px', color: '#4ade80' }}>
                    Pay your deposit and we'll start your book process immediately.
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button
                    className="pub-btn pub-btn--primary"
                    style={{ padding: '18px 48px', fontSize: '17px' }}
                    onClick={startCheckout}
                    disabled={checkoutLoading}
                  >
                    {checkoutLoading ? 'Redirecting…' : 'Pay $1,000 Deposit'}
                  </button>
                  <p style={{ fontSize: '12px', color: '#777', marginTop: '12px' }}>
                    You will be redirected to Stripe's secure checkout page.<br />
                    Powered by Stripe. Your card information never touches our servers.
                  </p>
                </div>

                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                  <a href="/pricing/success?skipped=true" style={{ color: '#777', fontSize: '13px', textDecoration: 'underline', cursor: 'pointer' }}>
                    Skip deposit for now
                  </a>
                  <p style={{ fontSize: '11px', color: '#777', marginTop: '6px', opacity: 0.7 }}>
                    Your book process won't begin until we receive your first payment or ACH information.
                  </p>
                </div>

                <div className="pub-consult-cta">
                  <p>Changed your mind? No problem. Talk to us first.</p>
                  <a href="/consult" className="pub-btn pub-btn--outline pub-btn--lg">Schedule a Free Consult Instead</a>
                </div>

                <div className="pub-step-nav">
                  <button className="pub-btn pub-btn--outline" onClick={() => setStep(3)}>← Back to Sign</button>
                  <span />
                </div>
              </div>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div className="pub-sidebar">
            <div className="pub-summary">
              <h3>Project Summary</h3>
              <div className="pub-summary__line">
                <span className="label">Scribe Elite (includes audiobook)</span>
                <span className="value">$135,000</span>
              </div>
              {extraAuthors > 0 && (
                <div className="pub-summary__line">
                  <span className="label">Additional Authors ({extraAuthors})</span>
                  <span className="value">+{fmt(authorCost)}</span>
                </div>
              )}
              {imprintCost > 0 && (
                <div className="pub-summary__line">
                  <span className="label">{imprint === 'custom-scribe' ? 'Custom Imprint (Scribe designed)' : 'Custom Imprint (own logo)'}</span>
                  <span className="value">+{fmt(imprintCost)}</span>
                </div>
              )}
              {returning && (
                <div className="pub-summary__line">
                  <span className="label">Returning Author Discount</span>
                  <span className="value" style={{ color: '#4ade80' }}>-{fmt(RETURNING_DISCOUNT)}</span>
                </div>
              )}
              {selectedAddonList.map(a => (
                <div key={a.id} className="pub-summary__line">
                  <span className="label">{a.label}</span>
                  <span className="value">+{fmt(a.price)}</span>
                </div>
              ))}
              <div className="pub-summary__total">
                <span>Total Investment</span>
                <span className="value">{fmt(total)}</span>
              </div>
              <div className="pub-summary__payment">
                <div className="amount">{fmtM(monthly)}</div>
                <div className="term">{NUM_MONTHS} monthly payments</div>
              </div>

              <div className="pub-email-quote">
                <div style={{ fontSize: '13px', color: '#777', marginBottom: '8px' }}>Email this quote to yourself</div>
                <form className="pub-email-quote__row" onSubmit={handleEmailQuote}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={quoteEmail}
                    onChange={e => setQuoteEmail(e.target.value)}
                  />
                  <button type="submit">Send</button>
                </form>
                {quoteStatus && <div className="pub-email-quote__status">{quoteStatus}</div>}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
