import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Everything You Need To Know About Self-Publishing Book Distribution | The Readora Method | Readora',
  description: 'Learn how self-publishing book distribution works, which platforms to use, and how to get your book into the hands of as many readers as possible.',
}

export default function BookDistributionPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/readora-method-book" className="chapter__back">← The Readora Method</a>
          <p className="chapter__part">PART 8: PUBLISH YOUR BOOK</p>
          <p className="chapter__num">Chapter 33</p>
          <h1 className="chapter__title">Everything You Need To Know About Self-Publishing Book Distribution</h1>
          <div className="chapter__content">
          </div>

          <div className="chapter__nav">
            <a href="/readora-method-book/how-much-does-it-cost-to-self-publish-a-book" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How Much Does It Cost to Self Publish A Book?</span>
            </a>
            <a href="/readora-method-book/how-to-write-a-nonfiction-book-proposal-with-template" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">How To Write a Nonfiction Book Proposal (With Template)</span>
            </a>
          </div>

          <div className="chapter__cta-section">
            <h2 className="chapter__cta-title">Want Help Writing Your Book?</h2>
            <p className="chapter__cta-text">Readora has helped 2,000+ authors turn their ideas into published books. Schedule a free consult.</p>
            <a href="/consult" className="chapter__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
