import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Everything You Need To Know About Self-Publishing Book Distribution | The Scribe Method | Scribe Media',
  description: 'Learn how self-publishing book distribution works, which platforms to use, and how to get your book into the hands of as many readers as possible.',
}

export default function BookDistributionPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Scribe Method</a>
          <p className="chapter__part">PART 8: PUBLISH YOUR BOOK</p>
          <p className="chapter__num">Chapter 33</p>
          <h1 className="chapter__title">Everything You Need To Know About Self-Publishing Book Distribution</h1>
          <div className="chapter__content">
            <p>Writing and producing your book is only half the battle. Getting it into the hands of readers requires understanding distribution—where your book is sold, in what formats, and through which channels. The good news: self-publishing distribution has never been easier or more far-reaching.</p>

            <h2>The Two Main Distribution Models</h2>

            <h3>Exclusive Distribution (Amazon KDP Select)</h3>
            <p>Amazon&apos;s KDP Select program requires that your eBook be sold exclusively on Amazon for 90-day periods. In exchange, you get access to Kindle Unlimited (where readers pay a subscription and you earn per page read), promotional tools like Kindle Countdown Deals, and occasionally higher visibility in Amazon&apos;s algorithm.</p>
            <p><strong>Best for:</strong> Authors whose audience lives primarily on Amazon, or those just starting out who want to simplify their distribution strategy.</p>

            <h3>Wide Distribution</h3>
            <p>Wide distribution means publishing your eBook across multiple platforms simultaneously: Amazon, Apple Books, Barnes &amp; Noble, Kobo, Google Play, and more. You lose access to KDP Select perks, but you reach readers who don&apos;t use Amazon.</p>
            <p><strong>Best for:</strong> Authors with an existing audience on multiple platforms, or those targeting international readers (Kobo is dominant in Canada; Apple Books is strong in Europe).</p>

            <h2>Key Distribution Platforms</h2>

            <h3>Amazon KDP</h3>
            <p>The dominant platform for self-published authors. Handles eBook and print-on-demand paperback distribution. Free to use; Amazon takes a percentage of each sale. Almost every self-published author should publish on KDP regardless of other distribution choices.</p>

            <h3>IngramSpark</h3>
            <p>IngramSpark is the most powerful tool for getting your print book into physical bookstores and libraries. Ingram is the largest book wholesaler in the world—most independent bookstores and libraries order from Ingram&apos;s catalog. There is a small setup fee, but the reach is unmatched.</p>
            <p>If bookstore placement matters to you, IngramSpark is essential.</p>

            <h3>Draft2Digital</h3>
            <p>Draft2Digital (D2D) simplifies wide distribution by publishing your eBook to Apple Books, Barnes &amp; Noble, Kobo, Scribd, and others from a single dashboard. Free to use; D2D takes 10% of each sale. Much easier than managing each platform separately.</p>

            <h3>Findaway Voices (now Spotify for Podcasters/Authors)</h3>
            <p>For audiobooks, Findaway Voices distributes to a wide network of platforms including Audible, Apple Books, Chirp, and libraries. ACX (Audible&apos;s creation exchange) is the alternative if you&apos;re willing to be exclusive to Audible.</p>

            <h2>Print-on-Demand vs. Offset Printing</h2>
            <p><strong>Print-on-demand (POD):</strong> Books are printed individually as orders come in. No inventory risk, no upfront print costs. Amazon KDP and IngramSpark both offer POD. Per-unit cost is higher, but you never have boxes of unsold books in your garage.</p>
            <p><strong>Offset printing:</strong> Printing a large batch (500–5,000+ copies) at a much lower per-unit cost. Makes sense if you&apos;re selling bulk copies directly (corporate sales, back-of-room at events) or if your print volume justifies the investment.</p>

            <h2>Library Distribution</h2>
            <p>To get your book in libraries, use IngramSpark (print) and OverDrive or Bibliotheca (eBooks). Library distribution rarely generates significant revenue for self-published authors, but it adds credibility and discoverability.</p>

            <h2>Final Thoughts</h2>
            <p>Most self-published authors should start with Amazon KDP for print and eBook, then add IngramSpark for print distribution to bookstores, and use Draft2Digital for wide eBook distribution. From there, optimize based on where your readers actually buy books.</p>
            <p>Get a <strong>free online copy of <em>The Scribe Method</em></strong>{' '}
              <a href="https://scribemedia.com/hubfs/scribe-method/The-Scribe-Method-Book.pdf" target="_blank" rel="noopener noreferrer">here</a>
              {' '}or <strong>purchase a hard copy</strong>{' '}
              <a href="https://amzn.to/3P14NjR" target="_blank" rel="noopener noreferrer">here</a>!
            </p>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/how-much-does-it-cost-to-self-publish-a-book" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How Much Does It Cost to Self Publish A Book?</span>
            </a>
            <a href="/scribe-method-book/how-to-write-a-nonfiction-book-proposal-with-template" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">How To Write a Nonfiction Book Proposal (With Template)</span>
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
