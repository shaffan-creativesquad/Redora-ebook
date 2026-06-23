const processItems = [
  {
    title: 'Legal and compliance integration',
    desc: 'We work with your legal and compliance teams to ensure your book meets all corporate requirements and approvals.',
  },
  {
    title: 'Strategy and positioning',
    desc: "We define your book's purpose, target audience, and key messaging, ensuring strategic alignment with your company's brand and goals.",
  },
  {
    title: 'Interview-based writing',
    desc: 'No need to write a single word. Our expert writers interview your team and craft a compelling book in your voice.',
  },
  {
    title: 'Professional publishing',
    desc: 'From editing and cover design to distribution, we ensure your book meets the highest traditional publishing standards.',
  },
  {
    title: 'Marketing and distribution',
    desc: 'Your book reaches the right audience through global distribution channels, strategic marketing, and PR support.',
  },
]

const benefits = [
  {
    title: 'Establish authority and credibility',
    desc: 'Position your company as the trusted expert in your industry.',
  },
  {
    title: 'Drive business growth',
    desc: 'Generate leads, land speaking engagements, and open new revenue opportunities.',
  },
  {
    title: 'Build thought leadership',
    desc: "Share your brand's insights and vision in a way that leaves a lasting impact.",
  },
  {
    title: 'Create a timeless asset',
    desc: "Unlike digital content, a book continues to grow your brand's influence for years.",
  },
]

const logos = [
  { src: '/assets/eos.png', alt: 'EOS logo' },
  { src: '/assets/google-logo.png', alt: 'Google logo' },
  { src: '/assets/chipotle.png', alt: 'Chipotle logo' },
  { src: '/assets/ubs.png', alt: 'UBS logo' },
]

export default function ScribeBooksForBrands() {
  return (
    <div className="bfb">
      {/* Hero */}
      <div className="bfb__hero">
        <h1>Your brand has a story. We help you tell it.</h1>
        <p>Your brand&apos;s knowledge, insights, and vision deserve to be shared. A book is the most powerful way to elevate your brand&apos;s authority, create lasting impact, and connect with your audience in a meaningful way.</p>
        <p>At Scribe, we partner with corporate brands to turn their knowledge into professionally published books without disrupting business operations. From strategy to distribution, we handle everything.</p>
        <a href="#" className="bfb__cta-btn">Get Started</a>
      </div>

      {/* Trusted Logos */}
      <div className="bfb__logos-section">
        <h2>Trusted by Leading Companies</h2>
        <p>We&apos;ve helped top brands create books that drive thought leadership, build credibility, and unlock new opportunities. Our corporate publishing clients include:</p>
        <div className="bfb__logos-grid">
          {logos.map((logo, i) => (
            <div key={i} className="bfb__logo-card">
              <img src={logo.src} alt={logo.alt} width={240} height={80} />
            </div>
          ))}
        </div>
      </div>

      {/* The Scribe Process */}
      <div className="bfb__section bfb__section--alt">
        <h2>The Scribe process for corporate thought leadership.</h2>
        <p className="subtitle">We make book publishing effortless for corporate leaders, entrepreneurs, and executives.</p>
        <div className="bfb__process-grid">
          {processItems.map((item, i) => (
            <div key={i} className="bfb__process-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Brands */}
      <div className="bfb__section">
        <h2>Why brands publish books with Scribe</h2>
        <div className="bfb__benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="bfb__benefit">
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bfb__bottom-cta">
        <h2>Start your brand&apos;s publishing journey</h2>
        <p>Schedule a free consultation with our publishing strategists to discuss your brand&apos;s book.</p>
        <a href="#" className="bfb__cta-btn">Schedule a Consult</a>
      </div>
    </div>
  )
}
