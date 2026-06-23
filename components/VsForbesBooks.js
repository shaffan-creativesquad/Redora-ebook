const trustItems = [
  { value: '3,000+', label: 'Authors Published' },
  { value: '250,000+', label: 'Books in Print' },
  { value: '100%', label: 'Author Ownership' },
  { value: '10+', label: 'Years in Business' },
  { value: 'Navy SEALs · Billionaires · Nobel Winners', label: 'Authors' },
]

const themPoints = [
  'Pay-to-play licensing of the Forbes brand',
  'Quoted prices have ranged from ~$120,000 up to $240,000 for past authors',
  'Recently rebranded to "The Authority Company"',
  'Restricted to ~50 titles per year, application/recommendation required',
  'Author content NOT distributed through real Forbes channels',
]

const usPoints = [
  'Flat fees: $29K Publishing · $56K Professional · $135K Elite — no licensing premium',
  '100% author IP, royalties, and rights — Scribe takes no royalties',
  'Credibility earned through editorial quality, not borrowed from a logo',
  'Editorial team with Big 5 traditional publishing credits and MFAs',
  '3,000+ authors published — Navy SEALs, billionaires, Nobel Prize winners',
]

const reasons = [
  {
    num: '01',
    title: 'Borrowed credibility wears off fast.',
    desc: 'A logo on the cover gets you about as far as a Forbes Contributor byline — savvy audiences (clients, board chairs, conference bookers) know what it is. A real book speaks for itself.',
  },
  {
    num: '02',
    title: 'You get the team — not the turnover.',
    desc: "We've heard from authors who cycled through 3 writers, 3 editors, and 3 account executives at Forbes Books before their book was done. At Scribe, you pick your scribe from a shortlist of 3 senior writers, and you keep them.",
  },
  {
    num: '03',
    title: 'No misspellings on the cover.',
    desc: "We've heard real stories of Forbes Books shipping covers with the title misspelled — after the author approved the correct galley — for 6 months on Amazon. Our QA process is built so that cannot happen.",
  },
]

const forbesPatterns = [
  {
    num: '01',
    title: 'Misspelled title on the cover.',
    desc: 'One author approved the final galley — title spelled correctly. The book that shipped to Amazon had the title misspelled on the cover. Amazon distributed misspelled copies for 6 months while Forbes Books kept saying the issue was fixed.',
  },
  {
    num: '02',
    title: 'Three writers. Three editors. Three account execs.',
    desc: 'Massive turnover during a single book project. The same author told us they cycled through three of each role — and eventually wrote the book themselves because the third writer was no better than the first.',
  },
  {
    num: '03',
    title: 'Citations and graphics scrambled.',
    desc: '140 citations with wrong numbers assigned. A central thesis graphic with categories mismatched to descriptions. Grammatical errors throughout. The author called it "lipstick on a pig."',
  },
  {
    num: '04',
    title: '"Stop texting me, I\'m going to have a panic attack."',
    desc: 'Direct quote from a Forbes Books Chief Publishing Officer to an author who was reporting the production issues above.',
  },
  {
    num: '05',
    title: 'The "Forbes" PR is mostly fake news.',
    desc: 'Forbes Books promises "Author\'s Voice" articles that look like Forbes content — they live at forbes.com/authorsvoice and are not distributed through real Forbes editorial channels. Authors are routinely surprised to learn this only after paying.',
  },
  {
    num: '06',
    title: 'Initial quote $240K. Paid $206K. Demand letter for $114K.',
    desc: 'One author paid $206,000 upfront for Forbes Books on an initial quote of $240,000. After delivery, they sent a demand letter for $114,000 — even after Forbes Books had already reimbursed them $30,000.',
  },
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
    tier: 'Scribe Publishing',
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
    tier: 'Scribe Professional',
    amount: '$56,000',
    note: 'flat · 12 months',
    desc: "Our flagship — chosen by ~80% of authors. You don't write a word. We pair you with a senior scribe and capture your voice through structured interviews.",
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
    tier: 'Scribe Elite',
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
    a: "9–12 months for Scribe Professional. 12–16 months for Scribe Elite. We won't lie to you about timelines just to close a deal. Our timeline reflects what it takes to do this right the first time, and our most successful authors will tell you they're grateful they didn't settle for faster.",
  },
  {
    q: 'What about the Scribe 1.0 issues I read about?',
    a: "New ownership and leadership took over in 2023 and made structural improvements across the board — financial oversight (we have a CFO now), governance (board meets weekly), transparency (weekly cash flow reporting), and installment-based payment structures so you see progress before making additional payments. We've now published approximately 120 books for affected authors at cost. Full transparency about what happened — happy to walk through it on a call.",
  },
]

export default function VsForbesBooks() {
  return (
    <div className="vs-page">
      {/* Hero */}
      <section className="vs-page__hero">
        <div className="vs-page__container">
          <span className="vs-page__eyebrow">Forbes Books Alternative</span>
          <h1>You can buy a <em>logo</em>.<br />Or you can build <em>credibility</em>.</h1>
          <p className="vs-page__subhead">Forbes Books (now &ldquo;The Authority Company&rdquo;) sells the right to associate with the Forbes brand. Scribe builds the kind of book that earns credibility on its own. If you&apos;re choosing between us, here&apos;s what every prospective Forbes author should know first.</p>
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
          <h2>Forbes Books vs. <em>Scribe Media</em></h2>
          <p className="vs-page__section-lead">Both companies are real and have served real authors. Here&apos;s how the sales-team&apos;s own competitive briefing describes the difference — verbatim — so you can decide which one matches what you actually need.</p>
          <div className="vs-page__two-col">
            <div className="vs-page__col vs-page__col--them">
              <div className="vs-page__col-label">Forbes Books</div>
              <h3>Pay-to-play partnership with the Forbes brand. Authors pay for the right to be associated with the Forbes name, plus limited publishing and PR.</h3>
              <ul>{themPoints.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </div>
            <div className="vs-page__col">
              <div className="vs-page__col-label">Scribe Media</div>
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
          <p className="vs-page__quote-lead">&ldquo;Anyone can pay to slap the Forbes logo on their book. But savvy audiences can smell that a mile away. With Scribe, you earn credibility through quality, thought leadership, and truly original work — not licensing. We don&apos;t sell logos — we build legacies.&rdquo;</p>
          <p className="vs-page__quote-attrib">— From the Scribe Media internal Competitive Comparison briefing for Forbes Books.</p>
        </div>
      </section>

      {/* 3 Reasons */}
      <section className="vs-page__section">
        <div className="vs-page__container">
          <div className="vs-page__section-eyebrow">Why Authors Switch</div>
          <h2>Three reasons people choose Scribe<br />over Forbes Books.</h2>
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

      {/* Forbes-specific: anonymized author failure patterns */}
      <section className="vs-page__section">
        <div className="vs-page__container">
          <div className="vs-page__section-eyebrow">What We&apos;ve Heard From Forbes Authors</div>
          <h2>Real patterns from authors who chose Forbes Books<br /><em>— and later wished they hadn&apos;t.</em></h2>
          <p className="vs-page__section-lead">These are anonymized patterns we&apos;ve heard directly from authors who paid Forbes Books and then sought us out. Names withheld. We share them because we believe the prospect deciding between Forbes Books and Scribe deserves a real look at what we&apos;ve seen.</p>
          <div className="vs-page__reasons">
            {forbesPatterns.slice(0, 3).map((p, i) => (
              <div key={i} className="vs-page__reason">
                <div className="vs-page__reason-num">{p.num}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="vs-page__reasons" style={{ marginTop: '24px' }}>
            {forbesPatterns.slice(3).map((p, i) => (
              <div key={i} className="vs-page__reason">
                <div className="vs-page__reason-num">{p.num}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="vs-page__section-lead" style={{ marginTop: '48px', fontSize: '1rem' }}>If you are seriously evaluating Forbes Books, mention this on our consult. There are authors who paid them, lived through it, and have offered to talk to people in your shoes before they sign.</p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="vs-page__section">
        <div className="vs-page__container">
          <div className="vs-page__section-eyebrow">What Makes Scribe Different</div>
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
          <p>15-minute consult. No pressure. If you&apos;re seriously evaluating Forbes Books, we&apos;ll honestly walk you through what to ask them.</p>
          <a href="/consult" className="vs-page__btn vs-page__btn--primary">Book a Free Consult</a>
        </div>
      </section>

      {/* Sources */}
      <section className="vs-page__sources">
        <div className="vs-page__container">
          Sources: Scribe Media internal Competitive Comparison briefing · Revamped Objection Handling Master Reference · Scribe Professional &amp; Scribe Elite Sales Call Scripts · scribemedia.com/pricing. All competitor positioning quoted verbatim from the sales-team briefing. No invented stats, customer quotes, or product details.
        </div>
      </section>
    </div>
  )
}
