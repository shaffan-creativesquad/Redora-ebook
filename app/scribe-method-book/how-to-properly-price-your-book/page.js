import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How To Properly Price Your Book | The Scribe Method | Scribe Media',
  description: 'Learn how to price your book strategically for print, ebook, and audiobook formats to maximize both sales and revenue.',
}

export default function BookPricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Scribe Method</a>
          <p className="chapter__part">PART 7: DESIGN YOUR BOOK</p>
          <p className="chapter__num">Chapter 30</p>
          <h1 className="chapter__title">How To Properly Price Your Book</h1>
          <div className="chapter__content">
            <p>Pricing your book is more strategic than it might seem. Price too high and you lose readers who won&apos;t take a chance on an unfamiliar author. Price too low and you signal low value—or leave significant royalty revenue on the table. The goal is to price in a way that maximizes the number of readers who buy while also respecting the value you&apos;ve created.</p>

            <h2>The Three Formats and Their Pricing Norms</h2>

            <h3>Paperback</h3>
            <p>Standard nonfiction paperbacks typically price between $14.99 and $19.99. Below $12.99, buyers may perceive the book as low quality. Above $22.99, you&apos;re competing with hardcovers and may lose impulse buyers. Research what comparable books in your category sell for and price within that range.</p>

            <h3>Hardcover</h3>
            <p>Hardcovers typically price between $24.99 and $34.99. Hardcovers signal prestige and are preferred by gift buyers and institutional buyers (libraries, corporate bulk orders). If you&apos;re publishing in a professional or business category, a hardcover edition can significantly increase perceived authority.</p>

            <h3>eBook</h3>
            <p>eBook pricing has the widest range. Common strategies include:</p>
            <ul>
              <li><strong>$0.99–$2.99:</strong> Aggressive pricing to maximize downloads and reviews; works well for first-in-series or when building an audience</li>
              <li><strong>$4.99–$9.99:</strong> The sweet spot for most nonfiction eBooks—affordable enough for impulse buyers, priced high enough to signal value</li>
              <li><strong>$9.99+:</strong> Appropriate for premium, high-information books with a professional or business audience</li>
            </ul>
            <p>On Amazon KDP, the 70% royalty rate applies to eBooks priced between $2.99 and $9.99. Outside that range, the royalty drops to 35%.</p>

            <h3>Audiobook</h3>
            <p>If you distribute through ACX/Audible, Amazon sets the price based on length. Focus your energy on the quality of the narration—a well-produced audiobook in the right category can reach a large audience of commuters and multitaskers who rarely buy print books.</p>

            <h2>Factors That Influence Your Pricing Decision</h2>
            <ul>
              <li><strong>Your audience:</strong> A book for executives can command higher prices than one for general consumers</li>
              <li><strong>Your goals:</strong> Maximizing royalties vs. maximizing readership require different strategies</li>
              <li><strong>Competitive landscape:</strong> What are the top 20 books in your category priced at?</li>
              <li><strong>Print costs:</strong> On Amazon KDP, printing costs are deducted from your royalty. Price too low and you get almost nothing per sale</li>
            </ul>

            <h2>Launch Pricing Strategy</h2>
            <p>Many authors discount their eBook at launch (or make it free for a limited time) to drive volume, generate reviews, and boost rankings. This can be effective if you have an email list or audience to activate. After the launch window, raise the price to its permanent level.</p>

            <h2>Final Thoughts</h2>
            <p>Price is a signal, not just a number. Whatever you choose, own it confidently. Underpricing out of insecurity costs you money and credibility. Price your book based on its value—and deliver that value so completely that readers never question the cost.</p>
            <p>Get a <strong>free online copy of <em>The Scribe Method</em></strong>{' '}
              <a href="https://scribemedia.com/hubfs/scribe-method/The-Scribe-Method-Book.pdf" target="_blank" rel="noopener noreferrer">here</a>
              {' '}or <strong>purchase a hard copy</strong>{' '}
              <a href="https://amzn.to/3P14NjR" target="_blank" rel="noopener noreferrer">here</a>!
            </p>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/design-your-book-layout" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">Design Your Book Layout</span>
            </a>
            <a href="/scribe-method-book/how-to-pick-the-right-book-publishing-option" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">How To Pick The Right Book Publishing Options</span>
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
