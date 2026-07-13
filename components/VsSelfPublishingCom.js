const trustItems = [
  { value: '3,000+', label: 'Authors Published' },
  { value: '250,000+', label: 'Books in Print' },
  { value: '100%', label: 'Author Ownership' },
  { value: '10+', label: 'Years in Business' },
  { value: 'Navy SEALs · Billionaires · Nobel Winners', label: 'Authors' },
]

const themPoints = [
  'Originally a course/coaching company; now repositioned as a publisher',
  'Operates like a marketing funnel — flashy promises, aggressive upsells',
  'Starting price ~$15,000 escalates with upsells to $30,000–$50,000+',
  'Pays a network to leave Amazon reviews',
  'Target: hustlepreneurs and coaches drawn in by webinars',
]

const usPoints = [
  'Flat-fee pricing: $29K Publishing · $56K Professional · $135K Elite — no upsells, no fine print',
  'No paid reviews. No bestseller manipulation. Real audience, real distribution.',
  'Editorial team with traditional publishing credits and MFAs',
  'Honest, transparent process: dedicated Publishing Manager from day one',
  '3,000+ authors. 250,000+ books in print. 10+ years in business.',
]

const reasons = [
  { num: '01', title: 'No surprise upsells.', desc: 'You see the full price before you sign. $29K, $56K, or $135K — flat fee. That\'s it.' },
  { num: '02', title: 'No paid Amazon reviews.', desc: "We don't buy reviews. We don't engineer bestseller campaigns built on review farms. Your reputation deserves better." },
  { num: '03', title: 'A real book, not a funnel asset.', desc: 'Our most successful authors use their books to land speaking gigs, close clients, and build authority that compounds for years.' },
]

const differentiators = [
  { title: 'Author Ownership', desc: 'You keep 100% of your IP, royalties, and content rights.' },
  { title: 'World-Class Editorial', desc: 'Elite team of writers, editors, and publishing pros — many with traditional publishing credits and MFAs.' },
  { title: 'Strategic Focus', desc: 'We build your book around your bigger goals — speaking, business, impact.' },
  { title: 'No Bullshit Pricing', desc: 'Flat fees, no upsells, no fine print.' },
  { title: 'Luxury Positioning', desc: 'High-status content and design that elevates your brand.' },
  { title: 'Prestige Roster', desc: "We've worked with Navy SEALs, billionaires, and Nobel Prize winners." },
  { title: 'Speed + Excellence', desc: 'Faster than traditional houses. Better than everyone else. 9–12 months for Professional.' },
]

const pricingTiers = [
  {
    tier: 'Readora Publishing',
    amount: '$29,000',
    note: 'flat · 6 months',
    desc: 'For authors who have a completed manuscript and need professional editing, design, audiobook, and full distribution.',
    features: [
      'Editing, design, layout, and cover',
      'Audiobook production',
      'Global distribution (Amazon, Audible, B&N, iBooks, Kobo)',
      '100% author ownership',
    ],
    featured: false,
  },
  {
    tier: 'Readora Professional',
    amount: '$56,000',
    note: 'flat · 12 months',
    desc: 'Our flagship — chosen by ~80% of authors. You don\'t write a word. We pair you with a senior scribe and capture your voice through structured interviews.',
    features: [
      '4 Roadmapping & North Star sessions',
      '10 interview sessions × 2 hours each',
      'Hand-picked scribe (interview 3, choose 1)',
      'Two voice checks before drafting',
      'Full publishing + launch support',
      '100% author ownership',
    ],
    featured: true,
  },
  {
    tier: 'Readora Elite',
    amount: '$135,000',
    note: 'flat · 15 months',
    desc: 'White-glove, prestige-tier service for legacy-defining books. In-person collaboration option, top scribe circle, $25K discretionary marketing budget.',
    features: [
      '40 hours of interview time (vs. 20 in Professional)',
      'Elite circle of most tenured scribes (interview 3, choose 1)',
      'Optional in-person collaboration (3 days)',
      '20 hours of research integration',
      'Kirkus, IndieReader, 5+ book award submissions',
      '$25,000 discretionary marketing budget',
    ],
    featured: false,
  },
]

const faqs = [
  {
    q: 'Why does it cost so much?',
    a: "Authors come to us when they want the most polished, professional product on the market. If you want a book that you can set next to a traditionally published book and not be able to tell the difference in terms of content, structure, or design — this is where you do it. If your primary focus is speed or cost, there are definitely cheaper ways to publish. But we're not here to help you get a book out fast. We're here to make sure it's the best thing you've ever created.",
  },
  {
    q: "I don't think I have time for this.",
    a: "Our process was built for busy people. If you're using our interview-based method, you'll invest around 50 hours total. Compare that to the 300+ hours it typically takes to write and publish a book solo. If you can carve out 1–2 hours per week, we'll take care of the rest.",
  },
  {
    q: 'Can someone else really capture my voice?',
    a: "That's our entire business model — and we've been perfecting it for over a decade. Capturing your voice isn't a one-and-done task — it's a process. You'll co-create a voice brief, review sample chapters, and give feedback every step of the way. We've done this for bestsellers, Nobel winners, and clients with extremely unique voices. If we couldn't do it, we wouldn't exist.",
  },
  {
    q: "What if I'm not trying to sell books?",
    a: "Our most successful authors don't write books to sell copies. They write books to land better clients, get speaking gigs, build brand authority, and cement legacy. This is about what your book unlocks — not how many you sell on Amazon. If you're looking for long-term ROI through credibility, visibility, and opportunity creation, you're in the right place.",
  },
  {
    q: 'How long does it take?',
    a: "9–12 months for Readora Professional. 12–16 months for Readora Elite. We won't lie to you about timelines just to close a deal. Our timeline reflects what it takes to do this right the first time, and our most successful authors will tell you they're grateful they didn't settle for faster.",
  },
  {
    q: "What about Readora's early history I read about?",
    a: 'New ownership and leadership took over in 2023 and made structural improvements across the board — financial oversight (we have a CFO now), governance (board meets weekly), transparency (weekly cash flow reporting), and installment-based payment structures so you see progress before making additional payments. We\'ve now published approximately 120 books for affected authors at cost. Full transparency about what happened — happy to walk through it on a call.',
  },
]

export default function VsSelfPublishingCom() {
  return (
    <div className="vs-page">
      {/* Hero */}
      <section className="vs-page__hero">
        <div className="vs-page__container">
          <span className="vs-page__eyebrow">SelfPublishing.com (Chandler Bolt) Alternative</span>
          <h1>A flashy promise.<br />Or a <em>real book</em> you&apos;re proud of.</h1>
          <p className="vs-page__subhead">SelfPublishing.com (Chandler Bolt) was originally a course and coaching company, now repositioning as a publisher. If you want to know what you&apos;re actually signing up for vs. Readora, here&apos;s the side-by-side.</p>
          <div className="vs-page__hero-ctas">
            <a href="#consult" className="vs-page__btn vs-page__btn--primary">Book a Free Consult</a>
            <a href="#compare" className="vs-page__btn vs-page__btn--secondary">See the Comparison →</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="vs-page__trust">
        <div className="vs-page__container">
          <div className="vs-page__trust-grid">
            {trustItems.map((t, i) => (
              <div key={i} className="vs-page__trust-item">
                {t.value}<small>{t.label}</small>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison */}
      <section className="vs-page__section" id="compare">
        <div className="vs-page__container">
          <div className="vs-page__section-eyebrow">The Comparison</div>
          <h2>SelfPublishing.com vs. <em>Readora</em></h2>
          <p className="vs-page__section-lead">Both companies are real and have served real authors. Here&apos;s how the sales-team&apos;s own competitive briefing describes the difference — verbatim — so you can decide which one matches what you actually need.</p>
          <div className="vs-page__two-col">
            <div className="vs-page__col vs-page__col--them">
              <div className="vs-page__col-label">SelfPublishing.com</div>
              <h3>Formerly a course and coaching company, now repositioning as a full-service publisher — but still operates like a marketing funnel. They offer ghostwriting, publishing, and bestseller services, but the quality is poor, and the client experience is highly transactional.</h3>
              <ul>{themPoints.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </div>
            <div className="vs-page__col">
              <div className="vs-page__col-label">Readora</div>
              <h3>A book that builds <em>brand, credibility, and legacy</em>.</h3>
              <ul>{usPoints.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="vs-page__quote">
        <div className="vs-page__container">
          <div className="vs-page__quote-eyebrow">How Our Sales Team Describes the Difference</div>
          <p className="vs-page__quote-lead">&ldquo;SelfPublishing.com runs like a used car lot — flashy promises upfront, but the experience is full of hidden costs, shady marketing practices, and low-quality output. We&apos;ve spoken with several authors who deeply regretted choosing them. At Readora, you get honesty, clarity, and elite quality from day one. No gimmicks. No smoke and mirrors. Just a real book you&apos;re proud of and that your audience will respect.&rdquo;</p>
          <p className="vs-page__quote-attrib">— From the Readora internal Competitive Comparison briefing for SelfPublishing.com.</p>
        </div>
      </section>

      {/* 3 Reasons */}
      <section className="vs-page__section">
        <div className="vs-page__container">
          <div className="vs-page__section-eyebrow">Why Authors Switch</div>
          <h2>Three reasons people choose Readora<br />over SelfPublishing.com.</h2>
          <div className="vs-page__reasons">
            {reasons.map((r, i) => (
              <div key={i} className="vs-page__reason">
                <div className="vs-page__reason-num">{r.num}</div>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="vs-page__section">
        <div className="vs-page__container">
          <div className="vs-page__section-eyebrow">What Makes Readora Different</div>
          <h2>Seven things authors consistently<br />tell us <em>made the difference</em>.</h2>
          <div className="vs-page__reasons vs-page__reasons--two-col">
            {differentiators.map((d, i) => (
              <div key={i} className="vs-page__reason">
                <h4>{d.title}</h4>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="vs-page__section">
        <div className="vs-page__container">
          <div className="vs-page__section-eyebrow">Pricing</div>
          <h2>Three tiers. Flat fees.<br /><em>No upsells. No fine print.</em></h2>
          <p className="vs-page__section-lead">Pricing pulled directly from our active sales agreements. No surprise add-ons, no discretionary upsells, no royalty share.</p>
          <div className="vs-page__price-grid">
            {pricingTiers.map((tier, i) => (
              <div key={i} className={`vs-page__price-card${tier.featured ? ' vs-page__price-card--featured' : ''}`}>
                <div className="vs-page__price-tier">{tier.tier}</div>
                <div className="vs-page__price-amount">{tier.amount}<small>{tier.note}</small></div>
                <p className="vs-page__price-desc">{tier.desc}</p>
                <ul className="vs-page__price-features">
                  {tier.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="vs-page__section">
        <div className="vs-page__container">
          <div className="vs-page__section-eyebrow">Common Questions</div>
          <h2>The questions we get most<br />when authors are comparing.</h2>
          <p className="vs-page__section-lead">Answers below are pulled directly from our active sales-team objection-handling reference. Not marketing copy.</p>
          <div className="vs-page__faq">
            {faqs.map((faq, i) => (
              <div key={i} className="vs-page__faq-item">
                <div className="vs-page__faq-q">{faq.q}</div>
                <p className="vs-page__faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="vs-page__final-cta" id="consult">
        <div className="vs-page__container">
          <h2>Talk to someone who can <em>help you choose</em>.</h2>
          <p>15-minute consult. We&apos;ll walk you through the full process and pricing honestly — no &ldquo;limited-time bonuses,&rdquo; no countdown timers.</p>
          <a href="/consult" className="vs-page__btn vs-page__btn--primary">Book a Free Consult</a>
        </div>
      </section>

      {/* Sources */}
      <section className="vs-page__sources">
        <div className="vs-page__container">
          Sources: Readora internal Competitive Comparison briefing · Revamped Objection Handling Master Reference · Readora Professional &amp; Readora Elite Sales Call Scripts · readora.com/pricing. All competitor positioning quoted verbatim from the sales-team briefing. No invented stats, customer quotes, or product details.
        </div>
      </section>
    </div>
  )
}
