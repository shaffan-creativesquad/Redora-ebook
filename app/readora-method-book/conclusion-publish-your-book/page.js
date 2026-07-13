import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Conclusion: Publish Your Book | The Readora Method | Readora',
  description: 'The final step in The Readora Method — a celebration of what you\'ve accomplished and a clear path to publishing your book.',
}

export default function ConclusionPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/readora-method-book" className="chapter__back">← The Readora Method</a>
          <p className="chapter__part">PART 8: PUBLISH YOUR BOOK</p>
          <p className="chapter__num">Chapter 35</p>
          <h1 className="chapter__title">Conclusion: Publish Your Book</h1>
          <div className="chapter__content">
          </div>

          <div className="chapter__nav">
            <a href="/readora-method-book/how-to-write-a-nonfiction-book-proposal-with-template" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How To Write a Nonfiction Book Proposal (With Template)</span>
            </a>
            <a href="/readora-method-book/realistic-and-unrealistic-expectations-for-a-book" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">Realistic and Unrealistic Expectations For a Book</span>
            </a>
          </div>

          <div className="chapter__cta-section">
            <h2 className="chapter__cta-title">Ready to Publish Your Book?</h2>
            <p className="chapter__cta-text">Readora has helped 2,000+ authors turn their ideas into published books. Schedule a free consult.</p>
            <a href="/consult" className="chapter__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
