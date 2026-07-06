import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How Much Does It Cost to Self Publish A Book? | The Scribe Method | Scribe Media',
  description: 'Get a realistic breakdown of self-publishing costs — from editing and design to distribution — so you can budget for your book project.',
}

export default function SelfPublishCostPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Scribe Method</a>
          <p className="chapter__part">PART 8: PUBLISH YOUR BOOK</p>
          <p className="chapter__num">Chapter 32</p>
          <h1 className="chapter__title">How Much Does It Cost to Self Publish A Book?</h1>
          <div className="chapter__content">
            <p>Self-publishing costs can range from a few hundred dollars to tens of thousands, depending on how much you do yourself versus outsource to professionals. Understanding the real costs upfront helps you plan a realistic budget—and avoid the shortcuts that undermine your book&apos;s quality.</p>

            <h2>The Core Costs of Self-Publishing</h2>

            <h3>Editing</h3>
            <p>Editing is the single most important investment in your book&apos;s quality. There are three main types:</p>
            <ul>
              <li><strong>Developmental editing</strong> (structure, content, flow): $1,000–$5,000+</li>
              <li><strong>Copyediting</strong> (grammar, style, consistency): $500–$2,000</li>
              <li><strong>Proofreading</strong> (final error check after layout): $200–$600</li>
            </ul>
            <p>Most authors working on a 60,000-word nonfiction book should budget $1,500–$4,000 for editing depending on how much they do themselves.</p>

            <h3>Cover Design</h3>
            <p>A professional book cover typically costs $300–$1,500, depending on the designer&apos;s experience and the complexity of the design. Do not cut corners here—your cover is your primary marketing asset.</p>

            <h3>Interior Layout</h3>
            <p>Professional typesetting and layout: $200–$800. If you use Vellum (Mac software), the one-time cost is around $250 and you can format unlimited books yourself.</p>

            <h3>ISBN</h3>
            <p>In the US, ISBNs are purchased through Bowker. A single ISBN costs $125; a package of 10 costs $295. If you publish only on Amazon KDP with a free ASIN, you can skip this—but if you plan to distribute widely, having your own ISBN is important.</p>

            <h3>Copyright Registration</h3>
            <p>Optional but recommended. Registering your copyright with the US Copyright Office costs $45–$65 and gives you legal protections in the event of infringement.</p>

            <h3>Author Photo</h3>
            <p>A professional headshot session typically costs $150–$500.</p>

            <h3>Marketing and Launch</h3>
            <p>Launch costs vary widely. Common expenses include:</p>
            <ul>
              <li>Amazon advertising: $200–$1,000+/month</li>
              <li>Advanced Reader Copy (ARC) distribution services: $50–$300</li>
              <li>A book launch website or landing page: $100–$500</li>
              <li>Email marketing software: $20–$100/month</li>
            </ul>

            <h2>Total Estimated Budget Ranges</h2>
            <ul>
              <li><strong>Minimum viable (DIY everything possible):</strong> $500–$1,500</li>
              <li><strong>Mid-range (professional editing + design):</strong> $3,000–$6,000</li>
              <li><strong>Full professional production:</strong> $8,000–$15,000+</li>
            </ul>

            <h2>Where NOT to Cut Costs</h2>
            <p>Editing and cover design are the two areas where cutting costs most visibly hurts your book. Readers may not know why a book feels poorly written or the cover looks off—but they&apos;ll feel it, and it will affect their purchasing decisions and reviews.</p>

            <h2>Final Thoughts</h2>
            <p>Self-publishing is a business investment. The authors who produce professional-quality books—and invest appropriately in making them great—consistently outperform those who try to minimize every cost. Budget wisely, prioritize quality, and treat your book like the asset it can become.</p>
            <p>Get a <strong>free online copy of <em>The Scribe Method</em></strong>{' '}
              <a href="https://scribemedia.com/hubfs/scribe-method/The-Scribe-Method-Book.pdf" target="_blank" rel="noopener noreferrer">here</a>
              {' '}or <strong>purchase a hard copy</strong>{' '}
              <a href="/consult" target="_blank" rel="noopener noreferrer">here</a>!
            </p>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/how-to-pick-the-right-book-publishing-option" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How To Pick The Right Book Publishing Options</span>
            </a>
            <a href="/scribe-method-book/everything-you-need-to-know-about-self-publishing-book-distribution" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">Everything You Need To Know About Self-Publishing Book Distribution</span>
            </a>
          </div>

          <div className="chapter__cta-section">
            <h2 className="chapter__cta-title">Want Help Writing Your Book?</h2>
            <p className="chapter__cta-text">Scribe has helped 2,000+ authors turn their ideas into published books. Schedule a free consult.</p>
            <a href="/consult" className="chapter__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
