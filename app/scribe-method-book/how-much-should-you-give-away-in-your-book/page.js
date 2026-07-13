import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How Much Should You "Give Away" In Your Book? The Question Of Advertorial Vs. Editorial Content | The Readora Method | Readora',
  description: 'Learn how to balance genuine educational value with business promotion in your book — and why being too promotional will kill your book\'s impact.',
}

export default function GiveAwayInBookPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Readora Method</a>
          <p className="chapter__part">PART 9: REFERENCE MATERIAL</p>
          <p className="chapter__num">Chapter 40</p>
          <h1 className="chapter__title">How Much Should You &quot;Give Away&quot; In Your Book? The Question Of Advertorial Vs. Editorial Content</h1>
          <div className="chapter__content">
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/whats-the-intangible-impact-of-a-book" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">What&apos;s The (Intangible) Impact Of A Book?</span>
            </a>
            <a href="/scribe-method-book/how-much-of-your-story-should-be-in-your-book" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">How Much Of Your Story Should Be In Your Book?</span>
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
